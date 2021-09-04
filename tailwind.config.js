const color = require('color');
const colors = require('tailwindcss/colors');

const primaryColor = '#549eff';
const secondaryColor = '#54ffdd';
const bodyColor = colors.gray[800];


const darken = (_color, amount) => color(_color).darken(amount).toString();
const lighten = (_color, amount) => color(_color).lighten(amount).toString();

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      gray: colors.gray,
    },
    extend: {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        bodyColor,

        'primary-dark': darken(primaryColor, 0.5),
        'secondary-dark': darken(secondaryColor, 0.5),

        'primary-xdark': darken(primaryColor, 0.6),
        'secondary-xdark': darken(secondaryColor, 0.6),

        'primary-2xdark': darken(primaryColor, 0.85),
        'secondary-2xdark': darken(secondaryColor, 0.85),

        'primary-light': lighten(primaryColor, 0.25),
        'secondary-light': lighten(secondaryColor, 0.25),

        'primary-xlight': lighten(primaryColor, 0.4),
        'secondary-xlight': lighten(secondaryColor, 0.4),

        'github': '#4e545a',
        'linkedin': '#0077b5',
        'medium': '#00ab6c',
        'twitter': '#1da1f2',
        'devto': '#ffffff',
      },
      backgroundSize: {
        normal: '100%',
        'zoomed-in': '105%',
      },
      boxShadow: {
        sharp: '8px 8px 0 rgb(0 0 0 / 25%)',
        'strong-inner': 'inset 0px 0px 10px 0px rgb(0 0 0 / 85%)',
      },
      borderWidth: {
        24: '24px',
      }
    },
  },
  variants: {
    extend: {
      backgroundSize: ['hover', 'focus'],
      translate: ['group-hover'],
      height: ['group-hover'],
      fontSize: ['group-hover'],
      scale: ['group-hover'],
      margin: ['group-hover'],
      flex: ['group-hover'],
      flexShrink: ['group-hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}
