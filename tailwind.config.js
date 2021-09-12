module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        grid: '75rem',
        extended: '100.5rem',
      },
      textColor: {
        'dark-gray': '#707070',
        'gray': '#939292',
        'light-gray': '#C9C9C9',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'dark-gray': '#707070',
        'gray': '#939292',
        'light-gray': '#C9C9C9',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'dark-gray': '#707070',
        'gray': '#939292',
        'light-gray': '#C9C9C9',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
