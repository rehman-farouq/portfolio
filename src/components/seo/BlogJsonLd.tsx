import { POSTS } from '@/utils/blog-meta'

const SITE = 'https://rehmanfarouq.site'

export default function BlogJsonLd({ slug }: { slug: string }) {
  const post = POSTS[slug]
  if (!post) return null
  const url = `${SITE}/blog/${slug}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: `${SITE}/opengraph-image`,
    inLanguage: 'en',
    author: { '@type': 'Person', name: 'Rehman Farouq', url: SITE },
    publisher: { '@type': 'Person', name: 'Rehman Farouq', url: SITE },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
