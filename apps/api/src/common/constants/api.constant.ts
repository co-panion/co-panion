// apps/api/src/common/constants/api-version.constant.ts
//Todo : 프론트엔드(apps/web)의 Axios 인스턴스도 해당 헤더 이름과 버전 목록을 정확히 알아야 할 경우 -> shared/src/constants/api.constant.ts
//Todo : (DB나 인증 관련 변수) -> database.config.ts, auth.config.ts를 추가 생성하여 책임을 분리


/**
 * API 버전 관리 상수
 * 부트스트랩 설정 및 컨트롤러의 @Version 데코레이터에서 문자열을 안전하게 참조하기 위해 사용합니다.
 */
export const API_VERSIONS = {
  V1: '1',
  V2: '2',
} as const;

// 애플리케이션 전역 기본 버전
export const DEFAULT_API_VERSION = API_VERSIONS.V1;