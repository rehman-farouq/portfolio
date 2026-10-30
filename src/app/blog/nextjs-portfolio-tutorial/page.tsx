import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Next.js Portfolio Tutorial 2026 | Rehman Farouq",
  description: "Complete Next.js portfolio tutorial 2026. Learn to build a stunning portfolio website with Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion…",
  keywords: "Next.js portfolio tutorial 2026, build portfolio website Next.js, Next.js 16 tutorial, React portfolio tutorial, TypeScript portfolio, Tailwind CSS portfolio, Next.js developer portfolio, portfolio website tutorial, Next.js animations, Framer Motion portfolio, responsive portfolio design, Next.js contact form, portfolio deployment, web development tutorial, frontend portfolio, developer portfolio website",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Next.js Portfolio Tutorial 2026 | Rehman Farouq",
    description: "Complete Next.js portfolio tutorial 2026. Learn to build a stunning portfolio website with Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion…",
    url: "https://rehmanfarouq.site/blog/nextjs-portfolio-tutorial",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Next.js Portfolio Tutorial 2026 | Build Professional Portfolio Website",
    description: "Complete Next.js portfolio tutorial 2026. Learn to build a stunning portfolio website with Next.js 16, React, TypeScript, Tailwind CSS, and animations.",
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
    canonical: "https://rehmanfarouq.site/blog/nextjs-portfolio-tutorial",
  },
}

