set -e

# ==========================================
# 0. 사전 검증 (환경 변수 누락 방지)
# ==========================================
if [ -z "$DATABASE_URL" ]; then
  echo "❌ 에러: DATABASE_URL 환경 변수가 설정되지 않았습니다."
  echo "실행 전 'export DATABASE_URL=\"postgresql://...\"'을 입력해주세요."
  exit 1
fi

# ==========================================
# 1. 대상 애플리케이션 및 환경 변수 설정
# ==========================================
APP_NAME="api" # 대상 앱 (추후 web 배포 시 파라미터화 가능)
PROJECT_NAME="copanion"
ENVIRONMENT=${1:-"dev"}
LOCATION_ABBR="krc"
RESOURCE_GROUP="rg-${PROJECT_NAME}-${ENVIRONMENT}-koreacentral-01"

# 앞서 정의한 모듈 내부 캡슐화 네이밍 컨벤션에 따른 리소스 이름 역추산
ACR_NAME="cr${PROJECT_NAME}${ENVIRONMENT}${LOCATION_ABBR}01"
ACA_NAME="ca-${PROJECT_NAME}-${APP_NAME}-${ENVIRONMENT}-${LOCATION_ABBR}-01"
CAE_NAME="cae-${PROJECT_NAME}-${ENVIRONMENT}-${LOCATION_ABBR}-01" # Container Apps Environment
ACR_LOGIN_SERVER="${ACR_NAME}.azurecr.io"

# Git 커밋 해시를 도커 이미지 태그로 사용하여 버전 관리 추적성 확보
IMAGE_TAG=$(git rev-parse --short HEAD)
IMAGE_NAME="${ACR_LOGIN_SERVER}/${APP_NAME}:${IMAGE_TAG}"

echo "=========================================="
echo "애플리케이션 배포 시작 ($APP_NAME)"
echo "대상 컨테이너 앱: $ACA_NAME"
echo "이미지 태그: $IMAGE_TAG"
echo "=========================================="

# ==========================================
# 2. ACR 로그인
# ==========================================
echo "1. Azure Container Registry 로그인 중..."
az acr login --name $ACR_NAME

# ==========================================
# 3. Docker 이미지 빌드 (모노레포 루트 컨텍스트 유지)
# ==========================================
echo "2. pnpm 워크스페이스 환경에서 도커 이미지 빌드 중..."
# 스크립트가 co-panion/infra/scripts 경로에 있다고 가정하고 루트(../..)로 이동
cd ../../
docker build -f apps/$APP_NAME/Dockerfile -t $IMAGE_NAME .

# ==========================================
# 4. ACR로 이미지 푸시
# ==========================================
echo "3. ACR로 빌드된 이미지 업로드 중..."
docker push $IMAGE_NAME

# ==========================================
# 5. [신규 추가] 데이터베이스 스키마 마이그레이션 (ACA Job)
# ==========================================
echo "4. 데이터베이스 스키마 마이그레이션 (ACA Job) 실행 중..."

JOB_NAME="job-prisma-migrate-${APP_NAME}"

# 5-1. 기존에 같은 이름의 Job이 있다면 삭제 (초기화)
az containerapp job delete \
  --name $JOB_NAME \
  --resource-group $RESOURCE_GROUP \
  --yes || true

# 5-2. 방금 푸시한 새 이미지를 사용하여 마이그레이션용 Job 생성
az containerapp job create \
  --name $JOB_NAME \
  --resource-group $RESOURCE_GROUP \
  --environment $CAE_NAME \
  --trigger-type Manual \
  --replica-timeout 300 \
  --replica-retry-limit 1 \
  --image $IMAGE_NAME \
  --cpu "0.25" \
  --memory "0.5Gi" \
  --env-vars "DATABASE_URL=secretref:db-url" \
  --secrets "db-url=$DATABASE_URL" \
  --command "sh" "-c" "pnpm --filter $APP_NAME prisma migrate deploy"

# 5-3. 마이그레이션 Job 실행 트리거
EXECUTION_ID=$(az containerapp job start \
  --name $JOB_NAME \
  --resource-group $RESOURCE_GROUP \
  --query "name" -o tsv)

# 5-4. Job 완료 대기 (성공 여부 폴링)
status="Running"
while [ "$status" != "Succeeded" ] && [ "$status" != "Failed" ]; do
  sleep 10
  status=$(az containerapp job execution show \
    --name $JOB_NAME \
    --resource-group $RESOURCE_GROUP \
    --execution-name $EXECUTION_ID \
    --query "properties.status" -o tsv)
  echo "   - 현재 상태: $status..."
done

if [ "$status" == "Failed" ]; do
  echo "❌ 마이그레이션 실패. 배포 파이프라인을 즉시 중단합니다."
  exit 1 
fi
echo "✅ 마이그레이션 성공!"

# ==========================================
# 6. ACA 업데이트 및 새 리비전 배포
# ==========================================
echo "4. Azure Container Apps 새 리비전 배포 중..."
az containerapp update \
  --name $ACA_NAME \
  --resource-group $RESOURCE_GROUP \
  --image $IMAGE_NAME

echo "배포가 성공적으로 완료되었습니다."