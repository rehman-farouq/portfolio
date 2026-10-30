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
  title: "React Server Components 2026 | Rehman Farouq",
  description: "Master React Server Components with practical examples. Learn server-side rendering, data fetching, streaming, and how to build performant React applications.",
  keywords: "React Server Components, RSC, server-side rendering, React 2026, Next.js server components, React streaming, data fetching, performance optimization",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "React Server Components 2026 | Rehman Farouq",
    description: "Complete guide to React Server Components with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/react-server-components",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "React Server Components 2026",
    description: "Master React Server Components with practical examples and best practices.",
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
    canonical: "https://rehmanfarouq.site/blog/react-server-components",
  },
}

export default function ReactServerComponents() {
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
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 md:p-12">
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
                20 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              React Server Components 2026: The Complete Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Deep dive into React Server Components with practical examples. Learn server-side rendering, data fetching, streaming, and build performant React applications.
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
                  Full Stack Developer | React Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Server Components</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                React Server Components (RSC) represent a paradigm shift in how we build React applications. By rendering components on the server, we can reduce JavaScript bundle size, improve performance, and provide better SEO.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This guide covers everything you need to know about Server Components, from basic concepts to advanced patterns.
              </p>
            </section>

            {/* Server vs Client Components */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Server className="text-orange-600" size={24} />
                Server vs Client Components
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Understanding the difference between Server and Client Components is crucial for building effective React applications.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Server Component (default in Next.js App Router)
// app/users/page.tsx
async function UserList() {
  const users = await db.user.findMany()
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

// Client Component
'use client'
import { useState } from 'react'

export function UserForm() {
  const [name, setName] = useState('')
  
  return (
    <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}

// Mixing Server and Client Components
// app/users/page.tsx
import { UserForm } from './UserForm'

export default async function UsersPage() {
  const users = await db.user.findMany()
  
  return (
    <div>
      <UserForm />
      <UserList users={users} />
    </div>
  )
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">When to Use Each</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-orange-900 dark:text-orange-300 mb-2">Server Components</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Data fetching</li>
                    <li>• Accessing backend resources</li>
                    <li>• Keeping sensitive data secure</li>
                    <li>• Reducing client bundle size</li>
                    <li>• SEO optimization</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-red-900 dark:text-red-300 mb-2">Client Components</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Event listeners</li>
                    <li>• State management</li>
                    <li>• Browser APIs</li>
                    <li>• Custom hooks</li>
                    <li>• Interactive UI</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Fetching */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Database className="text-orange-600" size={24} />
                Data Fetching in Server Components
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Server Components can directly fetch data on the server, eliminating the need for separate API routes.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Direct database access
// app/products/page.tsx
import { db } from '@/lib/db'

export default async function ProductsPage() {
  const products = await db.product.findMany({
    include: { category: true }
  })
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

// Fetching from external APIs
// app/weather/page.tsx
async function getWeather() {
  const res = await fetch('https://api.weather.com/current', {
    next: { revalidate: 3600 } // Cache for 1 hour
  })
  return res.json()
}

export default async function WeatherPage() {
  const weather = await getWeather()
  
  return <WeatherDisplay data={weather} />
}

// Parallel data fetching
// app/dashboard/page.tsx
async function DashboardPage() {
  const [users, posts, stats] = await Promise.all([
    db.user.findMany(),
    db.post.findMany(),
    getStats()
  ])
  
  return (
    <Dashboard 
      users={users}
      posts={posts}
      stats={stats}
    />
  )
}

// Dynamic data fetching
// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await db.post.findUnique({
    where: { slug: params.slug }
  })
  
  if (!post) return <div>Not found</div>
  
  return <PostContent post={post} }
}`}
                </pre>
              </div>
            </section>

            {/* Streaming */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="text-orange-600" size={24} />
                Streaming and Suspense
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                React Server Components support streaming, allowing you to progressively render content as it becomes available.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Using Suspense for streaming
import { Suspense } from 'react'

// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      <Suspense fallback={<StatsSkeleton />}>
        <Stats />
      </Suspense>
      
      <Suspense fallback={<RecentActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
      
      <Suspense fallback={<NotificationsSkeleton />}>
        <Notifications />
      </Suspense>
    </div>
  )
}

// Slow component
async function Stats() {
  const stats = await getStats() // Takes 2 seconds
  return <StatsView data={stats} />
}

// Fast component
async function RecentActivity() {
  const activity = await getActivity() // Takes 500ms
  return <ActivityView data={activity} />
}

// Loading skeleton
function StatsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  )
}

// Streaming with boundaries
// app/products/page.tsx
export default function ProductsPage() {
  return (
    <div>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid />
      </Suspense>
    </div>
  )
}

async function ProductGrid() {
  const products = await getProducts()
  return <Grid products={products} />
}`}
                </pre>
              </div>
            </section>

            {/* Server Actions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Server Actions with Server Components</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Server Actions allow you to call server functions directly from Client Components without API routes.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Server action definition
// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createTodo(formData: FormData) {
  const title = formData.get('title') as string
  
  await db.todo.create({
    data: { title }
  })
  
  revalidatePath('/todos')
  redirect('/todos')
}

// Using in Client Component
'use client'
import { createTodo } from '@/app/actions'

export function TodoForm() {
  return (
    <form action={createTodo}>
      <input name="title" type="text" required />
      <button type="submit">Add Todo</button>
    </form>
  )
}

// With validation
import { z } from 'zod'

const todoSchema = z.object({
  title: z.string().min(1).max(100)
})

export async function createTodoValidated(formData: FormData) {
  const data = todoSchema.parse({
    title: formData.get('title')
  })
  
  await db.todo.create({ data })
  revalidatePath('/todos')
}

// Server action with error handling
export async function deleteTodo(id: string) {
  try {
    await db.todo.delete({ where: { id } })
    revalidatePath('/todos')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to delete' }
  }
}`}
                </pre>
              </div>
            </section>

            {/* Composition Patterns */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Composition Patterns</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Learn effective patterns for composing Server and Client Components.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Pass server data to client components
// Server Component
async function UserList() {
  const users = await db.user.findMany()
  return <UserTable users={users} />
}

// Client Component
'use client'
export function UserTable({ users }: { users: User[] }) {
  const [filter, setFilter] = useState('')
  
  const filtered = users.filter(u => 
    u.name.toLowerCase().includes(filter.toLowerCase())
  )
  
  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filtered.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

// Compound components pattern
// Server Component
async function ProductPage({ id }: { id: string }) {
  const product = await db.product.findUnique({ where: { id } })
  
  return (
    <ProductLayout>
      <ProductHeader product={product} />
      <ProductDetails product={product} />
      <ProductReviews productId={product.id} />
    </ProductLayout>
  )
}

// Client Component wrapper
'use client'
export function ProductLayout({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className={isExpanded ? 'expanded' : 'collapsed'}>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Toggle
      </button>
      {children}
    </div>
  )
}`}
                </pre>
              </div>
            </section>

            {/* Performance Optimization */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Optimization</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Best practices for optimizing Server Components for maximum performance.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Caching strategies
// Static data with long cache
async function getStaticData() {
  const data = await fetch('https://api.example.com/static', {
    next: { revalidate: 86400 } // 24 hours
  })
  return data.json()
}

// Dynamic data with short cache
async function getDynamicData() {
  const data = await fetch('https://api.example.com/dynamic', {
    next: { revalidate: 60 } // 1 minute
  })
  return data.json()
}

// No cache for real-time data
async function getRealTimeData() {
  const data = await fetch('https://api.example.com/realtime', {
    cache: 'no-store'
  })
  return data.json()
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

// Optimizing bundle size
// Move interactive parts to Client Components
// Keep data fetching in Server Components
// Use dynamic imports for heavy components
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false
})}`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Server Components Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-orange-900 dark:text-orange-300 mb-2">Architecture</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Default to Server Components</li>
                    <li>• Use Client Components sparingly</li>
                    <li>• Keep data fetching server-side</li>
                    <li>• Minimize client bundle size</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Performance</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Implement proper caching</li>
                    <li>• Use streaming for slow data</li>
                    <li>• Optimize database queries</li>
                    <li>• Leverage parallel fetching</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">UX</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Provide loading states</li>
                    <li>• Handle errors gracefully</li>
                    <li>• Implement progressive enhancement</li>
                    <li>• Use Suspense boundaries</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">Security</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Keep secrets server-side</li>
                    <li>• Validate all inputs</li>
                    <li>• Use server actions for mutations</li>
                    <li>• Sanitize data before sending</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                React Server Components represent the future of React development. By rendering components on the server, we can build faster, more efficient applications with better SEO and smaller client bundles.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Start adopting Server Components in your projects and leverage their power to build next-generation React applications.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Master Server Components?</h3>
              <p className="text-white/90 mb-6">
                Explore more React tutorials and start building performant applications!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
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
