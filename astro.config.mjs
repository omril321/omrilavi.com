import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import astroMermaid from "astro-mermaid";
import { colors, typography } from "./src/config/design-tokens";

export default defineConfig({
  site: "https://omrilavi.com",
  integrations: [
    mdx(),
    tailwind(),
    sitemap(),
    astroMermaid({
      mermaidConfig: {
        theme: "base",
        startOnLoad: true,
        flowchart: {
          htmlLabels: true,
        },
        themeVariables: {
          fontSize: typography.fontSize.sm,
          fontFamily: typography.fontFamily,
          primaryColor: colors.primary,
          primaryTextColor: colors.textPrimary,
          primaryBorderColor: colors.primary,
          lineColor: colors.mermaidLineColor,
          background: colors.surface,
          secondaryColor: colors.secondary,
          tertiaryColor: colors.tertiary,
        },
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
});
