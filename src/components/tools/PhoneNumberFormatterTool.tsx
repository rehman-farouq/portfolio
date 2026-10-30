'use client'

import { useState, useEffect } from 'react'
import { Phone, Copy, Globe, Check, AlertTriangle, RefreshCw } from 'lucide-react'

interface FormatResult {
  formatted: string
  country: string
  countryCode: string
  isValid: boolean
  type: string
}

interface Country {
  name: string
  code: string
  dialCode: string
  pattern: RegExp
  example: string
}

const countries: Country[] = [
  {
    name: 'United States',
    code: 'US',
    dialCode: '+1',
    pattern: /^\+1 \(\d{3}\) \d{3} \d{4}$/,
    example: '+1 (555) 123-4567'
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    dialCode: '+44',
    pattern: /^\+44 \d{4} \d{6} \d{6}$/,
    example: '+44 20 7946 1234'
  },
  {
    name: 'Canada',
    code: 'CA',
    dialCode: '+1',
    pattern: /^\+1 \(\d{3}\) \d{3} \d{4}$/,
    example: '+1 (416) 555-0123'
  },
  {
    name: 'Australia',
    code: 'AU',
    dialCode: '+61',
    pattern: /^\+61 \d \d{4} \d{4} \d{4}$/,
    example: '+61 2 9876 5432'
  },
  {
    name: 'Germany',
    code: 'DE',
    dialCode: '+49',
    pattern: /^\+49 \d{3} \d{8} \d{8}$/,
    example: '+49 30 12345678'
  },
  {
    name: 'France',
    code: 'FR',
    dialCode: '+33',
    pattern: /^\+33 \d{1} \d{2} \d{2} \d{2} \d{2} \d{2}$/,
    example: '+33 1 23 45 67 89'
  },
  {
    name: 'India',
    code: 'IN',
    dialCode: '+91',
    pattern: /^\+91 \d{4,10} \d{6}$/,
    example: '+91 98765 43210'
  },
  {
    name: 'Japan',
    code: 'JP',
    dialCode: '+81',
    pattern: /^\+81 \d{1,4} \d{4} \d{4}$/,
    example: '+81 90 1234 5678'
  },
  {
    name: 'China',
    code: 'CN',
    dialCode: '+86',
    pattern: /^\+86 \d{2} \d{4} \d{8} \d{4}$/,
    example: '+86 10 1234 5678'
  },
  {
    name: 'Brazil',
    code: 'BR',
    dialCode: '+55',
    pattern: /^\+55 \d{2} \d{4,5} \d{4}$/,
    example: '+55 11 98765 4321'
  },
  {
    name: 'Mexico',
    code: 'MX',
    dialCode: '+52',
    pattern: /^\+52 \d{2} \d{4} \d{6} \d{6}$/,
    example: '+52 55 1234 5678'
  },
  {
    name: 'Spain',
    code: 'ES',
    dialCode: '+34',
    pattern: /^\+34 \d{2,3} \d{3} \d{3} \d{3}$/,
    example: '+34 91 123 45 67'
  },
  {
    name: 'Italy',
    code: 'IT',
    dialCode: '+39',
    pattern: /^\+39 \d{3} \d{3} \d{3} \d{5}$/,
    example: '+39 02 123 45678'
  },
  {
    name: 'Netherlands',
    code: 'NL',
    dialCode: '+31',
    pattern: /^\+31 \d{2} \d{7} \d{6}$/,
    example: '+31 20 123 4567'
  },
  {
    name: 'South Korea',
    code: 'KR',
    dialCode: '+82',
    pattern: /^\+82 \d{2} \d{4} \d{4}$/,
    example: '+82 2 1234 5678'
  },
  {
    name: 'Singapore',
    code: 'SG',
    dialCode: '+65',
    pattern: /^\+65 \d{3} \d{4} \d{4}$/,
    example: '+65 6123 4567'
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    dialCode: '+64',
    pattern: /^\+64 \d{1} \d{3} \d{4} \d{6}$/,
    example: '+64 21 123 4567'
  }
]

const formatTypes = [
  { id: 'international', name: 'International', pattern: /^\+\d{1,3} \s*\(?\d+\)\s*\d+\s*\d+$/ },
  { id: 'national', name: 'National', pattern: /^\d+$/ },
  { id: 'e164', name: 'E.164', pattern: /^\+?[1-9]\d{1,14}$/ },
  { id: 'rfc3966', name: 'RFC3966', pattern: /^\+?[1-9]\d{1,14}$/ },
  { id: 'digits', name: 'Digits Only', pattern: /^\d+$/ },
  { id: 'clean', name: 'Clean (No Formatting)', pattern: /^[\d\s\(\)-]+$/ }
]

