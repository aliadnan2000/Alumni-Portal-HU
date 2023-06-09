/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#222222",
        secondary : "#5c2568",
        btn : "#854593"
      },
      fontFamily : {
        "sans" : ["Quicksand", "sans-serif"]
      }   },
  },
  plugins: [],
}