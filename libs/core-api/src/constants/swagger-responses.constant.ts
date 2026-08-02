import { ApiResponseOptions } from "@nestjs/swagger";

/**
 * 프로젝트 공용 에러 규격을 생성하는 헬퍼 함수 (Swagger 스키마로 변환)
 */
const createErrorSchema = (code: string, message: string) => ({
  type: "object",
  properties: {
    success: { type: "boolean", example: false },
    data: { type: "null", example: null },
    error: {
      type: "object",
      properties: {
        code: { type: "string", example: code },
        message: { type: "string", example: message },
      },
    },
    timestamp: { type: "string", example: "2026-07-27T14:17:56.000Z" },
  },
});

/**
 * 컨트롤러에서 데코레이터(@ApiConflictResponse 등)에 주입할 공통 Swagger 응답 옵션
 */
export const COMMON_SWAGGER_RESPONSES: Record<string, ApiResponseOptions> = {
  ApiConflictResponse: {
    description:
      "요청한 리소스의 현재 상태와 충돌이 발생했습니다. (예: 중복 데이터)",
    schema: createErrorSchema(
      "CONFLICT",
      "이미 처리 중이거나 존재하는 리소스입니다.",
    ),
  },
  ApiTooManyRequestsResponse: {
    description: "클라이언트가 지정된 시간 내에 너무 많은 요청을 보냈습니다.",
    schema: createErrorSchema(
      "TOO_MANY_REQUESTS",
      "요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.",
    ),
  },
  ApiServiceUnavailableResponse: {
    description:
      "서버 과부하 또는 점검으로 인해 현재 요청을 처리할 수 없습니다.",
    schema: createErrorSchema(
      "SERVICE_UNAVAILABLE",
      "현재 서버를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.",
    ),
  },
  ApiBadRequestResponse: {
    description: "잘못된 요청 파라미터 또는 데이터 검증(Validation) 실패",
    schema: createErrorSchema(
      "BAD_REQUEST",
      "필수 입력값이 누락되었거나 형식이 올바르지 않습니다.",
    ),
  },

  // TODO : 필요한 공통 에러들을 미리 정의...
};
