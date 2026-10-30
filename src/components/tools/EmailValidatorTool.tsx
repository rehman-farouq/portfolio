'use client'

import { useState } from 'react'
import { Mail, Check, X, AlertCircle, Copy } from 'lucide-react'

const EmailValidatorTool = () => {
  const [email, setEmail] = useState('')
  const [result, setResult] = useState<any>(null)
  const [isValidating, setIsValidating] = useState(false)

  // Common disposable email domains
  const disposableDomains = [
    '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'tempmail.org',
    'yopmail.com', 'throwaway.email', 'temp-mail.org', 'maildrop.cc',
    'tempmailaddress.com', 'fakeemailgenerator.com', 'emailfake.com',
    'tempmail.net', 'maildrop.cc', '20minutemail.com', 'mailinator.net',
    'spambox.us', 'tempmail.org', 'tempmaildemo.com', 'yopmail.net'
  ]

  const validateEmail = () => {
    if (!email.trim()) {
      setResult(null)
      return
    }

    setIsValidating(true)

    setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const isValidFormat = emailRegex.test(email)
      
      const domain = email.split('@')[1]?.toLowerCase() || ''
      const isDisposable = domain && disposableDomains.some(d => domain.includes(d))
      
      // Additional validation checks
      const hasValidLocalPart = email.split('@')[0].length > 0
      const hasValidDomain = domain && domain.includes('.') && domain.split('.')[0].length > 0
      const hasNoSpaces = !email.includes(' ')
      const hasValidTLD = domain && domain.split('.').pop() !== undefined && domain.split('.').pop()!.length >= 2

      const validationResults = {
        isValid: isValidFormat && hasValidLocalPart && hasValidDomain && hasNoSpaces && hasValidTLD,
        isDisposable,
        checks: {
          format: isValidFormat,
          localPart: hasValidLocalPart,
          domain: hasValidDomain,
          noSpaces: hasNoSpaces,
          validTLD: hasValidTLD
        },
        details: {
          localPart: email.split('@')[0],
          domain: domain || 'Invalid',
          tld: domain ? domain.split('.').pop() : 'Invalid'
        }
      }

      setResult(validationResults)
      setIsValidating(false)
    }, 500)
  }

  const copyEmail = async () => {
    if (email) {
      await navigator.clipboard.writeText(email)
    }
  }

  const loadSample = () => {
    setEmail('user@example.com')
  }

  const loadInvalidSample = () => {
    setEmail('invalid-email@')
  }

  const loadDisposableSample = () => {
    setEmail('test@10minutemail.com')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <Mail size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Email Validator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Validate email addresses for format, domain, and disposable email detection
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && validateEmail()}
            className="w-full px-4 py-3 pr-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter email address to validate..."
          />
          {email && (
            <button
              onClick={copyEmail}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              title="Copy email"
            >
              <Copy size={18} />
            </button>
          )}
        </div>

        {/* Sample Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={loadSample}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Valid Example
          </button>
          <button
            onClick={loadInvalidSample}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Invalid Example
          </button>
          <button
            onClick={loadDisposableSample}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Disposable Example
          </button>
        </div>

        <button
          onClick={validateEmail}
          disabled={!email.trim() || isValidating}
          className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg hover:from-teal-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isValidating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Validating...
            </>
          ) : (
            'Validate Email'
          )}
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Overall Status */}
          <div className={`rounded-2xl p-6 ${
            result.isValid 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}>
            <div className="flex items-center gap-3">
              {result.isValid ? (
                <Check className="text-green-600 dark:text-green-400" size={24} />
              ) : (
                <X className="text-red-600 dark:text-red-400" size={24} />
              )}
              <div>
                <h3 className={`text-lg font-semibold ${
                  result.isValid 
                    ? 'text-green-900 dark:text-green-100' 
                    : 'text-red-900 dark:text-red-100'
                }`}>
                  {result.isValid ? 'Valid Email' : 'Invalid Email'}
                </h3>
                <p className={`text-sm ${
                  result.isValid 
                    ? 'text-green-700 dark:text-green-300' 
                    : 'text-red-700 dark:text-red-300'
                }`}>
                  {result.isDisposable && '⚠️ This is a disposable email address'}
                </p>
              </div>
            </div>
          </div>

          {/* Validation Checks */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Validation Checks</h3>
            <div className="space-y-3">
              {Object.entries(result.checks).map(([check, passed]) => (
                <div key={check} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {check.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  {passed ? (
                    <Check className="text-green-500" size={18} />
                  ) : (
                    <X className="text-red-500" size={18} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Email Details */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Email Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Local Part:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {result.details.localPart}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Domain:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {result.details.domain}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Top Level Domain:</span>
                <span className="text-sm font-mono text-gray-900 dark:text-white">
                  {result.details.tld}
                </span>
              </div>
            </div>
          </div>

          {/* Disposable Email Warning */}
          {result.isDisposable && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-yellow-600 dark:text-yellow-400 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    Disposable Email Detected
                  </h3>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    This email address is from a disposable email service. These emails are temporary and often used for spam or fraudulent activities.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tips */}
      <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Email Validation Tips</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Always validate email format before storing in database</li>
          <li>• Check for disposable emails to prevent spam registrations</li>
          <li>• Use domain validation for better email quality</li>
          <li>• Consider sending verification emails for account activation</li>
          <li>• Regular expressions provide basic format validation</li>
        </ul>
      </div>
    </div>
  )
}

export default EmailValidatorTool
