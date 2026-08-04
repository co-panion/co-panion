// apps/web/tailwind.config.ts
import type { Config } from "tailwindcss";
import sharedConfig from "../../tailwind-workspace-preset";
//import { dirname, join } from "path";

const config: Config = {
  presets: [sharedConfig],
  content: [
    // 1. Web 앱 내부 경로 (순수 도메인 및 뷰 영역)
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../libs/ui/src/**/*.{js,ts,jsx,tsx}",
    // 2. 💡 [FSD/Monorepo 표준] 패키지 이름을 통해 동적으로 경로를 역추적하여 스캔
    // join(
    //   dirname(require.resolve("@co-panion/ui/package.json")),
    //   "src/**/*.{js,ts,jsx,tsx}"
    // ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
