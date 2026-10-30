import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Server, Database } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "API Development with Next.js 2026 | Rehman Farouq",
  description: "Complete guide to building APIs with Next.js. Learn RESTful and GraphQL API development, route handlers, middleware, authentication, database integration…",
  keywords: "Next.js API development, RESTful API, GraphQL API, Next.js route handlers, API middleware, API authentication, database integration, API best practices, server-side development, Next.js 2026",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "API Development with Next.js 2026 | Rehman Farouq",
    description: "Complete guide to building APIs with Next.js including RESTful and GraphQL implementations.",
    url: "https://rehmanfarouq.site/blog/api-development-nextjs",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "API Development with Next.js 2026",
    description: "Build scalable RESTful and GraphQL APIs with Next.js route handlers and best practices.",
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
    canonical: "https://rehmanfarouq.site/blog/api-development-nextjs",
  },
}

export default function APIDevelopmentNextjs() {
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
          <div className="bg-gradient-to-r from-green-600 to-teal-600 p-8 md:p-12">
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
              API Development with Next.js 2026: Build Scalable RESTful & GraphQL APIs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master API development with Next.js route handlers. Learn to build RESTful and GraphQL APIs, implement authentication, integrate databases, and follow best practices for production-ready APIs.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | API Development Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Next.js API Development</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Next.js has revolutionized API development with its powerful route handlers. Whether you're building RESTful APIs or GraphQL endpoints, Next.js provides a seamless experience with built-in features like middleware, authentication, and edge deployment.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                In this comprehensive guide, we'll explore everything from basic API routes to advanced patterns, helping you build production-ready APIs that scale.
              </p>
            </section>

            {/* RESTful API Development */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Server className="text-green-600" size={24} />
                Building RESTful APIs
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                RESTful APIs remain the standard for web services. Next.js makes it easy to create RESTful endpoints with proper HTTP methods and status codes.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const users = await fetchUsers()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const data = await request.json()
  const user = await createUser(data)
  return NextResponse.json(user, { status: 201 })
}`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">HTTP Methods Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>GET</strong> - Retrieve resources without side effects</li>
                <li><strong>POST</strong> - Create new resources</li>
                <li><strong>PUT</strong> - Update entire resources</li>
                <li><strong>PATCH</strong> - Partial resource updates</li>
                <li><strong>DELETE</strong> - Remove resources</li>
              </ul>
            </section>

            {/* GraphQL API */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="text-green-600" size={24} />
                GraphQL API Development
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                GraphQL provides a flexible alternative to REST, allowing clients to request exactly the data they need. Next.js integrates seamlessly with GraphQL servers.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`// app/api/graphql/route.ts
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'
import { graphql } from 'graphql'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'Hello, World!'
      }
    }
  })
})

export async function POST(request: Request) {
  const { query } = await request.json()
  const result = await graphql({ schema, source: query })
  return NextResponse.json(result)
}`}</code>
                </pre>
              </div>
            </section>

            {/* Database Integration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Database className="text-green-600" size={24} />
                Database Integration
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Connecting your API to a database is crucial for persistent data storage. Next.js works with all major databases through ORMs and database clients.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Popular Database Options</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>PostgreSQL</strong> - Robust relational database with Prisma ORM</li>
                <li><strong>MongoDB</strong> - Flexible NoSQL database with Mongoose</li>
                <li><strong>MySQL</strong> - Widely used relational database</li>
                <li><strong>SQLite</strong> - Lightweight embedded database</li>
              </ul>
            </section>

            {/* Authentication */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Authentication & Authorization</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Securing your APIs is essential. Next.js provides multiple authentication strategies including JWT, OAuth, and session-based auth.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`// Middleware for authentication
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.headers.get('authorization')
  
  if (!token) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
  
  // Verify token logic here
  return NextResponse.next()
}`}</code>
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Development Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Implement caching strategies</li>
                    <li>• Use pagination for large datasets</li>
                    <li>• Optimize database queries</li>
                    <li>• Enable compression</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Validate all inputs</li>
                    <li>• Use HTTPS only</li>
                    <li>• Implement rate limiting</li>
                    <li>• Sanitize outputs</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use OpenAPI/Swagger</li>
                    <li>• Provide clear examples</li>
                    <li>• Document error responses</li>
                    <li>• Keep docs updated</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Testing</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Write unit tests</li>
                    <li>• Integration testing</li>
                    <li>• Load testing</li>
                    <li>• API contract testing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Next.js provides a powerful platform for API development, whether you're building RESTful services or GraphQL endpoints. By following best practices and leveraging Next.js features like middleware and edge deployment, you can create scalable, secure, and performant APIs.
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
