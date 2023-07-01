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
        'montreux-yellow':'#fffe53'
      },
    },
  },
  plugins: [],
}

