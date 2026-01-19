// tailwind.config.js 파일을 이렇게 수정하세요.

import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [typography, function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-stable': {
          'scrollbar-gutter': 'stable',
        },
        '.scrollbar-stable-both': {
          'scrollbar-gutter': 'stable both-edges',
        },
      })
    },
],
};

export default config;
