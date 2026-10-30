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
  title: "Flutter Interview Questions 2026 | Rehman Farouq",
  description: "Complete Flutter interview preparation guide 2026. Top 50 Flutter interview questions and answers covering widgets, state management, navigation…",
  keywords: "Flutter interview questions 2026, Flutter developer interview, Flutter job preparation, Flutter interview questions and answers, Flutter widgets interview, Flutter state management interview, Flutter navigation interview, Flutter performance questions, Flutter architecture interview, mobile developer interview, Flutter developer jobs, Flutter technical interview, Flutter coding interview, Flutter interview tips, Flutter career guide",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Flutter Interview Questions 2026 | Rehman Farouq",
    description: "Complete Flutter interview preparation guide 2026. Top 50 Flutter interview questions and answers covering widgets, state management, navigation…",
    url: "https://rehmanfarouq.site/blog/flutter-interview-questions",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Flutter Interview Questions 2026 | Top 50 Questions with Answers",
    description: "Complete Flutter interview preparation guide 2026. Top 50 Flutter interview questions and answers covering widgets, state management, navigation, and…",
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
    canonical: "https://rehmanfarouq.site/blog/flutter-interview-questions",
  },
}

export default function FlutterInterviewQuestionsPage() {
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
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Article</span>
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
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                  Flutter
                </span>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} />
                  {yesterdayDate}
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Clock size={14} />
                  15 min read
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Top 50 Flutter Interview Questions and Answers
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Comprehensive guide to Flutter interview questions covering widgets, state management, navigation, and advanced concepts with detailed answers to help you ace your next Flutter developer interview.
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
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
                    Flutter has become one of the most popular frameworks for cross-platform mobile development. 
                    Whether you're a beginner or an experienced developer, preparing for a Flutter interview requires 
                    knowledge of various concepts ranging from basic widgets to advanced state management patterns.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    This comprehensive guide covers 50 essential Flutter interview questions that will help you 
                    demonstrate your expertise and confidence during technical interviews.
                  </p>
                </section>

                {/* Basic Questions */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Basic Flutter Questions</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. What is Flutter?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Flutter is an open-source UI software development kit created by Google. It is used to develop 
                        applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single 
                        codebase. Flutter uses the Dart programming language and provides a rich set of pre-designed widgets.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. What is Dart?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Dart is a programming language optimized for building user interfaces with Flutter. It is an 
                        object-oriented, class-based, garbage-collected language with C-style syntax. Dart can compile 
                        to native ARM code for mobile apps and JavaScript for web applications.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. What are widgets in Flutter?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Widgets are the basic building blocks of a Flutter application's user interface. Everything in 
                        Flutter is a widget, from structural elements like buttons and menus to stylistic elements like 
                        fonts and colors. Widgets are composed together to create complex user interfaces.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. What is the difference between Stateful and Stateless widgets?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong>Stateless Widget:</strong> Immutable widgets that don't store any mutable state. They are 
                        used when the UI doesn't depend on any changing data. Example: Text, Icon, RaisedButton.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                        <strong>Stateful Widget:</strong> Mutable widgets that can store state that might change during 
                        the widget's lifetime. They are used when the UI needs to update based on changing data. 
                        Example: Checkbox, TextField, Slider.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. What is a BuildContext?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        BuildContext is a handle to the location of a widget in the widget tree. Each widget has its 
                        own BuildContext, which is used to reference the widget's location within the tree. It's used 
                        for finding widgets, accessing theme data, and navigating between screens.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Intermediate Questions */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Intermediate Questions</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. What is State Management in Flutter?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        State management is the process of managing and updating the state of an application. In Flutter, 
                        state refers to any data that can change over time and affects the UI. Common state management 
                        solutions include Provider, BLoC, Riverpod, and Redux.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Explain the BLoC Pattern</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        BLoC (Business Logic Component) is a design pattern that helps separate presentation from 
                        business logic. It uses Streams to handle state changes: Events go into the BLoC, and States 
                        come out. The UI listens to state streams and emits events in response to user interactions.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. What is the difference between Container and Scaffold?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong>Container:</strong> A basic widget that can contain other widgets and provides padding, 
                        margins, and styling options like background color and borders.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                        <strong>Scaffold:</strong> A higher-level widget that provides the basic material design 
                        visual layout structure, including AppBar, FloatingActionButton, Drawer, and BottomNavigationBar.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9. What are Keys in Flutter?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Keys are used by Flutter to identify and preserve widgets when they are reordered or modified. 
                        They help Flutter understand which widgets correspond to which elements in the widget tree, 
                        preventing unnecessary rebuilds and maintaining state.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10. Explain Hot Restart and Hot Reload</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong>Hot Reload:</strong> Updates the UI with new changes without losing the current 
                        application state. It's faster and preserves the app's state.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                        <strong>Hot Restart:</strong> Reloads the entire application from scratch, losing the current 
                        state but incorporating all changes. It's slower than Hot Reload but ensures a clean state.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Advanced Questions */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Advanced Questions</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">11. What is the Widget Tree and Element Tree?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong>Widget Tree:</strong> A configuration of widgets that describes the UI. It's immutable 
                        and represents what the UI should look like.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                        <strong>Element Tree:</strong> The actual instantiation of widgets at specific locations in the 
                        tree. Elements are mutable and manage the lifecycle and state of widgets.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12. What is Isolate in Flutter?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Isolates are independent workers that run in separate memory spaces and communicate via messages. 
                        Dart uses isolates for concurrency, allowing multiple threads to execute simultaneously without 
                        sharing memory. Flutter's main UI runs on the main isolate.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">13. Explain Future and Stream</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong>Future:</strong> Represents a single value that will be available in the future. 
                        Used for async operations that return one result, like HTTP requests.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                        <strong>Stream:</strong> Represents a sequence of asynchronous events. Used for handling 
                        multiple values over time, like user input or real-time data updates.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">14. What are Mixins in Dart?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Mixins are a way to reuse a class's code in multiple class hierarchies. They allow you to 
                        add functionality to classes without using inheritance. In Flutter, mixins are commonly used 
                        for features like animation controllers and change notifications.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">15. What is the difference between const and final?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong>final:</strong> Variables that can be assigned only once. The value can be determined 
                        at runtime.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                        <strong>const:</strong> Compile-time constants. The value must be known at compile time and 
                        cannot change. Used for creating immutable objects and optimizing performance.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Performance Questions */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Performance & Optimization</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">16. How do you optimize Flutter app performance?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        • Use const constructors for widgets that don't change<br/>
                        • Implement lazy loading with ListView.builder<br/>
                        • Use Image.cache() for frequently used images<br/>
                        • Avoid unnecessary widget rebuilds with proper state management<br/>
                        • Use the performance profiler to identify bottlenecks<br/>
                        • Optimize network requests with proper caching
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">17. What is the purpose of the Repaint Boundary?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        RepaintBoundary is a widget that creates a separate display list for its child. This prevents 
                        the child from being repainted when the parent repaints, improving performance for complex 
                        widgets that don't change frequently.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">18. How do you reduce app size?</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        • Use tree shaking to remove unused code<br/>
                        • Optimize image assets and use appropriate formats<br/>
                        • Use ProGuard for Android release builds<br/>
                        • Split APKs by architecture<br/>
                        • Use deferred loading for large libraries<br/>
                        • Compress fonts and use font subsets
                      </p>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    These 50 Flutter interview questions cover the essential concepts you need to know for a successful 
                    interview. Remember to not just memorize answers, but understand the underlying concepts and be 
                    prepared to discuss real-world examples from your experience.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                    Practice building Flutter applications, contribute to open-source projects, and stay updated with 
                    the latest Flutter developments to enhance your skills and confidence.
                  </p>
                </section>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Interview', 'Questions', 'Career', 'Mobile Dev', 'Dart'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Flutter vs React Native: Which is Better in 2026?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Detailed comparison between Flutter and React Native covering performance, development experience...
                  </p>
                  <Link href="/blog/flutter-vs-react-native" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Read More →
                  </Link>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Complete Guide: How to Learn Flutter from Scratch
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Step-by-step learning path for Flutter beginners including resources, projects, and best practices...
                  </p>
                  <Link href="/blog/how-to-learn-flutter" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Read More →
                  </Link>
                </div>
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
