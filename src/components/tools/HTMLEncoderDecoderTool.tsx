'use client'

import { useState, useEffect } from 'react'
import { Globe, Copy, RefreshCw, Eye, EyeOff } from 'lucide-react'

const HTMLEncoderDecoderTool = () => {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [mode, setMode] = useState('encode')
  const [copied, setCopied] = useState(false)

  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    ' ': '&nbsp;',
    '©': '&copy;',
    '®': '&reg;',
    '™': '&trade;',
    '€': '&euro;',
    '£': '&pound;',
    '¥': '&yen;',
    '¢': '&cent;',
    '§': '&sect;',
    '¶': '&para;',
    '•': '&bull;',
    '…': '&hellip;',
    '—': '&mdash;',
    '–': '&ndash;',
    '«': '&laquo;',
    '»': '&raquo;',
    '‹': '&lsaquo;',
    '›': '&rsaquo;',
    '°': '&deg;',
    '±': '&plusmn;',
    '×': '&times;',
    '÷': '&divide;',
    '½': '&frac12;',
    '¼': '&frac14;',
    '¾': '&frac34;',
    '¹': '&sup1;',
    '²': '&sup2;',
    '³': '&sup3;',
    '∞': '&infin;',
    '∑': '&sum;',
    '∏': '&prod;',
    '∫': '&int;',
    '≈': '&asymp;',
    '≠': '&ne;',
    '≤': '&le;',
    '≥': '&ge;',
    '∂': '&part;',
    '∇': '&nabla;',
    '∆': '&Delta;',
    'π': '&pi;',
    'Ω': '&Omega;',
    'α': '&alpha;',
    'β': '&beta;',
    'γ': '&gamma;',
    'δ': '&delta;',
    'ε': '&epsilon;',
    'θ': '&theta;',
    'λ': '&lambda;',
    'μ': '&mu;',
    'σ': '&sigma;',
    'φ': '&phi;',
    'ω': '&omega;'
  }

  const decodeHTML = (text: string) => {
    let decoded = text
    Object.entries(htmlEntities).forEach(([entity, code]) => {
      decoded = decoded.replace(new RegExp(code.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), entity)
    })
    return decoded
  }

  const encodeHTML = (text: string) => {
    let encoded = text
    Object.entries(htmlEntities).forEach(([entity, code]) => {
      encoded = encoded.replace(new RegExp(entity.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), code)
    })
    return encoded
  }

  const processText = () => {
    if (!inputText) {
      setOutputText('')
      return
    }

    if (mode === 'encode') {
      setOutputText(encodeHTML(inputText))
    } else {
      setOutputText(decodeHTML(inputText))
    }
  }

  const copyToClipboard = async () => {
    if (outputText) {
      await navigator.clipboard.writeText(outputText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const clearAll = () => {
    setInputText('')
    setOutputText('')
  }

  const loadSample = () => {
    if (mode === 'encode') {
      setInputText('Hello <World> & "Welcome" to HTML Encoder!')
    } else {
      setInputText('Hello &lt;World&gt; &amp; &quot;Welcome&quot; to HTML Encoder!')
    }
  }

  useEffect(() => {
    processText()
  }, [inputText, mode])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <Globe size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          HTML Encoder/Decoder
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Encode and decode HTML entities for safe web display
        </p>
      </div>

      {/* Mode Selection */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setMode('encode')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            mode === 'encode'
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            mode === 'decode'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          Decode
        </button>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {mode === 'encode' ? 'Input Text' : 'HTML Input'}
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-32 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter HTML to decode...'}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={loadSample}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Load Example
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Output Section */}
      {outputText && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {mode === 'encode' ? 'Encoded HTML' : 'Decoded Text'}
            </label>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <Copy size={16} />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 dark:text-gray-300">
              {outputText}
            </pre>
          </div>
        </div>
      )}

      {/* HTML Entities Reference */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Common HTML Entities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {Object.entries(htmlEntities).slice(0, 12).map(([char, entity]) => (
            <div key={char} className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{char}</span>
              <span className="font-mono text-gray-800 dark:text-gray-200">{entity}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
            View all entities →
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">HTML Encoding Tips</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Always encode user input before displaying in HTML</li>
          <li>• Use encoding to prevent XSS attacks</li>
          <li>• Encode special characters in URLs and forms</li>
          <li>• Different encoding levels for different contexts</li>
          <li>• Test encoded content in different browsers</li>
        </ul>
      </div>
    </div>
  )
}

export default HTMLEncoderDecoderTool
