import { getAllPosts } from '@/lib/posts'
import { POSTS } from '@/utils/blog-meta'

const SITE = 'https://rehmanfarouq.site'
export const dynamic = 'force-static'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function GET() {
  const generated = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    title: p.title,
    description: p.description,
    date: new Date(p.publishedAt),
  }))
  const handWritten = Object.entries(POSTS).map(([slug, p]) => ({
    url: `${SITE}/blog/${slug}`,
    title: p.title,
    description: p.description,
    date: new Date(p.date + 'T00:00:00Z'),
  }))
  const items = [...generated, ...handWritten]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 50)
    .map(
      (i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${i.url}</link>
      <guid isPermaLink="true">${i.url}</guid>
      <pubDate>${i.date.toUTCString()}</pubDate>
      <description>${esc(i.description)}</description>
    </item>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rehman Farouq Blog</title>
    <link>${SITE}/blog</link>
    <description>Flutter, Next.js and web development articles and free tool guides.</description>
    <language>en</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  })
}
