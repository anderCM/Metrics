/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#4369B2',
        secondaryBlue: '#5889E5',
        alternativeBlue: '#4268AF',
        iconBlue: '#2D4573',
        catergory1: '#4369B0',
        category2: '#4063A5',
        subTitle: '#35548B',
      }
    },
  },
  plugins: [],
}
