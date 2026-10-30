import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Github, ExternalLink } from 'lucide-react'
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
  title: "Flutter vs Next.js for Web Development in 2026",
  description: "Comprehensive comparison between Flutter and Next.js for web development. Learn key differences, use cases, performance, learning curve, job market, and when…",
  keywords: "Flutter vs Next.js, web development comparison 2026, Flutter web development, Next.js framework, cross-platform development, React vs Flutter, web frameworks comparison, frontend development, JavaScript vs Dart, modern web development",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Flutter vs Next.js for Web Development in 2026 | Complete Comparison",
    description: "Comprehensive comparison between Flutter and Next.js for web development with code examples and personal experience.",
    url: "https://rehmanfarouq.site/blog/flutter-vs-nextjs",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Flutter vs Next.js for Web Development in 2026",
    description: "Complete comparison guide for developers choosing between Flutter and Next.js.",
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
    canonical: "https://rehmanfarouq.site/blog/flutter-vs-nextjs",
  },
}

export default function FlutterVsNextjs() {
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
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Article</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                Comparison
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                {yesterdayDate}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                15 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Flutter vs Next.js for Web Development in 2026: A Complete Comparison
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              As a developer who works extensively with both frameworks, I'll share my insights on choosing between Flutter and Next.js for web development projects.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | Flutter & Next.js Specialist
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction: The Modern Web Development Landscape</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                In 2026, the web development ecosystem has evolved significantly, offering developers more choices than ever before. Two frameworks that have gained substantial traction are Flutter and Next.js. While Next.js has been a React powerhouse for years, Flutter's entry into web development has created an interesting dynamic.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Having built production applications with both frameworks, I've experienced their strengths and limitations firsthand. This comparison will help you make an informed decision for your next web project.
              </p>
            </section>

            {/* Framework Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Understanding the Frameworks</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Flutter</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Originally focused on mobile development, Flutter Web has matured significantly since its initial release.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Language:</span>
                      <span className="text-sm text-gray-900 dark:text-white">Dart</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Released:</span>
                      <span className="text-sm text-gray-900 dark:text-white">2017 (Web support in 2019)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Developer:</span>
                      <span className="text-sm text-gray-900 dark:text-white">Google</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Next.js</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Next.js is a React framework for building full-stack web applications. It provides a comprehensive solution with server-side rendering, static site generation, API routes, and excellent developer experience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Language:</span>
                      <span className="text-sm text-gray-900 dark:text-white">JavaScript/TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Released:</span>
                      <span className="text-sm text-gray-900 dark:text-white">2016</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Developer:</span>
                      <span className="text-sm text-gray-900 dark:text-white">Vercel</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Differences */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Differences: Architecture & Performance</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Language & Ecosystem</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Dart vs JavaScript/TypeScript:</strong> Dart is a strongly-typed, object-oriented language that's easier to learn for developers coming from Java or C#. JavaScript/TypeScript offers a massive ecosystem with countless libraries and tools.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>My experience:</strong> Dart's strict typing caught more bugs during development, but JavaScript's ecosystem provided more solutions for complex problems.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Rendering Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Canvas-based vs DOM-based:</strong> Flutter renders to a canvas, giving pixel-perfect control but with larger bundle sizes. Next.js uses the DOM, resulting in better SEO and smaller initial bundles.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Performance insight:</strong> Next.js generally loads faster initially, while Flutter provides smoother animations once loaded.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Development Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Hot Reload vs Fast Refresh:</strong> Both offer excellent development experiences, but Flutter's hot reload is slightly faster for UI changes. Next.js has better tooling integration with the broader React ecosystem.
                  </p>
                </div>
              </div>
            </section>

            {/* Code Examples */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Code Examples: Building a Simple Component</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Flutter Web Component</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
{`import 'package:flutter/material.dart';

class UserProfile extends StatelessWidget {
  final String name;
  final String avatar;
  final String bio;

  const UserProfile({
    Key? key,
    required this.name,
    required this.avatar,
    required this.bio,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 10,
            offset: Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 30,
            backgroundImage: NetworkImage(avatar),
          ),
          SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  name,
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 4),
                Text(
                  bio,
                  style: TextStyle(
                    color: Colors.grey[600],
                    fontSize: 14,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Next.js Component (TypeScript)</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
{`import React from 'react';
import Image from 'next/image';

interface UserProfileProps {
  name: string;
  avatar: string;
  bio: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  avatar,
  bio,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            src={avatar}
            alt={name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">When to Choose Each Framework</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Choose Flutter When:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Building cross-platform apps (mobile + web + desktop)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Pixel-perfect UI design is critical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Complex animations and custom graphics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Team prefers strongly-typed languages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Building design tools or creative applications</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Choose Next.js When:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">SEO is a top priority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Content-heavy websites (blogs, e-commerce)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Leveraging existing React ecosystem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Server-side rendering requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Maximum performance on initial load</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Learning Curve */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Learning Curve Comparison</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Flutter Learning Path</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Dart Language Basics</span>
                      <span className="text-sm text-gray-500">1-2 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Flutter Widgets & Layout</span>
                      <span className="text-sm text-gray-500">2-3 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">State Management</span>
                      <span className="text-sm text-gray-500">2-4 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Web-specific optimizations</span>
                      <span className="text-sm text-gray-500">1-2 weeks</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Total time to proficiency:</strong> 6-11 weeks
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Next.js Learning Path</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">React Fundamentals</span>
                      <span className="text-sm text-gray-500">2-4 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">TypeScript (recommended)</span>
                      <span className="text-sm text-gray-500">1-3 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">Next.js Concepts (SSR, SSG)</span>
                      <span className="text-sm text-gray-500">2-3 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">API Routes & Deployment</span>
                      <span className="text-sm text-gray-500">1-2 weeks</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <strong>Total time to proficiency:</strong> 6-12 weeks
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Job Market */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job Market & Career Opportunities (2026)</h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Market Demand</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-700 dark:text-gray-300">
                        <strong>Next.js:</strong> 35% of React job listings mention Next.js
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <strong>Flutter:</strong> Growing demand, especially in cross-platform roles
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <strong>Hybrid skills:</strong> Developers knowing both command premium rates
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Salary Insights</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-700 dark:text-gray-300">
                        <strong>Next.js Developers:</strong> $90k-$150k (US market)
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <strong>Flutter Developers:</strong> $85k-$140k (US market)
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <strong>Full-stack with both:</strong> $110k-$180k+ (US market)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Experience */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Personal Experience</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Working with both frameworks has given me unique insights into their strengths. I built my portfolio website using Next.js because SEO and fast initial loading were crucial. However, I've developed several client applications using Flutter where the requirement was consistent UI across mobile and web platforms.
                </p>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-300 mb-3">Key Takeaways from My Projects</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Flutter excelled in a dashboard application with complex charts and real-time updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Next.js was perfect for a content-heavy blog with SEO requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Flutter's hot reload saved significant development time on UI-heavy features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Next.js's ecosystem provided ready solutions for authentication, payments, and more</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion & Recommendations</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Both Flutter and Next.js are excellent frameworks, but they serve different purposes. Your choice should depend on your specific requirements, team expertise, and long-term goals.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 text-center">
                    <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Choose Flutter if:</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      Cross-platform consistency and rich UI are your priorities
                    </p>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 text-center">
                    <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">Choose Next.js if:</h4>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      SEO, performance, and ecosystem support are critical
                    </p>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 text-center">
                    <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Learn Both if:</h4>
                    <p className="text-sm text-purple-800 dark:text-purple-300">
                      You want to maximize career opportunities and flexibility
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
                  The web development landscape continues to evolve, and both frameworks are actively improving. Flutter Web is becoming more performant and SEO-friendly, while Next.js continues to push the boundaries of what's possible with React.
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My recommendation? Start with the framework that aligns with your immediate project needs, but consider learning both to become a more versatile developer in 2026 and beyond.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Next Project?</h3>
              <p className="text-white/90 mb-6">
                Whether you choose Flutter or Next.js, I can help you build amazing web applications. Let's discuss your project requirements!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/projects"
                  className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
                >
                  View My Work
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
