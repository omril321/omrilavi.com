const primaryColor = "#4a9eff";
const secondaryColor = "#54ffdd";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // Use 'class' for manual theme toggle
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,

        // Background colors
        background: "var(--color-background)",
        surface: "var(--color-surface)",

        // Text colors
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",

        // Social brand colors
        linkedin: "#0077b5",
        github: "#333333",
        medium: "#00ab6c",
        twitter: "#1da1f2",
        devto: "#0a0a0a",
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
