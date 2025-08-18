import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().min(10).max(500),
    image: z.string(),
    publishDate: z.string(),
    // Optional URL field for external posts (when migrating external content to local MDX)
    url: z.string().url().optional(),
  }),
});

export const collections = { blog };
