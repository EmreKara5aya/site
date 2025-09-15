import type { APIRoute } from 'astro'
import { getSortedPosts } from '~/utils'

export const GET: APIRoute = async () => {
  const posts = await getSortedPosts()
  const tagMap = new Map<string, number>()
  for (const p of posts) {
    const tags = p.data.tags || []
    for (const t of tags) tagMap.set(t, (tagMap.get(t) || 0) + 1)
  }
  const tags = Array.from(tagMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count, href: `/tags/${encodeURIComponent(tag)}` }))

  return new Response(JSON.stringify({ tags }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=3600' },
  })
}

