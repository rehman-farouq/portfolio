import { Marked, type Tokens } from 'marked'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const slugifyHeading = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80)

/**
 * Markdown -> HTML for AI-generated posts.
 * Safety: raw HTML in the markdown is escaped (never rendered), images are dropped,
 * and only http(s) / relative / mailto / anchor links are kept.
 */
const marked = new Marked({
  gfm: true,
  breaks: false,
  renderer: {
    html({ text }: Tokens.HTML | Tokens.Tag) {
      return escapeHtml(text)
    },
    image() {
      return ''
    },
    heading(this: any, { tokens, depth }: Tokens.Heading) {
      const inner = this.parser.parseInline(tokens)
      const id = slugifyHeading(inner)
      return `<h${depth} id="${id}">${inner}</h${depth}>\n`
    },
    link(this: any, { href, title, tokens }: Tokens.Link) {
      const inner = this.parser.parseInline(tokens)
      const safe = /^(https?:\/\/|\/|#|mailto:)/i.test(href)
      if (!safe) return inner
      const external = /^https?:\/\//i.test(href)
      const attrs = external ? ' target="_blank" rel="noopener noreferrer nofollow"' : ''
      const t = title ? ` title="${escapeHtml(title)}"` : ''
      return `<a href="${escapeHtml(href)}"${t}${attrs}>${inner}</a>`
    },
  },
})

export function renderMarkdown(md: string): string {
  return marked.parse(md, { async: false }) as string
}

export function extractHeadings(md: string): { id: string; text: string }[] {
  const out: { id: string; text: string }[] = []
  let inFence = false
  for (const line of md.split('\n')) {
    if (/^```/.test(line)) inFence = !inFence
    if (inFence) continue
    const m = /^##\s+(.+?)\s*$/.exec(line)
    if (m) {
      const text = m[1].replace(/[*_`]/g, '')
      out.push({ id: slugifyHeading(text), text })
    }
  }
  return out
}

export function countWords(md: string): number {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`|\-\[\]()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
}
