import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getAllPosts, formatDate } from '@/lib/posts'

/** Server component: lists auto-published posts from /content/posts (newest first). */
export default function LatestPosts() {
  const posts = getAllPosts()
  if (posts.length === 0) return null

  return (
    <section aria-labelledby="latest-articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <h2 id="latest-articles" className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Latest articles
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 12).map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-xl transition-shadow flex flex-col"
          >
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{p.category}</span>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{p.description}</p>
            <div className="mt-auto pt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(p.publishedAt)}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{p.readMinutes} min</span>
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
