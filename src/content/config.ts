import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});

export const collections = {
  news: news,
};
