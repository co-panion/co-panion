# ==========================================
# Stage 1: Base (공통 환경 설정)
# ==========================================
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

# ==========================================
# Stage 2: Builder (의존성 설치 및 웹 빌드)
# ==========================================
FROM base AS builder
WORKDIR /app

# 루트 및 모든 워크스페이스의 패키지 매니페스트 복사 (캐시 최적화용)
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/web/package.json apps/web/
COPY libs/shared/package.json libs/shared/

# 프론트엔드는 데이터베이스(Prisma)나 core-api에 접근할 필요가 없으므로 생략

# 전체 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스 코드 전체 복사 (.dockerignore 적용)
COPY . .

# 공유 라이브러리가 빌드를 요구하는 경우 먼저 빌드 (순수 TS라면 생략 가능)
# RUN pnpm --filter shared build

# 프론트엔드 웹 애플리케이션 빌드
# Next.js의 경우 next.config.js에서 output: 'standalone' 설정이 필수입니다.
RUN pnpm --filter web build

# ==========================================
# Stage 3: Runner (프로덕션 런타임 이미지)
# ==========================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Next.js 텔레메트리 비활성화 (운영 환경 권장)
ENV NEXT_TELEMETRY_DISABLED=1

# 불필요한 권한 탈취 방지를 위해 보안 그룹(운영 체제 유저) 생성
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Next.js의 public 폴더 (정적 에셋) 복사
COPY --from=builder /app/apps/web/public ./public

# Next.js standalone 빌드 결과물 복사
# next.config.js 설정 시 생성되며, node_modules 중 꼭 필요한 것만 압축하여 포함합니다.
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
# 정적 파일 서버링을 위한 static 폴더 복사
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./.next/static

# 보안 유저로 전환
USER nextjs

EXPOSE 3000

ENV PORT=3000
# IPv6/IPv4 모두 수신 대기
ENV HOSTNAME="0.0.0.0"

# Next.js standalone 서버 실행
CMD ["node", "apps/web/server.js"]