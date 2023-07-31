/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    screens: {
      xxl: '1728px',
      xl: '1440px',
      lg: '976px',
      md: '768px',
      sm: '565px',
    },

    colors: {
      white: 'var(--white)',
      black: ' var(--black)',
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      tetiary: 'var(--tetiary-color)',
      darkgrey: 'var(--darkgrey)',
      grey: 'var(--grey)',
    },

    fontFamily: {
      nunito: 'var(--font-nunito)',
      josefin: 'var(--font-josefin)',
    },

    container: {
      center: true,
    },
  },
}
