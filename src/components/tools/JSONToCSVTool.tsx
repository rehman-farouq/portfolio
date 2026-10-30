'use client'

import { useState } from 'react'
import { FileJson, Download, Copy, RefreshCw, Upload, AlertCircle } from 'lucide-react'

const JSONToCSVTool = () => {
  const [jsonInput, setJsonInput] = useState('')
  const [csvOutput, setCsvOutput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const validateJSON = (jsonString: string) => {
    try {
      JSON.parse(jsonString)
      return null
    } catch (err: any) {
      return err.message
    }
  }

  const jsonToCSV = (jsonData: any) => {
    if (!Array.isArray(jsonData)) {
      throw new Error('JSON must be an array of objects')
    }

    if (jsonData.length === 0) {
      return ''
    }

    // Get headers from first object
    const headers = Object.keys(jsonData[0])
    
    // Create CSV content
    let csv = headers.join(',') + '\n'
    
    jsonData.forEach(obj => {
      const row = headers.map(header => {
        const value = obj[header]
        if (value === null || value === undefined) {
          return ''
        }
        
        // Convert to string and escape commas and quotes
        let stringValue = String(value)
        if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
          stringValue = '"' + stringValue.replace(/"/g, '""') + '"'
        }
        return stringValue
      }).join(',')
      
      csv += row + '\n'
    })

    return csv
  }

  const convertToCSV = () => {
    setError('')
    setCsvOutput('')

    if (!jsonInput.trim()) {
      setError('Please enter JSON data')
      return
    }

    // Validate JSON
    const validationError = validateJSON(jsonInput)
    if (validationError) {
      setError(`Invalid JSON: ${validationError}`)
      return
    }

    try {
      const jsonData = JSON.parse(jsonInput)
      const csv = jsonToCSV(jsonData)
      setCsvOutput(csv)
    } catch (err: any) {
      setError(`Conversion error: ${err.message}`)
    }
  }

  const copyToClipboard = async () => {
    if (csvOutput) {
      await navigator.clipboard.writeText(csvOutput)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const downloadCSV = () => {
    if (csvOutput) {
      const blob = new Blob([csvOutput], { type: 'text/csv' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'data.csv'
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  const clearAll = () => {
    setJsonInput('')
    setCsvOutput('')
    setError('')
  }

  const loadSample = () => {
    const sampleJSON = `[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "city": "New York",
    "salary": 50000
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 25,
    "city": "Los Angeles",
    "salary": 60000
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com",
    "age": 35,
    "city": "Chicago",
    "salary": 55000
  }
]`
    setJsonInput(sampleJSON)
  }

  const formatJSON = () => {
    try {
      const jsonData = JSON.parse(jsonInput)
      setJsonInput(JSON.stringify(jsonData, null, 2))
    } catch (err) {
      setError('Invalid JSON format')
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <FileJson size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          JSON to CSV Converter
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Convert JSON data to CSV format for spreadsheet applications
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              JSON Input
            </label>
            <div className="flex gap-2">
              <button
                onClick={formatJSON}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Format JSON
              </button>
              <button
                onClick={loadSample}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Load Sample
              </button>
            </div>
          </div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full h-64 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono text-sm resize-none"
            placeholder="Enter JSON data (array of objects)..."
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
              <span className="text-red-700 dark:text-red-300 text-sm">{error}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={convertToCSV}
            disabled={!jsonInput.trim()}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Convert to CSV
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Output Section */}
      {csvOutput && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              CSV Output
            </label>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <Copy size={16} />
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={downloadCSV}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <Download size={16} />
                Download CSV
              </button>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 dark:text-gray-300 max-h-64 overflow-auto">
              {csvOutput}
            </pre>
          </div>
        </div>
      )}

      {/* Statistics */}
      {csvOutput && (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Conversion Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {csvOutput.split('\n').length - 1}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Rows</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {csvOutput.split('\n')[0]?.split(',').length || 0}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Columns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {csvOutput.length.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Characters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {(csvOutput.length / 1024).toFixed(1)}KB
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">File Size</div>
            </div>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">JSON to CSV Tips</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• JSON must be an array of objects for proper CSV conversion</li>
          <li>• All objects should have the same keys for consistent columns</li>
          <li>• Special characters in values are automatically escaped</li>
          <li>• Null and undefined values become empty cells</li>
          <li>• Downloaded CSV files work with Excel, Google Sheets, and LibreOffice</li>
        </ul>
      </div>
    </div>
  )
}

export default JSONToCSVTool
