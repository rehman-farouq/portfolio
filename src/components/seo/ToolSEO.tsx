import { generateStructuredData, generateToolHeadings, generateToolIntroduction } from '@/utils/seo-generator'

interface ToolSEOProps {
  toolId: string
  toolName: string
  toolDescription: string
  useCases: string[]
}

export default function ToolSEO({ toolId, toolName, toolDescription, useCases }: ToolSEOProps) {
  // Rendered in the server HTML (not injected client-side) so crawlers always see it
  const structuredData = generateStructuredData(toolId, toolName, toolDescription)

  const headings = generateToolHeadings(toolName, toolDescription)
  const introduction = generateToolIntroduction(toolName, toolDescription, useCases)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* SEO-optimized introduction */}
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {introduction}
        </p>
      </div>

      {/* SEO-optimized heading structure */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {headings.h2[0]}
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {headings.h3[0]}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Using our free {toolName.toLowerCase()} online tool is simple and straightforward. 
              Just enter your data and get instant results. No technical knowledge required.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {headings.h2[1]}
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {headings.h3[1]}
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Free to use with no registration</li>
              <li>Instant and accurate results</li>
              <li>Mobile-friendly design</li>
              <li>Secure and private processing</li>
              <li>Professional quality output</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {headings.h2[2]}
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {headings.h3[2]}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our {toolName.toLowerCase()} stands out with its accuracy, speed, and user-friendly interface. 
              Perfect{useCases.slice(0, 2).join(' and ')}, it delivers professional results every time.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {headings.h2[3]}
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {headings.h3[3]}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Is the {toolName.toLowerCase()} really free?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! Our {toolName.toLowerCase()} is completely free to use with no hidden charges or registration required.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Is my data secure?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Absolutely! All processing happens in your browser. Your data never leaves your device.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Can I use this on mobile?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! Our {toolName.toLowerCase()} is fully responsive and works perfectly on all devices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
