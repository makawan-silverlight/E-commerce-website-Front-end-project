/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
});

