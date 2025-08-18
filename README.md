# omrilavi.com

Omri Lavi's personal website - **Currently migrating from Qwik to Astro**

## 🚧 Migration Status

**Current Phase**: Step 2 - Content Collections & Routing  
**Target**: Pure Astro application with mixed content strategy (external links + local MDX posts)

### Architecture Overview

- **Homepage**: Hero section + Posts grid (matches current Qwik design)
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

### Commands During Migration

- `yarn dev` → Qwik (current site)
- `yarn dev:astro` → New Astro site (in development)
- `yarn build:astro` → Build Astro version

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
# Qwik (current)
yarn dev

# Astro (new)
yarn dev:astro
yarn build:astro
npx astro check
```

## Project Structure (During Migration)

```
├── src/
│   ├── components/           # Qwik components (will be migrated/removed)
│   ├── routes/              # Qwik routes (will be removed)
│   ├── content/             # Astro content collections
│   │   └── blog/           # Local MDX blog posts
│   ├── layouts/            # Astro layouts
│   ├── pages/              # Astro pages
│   └── config/
│       ├── constants.ts    # Bio content, social links
│       └── posts.ts        # External posts data
├── public/
│   └── blog-assets/        # Assets for local blog posts
└── MIGRATION_TO_ASTRO.md   # Migration plan (temporary)
```

---

## ⚠️ Important Notes

- **Migration Documentation**: `MIGRATION_TO_ASTRO.md` is temporary and will be deleted after migration
- **Dual Setup**: Both Qwik and Astro run side-by-side during migration
- **Final State**: Pure Astro application, all Qwik code will be completely removed
