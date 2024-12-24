import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  loader: glob({ pattern: '**/*.(md|mdx|html)', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});

export const collections = {
  news,
};
