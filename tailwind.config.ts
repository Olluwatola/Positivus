// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fontSize: {
    base: "1rem",
    // Other font sizes as needed
    sm: "0.875rem",
    lg: "1.125rem",
  },
  theme: {
    extend: {
      colors: {
        primary: {
          brightRed: "hsl(12, 88%, 59%)",
          darkBlue: "hsl(228, 39%, 23%)",
        },
        neutral: {
          darkGrayishBlue: "hsl(227, 12%, 61%)",
          darkBlue: "hsl(233, 12%, 13%)",
          veryDarkBlue: "hsl(233, 12%, 13%)",
          veryPaleRed: "hsl(13, 100%, 96%)",
          veryLightGray: "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
