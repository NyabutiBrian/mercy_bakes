const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['var(--font-poppins)'],
        Shrikhand: ['var(--font-shrikhand)'],
      },
      colors: {
        primary: '#234645',
        secondary: '#F2D7DB',
        white: '#FFFAFA',
        darky: '#262626',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
