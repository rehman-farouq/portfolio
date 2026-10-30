"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, User, Tag, Search } from "lucide-react";
import Link from "next/link";

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getYesterdayDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const blogPosts = [
    {
      id: "flutter-vs-nextjs",
      title:
        "Flutter vs Next.js for Web Development in 2026: A Complete Comparison",
      excerpt:
        "Comprehensive comparison between Flutter and Next.js for web development. Learn key differences, use cases, performance, learning curve, job market, and when to choose each framework in 2026.",
      category: "Comparison",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "15 min",
      image: "/blog/flutter-vs-nextjs.jpg",
      tags: ["Flutter", "Next.js", "Web Development", "Comparison"],
      featured: true,
    },
    {
      id: "how-to-build-password-generator-react",
      title:
        "How to Build a Password Generator in React & Next.js: Complete Tutorial",
      excerpt:
        "Step-by-step tutorial on building a secure password generator tool in React/Next.js. Learn to create length sliders, character options, strength indicators, and copy functionality with code examples.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "12 min",
      image: "/blog/password-generator-tutorial.jpg",
      tags: ["React", "Next.js", "Tutorial", "Password Generator", "Security"],
      featured: true,
    },
    {
      id: "vscode-extensions-flutter-web",
      title: "Top 10 VS Code Extensions for Flutter & Web Developers",
      excerpt:
        "Curated list of essential VS Code extensions for Flutter and web developers. Boost productivity with Dart, Flutter, React, Next.js, Prettier, ESLint, and more must-have extensions.",
      category: "Tools",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "10 min",
      image: "/blog/vscode-extensions.jpg",
      tags: [
        "VS Code",
        "Extensions",
        "Flutter",
        "Web Development",
        "Productivity",
      ],
      featured: true,
    },
    {
      id: "react-hooks-complete-guide",
      title: "React Hooks Complete Guide 2026: Master Modern React Development",
      excerpt:
        "Everything you need to know about React Hooks - from basics to advanced patterns. Learn useState, useEffect, useContext, and create your own custom hooks.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "18 min",
      image: "/blog/react-hooks-guide.jpg",
      tags: ["React", "Hooks", "Tutorial", "useState", "useEffect"],
      featured: true,
    },
    {
      id: "typescript-react-guide",
      title:
        "TypeScript for React Developers 2026: Build Type-Safe Applications",
      excerpt:
        "Master TypeScript in React development. Learn interfaces, generics, props typing, hooks, and advanced TypeScript patterns for building type-safe React applications.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "15 min",
      image: "/blog/typescript-react.jpg",
      tags: ["TypeScript", "React", "Tutorial", "Type Safety", "Interfaces"],
      featured: true,
    },
    {
      id: "modern-css-techniques-2026",
      title:
        "Modern CSS Techniques 2026: Build Responsive, Maintainable Styles",
      excerpt:
        "Master CSS Grid, Flexbox, Container Queries, CSS Custom Properties, and advanced layout techniques. Learn practical techniques for building beautiful, responsive web layouts.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "16 min",
      image: "/blog/modern-css.jpg",
      tags: ["CSS", "Grid", "Flexbox", "Container Queries", "Responsive"],
      featured: true,
    },
    {
      id: "flutter-interview-questions",
      title: "Top 50 Flutter Interview Questions and Answers",
      excerpt:
        "Comprehensive guide to Flutter interview questions covering widgets, state management, navigation, and advanced concepts with detailed answers.",
      category: "Flutter",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "15 min",
      image: "/blog/flutter-interview.jpg",
      tags: ["Flutter", "Interview", "Questions", "Career"],
    },
    {
      id: "flutter-vs-react-native",
      title: "Flutter vs React Native: Which is Better in 2026?",
      excerpt:
        "Detailed comparison between Flutter and React Native covering performance, development experience, ecosystem, and real-world use cases.",
      category: "Comparison",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "12 min",
      image: "/blog/flutter-react-native.jpg",
      tags: ["Flutter", "React Native", "Comparison", "Mobile Dev"],
    },
    {
      id: "best-flutter-packages",
      title: "25 Essential Flutter Packages Every Developer Should Know",
      excerpt:
        "Curated list of must-have Flutter packages for state management, networking, UI, animations, and productivity boosters.",
      category: "Flutter",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "10 min",
      image: "/blog/flutter-packages.jpg",
      tags: ["Flutter", "Packages", "Tools", "Productivity"],
    },
    {
      id: "how-to-learn-flutter",
      title: "Complete Guide: How to Learn Flutter from Scratch in 2026",
      excerpt:
        "Step-by-step learning path for Flutter beginners including resources, projects, and best practices to master Flutter development.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "18 min",
      image: "/blog/learn-flutter.jpg",
      tags: ["Flutter", "Learning", "Tutorial", "Beginner"],
    },
    {
      id: "nextjs-portfolio-tutorial",
      title: "Build Stunning Portfolio with Next.js: Complete Tutorial",
      excerpt:
        "Learn how to create a professional portfolio website using Next.js, Tailwind CSS, and modern web development practices.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "20 min",
      image: "/blog/nextjs-portfolio.jpg",
      tags: ["Next.js", "Portfolio", "Tutorial", "Web Dev"],
    },
    {
      id: "flutter-state-management",
      title: "Flutter State Management: Provider vs BLoC vs Riverpod",
      excerpt:
        "In-depth comparison of popular Flutter state management solutions with examples and best practices for your apps.",
      category: "Flutter",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "14 min",
      image: "/blog/state-management.jpg",
      tags: ["Flutter", "State Management", "BLoC", "Provider", "Riverpod"],
    },
    {
      id: "javascript-es6-features",
      title: "JavaScript ES6+ Features 2026: Complete Modern JavaScript Guide",
      excerpt:
        "Master modern JavaScript development with ES6+ features including arrow functions, destructuring, async/await, and latest ES2020-ES2026 updates.",
      category: "Web Dev",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "20 min",
      image: "/blog/javascript-es6.jpg",
      tags: [
        "JavaScript",
        "ES6",
        "ES2020",
        "ES2026",
        "Modern JavaScript",
        "Async Await",
      ],
      featured: true,
    },
    {
      id: "responsive-web-design-2026",
      title: "Responsive Web Design 2026: Complete Mobile-First Guide",
      excerpt:
        "Master responsive web design with mobile-first approach, CSS Grid, Flexbox, and modern techniques. Build websites that work perfectly on all devices.",
      category: "Web Dev",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "18 min",
      image: "/blog/responsive-design.jpg",
      tags: ["Responsive Design", "CSS Grid", "Flexbox", "Mobile First", "CSS"],
      featured: true,
    },
    {
      id: "html5-css3-features",
      title: "HTML5 & CSS3 Features 2026: Complete Modern Web Standards Guide",
      excerpt:
        "Master modern HTML5 semantic elements and CSS3 advanced features including Grid, animations, custom properties, and cutting-edge web standards.",
      category: "Web Dev",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "22 min",
      image: "/blog/html5-css3.jpg",
      tags: [
        "HTML5",
        "CSS3",
        "Semantic HTML",
        "CSS Grid",
        "Web Standards",
        "Modern CSS",
      ],
      featured: true,
    },
    {
      id: "typescript-advanced-patterns",
      title:
        "TypeScript Advanced Patterns 2026: Generics, Utility Types, Decorators & More",
      excerpt:
        "Master advanced TypeScript patterns including generics, utility types, decorators, conditional types, and type guards. Learn to write type-safe, maintainable code with practical examples.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "22 min",
      image: "/blog/typescript-advanced.jpg",
      tags: [
        "TypeScript",
        "Generics",
        "Utility Types",
        "Decorators",
        "Type Safety",
      ],
      featured: true,
    },
    {
      id: "nextjs-15-features",
      title:
        "Next.js 15 Features 2026: Server Actions, Partial Prerendering & More",
      excerpt:
        "Explore Next.js 15 features including server actions, partial prerendering, improved app router, enhanced performance, and new developer experience improvements.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "18 min",
      image: "/blog/nextjs-15.jpg",
      tags: [
        "Next.js",
        "Server Actions",
        "Partial Prerendering",
        "App Router",
        "Performance",
      ],
      featured: true,
    },
    {
      id: "flutter-3-24-updates",
      title:
        "Flutter 3.24 Updates 2026: New Widgets, Performance Improvements & More",
      excerpt:
        "Explore Flutter 3.24 updates including new widgets, performance improvements, enhanced web support, better tooling, and new platform capabilities.",
      category: "Flutter",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "16 min",
      image: "/blog/flutter-3-24.jpg",
      tags: ["Flutter", "Material 3", "Performance", "Web Support", "Widgets"],
    },
    {
      id: "react-server-components",
      title:
        "React Server Components 2026: Deep Dive with Examples & Best Practices",
      excerpt:
        "Master React Server Components with practical examples. Learn server-side rendering, data fetching, streaming, and how to build performant React applications.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "20 min",
      image: "/blog/rsc.jpg",
      tags: ["React", "Server Components", "SSR", "Streaming", "Performance"],
      featured: true,
    },
    {
      id: "docker-compose-development",
      title:
        "Docker Compose for Development 2026: Multi-Container Setups & Best Practices",
      excerpt:
        "Master Docker Compose for development environments. Learn multi-container setups, development workflows, service orchestration, and best practices for local development.",
      category: "Tools",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "18 min",
      image: "/blog/docker-compose.jpg",
      tags: ["Docker", "DevOps", "Development", "Containers", "Orchestration"],
    },
    {
      id: "git-workflows",
      title:
        "Git Workflows 2026: GitFlow, Trunk-Based Development & Best Practices",
      excerpt:
        "Master Git workflows including GitFlow, trunk-based development, feature branch workflow, and best practices for team collaboration and version control.",
      category: "Tools",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "17 min",
      image: "/blog/git-workflows.jpg",
      tags: ["Git", "GitFlow", "Version Control", "Collaboration", "DevOps"],
    },
    {
      id: "web-accessibility-a11y",
      title:
        "Web Accessibility (a11y) 2026: ARIA, Keyboard Navigation & Best Practices",
      excerpt:
        "Master web accessibility with ARIA, keyboard navigation, semantic HTML, and WCAG compliance. Build inclusive web applications that work for everyone.",
      category: "Web Dev",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "19 min",
      image: "/blog/a11y.jpg",
      tags: [
        "Accessibility",
        "ARIA",
        "WCAG",
        "Keyboard Navigation",
        "Inclusive Design",
      ],
      featured: true,
    },
    {
      id: "state-management-comparison",
      title: "State Management Comparison 2026: Redux, Zustand, Jotai & More",
      excerpt:
        "Compare state management solutions including Redux, Zustand, Jotai, Recoil, and Context API. Learn which one to choose for your React application.",
      category: "Tutorial",
      author: "Rehman Farouq",
      date: getYesterdayDate(),
      readTime: "21 min",
      image: "/blog/state-management.jpg",
      tags: ["React", "Redux", "Zustand", "Jotai", "State Management"],
      featured: true,
    },
  ];

  const categories = [
    "all",
    "Flutter",
    "Tutorial",
    "Comparison",
    "Web Dev",
    "Tools",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-white/45 to-transparent dark:via-white/[0.025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Tutorials
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Discover insights, tutorials, and best practices for Flutter,
            Next.js, and modern web development
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && !searchTerm && selectedCategory === "all" && (
          <div className="mb-12">
            <Link href={`/blog/${featuredPost.id}`} className="block">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1 hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 md:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                            <Calendar size={40} />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Featured
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar size={14} />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <Clock size={14} />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {featuredPost.author}
                          </span>
                        </div>
                        <span className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:translate-x-1 transition-transform">
                          Read More
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block group"
            >
              <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 cursor-pointer h-full">
                {/* Article Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-2">
                        <Tag size={32} />
                      </div>
                    </div>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform inline-block">
                        Read →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to learn more about Flutter and Next.js?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for weekly tutorials, tips, and
              insights on modern web and mobile development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
