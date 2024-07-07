/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'max-width': '1300px'
      },
      backgroundColor:{
        'primary': 'blue',
        'secondary': 'green'
      }
    },
  },
  plugins: [],
}