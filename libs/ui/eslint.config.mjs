import { config as baseConfig } from "@repo/eslint-config/base";

export default [
  ...baseConfig,
  // 필요 시 해당 패키지만의 특수한 무시 경로나 규칙을 여기에만 추가
];