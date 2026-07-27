import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// 무시 경로(ignores)는 모두 제외하고 규칙과 대상 파일(files)만 내보냄
const webConfigs = [...nextVitals, ...nextTs].map((config) => ({
  ...config,
  files: ["apps/web/**/*.{js,jsx,ts,tsx}"],
}));

export default webConfigs;
