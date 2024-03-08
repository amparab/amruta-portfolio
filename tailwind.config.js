/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["Pixel", "sans-serif"],
        knuckles: ["Knuckles", "sans-serif"],
        knuckleslite: ["KnucklesLite", "sans-serif"],
      },
    },
  },
  plugins: [],
}

