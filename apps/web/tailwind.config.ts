import type { Config } from "tailwindcss";
import { fileURLToPath } from "node:url";
import path from "node:path";
// libs/ui 패키지의 프리셋을 패키지 이름으로 깔끔하게 임포트
import sharedPreset from "@co-panion/ui/tailwind.preset";

// ESM 환경에서 __dirname 대체 구현
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  // 공통 프리셋 상속
  presets: [sharedPreset],

  content: [
    path.join(__dirname, "./src/**/*.{js,ts,jsx,tsx,mdx}"), // 웹 앱 내부 소스 경로 (절대 경로 기반)
    path.join(__dirname, "../../libs/ui/src/**/*.{js,ts,jsx,tsx}"), // UI 패키지 소스 경로 동적 연동 (절대 경로 기반)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
