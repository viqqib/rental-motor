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
        background: "var(--background)",
        foreground: "var(--foreground)",
        logo: "#FF4400",
        primary: '#373737',
        bgone: '#F5F5F5',
        footer: '#FF5B22',

      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)', // Fixed this line
      },
    },
  },
  plugins: [],
} satisfies Config;
