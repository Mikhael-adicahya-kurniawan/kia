import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '70': '70px',
        '50': '50px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "#F8DEDE",
        cream:"#ef3167",
        creammuda:"#FFCBCB",
        hijau:"#50ff3a",
      },
    },
  },
  plugins: [],
} satisfies Config;
