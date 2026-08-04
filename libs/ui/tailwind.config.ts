//libs/ui/tailwind.config.ts
import type { Config } from "tailwindcss";
import sharedConfig from "../../tailwind-workspace-preset";

const config: Pick<Config, "presets" | "content"> = {
  presets: [sharedConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
};

export default config;
