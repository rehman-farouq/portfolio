'use client'

import { useState } from 'react'
import { FileText, Copy, RefreshCw, Download, Type } from 'lucide-react'

const LoremIpsumTool = () => {
  const [type, setType] = useState('paragraphs')
  const [count, setCount] = useState(5)
  const [startWithLorem, setStartWithLorem] = useState(true)
  const [generatedText, setGeneratedText] = useState('')
  const [copied, setCopied] = useState(false)

  const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
    'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
    'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
    'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
    'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
  ]

  const generateLoremText = () => {
    let text = ''
    let wordIndex = 0
    
    if (startWithLorem && type === 'paragraphs') {
      text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      wordIndex = 19
    }

    if (type === 'words') {
      for (let i = 0; i < count; i++) {
        if (i > 0) text += ' '
        text += loremWords[wordIndex % loremWords.length]
        wordIndex++
      }
    } else if (type === 'sentences') {
      for (let i = 0; i < count; i++) {
        if (i > 0) text += ' '
        const sentenceLength = Math.floor(Math.random() * 10) + 8
        for (let j = 0; j < sentenceLength; j++) {
          if (j > 0) text += ' '
          text += loremWords[wordIndex % loremWords.length]
          wordIndex++
        }
        text += '.'
      }
    } else if (type === 'paragraphs') {
      for (let i = 0; i < count; i++) {
        if (i > 0) text += '\n\n'
        const sentenceCount = Math.floor(Math.random() * 4) + 3
        for (let j = 0; j < sentenceCount; j++) {
          if (j > 0) text += ' '
          const sentenceLength = Math.floor(Math.random() * 12) + 8
          for (let k = 0; k < sentenceLength; k++) {
            if (k > 0) text += ' '
            text += loremWords[wordIndex % loremWords.length]
            wordIndex++
          }
          text += '.'
        }
      }
    }

    setGeneratedText(text.trim())
  }

  const copyToClipboard = async () => {
    if (generatedText) {
      await navigator.clipboard.writeText(generatedText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const downloadText = () => {
    if (generatedText) {
      const blob = new Blob([generatedText], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'lorem-ipsum.txt'
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  const getStats = () => {
    if (!generatedText) return { words: 0, sentences: 0, paragraphs: 0, characters: 0 }
    
    const words = generatedText.split(/\s+/).filter(word => word.length > 0).length
    const sentences = generatedText.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length
    const paragraphs = generatedText.split(/\n\n+/).filter(para => para.trim().length > 0).length
    const characters = generatedText.length
    
    return { words, sentences, paragraphs, characters }
  }

  const stats = getStats()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <FileText size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Lorem Ipsum Generator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Generate dummy text for design and development projects
        </p>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="words">Words</option>
            <option value="sentences">Sentences</option>
            <option value="paragraphs">Paragraphs</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Count
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="flex items-center">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={startWithLorem}
              onChange={(e) => setStartWithLorem(e.target.checked)}
              className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
              disabled={type !== 'paragraphs'}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Start with "Lorem ipsum"
            </span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={generateLoremText}
          className="px-6 py-3 bg-gradient-to-r from-gray-500 to-slate-500 text-white rounded-lg hover:from-gray-600 hover:to-slate-600 transition-all flex items-center gap-2"
        >
          <RefreshCw size={18} />
          Generate Text
        </button>
        <button
          onClick={copyToClipboard}
          disabled={!generatedText}
          className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Copy size={18} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button
          onClick={downloadText}
          disabled={!generatedText}
          className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Download size={18} />
          Download
        </button>
      </div>

      {/* Generated Text */}
      {generatedText && (
        <div className="space-y-6">
          {/* Statistics */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Text Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.words}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Words</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.sentences}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sentences</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.paragraphs}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Paragraphs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.characters}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Characters</div>
              </div>
            </div>
          </div>

          {/* Text Output */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Generated Text</h3>
              <button
                onClick={copyToClipboard}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                title="Copy to clipboard"
              >
                <Copy size={18} />
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-serif text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
              {generatedText}
            </div>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Lorem Ipsum Tips</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Use Lorem ipsum to test typography and layout designs</li>
          <li>• Perfect for placeholder text in wireframes and mockups</li>
          <li>• Generate different amounts based on your needs</li>
          <li>• Copy and paste directly into your design tools</li>
          <li>• Download as text file for later use</li>
        </ul>
      </div>
    </div>
  )
}

export default LoremIpsumTool
