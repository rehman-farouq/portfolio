import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Blog from '@/components/sections/Blog'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: "Blog | Flutter & Next.js Tutorials by Rehman Farouq",
  description: "Comprehensive programming blog featuring Flutter tutorials, Next.js guides, React development tips, TypeScript best practices, web development articles…",
  keywords: "programming blog, Flutter tutorials, Next.js tutorials, React development, TypeScript guides, web development articles, mobile app development, JavaScript frameworks, coding tutorials, software engineering, development best practices, programming tips, Flutter state management, Next.js portfolio, React hooks, TypeScript patterns, frontend development, backend development, full stack development",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Blog | Flutter & Next.js Tutorials by Rehman Farouq",
    description: "Comprehensive programming blog featuring Flutter tutorials, Next.js guides, React development tips, TypeScript best practices, web development articles…",
    url: "https://rehmanfarouq.site/blog",
    type: "website",
    siteName: "Rehman Farouq Blog",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Programming Blog | Flutter & Next.js Tutorials | Web Development Articles",
    description: "Comprehensive programming blog featuring Flutter tutorials, Next.js guides, React development tips, TypeScript best practices, and web development articles.",
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
    canonical: "https://rehmanfarouq.site/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="site-subnav sticky top-0 z-50 animate-in slide-in-from-top duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Portfolio</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Blog</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="sr-only">Blog – Flutter &amp; Next.js Tutorials by Rehman Farouq</h1>
        <AnimatedSection delay={200}>
          <Blog />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
