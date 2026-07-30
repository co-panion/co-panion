# 스크립트 실행 중 오류 발생 시 즉시 종료
set -e

# ==========================================
# 1. 환경 변수 설정
# ==========================================
PROJECT_NAME="copanion"
ENVIRONMENT=${1:-"dev"} # 첫 번째 인자로 환경(dev/prod)을 받으며, 기본값은 dev
LOCATION="koreacentral"
RESOURCE_GROUP="rg-${PROJECT_NAME}-${ENVIRONMENT}-${LOCATION}-01"

# 환경 변수로 DB 비밀번호가 주입되었는지 확인
if [ -z "$DB_ADMIN_PASSWORD" ]; then
  echo "오류: DB_ADMIN_PASSWORD 환경 변수가 설정되지 않았습니다."
  exit 1
fi

echo "=========================================="
echo "Azure 인프라 프로비저닝 시작"
echo "대상 환경: $ENVIRONMENT"
echo "리소스 그룹: $RESOURCE_GROUP"
echo "=========================================="

# ==========================================
# 2. 리소스 그룹 생성 (멱등성 보장: 이미 존재하면 수정 내역만 반영)
# ==========================================
echo "1. 리소스 그룹 생성/확인 중..."
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION \
  --output none

# ==========================================
# 3. 메인 Bicep 배포 실행
# ==========================================
echo "2. main.bicep 배포 실행 중..."
az deployment group create \
  --resource-group $RESOURCE_GROUP \
  --template-file ../env/$ENVIRONMENT/main.bicep \
  --parameters projectName=$PROJECT_NAME \
  --parameters environment=$ENVIRONMENT \
  --parameters adminPassword=$DB_ADMIN_PASSWORD
# 메인 파일(main.bicep)에 adminPassword 파라미터가 추가로 정의되어 있어야 합니다.

echo "인프라 프로비저닝이 완료되었습니다."