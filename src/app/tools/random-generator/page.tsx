import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ToolSEO from '@/components/seo/ToolSEO'
import { generateToolSEO } from '@/utils/seo-generator'
import RandomGeneratorTool from '@/components/tools/RandomGeneratorTool'

export const metadata: Metadata = generateToolSEO('random-generator', 'Random Number Generator')

export default function RandomGeneratorToolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="site-subnav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/tools"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Tools</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Developer Tools</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Random Number Generator</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatedSection delay={200}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl ring-4 ring-white/10">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Free Random Number Generator Online — Professional Tool
              </h1>
              <ToolSEO
                toolId="random-generator"
                toolName="Random Number Generator"
                toolDescription="Professional Random Number Generator for accurate and fast results. Free to use, no registration required."
                useCases={["for testing","for gaming","for simulation","for random data"]}
              />
              <div className="mt-8">
                <RandomGeneratorTool />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
