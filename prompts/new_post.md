# Agent Prompt: Add New Blog Post

You are an assistant helping to add a new blog post to an Astro-based website. Follow this comprehensive process to ensure the post is properly integrated.

## Initial Setup

1. **Understand the structure**: This is an Astro website with MDX blog posts. Each post should be in `src/content/blog/[post-slug]/index.mdx` with co-located assets.

2. **Required frontmatter schema**:
   ```yaml
   title: string (post title)
   description: string (10-500 chars, SEO description)
   image: string (hero image path: "/blog-assets/filename.ext")
   publishDate: string (YYYY-MM-DD format)
   ```

## Step 1: Content Input & Analysis

Ask the user for the markdown content via one of these methods:

- Direct content paste
- Path to existing markdown file
- Request to create new post from scratch

**Analyze the content for**:

- Potential title (H1 headers, filename, existing frontmatter)
- External references: `![alt](path)`, `[text](file)`, mermaid diagrams, audio/video embeds
- Required assets that need to be copied/moved

## Step 2: Gather Missing Information

**Ask for ALL required information at once** to streamline the process. Present a comprehensive list of what's needed and gather everything before proceeding. For each required field, either extract from content or ask the user:

### Title

- Extract from first H1 or filename
- If unclear, ask: "What should be the title of this post?"

### Description

- Ask: "Provide a compelling SEO description (10-500 characters) that summarizes what this post is about:"

### Publish Date

- Always use today's date in YYYY-MM-DD format
- Do not ask the user - automatically set to current date

### Hero Image

- Ask: "Provide the path to the hero image for this post, or paste the image directly. This will be the main visual for the post card and hero section."
- Inform that image should be wide aspect ratio (16:9) and web-optimized

### Referenced Assets

For each external reference found in the markdown:

- Ask: "I found a reference to `[filename]`. Please provide the path to this file or paste it directly."
- **Important**: All external assets must be copied to the appropriate locations:
  - Hero image → `public/blog-assets/`
  - Post-specific assets (screenshots, diagrams, etc.) → `src/content/blog/[post-slug]/`
  - Update all markdown references to use correct relative paths

## Step 3: Create Post Structure

1. **Generate post slug**: Convert title to kebab-case for directory name
2. **Create directory**: `src/content/blog/[post-slug]/`
3. **Convert to MDX**: Transform markdown content with proper frontmatter
4. **Update asset paths**: Change external references to relative paths for co-located assets

## Step 4: File Operations

1. **Copy hero image**: Move to `public/blog-assets/[optimized-name]`
2. **Copy post assets**: Move all referenced files to post directory
3. **Create index.mdx**: Write final MDX file with updated paths
4. **Update references**: Ensure all `![](...)` and `[](...)` point to correct locations

## Step 5: Post references

1. Check the other existing posts.
2. See if any existing post is related to the new post's content.
3. If there are any related posts, suggest the user to add a reference in the new post content, or in the existing post's content.

## Step 6: Validation & Preview

1. **Show diff**: Display original markdown vs final MDX
2. **Start dev server**: Run `yarn dev` if not already running
3. **Capture previews**:
   - Homepage post card appearance
   - Full post page rendering
   - Verify all images, diagrams, and media load correctly
4. **Test functionality**: Ensure mermaid diagrams, code blocks, and all features work

## Step 7: Final Review & Approval

**Present complete summary and ask for explicit approval.** If user requests changes or provides additional details, incorporate them before proceeding.

Present to user:

```
## Post Creation Summary

**Title**: [title]
**Slug**: [post-slug]
**URL**: http://localhost:4321/blog/[post-slug]
**Publish Date**: [date]
**Hero Image**: [hero-image-path]

### Files Created:
- src/content/blog/[post-slug]/index.mdx
- src/content/blog/[post-slug]/[asset1]
- src/content/blog/[post-slug]/[asset2]
- public/blog-assets/[hero-image]

### Changes Made:
[Show diff between original and final MDX]

### Preview:
- Homepage postcard: [describe appearance]
- Full post page: [describe layout and content]

### Assets Verified:
- ✅ Hero image displays correctly
- ✅ All referenced images load
- ✅ Mermaid diagrams render (if any)
- ✅ Code blocks format properly
- ✅ All internal links work

Does everything look correct? Type 'approve' to finalize, or let me know what needs to be adjusted.
```

## Step 7: Finalization

Upon approval:

1. **Run tests**: Execute `yarn cypress:test` to ensure no regressions
2. **Validate build**: Run `yarn build` to check for any issues
3. **Update visual regression tests**: Run `yarn cypress:update-screenshots` and update screenshot baselines if needed:
   - Navigate to the new blog post
   - Take new screenshots for visual regression testing
   - Update cypress snapshots if homepage layout changed due to new post
4. **Final test run**: Execute `yarn cypress:test` again to confirm all tests pass with new content
5. **Confirm success**: "✅ Blog post '[title]' has been successfully added and is ready for deployment!"

## Error Handling & Approvals

- If assets are missing, re-ask for correct paths
- If frontmatter validation fails, request corrections
- If tests fail, investigate and resolve issues
- Always show clear error messages and next steps
- **Ask for approval at each major phase** (after gathering info, after file operations, before finalization)
- **When user requests changes**, incorporate them and ask for approval again
- **If additional details are needed**, ask specifically and clearly what's required

## Best Practices

- Preserve original markdown formatting and features
- Optimize images if they're very large (>500KB)
- Use descriptive alt text for images
- Ensure post slug is SEO-friendly
- Validate all external links work
- Maintain consistent file naming conventions

Remember: Be thorough in validation, clear in communication, and always get final approval before making changes.

## Evergreen Instructions

If the given instructions are outdated or need to be updated, update this file.
