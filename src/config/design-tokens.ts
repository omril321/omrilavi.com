/**
 * Design Tokens - Single source of truth for all colors, spacing, etc.
 * Used across Tailwind, Astro components, and integrations
 */

export const colors = {
  // Primary brand colors
  primary: "#4a9eff",
  secondary: "#54ffdd",
  tertiary: "#1f2937",

  // Theme colors
  background: "#0f0f0f",
  surface: "#1a1a1a",
  heroSurface: "#2a2a2a",
  foreground: "#ffffff",
  muted: "#c5c5c5",

  // Content colors
  textPrimary: "#ffffff",
  textSecondary: "#c5c5c5",
  border: "#6b7280",

  // Mermaid-specific colors
  mermaidSecondary: "#374151",

  // Social colors
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
