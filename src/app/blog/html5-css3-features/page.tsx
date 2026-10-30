import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Palette, Zap } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "HTML5 & CSS3 Features 2026 | Rehman Farouq",
  description: "Complete guide to HTML5 and CSS3 features including semantic elements, forms, multimedia, CSS Grid, animations, custom properties, and modern web standards.",
  keywords: "HTML5 features, CSS3 features, semantic HTML, modern web standards, CSS Grid, Flexbox, CSS animations, custom properties, web forms, multimedia, responsive design, web development, frontend development, HTML5 semantic elements, CSS3 advanced features",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "HTML5 & CSS3 Features 2026 | Rehman Farouq",
    description: "Complete guide to HTML5 and CSS3 features with practical examples and modern web standards.",
    url: "https://rehmanfarouq.site/blog/html5-css3-features",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "HTML5 & CSS3 Features 2026 | Modern Web Standards Guide",
    description: "Complete guide to HTML5 and CSS3 features with practical examples and modern web standards.",
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
    canonical: "https://rehmanfarouq.site/blog/html5-css3-features",
  },
}

export default function HTML5CSS3Features() {
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
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Web Dev</span>
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
                Web Dev
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                {yesterdayDate}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                22 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              HTML5 & CSS3 Features 2026: Complete Modern Web Standards Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master modern HTML5 semantic elements and CSS3 advanced features including Grid, animations, custom properties, and cutting-edge web standards.
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
                  Full Stack Developer | Web Standards Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Evolution of Web Standards</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                HTML5 and CSS3 have revolutionized web development, providing powerful tools for creating semantic, accessible, and visually stunning websites. From semantic HTML elements to advanced CSS animations, these technologies form the foundation of modern web development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This comprehensive guide covers the most important HTML5 and CSS3 features that every web developer should master in 2026.
              </p>
            </section>

            {/* HTML5 Semantic Elements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">HTML5 Semantic Elements</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Document Structure</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern HTML5 Document</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <header>
        <h1>Article Title</h1>
        <time datetime="2026-03-24">March 24, 2026</time>
      </header>
      
      <section>
        <h2>Section Heading</h2>
        <p>Article content goes here...</p>
      </section>
      
      <aside>
        <h3>Related Links</h3>
        <ul>
          <li><a href="#">Related article 1</a></li>
          <li><a href="#">Related article 2</a></li>
        </ul>
      </aside>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2026 Your Website. All rights reserved.</p>
  </footer>
</body>
</html>`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Semantic Elements Explained</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>&lt;header&gt;</strong> - Introductory content or navigation links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>&lt;nav&gt;</strong> - Navigation links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>&lt;main&gt;</strong> - Main content of the document</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>&lt;article&gt;</strong> - Self-contained content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>&lt;section&gt;</strong> - Thematic grouping of content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>&lt;aside&gt;</strong> - Content tangentially related to main content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>&lt;footer&gt;</strong> - Footer content</span>
                </li>
              </ul>
            </section>

            {/* HTML5 Forms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern HTML5 Forms</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">New Input Types</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`<form>
  <!-- Text inputs with validation -->
  <label for="email">Email:</label>
  <input type="email" id="email" required placeholder="your@email.com">
  
  <label for="url">Website:</label>
  <input type="url" id="url" placeholder="https://example.com">
  
  <label for="phone">Phone:</label>
  <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
  
  <!-- Number inputs -->
  <label for="quantity">Quantity:</label>
  <input type="number" id="quantity" min="1" max="10" step="1">
  
  <label for="price">Price:</label>
  <input type="number" id="price" min="0" step="0.01">
  
  <!-- Date and time inputs -->
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" min="1900-01-01" max="2026-12-31">
  
  <label for="appointment">Appointment:</label>
  <input type="datetime-local" id="appointment">
  
  <!-- Range slider -->
  <label for="volume">Volume:</label>
  <input type="range" id="volume" min="0" max="100" value="50">
  
  <!-- Color picker -->
  <label for="theme">Theme Color:</label>
  <input type="color" id="theme" value="#3b82f6">
  
  <!-- Search input -->
  <label for="search">Search:</label>
  <input type="search" id="search" placeholder="Search...">
  
  <button type="submit">Submit</button>
</form>`}
                </pre>
              </div>
            </section>

            {/* CSS3 Advanced Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CSS3 Advanced Features</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">CSS Grid Layout</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Basic Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  height: 100vh;
}

/* Named Grid Areas */
.layout-grid {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

/* Responsive Grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Grid with Auto-Flow */
.masonry {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.masonry-item:nth-child(3n+1) {
  grid-column: span 2;
  grid-row: span 2;
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Advanced Flexbox</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Holy Grail Layout with Flexbox */
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.holy-grail header,
.holy-grail footer {
  flex: 0 0 auto;
}

.holy-grail body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .holy-grail body {
    flex-direction: row;
  }
  
  .holy-grail nav {
    flex: 0 0 200px;
  }
  
  .holy-grail main {
    flex: 1;
  }
  
  .holy-grail aside {
    flex: 0 0 200px;
  }
}

/* Centering with Flexbox */
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Responsive Navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
  
  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }
}`}
                </pre>
              </div>
            </section>

            {/* CSS Animations */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CSS Animations and Transitions</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Advanced Animations</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Keyframe Animations */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Applying Animations */
.animated-element {
  animation: slideIn 0.5s ease-out;
}

.pulse-button {
  animation: pulse 2s infinite;
}

/* Complex Transitions */
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card:hover {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Multiple Property Transitions */
.button {
  transition: 
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;
}

.button:hover {
  background-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}`}
                </pre>
              </div>
            </section>

            {/* CSS Custom Properties */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CSS Custom Properties (Variables)</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Advanced Variable Usage</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Global Variables */
:root {
  /* Colors */
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --secondary-color: #64748b;
  --background: #ffffff;
  --surface: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  
  /* Spacing Scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  
  /* Typography */
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', monospace;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* Dark Theme Variables */
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --primary-hover: #3b82f6;
  --background: #0f172a;
  --surface: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
}

/* Component Variables */
.card {
  background-color: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--space-lg);
  transition: all var(--transition-normal);
}

.button {
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  background-color: var(--primary-color);
  color: white;
  transition: all var(--transition-normal);
}

.button:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}`}
                </pre>
              </div>
            </section>

            {/* Modern CSS Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern CSS Features</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Advanced Selectors</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* :has() - Parent Selector */
.card:has(.badge) {
  border-left: 4px solid var(--primary-color);
}

.form:has(input:invalid) {
  background-color: #fef2f2;
}

/* :is() - Grouping Selectors */
h1:is(.title, .heading) {
  font-weight: 700;
}

/* :where() - Low-Specificity Grouping */
.card:where(.primary, .secondary) {
  border-radius: var(--radius-md);
}

/* Logical Properties */
.container {
  margin-inline: auto;
  padding-block: var(--space-2xl);
  border-inline-start: 1px solid var(--border-color);
}

/* Attribute Selectors */
[data-theme="dark"] {
  background-color: var(--background-dark);
}

/* Structural Pseudo-classes */
.card:nth-child(odd) {
  background-color: var(--surface-alt);
}

.article:target {
  background-color: yellow;
  padding: var(--space-md);
}

/* Form Pseudo-classes */
input:required {
  border-color: var(--error-color);
}

input:invalid:not(:placeholder-shown) {
  border-color: var(--error-color);
}

input:valid:not(:placeholder-shown) {
  border-color: var(--success-color);
}`}
                </pre>
              </div>
            </section>

            {/* Performance and Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance and Best Practices</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">CSS Performance Optimization</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Use Contain for Performance */
.sidebar {
  contain: layout style paint;
}

.image-gallery {
  contain: layout;
}

/* Efficient Animations */
.smooth-animation {
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

/* GPU Acceleration */
.gpu-accelerated {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Optimize Selectors */
/* Good: Class-based */
.card { }

/* Avoid: Deep nesting */
/* .sidebar .widget .button .icon { } */

/* Use CSS Custom Properties for Dynamic Values */
:root {
  --animation-duration: 0.3s;
  --transition-easing: ease-in-out;
}

.optimized-transition {
  transition: all var(--animation-duration) var(--transition-easing);
}`}
                </pre>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                HTML5 and CSS3 provide powerful tools for creating modern, semantic, and visually stunning websites. From semantic HTML elements that improve accessibility and SEO, to advanced CSS features like Grid, animations, and custom properties, these technologies form the foundation of modern web development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Mastering these features will enable you to create websites that are not only beautiful but also accessible, performant, and future-proof. Keep experimenting with new features and stay updated with the latest web standards!
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Master Modern Web Standards?</h3>
              <p className="text-white/90 mb-6">
                Explore more web development tutorials and build amazing websites with HTML5 and CSS3!
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
