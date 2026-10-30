import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Copy, Shield, Code, Bug, ExternalLink } from 'lucide-react'
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
  title: "How to Build a Password Generator in React & Next.js",
  description: "Step-by-step tutorial on building a secure password generator tool in React/Next.js. Learn to create length sliders, character options, strength indicators…",
  keywords: "password generator React tutorial, Next.js password generator, React password generator tutorial, build password generator, React hooks tutorial, password strength indicator, clipboard API React, React security tools, Next.js tutorial 2026, React beginner tutorial",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "How to Build a Password Generator in React & Next.js | Complete Tutorial",
    description: "Step-by-step tutorial with complete code examples for building a secure password generator in React.",
    url: "https://rehmanfarouq.site/blog/how-to-build-password-generator-react",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "How to Build a Password Generator in React & Next.js",
    description: "Complete tutorial with code examples for building a secure password generator.",
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
    canonical: "https://rehmanfarouq.site/blog/how-to-build-password-generator-react",
  },
}

export default function PasswordGeneratorTutorial() {
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 md:p-12">
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
                12 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              How to Build a Password Generator in React & Next.js: Complete Tutorial
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Learn to create a secure, feature-rich password generator with React hooks, Tailwind CSS, and modern web APIs. Perfect for beginners!
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | React & Next.js Enthusiast
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Build a Password Generator?</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                In today's digital world, strong passwords are essential for security. Building a password generator is an excellent project for React beginners because it teaches fundamental concepts like state management, event handling, and working with browser APIs.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Plus, it's a practical tool that you'll actually use! By the end of this tutorial, you'll have a fully functional password generator that you can add to your portfolio or use daily.
              </p>
            </section>

            {/* Prerequisites */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Prerequisites</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">Before we start, you should have:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Basic knowledge of React and JSX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Understanding of React hooks (useState, useEffect)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Basic familiarity with Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Node.js and npm/yarn installed</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Project Setup */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Setting Up the Project</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                First, let's create a new Next.js project with TypeScript:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`npx create-next-app@latest password-generator
cd password-generator
npm install`}
                </pre>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                If you're using an existing React project, you can skip this step and create the component directly.
              </p>
            </section>

            {/* Main Component */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Creating the Password Generator Component</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Let's create the main component. Create a new file `components/PasswordGenerator.tsx`:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React, { useState, useEffect } from 'react';

interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });
  const [strength, setStrength] = useState<'weak' | 'medium' | 'strong'>('medium');
  const [copied, setCopied] = useState<boolean>(false);

  // Character sets
  const charSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };

  // Generate password function
  const generatePassword = () => {
    let charset = '';
    
    if (options.includeUppercase) charset += charSets.uppercase;
    if (options.includeLowercase) charset += charSets.lowercase;
    if (options.includeNumbers) charset += charSets.numbers;
    if (options.includeSymbols) charset += charSets.symbols;

    if (charset === '') {
      setPassword('Please select at least one character type');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < options.length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    setPassword(newPassword);
  };

  // Calculate password strength
  const calculateStrength = (pwd: string) => {
    if (pwd.length < 8) return 'weak';
    if (pwd.length < 12) return 'medium';
    
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[!@#$%^&*()_+-=[]{}|;:,.<>?]/.test(pwd);
    
    const score = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;
    
    if (score >= 3 && pwd.length >= 16) return 'strong';
    if (score >= 2) return 'medium';
    return 'weak';
  };

  // Copy to clipboard function
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  };

  // Update password when options change
  useEffect(() => {
    generatePassword();
  }, [options]);

  // Update strength when password changes
  useEffect(() => {
    if (password && password !== 'Please select at least one character type') {
      setStrength(calculateStrength(password));
    }
  }, [password]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Password Generator</h2>
      
      {/* Password Display */}
      <div className="mb-6">
        <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-transparent outline-none text-gray-800"
          />
          <button
            onClick={copyToClipboard}
            className="p-2 text-blue-600 hover:bg-blue-100 rounded transition-colors"
          >
            {copied ? '✓' : '📋'}
          </button>
        </div>
        
        {/* Strength Indicator */}
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Strength:</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={\`h-full transition-all duration-300 \${
                  strength === 'weak' ? 'bg-red-500 w-1/3' :
                  strength === 'medium' ? 'bg-yellow-500 w-2/3' :
                  'bg-green-500 w-full'
                }\`}
              />
            </div>
            <span className={\`text-sm font-medium \${
              strength === 'weak' ? 'text-red-500' :
              strength === 'medium' ? 'text-yellow-500' :
              'text-green-500'
            }\`}>
              {strength}
            </span>
          </div>
        </div>
      </div>

      {/* Length Slider */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Length: {options.length}
        </label>
        <input
          type="range"
          min="4"
          max="32"
          value={options.length}
          onChange={(e) => setOptions({...options, length: parseInt(e.target.value)})}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>4</span>
          <span>32</span>
        </div>
      </div>

      {/* Character Type Options */}
      <div className="space-y-3 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.includeUppercase}
            onChange={(e) => setOptions({...options, includeUppercase: e.target.checked})}
            className="w-4 h-4 text-blue-600 rounded"
          />
          <span className="text-sm text-gray-700">Uppercase (A-Z)</span>
        </label>
        
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.includeLowercase}
            onChange={(e) => setOptions({...options, includeLowercase: e.target.checked})}
            className="w-4 h-4 text-blue-600 rounded"
          />
          <span className="text-sm text-gray-700">Lowercase (a-z)</span>
        </label>
        
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.includeNumbers}
            onChange={(e) => setOptions({...options, includeNumbers: e.target.checked})}
            className="w-4 h-4 text-blue-600 rounded"
          />
          <span className="text-sm text-gray-700">Numbers (0-9)</span>
        </label>
        
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.includeSymbols}
            onChange={(e) => setOptions({...options, includeSymbols: e.target.checked})}
            className="w-4 h-4 text-blue-600 rounded"
          />
          <span className="text-sm text-gray-700">Symbols (!@#$%)</span>
        </label>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;`}
                </pre>
              </div>
            </section>

            {/* Styling with Tailwind */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Styling with Tailwind CSS</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The component above uses Tailwind CSS for styling. Here are some tips for making it look even better:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`/* Enhanced styling for better UX */}
<div className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">

/* Better password display */
<div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 shadow-inner">

/* Improved slider styling */
<input className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider" />

/* Custom checkbox styling */
<input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />

/* Enhanced button */
<button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
  Generate Password
</button>`}
                </pre>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Add this CSS to your global styles for custom slider styling:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  cursor: pointer;
  border-radius: 50%;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}`}
                </pre>
              </div>
            </section>

            {/* Common Bugs and Fixes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Common Bugs and How to Fix Them</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Bug 1: Password Not Generating</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Problem:</strong> Password stays empty when clicking generate.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Cause:</strong> No character types selected.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Fix:</strong> Add validation in the generatePassword function:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mt-2">
                    <pre className="text-sm text-gray-300">
{`if (charset === '') {
  setPassword('Please select at least one character type');
  return;
}`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Bug 2: Copy Not Working</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Problem:</strong> Copy to clipboard fails in some browsers.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Cause:</strong> Clipboard API requires HTTPS or localhost.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Fix:</strong> Add fallback method:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mt-2">
                    <pre className="text-sm text-gray-300">
{`const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(password);
    setCopied(true);
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopied(true);
  }
  setTimeout(() => setCopied(false), 2000);
};`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Bug 3: Infinite Re-renders</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Problem:</strong> Component keeps re-rendering.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Cause:</strong> useEffect dependency array issues.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Fix:</strong> Ensure proper dependency management and avoid objects in dependency arrays.
                  </p>
                </div>
              </div>
            </section>

            {/* Advanced Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Features to Add</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                  <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Password History</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Store recently generated passwords in localStorage for quick access.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                  <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Custom Patterns</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Allow users to define custom password patterns (e.g., "word-number-symbol").
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">Password Checking</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Add a feature to check if passwords have been exposed in data breaches.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Bulk Generation</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Generate multiple passwords at once with different criteria.
                  </p>
                </div>
              </div>
            </section>

            {/* Live Demo */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Try the Live Demo</h2>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">See It in Action</h3>
                <p className="text-white/90 mb-6">
                  Check out the fully functional password generator in my portfolio tools section.
                </p>
                <Link 
                  href="/tools/password-generator"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink size={16} />
                  Try Live Demo
                </Link>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion & Next Steps</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Congratulations! You've built a fully functional password generator with React. This project taught you valuable skills including:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">State management with useState hook</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Working with browser APIs (Clipboard API)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Form handling and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Conditional rendering and dynamic styling</span>
                </li>
              </ul>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Next Steps</h3>
                <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>1. Add unit tests with Jest and React Testing Library</li>
                  <li>2. Implement the advanced features mentioned above</li>
                  <li>3. Add accessibility features (ARIA labels, keyboard navigation)</li>
                  <li>4. Deploy to Vercel or Netlify</li>
                  <li>5. Share your project on GitHub and add it to your portfolio</li>
                </ol>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
                Building projects like this password generator is the best way to improve your React skills. Each project teaches you something new and prepares you for real-world development challenges.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Want More React Tutorials?</h3>
              <p className="text-white/90 mb-6">
                Check out my other tutorials on React hooks, Next.js, and modern web development!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Browse Tutorials
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
                >
                  Request a Tutorial
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
