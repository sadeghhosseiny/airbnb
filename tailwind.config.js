module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-max': { 'max': '600px' },
        'sm-min': { 'min': '600px' }
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}