'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, Gift, Cake } from 'lucide-react'

const AgeCalculatorTool = () => {
  const [birthDate, setBirthDate] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [age, setAge] = useState<any>(null)
  const [nextBirthday, setNextBirthday] = useState<any>(null)

  useEffect(() => {
    // Set current date as default
    const today = new Date().toISOString().split('T')[0]
    setCurrentDate(today)
  }, [])

  const calculateAge = () => {
    if (!birthDate || !currentDate) {
      setAge(null)
      setNextBirthday(null)
      return
    }

    const birth = new Date(birthDate)
    const current = new Date(currentDate)

    if (birth > current) {
      setAge(null)
      setNextBirthday(null)
      return
    }

    // Calculate exact age
    let years = current.getFullYear() - birth.getFullYear()
    let months = current.getMonth() - birth.getMonth()
    let days = current.getDate() - birth.getDate()

    if (days < 0) {
      months--
      const lastMonth = new Date(current.getFullYear(), current.getMonth(), 0)
      days += lastMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    // Calculate total days, hours, minutes
    const totalMilliseconds = current.getTime() - birth.getTime()
    const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24))
    const totalHours = Math.floor(totalMilliseconds / (1000 * 60 * 60))
    const totalMinutes = Math.floor(totalMilliseconds / (1000 * 60))

    // Calculate next birthday
    const nextBirth = new Date(current.getFullYear(), birth.getMonth(), birth.getDate())
    if (nextBirth < current) {
      nextBirth.setFullYear(current.getFullYear() + 1)
    }
    
    const daysUntilBirthday = Math.floor((nextBirth.getTime() - current.getTime()) / (1000 * 60 * 60 * 24))

    // Calculate zodiac sign
    const zodiacSign = getZodiacSign(birth.getDate(), birth.getMonth() + 1)

    setAge({
      years,
      months,
      days,
      totalDays,
      totalHours,
      totalMinutes,
      zodiacSign
    })

    setNextBirthday({
      date: nextBirth.toLocaleDateString(),
      daysUntil: daysUntilBirthday
    })
  }

  const getZodiacSign = (day: number, month: number) => {
    const signs = [
      { name: 'Capricorn', start: [12, 22], end: [1, 19] },
      { name: 'Aquarius', start: [1, 20], end: [2, 18] },
      { name: 'Pisces', start: [2, 19], end: [3, 20] },
      { name: 'Aries', start: [3, 21], end: [4, 19] },
      { name: 'Taurus', start: [4, 20], end: [5, 20] },
      { name: 'Gemini', start: [5, 21], end: [6, 20] },
      { name: 'Cancer', start: [6, 21], end: [7, 22] },
      { name: 'Leo', start: [7, 23], end: [8, 22] },
      { name: 'Virgo', start: [8, 23], end: [9, 22] },
      { name: 'Libra', start: [9, 23], end: [10, 22] },
      { name: 'Scorpio', start: [10, 23], end: [11, 21] },
      { name: 'Sagittarius', start: [11, 22], end: [12, 21] }
    ]

    for (const sign of signs) {
      if ((month === sign.start[0] && day >= sign.start[1]) || 
          (month === sign.end[0] && day <= sign.end[1])) {
        return sign.name
      }
    }
    return 'Capricorn'
  }

  const loadSample = () => {
    const sampleDate = new Date(1995, 5, 15) // June 15, 1995
    setBirthDate(sampleDate.toISOString().split('T')[0])
  }

  useEffect(() => {
    calculateAge()
  }, [birthDate, currentDate])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
          <Calendar size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Age Calculator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate your exact age in years, months, days, hours, and minutes
        </p>
      </div>

      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Current Date
          </label>
          <input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Sample Button */}
      <div className="flex justify-center">
        <button
          onClick={loadSample}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Load Example
        </button>
      </div>

      {/* Results */}
      {age && (
        <div className="space-y-6">
          {/* Main Age Display */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {age.years} Years, {age.months} Months, {age.days} Days
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Exact age calculation
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 text-center">
              <Clock className="mx-auto mb-2 text-gray-500" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {age.totalDays.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Days</div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 text-center">
              <Clock className="mx-auto mb-2 text-gray-500" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {age.totalHours.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Hours</div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 text-center">
              <Clock className="mx-auto mb-2 text-gray-500" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {age.totalMinutes.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Minutes</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Next Birthday */}
            {nextBirthday && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Cake className="text-yellow-600 dark:text-yellow-400" size={24} />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Next Birthday</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                    {nextBirthday.date}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {nextBirthday.daysUntil} days to go
                  </div>
                </div>
              </div>
            )}

            {/* Zodiac Sign */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="text-purple-600 dark:text-purple-400" size={24} />
                <h3 className="font-semibold text-gray-900 dark:text-white">Zodiac Sign</h3>
              </div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {age.zodiacSign}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fun Facts */}
      {age && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Fun Facts About Your Age</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              • You've lived for {age.totalDays} days
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              • That's {age.totalHours} hours of your life
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              • Or {age.totalMinutes} minutes in total
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              • Your zodiac sign is {age.zodiacSign}
            </div>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Age Calculator Tips</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Use your exact birth date for accurate results</li>
          <li>• The calculator accounts for leap years</li>
          <li>• You can calculate age for any date in the past</li>
          <li>• Great for planning birthday celebrations</li>
          <li>• Useful for calculating age differences between people</li>
        </ul>
      </div>
    </div>
  )
}

export default AgeCalculatorTool
