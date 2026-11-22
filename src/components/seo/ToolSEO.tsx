import { generateStructuredData, generateToolIntroduction, getToolDescription } from '@/utils/seo-generator'
import { TOOL_CONTENT } from '@/utils/tool-content'

interface ToolSEOProps {
  toolId: string
  toolName: string
  toolDescription: string
  useCases: string[]
}

export default function ToolSEO({ toolId, toolName, toolDescription: passedDescription, useCases }: ToolSEOProps) {
  const toolDescription = getToolDescription(toolId, passedDescription)
  // Rendered in server HTML so crawlers see it.
  const structuredData = generateStructuredData(toolId, toolName, toolDescription)
  const introduction = generateToolIntroduction(toolName, toolDescription, useCases)
  const content = TOOL_CONTENT[toolId]

  const h2 = 'text-2xl font-bold text-gray-900 dark:text-white mb-3'
  const p = 'text-gray-600 dark:text-gray-400 leading-relaxed'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="mb-8">
        <p className={p}>{introduction}</p>
      </div>

      {content && (
        <div className="space-y-8">
          <section>
            <h2 className={h2}>How the {toolName} works</h2>
            <p className={p}>{content.about}</p>
          </section>

          <section>
            <h2 className={h2}>Worked example</h2>
            <p className={p}>{content.example}</p>
          </section>

          <section>
            <h2 className={h2}>Practical tips</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              {content.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className={h2}>Frequently asked questions</h2>
            <div className="space-y-4">
              {content.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{f.q}</h3>
                  <p className={p}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {content.note && (
            <p className="text-sm text-gray-500 dark:text-gray-400 border-l-4 border-gray-300 dark:border-gray-600 pl-4">
              {content.note}
            </p>
          )}
        </div>
      )}
    </>
  )
}
