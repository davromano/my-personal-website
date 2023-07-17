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
        'white-minsk':'#f2ebec',
        'middle-minsk':'#c6beda',
        'dark-minsk':'#2f296d',
        'red-highlight': '#970C3F',
        'clicked-minsk': '#584cbd'
      },
    },
  },
  plugins: [],
}

