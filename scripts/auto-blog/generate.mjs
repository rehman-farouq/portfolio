#!/usr/bin/env node
/**
 * Auto-blog generator.
 *
 *   node scripts/auto-blog/generate.mjs --slot am      # tool how-to / evergreen guide
 *   node scripts/auto-blog/generate.mjs --slot pm      # trending dev topic
 *   node scripts/auto-blog/generate.mjs --lane tool    # force a lane: tool | evergreen | trending
 *   node scripts/auto-blog/generate.mjs --dry          # print the post, do not write files
 *
 * Needs: GEMINI_API_KEY.  Optional: GEMINI_MODEL, GITHUB_TOKEN.
 * No npm dependencies - plain Node 20+.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const POSTS_DIR = path.join(ROOT, 'content', 'posts')
const STATE_FILE = path.join(ROOT, 'content', 'auto-blog-state.json')
const TOOLS_DIR = path.join(ROOT, 'src', 'app', 'tools')
const BLOG_DIR = path.join(ROOT, 'src', 'app', 'blog')
const BLOG_META = path.join(ROOT, 'src', 'utils', 'blog-meta.ts')
const TOOL_CONTENT = path.join(ROOT, 'src', 'utils', 'tool-content.ts')
const TOPICS_FILE = path.join(ROOT, 'scripts', 'auto-blog', 'topics.json')

const GEMINI_BASE = process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com'
// Model names change often. Put the one you want in the GEMINI_MODEL repo variable; the rest are fallbacks.
const MODELS = [...new Set([
  process.env.GEMINI_MODEL,
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
].filter(Boolean))]
// A model that keeps failing (503 / timeout) is skipped for the rest of the run.
const downModels = new Set()

const CATEGORIES = ['Tools', 'Guide', 'Tutorial', 'News', 'Comparison']

// Tools whose posts must carry a "not advice" note (added by this script, not left to the model).
const HEALTH_TOOLS = new Set(['bmi-calculator', 'calorie-calculator', 'calorie-burner', 'caffeine-calculator', 'pregnancy-calculator', 'water-intake', 'sleep-calculator'])
const FINANCE_TOOLS = new Set(['loan-calculator', 'roi-calculator', 'discount-calculator', 'tip-calculator', 'fuel-cost-calculator', 'project-cost-estimator'])

// Trending posts are only written about the site's niche.
const NICHE =
  /\b(flutter|dart|next\.?js|react|vercel|tailwind|typescript|javascript|node\.?js|bun|deno|css|html|frontend|front-end|web ?dev|webassembly|wasm|firebase|supabase|android|ios|swift|kotlin|mobile app|api|llm|ai agent|claude|gemini|openai|cursor|copilot|github|docker|git|postgres|sqlite|rust|open[- ]source|developer|programming|devtools?|browser|chrome|vite|svelte|vue|angular)\b/i

const GH_REPOS = ['flutter/flutter', 'vercel/next.js', 'facebook/react', 'tailwindlabs/tailwindcss', 'microsoft/TypeScript', 'dart-lang/sdk']
const DEVTO_TAGS = ['flutter', 'nextjs', 'react', 'webdev', 'typescript', 'javascript', 'ai']

// ───────────────────────── helpers ─────────────────────────
const args = process.argv.slice(2)
const flag = (name) => args.includes(`--${name}`)
const opt = (name) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 ? args[i + 1] : undefined
}
const log = (...a) => console.log('[auto-blog]', ...a)
const warn = (msg) => console.log(`::warning::${msg}`)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const readJson = (file, fallback) => {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch {
    return fallback
  }
}

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 70)
    .replace(/-+$/, '')

const words = (s) => s.toLowerCase().match(/[a-z0-9]+/g) ?? []
const similarity = (a, b) => {
  const A = new Set(words(a).filter((w) => w.length > 2))
  const B = new Set(words(b).filter((w) => w.length > 2))
  if (!A.size || !B.size) return 0
  let hit = 0
  for (const w of A) if (B.has(w)) hit++
  return hit / Math.min(A.size, B.size)
}

/** Pakistan local date (the site owner's timezone). */
const pkDate = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Karachi' })
const dayOfYear = () => {
  const [y, m, d] = pkDate().split('-').map(Number)
  return Math.floor((Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 0)) / 86400000)
}

