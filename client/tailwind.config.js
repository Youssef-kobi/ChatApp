/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fill: (theme) => ({
        red: theme('colors.red.primary'),
      }),
      keyframes: {
        dots: {
          '0%': {
            transform: 'translateY(-5%)',
            // 'animation-timing-function': ' cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%': {
            transform: 'translateY(-15%)',
            // animationTimingFunction: ' cubic-bezier(0,0,0.2,1)',
          },
          '50%': {
            transform: 'translateY(-5%)',
            // animationTimingFunction: ' cubic-bezier(0,0,0.2,1)',
          },
          '75%': {
            transform: 'translateY(-15%)',
            // animationTimingFunction: ' cubic-bezier(0,0,0.2,1)',
          },
          '100%': {
            transform: 'translateY(-5%)',
            // animationTimingFunction: ' cubic-bezier(0.8, 0, 1, 1)',
          },
        },
      },
      animation: {
        dotA: 'dots 2s linear 0.1s infinite',
        dotB: 'dots 2s linear 0.2s infinite',
        dotC: 'dots 2s linear 0.3s infinite',
      },
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
