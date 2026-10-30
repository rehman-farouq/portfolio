import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, Accessibility, Keyboard } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Web Accessibility (a11y) 2026 | Rehman Farouq",
  description: "Master web accessibility with ARIA, keyboard navigation, semantic HTML, and WCAG compliance. Build inclusive web applications that work for everyone.",
  keywords: "web accessibility, a11y, ARIA, keyboard navigation, WCAG, semantic HTML, inclusive design, screen readers, accessibility testing, web development",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Web Accessibility (a11y) 2026 | Rehman Farouq",
    description: "Complete guide to web accessibility with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/web-accessibility-a11y",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Web Accessibility (a11y) 2026",
    description: "Master web accessibility with ARIA, keyboard navigation, and best practices.",
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
    canonical: "https://rehmanfarouq.site/blog/web-accessibility-a11y",
  },
}

export default function WebAccessibilityA11y() {
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 md:p-12">
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
                19 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Web Accessibility (a11y) 2026: Build Inclusive Applications
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master web accessibility with ARIA, keyboard navigation, semantic HTML, and WCAG compliance. Build inclusive web applications that work for everyone.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | Accessibility Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Web Accessibility</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Web accessibility ensures that everyone, including people with disabilities, can use your website. It's not just about compliance—it's about creating inclusive experiences for all users.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This guide covers essential accessibility concepts including semantic HTML, ARIA attributes, keyboard navigation, and WCAG compliance.
              </p>
            </section>

            {/* Semantic HTML */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="text-purple-600" size={24} />
                Semantic HTML
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Semantic HTML provides meaning to your content, making it accessible to screen readers and assistive technologies.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`<!-- Bad: Non-semantic div soup -->
<div class="header">
  <div class="nav">
    <div class="link">Home</div>
  </div>
</div>

<!-- Good: Semantic HTML -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<!-- Semantic structure -->
<header>Page header</header>
<nav>Navigation links</nav>
<main>Main content</main>
<article>Self-contained content</article>
<section>Thematic grouping</article>
<aside>Related content</aside>
<footer>Page footer</footer>

<!-- Headings hierarchy -->
<h1>Main page title</h1>
  <h2>Section title</h2>
    <h3>Subsection title</h3>
  <h2>Another section</h2>

<!-- Form accessibility -->
<form>
  <label for="email">Email address</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    required
    aria-describedby="email-help"
  />
  <small id="email-help">We'll never share your email.</small>
  
  <button type="submit">Subscribe</button>
</form>

<!-- Tables -->
<table>
  <caption>Monthly sales data</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>`}
                </pre>
              </div>
            </section>

            {/* ARIA Attributes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Accessibility className="text-purple-600" size={24} />
                ARIA Attributes
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                ARIA (Accessible Rich Internet Applications) attributes enhance accessibility when HTML semantics aren't sufficient.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`<!-- ARIA roles -->
<button role="button">Click me</button>
<div role="navigation">Navigation</div>
<div role="complementary">Sidebar</div>

<!-- ARIA labels -->
<button aria-label="Close dialog">✕</button>
<img src="chart.png" alt="Sales chart showing 20% increase" />

<!-- ARIA descriptions -->
<input 
  type="password" 
  aria-describedby="password-help"
/>
<div id="password-help">
  Must be at least 8 characters
</div>

<!-- ARIA states and properties -->
<button aria-pressed="false">Toggle</button>
<div aria-expanded="false">Collapsible content</div>
<div aria-hidden="true">Hidden from screen readers</div>

<!-- Live regions -->
<div aria-live="polite" aria-atomic="true">
  Status updates appear here
</div>

<!-- Custom components -->
<div role="button" tabindex="0" aria-label="Play video">
  ▶
</div>

<!-- Progress indicators -->
<div role="progressbar" 
     aria-valuenow="75" 
     aria-valuemin="0" 
     aria-valuemax="100">
  75% complete
</div>

<!-- Tabs -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1">
    Tab 1
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel2">
    Tab 2
  </button>
</div>
<div id="panel1" role="tabpanel">Content 1</div>
<div id="panel2" role="tabpanel" hidden>Content 2</div>`}
                </pre>
              </div>
            </section>

            {/* Keyboard Navigation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Keyboard className="text-purple-600" size={24} />
                Keyboard Navigation
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Ensure your website is fully navigable using only a keyboard for users who can't use a mouse.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// React keyboard navigation example
import { useState, useEffect, useRef } from 'react'

function KeyboardAccessibleButton({ onClick, children }) {
  const buttonRef = useRef(null)
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }
  
  return (
    <div
      ref={buttonRef}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      aria-label="Action button"
    >
      {children}
    </div>
  )
}

// Focus management
function Modal({ isOpen, onClose }) {
  const modalRef = useRef(null)
  
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus()
      // Trap focus within modal
    }
  }, [isOpen])
  
  if (!isOpen) return null
  
  return (
    <div 
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <h2 id="modal-title">Modal Title</h2>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

// Skip to main content link
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
    >
      Skip to main content
    </a>
  )
}

// Focus visible styles
button:focus-visible {
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Keyboard Best Practices</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">All interactive elements must be keyboard accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Provide visible focus indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Implement logical tab order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Add skip navigation links</span>
                </li>
              </ul>
            </section>

            {/* Color Contrast */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Color and Visual Design</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Ensure sufficient color contrast and don't rely solely on color to convey information.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* WCAG AA contrast ratios */
/* Normal text: 4.5:1 */
/* Large text (18pt+): 3:1 */
/* UI components: 3:1 */

/* Good contrast */
.text-primary {
  color: #1a1a1a; /* On white: 16.5:1 */
}

.text-secondary {
  color: #4a4a4a; /* On white: 7.1:1 */
}

/* Bad contrast */
.text-low-contrast {
  color: #cccccc; /* On white: 1.6:1 - fails */
}

/* Don't rely on color alone */
.error-message {
  color: #dc2626;
  font-weight: bold;
  border-left: 4px solid #dc2626;
  padding-left: 8px;
}

/* Better: Add icon and text */
.error-message {
  color: #dc2626;
  display: flex;
  align-items: center;
  gap: 8px;
}

.error-message::before {
  content: "⚠";
  font-size: 1.2em;
}

/* Focus indicators */
button:focus {
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
                </pre>
              </div>
            </section>

            {/* Forms Accessibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Accessible Forms</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Make forms accessible with proper labels, error handling, and validation feedback.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// React accessible form
function ContactForm() {
  const [errors, setErrors] = useState({})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate and show errors
  }
  
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" role="alert" className="error">
            {errors.name}
          </span>
        )}
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : 'email-help'}
        />
        <small id="email-help">We'll never share your email.</small>
        {errors.email && (
          <span id="email-error" role="alert" className="error">
            {errors.email}
          </span>
        )}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  )
}

// Fieldset for related form controls
<fieldset>
  <legend>Choose your preferences</legend>
  
  <div>
    <input type="checkbox" id="newsletter" name="newsletter" />
    <label for="newsletter">Subscribe to newsletter</label>
  </div>
  
  <div>
    <input type="checkbox" id="updates" name="updates" />
    <label for="updates">Receive product updates</label>
  </div>
</fieldset>`}
                </pre>
              </div>
            </section>

            {/* Testing Accessibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing Accessibility</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Use tools and techniques to test and validate accessibility throughout development.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# Automated testing tools
# axe DevTools (Chrome extension)
# Lighthouse (Chrome DevTools)
# WAVE (WebAIM)
# axe-core (npm package)

# Install axe-core
npm install --save-dev @axe-core/react

# React testing with axe
import { axe, toHaveNoViolations } from 'jest-axe'
import { render } from '@testing-library/react'

expect.extend(toHaveNoViolations)

it('should have no accessibility violations', async () => {
  const { container } = render(<MyComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

# Manual testing checklist
- Navigate with keyboard only
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Check color contrast ratios
- Verify all images have alt text
- Test form validation and error messages
- Check focus management
- Test with screen magnification
- Verify text resizing works

# Browser testing
# Chrome: Lighthouse audit
# Firefox: Accessibility Inspector
# Safari: VoiceOver testing
# Edge: Accessibility Insights`}
                </pre>
              </div>
            </section>

            {/* WCAG Compliance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">WCAG Compliance</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Web Content Accessibility Guidelines (WCAG) provide standards for accessible web content.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# WCAG 2.1 Principles (POUR)
# Perceivable: Information must be presentable
# Operable: Interface must be operable
# Understandable: Information must be understandable
# Robust: Content must be robust enough for assistive tech

# WCAG Levels
# A: Minimum accessibility
# AA: Standard accessibility (recommended)
# AAA: Enhanced accessibility (not required)

# Key WCAG Success Criteria
# 1.1.1 Non-text Content: Alt text for images
# 1.3.1 Info and Relationships: Semantic HTML
# 1.4.3 Contrast (Minimum): 4.5:1 for normal text
# 2.1.1 Keyboard: All functionality keyboard accessible
# 2.4.1 Bypass Blocks: Skip navigation link
# 2.4.2 Page Titled: Descriptive page titles
# 3.1.1 Language of Page: HTML lang attribute
# 3.3.1 Error Identification: Clear error messages
# 4.1.1 Parsing: Valid HTML
# 4.1.2 Name, Role, Value: ARIA attributes`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Accessibility Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">HTML</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use semantic elements</li>
                    <li>• Provide alt text for images</li>
                    <li>• Use proper heading hierarchy</li>
                    <li>• Label form controls</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">CSS</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Ensure color contrast</li>
                    <li>• Support text resizing</li>
                    <li>• Respect reduced motion</li>
                    <li>• Provide focus indicators</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">JavaScript</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Manage focus properly</li>
                    <li>• Handle keyboard events</li>
                    <li>• Use ARIA attributes</li>
                    <li>• Announce dynamic changes</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-cyan-900 dark:text-cyan-300 mb-2">Testing</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Test with keyboard</li>
                    <li>• Use screen readers</li>
                    <li>• Run automated audits</li>
                    <li>• Test with real users</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Web accessibility is essential for creating inclusive experiences. By following WCAG guidelines, using semantic HTML, implementing proper ARIA attributes, and testing thoroughly, you can ensure your website works for everyone.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Remember that accessibility is not a one-time task but an ongoing process. Make it part of your development workflow from the start.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Accessible Websites?</h3>
              <p className="text-white/90 mb-6">
                Explore more web development tutorials and create inclusive experiences!
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
