'use client'

import { useState } from 'react'
import { Heart, Activity, TrendingUp, AlertCircle } from 'lucide-react'

const BMICalculatorTool = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100
    const weightInKg = parseFloat(weight)

    if (!heightInMeters || !weightInKg || heightInMeters <= 0 || weightInKg <= 0) {
      setBmi('')
      setCategory('')
      return
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters)
    setBmi(bmiValue.toFixed(1))

    // Determine category
    if (bmiValue < 18.5) {
      setCategory('underweight')
    } else if (bmiValue < 25) {
      setCategory('normal')
    } else if (bmiValue < 30) {
      setCategory('overweight')
    } else {
      setCategory('obese')
    }
  }

  const getCategoryInfo = (cat: string) => {
    const categories = {
      underweight: {
        name: 'Underweight',
        color: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        icon: <AlertCircle size={20} />,
        description: 'BMI below 18.5',
        advice: 'Consider consulting a healthcare provider for healthy weight gain strategies.'
      },
      normal: {
        name: 'Normal Weight',
        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        icon: <Heart size={20} />,
        description: 'BMI between 18.5 and 24.9',
        advice: 'Great job! Maintain your healthy lifestyle with balanced diet and regular exercise.'
      },
      overweight: {
        name: 'Overweight',
        color: 'text-yellow-600 dark:text-yellow-400',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        icon: <Activity size={20} />,
        description: 'BMI between 25 and 29.9',
        advice: 'Consider increasing physical activity and making dietary changes for better health.'
      },
      obese: {
        name: 'Obese',
        color: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        icon: <AlertCircle size={20} />,
        description: 'BMI of 30 or higher',
        advice: 'Consult with a healthcare provider for a comprehensive weight management plan.'
      }
    }
    return (categories as any)[cat] || categories.normal
  }

  const getIdealWeight = () => {
    const heightInMeters = parseFloat(height) / 100
    if (!heightInMeters || heightInMeters <= 0) return null
    
    // Using healthy BMI range (18.5 to 24.9)
    const minWeight = 18.5 * heightInMeters * heightInMeters
    const maxWeight = 24.9 * heightInMeters * heightInMeters
    
    return {
      min: minWeight.toFixed(1),
      max: maxWeight.toFixed(1)
    }
  }

  const loadSample = () => {
    setHeight('175')
    setWeight('70')
  }

  const clearAll = () => {
    setHeight('')
    setWeight('')
    setBmi('')
    setCategory('')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <Heart size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          BMI Calculator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate your Body Mass Index and check your health status
        </p>
      </div>

      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in centimeters"
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kilograms"
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={calculateBMI}
          disabled={!height || !weight}
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calculate BMI
        </button>
        <button
          onClick={loadSample}
          className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Load Example
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Results */}
      {bmi && category && (
        <div className="space-y-6">
          {/* BMI Result */}
          <div className={`rounded-2xl p-6 ${getIdealWeight() ? '' : ''}`}>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <span className={getCategoryInfo(category).color}>{bmi}</span>
              </div>
              <div className={`flex items-center justify-center gap-2 ${getCategoryInfo(category).color}`}>
                {getCategoryInfo(category).icon}
                <span className="text-xl font-semibold">{getCategoryInfo(category).name}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {getCategoryInfo(category).description}
              </div>
            </div>
          </div>

          {/* BMI Chart */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">BMI Categories</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Underweight</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">&lt; 18.5</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-green-600 dark:text-green-400 font-medium">Normal Weight</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">18.5 - 24.9</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <span className="text-yellow-600 dark:text-yellow-400 font-medium">Overweight</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">25 - 29.9</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-red-600 dark:text-red-400 font-medium">Obese</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">≥ 30</span>
              </div>
            </div>
          </div>

          {/* Health Advice */}
          <div className={`${getCategoryInfo(category).bgColor} rounded-2xl p-6`}>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Health Advice</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {getCategoryInfo(category).advice}
            </p>
          </div>

          {/* Ideal Weight Range */}
          {getIdealWeight() && (
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Ideal Weight Range</h3>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {getIdealWeight()?.min || 'N/A'} - {getIdealWeight()?.max || 'N/A'} kg
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  For your height of {height} cm
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Important Note */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-yellow-600 dark:text-yellow-400 mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Note</h3>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              BMI is a screening tool and is not diagnostic of body fatness or health. 
              Consult with a healthcare provider for a comprehensive health assessment.
            </p>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">BMI Calculator Tips</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Use accurate measurements for best results</li>
          <li>• BMI doesn't distinguish between muscle and fat mass</li>
          <li>• Athletes may have high BMI due to muscle mass</li>
          <li>• Consider other health metrics alongside BMI</li>
          <li>• Regular health check-ups are recommended</li>
        </ul>
      </div>
    </div>
  )
}

export default BMICalculatorTool
