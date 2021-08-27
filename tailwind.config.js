const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      yellow: colors.amber,
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '13px',
      '3xl': '16px',
      '4xl': '21px',
      '5xl': '28px',
      '6xl': '41px',
      '7xl': '51px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
