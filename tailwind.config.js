/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#292929",
        "text-white": "#FFFFFF",
        background: "#F4F4F4",
        section: "#fcfcfc",
        primary: "#0054D2",
        secondary: "#21212",
        accent: "#F5F6FA",
      },
      fontFamily: {
        heading: ["Barlow Condensed", "sans-serif"],
        text: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