export default function NextjsPortfolioTutorialPage() {
  const yesterdayDate = getYesterdayDate()
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="site-subnav sticky top-0 z-50 animate-in slide-in-from-top duration-500">
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
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Tutorial</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatedSection delay={200}>
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                  Next.js
                </span>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} />
                  {yesterdayDate}
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Clock size={14} />
                  25 min read
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Next.js Portfolio Tutorial: Build Stunning Portfolio in 2026
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Complete step-by-step guide to building a professional portfolio website with Next.js 16, TypeScript, Tailwind CSS, and modern animations.
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-500" />
                      <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Next.js & Portfolio Developer</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                    <Share2 size={18} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Building a portfolio website is essential for showcasing your skills and projects to potential employers and clients. 
                    In this comprehensive tutorial, we'll build a stunning portfolio website using Next.js 16, TypeScript, 
                    Tailwind CSS, and modern animation libraries.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                    We'll cover everything from project setup to deployment, including responsive design, animations, 
                    contact forms, and SEO optimization. By the end of this tutorial, you'll have a professional 
                    portfolio that showcases your work beautifully.
                  </p>
                </section>

                {/* Prerequisites */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Prerequisites</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                      <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-3">Required Knowledge</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Basic understanding of React and JavaScript</li>
                        <li>Familiarity with TypeScript (optional but recommended)</li>
                        <li>Basic knowledge of CSS and responsive design</li>
                        <li>Understanding of Git and GitHub</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                      <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3">Tools Required</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Node.js 18+ and npm</li>
                        <li>Visual Studio Code or preferred code editor</li>
                        <li>Terminal/command line</li>
                        <li>GitHub account for deployment</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Project Setup */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Setup</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Create Next.js App</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Start by creating a new Next.js project with TypeScript:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                        <div>npx create-next-app@latest my-portfolio --typescript</div>
                        <div>cd my-portfolio</div>
                        <div>npm run dev</div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Cards</h3>
                      <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Create interactive project cards with hover effects:
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                          <div>{'// src/components/sections/Projects.tsx'}</div>
                          <div className="text-blue-400 mt-2">{'use client'}</div>
                          <div className="mt-2">{'import { motion } from \'framer-motion\''}</div>
                          <div>{'import { ExternalLink, Github } from \'lucide-react\''}</div>
                          <div className="mt-2">{'const projects = ['}</div>
                          <div className="ml-4">{'{'}</div>
                          <div className="ml-8">{'title: \'E-commerce Platform\','}</div>
                          <div className="ml-8">{'description: \'Modern e-commerce solution with React and Node.js\','}</div>
                          <div className="ml-8">{'tech: [\'React\', \'Node.js\', \'MongoDB\'],'}</div>
                          <div className="ml-8">{'liveUrl: \'https://example.com\','}</div>
                          <div className="ml-8">{'githubUrl: \'https://github.com/username/project\''}</div>
                          <div className="ml-4">{'}'}</div>
                          <div>{']'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Advanced Features */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">✨ Advanced Features</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🌙 Dark Mode</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Implement dark mode with system preference detection:
                      </p>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                        <li>• Use next-themes package</li>
                        <li>• Create theme context</li>
                        <li>• Add theme toggle button</li>
                        <li>• Persist user preference</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">📱 Responsive Design</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Ensure perfect mobile experience:
                      </p>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                        <li>• Mobile-first approach</li>
                        <li>• Tailwind responsive utilities</li>
                        <li>• Touch-friendly interactions</li>
                        <li>• Optimized navigation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🎯 Performance Optimization</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Make your portfolio lightning fast:
                      </p>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                        <li>• Image optimization</li>
                        <li>• Lazy loading</li>
                        <li>• Code splitting</li>
                        <li>• Font optimization</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🔍 SEO Optimization</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Rank higher in search results:
                      </p>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                        <li>• Meta tags optimization</li>
                        <li>• Structured data</li>
                        <li>• Sitemap generation</li>
                        <li>• Open Graph tags</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Deployment */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🚀 Deployment</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Deploy to Vercel</h3>
                      <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Vercel is the recommended platform for Next.js applications:
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <ol className="text-gray-600 dark:text-gray-400 space-y-2">
                            <li>1. Push your code to GitHub</li>
                            <li>2. Sign up for Vercel account</li>
                            <li>3. Import your GitHub repository</li>
                            <li>4. Configure build settings</li>
                            <li>5. Deploy your portfolio</li>
                          </ol>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                          <p className="text-blue-700 dark:text-blue-300 text-sm">
                            <strong>Pro Tip:</strong> Connect your custom domain and enable automatic HTTPS for a professional appearance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Environment Variables</h3>
                      <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Set up environment variables for sensitive data:
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                          <div># .env.local</div>
                          <div>NEXT_PUBLIC_EMAIL=your-email@example.com</div>
                          <div>NEXT_PUBLIC_PHONE=+1234567890</div>
                          <div>ANALYTICS_ID=your-analytics-id</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Best Practices */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">💡 Best Practices</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                      <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3">✅ Do's</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>• Use semantic HTML5 elements</li>
                        <li>• Implement proper accessibility (ARIA labels, keyboard navigation)</li>
                        <li>• Optimize images for web (WebP format, lazy loading)</li>
                        <li>• Use TypeScript for type safety</li>
                        <li>• Write clean, maintainable code</li>
                        <li>• Test on multiple devices and browsers</li>
                        <li>• Add loading states and error handling</li>
                        <li>• Include a contact form with validation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                      <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-3">❌ Don'ts</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>• Don't use inline styles excessively</li>
                        <li>• Don't ignore mobile responsiveness</li>
                        <li>• Don't skip accessibility features</li>
                        <li>• Don't use large images without optimization</li>
                        <li>• Don't forget to add meta tags for SEO</li>
                        <li>• Don't ignore performance metrics</li>
                        <li>• Don't use deprecated APIs</li>
                        <li>• Don't forget to test your contact form</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎉 Conclusion</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Congratulations! You've built a professional portfolio website using Next.js. This portfolio showcases 
                    your technical skills and provides a solid foundation for your web development career.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                    Remember that a portfolio is never truly finished. Keep updating it with new projects, 
                    improve the design based on feedback, and add new features as you learn more about web development.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                    Your portfolio is now ready to impress recruiters and clients. Good luck with your job search! 🚀
                  </p>
                </section>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Portfolio', 'Tutorial', 'Web Dev', 'React', 'Tailwind CSS'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
