// Publish dates for blog posts. EDIT these to the real dates you published each article.
// A stable date matters: it was previously regenerated on every request, which looks
// unreliable to search engines.
export interface PostMeta { title: string; description: string; date: string }

export const POSTS: Record<string, PostMeta> = {
  "api-development-nextjs": {
    "title": "API Development with Next.js 2026",
    "description": "Complete guide to building APIs with Next.js.",
    "date": "2026-02-02"
  },
  "best-flutter-packages": {
    "title": "25 Essential Flutter Packages 2026",
    "description": "Complete guide to the best Flutter packages and libraries for 2026.",
    "date": "2026-02-12"
  },
  "docker-compose-development": {
    "title": "Docker Compose for Development 2026",
    "description": "Master Docker Compose for development environments.",
    "date": "2026-02-22"
  },
  "docker-for-developers": {
    "title": "Docker for Developers 2026",
    "description": "Master Docker containerization for developers.",
    "date": "2026-03-04"
  },
  "flutter-3-24-updates": {
    "title": "Flutter 3.24 Updates 2026",
    "description": "Explore Flutter 3.24 updates including new widgets, performance improvements, enhanced web support, better tooling, and new platform capabilities.",
    "date": "2026-03-14"
  },
  "flutter-interview-questions": {
    "title": "Flutter Interview Questions 2026",
    "description": "Complete Flutter interview preparation guide 2026.",
    "date": "2026-03-24"
  },
  "flutter-state-management": {
    "title": "Flutter State Management 2026",
    "description": "Comprehensive Flutter state management guide 2026. Compare Provider vs BLoC vs Riverpod vs GetX vs Redux.",
    "date": "2026-04-03"
  },
  "flutter-vs-nextjs": {
    "title": "Flutter vs Next.js for Web Development in 2026",
    "description": "Comprehensive comparison between Flutter and Next.js for web development.",
    "date": "2026-04-13"
  },
  "flutter-vs-react-native": {
    "title": "Flutter vs React Native 2026",
    "description": "Comprehensive Flutter vs React Native comparison 2026.",
    "date": "2026-04-23"
  },
  "git-best-practices": {
    "title": "Git Best Practices 2026 | Complete Version Control Guide",
    "description": "Master Git best practices for teams.",
    "date": "2026-05-03"
  },
  "git-workflows": {
    "title": "Git Workflows 2026",
    "description": "Master Git workflows including GitFlow, trunk-based development, feature branch workflow, and best practices for team collaboration and version control.",
    "date": "2026-05-13"
  },
  "how-to-build-password-generator-react": {
    "title": "How to Build a Password Generator in React & Next.js",
    "description": "Step-by-step tutorial on building a secure password generator tool in React/Next.js.",
    "date": "2026-05-23"
  },
  "how-to-learn-flutter": {
    "title": "How to Learn Flutter 2026",
    "description": "Comprehensive Flutter learning guide for beginners 2026.",
    "date": "2026-06-02"
  },
  "html5-css3-features": {
    "title": "HTML5 & CSS3 Features 2026",
    "description": "Complete guide to HTML5 and CSS3 features including semantic elements, forms, multimedia, CSS Grid, animations, custom properties, and modern web standards.",
    "date": "2026-06-12"
  },
  "javascript-es6-features": {
    "title": "JavaScript ES6+ Features 2026",
    "description": "Complete guide to JavaScript ES6+ features including arrow functions, destructuring, async/await, modules, classes, and latest ES2020-ES2026 features.",
    "date": "2026-06-22"
  },
  "modern-css-techniques-2026": {
    "title": "Modern CSS Techniques 2026",
    "description": "Master modern CSS with Grid, Flexbox, Container Queries, CSS Custom Properties, and advanced layout techniques.",
    "date": "2026-07-02"
  },
  "nextjs-15-features": {
    "title": "Next.js 15 Features 2026",
    "description": "Explore Next.",
    "date": "2026-07-12"
  },
  "nextjs-portfolio-tutorial": {
    "title": "Next.js Portfolio Tutorial 2026",
    "description": "Complete Next.js portfolio tutorial 2026. Learn to build a stunning portfolio website with Next.",
    "date": "2026-07-22"
  },
  "performance-optimization-nextjs": {
    "title": "Next.js Performance Optimization 2026",
    "description": "Master Next.js performance optimization.",
    "date": "2026-08-01"
  },
  "react-hooks-complete-guide": {
    "title": "React Hooks Complete Guide 2026",
    "description": "Comprehensive guide to React Hooks including useState, useEffect, useContext, useReducer, useCallback, useMemo, and custom hooks.",
    "date": "2026-08-11"
  },
  "react-server-components": {
    "title": "React Server Components 2026",
    "description": "Master React Server Components with practical examples. Learn server-side rendering, data fetching, streaming, and how to build performant React applications.",
    "date": "2026-08-21"
  },
  "responsive-web-design-2026": {
    "title": "Responsive Web Design 2026",
    "description": "Master responsive web design in 2026 with mobile-first approach, CSS Grid, Flexbox, media queries, and modern techniques.",
    "date": "2026-08-31"
  },
  "state-management-comparison": {
    "title": "State Management Comparison 2026",
    "description": "Compare state management solutions including Redux, Zustand, Jotai, Recoil, and Context API. Learn which one to choose for your React application.",
    "date": "2026-09-10"
  },
  "testing-react-nextjs": {
    "title": "Testing React & Next.js Applications 2026",
    "description": "Master testing in React and Next.js.",
    "date": "2026-09-20"
  },
  "typescript-advanced-patterns": {
    "title": "TypeScript Advanced Patterns 2026",
    "description": "Master advanced TypeScript patterns including generics, utility types, decorators, conditional types, and type guards.",
    "date": "2026-09-30"
  },
  "typescript-react-guide": {
    "title": "TypeScript for React Developers 2026",
    "description": "Master TypeScript in React development.",
    "date": "2026-10-10"
  },
  "vscode-extensions-flutter-web": {
    "title": "Top 10 VS Code Extensions for Flutter & Web Developers 2026",
    "description": "Curated list of essential VS Code extensions for Flutter and web developers. Boost productivity with Dart, Flutter, React, Next.",
    "date": "2026-10-20"
  },
  "web-accessibility-a11y": {
    "title": "Web Accessibility (a11y) 2026",
    "description": "Master web accessibility with ARIA, keyboard navigation, semantic HTML, and WCAG compliance. Build inclusive web applications that work for everyone.",
    "date": "2026-10-30"
  }
}

export function getPostDate(slug: string) {
  const date = POSTS[slug]?.date ?? '2026-01-01'
  const display = new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
  return { iso: new Date(date + 'T00:00:00Z').toISOString(), display }
}
