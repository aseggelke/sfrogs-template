module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '100': '34rem',
      },
      backgroundImage: {
        'hero': "url('assets/images/pencil-mobile.png')",
        'hero-desktop': "url('assets/images/pencil-desktop.png')",
      },
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
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'yellow': '#EBB270',
        'orange': '#D36B36',
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
