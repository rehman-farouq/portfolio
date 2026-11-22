import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { countWords } from '@/lib/markdown'

export interface Faq { q: string; a: string }

export interface Post {
  slug: string
  title: string
  description: string
  category: string
  keywords: string[]
  tags: string[]
  publishedAt: string // ISO
  updatedAt: string // ISO
  toolSlug?: string
  faqs: Faq[]
  readMinutes: number
  content: string // markdown
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

function parse(file: string): Post | null {
  try {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    if (!data.title || !data.description || !data.publishedAt) return null
    const published = new Date(data.publishedAt as string | Date)
    if (Number.isNaN(published.getTime())) return null
    const updated = data.updatedAt ? new Date(data.updatedAt as string | Date) : published
    return {
      slug,
      title: String(data.title),
      description: String(data.description),
      category: String(data.category ?? 'Guide'),
      keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      publishedAt: published.toISOString(),
      updatedAt: updated.toISOString(),
      toolSlug: data.toolSlug ? String(data.toolSlug) : undefined,
      faqs: Array.isArray(data.faqs)
        ? data.faqs
            .filter((f: any) => f && f.q && f.a)
            .map((f: any) => ({ q: String(f.q), a: String(f.a) }))
        : [],
      readMinutes: Math.max(1, Math.round(countWords(content) / 200)),
      content,
    }
  } catch {
    return null
  }
}

/** All generated posts, newest first. Read at build time only. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(parse)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
}
