// root/tailwind-workspace-preset.ts
import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        // CSS 변수 연동을 통한 디자인 토큰 관리
        primary: {
          DEFAULT: "var(--color-primary, #111827)",
          foreground: "var(--color-primary-foreground, #ffffff)",
        },
        background: "var(--background, #ffffff)",
        foreground: "var(--foreground, #171717)",
      },
    },
  },
  plugins: [],
};

export default config;
