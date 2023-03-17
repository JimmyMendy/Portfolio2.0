/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#ebdbce",
        "mobile": "#464c46",
        "mobile-text": "#ebdbce",
        "contact": "#000000",
      },
      screens: {
        "sm": "576px",
        "md": "992px",
        "lg": "1228px",
      }
    },
  },
  plugins: [],
};
