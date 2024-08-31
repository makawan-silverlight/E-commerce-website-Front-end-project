/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        background : "#DCEEF5",
        primary : "#726BBC",
        secondary : "#E6DFED",
        thirdary : "#F5F5F5",
        header : "#443686"
      }
    },
    fontFamily : {
      'playFair' : ['Playfair Display','sans-serif'],
    }
  },
  plugins: [],
}