async function fetchJson(url, headers = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': 'portfolio-auto-blog', ...headers }, signal: AbortSignal.timeout(15000) })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

async function fetchPageText(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-auto-blog)' },
      signal: AbortSignal.timeout(12000),
      redirect: 'follow',
    })
    if (!res.ok || !(res.headers.get('content-type') || '').includes('text/html')) return ''
    const html = await res.text()
    return html
      .replace(/<(script|style|noscript|svg|nav|footer|header)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 7000)
  } catch {
    return ''
  }
}

// ───────────────────────── existing content index ─────────────────────────
function parseFrontmatter(raw) {
  const m = /^---\n([\s\S]*?)\n---/.exec(raw)
  const out = {}
  if (!m) return out
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(': ')
    if (i < 0) continue
    try {
      out[line.slice(0, i)] = JSON.parse(line.slice(i + 2))
    } catch {
      out[line.slice(0, i)] = line.slice(i + 2)
    }
  }
  return out
}

function loadExisting() {
  const posts = [] // { slug, title, toolSlug?, kind }
  // hand-written posts (blog-meta.ts)
  try {
    const meta = fs.readFileSync(BLOG_META, 'utf8')
    const re = /"([a-z0-9-]+)":\s*\{\s*"title":\s*"((?:[^"\\]|\\.)*)"/g
    let m
    while ((m = re.exec(meta))) posts.push({ slug: m[1], title: JSON.parse(`"${m[2]}"`), kind: 'manual' })
  } catch {}
  // any other hand-written folder not in blog-meta
  try {
    for (const d of fs.readdirSync(BLOG_DIR, { withFileTypes: true })) {
      if (d.isDirectory() && !d.name.startsWith('[') && !posts.some((p) => p.slug === d.name)) {
        posts.push({ slug: d.name, title: d.name.replace(/-/g, ' '), kind: 'manual' })
      }
    }
  } catch {}
  // generated posts
  if (fs.existsSync(POSTS_DIR)) {
    for (const f of fs.readdirSync(POSTS_DIR).filter((x) => x.endsWith('.md'))) {
      const fm = parseFrontmatter(fs.readFileSync(path.join(POSTS_DIR, f), 'utf8'))
      posts.push({ slug: f.replace(/\.md$/, ''), title: fm.title || f, toolSlug: fm.toolSlug, kind: 'auto' })
    }
  }
  return posts
}