export default function PhoneNumberFormatterTool() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [formatType, setFormatType] = useState('international')
  const [results, setResults] = useState<FormatResult[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const formatPhoneNumber = (number: string, country: Country, type: string): FormatResult => {
    const cleanedNumber = number.replace(/[^\d+]/g, '') // Remove non-digits
    let formatted = ''
    let isValid = false
    
    switch (type) {
      case 'international':
        formatted = country.dialCode + ' ' + cleanedNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
        isValid = country.pattern.test(country.dialCode + ' ' + cleanedNumber.replace(/[\s\(\)-]/g, ''))
        break
        
      case 'national':
        formatted = cleanedNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
        isValid = country.pattern.test(country.dialCode + ' ' + formatted)
        break
        
      case 'e164':
        formatted = '+' + cleanedNumber
        isValid = cleanedNumber.length >= 7 && cleanedNumber.length <= 15
        break
        
      case 'rfc3966':
        formatted = '+' + cleanedNumber
        isValid = cleanedNumber.length >= 7 && cleanedNumber.length <= 15
        break
        
      case 'digits':
        formatted = cleanedNumber
        isValid = cleanedNumber.length > 0
        break
        
      case 'clean':
        formatted = cleanedNumber
        isValid = cleanedNumber.length > 0
        break
        
      default:
        formatted = country.dialCode + ' ' + cleanedNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
        isValid = country.pattern.test(country.dialCode + ' ' + formatted)
    }
    
    return {
      formatted,
      country: country.name,
      countryCode: country.code,
      isValid,
      type
    }
  }

  const formatAllCountries = (number: string) => {
    const allResults: FormatResult[] = []
    
    countries.forEach(country => {
      const result = formatPhoneNumber(number, country, formatType)
      allResults.push({
        ...result,
        type: formatType
      })
    })
    
    return allResults
  }

  const handleFormat = () => {
    if (!phoneNumber) {
      setResults([])
      return
    }
    
    if (formatType === 'all') {
      const allResults = formatAllCountries(phoneNumber)
      setResults(allResults)
    } else {
      const result = formatPhoneNumber(phoneNumber, selectedCountry, formatType)
      setResults([result])
    }
  }

  const getValidationColor = (isValid: boolean) => {
    return isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
  }

  const getValidationIcon = (isValid: boolean) => {
    return isValid ? '✅' : '❌'
  }

  const copyToClipboard = (text: string, index?: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index !== undefined ? index : null)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const copyAllResults = () => {
    const allText = results.map(r => `${r.formatted} (${r.country})`).join('\n')
    navigator.clipboard.writeText(allText)
  }

  const resetFormatter = () => {
    setPhoneNumber('')
    setSelectedCountry(countries[0])
    setFormatType('international')
    setResults([])
    setCopiedIndex(null)
  }

  const loadSampleNumber = () => {
    setPhoneNumber('5551234567')
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
          <Phone size={20} />
          Phone Number Formatter
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Country
            </label>
            <select
              value={selectedCountry.code}
              onChange={(e) => {
                const country = countries.find(c => c.code === e.target.value)
                if (country) setSelectedCountry(country)
              }}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            >
              {countries.map(country => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.dialCode})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Format Type
            </label>
            <select
              value={formatType}
              onChange={(e) => setFormatType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            >
              {formatTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleFormat}
              disabled={!phoneNumber}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Format
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={loadSampleNumber}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
          >
            Load Sample
          </button>
          <button
            onClick={resetFormatter}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Formatted Results
            </h3>
            
            <div className="flex gap-2">
              {results.length > 1 && (
                <button
                  onClick={copyAllResults}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm flex items-center gap-1"
                >
                  <Copy size={14} />
                  Copy All
                </button>
              )}
            </div>
          </div>

          <div className="space-y-3">
            {results.map((result, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {result.country}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      ({result.countryCode})
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${getValidationColor(result.isValid)}`}>
                      {getValidationIcon(result.isValid)} {result.type}
                    </span>
                    <button
                      onClick={() => copyToClipboard(result.formatted, index)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="font-mono text-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded">
                  {result.formatted}
                </div>
                
                {copiedIndex === index && (
                  <div className="text-green-600 dark:text-green-400 text-xs flex items-center gap-1">
                    <Check size={12} />
                    Copied!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Country Reference */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
          📱 Country Reference
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {countries.slice(0, 12).map((country) => (
            <div key={country.code} className="bg-white dark:bg-gray-800 p-3 rounded border border-yellow-200 dark:border-yellow-700">
              <div className="font-medium text-yellow-900 dark:text-yellow-100">
                {country.name}
              </div>
              <div className="text-yellow-700 dark:text-yellow-300">
                {country.dialCode} • {country.code}
              </div>
              <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                Example: {country.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Format Types Reference */}
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
          📋 Format Types
        </h3>
        
        <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
          <div className="flex justify-between">
            <span className="font-medium">International:</span>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">National:</span>
            <span>555-123-4567</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">E.164:</span>
            <span>+15551234567</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">RFC3966:</span>
            <span>+15551234567</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Digits Only:</span>
            <span>5551234567</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Clean:</span>
            <span>555 123 4567</span>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
          💡 Phone Number Tips
        </h3>
        <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
          <li>• Always include country code for international dialing</li>
          <li>• Use E.164 format for international compatibility</li>
          <li>• Remove special characters for better compatibility</li>
          <li>• Test formatted numbers before using them in production</li>
          <li>• Consider user location when choosing format</li>
          <li>• Store phone numbers in E.164 format in databases</li>
        </ul>
      </div>
    </div>
  )
}
