const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans',...defaultTheme.fontFamily.sans],
     },
    colors: {
      uablue: {
        default: '#005BBC',
        accent: '#1E429F'
        }
      }
    }
  },
  plugins: [],
}
