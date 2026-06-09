import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const writingSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: writingSchema,
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: writingSchema,
});

export const collections = { blog, journal };
