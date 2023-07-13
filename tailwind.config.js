/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {},
    extend: {},
    extend: {
      colors: {
        'white-minsk':'#f1e8ea',
        'middle-minsk':'#c6beda',
        'dark-minsk':'#2f296d',
        'red-highlight': '#b5446e',
        'clicked-minsk': '#584cbd'
      },
    },
  },
  plugins: [],
}

