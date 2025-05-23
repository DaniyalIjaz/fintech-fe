import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode via class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--foreground)",
        foreground: "var(--background)",
      },
    },
  },
  plugins: [],
};

export default config;
