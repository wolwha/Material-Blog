import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src 폴더 사용 시 주석 해제
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    typography, // import한 변수를 그대로 넣으면 됩니다.
    
    // 커스텀 플러그인 (인라인 함수)
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.scrollbar-stable': {
          'scrollbar-gutter': 'stable',
        },
        '.scrollbar-stable-both': {
          'scrollbar-gutter': 'stable both-edges',
        },
      });
    },
  ],
};

export default config;
