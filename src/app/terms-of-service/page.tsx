import { Metadata } from 'next'
import { ArrowLeft, FileText, Shield, AlertCircle, Users, Globe, Mail, Calendar, Scale } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Terms of Service | Rehman Farouq",
  description: "Terms of service for Rehman Farouq's portfolio website. Legal terms and conditions for using our portfolio, contact services, and developer tools.",
  keywords: "terms of service, website terms, usage terms, legal terms, portfolio terms, contact terms, developer tools terms, service agreement, website conditions, user agreement",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Terms of Service | Rehman Farouq Portfolio",
    description: "Terms and conditions for using our portfolio website and services.",
    url: "https://rehmanfarouq.site/terms-of-service",
    type: "website",
    siteName: "Rehman Farouq Portfolio",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Terms of Service | Rehman Farouq Portfolio",
    description: "Terms and conditions for using our portfolio website and services.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/terms-of-service",
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
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
              <span className="text-sm text-gray-500 dark:text-gray-400">Portfolio</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Terms of Service</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              These terms govern your use of our portfolio website and services. By accessing our site, you agree to these terms.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <Calendar size={14} />
              <span>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {/* Agreement to Terms */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                  <Scale className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Agreement to Terms</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  By accessing and using Rehman Farouq's portfolio website (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the Service.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                  <Globe className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Description of Service</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our Service provides the following portfolio and development services:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Portfolio Showcase:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> Display of Flutter and Next.js projects, professional experience, and technical skills.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Developer Tools:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> 49+ free-to-use utility tools including text converters, calculators, validators, generators, and more.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Blog Content:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> Educational articles and tutorials.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Contact Form:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> Secure contact form powered by Formspree for professional inquiries and project collaborations.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Acceptable Use */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                  <Shield className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Acceptable Use</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  You may use our Service for lawful purposes only. You agree not to:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Violate Laws:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> Use the Service in violation of any applicable laws.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Harmful Activities:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> Attempt to harm, disable, or interfere with the Service.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Unauthorized Access:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> Attempt to gain unauthorized access to our systems.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Spam or Abuse:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> Send spam, unsolicited emails, or abusive messages.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Intellectual Property:</strong>
                      <span className="text-gray-600 dark:text-gray-400"> Infringe on intellectual property rights.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-xl flex items-center justify-center">
                  <Shield className="text-yellow-600 dark:text-yellow-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Intellectual Property Rights</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Rehman Farouq and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  You may not use our trademarks, logos, or other proprietary materials without our prior written consent.
                </p>
              </div>
            </section>

            {/* Developer Tools Usage */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
                  <Users className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Developer Tools Usage</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our 49+ developer and utility tools are provided free of charge with the following terms:
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Tool Usage Guidelines:</h4>
                  <ul className="space-y-2 text-indigo-700 dark:text-indigo-300">
                    <li>• All tools process data entirely in your browser (client-side)</li>
                    <li>• No data is stored, tracked, or transmitted to our servers</li>
                    <li>• Tools are provided "as is" without warranties</li>
                    <li>• Not responsible for data loss or calculation errors</li>
                    <li>• Commercial use permitted with attribution</li>
                    <li>• No redistribution or resale of tool functionality</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Disclaimer:</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    While our tools are designed for accuracy, users should verify critical calculations and data. 
                    We are not liable for decisions made based on tool outputs.
                  </p>
                </div>
              </div>
            </section>

            {/* User-Generated Content */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                  <Users className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User-Generated Content</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  When you submit content through our contact form or other interactive features, you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content for the purpose of responding to your inquiries and improving our services.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  You represent and warrant that you own or have the necessary licenses for all content you submit.
                </p>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center">
                  <Shield className="text-cyan-600 dark:text-cyan-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-4">
                  <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                    View our Privacy Policy →
                  </Link>
                </div>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                  <AlertCircle className="text-orange-600 dark:text-orange-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Disclaimers</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, as to the operation of our Service or the information, content, materials, or products included on this Service.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  You expressly agree that your use of our Service is at your sole risk.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center">
                  <AlertCircle className="text-red-600 dark:text-red-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Limitation of Liability</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  In no event shall Rehman Farouq, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-400">Your use or inability to use the Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-400">Any unauthorized access to or use of our servers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-400">Any bugs, viruses, or harmful code that may be transmitted to or through our Service</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Termination */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center">
                  <AlertCircle className="text-pink-600 dark:text-pink-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Termination</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  Upon termination, your right to use the Service will cease immediately.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-xl flex items-center justify-center">
                  <Scale className="text-teal-600 dark:text-teal-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Governing Law</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong>Governing Law:</strong> These Terms shall be interpreted and governed by the laws of Pakistan, where our business is established. Our servers are located in the United States, and these Terms shall be interpreted in accordance with applicable federal and state laws of the United States, without regard to conflict of law provisions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  <strong>Dispute Resolution:</strong> Any disputes arising from these Terms shall be resolved through amicable negotiations. If a resolution cannot be reached, disputes shall be resolved in the appropriate courts of Pakistan, with preference for alternative dispute resolution methods including mediation and arbitration.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  <strong>Service Availability:</strong> We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice. We are not liable for any modifications, suspensions, or discontinuations of the Service.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center">
                  <Calendar className="text-amber-600 dark:text-amber-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Changes to Terms</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our Site prior to the effective date of the changes.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="text-purple-600 dark:text-purple-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <Link href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">
                          Contact through form
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
                        <p className="text-gray-700 dark:text-gray-300">https://rehmanfarouq.site</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FileText className="text-purple-600 dark:text-purple-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Response Time</p>
                        <p className="text-gray-700 dark:text-gray-300">Within 24-48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Scale className="text-purple-600 dark:text-purple-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Legal Inquiries</p>
                        <p className="text-gray-700 dark:text-gray-300">Priority response</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
