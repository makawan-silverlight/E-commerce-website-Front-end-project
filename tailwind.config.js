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
      },
      backgroundImage: {
        'gucci': "url('/image/GucciBanner-01.png')",
        'appleWatch': "url('/image/AppleWatchBanner-01.png')",
        'asus': "url('/image/asusBanner-01.png')",
        'heshe': "url('/image/hesheBanner-01.png')",
      }
    },
    fontFamily : {
      'playFair' : ['Playfair Display','serif'],
      'serif' : ['serif'],
      'sans' : ['sans-serif']
    }
  },
  plugins: [],
}