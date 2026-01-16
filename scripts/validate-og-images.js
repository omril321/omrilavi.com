#!/usr/bin/env node

/**
 * Validates that all OG images are generated and committed.
 * OG images are derived from blog post hero images (AVIF/WebP → JPG).
 * Pattern: {original-filename}-og.jpg in the same directory.
 */

import { execSync } from "child_process";
import { existsSync, readFileSync, readdirSync } from "fs";
import { join } from "path";

const BLOG_DIR = "src/content/blog";

function extractImagePath(mdxContent) {
  const match = mdxContent.match(/^image:\s*["']?([^"'\n]+)["']?/m);
  return match ? match[1].trim() : null;
}

function isOgSourceImage(imagePath) {
  return /\.(avif|webp)$/i.test(imagePath);
}

function toOgPath(imagePath) {
  // /blog-assets/foo.avif → public/blog-assets/foo-og.jpg
  const withoutExt = imagePath.replace(/\.(avif|webp)$/i, "");
  return `public${withoutExt}-og.jpg`;
}

function isTrackedByGit(filePath) {
  try {
    execSync(`git ls-files --error-unmatch "${filePath}"`, {
      stdio: "pipe",
    });
    return true;
  } catch {
    return false;
  }
}

function validateOgImages() {
  const errors = [];

  const blogDirs = readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const slug of blogDirs) {
    const mdxPath = join(BLOG_DIR, slug, "index.mdx");

    if (!existsSync(mdxPath)) continue;

    const content = readFileSync(mdxPath, "utf-8");
    const imagePath = extractImagePath(content);

    if (!imagePath || !isOgSourceImage(imagePath)) continue;

    const ogPath = toOgPath(imagePath);

    if (!existsSync(ogPath)) {
      errors.push({
        type: "missing",
        ogPath,
        message: `OG image missing: ${ogPath}\nRun 'yarn build' to generate it, then commit.`,
      });
      continue;
    }

    if (!isTrackedByGit(ogPath)) {
      errors.push({
        type: "uncommitted",
        ogPath,
        message: `OG image not committed: ${ogPath}\nRun 'git add ${ogPath}' to stage it.`,
      });
    }
  }

  return errors;
}

console.log("Checking OG images...");

const errors = validateOgImages();

if (errors.length > 0) {
  console.error("\nERROR: OG image validation failed:\n");
  for (const error of errors) {
    console.error(`  ${error.message}\n`);
  }
  process.exit(1);
}

console.log("OG images validated.");
