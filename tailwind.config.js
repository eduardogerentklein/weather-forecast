module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        25: '#C6CBDA',
        50: '#8F98B7',
        75: '#566492',
        100: '#1E306E',
      },
      purple: {
        25: '#D4CCDB',
        50: '#AB9BB9',
        75: '#806895',
        100: '#563672',
      },
      magenta: {
        25: '#E2CEDD',
        50: '#C79EBB',
        75: '#AA6D99',
        100: '#8E3C77',
      },
      'hot-pink': {
        25: '#F0CFDE',
        50: '#E3A1BD',
        75: '#D4719C',
        100: '#C6427B',
      },
      pink: {
        25: '#FED1DF',
        50: '#FFA4C0',
        75: '#FE76A0',
        100: '#FE4880',
      },
      black: {
        25: '#CACAD0',
        50: '#9697A1',
        75: '#616272',
        100: '#2C2E43',
      },
      white: {
        25: '#FFFFFF',
        50: '#FEFEFE',
        75: '#FDFDFD',
        100: '#FCFCFF',
      },
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
