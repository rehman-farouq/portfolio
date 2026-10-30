'use client'

import { useState } from 'react'
import { Copy, Check, Download, Upload, RotateCcw, FileText, Eye, Code2, Bold, Italic, Link as LinkIcon, Image, List, ListOrdered, Quote } from 'lucide-react'

const MarkdownEditorTool = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor

## Features
- **Bold text** and *italic text*
- [Links](https://example.com)
- \`Inline code\` and code blocks
- Lists and quotes

## Code Example
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

> This is a blockquote
> It can span multiple lines

### Unordered List
- Item 1
- Item 2
  - Nested item

### Ordered List
1. First item
2. Second item
3. Third item`)

  const [copied, setCopied] = useState('')
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit')

  const convertMarkdownToHtml = (text: string) => {
    let html = text
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>')
    
    // Bold
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    
    // Italic
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>')
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank">$1</a>')
    
    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code class="inline-code">$1</code>')
    
    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code class="language-$1">$2</code></pre>')
    html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    
    // Unordered lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>')
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>')
    
    // Ordered lists
    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    
    // Line breaks
    html = html.replace(/\n\n/gim, '</p><p>')
    html = html.replace(/\n/gim, '<br>')
    
    // Wrap in paragraphs
    html = '<p>' + html + '</p>'
    
    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/gim, '')
    html = html.replace(/<p>(<h[1-6]>)/gim, '$1')
    html = html.replace(/(<\/h[1-6]>)<\/p>/gim, '$1')
    html = html.replace(/<p>(<blockquote>)/gim, '$1')
    html = html.replace(/(<\/blockquote>)<\/p>/gim, '$1')
    html = html.replace(/<p>(<pre>)/gim, '$1')
    html = html.replace(/(<\/pre>)<\/p>/gim, '$1')
    html = html.replace(/<p>(<li>)/gim, '<ul>$1')
    html = html.replace(/(<\/li>)<\/p>/gim, '$1</ul>')
    
    return html
  }

  const insertMarkdown = (before: string, after: string = '') => {
    const textarea = document.getElementById('markdown-textarea') as HTMLTextAreaElement
    if (!textarea) return
    
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = markdown.substring(start, end)
    const newText = before + selectedText + after
    
    const updatedMarkdown = markdown.substring(0, start) + newText + markdown.substring(end)
    setMarkdown(updatedMarkdown)
    
    // Set cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    }, 0)
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'document.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadHtml = () => {
    const html = convertMarkdownToHtml(markdown)
    const fullHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Markdown Document</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1, h2, h3 { color: #333; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }
        blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 20px; color: #666; }
        ul, ol { padding-left: 20px; }
        a { color: #0066cc; }
    </style>
</head>
<body>
    ${html}
</body>
</html>`
    
    const blob = new Blob([fullHtml], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'document.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const clearAll = () => {
    setMarkdown('')
  }

  const loadSample = () => {
    setMarkdown(`# Sample Markdown Document

## Introduction
This is a **sample** markdown document to demonstrate the editor's capabilities.

## Features
- Live preview
- Syntax highlighting
- Export options
- Toolbar shortcuts

## Code Example
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
\`\`\`

## Links and Images
[Visit GitHub](https://github.com)

## Lists
### Tasks
- [x] Completed task
- [ ] Pending task

### Shopping List
1. Milk
2. Bread
3. Eggs

> "The best way to predict the future is to invent it."
> - Alan Kay

## Conclusion
This markdown editor provides a clean and efficient way to write and preview markdown content.`)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Markdown Editor</h2>
        <p className="text-gray-600 dark:text-gray-400">Write and preview markdown with live rendering</p>
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => insertMarkdown('**', '**')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="Bold"
          >
            <Bold size={16} />
          </button>
          <button
            onClick={() => insertMarkdown('*', '*')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="Italic"
          >
            <Italic size={16} />
          </button>
          <button
            onClick={() => insertMarkdown('[', '](url)')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="Link"
          >
            <LinkIcon size={16} />
          </button>
          <button
            onClick={() => insertMarkdown('`', '`')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="Inline Code"
          >
            <Code2 size={16} />
          </button>
          <button
            onClick={() => insertMarkdown('\n```\n', '\n```\n')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="Code Block"
          >
            <FileText size={16} />
          </button>
          <button
            onClick={() => insertMarkdown('\n- ')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="Unordered List"
          >
            <List size={16} />
          </button>
          <button
            onClick={() => insertMarkdown('\n1. ')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="Ordered List"
          >
            <ListOrdered size={16} />
          </button>
          <button
            onClick={() => insertMarkdown('\n> ')}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="Quote"
          >
            <Quote size={16} />
          </button>
          <div className="border-l border-gray-300 dark:border-gray-600 h-6 mx-2"></div>
          <button
            onClick={loadSample}
            className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 rounded transition-colors"
          >
            Load Sample
          </button>
          <button
            onClick={clearAll}
            className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Editor Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('edit')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'edit'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Code2 size={16} className="inline mr-2" />
            Edit
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'preview'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Eye size={16} className="inline mr-2" />
            Preview
          </button>
        </div>

        <div className="p-4">
          {activeTab === 'edit' ? (
            <textarea
              id="markdown-textarea"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-96 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white font-mono text-sm resize-none"
              placeholder="Write your markdown here..."
            />
          ) : (
            <div 
              className="prose prose-sm max-w-none dark:prose-invert h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(markdown) }}
            />
          )}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Export Options</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => copyToClipboard(markdown, 'markdown')}
            className="px-4 py-3 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {copied === 'markdown' ? <Check size={16} /> : <Copy size={16} />}
            {copied === 'markdown' ? 'Copied!' : 'Copy Markdown'}
          </button>
          <button
            onClick={() => copyToClipboard(convertMarkdownToHtml(markdown), 'html')}
            className="px-4 py-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {copied === 'html' ? <Check size={16} /> : <Copy size={16} />}
            {copied === 'html' ? 'Copied!' : 'Copy HTML'}
          </button>
          <button
            onClick={downloadMarkdown}
            className="px-4 py-3 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download .md
          </button>
          <button
            onClick={downloadHtml}
            className="px-4 py-3 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-800 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download .html
          </button>
        </div>
      </div>
    </div>
  )
}

export default MarkdownEditorTool
