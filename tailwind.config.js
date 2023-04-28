const color = require("color");
const colors = require("tailwindcss/colors");

const primaryColor = "#549eff";
const secondaryColor = "#54ffdd";
const bodyColor = colors.zinc[800];

const darken = (_color, amount) => color(_color).darken(amount).toString();
const lighten = (_color, amount) => color(_color).lighten(amount).toString();

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
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

        "primary-dark": darken(primaryColor, 0.5),
        "secondary-dark": darken(secondaryColor, 0.5),

        "primary-light": lighten(primaryColor, 0.4),
        "secondary-light": lighten(secondaryColor, 0.4),

        // 'github': '#4e545a',
        // 'linkedin': '#0077b5',
        // 'medium': '#00ab6c',
        // 'twitter': '#1da1f2',
        // 'devto': '#ffffff',
      },
      boxShadow: {
        "soft-dark": "0 0 26px 7px  rgb(0 0 0 / 12%)",
      },
      borderWidth: {
        24: "24px",
      },
      width: {
        tiny: "157px",
      },
      height: {
        120: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
