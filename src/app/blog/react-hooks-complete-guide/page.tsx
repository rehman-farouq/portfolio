import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, Database, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "React Hooks Complete Guide 2026 | Rehman Farouq",
  description: "Comprehensive guide to React Hooks including useState, useEffect, useContext, useReducer, useCallback, useMemo, and custom hooks.",
  keywords: "React hooks tutorial, useState useEffect, useContext guide, useReducer useCallback, useMemo custom hooks, React complete guide, modern React development, hooks best practices, React hooks 2026",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "React Hooks Complete Guide 2026 | Rehman Farouq",
    description: "Complete guide to React Hooks with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/react-hooks-complete-guide",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "React Hooks Complete Guide 2026",
    description: "Complete guide to React Hooks with practical examples and best practices.",
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
    canonical: "https://rehmanfarouq.site/blog/react-hooks-complete-guide",
  },
}

export default function ReactHooksGuide() {
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 md:p-12">
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
                18 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              React Hooks Complete Guide 2026: Master Modern React Development
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Everything you need to know about React Hooks - from basics to advanced patterns. Learn useState, useEffect, useContext, and create your own custom hooks.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | React Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to React Hooks</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                React Hooks revolutionized how we write React components. Introduced in React 16.8, hooks allow you to use state and other React features in functional components, making your code more readable, reusable, and maintainable.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In this comprehensive guide, we'll explore all the built-in hooks and learn how to create custom hooks for your specific needs.
              </p>
            </section>

            {/* useState Hook */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">useState: Managing Component State</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The useState hook is the most fundamental hook in React. It allows you to add state to functional components.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Guest');

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default Counter;`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key useState Patterns</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Functional updates: <code>setCount(prev =&gt; prev + 1)</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Lazy initialization: <code>useState(() =&gt; computeExpensiveValue())</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Object state: Use spread operator for updates</span>
                </li>
              </ul>
            </section>

            {/* useEffect Hook */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">useEffect: Handling Side Effects</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The useEffect hook lets you perform side effects in functional components. It's equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount combined.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data
    fetchUser(userId)
      .then(userData => {
        setUser(userData);
        setLoading(false);
      });

    // Cleanup function
    return () => {
      // Cleanup code here
    };
  }, [userId]); // Dependency array

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
};`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Use Effect Patterns</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Run once: Empty dependency array <code>[]</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Run on specific changes: <code>[prop, state]</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Cleanup: Return function from useEffect</span>
                </li>
              </ul>
            </section>

            {/* useContext Hook */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">useContext: Sharing Data Across Components</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                useContext allows you to share data between components without prop drilling. It's perfect for theme data, user authentication, and global state.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React, { createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using theme
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Usage in component
const Header = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  );
};`}
                </pre>
              </div>
            </section>

            {/* useReducer Hook */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">useReducer: Complex State Management</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                useReducer is an alternative to useState for complex state logic. It's especially useful when state depends on previous values or when you have multiple sub-values.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React, { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
};`}
                </pre>
              </div>
            </section>

            {/* useCallback and useMemo */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Optimization: useCallback & useMemo</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                These hooks help optimize performance by memoizing functions and values to prevent unnecessary re-renders.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React, { useState, useCallback, useMemo } from 'react';

const ExpensiveComponent = ({ items }) => {
  const [filter, setFilter] = useState('');

  // Memoize expensive calculation
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Memoize event handler
  const handleItemClick = useCallback((item) => {
    console.log('Item clicked:', item);
  }, []);

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
      />
      {filteredItems.map(item => (
        <div key={item.id} onClick={() => handleItemClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">When to Use Each</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">useCallback</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Event handlers passed to child components</li>
                    <li>• Functions used in useEffect dependencies</li>
                    <li>• Preventing unnecessary re-renders</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">useMemo</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Expensive calculations</li>
                    <li>• Derived state</li>
                    <li>• Reference equality checks</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Custom Hooks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Creating Custom Hooks</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Custom hooks are JavaScript functions whose names start with "use" and can call other hooks. They allow you to extract component logic into reusable functions.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Custom hook for API calls
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Usage in component
const UserProfile = ({ userId }) => {
  const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{user.name}</div>;
};`}
                </pre>
              </div>
            </section>

            {/* Rules of Hooks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rules of Hooks</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-300 mb-4">Two Essential Rules</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">1.</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Only Call Hooks at the Top Level:</strong>
                      <p className="text-gray-600 dark:text-gray-400"> Don't call hooks inside loops, conditions, or nested functions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">2.</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Only Call Hooks from React Functions:</strong>
                      <p className="text-gray-600 dark:text-gray-400"> Call hooks from React functional components or custom hooks.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                React Hooks have transformed how we write React applications. They provide a more direct API to React concepts and make code reuse and organization much easier.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                By mastering these hooks and patterns, you'll be able to build more efficient, maintainable, and scalable React applications. Remember to always follow the Rules of Hooks and use TypeScript when possible for better development experience.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Keep practicing with these patterns, and soon you'll be writing clean, efficient React code like a pro!
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Master React?</h3>
              <p className="text-white/90 mb-6">
                Check out my other React tutorials and start building amazing applications!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
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
