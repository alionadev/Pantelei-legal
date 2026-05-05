import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "hsl(var(--navy) / <alpha-value>)",
        cream: "hsl(var(--cream) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        paper: "hsl(var(--paper) / <alpha-value>)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Jost"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
