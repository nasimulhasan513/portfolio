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
        paper: "#F8FAFC",
        ink: {
          DEFAULT: "#1E293B",
          soft: "#475569",
          muted: "#64748B",
        },
        // Espresso / coffee accent scale (primary brand)
        primary: {
          50: "#faf6f2",
          100: "#f1e7dd",
          200: "#e2cdb9",
          300: "#cfae92",
          400: "#b58c6b",
          500: "#97694a",
          600: "#75543b",
          700: "#5e4330",
          800: "#4a3526",
          900: "#3b2a1f",
        },
        warm: "#F97316",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
