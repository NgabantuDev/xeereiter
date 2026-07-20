import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// `swatch` picks one of six placeholder gradient variants (see ArtTile.astro)
// until a real photo is dropped in via `image`. Once `image` is set, ArtTile
// renders the optimized photo instead and `swatch` is ignored.
const illustrations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/illustrations' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['illustration', 'mural', 'label']),
      client: z.string().optional(),
      year: z.string().optional(),
      medium: z.string().optional(),
      description: z.string().optional(),
      image: image().optional(),
      alt: z.string().optional(),
      swatch: z.number().min(1).max(6).default(1),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

const murals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/murals' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(),
      partner: z.string().optional(),
      year: z.string().optional(),
      description: z.string(),
      image: image().optional(),
      alt: z.string().optional(),
      swatch: z.number().min(1).max(6).default(2),
      order: z.number().default(0),
    }),
});

export const collections = { illustrations, murals };
