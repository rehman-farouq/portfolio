import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Wrench, ArrowRight } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import { getAllPosts, getPost, formatDate } from '@/lib/posts'
import { renderMarkdown, extractHeadings } from '@/lib/markdown'

const SITE = 'https://rehmanfarouq.site'

// Only posts that exist in /content/posts are valid; hand-written posts keep their own folders.
export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `${SITE}/blog/${post.slug}`
  return {
    title: `${post.title} | Rehman Farouq`,
    description: post.description,
    keywords: post.keywords.join(', '),
    authors: [{ name: 'Rehman Farouq' }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      siteName: 'Rehman Farouq Blog',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['Rehman Farouq'],
      tags: post.tags,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@rehmanfarouq',
      images: ['/opengraph-image'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const html = renderMarkdown(post.content)
  const headings = extractHeadings(post.content)
  const url = `${SITE}/blog/${post.slug}`
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3)

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
      image: `${SITE}/opengraph-image`,
      keywords: post.keywords.join(', '),
      articleSection: post.category,
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Rehman Farouq', url: SITE },
      publisher: { '@type': 'Person', name: 'Rehman Farouq', url: SITE },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ]
  if (post.faqs.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  return (
    <div className="min-h-screen">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <nav className="site-subnav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/blog"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blog</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Blog</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{post.category}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <header className="bg-gradient-to-r from-indigo-600 to-violet-600 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                {post.readMinutes} min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{post.description}</p>
          </header>

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Flutter &amp; Next.js Developer</p>
              </div>
            </div>

            {headings.length >= 3 && (
              <nav aria-label="Table of contents" className="mb-10 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">In this article</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />

            {post.toolSlug && (
              <Link
                href={`/tools/${post.toolSlug}`}
                className="mt-10 flex items-center justify-between gap-4 rounded-xl border border-indigo-200 dark:border-indigo-500/30 p-5 hover:shadow-lg transition-shadow"
              >
                <span className="flex items-center gap-3">
                  <Wrench className="text-indigo-600 dark:text-indigo-400" size={22} />
                  <span>
                    <span className="block font-semibold text-gray-900 dark:text-white">Try the free tool</span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">
                      Use it right now in your browser, no sign-up needed.
                    </span>
                  </span>
                </span>
                <ArrowRight size={20} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
              </Link>
            )}

            {post.faqs.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently asked questions</h2>
                <div className="space-y-3">
                  {post.faqs.map((f) => (
                    <details key={f.q} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                      <summary className="cursor-pointer font-medium text-gray-900 dark:text-white">{f.q}</summary>
                      <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">More articles</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition-shadow"
                >
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{r.category}</span>
                  <span className="block mt-1 font-semibold text-gray-900 dark:text-white">{r.title}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
