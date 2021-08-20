const color = require('color');

const primaryColor = '#2f98b0'; //using split-complementary colors
const secondaryColor = '#ab832e';
const tertiaryColor = '#ab2e55';

const darken = _color => color(_color).darken(35).toString();

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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
