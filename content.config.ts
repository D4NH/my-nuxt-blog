import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        travel: defineCollection({
            type: 'page',
            source: 'travel/**/*.{md,json}',
            schema: z.object({
                category: z.string(),
                date: z.string(),
                image: z.string(),
                intro: z.string(),
                meta: z
                    .object({
                        category: z.string(),
                        date: z.string(),
                        intro: z.string(),
                        image: z.string(),
                    })
                    .optional(),
                images: z.array(z.string()).optional(),
            }),
        }),
    },
});
