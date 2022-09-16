/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fill: (theme) => ({
        red: theme('colors.red.primary'),
      }),
      colors: {
        white: {
          pure: '#ffffff',
          light: '#f5f7fb',
        },
        blue: {
          light: '#f7f7ff',
        },
        black: {
          light: '#495057',
          faded: '#00000059',
        },
        gray: {
          base: '#7a7f9a',
          light: '#e6ebf5',
          background: '#fafafa',
          primary: '#dbdbdb',
        },
        red: {
          primary: '#ed4956 ',
        },
      },
      fontFamily: {
        Public: ['"Public Sans"', 'sans-serif'],
      },
      boxShadow: {
        '005': '0 0 5px',
      },
      variants: {
        display: ['group-hover'],
      },
    },
  },
  plugins: [],
}
