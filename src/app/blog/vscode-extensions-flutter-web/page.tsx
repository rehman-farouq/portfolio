import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Download, Star, Zap, Code, Palette, Rocket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Top 10 VS Code Extensions for Flutter & Web Developers 2026",
  description: "Curated list of essential VS Code extensions for Flutter and web developers. Boost productivity with Dart, Flutter, React, Next.js, Prettier, ESLint, and…",
  keywords: "VS Code extensions, Flutter extensions, web development extensions, Dart VS Code, React extensions, Next.js extensions, Prettier, ESLint, developer tools, VS Code setup, productivity extensions, code editors, Flutter development, web development tools",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Top 10 VS Code Extensions for Flutter & Web Developers 2026",
    description: "Essential VS Code extensions to boost your Flutter and web development productivity.",
    url: "https://rehmanfarouq.site/blog/vscode-extensions-flutter-web",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Top 10 VS Code Extensions for Flutter & Web Developers",
    description: "Essential VS Code extensions for Flutter and web development productivity.",
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
    canonical: "https://rehmanfarouq.site/blog/vscode-extensions-flutter-web",
  },
}

export default function VSCodeExtensionsGuide() {
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
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Tools Guide</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                Tools Guide
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                {yesterdayDate}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                10 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Top 10 VS Code Extensions for Flutter & Web Developers 🚀
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Transform your coding experience with these essential extensions. As a developer who works with both Flutter and web technologies, here are my must-have tools.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | VS Code Power User
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Extensions Matter 🤔</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                VS Code is more than just a text editor—it's a powerful development platform. The right extensions can transform your coding experience from basic to brilliant. As someone who spends 8+ hours daily coding Flutter apps and web applications, I've tested hundreds of extensions to find the absolute essentials.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These extensions have saved me countless hours, reduced bugs, and made coding more enjoyable. Let me share my curated list of the top 10 extensions that every Flutter and web developer should have.
              </p>
            </section>

            {/* Extensions List */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Top 10 Essential Extensions 🔥</h2>
              
              <div className="space-y-8">
                {/* Extension 1 */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">1️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dart & Flutter Extensions</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> Dart (by Dart Code) & Flutter (by Dart Code)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> Search "Dart" and "Flutter" in VS Code extensions
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does 💻</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        These are the official extensions for Dart and Flutter development, providing essential features like code completion, debugging, hot reload, and project management.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Smart code completion and analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Hot reload and hot restart</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Flutter widget outlines and inspector</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Integrated debugging and testing</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        These extensions are non-negotiable for Flutter development. They've saved me hours with features like "Flutter: Wrap with widget" and instant error detection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 2 */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">2️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Prettier - Code Formatter</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> Prettier - Code formatter (by Prettier)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install esbenp.prettier-vscode</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does ✨</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Prettier is an opinionated code formatter that supports multiple languages. It automatically formats your code according to consistent style rules.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Format on save functionality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Supports JavaScript, TypeScript, JSON, CSS, and more</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Configurable formatting rules</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Integration with ESLint</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Consistent code formatting is crucial for team projects. Prettier eliminates style debates and keeps code clean automatically.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 3 */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">3️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">ESLint</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> ESLint (by Microsoft)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install dbaeumer.vscode-eslint</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does 🔍</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        ESLint is a pluggable linting utility for JavaScript and TypeScript. It catches errors and enforces coding standards in real-time.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-purple-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Real-time error detection</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Auto-fix on save</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Customizable rules and configurations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Integration with popular frameworks</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        ESLint has caught countless bugs for me before they reached production. It's essential for maintaining code quality in JavaScript/TypeScript projects.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 4 */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">4️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">GitLens</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> GitLens — Git supercharged (by GitKraken)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install eamodio.gitlens</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does 📊</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        GitLens supercharges Git capabilities directly in VS Code, showing who changed each line of code and when.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Inline blame annotations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Commit history and file history</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Rich repository and file views</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Compare branches and commits</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Understanding code history is crucial. GitLens helps me track changes and understand why certain decisions were made.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 5 */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">5️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Server</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> Live Server (by Ritwick Dey)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install ritwickdey.liveserver</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does 🌐</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Launch a development local server with live reload for static and dynamic pages.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">One-click server launch</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Live reload on file changes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Support for HTML, CSS, and JavaScript</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Custom port and browser selection</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Perfect for quick prototyping and testing static sites. I use it constantly for HTML/CSS experiments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 6 */}
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">6️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Auto Rename Tag</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> Auto Rename Tag (by Jun Han)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install formulahendry.auto-rename-tag</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does 🔄</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Automatically renames paired HTML/XML tags when you edit one.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-cyan-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Synchronous tag renaming</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-cyan-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Supports HTML, XML, JSX, and TSX</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-cyan-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Works with self-closing tags</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-cyan-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">No configuration needed</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        This simple extension saves me from countless HTML tag mismatch errors. It's a small but huge time-saver.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 7 */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">7️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tailwind CSS IntelliSense</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> Tailwind CSS IntelliSense (by Tailwind Labs)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install bradlc.vscode-tailwindcss</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does 🎨</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Intelligent Tailwind CSS tooling with autocomplete, linting, and class hover previews.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-indigo-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Intelligent class name completion</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-indigo-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Hover preview of CSS properties</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-indigo-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Linting for invalid classes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-indigo-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Smart suggestions based on content</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Essential for anyone using Tailwind CSS. It's like having a Tailwind expert sitting next to you.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 8 */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">8️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thunder Client</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> Thunder Client (by Ranvir Singh)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install rangav.vscode-thunder-client</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does ⚡</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        A lightweight REST API client for testing APIs directly in VS Code.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Send HTTP requests and view responses</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Save and organize API collections</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Environment variables support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Generate code snippets</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        No need to switch between VS Code and Postman. Thunder Client keeps me in the flow while testing APIs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 9 */}
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">9️⃣</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Color Highlight</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> Color Highlight (by Sergey S. Volkov)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install naumovs.color-highlight</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does 🌈</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Highlights CSS colors directly in your editor with the actual color preview.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-pink-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Color preview in code</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-pink-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Supports multiple color formats</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-pink-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Color picker on hover</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-pink-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Works with CSS, SCSS, and styled-components</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Visual feedback for colors makes styling so much easier. No more guessing what `#4a90e2` looks like!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Extension 10 */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🔟</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Path Intellisense</h3>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Extension:</strong> Path Intellisense (by Christian Kohler)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Installation:</strong> <code>ext install christian-kohler.path-intellisense</code>
                        </p>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">What It Does 📁</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Autocompletes filenames and paths as you type in your code.
                      </p>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features ⭐</h4>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2">
                          <span className="text-amber-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Automatic path completion</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-amber-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Works with imports and requires</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-amber-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">Supports absolute and relative paths</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-amber-500">•</span>
                          <span className="text-gray-700 dark:text-gray-300">File extension suggestions</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why I Recommend It 🎯</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Eliminates typos in import paths and speeds up development. A small extension with big impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Extension Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Extension Categories by Use Case 🎯</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-4">📱 Flutter Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Dart & Flutter extensions (essential)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Flutter Widget Snippets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Awesome Flutter Snippets</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-4">🌐 Web Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">ESLint & Prettier (code quality)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Tailwind CSS IntelliSense</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Auto Rename Tag</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-4">⚡ Productivity</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">GitLens (version control)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Path Intellisense</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Thunder Client (API testing)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-pink-900 dark:text-pink-300 mb-4">🎨 UI & Design</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-pink-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Color Highlight</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-pink-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Live Server</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-pink-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Bracket Pair Colorizer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Extension Management */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Manage Extensions Effectively 📋</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">🔧 Extension Settings</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Keep your extensions organized with these tips:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Use profiles for different project types</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Disable unused extensions to improve performance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Sync settings across devices with Settings Sync</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">⚡ Performance Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Regularly review and remove unused extensions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Use lightweight alternatives when possible</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Monitor extension performance with built-in tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Bonus Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Bonus Tips & Tricks 🎁</h2>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✨</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Keyboard Shortcuts:</strong> Learn shortcuts for your most-used extensions to boost productivity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✨</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Extension Recommendations:</strong> VS Code will suggest extensions based on your file types
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✨</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Workspace Settings:</strong> Configure extensions per project for team consistency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✨</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Regular Updates:</strong> Keep extensions updated for new features and security
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Personal Setup */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Personal VS Code Setup 💻</h2>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Here's my current setup that works perfectly for both Flutter and web development:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Core Extensions (Always Active)</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Dart & Flutter</li>
                      <li>• ESLint</li>
                      <li>• Prettier</li>
                      <li>• GitLens</li>
                      <li>• Tailwind CSS IntelliSense</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Context-Specific Extensions</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Thunder Client (API projects)</li>
                      <li>• Live Server (static sites)</li>
                      <li>• Color Highlight (UI work)</li>
                      <li>• Auto Rename Tag (HTML/JSX)</li>
                      <li>• Path Intellisense (large projects)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion 🎉</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The right VS Code extensions can dramatically improve your development experience. Start with the essential ones I've listed, then gradually add more based on your specific needs.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Remember that more extensions don't always mean better productivity. Focus on quality over quantity, and regularly review your setup to ensure it's serving your needs effectively.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Happy coding, and may your extensions always be up to date! 🚀
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">What Are Your Favorite Extensions?</h3>
              <p className="text-white/90 mb-6">
                Did I miss any essential extensions? Let me know your must-have VS Code tools!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Share Your Favorites
                </Link>
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
                >
                  Read More Articles
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
