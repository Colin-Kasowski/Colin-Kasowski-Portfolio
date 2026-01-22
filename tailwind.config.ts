import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
      },
      borderRadius: {
        xl: "var(--radius)",
      },
      boxShadow: {
        soft: "0 10px 30px rgb(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
