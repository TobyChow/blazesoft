import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [require("daisyui")],
};
export default config;
