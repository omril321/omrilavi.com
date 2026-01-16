#!/usr/bin/env node

/**
 * Generate OG images for blog posts
 *
 * Scans all blog posts for `image` paths in frontmatter and converts
 * AVIF/WebP images to JPG format for social sharing compatibility.
 *
 * Output: For `/blog-assets/foo.avif` → `/blog-assets/foo-og.jpg`
 */

import { readFile, readdir, stat } from "node:fs/promises";
import { join, dirname, basename, extname } from "node:path";
import sharp from "sharp";

const BLOG_DIR = "src/content/blog";
const PUBLIC_DIR = "public";
const SUPPORTED_EXTENSIONS = [".avif", ".webp"];

/**
 * Extract image path from frontmatter
 */
function extractImagePath(content) {
  const imageMatch = content.match(/^image:\s*["']?([^"'\n]+)["']?/m);
  return imageMatch ? imageMatch[1].trim() : null;
}

/**
 * Get the OG image path for a given source image path
 * e.g., /blog-assets/foo.avif → /blog-assets/foo-og.jpg
 */
function getOgImagePath(imagePath) {
  const ext = extname(imagePath);
  const baseName = basename(imagePath, ext);
  const dir = dirname(imagePath);
  return join(dir, `${baseName}-og.jpg`);
}

/**
 * Check if file exists and get its mtime
 */
async function getFileMtime(filePath) {
  try {
    const stats = await stat(filePath);
    return stats.mtime;
  } catch {
    return null;
  }
}

/**
 * Generate OG image from source
 */
async function generateOgImage(sourcePath, destPath) {
  await sharp(sourcePath)
    .resize(1200, 630, {
      fit: "cover",
      position: "center",
    })
    .jpeg({
      quality: 85,
      mozjpeg: true,
    })
    .toFile(destPath);
}

async function main() {
  console.log("🖼️  Generating OG images for blog posts...\n");

  // Find all blog post directories
  const blogDirs = await readdir(BLOG_DIR);
  let generated = 0;
  let skipped = 0;

  for (const dir of blogDirs) {
    const mdxPath = join(BLOG_DIR, dir, "index.mdx");

    // Check if index.mdx exists
    const mdxExists = await getFileMtime(mdxPath);
    if (!mdxExists) continue;

    // Read frontmatter
    const content = await readFile(mdxPath, "utf-8");
    const imagePath = extractImagePath(content);

    if (!imagePath) {
      console.log(`⚠️  ${dir}: No image found in frontmatter`);
      continue;
    }

    // Check if source format is supported
    const ext = extname(imagePath).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.includes(ext)) {
      console.log(`⏭️  ${dir}: Skipping ${ext} (already JPG/PNG)`);
      skipped++;
      continue;
    }

    // Build file paths
    const sourceFile = join(PUBLIC_DIR, imagePath.replace(/^\//, ""));
    const ogImagePath = getOgImagePath(imagePath);
    const destFile = join(PUBLIC_DIR, ogImagePath.replace(/^\//, ""));

    // Check if source exists
    const sourceMtime = await getFileMtime(sourceFile);
    if (!sourceMtime) {
      console.log(`⚠️  ${dir}: Source image not found: ${sourceFile}`);
      continue;
    }

    // Check if dest exists and is newer
    const destMtime = await getFileMtime(destFile);
    if (destMtime && destMtime >= sourceMtime) {
      console.log(`⏭️  ${dir}: OG image up to date`);
      skipped++;
      continue;
    }

    // Generate OG image
    try {
      await generateOgImage(sourceFile, destFile);
      console.log(`✅ ${dir}: Generated ${basename(destFile)}`);
      generated++;
    } catch (error) {
      console.error(`❌ ${dir}: Failed to generate OG image:`, error.message);
    }
  }

  console.log(`\n📊 Summary: ${generated} generated, ${skipped} skipped`);
}

main().catch(console.error);
