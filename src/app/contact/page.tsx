import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Contact Rehman Farouq | Hire a Flutter & Next.js Developer",
  description:
    "Contact Rehman Farouq for professional Flutter, React, Next.js, and full stack development projects.",
  keywords:
    "contact developer, hire full stack developer, Flutter developer for hire, React developer contact, Next.js development services, freelance web developer, mobile app developer contact, software engineer hire, development collaboration, programming services, technical consulting, web development contact, app development services, professional developer contact, hire remote developer",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title:
      "Contact Rehman Farouq | Hire a Flutter & Next.js Developer",
    description:
      "Contact Rehman Farouq for professional Flutter, React, Next.js, and full stack development projects.",
    url: "https://rehmanfarouq.site/contact",
    type: "website",
    siteName: "Rehman Farouq Portfolio",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title:
      "Contact Rehman Farouq | Hire Full Stack Developer | Flutter, React, Next.js",
    description:
      "Contact Rehman Farouq for professional Flutter, React, Next.js, and full stack development projects. Hire for freelance work, collaborations, and consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/contact",
  },
  other: {
    "og:locale": "en_US",
    "article:author": "Rehman Farouq",
  },
};

export default function ContactPage() {
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
              <span className="text-sm font-medium text-red-600 dark:text-red-400">
                Contact
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="sr-only">Contact Rehman Farouq – Hire a Flutter &amp; Next.js Developer</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection delay={200}>
            <Contact />
          </AnimatedSection>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