function loadTools() {
  const tools = []
  let contentSrc = ''
  try {
    contentSrc = fs.readFileSync(TOOL_CONTENT, 'utf8')
  } catch {}
  for (const d of fs.readdirSync(TOOLS_DIR, { withFileTypes: true })) {
    if (!d.isDirectory()) continue
    const pageFile = path.join(TOOLS_DIR, d.name, 'page.tsx')
    if (!fs.existsSync(pageFile)) continue
    const src = fs.readFileSync(pageFile, 'utf8')
    const t = /generateToolSEO\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]/.exec(src)
    const name = t ? t[2] : d.name.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
    const aboutRe = new RegExp(`'${d.name}':\\s*\\{\\s*about:\\s*\\n?\\s*'((?:[^'\\\\]|\\\\.)*)'`)
    const a = aboutRe.exec(contentSrc)
    tools.push({ slug: d.name, name, about: a ? a[1].replace(/\\'/g, "'") : '' })
  }
  return tools
}

// ───────────────────────── lanes ─────────────────────────
function pickTool(existing, state) {
  const used = new Set([...existing.filter((p) => p.toolSlug).map((p) => p.toolSlug), ...(state.usedTools ?? [])])
  const free = loadTools().filter((t) => !used.has(t.slug))
  if (!free.length) return null
  const t = free[Math.floor(Math.random() * free.length)]
  return {
    lane: 'tool',
    toolSlug: t.slug,
    toolName: t.name,
    sourceKey: `tool:${t.slug}`,
    brief: [
      `Write a practical how-to article built around our free online tool "${t.name}", available at /tools/${t.slug} on this site.`,
      t.about ? `What the tool does (use only this as fact about the tool): ${t.about}` : `The tool is called "${t.name}". Describe it only in general terms; do not invent specific buttons, options or features.`,
      `Cover: what problem people use it for, how to use it step by step, a worked example with realistic numbers or input, common mistakes, and when a different approach is better.`,
      `Link to the tool once, naturally, as [${t.name}](/tools/${t.slug}).`,
    ].join('\n'),
    category: 'Tools',
    keyword: `${t.name.toLowerCase()} online free`,
    minWords: 600,
  }
}

function pickEvergreen(existing, state) {
  const topics = readJson(TOPICS_FILE, [])
  const used = new Set(state.usedTopics ?? [])
  const titles = existing.map((p) => p.title)
  const free = topics.filter((t) => !used.has(t.topic) && !titles.some((x) => similarity(x, t.topic) > 0.8))
  if (!free.length) return null
  const t = free[0] // list order = priority; edit topics.json to steer
  return {
    lane: 'evergreen',
    sourceKey: `topic:${t.topic}`,
    topic: t.topic,
    brief: [
      `Write an in-depth, practical guide on: "${t.topic}".`,
      `Primary keyword: "${t.keyword}".`,
      `Be accurate and conservative: explain concepts that are stable over time, prefer well-established practices, and avoid claiming exact version numbers, benchmarks or statistics unless you are certain.`,
    ].join('\n'),
    category: t.category,
    keyword: t.keyword,
    minWords: 700,
  }
}

async function collectTrending(state, existing) {
  const used = new Set(state.usedSources ?? [])
  const titles = existing.map((p) => p.title)
  const cands = []
  const ghHeaders = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}

  // 1) fresh GitHub releases (highest priority)
  await Promise.all(
    GH_REPOS.map(async (repo) => {
      try {
        const rels = await fetchJson(`https://api.github.com/repos/${repo}/releases?per_page=5`, ghHeaders)
        for (const r of rels) {
          if (r.draft || r.prerelease || !r.body || r.body.length < 300) continue
          const ageDays = (Date.now() - new Date(r.published_at).getTime()) / 86400000
          if (ageDays > 7) continue
          cands.push({
            key: `gh:${repo}@${r.tag_name}`,
            score: 100000 - ageDays,
            title: `${repo.split('/')[1]} ${r.tag_name} release`,
            url: r.html_url,
            material: `Official release notes for ${repo} ${r.tag_name}:\n${r.body.slice(0, 6500)}`,
            kind: 'release',
          })
        }
      } catch (e) {
        log('github', repo, e.message)
      }
    }),
  )

  // 2) Hacker News
  try {
    const ids = (await fetchJson('https://hacker-news.firebaseio.com/v0/topstories.json')).slice(0, 60)
    const items = await Promise.all(ids.map((id) => fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).catch(() => null)))
    for (const it of items) {
      if (!it || !it.url || !it.title || !NICHE.test(it.title) || it.score < 80) continue
      cands.push({ key: `hn:${it.id}`, score: it.score, title: it.title, url: it.url, kind: 'hn' })
    }
  } catch (e) {
    log('hackernews', e.message)
  }

  // 3) dev.to
  await Promise.all(
    DEVTO_TAGS.map(async (tag) => {
      try {
        const arts = await fetchJson(`https://dev.to/api/articles?tag=${tag}&top=1&per_page=8`)
        for (const a of arts) {
          if (a.positive_reactions_count < 40) continue
          cands.push({ key: `devto:${a.id}`, score: a.positive_reactions_count, title: a.title, url: a.url, devtoId: a.id, kind: 'devto' })
        }
      } catch (e) {
        log('dev.to', tag, e.message)
      }
    }),
  )

  const seen = new Set()
  return cands
    .filter((c) => !used.has(c.key) && !seen.has(c.key) && seen.add(c.key))
    .filter((c) => !titles.some((t) => similarity(t, c.title) > 0.7))
    .sort((a, b) => b.score - a.score)
}

