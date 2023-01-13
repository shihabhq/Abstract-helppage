/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ligtpurple: "#4C5FD5",
        lightcyan: "#dadbf1"
      },
      fontFamily: {
        "gta": ["gta", "san-serrif"]
      },
      screens: {
        "xsm": "500px"
      }
    },
  },
  plugins: [],
}
