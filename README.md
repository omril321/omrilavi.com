# omrilavi.com

Personal website built with Astro featuring blog posts, modern dark theme, and clean design system architecture.

🔗 **Live**: [omrilavi.com](https://omrilavi.com)

## Features

- ⚡ **Astro** - Fast static site generation with zero hydration
- 🎨 **Clean Design System** - Tailwind-first with centralized design tokens
- 📝 **Mixed content** - External posts + local MDX with Mermaid diagrams
- 🧪 **Visual regression testing** - Cross-device compatible with CI protection
- 📊 **Analytics** - Google Analytics with test exclusion
- 🚀 **CI/CD** - Netlify deployment with comprehensive test protection
- 🎯 **Type Safety** - Full TypeScript support with strict configuration

## Architecture

### Design System

Clean, maintainable CSS architecture built on:

```
Design Tokens (single source of truth)
    ↓
Tailwind Config (imports colors/typography)
    ↓
Components (pure Tailwind classes)
```

**Key Files:**

- `src/config/design-tokens.ts` - Centralized colors, typography, spacing
- `tailwind.config.js` - Minimal config using design tokens
- `src/global.css` - Essential resets only (18 lines)

### File Organization

```bash
src/
├── components/           # Reusable components
│   ├── SocialButton.astro   # Social links with platform-specific styling
│   ├── SEO.astro           # Centralized SEO meta tags
│   └── Analytics.astro     # Google Analytics integration
├── config/              # Configuration & constants
│   ├── constants.ts        # Personal info, social links
│   ├── design-tokens.ts    # Design system (colors, typography)
│   └── posts.ts           # External blog posts configuration
├── content/blog/        # Local MDX content with co-located assets
├── layouts/             # Page layouts
│   └── BlogPost.astro      # Blog post layout with typography
└── pages/               # Route pages
    ├── index.astro         # Homepage
    └── blog/[...slug].astro # Dynamic blog routing
```

## Development

```bash
# Start development server
yarn dev

# Run tests
yarn cypress:test

# Build for production
yarn build
yarn preview
```

## Testing

**Available Commands:**

- `yarn cypress:test` - Run all tests (recommended)
- `yarn cypress:dev` - Interactive test development
- `yarn cypress` - Open Cypress UI
- `yarn cypress:run` - Headless test run

**Test Coverage:**

- 17 functional tests (links, navigation, analytics)
- 5 visual regression tests (cross-device screenshots)

## Adding a New Blog Post

### Quick Checklist

To add a new internal blog post, you need to:

1. **Create post directory**: `src/content/blog/your-post-name/`
2. **Write the MDX file**: `src/content/blog/your-post-name/index.mdx`
3. **Add hero image**: `public/blog-assets/your-post-name.png/jpg`
4. **Add post assets** (optional): Place in post directory alongside `index.mdx`

### Detailed Steps

#### 1. Create Post Directory

```bash
mkdir src/content/blog/your-post-name
```

**Naming convention**: Use kebab-case (lowercase with hyphens)

#### 2. Create the MDX File

Create `src/content/blog/your-post-name/index.mdx` with the following frontmatter:

```mdx
---
title: "Your Post Title"
description: "A concise description of your post (10-500 characters). This appears in meta tags and post previews."
image: "/blog-assets/your-post-name.png"
publishDate: "2024-01-15"
---

## Your Content Here

Write your post content in MDX format. You can use:

- **Markdown syntax** for text formatting
- **Mermaid diagrams** for flowcharts and diagrams
- **Local images**: `![Alt text](./your-image.png)`
- **Code blocks** with syntax highlighting
```

#### 3. Add Hero Image

Create a hero image and place it in:

```
public/blog-assets/your-post-name.png
```

#### 4. Add Post-Specific Assets (Optional)

Place any additional images, screenshots, or files in your post directory:

```
src/content/blog/your-post-name/
├── index.mdx
├── screenshot1.png
└── code-example.png
```

Reference them in your MDX with relative paths:

```mdx
![Screenshot](./screenshot1.png)
```

#### 5. Frontmatter Reference

| Field         | Type   | Description                                   | Example                                                                |
| ------------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------- |
| `title`       | string | Post title (appears in hero and meta tags)    | `"Building Better APIs"`                                               |
| `description` | string | SEO description (10-500 chars)                | `"A guide to designing clean, maintainable REST APIs with TypeScript"` |
| `image`       | string | Hero image path (starts with `/blog-assets/`) | `"/blog-assets/building-apis.png"`                                     |
| `publishDate` | string | Publication date (YYYY-MM-DD format)          | `"2024-01-15"`                                                         |

#### 6. Development & Testing

After creating your post:

```bash
# Start development server to preview
yarn dev

# Run tests to ensure everything works
yarn cypress:test

# Build to check for any issues
yarn build
```

Your post will be available at: `http://localhost:4321/blog/your-post-name`

### Content Guidelines

- **Hero images**: Should be visually appealing and relevant to your content
- **Post assets**: Keep images optimized and use descriptive filenames
- **MDX features**: Take advantage of Mermaid diagrams for technical content
- **SEO**: Write compelling descriptions that accurately represent your content

### Automated Post Creation

For a streamlined, automated approach to adding new blog posts, use the comprehensive agent prompt available at:

**📋 `prompts/new_post.md`**

This prompt guides any AI assistant through the complete process.
Simply share the prompt with an AI assistant along with your markdown content, and it will handle the entire integration process automatically.

## Tech Stack

### Core

- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS + Design Tokens
- **Content**: MDX + Astro Content Collections
- **TypeScript**: Strict configuration with path mapping

### Integrations

- **Typography**: @tailwindcss/typography for blog posts
- **Diagrams**: astro-mermaid with theme integration
- **SEO**: Built-in meta tag management with schema.org
- **Analytics**: Google Analytics (production-only)

### Development & Testing

- **Testing**: Cypress (functional + visual regression)
- **Quality**: ESLint + TypeScript strict mode
- **CI/CD**: Netlify with deployment protection
- **Security**: Content Security Policy headers

### Performance

- **Bundle Size**: 69% reduction (55→17 packages)
- **CSS**: Minimal global styles (18 lines)
- **Images**: Optimized external assets
