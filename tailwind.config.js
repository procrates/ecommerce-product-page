const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px'
      },
      width: {
        desktop: '1440px'
      },
      height: {
        '128': '32rem',
        '144': '36rem'
      },
      colors: {
        primary: {
          'ornage': 'hsl(26, 100%, 55%)',
          'pale-orange': 'hsl(25, 100%, 94%)'
        },
        neutral: {
          'very-dark-blue': 'hsl(220, 13%, 13%)',
          'dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'grayish-blue': 'hsl(220, 14%, 75%)',
          'light-grayish-blue': 'hsl(223, 64%, 98%)',
          'white': 'hsl(0, 0%, 100%)',
          'black-with-opacity': 'hsla(0, 0%, 0%, 0.75)'
        }
      },
      fontFamily: {
        'kumbh-sans': 'Kumbh Sans'
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-overlay': {
          'background': 'linear-gradient(var(--overlay-angle, 0deg), var(--overlay-colors)), var(--overlay-image)',
          'background-position': 'center',
          'background-size': 'cover',
        },
      });
    }),
  ],
}
