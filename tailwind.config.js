import { colors } from "./src/config/design-tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // Use 'class' for manual theme toggle
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        surface: colors.surface,
        heroSurface: colors.heroSurface,
        foreground: colors.foreground,
        muted: colors.muted,

        "text-primary": colors.textPrimary,
        "text-secondary": colors.textSecondary,
        "border-tertiary": colors.border,

        linkedin: colors.linkedin,
        github: colors.github,
        medium: colors.medium,
        twitter: colors.twitter,
        devto: colors.devto,
      },
      width: {
        tiny: "157px",
      },
      height: {
        120: "30rem",
      },
      boxShadow: {
        "soft-dark": "0 0 26px 7px  rgb(0 0 0 / 12%)",
      },
      borderWidth: {
        24: "24px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
