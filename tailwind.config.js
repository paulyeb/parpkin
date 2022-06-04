module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      }
    },
  },
  plugins: [],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'disabled']
  }
}
