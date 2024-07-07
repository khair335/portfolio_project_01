
import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string(),
      author: z.string(),
      readingTime: z.string(),
      heroImage: z.string(),
    }),
  }),
};