async function pickTrending(existing, state) {
  const cands = await collectTrending(state, existing)
  log(`trending candidates: ${cands.length}`)
  for (const c of cands.slice(0, 8)) {
    let material = c.material
    if (!material && c.kind === 'devto') {
      try {
        const art = await fetchJson(`https://dev.to/api/articles/${c.devtoId}`)
        material = `Article "${art.title}":\n${(art.body_markdown || art.description || '').slice(0, 7000)}`
      } catch {}
    }
    if (!material && c.kind === 'hn') {
      const text = await fetchPageText(c.url)
      if (text.length > 800) material = `Page "${c.title}" (${c.url}):\n${text}`
    }
    if (!material || material.length < 600) continue
    return {
      lane: 'trending',
      sourceKey: c.key,
      sourceUrl: c.url,
      sourceTitle: c.title,
      brief: [
        `Write an ORIGINAL article about this currently trending developer topic: "${c.title}".`,
        `Below is reference material. Use it ONLY as the factual basis. Do not copy its wording or structure; explain it in your own words from a practical Flutter / Next.js / web developer's point of view: what happened, why it matters, who should care, and what to do about it.`,
        `Every specific claim (versions, features, numbers, dates) must come from the reference material. If the material does not say something, do not state it.`,
        `--- REFERENCE MATERIAL START ---`,
        material,
        `--- REFERENCE MATERIAL END ---`,
      ].join('\n'),
      category: 'News',
      keyword: c.title,
      minWords: 550,
    }
  }
  return null
}

// ───────────────────────── Gemini ─────────────────────────
const RESPONSE_SCHEMA = {
  type: 'OBJECT',
  properties: {
    title: { type: 'STRING' },
    description: { type: 'STRING' },
    slug: { type: 'STRING' },
    category: { type: 'STRING' },
    keywords: { type: 'ARRAY', items: { type: 'STRING' } },
    tags: { type: 'ARRAY', items: { type: 'STRING' } },
    body: { type: 'STRING' },
    faqs: {
      type: 'ARRAY',
      items: { type: 'OBJECT', properties: { q: { type: 'STRING' }, a: { type: 'STRING' } }, required: ['q', 'a'] },
    },
  },
  required: ['title', 'description', 'slug', 'category', 'keywords', 'tags', 'body', 'faqs'],
}

function buildPrompt(job, related) {
  const relatedList = related.length
    ? `Related existing articles you may link to (use at most 2, only these exact paths, only where genuinely relevant):\n${related.map((r) => `- /blog/${r.slug}  (${r.title})`).join('\n')}`
    : 'There are no related articles to link to; do not add internal /blog links.'
  return `You are writing for the personal blog of Rehman Farouq, a Flutter and Next.js developer (site: rehmanfarouq.site). Readers are developers, freelancers and small-business owners who found the page through Google.

TASK
${job.brief}

OUTPUT RULES
- Return JSON matching the schema. "body" is Markdown.
- Do NOT put the title as an H1 in the body (the page already shows it). Start with the introduction paragraph.
- Introduction: 2-3 sentences that answer the reader's question immediately and include the primary keyword "${job.keyword}" naturally.
- Then 4-6 sections using "## " headings (one heading should naturally contain the primary keyword), "### " sub-headings where useful.
- Dev topics need short, correct, minimal code examples in fenced blocks with a language tag. Never include code you are unsure compiles.
- Finish with a "## Key takeaways" section of 3-5 bullets.
- Do NOT write an FAQ section in the body; put 3-4 questions in "faqs" instead (real questions a searcher would ask, with direct 1-3 sentence answers).
- Length: the body MUST be at least ${Math.round(job.minWords * 1.3)} words; aim for about ${Math.round(job.minWords * 1.6)}. Cover each section in real depth with concrete examples. No filler.
- Style: clear, direct, practical. No hype, no clickbait, no emojis, no phrases like "in today's fast-paced world", "game-changer", "dive in", "let's explore", "in conclusion".
- HONESTY: never invent personal stories, clients, projects, benchmarks, statistics, quotes, prices or version numbers. If you are not sure of a fact, say it in general terms or leave it out. Do not claim you tested anything.
- No images, no raw HTML, no links to external websites (the site adds a source line itself when needed).
- Internal links: ${relatedList}
- "title": max 62 characters, contains the primary keyword, written for humans (no ALL CAPS, no year stuffing).
- "description": 130-158 characters, meta-description style, includes the keyword, ends cleanly (no trailing ellipsis).
- "slug": lowercase-kebab-case, 3-7 words, no stop-word padding.
- "category": exactly one of ${CATEGORIES.join(', ')}. Suggested: ${job.category}.
- "keywords": 5-8 search phrases. "tags": 3-5 short tags.`
}

