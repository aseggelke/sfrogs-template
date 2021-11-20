module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      textColor: {
        'yellow': '#EBB270',
        'orange': '#D36B36',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'gray': '#E4E2E3'
      }),
      maxWidth: {
        grid: '75rem',
        extended: '100.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
