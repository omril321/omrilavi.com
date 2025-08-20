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
