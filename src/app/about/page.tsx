import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title:
    "About Rehman Farouq | Flutter & Next.js Developer",
  description:
    "Meet Rehman Farouq, experienced full stack developer specializing in Flutter, Next.js, React, TypeScript, and modern web technologies.",
  keywords:
    "about Rehman Farouq, full stack developer profile, Flutter developer bio, Next.js developer background, React developer expertise, TypeScript specialist, web development professional, mobile app developer, software engineer profile, developer portfolio about, technical expertise, professional developer background, programming experience, development journey",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title:
      "About Rehman Farouq | Flutter & Next.js Developer",
    description:
      "Meet Rehman Farouq, experienced full stack developer specializing in Flutter, Next.js, React, TypeScript, and modern web technologies.",
    url: "https://rehmanfarouq.site/about",
    type: "profile",
    siteName: "Rehman Farouq Portfolio",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title:
      "About Rehman Farouq | Full Stack Developer | Flutter, Next.js, React Expert",
    description:
      "Meet Rehman Farouq, experienced full stack developer specializing in Flutter, Next.js, React, TypeScript, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/about",
  },
  other: {
    "og:locale": "en_US",
    "article:author": "Rehman Farouq",
  },
};

export default function AboutPage() {
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
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                About
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="sr-only">About Rehman Farouq – Flutter &amp; Next.js Developer</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection delay={200}>
            <About />
          </AnimatedSection>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
