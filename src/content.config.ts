import { file, glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

// Maps
const churchMap = defineCollection({
	loader: glob({ pattern: '**/**.json', base: './src/data/map' }),
	schema: z.object({
		name: z.string(),
		// coords: z.array(z.number()),
		lat: z.number(),
		long: z.number(),
		pastor: z.string(),
		email: z.string(),
		url: z.string()
	})
});

// Front page content
// Internship
// Strategy
export const collections = { churchMap };
