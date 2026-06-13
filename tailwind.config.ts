import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0C0C0C",
          soft: "#131313",
          elev: "#1A1A1A",
        },
        ink: {
          DEFAULT: "#D7E2EA",
          soft: "#AAB6C0",
          muted: "#646973",
        },
        grad: {
          1: "#18011F",
          2: "#B600A8",
          3: "#7621B0",
          4: "#BE4C00",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-kanit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
