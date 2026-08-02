import webConfig from './apps/web/eslint.config.mjs';
import apiConfig from './apps/api/eslint.config.mjs';

export default [
  { // web과 api에서 제외했던 무시 경로들을 이곳에서 일괄 관리
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.next/**",
      "**/out/**",
      "**/next-env.d.ts",
      "**/eslint.config.mjs", // api에서 이관된 설정 파일 무시 규칙
    ],
  },
  ...webConfig,
  ...apiConfig,
];