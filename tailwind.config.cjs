/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Mona-sans': ['Mona Sans'],
        'mono': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}