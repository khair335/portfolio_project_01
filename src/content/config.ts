import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema:({image})=> z.object({
    title: z.string(),
    pubDate: z.date(), // Automatically parses ISO string to Date object
    pubTime: z.number(), // Assuming this is intended to represent time in minutes
    views: z.number(),
    description: z.string(),

    image: z.object({
      src: image(),
      alt: z.string(),
    }),
    author: z.string(), // Assuming author name
    authorImg: z.object({
      src: image(),
      alt: z.string(),
    }),
  }),
});


export const collections = { blog };
