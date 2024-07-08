import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.preprocess((arg) => new Date(arg), z.date()),
    pubTime: z.number(),
    views: z.number(),
    description: z.string(),
    layout: z.string(),
  }),
});

export const collections = { blog };