async function callGemini(prompt) {
  const key = process.env.GEMINI_API_KEY
  if (!key) {
    console.error('GEMINI_API_KEY is not set. Add it under repo Settings > Secrets and variables > Actions.')
    process.exit(1)
  }
  let lastErr = ''
  for (const model of MODELS) {
    if (downModels.has(model)) continue
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const res = await fetch(`${GEMINI_BASE}/v1beta/models/${model}:generateContent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 16384,
              responseMimeType: 'application/json',
              responseSchema: RESPONSE_SCHEMA,
            },
          }),
          signal: AbortSignal.timeout(90000),
        })
        if (res.status === 429 || res.status >= 500) {
          lastErr = `${model}: HTTP ${res.status}`
          log(lastErr, attempt < 2 ? '- retrying in 20s' : '- next model')
          if (attempt < 2) await sleep(20000)
          continue
        }
        if (!res.ok) {
          lastErr = `${model}: HTTP ${res.status} ${(await res.text()).slice(0, 300)}`
          log(lastErr)
          break // 4xx (bad model name, bad key...) -> try next model
        }
        const data = await res.json()
        const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? ''
        if (!text) {
          lastErr = `${model}: empty response (${data?.candidates?.[0]?.finishReason ?? data?.promptFeedback?.blockReason ?? 'unknown'})`
          log(lastErr)
          continue
        }
        return { json: JSON.parse(text), model }
      } catch (e) {
        lastErr = `${model}: ${e.message}`
        log(lastErr, attempt < 2 ? '- retrying in 15s' : '- next model')
        if (attempt < 2) await sleep(15000)
      }
    }
    downModels.add(model) // failed every attempt: don't waste more time on it this run
  }
  throw new Error(`All Gemini models failed. Last error: ${lastErr}`)
}

// ───────────────────────── validation / cleanup ─────────────────────────
function relatedFor(job, existing) {
  const q = `${job.keyword} ${job.topic ?? ''} ${job.sourceTitle ?? ''}`
  return existing
    .map((p) => ({ ...p, s: similarity(q, p.title) }))
    .filter((p) => p.s > 0.15)
    .sort((a, b) => b.s - a.s)
    .slice(0, 4)
}

function finalize(raw, job, existing, tools) {
  const problems = []
  const title = String(raw.title ?? '').trim().replace(/^["']|["']$/g, '')
  const description = String(raw.description ?? '').trim()
  let body = String(raw.body ?? '').replace(/\r\n/g, '\n').trim()

  // strip a leading H1 and any images
  body = body.replace(/^#\s+.+\n+/, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '')

  // internal links: keep only links to pages that exist
  const okPaths = new Set([
    '/tools', '/blog', '/contact', '/projects',
    ...tools.map((t) => `/tools/${t.slug}`),
    ...existing.map((p) => `/blog/${p.slug}`),
  ])
  body = body.replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, (m, text, href) => (okPaths.has(href.replace(/[#?].*$/, '').replace(/\/$/, '')) ? m : text))
  // external links are not allowed from the model
  body = body.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '$1')

  const wordCount = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length
  const h2 = (body.match(/^##\s+/gm) ?? []).length
  const fences = (body.match(/^```/gm) ?? []).length

  if (title.length < 15 || title.length > 75) problems.push(`title length ${title.length}`)
  if (description.length < 80 || description.length > 180) problems.push(`description length ${description.length}`)
  if (wordCount < job.minWords) problems.push(`only ${wordCount} words (need ${job.minWords})`)
  if (h2 < 3) problems.push(`only ${h2} H2 sections`)
  if (fences % 2 !== 0) problems.push('unbalanced code fences')
  if (/<\/?(script|iframe|style|object|embed)\b/i.test(body)) problems.push('contains unsafe HTML')
  if (/as an ai\b|language model|lorem ipsum|\[insert|\bTODO\b|in today'?s fast-paced|\bgame-changer\b/i.test(body + title)) problems.push('contains banned/filler phrase')
  const faqs = (Array.isArray(raw.faqs) ? raw.faqs : []).filter((f) => f?.q && f?.a && f.a.length > 20).slice(0, 5)
  if (faqs.length < 2) problems.push('fewer than 2 FAQs')

  let slug = slugify(raw.slug || title)
  if (!slug) problems.push('empty slug')
  let n = 2
  const base = slug
  while (existing.some((p) => p.slug === slug)) slug = `${base}-${n++}`

  const category = CATEGORIES.includes(raw.category) ? raw.category : job.category
  const keywords = (raw.keywords ?? []).map(String).slice(0, 8)
  const tags = (raw.tags ?? []).map(String).slice(0, 5)

  // notes appended by the script itself
  if (job.toolSlug && HEALTH_TOOLS.has(job.toolSlug)) {
    body += `\n\n> **Note:** This article and the tool are for general information only and are not medical advice. For decisions about your health, talk to a qualified professional.`
  }
  if (job.toolSlug && FINANCE_TOOLS.has(job.toolSlug)) {
    body += `\n\n> **Note:** Results are estimates for planning purposes and are not financial advice. Check important figures with the provider or a qualified professional.`
  }
  if (job.sourceUrl) {
    body += `\n\n*Source and further reading: [${job.sourceTitle}](${job.sourceUrl}).*`
  }

  return { problems, post: { slug, title, description, category, keywords, tags, faqs, body, wordCount } }
}

function writePost(post, job) {
  const now = new Date().toISOString()
  const lines = [
    '---',
    `title: ${JSON.stringify(post.title)}`,
    `description: ${JSON.stringify(post.description)}`,
    `category: ${JSON.stringify(post.category)}`,
    `publishedAt: ${JSON.stringify(now)}`,
    `updatedAt: ${JSON.stringify(now)}`,
    `keywords: ${JSON.stringify(post.keywords)}`,
    `tags: ${JSON.stringify(post.tags)}`,
    ...(job.toolSlug ? [`toolSlug: ${JSON.stringify(job.toolSlug)}`] : []),
    `faqs: ${JSON.stringify(post.faqs)}`,
    `lane: ${JSON.stringify(job.lane)}`,
    '---',
    '',
    post.body,
    '',
  ]
  fs.mkdirSync(POSTS_DIR, { recursive: true })
  fs.writeFileSync(path.join(POSTS_DIR, `${post.slug}.md`), lines.join('\n'))
}

// ───────────────────────── main ─────────────────────────
async function main() {
  const existing = loadExisting()
  const state = readJson(STATE_FILE, { usedTools: [], usedTopics: [], usedSources: [] })
  const tools = loadTools()
  log(`existing posts: ${existing.length} (manual ${existing.filter((p) => p.kind === 'manual').length}, auto ${existing.filter((p) => p.kind === 'auto').length}); tools: ${tools.length}`)

  const slot = opt('slot') ?? 'am'
  const forced = opt('lane')
  const even = dayOfYear() % 2 === 0
  const order = forced
    ? [forced]
    : slot === 'pm'
      ? ['trending', 'evergreen', 'tool']
      : even
        ? ['tool', 'evergreen', 'trending']
        : ['evergreen', 'tool', 'trending']

  let job = null
  for (const lane of order) {
    job = lane === 'tool' ? pickTool(existing, state) : lane === 'evergreen' ? pickEvergreen(existing, state) : await pickTrending(existing, state)
    if (job) break
    log(`lane "${lane}" had nothing to write, trying next`)
  }
  if (!job) {
    warn('Auto-blog: no topic available in any lane. Add topics to scripts/auto-blog/topics.json.')
    return
  }
  log(`lane=${job.lane} key=${job.sourceKey}`)

  const related = relatedFor(job, existing)
  let result = null
  for (let attempt = 1; attempt <= 3; attempt++) {
    const { json, model } = await callGemini(buildPrompt(job, related))
    const fin = finalize(json, job, existing, tools)
    log(`attempt ${attempt} via ${model}: ${fin.post.wordCount} words, problems: ${fin.problems.join('; ') || 'none'}`)
    if (!fin.problems.length) {
      result = fin.post
      break
    }
  }
  if (!result) {
    warn(`Auto-blog: quality gate rejected 3 drafts for ${job.sourceKey}; nothing published this run.`)
    return
  }

  if (flag('dry')) {
    console.log(JSON.stringify(result, null, 2))
    return
  }

  writePost(result, job)
  if (job.toolSlug) state.usedTools = [...new Set([...(state.usedTools ?? []), job.toolSlug])]
  if (job.topic) state.usedTopics = [...new Set([...(state.usedTopics ?? []), job.topic])]
  state.usedSources = [...new Set([...(state.usedSources ?? []), job.sourceKey])].slice(-400)
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + '\n')

  log(`published: /blog/${result.slug}`)
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${result.slug}\n`)
  console.log(`::notice::Auto-blog published /blog/${result.slug} (${job.lane})`)
}

main().catch((e) => {
  console.error('[auto-blog] FAILED:', e.message)
  process.exit(1)
})
