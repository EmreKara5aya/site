import rss from '@astrojs/rss'
import siteConfig from '~/site.config'
import type { AstroGlobal } from 'astro'
import { getSortedPosts } from '~/utils'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
import { turkishSlugify } from '../utils/slugify'
const parser = new MarkdownIt()

// https://docs.astro.build/en/recipes/rss/
export async function GET(_context: AstroGlobal) {
  if (!siteConfig.site) {
    console.warn(
      'Site URL is required for RSS feed generation. Skipping RSS feed generation.',
    )
    return
  }
  const posts = await getSortedPosts()
  return rss({
    stylesheet: '/rss.xsl',
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: (post.data.published ?? post.data.pubDate ?? post.data.date) as Date,
      description: post.data.description,
      author: post.data.author || siteConfig.author,
      link: `/${(post.data.slug as string) || turkishSlugify(post.data.title)}`,
      content: sanitizeHtml(parser.render(post.body || ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
    trailingSlash: false,
  })
}
