/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'terminal': ['VT323', 'monospace'],
      },
      colors: {
        'terminal-blue': '#c4f9fe',
        'terminal-black': '#000000',
        'terminal-dark': '#000000',
      },
      height: {
        'screen-90': '90vh',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
} 