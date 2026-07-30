# ==========================================
# Stage 1: Base (공통 환경 설정)
# ==========================================
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

# Prisma Client 동작을 위한 Alpine 시스템 패키지 설치
RUN apk add --no-cache openssl libc6-compat

# ==========================================
# Stage 2: Builder (의존성 설치 및 앱 빌드)
# ==========================================
FROM base AS builder
WORKDIR /app

# 루트 및 모든 워크스페이스의 패키지 매니페스트 복사 (캐시 최적화용)
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/api/package.json apps/api/
COPY libs/core-api/package.json libs/core-api/
COPY libs/shared/package.json libs/shared/
COPY libs/database/package.json libs/database/

# 개발 환경을 포함한 전체 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스 코드 전체 복사 (.dockerignore에서 제외된 항목 제외)
COPY . .

# 데이터베이스(Prisma) 클라이언트 생성 (libs/database 내부 스키마 기준)
RUN pnpm --filter database exec prisma generate --schema=prisma/schema.prisma

# API 서버 및 참조된 내부 라이브러리(libs) 빌드
RUN pnpm --filter api build

# pnpm deploy를 사용하여 api 프로젝트와 배포에 필요한 의존성(prod)만 격리 추출
# 결과물은 /prod/api 경로에 모이게 됨
RUN pnpm deploy --filter api --prod /prod/api

# ==========================================
# Stage 3: Runner (프로덕션 런타임 이미지)
# ==========================================
FROM node:20-alpine AS runner
WORKDIR /app

# 컨테이너 실행에 필요한 최소한의 시스템 패키지 구성
RUN apk add --no-cache openssl tzdata

# Stage 2에서 격리된 운영 환경 코드 복사
COPY --from=builder /prod/api .

# 루트 환경에 생성된 Prisma Client 명시적 복사 (deploy 명령어 누락 방지)
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

# 프로덕션 환경 변수 설정
ENV NODE_ENV=production
ENV PORT=3000

# 컨테이너 포트 개방
EXPOSE 3000

# API 서버 실행 (NestJS 빌드 결과물 경로)
CMD ["node", "dist/main.js"]