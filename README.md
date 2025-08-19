# omrilavi.com

Omri Lavi's personal website - **Built with Astro**

## ✅ Completed Migration

**Status**: Pure Astro application  
**Features**: Mixed content strategy (external links + local MDX posts)

### Architecture Overview

- **Homepage**: Hero section + Posts grid with modern dark theme
- **Hero Section**: Name, bio (expandable), social links, tagline "Building Tools for Developers"
- **Posts Grid**: Mixed external (dev.to, medium, etc.) + local MDX posts, sorted by date
- **Content Collections**: Type-safe local blog posts with Zod validation
- **Routing**: `/blog/[slug]` for local posts, external URLs for external posts

### Bio Content (from constants.ts)

- **Short**: Tech Lead at monday.com, developer tools & client architecture specialist
- **Medium**: 10+ years experience, testing infrastructure, platform engineering
- **Long**: Full background including Testing Guild leadership and conference speaking

### Social Links

- LinkedIn: https://linkedin.com/in/omri-lavi
- GitHub: https://github.com/omril321
- Dev.To: https://dev.to/omril321
- Medium: https://medium.com/@omril321
- Twitter: https://twitter.com/omril321

### Commands

- `yarn dev` → Astro development server
- `yarn build` → Build for production
- `yarn preview` → Preview production build

### Content Collections Schema

```typescript
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().min(10).max(500),
    image: z.string(),
    publishDate: z.string(),
    url: z.string().url().optional(), // For external posts migrated to local
  }),
});
```

## Development

```bash
# Development
yarn dev

# Production
yarn build
yarn preview

# Type checking
npx astro check
```

## Project Structure

```
├── src/
│   ├── components/         # Astro components
│   ├── content/           # Astro content collections
│   │   └── blog/         # Local MDX blog posts
│   ├── layouts/          # Astro layouts
│   ├── pages/            # Astro pages
│   └── config/
│       ├── constants.ts  # Bio content, social links
│       └── posts.ts      # External posts data
├── public/
│   └── blog-assets/      # Assets for local blog posts
└── cypress/              # E2E tests with visual regression
```

---

## ✨ Features

- **Modern Astro Framework**: Fast, optimized static site generation
- **Dark Theme**: Premium dark theme with responsive design
- **Content Collections**: Type-safe local blog posts with Zod validation
- **Visual Regression Testing**: Comprehensive Cypress tests with screenshot comparison
- **SEO Optimized**: Open Graph, Twitter Cards, JSON-LD structured data
- **Performance**: Minimal dependencies, optimized build pipeline
