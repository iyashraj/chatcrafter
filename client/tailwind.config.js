/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      ccgreen: "#1c8c35",
      ccpurple: "#BC0EE7",
    },
    fontFamily:{
      indie: ['Indie Flower', 'cursive'],
      satisfy: ['Satisfy', 'cursive'],
      caveat: ['Caveat', 'cursive'],
      kalam: ['Kalam', 'cursive'],
      dancing: ['Dancing Script', 'cursive'],
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
};
