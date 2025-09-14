import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { turkishSlugify } from '../utils/slugify';

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            // Ensure pubDate is present for feeds
            pubDate: post.data.pubDate ?? post.data.date,
            link: `/site/${(post.data.slug ?? turkishSlugify(post.data.title))}/`,
        })),
    });
}
