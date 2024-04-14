/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Shrikhand: ['Shrikhand', 'sans-serif'],
      },
      colors: {
        primary: '#234645',
        secondary: '#F2D7DB',
        white: '#FFFAFA',
        darky: '#262626',
      },
    },
  },
  plugins: ['flowbite/plugin'],
}

