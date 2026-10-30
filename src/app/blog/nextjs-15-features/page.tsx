import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, Server, Database } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Next.js 15 Features 2026 | Rehman Farouq",
  description: "Explore Next.js 15 features including server actions, partial prerendering, improved app router, enhanced performance, and new developer experience…",
  keywords: "Next.js 15 features, server actions, partial prerendering, Next.js app router, Next.js performance, Next.js 2026, React Server Components, Next.js tutorial",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Next.js 15 Features 2026 | Rehman Farouq",
    description: "Complete guide to Next.js 15 features with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/nextjs-15-features",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Next.js 15 Features 2026",
    description: "Explore Next.js 15 features including server actions and partial prerendering.",
    creator: "@rehmanfarouq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/blog/nextjs-15-features",
  },
}

export default function Nextjs15Features() {
  const yesterdayDate = getYesterdayDate()

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
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
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Tutorial</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                Tutorial
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                {yesterdayDate}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                18 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Next.js 15 Features 2026: The Future of React Development
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Discover the powerful new features in Next.js 15 including server actions, partial prerendering, enhanced app router, and performance improvements.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | Next.js Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Next.js 15</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Next.js 15 represents a significant leap forward in React development. With enhanced server actions, partial prerendering, and improved developer experience, it's designed to build faster, more efficient web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This guide covers the most important features and how to leverage them in your projects.
              </p>
            </section>

            {/* Server Actions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Server className="text-gray-700" size={24} />
                Enhanced Server Actions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Server actions are now more powerful and easier to use, enabling seamless server-side mutations without API routes.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createTodo(formData: FormData) {
  const title = formData.get('title') as string
  
  // Database operation
  await db.todo.create({
    data: { title }
  })
  
  // Revalidate cache
  revalidatePath('/todos')
  
  // Optional redirect
  redirect('/todos')
}

// With validation
import { z } from 'zod'

const todoSchema = z.object({
  title: z.string().min(1).max(100),
  completed: z.boolean().default(false)
})

export async function createTodoValidated(formData: FormData) {
  const data = todoSchema.parse({
    title: formData.get('title'),
    completed: formData.get('completed') === 'true'
  })
  
  await db.todo.create({ data })
  revalidatePath('/todos')
}

// Using in component
// app/todos/page.tsx
import { createTodo } from '@/app/actions'

export default function TodosPage() {
  return (
    <form action={createTodo}>
      <input name="title" type="text" required />
      <button type="submit">Add Todo</button>
    </form>
  )
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Server Action Best Practices</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Always validate input data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Use revalidatePath for cache updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Handle errors gracefully with try-catch</span>
                </li>
              </ul>
            </section>

            {/* Partial Prerendering */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="text-gray-700" size={24} />
                Partial Prerendering (PPR)
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Partial Prerendering allows you to serve a static shell with dynamic holes, combining the best of static and dynamic rendering.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// next.config.js
module.exports = {
  experimental: {
    ppr: true
  }
}

// app/dashboard/page.tsx
import { Suspense } from 'react'

export const experimental_ppr = true

export default function Dashboard() {
  return (
    <div>
      {/* Static shell - served immediately */}
      <header>Dashboard</header>
      <nav>Navigation</nav>
      
      {/* Dynamic content - streamed in */}
      <Suspense fallback={<StatsSkeleton />}>
        <Stats />
      </Suspense>
      
      <Suspense fallback={<RecentActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
    </div>
  )
}

// Dynamic component
async function Stats() {
  const stats = await getStats()
  return <div>{stats}</div>
}

// Streaming with boundaries
export default function Page() {
  return (
    <main>
      <StaticHeader />
      <Suspense fallback={<Loading />}>
        <DynamicContent />
      </Suspense>
      <StaticFooter />
    </main>
  )
}`}
                </pre>
              </div>
            </section>

            {/* Improved App Router */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Improved App Router</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The App Router receives significant improvements with better routing, loading states, and error handling.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Route groups with better organization
app/
  (marketing)/
    page.tsx
    about/
      page.tsx
  (dashboard)/
    layout.tsx
    page.tsx
    settings/
      page.tsx

// Parallel routes
app/
  @auth/
    layout.tsx
    login/page.tsx
  @dashboard/
    layout.tsx
    page.tsx

// Intercepting routes
app/
  feed/
    [...slug]/
      page.tsx
  photo/
    [id]/
      (.)page.tsx  // Modal overlay
      (..)page.tsx // Full page

// Improved loading states
// app/dashboard/loading.tsx
export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  )
}

// Better error handling
// app/dashboard/error.tsx
'use client'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}`}
                </pre>
              </div>
            </section>

            {/* Performance Improvements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Improvements</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Next.js 15 introduces significant performance optimizations for faster builds and runtime performance.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Turbopack improvements
// next.config.js
module.exports = {
  turbo: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  }
}

// Improved caching
// app/products/page.tsx
export const revalidate = 3600 // 1 hour

export default async function ProductsPage() {
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }
  }).then(r => r.json())
  
  return <ProductList products={products} />
}

// On-demand revalidation
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const path = await request.json()
  revalidatePath(path.path)
  return NextResponse.json({ revalidated: true })
}

// Image optimization improvements
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // Above the fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>`}
                </pre>
              </div>
            </section>

            {/* New Developer Experience */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enhanced Developer Experience</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Better tooling, improved error messages, and enhanced debugging capabilities.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Improved TypeScript support
// next.config.js
module.exports = {
  typescript: {
    // Built-in type checking
    ignoreBuildErrors: false
  }
}

// Better error overlay
// Automatic error recovery
// Stack trace improvements
// Source map enhancements

// Environment variables
// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...

// Usage in code
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const dbUrl = process.env.DATABASE_URL

// Environment-specific configs
// app/config.ts
export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
  isDev: process.env.NODE_ENV === 'development'
}

// Improved CLI
npx next@latest dev --turbo
npx next@latest build --debug
npx next@latest start --port 3001`}
                </pre>
              </div>
            </section>

            {/* Metadata API */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enhanced Metadata API</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                More powerful and flexible metadata management for SEO and social sharing.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// app/blog/[slug]/page.tsx
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage]
    },
    alternates: {
      canonical: \`https://example.com/blog/\${params.slug}\`
    }
  }
}

// Dynamic icons
export const icons = {
  icon: '/favicon.ico',
  apple: '/apple-icon.png'
}

// Manifest
export const manifest = '/manifest.json'`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Next.js 15 Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use PPR for mixed static/dynamic pages</li>
                    <li>• Implement proper caching strategies</li>
                    <li>• Optimize images with next/image</li>
                    <li>• Leverage server actions for mutations</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Architecture</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Organize routes with route groups</li>
                    <li>• Use parallel routes when appropriate</li>
                    <li>• Implement proper error boundaries</li>
                    <li>• Structure layouts hierarchically</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Development</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use Turbopack for faster builds</li>
                    <li>• Implement proper TypeScript types</li>
                    <li>• Use environment variables correctly</li>
                    <li>• Test server actions thoroughly</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SEO</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use dynamic metadata generation</li>
                    <li>• Implement proper sitemaps</li>
                    <li>• Use structured data</li>
                    <li>• Optimize for Core Web Vitals</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Next.js 15 brings powerful new features that significantly improve the developer experience and application performance. Server actions, partial prerendering, and enhanced routing make it easier than ever to build modern web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Start adopting these features gradually and leverage them to build faster, more efficient applications.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build with Next.js 15?</h3>
              <p className="text-white/90 mb-6">
                Explore more Next.js tutorials and start building amazing applications!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  More Tutorials
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
