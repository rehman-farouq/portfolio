'use client'

import { useState, useEffect } from 'react'
import { Wifi, Copy, RefreshCw, Shield, Key } from 'lucide-react'

const WiFiPasswordGeneratorTool = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let charset = ''
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    if (!charset) {
      setPassword('')
      return
    }

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  useEffect(() => {
    generatePassword()
  }, [length, includeNumbers, includeSymbols, includeUppercase, includeLowercase])

  const getPasswordStrength = () => {
    if (!password) return { strength: 0, text: 'Very Weak', color: 'text-red-500' }
    
    let strength = 0
    if (password.length >= 8) strength++
    if (password.length >= 12) strength++
    if (includeLowercase && /[a-z]/.test(password)) strength++
    if (includeUppercase && /[A-Z]/.test(password)) strength++
    if (includeNumbers && /\d/.test(password)) strength++
    if (includeSymbols && /[^a-zA-Z0-9]/.test(password)) strength++

    if (strength <= 2) return { strength: 25, text: 'Weak', color: 'text-red-500' }
    if (strength <= 3) return { strength: 50, text: 'Fair', color: 'text-yellow-500' }
    if (strength <= 4) return { strength: 75, text: 'Good', color: 'text-blue-500' }
    return { strength: 100, text: 'Strong', color: 'text-green-500' }
  }

  const strength = getPasswordStrength()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <Wifi size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          WiFi Password Generator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Generate secure passwords for your WiFi network with WPA2/WPA3 compatibility
        </p>
      </div>

      {/* Generated Password */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Generated Password
          </label>
          <div className="flex gap-2">
            <button
              onClick={generatePassword}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              title="Generate new password"
            >
              <RefreshCw size={18} />
            </button>
            <button
              onClick={copyToClipboard}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              title="Copy to clipboard"
            >
              <Copy size={18} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Click generate to create password"
          />
          {copied && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 text-sm">
              Copied!
            </div>
          )}
        </div>

        {/* Password Strength */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Password Strength</span>
            <span className={`text-sm font-medium ${strength.color}`}>{strength.text}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                strength.strength === 25 ? 'bg-red-500' :
                strength.strength === 50 ? 'bg-yellow-500' :
                strength.strength === 75 ? 'bg-blue-500' : 'bg-green-500'
              }`}
              style={{ width: `${strength.strength}%` }}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>8</span>
            <span>32</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Uppercase (A-Z)</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Lowercase (a-z)</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Numbers (0-9)</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Symbols (!@#$%)</span>
          </label>
        </div>
      </div>

      {/* Security Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <Shield className="text-blue-500 mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security Tips</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Use at least 12 characters for better security</li>
              <li>• Include all character types for strongest passwords</li>
              <li>• Change your WiFi password regularly</li>
              <li>• Avoid using personal information in passwords</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WiFiPasswordGeneratorTool
