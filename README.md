# [co-panion] Coding Convention & Architecture Guidelines

## 1. 목적 및 원칙 (Philosophy)

> **"문서(Doc)는 '의도'를 설명하고, 도구(Lint)는 '실행'을 강제한다."**

* **ESLint & Turborepo (`eslint-config-turbo`):**
버그 유발 코드를 차단하고, 환경 변수 누락을 검증하며 빌드 캐시 무결성을 보장합니다. "ESLint 규칙을 통과하지 못하면 커밋할 수 없다"는 대원칙을 따릅니다.
* **Prettier:**
줄바꿈, 따옴표, 괄호 등 시각적 스타일을 통일하여 포맷팅 관련 논쟁을 원천 차단합니다.
* **Code Convention Doc: "헌법 (Constitution)"**
린터가 잡지 못하는 네이밍 규칙, 아키텍처 철학, 협업 프로세스를 정의합니다.
* **기본 원칙 (The Golden Rule):**
모노레포 전용 ESLint와 Prettier의 기본 설정을 100% 신뢰합니다. 린터 에러 발생 시 설정을 끄지 말고 코드를 수정하십시오.

---

## 2. 명명 규칙 (Naming Conventions)

시스템 전반의 일관성을 유지하기 위해 Google TypeScript Style Guide를 준용하되, 다음의 명명 규칙을 최우선으로 적용합니다.

* **디렉토리 및 파일명:** `kebab-case` (소문자와 하이픈)
* 예: `user-profile.tsx`, `create-shelter.dto.ts`


* **변수 및 함수명:** `camelCase`
* 예: `getUserData()`, `animalList`


* **React 컴포넌트 및 클래스명:** `PascalCase`
* 예: `UserProfile`, `SheltersController`


* **상수 및 Enum 값:** `UPPER_SNAKE_CASE`
* 예: `MAX_RETRY_COUNT`, `enum AnimalStatus { ADOPTED }`


* **데이터베이스 (Prisma) 명명 규칙:**
* Model (테이블): 단수형 `PascalCase` (예: `Animal` / `Animals` 금지)
* Field (컬럼): `camelCase` (예: `createdAt`)



---

## 3. 모노레포 아키텍처 및 폴더 구조 (Architecture)

pnpm workspace와 Turborepo를 기반으로 구축되며, 환경 변수(`.env`)는 보안과 마이크로서비스 확장성을 위해 앱/패키지 레벨(App-Level) 분산형으로 관리합니다.

### 3.1. apps/web: Next.js (FSD 패턴 적용)

* **App Router (`src/app/`):** 오직 라우팅과 레이아웃(`page.tsx`, `layout.tsx`)의 역할만 수행합니다.
* **FSD (`src/features/`):** 실제 화면 구성, 비즈니스 로직, 데이터 쿼리는 기능(도메인) 단위로 응집시켜 철저히 분리합니다.

### 3.2. apps/api: NestJS (도메인 주도 설계 - DDD)

* 비즈니스 도메인별로 `src/modules/` 하위에 폴더를 구성합니다. (예: `shelters`, `animals`)
* 각 도메인 폴더 내에서 Controller(라우팅/검증), Service(비즈니스 로직), DTO를 관리하여 응집도를 극대화합니다.
* 모든 API는 `@nestjs/swagger`를 통해 응답 타입과 명세를 자동화합니다.

### 3.3. libs/: 공통 모듈 (Shared Packages)

* **`libs/database`:** Prisma 스키마 및 Client를 생성하여 API에 제공합니다.
* **`libs/core-api`:** 프론트엔드에서 API 호출 시 사용하는 공통 HTTP 클라이언트(Axios 인스턴스)를 중앙 집중화합니다.
* **`libs/ui`:** 프로젝트 전반에서 재사용되는 순수 UI 컴포넌트(버튼, 모달 등)를 관리합니다.

---

## 4. Git 브랜치 전략 및 커밋 컨벤션 (Git Workflow)

1인 스피드런 및 모노레포 환경에 최적화된 GitHub Flow 전략을 사용합니다.

* **브랜치 운영:**
* `main`: 항상 배포 가능한 상태를 유지하는 유일한 운영 브랜치.
* `feat/...`: 기능 개발 시 `main`에서 분기하는 작업 브랜치. (예: `feat/#1-animal-crud`)


* **병합 규칙 (Squash Merge):**
PR을 거쳐 `main`으로 병합할 때는 반드시 Squash Merge를 사용하여 단일 커밋으로 히스토리를 압축합니다.
* **커밋 메시지 (Conventional Commits v1.0.0):**
* 구조: `<type>[optional scope]: <description>`
* 타입: `feat`(기능), `fix`(버그), `docs`(문서), `chore`(설정), `refactor`(구조 개선)


* **자동화 도구:**
* Husky & Commitlint: 커밋 규격 강제.
* Changesets: 버전 릴리즈 및 CHANGELOG 생성 자동화.



---

## 5. 에러 핸들링 및 상태 코드 가이드 (Error Handling)

안정적인 서비스 운영을 위해 프론트엔드와 백엔드의 에러 처리 책임을 명확히 분리합니다.

