/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'screen05': '5vh',
        'screen1': '10vh',
        'screen9': '90vh',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '20': '5% 90% 5%',
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}