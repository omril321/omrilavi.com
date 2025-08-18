/**
 * Simple image validation utility
 * Checks if images exist during build time (optional)
 */

import fs from "fs";
import path from "path";

export function validateImageExists(imagePath: string): boolean {
  // Remove leading slash and convert to file system path
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(process.cwd(), "public", cleanPath);

  return fs.existsSync(fullPath);
}

export function validateAllPostImages(posts: Array<{ image: string; title: string }>): void {
  const missingImages: string[] = [];

  posts.forEach((post) => {
    if (!validateImageExists(post.image)) {
      missingImages.push(`${post.title}: ${post.image}`);
    }
  });

  if (missingImages.length > 0) {
    console.error("⚠️  Missing blog post images:");
    missingImages.forEach((missing) => console.warn(`  - ${missing}`));

    throw new Error(`Missing ${missingImages.length} blog post images`);
  } else {
    console.log("✅ All blog post images validated");
  }
}
