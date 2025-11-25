/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'coffee-brown': '#8B4513',
        'coffee-light': '#D2B48C',
        'coffee-dark': '#3E2723',
        'coffee-cream': '#F5E6D3'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-coffee': 'linear-gradient(135deg, #8B4513 0%, #D2B48C 100%)'
      }
    },
  },
  plugins: [],
}