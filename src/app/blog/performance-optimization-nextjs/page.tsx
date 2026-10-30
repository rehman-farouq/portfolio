import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Zap, Gauge, Cpu } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Next.js Performance Optimization 2026 | Rehman Farouq",
  description: "Master Next.js performance optimization. Learn code splitting, lazy loading, image optimization, caching strategies, server components, and techniques to…",
  keywords: "Next.js performance optimization, web performance, code splitting, lazy loading, image optimization, caching, server components, Lighthouse score, Next.js 2026, web vitals",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Next.js Performance Optimization 2026 | Rehman Farouq",
    description: "Complete guide to optimizing Next.js applications for maximum performance and speed.",
    url: "https://rehmanfarouq.site/blog/performance-optimization-nextjs",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Next.js Performance Optimization 2026",
    description: "Achieve 100/100 Lighthouse scores with these Next.js optimization techniques.",
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
    canonical: "https://rehmanfarouq.site/blog/performance-optimization-nextjs",
  },
}

export default function PerformanceOptimizationNextjs() {
  const yesterdayDate = getYesterdayDate()

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
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
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 md:p-12">
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
              Next.js Performance Optimization 2026: Complete Speed Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master performance optimization techniques for Next.js applications. Learn code splitting, lazy loading, image optimization, caching strategies, and achieve 100/100 Lighthouse scores.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | Performance Optimization Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Performance Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Performance is critical for user experience and SEO. Studies show that a 1-second delay in page load time can reduce conversions by 7%. Next.js provides numerous built-in optimization features, but knowing how to leverage them effectively is key to achieving optimal performance.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                In this guide, we'll explore comprehensive strategies to optimize your Next.js applications for maximum speed and efficiency.
              </p>
            </section>

            {/* Code Splitting */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="text-orange-600" size={24} />
                Code Splitting & Lazy Loading
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Code splitting divides your application into smaller chunks that load only when needed. Next.js automatically handles code splitting for routes, but you can optimize further with dynamic imports.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-orange-400 text-sm overflow-x-auto">
                  <code>{`// Dynamic import for code splitting
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable server-side rendering if needed
})

export default function Page() {
  return <HeavyComponent />
}`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Benefits of Code Splitting</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Reduced initial bundle size</li>
                <li>Faster page load times</li>
                <li>Improved Time to Interactive (TTI)</li>
                <li>Better mobile performance</li>
              </ul>
            </section>

            {/* Image Optimization */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Gauge className="text-orange-600" size={24} />
                Image Optimization
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Images often account for the majority of page weight. Next.js Image component automatically optimizes images with modern formats, lazy loading, and responsive sizing.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-orange-400 text-sm overflow-x-auto">
                  <code>{`import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority // Load above the fold images immediately
      placeholder="blur" // Add blur placeholder
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  )
}`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Image Optimization Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use WebP and AVIF formats</li>
                <li>Implement responsive images with sizes attribute</li>
                <li>Add blur placeholders for better UX</li>
                <li>Lazy load below-the-fold images</li>
                <li>Compress images before upload</li>
              </ul>
            </section>

            {/* Caching Strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Caching Strategies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Effective caching dramatically improves performance by serving content from cache instead of regenerating it. Next.js offers multiple caching layers.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Static Generation</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Pre-render pages at build time for fastest delivery
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ISR (Incremental Static Regeneration)</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Update static content after build time
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Cache</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Cache fetch requests across requests
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Full Route Cache</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Cache entire route responses
                  </p>
                </div>
              </div>
            </section>

            {/* Server Components */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="text-orange-600" size={24} />
                Server Components Optimization
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                React Server Components reduce client-side JavaScript by rendering components on the server. This significantly improves performance and reduces bundle size.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-orange-400 text-sm overflow-x-auto">
                  <code>{`// Server Component (default in Next.js 13+)
async function UserProfile({ userId }: { userId: string }) {
  const user = await getUser(userId) // Direct database access
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}

// Client Component for interactivity
'use client'
import { useState } from 'react'

export function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}`}</code>
                </pre>
              </div>
            </section>

            {/* Web Vitals */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Web Vitals Optimization</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Core Web Vitals are essential metrics that measure real-world user experience. Optimizing for these metrics improves both user satisfaction and search rankings.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">LCP (Largest Contentful Paint)</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Measures loading performance. Target: &lt; 2.5s
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">FID (First Input Delay)</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Measures interactivity. Target: &lt; 100ms
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">CLS (Cumulative Layout Shift)</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Measures visual stability. Target: &lt; 0.1
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Optimizations */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Additional Optimization Techniques</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Font Optimization:</strong> Use next/font for automatic font optimization</li>
                <li><strong>Script Optimization:</strong> Use next/script with proper loading strategies</li>
                <li><strong>Bundle Analysis:</strong> Use @next/bundle-analyzer to identify large bundles</li>
                <li><strong>Tree Shaking:</strong> Remove unused code from dependencies</li>
                <li><strong>Compression:</strong> Enable Brotli and Gzip compression</li>
                <li><strong>CDN:</strong> Use Content Delivery Networks for global distribution</li>
                <li><strong>HTTP/2:</strong> Leverage HTTP/2 for multiplexing requests</li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Performance optimization is an ongoing process that requires attention to detail and continuous monitoring. By implementing these strategies in your Next.js applications, you can achieve exceptional performance scores and provide users with lightning-fast experiences.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
