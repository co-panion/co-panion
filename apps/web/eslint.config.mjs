// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// 무시 경로(ignores)는 모두 제외하고 규칙과 대상 파일(files)만 내보냄
const webConfigs = [...nextVitals, ...nextTs].map((config) => ({
  ...config,
  files: ["apps/web/**/*.{js,jsx,ts,tsx}"],
  rules: {
    ...config.rules,
    "@next/next/no-html-link-for-pages": ["error", "apps/web/src/app"],
  },
}));

export default webConfigs;
