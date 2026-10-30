'use client'

import { useState, useEffect } from 'react'
import { Droplets, Calculator, Copy, Activity } from 'lucide-react'

export default function WaterIntakeTool() {
  const [weight, setWeight] = useState('')
  const [activity, setActivity] = useState('moderate')
  const [climate, setClimate] = useState('normal')
  const [results, setResults] = useState({
    dailyIntake: 0,
    hourlyIntake: 0,
    bottles: 0
  })

  useEffect(() => {
    const weightKg = parseFloat(weight) || 0
    const baseIntake = weightKg * 35 // Base: 35ml per kg

    // Activity adjustments
    const activityMultipliers = {
      sedentary: 0.9,
      light: 1.0,
      moderate: 1.1,
      active: 1.2,
      veryActive: 1.3
    }

    // Climate adjustments
    const climateMultipliers = {
      cold: 0.9,
      normal: 1.0,
      warm: 1.1,
      hot: 1.2
    }

    const finalIntake = baseIntake * activityMultipliers[activity as keyof typeof activityMultipliers] * climateMultipliers[climate as keyof typeof climateMultipliers]

    setResults({
      dailyIntake: finalIntake,
      hourlyIntake: finalIntake / 16,
      bottles: finalIntake / 500 // 500ml bottles
    })
  }, [weight, activity, climate])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const resetCalculator = () => {
    setWeight('')
    setActivity('moderate')
    setClimate('normal')
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
          <Droplets size={20} />
          Water Intake Calculator
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Body Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Activity Level
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light (1-3 days/week)</option>
              <option value="moderate">Moderate (3-5 days/week)</option>
              <option value="active">Active (6-7 days/week)</option>
              <option value="veryActive">Very Active (twice per day)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Climate/Environment
            </label>
            <select
              value={climate}
              onChange={(e) => setClimate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            >
              <option value="cold">Cold weather</option>
              <option value="normal">Normal/temperate</option>
              <option value="warm">Warm weather</option>
              <option value="hot">Hot weather</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {parseFloat(weight) > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <Droplets size={20} className="text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Daily Intake</span>
            </div>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">
              {Math.round(results.dailyIntake)}ml
            </div>
            <button
              onClick={() => copyToClipboard(Math.round(results.dailyIntake).toString() + 'ml')}
              className="mt-2 text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1"
            >
              <Copy size={14} />
              Copy
            </button>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={20} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Per Hour</span>
            </div>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              {Math.round(results.hourlyIntake)}ml
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">
              Over 16 waking hours
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <Calculator size={20} className="text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Bottles</span>
            </div>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
              {Math.ceil(results.bottles)}
            </div>
            <div className="text-sm text-purple-700 dark:text-purple-300 mt-1">
              500ml bottles
            </div>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
          💡 Hydration Tips
        </h3>
        <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
          <li>• Drink water before, during, and after exercise</li>
          <li>• Keep a water bottle with you throughout the day</li>
          <li>• Set reminders to drink water regularly</li>
          <li>• Drink water even when you don't feel thirsty</li>
          <li>• Monitor urine color as a hydration indicator</li>
          <li>• Increase intake during hot weather or illness</li>
        </ul>
      </div>

      <button
        onClick={resetCalculator}
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
      >
        Reset Calculator
      </button>
    </div>
  )
}
