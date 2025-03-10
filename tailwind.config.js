/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D2B48C',
     
        accent: {
          100: "#FFE4C4",
          200: "#9a8366",
        },
        text: {
          100: "#483C32",
          200: "#74665b",
        },
        bg: {
          100: "#F5F5DC",
          200: "#ebebd2",/*  */
          300: "#c2c2aa",
        },
        red2 :rgb(177, 27, 27),
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
