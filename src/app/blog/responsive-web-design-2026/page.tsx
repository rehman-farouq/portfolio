import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Smartphone, Monitor, Tablet } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Responsive Web Design 2026 | Rehman Farouq",
  description: "Master responsive web design in 2026 with mobile-first approach, CSS Grid, Flexbox, media queries, and modern techniques.",
  keywords: "responsive web design 2026, mobile-first design, CSS Grid, Flexbox, media queries, responsive typography, CSS units, viewport meta tag, progressive enhancement, fluid layouts, adaptive design, web development, frontend design, CSS best practices, modern web design",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Responsive Web Design 2026 | Rehman Farouq",
    description: "Master responsive web design with mobile-first approach, CSS Grid, Flexbox, and modern techniques.",
    url: "https://rehmanfarouq.site/blog/responsive-web-design-2026",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Responsive Web Design 2026 | Complete Guide",
    description: "Master responsive web design with mobile-first approach, CSS Grid, Flexbox, and modern techniques.",
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
    canonical: "https://rehmanfarouq.site/blog/responsive-web-design-2026",
  },
}

export default function ResponsiveWebDesign2026() {
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
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Web Dev</span>
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
                Web Dev
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                {yesterdayDate}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                18 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Responsive Web Design 2026: Complete Mobile-First Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master modern responsive design techniques with CSS Grid, Flexbox, and mobile-first approach. Build websites that work perfectly on all devices.
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
                  Full Stack Developer | UI/UX Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Evolution of Responsive Design</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Responsive web design has evolved from simple media queries to sophisticated layout systems. In 2026, we have powerful tools like CSS Grid, Container Queries, and advanced CSS units that make creating responsive layouts easier than ever.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This comprehensive guide covers everything you need to know about modern responsive design, from fundamental concepts to cutting-edge techniques.
              </p>
            </section>

            {/* Mobile-First Design */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mobile-First Design Philosophy</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Why Mobile-First?</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">60% of web traffic comes from mobile devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Forces focus on essential content and functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Improves performance on mobile devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Easier to enhance for larger screens than to simplify for smaller ones</span>
                </li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Mobile-First Implementation</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Mobile-first CSS approach */
.container {
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    padding: 2rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 3rem;
  }
}

/* Large desktop styles */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
}`}
                </pre>
              </div>
            </section>

            {/* Modern CSS Units */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern CSS Units for Responsive Design</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Viewport Units</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Viewport width (vw) */
.hero-title {
  font-size: 4vw; /* 4% of viewport width */
  min-font-size: 1rem;
  max-font-size: 3rem;
}

/* Viewport height (vh) */
.full-screen-section {
  height: 100vh; /* Full viewport height */
}

/* vmin and vmax */
.responsive-square {
  width: 50vmin; /* 50% of smaller viewport dimension */
  height: 50vmin;
}

/* lvh, svh, dvh for mobile browsers */
.mobile-hero {
  height: 100dvh; /* Dynamic viewport height */
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Relative Units</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* rem (root em) - relative to root font size */
html {
  font-size: 16px;
}

.responsive-text {
  font-size: 1rem; /* 16px */
  padding: 1.5rem; /* 24px */
}

/* em - relative to parent font size */
.button {
  font-size: 1em; /* Same as parent */
  padding: 0.5em 1em;
}

/* ch - character width */
.article-content {
  max-width: 65ch; /* Optimal reading width */
  line-height: 1.6;
}`}
                </pre>
              </div>
            </section>

            {/* CSS Grid for Responsive Layouts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CSS Grid for Responsive Layouts</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Responsive Grid Systems</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Auto-fit responsive grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

/* Auto-fill with fixed size */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
}

/* Responsive grid with breakpoints */
.layout-grid {
  display: grid;
  gap: 2rem;
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
}

@media (min-width: 768px) {
  .layout-grid {
    grid-template-columns: 1fr 300px;
    grid-template-areas:
      "header header"
      "main sidebar"
      "footer footer";
  }
}

@media (min-width: 1024px) {
  .layout-grid {
    grid-template-columns: 200px 1fr 300px;
    grid-template-areas:
      "header header header"
      "sidebar main aside"
      "footer footer footer";
  }
}`}
                </pre>
              </div>
            </section>

            {/* Flexbox for Components */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Flexbox for Component Responsiveness</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Responsive Navigation</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Mobile-first navigation */
.nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-links {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.5rem;
}

/* Tablet and desktop */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    flex-direction: row;
  }
}

/* Responsive card layout */
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .card {
    flex: 1 1 300px;
  }
}`}
                </pre>
              </div>
            </section>

            {/* Modern Media Queries */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern Media Query Techniques</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Container Queries (2023+)</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Container queries setup */
.card-container {
  container-type: inline-size;
}

/* Component responds to its container size */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}

@container (min-width: 600px) {
  .card {
    grid-template-columns: 200px 1fr;
  }
  
  .card-sidebar {
    display: block;
  }
}

/* Practical example - Adaptive sidebar */
.widget {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .widget {
    padding: 1rem;
  }
}

