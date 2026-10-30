'use client'

import { useState, useEffect } from 'react'
import { Percent, Calculator, TrendingUp, TrendingDown } from 'lucide-react'

const PercentageCalculatorTool = () => {
  const [activeTab, setActiveTab] = useState('basic')
  
  // Basic percentage calculator
  const [percentage, setPercentage] = useState('')
  const [ofValue, setOfValue] = useState('')
  const [basicResult, setBasicResult] = useState('')

  // Percentage change calculator
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')
  const [changeResult, setChangeResult] = useState<any>('')

  // Percentage increase/decrease
  const [originalValue, setOriginalValue] = useState('')
  const [percentChange, setPercentChange] = useState('')
  const [newResult, setNewResult] = useState('')

  // Calculate basic percentage
  const calculateBasic = () => {
    const p = parseFloat(percentage)
    const val = parseFloat(ofValue)
    
    if (!isNaN(p) && !isNaN(val)) {
      const result = (p / 100) * val
      setBasicResult(result.toFixed(2))
    } else {
      setBasicResult('')
    }
  }

  // Calculate percentage change
  const calculateChange = () => {
    const from = parseFloat(fromValue)
    const to = parseFloat(toValue)
    
    if (!isNaN(from) && !isNaN(to) && from !== 0) {
      const change = ((to - from) / from) * 100
      const isIncrease = change > 0
      setChangeResult({
        percentage: Math.abs(change).toFixed(2),
        isIncrease,
        actualChange: (to - from).toFixed(2)
      })
    } else {
      setChangeResult('')
    }
  }

  // Calculate new value after percentage change
  const calculateNewValue = () => {
    const original = parseFloat(originalValue)
    const percent = parseFloat(percentChange)
    
    if (!isNaN(original) && !isNaN(percent)) {
      const change = (percent / 100) * original
      const result = original + change
      setNewResult(result.toFixed(2))
    } else {
      setNewResult('')
    }
  }

  // Auto-calculate on input change
  useEffect(() => {
    calculateBasic()
  }, [percentage, ofValue])

  useEffect(() => {
    calculateChange()
  }, [fromValue, toValue])

  useEffect(() => {
    calculateNewValue()
  }, [originalValue, percentChange])

  const loadSample = (type: string) => {
    switch (type) {
      case 'basic':
        setPercentage('25')
        setOfValue('200')
        break
      case 'increase':
        setFromValue('100')
        setToValue('125')
        break
      case 'decrease':
        setFromValue('200')
        setToValue('150')
        break
      case 'newvalue':
        setOriginalValue('1000')
        setPercentChange('15')
        break
    }
  }

  const clearAll = () => {
    setPercentage('')
    setOfValue('')
    setBasicResult('')
    setFromValue('')
    setToValue('')
    setChangeResult('')
    setOriginalValue('')
    setPercentChange('')
    setNewResult('')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <Percent size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Percentage Calculator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate percentages, percentage changes, and value adjustments
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setActiveTab('basic')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'basic'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          Basic Percentage
        </button>
        <button
          onClick={() => setActiveTab('change')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'change'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          Percentage Change
        </button>
        <button
          onClick={() => setActiveTab('adjust')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'adjust'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          Increase/Decrease
        </button>
      </div>

      {/* Basic Percentage Calculator */}
      {activeTab === 'basic' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Percentage (%)
              </label>
              <input
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder="Enter percentage"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Of Value
              </label>
              <input
                type="number"
                value={ofValue}
                onChange={(e) => setOfValue(e.target.value)}
                placeholder="Enter value"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {basicResult && (
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {percentage}% of {ofValue} = {basicResult}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Result
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={() => loadSample('basic')}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Load Example (25% of 200)
            </button>
          </div>
        </div>
      )}

      {/* Percentage Change Calculator */}
      {activeTab === 'change' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From Value
              </label>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                placeholder="Enter original value"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To Value
              </label>
              <input
                type="number"
                value={toValue}
                onChange={(e) => setToValue(e.target.value)}
                placeholder="Enter new value"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {changeResult && (
            <div className={`rounded-xl p-6 ${
              changeResult.isIncrease ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
            }`}>
              <div className="flex items-center justify-center gap-3">
                {changeResult.isIncrease ? (
                  <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
                ) : (
                  <TrendingDown className="text-red-600 dark:text-red-400" size={24} />
                )}
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    changeResult.isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {changeResult.isIncrease ? '+' : '-'}{changeResult.percentage}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Change of {changeResult.actualChange}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center gap-4">
            <button
              onClick={() => loadSample('increase')}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Example Increase
            </button>
            <button
              onClick={() => loadSample('decrease')}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Example Decrease
            </button>
          </div>
        </div>
      )}

      {/* Increase/Decrease Calculator */}
      {activeTab === 'adjust' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Original Value
              </label>
              <input
                type="number"
                value={originalValue}
                onChange={(e) => setOriginalValue(e.target.value)}
                placeholder="Enter original value"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Percentage Change (%)
              </label>
              <input
                type="number"
                value={percentChange}
                onChange={(e) => setPercentChange(e.target.value)}
                placeholder="Enter percentage (use - for decrease)"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {newResult && (
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {originalValue} {parseFloat(percentChange) >= 0 ? '+' : ''}{percentChange}% = {newResult}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  New Value
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={() => loadSample('newvalue')}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Load Example (1000 + 15%)
            </button>
          </div>
        </div>
      )}

      {/* Common Actions */}
      <div className="flex justify-center">
        <button
          onClick={clearAll}
          className="px-6 py-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Tips */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Percentage Calculator Tips</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Use positive numbers for increases, negative for decreases</li>
          <li>• Basic percentage: What is X% of Y?</li>
          <li>• Percentage change: From X to Y is what % change?</li>
          <li>• Value adjustment: X increased/decreased by Y% equals what?</li>
          <li>• Common uses: discounts, tips, taxes, growth rates</li>
        </ul>
      </div>
    </div>
  )
}

export default PercentageCalculatorTool
