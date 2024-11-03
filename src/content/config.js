import { z, defineCollection } from 'astro:content';

export const collections = {
  'sections': defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      color: z.string().optional(),
      position: z.number().optional().default(0),
      icon: z.string().optional(),
    }),
  }),
};
