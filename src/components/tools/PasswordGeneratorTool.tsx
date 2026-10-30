'use client'

import { useState, useEffect } from 'react'
import { Key, Copy, Check, RefreshCw, Shield } from 'lucide-react'

const PasswordGeneratorTool = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [copied, setCopied] = useState(false)
  const [strength, setStrength] = useState({ score: 0, text: '', color: '' })

  const generatePassword = () => {
    let charset = ''
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    if (charset === '') {
      setPassword('Please select at least one option')
      return
    }

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
    calculateStrength(newPassword)
  }

  const calculateStrength = (pwd: string) => {
    let score = 0
    const feedback = []
    
    if (pwd.length >= 12) score += 25
    if (pwd.length >= 16) score += 25
    if (/[a-z]/.test(pwd)) score += 12.5
    if (/[A-Z]/.test(pwd)) score += 12.5
    if (/[0-9]/.test(pwd)) score += 12.5
    if (/[^a-zA-Z0-9]/.test(pwd)) score += 12.5

    let strengthText = ''
    let strengthColor = ''
    
    if (score <= 25) {
      strengthText = 'Weak'
      strengthColor = 'text-red-500'
    } else if (score <= 50) {
      strengthText = 'Fair'
      strengthColor = 'text-orange-500'
    } else if (score <= 75) {
      strengthText = 'Good'
      strengthColor = 'text-yellow-500'
    } else {
      strengthText = 'Strong'
      strengthColor = 'text-green-500'
    }

    setStrength({ score, text: strengthText, color: strengthColor })
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy password: ', err)
    }
  }

  useEffect(() => {
    generatePassword()
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2 flex items-center justify-center gap-3">
          <Key className="text-purple-500" />
          Password Generator
        </h3>
        <p className="text-gray-600 dark:text-gray-400">Generate secure passwords with customizable options</p>
      </div>

      {/* Generated Password Display */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Generated Password
        </label>
        <div className="relative">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-3 pr-24 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-lg"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        
        {/* Password Strength Indicator */}
        {password && (
          <div className="flex items-center gap-3">
            <Shield size={20} className="text-gray-400" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-400">Password Strength:</span>
                <span className={`text-sm font-medium ${strength.color}`}>{strength.text}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    strength.score <= 25 ? 'bg-red-500' :
                    strength.score <= 50 ? 'bg-orange-500' :
                    strength.score <= 75 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${strength.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Password Length */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password Length: <span className="text-blue-600 dark:text-blue-400 font-bold">{length}</span>
        </label>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>8</span>
          <span>16</span>
          <span>24</span>
          <span>32</span>
        </div>
      </div>

      {/* Character Options */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Include Characters
        </label>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="text-gray-700 dark:text-gray-300">Uppercase Letters (A-Z)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="text-gray-700 dark:text-gray-300">Lowercase Letters (a-z)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="text-gray-700 dark:text-gray-300">Numbers (0-9)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="text-gray-700 dark:text-gray-300">Symbols (!@#$%^&*...)</span>
          </label>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/25"
      >
        <RefreshCw size={20} />
        Generate New Password
      </button>
    </div>
  )
}

export default PasswordGeneratorTool
