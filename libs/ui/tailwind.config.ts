import type { Config } from "tailwindcss";
import sharedPreset from "./tailwind.preset";

const config = {
  presets: [sharedPreset],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;

export default config;
