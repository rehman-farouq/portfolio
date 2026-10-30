import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart } from 'lucide-react'
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
  title: "Flutter vs React Native 2026 | Rehman Farouq",
  description: "Comprehensive Flutter vs React Native comparison 2026. Compare performance, development speed, learning curve, ecosystem, community support, cost, and…",
  keywords: "Flutter vs React Native 2026, Flutter React Native comparison, mobile app development frameworks, Flutter performance vs React Native, Flutter development speed, React Native development, cross-platform development, mobile app frameworks comparison, Flutter vs React Native ecosystem, Flutter vs React Native cost, mobile app development tools, Flutter vs React Native for startups, React Native vs Flutter for enterprise, mobile development best practices",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Flutter vs React Native 2026 | Rehman Farouq",
    description: "Comprehensive Flutter vs React Native comparison 2026. Compare performance, development speed, ecosystem, community support, cost, and real-world use cases…",
    url: "https://rehmanfarouq.site/blog/flutter-vs-react-native",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Flutter vs React Native 2026 | Complete Comparison",
    description: "Comprehensive Flutter vs React Native comparison 2026. Compare performance, development speed, ecosystem, and real-world use cases for mobile app development.",
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
    canonical: "https://rehmanfarouq.site/blog/flutter-vs-react-native",
  },
}

export default function FlutterVsReactNativePage() {
  const yesterdayDate = getYesterdayDate()
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 flex flex-col">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 animate-in slide-in-from-top duration-500">
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
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Article</span>
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
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                  Comparison
                </span>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} />
                  {yesterdayDate}
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Clock size={14} />
                  12 min read
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Flutter vs React Native: Which is Better in 2026?
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                A comprehensive comparison between Flutter and React Native, two of the most popular cross-platform mobile development frameworks. Discover which one suits your project needs best.
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-500" />
                      <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Flutter & Next.js Developer</p>
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
                    Choosing the right cross-platform mobile development framework is crucial for your project's success. 
                    Flutter and React Native are the two leading contenders in this space, each with unique strengths and 
                    use cases. This comprehensive comparison will help you make an informed decision.
                  </p>
                </section>

                {/* Overview */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Framework Overview</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Flutter</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Developed by Google, Flutter is a UI toolkit for building natively compiled applications for 
                        mobile, web, and desktop from a single codebase. It uses the Dart programming language and 
                        provides a rich set of customizable widgets.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                      <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">React Native</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Created by Facebook, React Native allows you to build mobile apps using React and JavaScript. 
                        It bridges JavaScript code to native UI components, providing a more native feel while leveraging 
                        web development skills.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Performance Comparison */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Performance Comparison</h2>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">🚀 Flutter Performance</h4>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                          <li>• Compiled to native ARM code for better performance</li>
                          <li>• 60 FPS smooth animations by default</li>
                          <li>• No JavaScript bridge overhead</li>
                          <li>• Faster startup times and consistent performance</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">⚡ React Native Performance</h4>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                          <li>• JavaScript bridge can cause performance bottlenecks</li>
                          <li>• Good performance for most applications</li>
                          <li>• Optimized with Hermes engine and Fabric</li>
                          <li>• May struggle with complex animations</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                        <strong>Winner:</strong> Flutter for performance-critical applications and complex animations
                      </p>
                    </div>
                  </div>
                </section>

                {/* Development Experience */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Development Experience</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Flutter Development</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">Hot Reload for rapid development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">Rich widget library</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">Excellent documentation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500">⚠</span>
                          <span className="text-gray-600 dark:text-gray-400">Learning curve for Dart language</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">React Native Development</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">JavaScript/TypeScript familiarity</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">Large ecosystem and community</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">Fast Refresh feature</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500">⚠</span>
                          <span className="text-gray-600 dark:text-gray-400">Native module complexity</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Ecosystem and Community */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ecosystem and Community</h2>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Flutter Ecosystem</h3>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                          <li>• Growing but smaller community</li>
                          <li>• Official packages by Google</li>
                          <li>• Excellent tooling (Flutter DevTools)</li>
                          <li>• Strong corporate backing by Google</li>
                          <li>• 100,000+ packages on pub.dev</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">React Native Ecosystem</h3>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                          <li>• Massive JavaScript community</li>
                          <li>• 200,000+ packages on npm</li>
                          <li>• Extensive third-party libraries</li>
                          <li>• Strong support from Meta</li>
                          <li>• Mature ecosystem with proven solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Use Cases */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When to Choose Which Framework</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Choose Flutter When:</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>• You need high-performance applications</li>
                        <li>• Complex UI with custom animations</li>
                        <li>• Building from scratch without web dependencies</li>
                        <li>• Consistent UI across all platforms is critical</li>
                        <li>• Google ecosystem integration is important</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                      <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">Choose React Native When:</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>• Team has JavaScript/React experience</li>
                        <li>• Need to leverage existing web codebase</li>
                        <li>• Rapid prototyping is priority</li>
                        <li>• Access to extensive npm ecosystem</li>
                        <li>• Web and mobile code sharing is important</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Real-World Examples */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real-World Examples</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Flutter Apps</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400">Google Pay</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400">Alibaba</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400">Reflectly</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400">Hamilton Musical</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">React Native Apps</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400">Instagram</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400">Facebook</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400">Skype</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400">Tesla</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Both Flutter and React Native are excellent cross-platform development frameworks, each with unique strengths. 
                    Flutter excels in performance and UI consistency, making it ideal for performance-critical applications. 
                    React Native leverages the vast JavaScript ecosystem, making it perfect for teams with web development experience.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                    Your choice should depend on your team's skills, project requirements, and long-term maintenance considerations. 
                    Both frameworks are actively developed and have strong corporate backing, ensuring their relevance in 2026 and beyond.
                  </p>
                </section>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'React Native', 'Comparison', 'Mobile Dev', 'Cross Platform'].map(tag => (
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
