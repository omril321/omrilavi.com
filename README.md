# omrilavi.com

Personal website built with Astro featuring blog posts and modern dark theme.

🔗 **Live**: [omrilavi.com](https://omrilavi.com)

## Features

- ⚡ **Astro** - Fast static site generation
- 🎨 **Dark theme** - Modern responsive design
- 📝 **Mixed content** - External posts + local MDX
- 🧪 **Visual regression testing** - Cross-device compatible
- 📊 **Analytics** - Google Analytics with test exclusion
- 🚀 **CI/CD** - Netlify deployment with test protection

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

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Testing**: Cypress + Visual Regression
- **Deployment**: Netlify
- **Analytics**: Google Analytics
