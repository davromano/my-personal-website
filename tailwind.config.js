/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        "white-minsk": "#f5f5f5" /** Old minsk f0ebec */,
        "middle-minsk": "#c6beda",
        "dark-minsk": "#2f296d",
        "red-highlight": "#B5446E",
        "clicked-minsk": "#584cbd",
        "nav-mobile-minsk": "#cec7df",
      },
      height: {
        custom_mobile: "36%",
      },
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-out forwards",
      },
      backgroundImage: {
        pattern:
          "radial-gradient(circle at center, #f5f5f5ff 50%, rgba(245, 245, 245, 0) 100%), url('/pattern.png')",
      },
    },
  },
  plugins: [],
};
