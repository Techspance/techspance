const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#118DF0",
        secondary: "#ECECDA",
        background: "#E7F1FF",
        silver: "#c0c0c0",
        "darker-blue": "#0E2F56",
        "dark-blue": "#0E2F56",
        white: "#FDFDFC",
        gray: "#FDFDFC",
      },
      keyframes: {
        dropdown: {
          "0%": { height: 0 },
          "100%": { height: "100%" },
        },
      },
      animation: {
        dropdown: "dropdown 2s ease-in-out  1",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      
    },
  },
  plugins: [],
};
