import { Metadata } from 'next'
import { ArrowLeft, Shield, Calendar } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Privacy Policy | Rehman Farouq",
  description: "Privacy policy for Rehman Farouq portfolio website. Learn how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, user privacy, personal information, cookie policy, GDPR compliance, data security, portfolio privacy, website privacy policy, user rights, data collection",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Privacy Policy | Rehman Farouq Portfolio",
    description: "Privacy policy for Rehman Farouq portfolio website. Learn how we protect your personal information.",
    url: "https://rehmanfarouq.site/privacy-policy",
    type: "website",
    siteName: "Rehman Farouq Portfolio",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Privacy Policy | Rehman Farouq Portfolio",
    description: "Privacy policy for Rehman Farouq portfolio website. Learn how we protect your personal information.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/privacy-policy",
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600">
            <ArrowLeft size={18} />
            Back
          </Link>
          <span className="text-indigo-600 font-medium">Privacy Policy</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8">

          {/* Title */}
          <div className="text-center mb-10">
            <Shield className="mx-auto mb-3 text-indigo-600" size={34} />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>

            <p className="text-gray-500 mt-2">
              We respect your privacy and keep your data safe.
            </p>

            <div className="text-sm text-gray-400 mt-2 flex justify-center gap-2 items-center">
              <Calendar size={14} />
              Updated: {new Date().toLocaleDateString()}
            </div>
          </div>

          <div className="space-y-8 text-gray-600 dark:text-gray-300">

            {/* Information */}
            <section>
              <h2 className="font-semibold text-lg">Information We Collect</h2>
              <p className="mt-2">
                We only collect basic information when you contact us, such as your name, email, and message.
                We also use anonymous analytics to understand website traffic.
              </p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Developer Tools Data Privacy</h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Our 49+ developer and utility tools process all data entirely in your browser. 
                  No data is sent to our servers, stored, or tracked. This includes passwords, 
                  text conversions, calculations, and all tool inputs/outputs.
                </p>
              </div>
            </section>

            {/* Use */}
            <section>
              <h2 className="font-semibold text-lg">How We Use Information</h2>
              <p className="mt-2">
                We use your information only to respond to inquiries, improve website performance, and maintain security.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-semibold text-lg">Cookies</h2>
              <p className="mt-2">
                We may use basic cookies for website functionality and analytics.
                We do not use advertising or tracking cookies.
              </p>
            </section>

            {/* Data Safety */}
            <section>
              <h2 className="font-semibold text-lg">Data Protection</h2>
              <p className="mt-2">
                Your data is stored securely and is never sold or shared with third parties.
              </p>
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Tools Data Security</h3>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• All tool processing happens client-side (in your browser)</li>
                  <li>• No server-side data storage or processing</li>
                  <li>• No tracking of tool usage or inputs</li>
                  <li>• Passwords and sensitive data never leave your device</li>
                  <li>• Complete privacy for all 49+ tools</li>
                </ul>
              </div>
            </section>

            {/* Third Party */}
            <section>
              <h2 className="font-semibold text-lg">Third-Party Services</h2>
              <p className="mt-2">
                We may use trusted services like Vercel for hosting and analytics.
                These services may process basic technical data.
              </p>
            </section>

            {/* Rights */}
            <section>
              <h2 className="font-semibold text-lg">Your Rights</h2>
              <p className="mt-2">
                You can request access, correction, or deletion of your data by contacting us.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-semibold text-lg">Contact</h2>
              <p className="mt-2">
                If you have any questions about this Privacy Policy, please contact us through the contact page.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}