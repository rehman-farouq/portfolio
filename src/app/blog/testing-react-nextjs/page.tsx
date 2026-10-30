import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, CheckCircle, Bug, Shield } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Testing React & Next.js Applications 2026 | Rehman Farouq",
  description: "Master testing in React and Next.js. Learn unit testing with Jest, component testing with React Testing Library, E2E testing with Playwright, integration…",
  keywords: "React testing, Next.js testing, Jest, React Testing Library, Playwright, E2E testing, unit testing, integration testing, testing best practices, TDD, test coverage",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Testing React & Next.js Applications 2026 | Rehman Farouq",
    description: "Complete guide to testing React and Next.js applications with modern tools and best practices.",
    url: "https://rehmanfarouq.site/blog/testing-react-nextjs",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Testing React & Next.js Applications 2026",
    description: "Master unit, integration, and E2E testing for React and Next.js applications.",
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
    canonical: "https://rehmanfarouq.site/blog/testing-react-nextjs",
  },
}

export default function TestingReactNextjs() {
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
                22 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Testing React & Next.js Applications 2026: Complete Testing Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master comprehensive testing strategies for React and Next.js applications. Learn unit testing, integration testing, and E2E testing with modern tools and best practices.
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
                  Full Stack Developer | Testing & Quality Assurance Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Testing Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Testing is essential for building reliable, maintainable applications. A comprehensive testing strategy catches bugs early, ensures code quality, and provides confidence when refactoring or adding new features.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                In this guide, we'll explore the testing pyramid and implement unit, integration, and end-to-end tests for React and Next.js applications using modern tools.
              </p>
            </section>

            {/* Testing Pyramid */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Testing Pyramid</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The testing pyramid provides a framework for balancing different types of tests. It emphasizes having more unit tests at the base, fewer integration tests in the middle, and the fewest end-to-end tests at the top.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-t-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Unit Tests</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Fast, isolated tests for individual functions and components
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-t-4 border-yellow-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Integration Tests</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Test how multiple units work together
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-t-4 border-red-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">E2E Tests</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Test complete user flows in a browser
                  </p>
                </div>
              </div>
            </section>

            {/* Unit Testing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-purple-600" size={24} />
                Unit Testing with Jest & React Testing Library
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Unit tests are the foundation of your testing strategy. Jest provides the test runner and assertion library, while React Testing Library offers utilities for testing React components.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-purple-400 text-sm overflow-x-auto">
                  <code>{`// Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders button with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    screen.getByText('Click me').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByText('Click me')).toBeDisabled()
  })
})`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Unit Testing Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Test user behavior, not implementation details</li>
                <li>Keep tests isolated and independent</li>
                <li>Use descriptive test names</li>
                <li>Follow AAA pattern (Arrange, Act, Assert)</li>
                <li>Avoid testing third-party libraries</li>
              </ul>
            </section>

            {/* Integration Testing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Bug className="text-purple-600" size={24} />
                Integration Testing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Integration tests verify that different parts of your application work together correctly. They're particularly useful for testing API routes, database interactions, and component integration.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-purple-400 text-sm overflow-x-auto">
                  <code>{`// Integration test for API route
import { POST } from '@/app/api/users/route'
import { NextRequest } from 'next/server'

describe('User API Integration', () => {
  it('creates a new user', async () => {
    const request = new NextRequest('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: 'John', email: 'john@example.com' })
    })
    
    const response = await POST(request)
    const data = await response.json()
    
    expect(response.status).toBe(201)
    expect(data.name).toBe('John')
    expect(data.email).toBe('john@example.com')
  })
})`}</code>
                </pre>
              </div>
            </section>

            {/* E2E Testing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="text-purple-600" size={24} />
                End-to-End Testing with Playwright
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                E2E tests simulate real user interactions in a browser. Playwright is a modern E2E testing framework that supports multiple browsers and provides excellent debugging capabilities.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-purple-400 text-sm overflow-x-auto">
                  <code>{`// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('user can login with valid credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login')
    
    await page.fill('input[name="email"]', 'user@example.com')
    await page.fill('input[name="password"]', 'password123')
    await page.click('button[type="submit"]')
    
    await expect(page).toHaveURL('/dashboard')
    await expect(page.locator('h1')).toContainText('Welcome')
  })

  test('shows error for invalid credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login')
    
    await page.fill('input[name="email"]', 'invalid@example.com')
    await page.fill('input[name="password"]', 'wrongpassword')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('.error')).toContainText('Invalid credentials')
  })
})`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">E2E Testing Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Focus on critical user journeys</li>
                <li>Use data-testid selectors for stability</li>
                <li>Run tests in parallel for speed</li>
                <li>Use page object model for maintainability</li>
                <li>Integrate with CI/CD pipelines</li>
              </ul>
            </section>

            {/* Testing Next.js Specifics */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing Next.js Specific Features</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Next.js introduces unique features that require specific testing approaches, including Server Components, API routes, and middleware.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Server Components</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Test Server Components by testing their rendered output and data fetching logic
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">API Routes</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Test API routes directly using NextRequest and NextResponse
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Middleware</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Test middleware by mocking NextRequest objects
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Route Handlers</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Test different HTTP methods and status codes
                  </p>
                </div>
              </div>
            </section>

            {/* Test Coverage */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Test Coverage & CI/CD</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Measuring test coverage helps ensure your codebase is adequately tested. Integrating tests into CI/CD pipelines ensures code quality is maintained throughout development.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-purple-400 text-sm overflow-x-auto">
                  <code>{`// package.json scripts
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui"
  }
}

// .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npm run test:e2e`}</code>
                </pre>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-700 dark:text-gray-300">
                A comprehensive testing strategy is essential for building reliable React and Next.js applications. By combining unit tests, integration tests, and E2E tests, you can catch bugs early, ensure code quality, and ship with confidence. Remember that testing is an investment that pays dividends in maintainability and user satisfaction.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
