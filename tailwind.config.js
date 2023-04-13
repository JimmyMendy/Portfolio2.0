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
        main: "#ebdbce",
        mobile: "#464c46",
        mobileText: "#ebdbce",
        contact: "#000000",
        transparent: "transparent",
        cream: "#ede8e6",
      },
      screens: {
        sm: "576px",
        md: "992px",
        lg: "1228px",
        xl: "1380px",
      },
      spacing: {
        header: "32px",
        17: "75px",
        23: "90px",
        25: "100px",
        32: "132px",
      },
      fontSize: {
        "10xl": "56px",
      },
      lineHeight: {
        special: "1.15",
      },
    },
  },
  plugins: [],
};
