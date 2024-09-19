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
      },
      animation: {
        toastAnimation: 'toast 3s linear',
      },
      keyframes: {
        toast: {
          '0%': { transform: 'translateX(120%)' },
          '10%': { transform: 'translateX(0)' },
        }
      }
    },
    fontFamily : {
      'poppins' : ['Poppins','sans-serif'],
      'serif' : ['serif'],
      'sans' : ['sans-serif']
    }
  },
  plugins: [],
}