import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Experience | Rehman Farouq – Flutter & Next.js Developer",
  description:
    "Explore Rehman Farouq's comprehensive professional experience and career journey. Discover work history, companies, roles, and achievements in Flutter…",
  keywords:
    "professional experience, developer career history, full stack developer experience, Flutter developer jobs, React development experience, Next.js developer roles, software engineer career, web development experience, mobile app development career, programming professional background, tech career journey, developer work history, software development experience, IT professional experience",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title:
      "Experience | Rehman Farouq – Flutter & Next.js Developer",
    description:
      "Explore Rehman Farouq's comprehensive professional experience and career journey. Discover work history, companies, roles, and achievements in Flutter…",
    url: "https://rehmanfarouq.site/experience",
    type: "website",
    siteName: "Rehman Farouq Portfolio",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Professional Experience & Career History | Full Stack Developer",
    description:
      "Explore Rehman Farouq's comprehensive professional experience and career journey. Discover work history, companies, roles, and achievements in Flutter…",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/experience",
  },
  other: {
    "og:locale": "en_US",
    "article:author": "Rehman Farouq",
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="site-subnav sticky top-0 z-50 animate-in slide-in-from-top duration-500">
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
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Experience
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="sr-only">Professional Experience – Rehman Farouq</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection delay={200}>
            <Experience />
          </AnimatedSection>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