* **백엔드 (`apps/api`):**
* 비즈니스 로직 실패 시 NestJS 내장 예외 클래스(예: `NotFoundException`)를 적극 활용합니다.
* 전역 예외 필터(Global Exception Filter)를 적용하여 모든 에러 응답 구조를 `{ statusCode, message, timestamp, path }` 형태로 통일합니다.


* **프론트엔드 (`apps/web`):**
* `libs/core-api`의 Axios Interceptor를 통해 401(인증 만료) 등의 공통 에러를 중앙에서 가로채어 처리(예: 로그인 페이지 리다이렉트)합니다.
* React의 Error Boundary(`error.tsx`)를 활용하여 특정 컴포넌트 오류가 전체 화면 붕괴로 이어지는 것을 방어합니다.


* **표준 HTTP 상태 코드:**
* `200 OK` (성공), `201 Created` (생성 완료)
* `400 Bad Request` (DTO 검증 실패), `401 Unauthorized` (인증 실패)
* `403 Forbidden` (권한 없음), `404 Not Found` (리소스 없음)
* `500 Internal Server Error` (서버 로직/DB 오류)



---

## 6. 배포 파이프라인 및 CI/CD (Deployment)

Turborepo의 빌드 캐시를 활용하여 빠르고 안정적인 자동 배포 파이프라인을 구축합니다.

* **CI (지속적 통합):**
GitHub Actions를 활용하여 PR 생성 시 `pnpm lint`, `pnpm type-check`, `pnpm build`를 자동으로 실행하여 무결성을 검증합니다.
* **CD (지속적 배포):**
* **프론트엔드 (`web`):** Vercel과 GitHub을 연동하여 `main` 브랜치에 코드가 병합(Merge)되는 즉시 엣지 네트워크로 자동 무중단 배포됩니다.
* **백엔드 (`api`):** 도커(Docker) 컨테이너로 빌드된 후 지정된 클라우드 인스턴스로 자동 배포됩니다.


* **데이터베이스 마이그레이션:**
백엔드 서버가 재시작되기 직전 CI/CD 파이프라인에서 `pnpm prisma db push` (또는 `migrate deploy`) 명령어가 실행되어 스키마 변경 사항이 안전하게 반영됩니다.

---

## 7. 코드 내 문서화 및 주석 (In-Code Documentation)

> **"코드는 '무엇을(What)'과 '어떻게(How)'를 말하고, 주석은 '왜(Why)'를 말한다."**

불필요한 주석은 코드의 가독성을 해치고 유지보수 시 거짓말(Outdated Comments)이 될 확률이 높습니다. 명확한 네이밍을 통해 주석을 최소화하되, 필요한 곳에는 표준화된 포맷을 엄격히 적용합니다.

### 7.1. API 및 DTO 문서화 (NestJS Swagger)

백엔드 API는 프론트엔드와의 '계약'입니다. 모든 컨트롤러 엔드포인트와 DTO 필드는 코드가 곧 API 명세서가 되도록 데코레이터를 강제합니다.

* **Controller:** `@ApiOperation`을 통해 해당 API의 목적과 요약을 명시합니다.
* **DTO:** `@ApiProperty`를 사용하여 각 필드의 설명, 예시 값(example), 필수 여부를 작성합니다.

```typescript
@ApiProperty({ description: '보호 동물 이름', example: '바둑이' })
@IsString()
name: string;

```

### 7.2. TSDoc (JSDoc) 활용

공통 유틸리티 함수(Utils), 복잡한 서비스 로직(Service), UI 컴포넌트(Props)에는 TSDoc 표준 규격(`/** ... */`)을 사용하여 마우스 오버 시 IDE(VSCode)에서 즉시 설명을 확인할 수 있도록 작성합니다.

* `@param`, `@returns`, `@throws` 태그를 활용하여 입출력 및 예외 사항을 명확히 합니다.

```typescript
/**
 * 동물의 입양 상태를 업데이트하고 관련된 입양 내역을 검증합니다.
 *
 * @param animalId - 상태를 변경할 동물의 고유 ID
 * @param status - 변경할 입양 상태 (enum)
 * @returns 업데이트된 동물 엔티티
 * @throws {NotFoundException} 동물을 찾을 수 없을 때 발생
 */

```

### 7.3. 인라인 주석 (Inline Comments) 규칙

* 비즈니스 로직이 기괴하거나 우회(Hack) 코드가 들어간 경우, **"왜 이렇게 짰는지"** 배경 맥락과 이슈 트래킹 링크를 반드시 남깁니다.
* 변수명이나 함수명으로 이미 의도가 명확한 코드(예: `user.age++ // 나이 1 증가`)에는 절대 주석을 달지 않습니다.

### 7.4. 작업 태그 (Task Tags)

미완성 코드나 향후 수정이 필요한 부분은 일반 주석과 구별되도록 대문자 태그를 사용하며, 담당자나 이슈 번호를 병기하는 것을 권장합니다.

```typescript
// TODO(lucy): 결제 모듈 연동 후 상태 검증 로직 추가 필요
// FIXME(#12): 동시성 이슈 발생 가능성 있음, 락(Lock) 도입 검토

```