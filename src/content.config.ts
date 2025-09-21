import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema. Allow legacy WP-style fields too.
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            // Support either pubDate or date in frontmatter
            pubDate: z.coerce.date().optional(),
            date: z.coerce.date().optional(),
            updatedDate: z.coerce.date().optional(),
            // Prefer heroImage but allow legacy or object-based coverImage
            heroImage: image().optional(),
            coverImage: z
                .union([
                    z.strictObject({ src: image(), alt: z.string() }),
                    z.string(),
                ])
                .optional(),
            slug: z.string().optional(),
            tags: z.array(z.string()).optional(),
            categories: z.array(z.string()).optional(),
        }),
});

// Theme-compatible "posts" collection mapped to our blog content
const posts = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            // Theme expects `published`; map from either pubDate or date
            published: z.coerce.date().optional(),
            pubDate: z.coerce.date().optional(),
            date: z.coerce.date().optional(),
            draft: z.boolean().optional().default(false),
            description: z.string().optional(),
            author: z.string().optional(),
            tags: z.array(z.string()).optional().default([]),
            // Accept both image() object and string filenames
            coverImage: z
                .union([
                    z.strictObject({ src: image(), alt: z.string() }),
                    z.string(),
                ])
                .optional(),
            toc: z.boolean().optional().default(true),
            slug: z.string().optional(),
            heroImage: image().optional(),
            categories: z.array(z.string()).optional(),
        }),
});

// Optional theme collection for homepage content block
const home = defineCollection({
    loader: glob({ base: './src/content', pattern: ['home.md', 'home.mdx'] }),
    schema: ({ image }) =>
        z.object({
            avatarImage: z
                .object({
                    src: image(),
                    alt: z.string().optional().default('My avatar'),
                })
                .optional(),
            githubCalendar: z.string().optional(),
        }),
});

export const collections = { blog, posts, home };
