import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
// import tailwind from "@astrojs/tailwind"; // Temporarily disabled until Step 3

export default defineConfig({
  site: "https://omrilavi.com",
  integrations: [mdx()], // tailwind() temporarily disabled
  markdown: { shikiConfig: { theme: "github-dark" } },
});
