module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      textColor: {
        'yellow': '#EBB270',
        gray: {
          light:'#e4e2e3',
          DEFAULT: '#EBEBED',
          dark: '#505050',
        },
        'orange': '#D36B36',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        gray: {
          light:'#e4e2e3',
          DEFAULT: '#EBEBED',
          dark: '#505050',
        },
        'orange': '#D36B36',
        'yellow': '#EBB270',
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        gray: {
          light:'#e4e2e3',
          DEFAULT: '#EBEBED',
          dark: '#505050',
        },
        'orange': '#D36B36',
        'yellow': '#EBB270',
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
