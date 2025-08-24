/**
 * Design Tokens - Single source of truth for all colors, spacing, etc.
 * Used across Tailwind, Astro components, and integrations
 */

export const colors = {
  primary: "#60a5fa",
  secondary: "#54ffdd",
  tertiary: "#1f2937",

  background: "#0b1020",
  surface: "#0f1629",
  heroSurface: "#0f1629",
  foreground: "#f8fafc",
  muted: "#b9c1d1",

  textPrimary: "#f8fafc",
  textSecondary: "#b9c1d1",
  border: "rgba(255, 255, 255, 0.08)",

  mermaidLineColor: "#4f6ea0",

  linkedin: "#0077b5",
  github: "#333333",
  medium: "#00ab6c",
  twitter: "#1da1f2",
  devto: "#0a0a0a",
} as const;

export const spacing = {
  containerMaxWidth: "4xl", // Tailwind class
  contentMaxWidth: "3xl", // Tailwind class
  sectionPadding: "2rem",
} as const;

export const typography = {
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
  fontSize: {
    sm: "14px",
    base: "16px",
    lg: "18px",
  },
} as const;
