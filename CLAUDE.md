# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev                    # Start dev server at localhost:4321
yarn build                  # Production build
yarn preview                # Preview production build

yarn cypress:test           # Run all tests (starts server + runs headless)
yarn cypress:dev            # Interactive test development
yarn cypress:update-screenshots  # Update visual regression snapshots

yarn lint                   # ESLint check
yarn fmt                    # Prettier format
yarn fmt.check              # Prettier check
```

## Architecture

### Design System Flow

```
src/config/design-tokens.ts  →  tailwind.config.js  →  Components (Tailwind classes)
                             →  astro.config.mjs (Mermaid theme)
```

All colors and typography are defined in `design-tokens.ts` and consumed by Tailwind config and Astro Mermaid integration. Never add hardcoded colors in components.

### Content Model

Two types of blog posts:
- **Local MDX**: `src/content/blog/{slug}/index.mdx` with co-located assets
- **External posts**: `src/config/posts.ts` array with URLs to external platforms

Both are unified in the homepage feed. Content schema is in `src/content/config.ts` using Zod validation.

### Key Directories

- `src/config/` - Design tokens, external posts, personal constants
- `src/content/blog/` - Local MDX posts with co-located images
- `public/blog-assets/` - Hero images for all posts (use AVIF format)
- `cypress/e2e/` - Functional and visual regression tests

### Path Alias

`~/*` maps to `./src/*` (defined in tsconfig.json)

## Adding Blog Posts

Create `src/content/blog/{slug}/index.mdx` with frontmatter:

```mdx
---
title: "Post Title"
description: "10-500 char description"
image: "/blog-assets/{slug}.avif"
publishDate: "YYYY-MM-DD"
---
```

Hero images go in `public/blog-assets/`. Run `scripts/png2small.sh` to optimize.

## Testing

Visual regression tests use `cypress-image-snapshot`. Run `yarn cypress:update-screenshots` after intentional visual changes. Tests require production build (`yarn build` first).

## ESLint Notes

Strict TypeScript rules enabled:
- `@typescript-eslint/no-floating-promises: error` - Must handle promises
- `@typescript-eslint/consistent-type-imports: warn` - Use `import type` for types
