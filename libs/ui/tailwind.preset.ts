import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Omit<Config, "content">;
