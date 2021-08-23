const color = require('color');

const primaryColor = '#2f98b0'; //using split-complementary colors
const secondaryColor = '#ab832e';
const tertiaryColor = '#ab2e55';

const darken = _color => color(_color).darken(35).toString();
const lighten = _color => color(_color).lighten(35).toString();

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        tertiary: tertiaryColor,

        'primary-dark': darken(primaryColor),
        'secondary-dark': darken(secondaryColor),
        'tertiary-dark': darken(tertiaryColor),

        'primary-xdark': darken(darken(primaryColor)),
        'secondary-xdark': darken(darken(secondaryColor)),
        'tertiary-xdark': darken(darken(tertiaryColor)),

        'primary-light': lighten(primaryColor),
        'secondary-light': lighten(secondaryColor),
        'tertiary-light': lighten(tertiaryColor),

        'primary-xlight': lighten(lighten(primaryColor)),
        'secondary-xlight': lighten(lighten(secondaryColor)),
        'tertiary-xlight': lighten(lighten(tertiaryColor)),
      },
      backgroundSize: {
        normal: '100%',
        'zoomed-in': '105%',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      backgroundSize: ['hover', 'focus'],
      translate: ['group-hover'],
      height: ['group-hover'],
      fontSize: ['group-hover'],
      scale: ['group-hover']
    },
  },
  plugins: [],
}
