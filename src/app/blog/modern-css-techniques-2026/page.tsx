import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, Palette, Layout } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Modern CSS Techniques 2026 | Rehman Farouq",
  description: "Master modern CSS with Grid, Flexbox, Container Queries, CSS Custom Properties, and advanced layout techniques.",
  keywords: "modern CSS techniques, CSS Grid, Flexbox guide, Container Queries, CSS custom properties, responsive design, CSS 2026, modern layout, CSS best practices, web development",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Modern CSS Techniques 2026 | Rehman Farouq",
    description: "Complete guide to modern CSS techniques with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/modern-css-techniques-2026",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Modern CSS Techniques 2026",
    description: "Complete guide to modern CSS with Grid, Flexbox, and Container Queries.",
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
    canonical: "https://rehmanfarouq.site/blog/modern-css-techniques-2026",
  },
}

export default function ModernCSSTechniques() {
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12">
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
                16 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Modern CSS Techniques 2026: Build Responsive, Maintainable Styles
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master CSS Grid, Flexbox, Container Queries, and modern CSS features. Learn practical techniques for building beautiful, responsive web layouts.
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
                  Full Stack Developer | CSS Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Evolution of CSS</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                CSS has evolved dramatically from simple styling to a powerful layout system. Modern CSS provides tools that make complex layouts achievable without frameworks, while maintaining performance and accessibility.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In this guide, we'll explore the most important modern CSS techniques every developer should know in 2026.
              </p>
            </section>

            {/* CSS Grid */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CSS Grid: Two-Dimensional Layouts</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                CSS Grid is the most powerful layout system in CSS. It's perfect for creating complex two-dimensional layouts with rows and columns.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  height: 100vh;
}

/* Named grid areas */
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive grid with auto-fit */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Grid Best Practices</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Use <code>fr</code> units for flexible columns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Combine with <code>minmax()</code> for responsive behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Use named areas for complex layouts</span>
                </li>
              </ul>
            </section>

            {/* Flexbox */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Flexbox: One-Dimensional Layouts</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Flexbox is perfect for arranging items in a single dimension. It's ideal for navigation bars, card layouts, and component alignment.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Centering with flexbox */
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Navigation bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

/* Card layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;
}

/* Holy Grail Layout */
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.holy-grail main {
  flex: 1;
  display: flex;
}

.holy-grail nav {
  flex: 0 0 200px;
}

.holy-grail aside {
  flex: 0 0 200px;
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Flexbox vs Grid</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Use Flexbox for:</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• One-dimensional layouts</li>
                    <li>• Component alignment</li>
                    <li>• Navigation bars</li>
                    <li>• Form layouts</li>
                    <li>• Card content distribution</li>
                  </ul>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-pink-900 dark:text-pink-300 mb-2">Use Grid for:</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Two-dimensional layouts</li>
                    <li>• Overall page layout</li>
                    <li>• Complex grid systems</li>
                    <li>• Responsive card grids</li>
                    <li>• Dashboard layouts</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Container Queries */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Container Queries: Component-Based Responsive Design</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Container queries allow components to adapt based on their container size, not the viewport. This is a game-changer for truly reusable components.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Container queries setup */
.card-container {
  container-type: inline-size;
}

/* Component adapts to its container */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}

@container (min-width: 600px) {
  .card {
    grid-template-columns: 1fr 3fr;
  }
  .card-title {
    font-size: 1.5rem;
  }
}

@container (min-width: 800px) {
  .card {
    grid-template-columns: 200px 1fr 200px;
  }
  .card-sidebar {
    display: block;
  }
}

/* Practical example - Adaptive sidebar */
.layout {
  display: grid;
  container-type: inline-size;
}

@container (min-width: 768px) {
  .layout {
    grid-template-columns: 250px 1fr;
  }
}

@container (min-width: 1024px) {
  .layout {
    grid-template-columns: 300px 1fr 200px;
  }
}`}
                </pre>
              </div>
            </section>

            {/* CSS Custom Properties */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CSS Custom Properties: Dynamic Theming</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                CSS variables (custom properties) enable dynamic styling and theming without JavaScript.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`:root {
  /* Color palette */
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --secondary-color: #64748b;
  --background: #ffffff;
  --surface: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  
  /* Spacing scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Typography */
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', monospace;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

/* Dark theme */
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --primary-hover: #3b82f6;
  --background: #0f172a;
  --surface: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
}

/* Using custom properties */
.button {
  background-color: var(--primary-color);
  color: white;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--space-sm);
  font-family: var(--font-sans);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.button:hover {
  background-color: var(--primary-hover);
  box-shadow: var(--shadow-md);
}

/* Dynamic values with calc() */
.card {
  padding: var(--space-lg);
  margin-bottom: calc(var(--space-lg) * 1.5);
  border-radius: calc(var(--space-sm) * 2);
}

/* JavaScript integration */
<style>
  :root {
    --user-color: \${userPreferredColor};
    --dynamic-spacing: \${calculateSpacing()};
  }
</style>`}
                </pre>
              </div>
            </section>

            {/* Modern Selectors */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern CSS Selectors</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Modern CSS provides powerful selectors for targeting elements precisely.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* :has() - Parent selector */
.card:has(.badge) {
  border-left: 4px solid var(--primary-color);
}

.form:has(input:invalid) {
  background-color: #fef2f2;
}

/* :is() - Grouping selectors */
h1:is(.title, .heading) {
  font-weight: 700;
}

/* :where() - Low-specificity grouping */
.card:where(.primary, .secondary) {
  border-radius: 8px;
}

/* Logical properties */
.container {
  margin-inline: auto;
  padding-block: 2rem;
  border-inline-start: 1px solid #e5e7eb;
}

/* Attribute selectors */
[data-theme="dark"] {
  background-color: #1f2937;
}

[data-loading="true"] .spinner {
  display: block;
}

/* Structural pseudo-classes */
.card:nth-child(odd) {
  background-color: #f9fafb;
}

.article:target {
  background-color: yellow;
  padding: 1rem;
}

/* Form pseudo-classes */
input:required {
  border-color: #ef4444;
}

input:invalid:not(:placeholder-shown) {
  border-color: #dc2626;
}

input:valid:not(:placeholder-shown) {
  border-color: #10b981;
}`}
                </pre>
              </div>
            </section>

            {/* Modern Colors and Gradients */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern Colors and Gradients</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Modern CSS provides advanced color capabilities including color functions and improved gradient support.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Color functions */
.button-primary {
  background-color: oklch(70% 0.15 250);
  color: oklch(95% 0.02 250);
}

.button-secondary {
  background-color: hsl(210 40% 60%);
  color: hsl(210 40% 95%);
}

/* Modern gradients */
.hero-gradient {
  background: linear-gradient(
    135deg,
    hsl(280 100% 60%),
    hsl(200 100% 60%)
  );
}

.card-gradient {
  background: conic-gradient(
    from 180deg at 50% 50%,
    #3b82f6 0deg,
    #8b5cf6 120deg,
    #ec4899 240deg,
    #3b82f6 360deg
  );
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Color-mix() function */
.overlay {
  background-color: color-mix(in srgb, #000 60%, transparent);
}

.button-hover {
  background-color: color-mix(in srgb, var(--primary-color) 80%, white);
}

/* Relative colors */
.adjusted-color {
  background-color: hsl(from hsl(200 50% 50%) h s 80%);
  /* Same hue and saturation, 80% lightness */
}`}
                </pre>
              </div>
            </section>

            {/* Modern Layout Techniques */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Layout Techniques</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Combine modern CSS features for sophisticated layouts without frameworks.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Masonry layout with Grid */
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  grid-auto-flow: dense;
}

.masonry-item:nth-child(3n+1) {
  grid-row: span 2;
}

.masonry-item:nth-child(5n) {
  grid-column: span 2;
}

/* Subgrid for nested layouts */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}

/* Aspect ratio containers */
.aspect-ratio-16-9 {
  aspect-ratio: 16/9;
  object-fit: cover;
}

.aspect-ratio-square {
  aspect-ratio: 1/1;
}

/* Logical positioning */
.sidebar {
  position: sticky;
  inset-block-start: 20px;
  inset-inline-end: 20px;
}

/* Scroll-driven animations */
@supports (animation-timeline: scroll()) {
  .parallax {
    animation: move linear;
    animation-timeline: scroll(root);
  }
  
  @keyframes move {
    to { transform: translateY(-100px); }
  }
}

/* Multi-column layout */
.article-content {
  column-count: 2;
  column-gap: 2rem;
  column-rule: 1px solid #e5e7eb;
}

@media (max-width: 768px) {
  .article-content {
    column-count: 1;
  }
}`}
                </pre>
              </div>
            </section>

            {/* Performance Optimization */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CSS Performance Optimization</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Modern CSS techniques for better performance and user experience.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Contain property for performance */
.card {
  contain: layout style paint;
}

.image-gallery {
  contain: layout;
}

/* will-change for animations */
.animated-element {
  will-change: transform, opacity;
}

/* Efficient animations */
.smooth-transition {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* GPU acceleration */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Content-visibility for large content */
.long-content {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Container queries for performance */
.adaptive-component {
  container-type: inline-size;
  contain: layout;
}

/* Efficient selectors */
/* Good: Class-based */
.card { }

/* Avoid: Deep nesting */
/* .sidebar .widget .button .icon { } */`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern CSS Best Practices</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-3">✅ Do's</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Use semantic HTML5 elements</li>
                    <li>• Implement mobile-first responsive design</li>
                    <li>• Use CSS custom properties for theming</li>
                    <li>• Leverage container queries for components</li>
                    <li>• Optimize for performance with contain</li>
                    <li>• Test with reduced motion preferences</li>
                    <li>• Use logical properties for internationalization</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-3">❌ Don'ts</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Don't use !important excessively</li>
                    <li>• Don't rely on framework-specific classes</li>
                    <li>• Don't ignore accessibility (color contrast, focus states)</li>
                    <li>• Don't use px units for responsive design</li>
                    <li>• Don't forget about print styles</li>
                    <li>• Don't override browser defaults unnecessarily</li>
                    <li>• Don't use deep nesting in selectors</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tools and Resources */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Essential CSS Tools</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-3">Development Tools</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Chrome DevTools - CSS inspection</li>
                    <li>• CSS Stats - Analyze CSS usage</li>
                    <li>• PurgeCSS - Remove unused CSS</li>
                    <li>• PostCSS - Transform CSS</li>
                    <li>• Autoprefixer - Browser compatibility</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-3">Learning Resources</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• MDN Web Docs - CSS reference</li>
                    <li>• CSS Tricks - Articles and guides</li>
                    <li>• Can I Use - Browser support</li>
                    <li>• Grid Garden - Learn Grid</li>
                    <li>• Flexbox Froggy - Learn Flexbox</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Modern CSS provides powerful tools for creating beautiful, responsive, and maintainable layouts without external dependencies. By mastering these techniques, you can build sophisticated designs that are performant and accessible.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The key is to understand when to use each technique: Grid for overall layouts, Flexbox for component alignment, Container Queries for responsive components, and Custom Properties for dynamic theming.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Keep experimenting with these modern features, and you'll discover new ways to create amazing web experiences!
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Master CSS?</h3>
              <p className="text-white/90 mb-6">
                Explore more web development tutorials and build stunning websites!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
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
