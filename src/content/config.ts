import { defineCollection, z } from "astro:content";

// Base schema for all posts
export const basePostSchema = z.object({
  title: z.string(),
  description: z.string().min(10).max(500),
  image: z.string(),
  publishDate: z.coerce.date(),
  relatedPostSlugs: z.array(z.string()).optional(),
});

// Blog collection schema (no URL needed)
const blogSchema = basePostSchema.extend({
  // Optional URL field for external posts (when migrating external content to local MDX)
  url: z.string().url().optional(),
});

// External post schema (URL required)
export const externalPostSchema = basePostSchema.extend({
  url: z.string().url(),
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

// Type exports for use throughout the app
export type BlogEntry = z.infer<typeof blogSchema>;
export type ExternalPost = z.infer<typeof externalPostSchema>;

export const collections = { blog };
