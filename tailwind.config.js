/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      marlinge: ["marlinge", "sans-serif"],
    },
  },
  daisyui: {
    themes: ["forest"],

  },
  plugins: [require("daisyui")],
};
