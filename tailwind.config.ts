import type { Config } from "tailwindcss";

const config: Config = {
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
        darkBlue: {
          900: '#1B263B',
        },
        orange: {
          500: '#F97316',
          900: '#E37222',
        },
        emerald: {
          500: '#2A9D8F',
        },
        gold: {
          500: '#E9C46A',
        },
        darkGray: {
          900: '#333333',
        },
        lightGray: {
          900: '#F4F4F9',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;