@container (min-width: 500px) {
  .widget {
    padding: 2rem;
    border: 1px solid #e5e7eb;
  }
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Advanced Media Features</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Preference queries */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-color-scheme: dark) {
  .auto-theme {
    background-color: #1f2937;
    color: #f9fafb;
  }
}

@media (prefers-contrast: high) {
  .high-contrast {
    border: 2px solid #000;
    color: #000;
    background-color: #fff;
  }
}

/* Resolution and pixel density */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
  }
}

/* Orientation and aspect ratio */
@media (orientation: landscape) {
  .landscape-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (aspect-ratio > 16/9) {
  .wide-content {
    max-width: 1200px;
  }
}`}
                </pre>
              </div>
            </section>

            {/* Responsive Images */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsive Images and Media</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Modern Image Techniques</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Responsive images with srcset */
<img 
  src="image-small.jpg"
  srcset="
    image-small.jpg 480w,
    image-medium.jpg 800w,
    image-large.jpg 1200w,
    image-xlarge.jpg 1600w
  "
  sizes="(max-width: 480px) 100vw,
         (max-width: 800px) 100vw,
         (max-width: 1200px) 100vw,
         1200px"
  alt="Responsive image"
/>

/* Picture element for art direction */
<picture>
  <source media="(max-width: 600px)" srcset="mobile-image.jpg">
  <source media="(max-width: 1200px)" srcset="tablet-image.jpg">
  <img src="desktop-image.jpg" alt="Adaptive image">
</picture>

/* CSS responsive images */
.responsive-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 100%;
}

/* Responsive background images */
.hero-section {
  background-image: url('hero-mobile.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero-section {
    background-image: url('hero-desktop.jpg');
  }
}`}
                </pre>
              </div>
            </section>

            {/* Responsive Typography */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsive Typography</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Fluid Typography</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Fluid typography with clamp() */
.heading-1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  line-height: 1.2;
}

.heading-2 {
  font-size: clamp(1.25rem, 4vw, 2.5rem);
  line-height: 1.3;
}

.body-text {
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  line-height: 1.6;
}

/* Responsive font sizes with media queries */
html {
  font-size: 14px;
}

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  html {
    font-size: 18px;
  }
}

/* Using rem for consistent scaling */
.responsive-component {
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

@media (min-width: 768px) {
  .responsive-component {
    padding: 1.5rem;
    font-size: 1.125rem;
    border-radius: 0.75rem;
  }
}`}
                </pre>
              </div>
            </section>

            {/* Performance Optimization */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Optimization</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">CSS Performance Tips</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Use efficient selectors */
.card { } /* Good */
.container .card { } /* OK */
.container > .card { } /* Better */

/* Avoid universal selectors */
* { } /* Avoid */
.container * { } /* Avoid */

/* Use contain for performance */
.sidebar {
  contain: layout style paint;
}

.image-gallery {
  contain: layout;
}

/* Optimize animations */
.smooth-transition {
  transition: transform 0.3s ease, opacity 0.3s ease;
  will-change: transform, opacity;
}

/* Use transform instead of changing position */
.animated-element {
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.animated-element.active {
  transform: translateX(100%);
}`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsive Design Best Practices</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-3">✅ Do's</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Start with mobile-first approach</li>
                    <li>• Use relative units (rem, em, vw, vh)</li>
                    <li>• Test on real devices</li>
                    <li>• Optimize images for different screen sizes</li>
                    <li>• Use semantic HTML5 elements</li>
                    <li>• Implement proper touch targets (44px minimum)</li>
                    <li>• Consider accessibility in responsive design</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-3">❌ Don'ts</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Don't use fixed pixels for responsive layouts</li>
                    <li>• Don't ignore touch interactions on mobile</li>
                    <li>• Don't forget about horizontal scrolling issues</li>
                    <li>• Don't use complex media queries unnecessarily</li>
                    <li>• Don't ignore performance impact of responsive images</li>
                    <li>• Don't forget about viewport meta tag</li>
                    <li>• Don't rely only on device detection</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testing and Tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing and Development Tools</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Essential Tools</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Browser DevTools - Device simulation and debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Chrome Lighthouse - Performance and accessibility testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">BrowserStack - Cross-browser testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Responsive Design Checker - Multiple viewport testing</span>
                </li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Testing Checklist</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Viewport Meta Tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Testing Checklist */
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)  
- [ ] Desktop (1024px - 1920px)
- [ ] Large screens (1920px+)
- [ ] Touch interactions
- [ ] Horizontal scrolling
- [ ] Font sizes and readability
- [ ] Image optimization
- [ ] Navigation usability
- [ ] Form inputs on mobile
- [ ] Performance on slow connections
- [ ] Accessibility with screen readers`}
                </pre>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Responsive web design in 2026 is more powerful and flexible than ever. With modern CSS features like Grid, Flexbox, Container Queries, and advanced units, we can create experiences that work seamlessly across all devices.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Remember that responsive design is not just about making things fit on different screens—it's about creating optimal user experiences regardless of the device. Keep testing, iterating, and prioritizing user needs in your responsive design approach.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Responsive Websites?</h3>
              <p className="text-white/90 mb-6">
                Explore more web development tutorials and master the art of creating beautiful, responsive designs!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
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
