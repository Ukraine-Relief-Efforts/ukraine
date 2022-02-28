module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': ['"Open Sans"', 'Georgia', 'Arial'],
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
