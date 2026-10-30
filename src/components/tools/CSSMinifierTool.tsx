'use client'

import { useState } from 'react'
import { Zap, Copy, Download, RefreshCw, Minimize2 } from 'lucide-react'

const CSSMinifierTool = () => {
  const [inputCSS, setInputCSS] = useState('')
  const [minifiedCSS, setMinifiedCSS] = useState('')
  const [copied, setCopied] = useState(false)
  const [originalSize, setOriginalSize] = useState(0)
  const [minifiedSize, setMinifiedSize] = useState(0)

  const minifyCSS = () => {
    if (!inputCSS.trim()) {
      setMinifiedCSS('')
      setOriginalSize(0)
      setMinifiedSize(0)
      return
    }

    // Basic CSS minification
    let minified = inputCSS
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove whitespace
      .replace(/\s+/g, ' ')
      // Remove whitespace around braces, colons, semicolons
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*;\s*/g, ';')
      .replace(/\s*:\s*/g, ':')
      // Remove whitespace around commas
      .replace(/\s*,\s*/g, ',')
      // Remove unnecessary semicolons
      .replace(/;}/g, '}')
      // Remove leading/trailing whitespace
      .trim()

    setMinifiedCSS(minified)
    setOriginalSize(new Blob([inputCSS]).size)
    setMinifiedSize(new Blob([minified]).size)
  }

  const copyToClipboard = async () => {
    if (minifiedCSS) {
      await navigator.clipboard.writeText(minifiedCSS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const downloadCSS = () => {
    if (minifiedCSS) {
      const blob = new Blob([minifiedCSS], { type: 'text/css' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'styles.min.css'
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  const clearAll = () => {
    setInputCSS('')
    setMinifiedCSS('')
    setOriginalSize(0)
    setMinifiedSize(0)
  }

  const loadSample = () => {
    const sampleCSS = `/* Sample CSS Code */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    padding: 2rem;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #28a745;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}`
    
    setInputCSS(sampleCSS)
  }

  const compressionRatio = originalSize > 0 ? Math.round((1 - minifiedSize / originalSize) * 100) : 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <Zap size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          CSS Minifier
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Minify and compress CSS code for faster loading and better performance
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={loadSample}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Load Sample CSS
        </button>
        <button
          onClick={minifyCSS}
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2"
        >
          <Minimize2 size={18} />
          Minify CSS
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Editor Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input CSS */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Input CSS
            </label>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {originalSize > 0 && `${originalSize} bytes`}
            </span>
          </div>
          <textarea
            value={inputCSS}
            onChange={(e) => setInputCSS(e.target.value)}
            className="w-full h-96 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Paste your CSS code here..."
          />
        </div>

        {/* Minified CSS */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Minified CSS
            </label>
            <div className="flex items-center gap-2">
              {minifiedSize > 0 && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {minifiedSize} bytes
                </span>
              )}
              <button
                onClick={copyToClipboard}
                disabled={!minifiedCSS}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Copy to clipboard"
              >
                <Copy size={18} />
              </button>
              <button
                onClick={downloadCSS}
                disabled={!minifiedCSS}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Download CSS file"
              >
                <Download size={18} />
              </button>
            </div>
          </div>
          <textarea
            value={minifiedCSS}
            readOnly
            className="w-full h-96 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Minified CSS will appear here..."
          />
          {copied && (
            <div className="mt-2 text-sm text-green-600 dark:text-green-400">
              Copied to clipboard!
            </div>
          )}
        </div>
      </div>

      {/* Statistics */}
      {minifiedCSS && (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Compression Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {originalSize.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Original Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {minifiedSize.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Minified Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {compressionRatio}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Compression Ratio</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${compressionRatio}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">CSS Minification Tips</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Minified CSS loads faster and improves website performance</li>
          <li>• Remove unused CSS rules for better optimization</li>
          <li>• Use CSS minification in production environments</li>
          <li>• Keep original CSS for development and debugging</li>
          <li>• Consider using CSS preprocessors like Sass or Less</li>
        </ul>
      </div>
    </div>
  )
}

export default CSSMinifierTool
