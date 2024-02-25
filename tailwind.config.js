/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        plusjakartasans: 'var(--font-jakarta-sans)',
        lato: 'var(--font-lato)',
      }
    },
  },
  plugins: [],
}
