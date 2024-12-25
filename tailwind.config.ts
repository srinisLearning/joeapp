import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#006000",
          50: "#f2faf2",
          100: "#f2f4f2",
          200: "#004000",
          300: "#c2c8c2",
          400: "#00e000",
        },
        secondary: "#600000",
        tertiary: "#000060",
        quaternary: "#0070f3",
        quinary: "#0070f3",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "256": "64rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xs: "436px",
      },
    },
  },
  plugins: [],
} satisfies Config;
