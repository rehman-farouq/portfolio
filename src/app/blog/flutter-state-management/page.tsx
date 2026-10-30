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
  title: "Flutter State Management 2026 | Rehman Farouq",
  description: "Comprehensive Flutter state management guide 2026. Compare Provider vs BLoC vs Riverpod vs GetX vs Redux.",
  keywords: "Flutter state management 2026, Provider vs BLoC vs Riverpod, Flutter state management patterns, Provider Flutter tutorial, BLoC pattern Flutter, Riverpod Flutter, GetX Flutter, Flutter Redux, Flutter architecture, state management best practices, Flutter app architecture, Flutter performance optimization, Flutter state solutions, mobile app state management, Flutter development patterns",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Flutter State Management 2026 | Rehman Farouq",
    description: "Comprehensive Flutter state management guide 2026. Compare Provider vs BLoC vs Riverpod vs GetX vs Redux.",
    url: "https://rehmanfarouq.site/blog/flutter-state-management",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Flutter State Management 2026 | Provider vs BLoC vs Riverpod",
    description: "Comprehensive Flutter state management guide 2026. Compare Provider vs BLoC vs Riverpod and learn state management patterns and best practices.",
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
    canonical: "https://rehmanfarouq.site/blog/flutter-state-management",
  },
}

export default function FlutterStateManagementPage() {
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
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">Article</span>
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
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-sm font-medium rounded-full">
                  Flutter
                </span>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} />
                  {yesterdayDate}
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Clock size={14} />
                  14 min read
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Flutter State Management: Provider vs BLoC vs Riverpod
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Comprehensive comparison of Flutter's most popular state management solutions. Learn the differences, use cases, and best practices for Provider, BLoC, and Riverpod.
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Understanding State Management</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    State management is one of the most crucial aspects of Flutter development. It determines how your 
                    application handles and updates data, affects performance, and impacts code maintainability. 
                    Choosing the right state management solution can make or break your Flutter project.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                    In this comprehensive guide, we'll explore three of the most popular state management solutions 
                    in Flutter: Provider, BLoC, and Riverpod. We'll compare their features, use cases, and help you 
                    choose the best one for your project.
                  </p>
                </section>

                {/* Provider Section */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Provider Pattern</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What is Provider?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Provider is a simple yet powerful state management solution recommended by the Flutter team. 
                        It uses the InheritedWidget mechanism under the hood but provides a cleaner, more declarative API.
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                      <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-3">Advantages</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Easy to learn and implement</li>
                        <li>Minimal boilerplate code</li>
                        <li>Great for small to medium apps</li>
                        <li>Good performance with ChangeNotifier</li>
                        <li>Strong community support</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example Implementation</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Here's a simple Counter example using Provider:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                        <div>class CounterProvider extends ChangeNotifier</div>
                        <div>  int _count = 0;</div>
                        <div>  int get count =&gt; _count;</div>
                        <div>  void increment() &#123;</div>
                        <div>    _count++;</div>
                        <div>    notifyListeners();</div>
                        <div>  &#125;</div>
                        <div>&#125;</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* BLoC Section */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">BLoC Pattern</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What is BLoC?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        BLoC (Business Logic Component) is a design pattern that separates business logic from the UI. 
                        It uses Streams to handle state changes, making it perfect for complex applications with 
                        asynchronous operations.
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                      <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-3">Advantages</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Excellent separation of concerns</li>
                        <li>Reactive programming with Streams</li>
                        <li>Great for complex applications</li>
                        <li>Testable business logic</li>
                        <li>Strong typing with events and states</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example Implementation</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Here's a simple Counter example using BLoC:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                        <div>abstract class CounterEvent</div>
                        <div>class Increment extends CounterEvent</div>
                        <div>class Decrement extends CounterEvent</div>
                        <div>class CounterBloc extends Bloc</div>
                        <div>  CounterBloc() : super(0)</div>
                        <div>  onIncrement((event, emit) =&gt; emit(state + 1))</div>
                        <div>  onDecrement((event, emit) =&gt; emit(state - 1))</div>
                        <div>&#125;</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Riverpod Section */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Riverpod</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What is Riverpod?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Riverpod is the successor to Provider, created by the same author. It's a modern, compile-safe 
                        state management solution that fixes many of Provider's limitations while maintaining simplicity.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                      <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3">Advantages</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Compile-safe dependency injection</li>
                        <li>No BuildContext required</li>
                        <li>Excellent testing support</li>
                        <li>Auto-disposal of resources</li>
                        <li>Hot-reload compatible</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example Implementation</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Here's a simple Counter example using Riverpod:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                        <div>final counterProvider = StateNotifierProvider</div>
                        <div>class CounterNotifier extends StateNotifier</div>
                        <div>  CounterNotifier() : super(0)</div>
                        <div>  void increment() =&gt; state++</div>
                        <div>  void decrement() =&gt; state--</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Comparison Table */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Comparison Table</h2>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Feature</th>
                          <th className="text-left p-3 font-semibold text-blue-600 dark:text-blue-400">Provider</th>
                          <th className="text-left p-3 font-semibold text-purple-600 dark:text-purple-400">BLoC</th>
                          <th className="text-left p-3 font-semibold text-green-600 dark:text-green-400">Riverpod</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="p-3 text-gray-900 dark:text-white">Learning Curve</td>
                          <td className="p-3 text-green-600 dark:text-green-400">Easy</td>
                          <td className="p-3 text-yellow-600 dark:text-yellow-400">Medium</td>
                          <td className="p-3 text-yellow-600 dark:text-yellow-400">Medium</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="p-3 text-gray-900 dark:text-white">Boilerplate</td>
                          <td className="p-3 text-green-600 dark:text-green-400">Low</td>
                          <td className="p-3 text-red-600 dark:text-red-400">High</td>
                          <td className="p-3 text-yellow-600 dark:text-yellow-400">Medium</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="p-3 text-gray-900 dark:text-white">Performance</td>
                          <td className="p-3 text-green-600 dark:text-green-400">Good</td>
                          <td className="p-3 text-green-600 dark:text-green-400">Excellent</td>
                          <td className="p-3 text-green-600 dark:text-green-400">Excellent</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="p-3 text-gray-900 dark:text-white">Testability</td>
                          <td className="p-3 text-yellow-600 dark:text-yellow-400">Good</td>
                          <td className="p-3 text-green-600 dark:text-green-400">Excellent</td>
                          <td className="p-3 text-green-600 dark:text-green-400">Excellent</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-900 dark:text-white">Best For</td>
                          <td className="p-3 text-gray-600 dark:text-gray-400">Small/Medium apps</td>
                          <td className="p-3 text-gray-600 dark:text-gray-400">Large/Complex apps</td>
                          <td className="p-3 text-gray-600 dark:text-gray-400">All app sizes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Choosing the right state management solution depends on your project requirements, team expertise, 
                    and long-term maintenance goals. Provider is great for beginners and small apps, BLoC excels in 
                    complex enterprise applications, and Riverpod offers the best modern approach for new projects.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                    Remember that the best state management solution is the one that your team can maintain effectively 
                    and that scales with your application's needs. Start simple, and evolve your architecture as your 
                    application grows.
                  </p>
                </section>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'State Management', 'BLoC', 'Provider', 'Riverpod'].map(tag => (
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
