import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Projects | Rehman Farouq – Flutter & Next.js Apps",
  description:
    "Explore Rehman Farouq's complete portfolio of projects. Discover innovative Flutter mobile apps, Next.js web applications, React projects, and full stack…",
  keywords:
    "portfolio projects, Flutter apps showcase, Next.js projects, React applications, full stack developer portfolio, web development projects, mobile app portfolio, software projects showcase, development portfolio, programming projects, tech portfolio, developer work showcase, project case studies, live demo projects, GitHub portfolio",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title:
      "Projects | Rehman Farouq – Flutter & Next.js Apps",
    description:
      "Explore Rehman Farouq's complete portfolio of projects. Discover innovative Flutter mobile apps, Next.js web applications, React projects, and full stack…",
    url: "https://rehmanfarouq.site/projects",
    type: "website",
    siteName: "Rehman Farouq Portfolio",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title:
      "Portfolio Projects | Flutter Apps, Web Applications | Full Stack Developer Showcase",
    description:
      "Explore Rehman Farouq's complete portfolio of projects. Discover innovative Flutter mobile apps, Next.js web applications, and full stack development solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/projects",
  },
  other: {
    "og:locale": "en_US",
    "article:author": "Rehman Farouq",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 flex flex-col">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 animate-in slide-in-from-top duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Portfolio
              </span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Projects
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="sr-only">Projects by Rehman Farouq – Flutter &amp; Next.js Apps</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection delay={200}>
            <Projects />
          </AnimatedSection>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
