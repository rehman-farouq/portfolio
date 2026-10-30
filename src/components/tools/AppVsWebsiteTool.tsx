'use client'

import { useState, useEffect } from 'react'
import { Smartphone, Globe, Calculator, Copy, TrendingUp, Clock } from 'lucide-react'

interface ProjectDetails {
  appFeatures: string[]
  websiteFeatures: string[]
  timeline: { app: number; website: number }
  budget: { app: number; website: number }
  maintenance: { app: number; website: number }
  users: number
}

interface ComparisonResult {
  appCost: number
  websiteCost: number
  appTimeline: number
  websiteTimeline: number
  appMaintenance: number
  websiteMaintenance: number
  totalAppCost: number
  totalWebsiteCost: number
  recommendation: 'app' | 'website' | 'both'
  reasoning: string[]
}

const appFeatures = [
  'Push notifications',
  'Offline access',
  'Device integration',
  'App store distribution',
  'Native performance',
  'Camera/GPS access',
  'Gesture controls',
  'Background processing'
]

const websiteFeatures = [
  'Cross-platform access',
  'SEO optimization',
  'Easy updates',
  'No installation',
  'Link sharing',
  'Browser compatibility',
  'Lower development cost',
  'Faster initial deployment'
]

export default function AppVsWebsiteTool() {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    appFeatures: [],
    websiteFeatures: [],
    timeline: { app: 6, website: 3 },
    budget: { app: 50000, website: 15000 },
    maintenance: { app: 10000, website: 3000 },
    users: 1000
  })
  const [results, setResults] = useState<ComparisonResult | null>(null)

  const calculateComparison = () => {
    const { appFeatures, websiteFeatures, timeline, budget, maintenance, users } = projectDetails
    
    // Calculate development costs based on features and complexity
    const appDevCost = budget.app + (appFeatures.length * 5000)
    const websiteDevCost = budget.website + (websiteFeatures.length * 2000)
    
    // Calculate maintenance costs (annual)
    const appMaintenanceCost = maintenance.app + (appFeatures.length * 1000)
    const websiteMaintenanceCost = maintenance.website + (websiteFeatures.length * 500)
    
    // Total costs over 3 years
    const totalAppCost = appDevCost + (appMaintenanceCost * 3)
    const totalWebsiteCost = websiteDevCost + (websiteMaintenanceCost * 3)
    
    // Determine recommendation
    let recommendation: 'app' | 'website' | 'both' = 'website'
    const reasoning: string[] = []
    
    // Decision logic
    if (users < 100) {
      recommendation = 'website'
      reasoning.push('Small user base favors website', 'Lower development and maintenance costs')
    } else if (users > 10000) {
      recommendation = 'app'
      reasoning.push('Large user base justifies app development', 'Better user experience for scale')
    } else if (appFeatures.length > 5 && websiteFeatures.length > 5) {
      recommendation = 'both'
      reasoning.push('Complex project benefits from both platforms', 'Maximum reach and engagement')
    } else if (appFeatures.some(f => ['Push notifications', 'Offline access', 'Device integration'].includes(f))) {
      recommendation = 'app'
      reasoning.push('Critical features require app capabilities', 'Enhanced user experience')
    } else if (websiteFeatures.some(f => ['SEO optimization', 'Cross-platform access'].includes(f))) {
      recommendation = 'website'
      reasoning.push('Key features are web-native', 'Better discoverability and accessibility')
    } else {
      // Cost comparison
      if (totalAppCost < totalWebsiteCost * 1.5) {
        recommendation = 'app'
        reasoning.push('Comparable costs with enhanced functionality')
      } else {
        recommendation = 'website'
        reasoning.push('Lower total cost and faster deployment')
      }
    }
    
    // Timeline consideration
    if (timeline.app > timeline.website * 2) {
      recommendation = 'website'
      reasoning.push('Website deployment is significantly faster')
    }
    
    setResults({
      appCost: appDevCost,
      websiteCost: websiteDevCost,
      appTimeline: timeline.app,
      websiteTimeline: timeline.website,
      appMaintenance: appMaintenanceCost,
      websiteMaintenance: websiteMaintenanceCost,
      totalAppCost,
      totalWebsiteCost,
      recommendation,
      reasoning
    })
  }

  useEffect(() => {
    calculateComparison()
  }, [projectDetails])

  const toggleFeature = (type: 'app' | 'website', feature: string) => {
    setProjectDetails(prev => {
      if (type === 'app') {
        const updated = prev.appFeatures.includes(feature)
          ? { ...prev, appFeatures: prev.appFeatures.filter(f => f !== feature) }
          : { ...prev, appFeatures: [...prev.appFeatures, feature] }
        return updated
      } else {
        const updated = prev.websiteFeatures.includes(feature)
          ? { ...prev, websiteFeatures: prev.websiteFeatures.filter(f => f !== feature) }
          : { ...prev, websiteFeatures: [...prev.websiteFeatures, feature] }
        return updated
      }
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const resetCalculator = () => {
    setProjectDetails({
      appFeatures: [],
      websiteFeatures: [],
      timeline: { app: 6, website: 3 },
      budget: { app: 50000, website: 15000 },
      maintenance: { app: 10000, website: 3000 },
      users: 1000
    })
  }

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'app': return 'text-blue-600 dark:text-blue-400'
      case 'website': return 'text-green-600 dark:text-green-400'
      case 'both': return 'text-purple-600 dark:text-purple-400'
      default: return 'text-gray-600 dark:text-gray-400'
    }
  }

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'app': return '📱'
      case 'website': return '🌐'
      case 'both': return '🔄'
      default: return '❓'
    }
  }

  return (
    <div className="space-y-6">
      {/* Project Details */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
          <Calculator size={20} />
          App vs Website Calculator
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* App Features */}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Smartphone size={16} />
              App Features
            </h4>
            <div className="space-y-2">
              {appFeatures.map((feature, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={projectDetails.appFeatures.includes(feature)}
                    onChange={() => toggleFeature('app', feature)}
                    className="rounded text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Website Features */}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Globe size={16} />
              Website Features
            </h4>
            <div className="space-y-2">
              {websiteFeatures.map((feature, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={projectDetails.websiteFeatures.includes(feature)}
                    onChange={() => toggleFeature('website', feature)}
                    className="rounded text-green-500 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline and Budget */}
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          Project Parameters
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              App Timeline (months)
            </label>
            <input
              type="number"
              value={projectDetails.timeline.app}
              onChange={(e) => setProjectDetails(prev => ({
                ...prev,
                timeline: { ...prev.timeline, app: parseInt(e.target.value) || 0 }
              }))}
              min="1"
              max="24"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website Timeline (months)
            </label>
            <input
              type="number"
              value={projectDetails.timeline.website}
              onChange={(e) => setProjectDetails(prev => ({
                ...prev,
                timeline: { ...prev.timeline, website: parseInt(e.target.value) || 0 }
              }))}
              min="1"
              max="12"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              App Budget ($)
            </label>
            <input
              type="number"
              value={projectDetails.budget.app}
              onChange={(e) => setProjectDetails(prev => ({
                ...prev,
                budget: { ...prev.budget, app: parseInt(e.target.value) || 0 }
              }))}
              min="0"
              step="1000"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website Budget ($)
            </label>
            <input
              type="number"
              value={projectDetails.budget.website}
              onChange={(e) => setProjectDetails(prev => ({
                ...prev,
                budget: { ...prev.budget, website: parseInt(e.target.value) || 0 }
              }))}
              min="0"
              step="1000"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              App Maintenance (annual $)
            </label>
            <input
              type="number"
              value={projectDetails.maintenance.app}
              onChange={(e) => setProjectDetails(prev => ({
                ...prev,
                maintenance: { ...prev.maintenance, app: parseInt(e.target.value) || 0 }
              }))}
              min="0"
              step="500"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website Maintenance (annual $)
            </label>
            <input
              type="number"
              value={projectDetails.maintenance.website}
              onChange={(e) => setProjectDetails(prev => ({
                ...prev,
                maintenance: { ...prev.maintenance, website: parseInt(e.target.value) || 0 }
              }))}
              min="0"
              step="500"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Expected Users
            </label>
            <input
              type="number"
              value={projectDetails.users}
              onChange={(e) => setProjectDetails(prev => ({
                ...prev,
                users: parseInt(e.target.value) || 0
              }))}
              min="1"
              step="100"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Recommendation */}
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
              Recommendation
            </h3>
            
            <div className="text-center mb-4">
              <div className={`text-3xl font-bold ${getRecommendationColor(results.recommendation)}`}>
                {getRecommendationIcon(results.recommendation)} {results.recommendation.toUpperCase()}
              </div>
            </div>
            
            <div className="space-y-2">
              {results.reasoning.map((reason, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-purple-800 dark:text-purple-200">
                  <span className="mt-1">•</span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* App Analysis */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                <Smartphone size={16} />
                App Analysis
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Development Cost:</span>
                  <span className="font-medium text-blue-900 dark:text-blue-100">
                    ${results.appCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Timeline:</span>
                  <span className="font-medium text-blue-900 dark:text-blue-100">
                    {results.appTimeline} months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Annual Maintenance:</span>
                  <span className="font-medium text-blue-900 dark:text-blue-100">
                    ${results.appMaintenance.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">3-Year Total:</span>
                  <span className="font-bold text-blue-900 dark:text-blue-100">
                    ${results.totalAppCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Website Analysis */}
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                <Globe size={16} />
                Website Analysis
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Development Cost:</span>
                  <span className="font-medium text-green-900 dark:text-green-100">
                    ${results.websiteCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Timeline:</span>
                  <span className="font-medium text-green-900 dark:text-green-100">
                    {results.websiteTimeline} months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Annual Maintenance:</span>
                  <span className="font-medium text-green-900 dark:text-green-100">
                    ${results.websiteMaintenance.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">3-Year Total:</span>
                  <span className="font-bold text-green-900 dark:text-green-100">
                    ${results.totalWebsiteCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Summary Comparison
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Cost Difference</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  ${Math.abs(results.totalAppCost - results.totalWebsiteCost).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {results.totalAppCost > results.totalWebsiteCost ? 'App costs more' : 'Website costs more'}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Timeline Difference</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {Math.abs(results.appTimeline - results.websiteTimeline)} months
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {results.appTimeline > results.websiteTimeline ? 'App takes longer' : 'Website is faster'}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">User Target</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {projectDetails.users.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Expected user base
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={resetCalculator}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Reset Calculator
        </button>
      </div>
    </div>
  )
}
