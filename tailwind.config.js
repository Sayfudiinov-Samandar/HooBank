/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '700px',
      lg: '800px',
      xl: '970px',
      '2xl': '1170px',
    },
    gap: {
      '1': '56px',
      // change for navbar 
      '11': '2.75rem',
    },
    backgroundImage: {
      'hero-pattern': "url('/images/hero-bg-img.png')",
    },

  },
  plugins: [],
}
