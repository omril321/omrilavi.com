import { getCollection, type CollectionEntry } from "astro:content";

export type RelatedPostLink = { slug: string; title: string };

/**
 * Validates that the relatedPostSlugs in the entries are valid.
 * @param entries - The entries to validate.
 * @throws An error if any relatedPostSlugs are invalid.
 */
async function validateRelatedPostSlugs() {
  const entries = await getCollection("blog");
  const existingSlugs = new Set(entries.map((e) => e.slug));
  const invalidRefs: Array<{ from: string; missing: string }> = [];

  for (const entry of entries) {
    const related: string[] = entry.data.relatedPostSlugs ?? [];
    for (const slug of related) {
      if (!existingSlugs.has(slug)) {
        invalidRefs.push({ from: entry.slug, missing: slug });
      }
    }
  }

  if (invalidRefs.length > 0) {
    const details = invalidRefs.map((r) => `- from: ${r.from} -> missing related slug: ${r.missing}`).join("\n");
    throw new Error(`Found ${invalidRefs.length} invalid relatedPostSlugs. Please fix or remove.\n${details}`);
  }
}

/**
 * Gets the related posts for an entry.
 * @param entry - The entry to get related posts for.
 * @param allEntries - All the entries in the blog collection.
 * @returns The related posts.
 */
export async function getRelatedPosts(entry: CollectionEntry<"blog">): Promise<RelatedPostLink[]> {
  await validateRelatedPostSlugs();

  const allEntries = await getCollection("blog");
  const bySlug = new Map(allEntries.map((e) => [e.slug, e] as const));
  const related: string[] = entry.data.relatedPostSlugs ?? [];
  return related.map((slug) => {
    const found = bySlug.get(slug)!;
    return { slug: found.slug, title: found.data.title };
  });
}
