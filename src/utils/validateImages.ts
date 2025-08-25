/**
 * Simple image validation utility
 * Checks if images exist during build time (optional)
 */

import fs from "fs";
import path from "path";

function validateImageExists(fullPath: string): boolean {
  return fs.existsSync(fullPath);
}

function validateImageIsOptimized(imagePath: string): boolean {
  if (imagePath.endsWith(".png")) {
    return false;
  }
  return true;
}

export function validateAllPostImages(posts: Array<{ image: string; title: string }>): void {
  const missingImages: string[] = [];

  const nonOptimizedImages: string[] = [];

  posts.forEach((post) => {
    const cleanPath = post.image.startsWith("/") ? post.image.slice(1) : post.image;
    const fullPath = path.join(process.cwd(), "public", cleanPath);
    if (!validateImageExists(fullPath)) {
      missingImages.push(`${post.title}: ${fullPath}`);
    }
    if (!validateImageIsOptimized(fullPath)) {
      nonOptimizedImages.push(`${post.title}: ${fullPath}`);
    }
  });

  if (missingImages.length > 0) {
    console.error("⚠️  Missing blog post images:");
    missingImages.forEach((missing) => console.warn(`  - ${missing}`));

    throw new Error(`Missing ${missingImages.length} blog post images`);
  }

  if (nonOptimizedImages.length > 0) {
    console.error("⚠️  Non-optimized blog post images:");
    nonOptimizedImages.forEach((nonOptimized) => console.warn(`  - ${nonOptimized}`));

    throw new Error(
      `Non-optimized ${nonOptimizedImages.length} blog post images. Use scripts/png2small.sh to optimize them.`
    );
  }
  console.log("✅ All blog post images validated");
}
