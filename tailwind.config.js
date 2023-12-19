/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#22262a",
        background: "#f9fafb",
        primary: "#1A1A1C",
        secondary: "#adb5bd",
        accent: "#484f56",
        textDark: "#d5d9dd",
        backgroundDark: "#040506",
        primaryDark: "#d5d9dd",
        secondaryDark: "#424a52",
        accentDark: "#a9b0b7",
      },
      fontFamily: {
        heading: ["Barlow Condensed", "sans-serif"],
        text: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
