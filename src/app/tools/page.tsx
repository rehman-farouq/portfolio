'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Type, Key as KeyIcon, QrCode, Image as ImageIcon, Code2, ArrowLeft, ExternalLink, Palette, Clock, Link2, Binary, Ruler, Calculator as CalculatorIcon, FileText, Hash, Wifi, Download, Zap, Globe, FileJson, Calculator, CreditCard, Mail, Calendar, Thermometer, Weight, Timer, MapPin, Battery, Droplets, Wind, Sun, Moon, Cloud, Umbrella, Heart, Brain, Target, TrendingUp, DollarSign, ShoppingBag, Home, Car, Phone, MessageSquare, Flame, Percent, Users, Baby, Coffee, Gauge, Music, Video, Camera, Map, BarChart, PieChart, LineChart, AlertTriangle, CheckCircle, XCircle, Info, Settings, Database, Server, CloudRain, Snowflake, BatteryCharging, Volume2, Mic, Headphones, Monitor, Smartphone, Tablet, Watch, Tv, Radio, Newspaper, BookOpen, GraduationCap, Award, Trophy, Medal, Star, Flag, Compass, Navigation, Route, Fuel, Wrench, Hammer, PaintBucket, Scissors, Pencil, Pen, Eraser, Highlighter, StickyNote, Paperclip, FolderOpen, Archive, Trash2, Lock, Unlock, Shield, Eye, EyeOff, Fingerprint, User, UserPlus, UserMinus, Crown, ZapOff, Power, PowerOff, Plug, Cpu, HardDrive, MemoryStick, WifiOff, Bluetooth, BluetoothOff, Signal, Router, Usb, Volume, Volume1, VolumeX, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, MoreVertical, MoreHorizontal, Menu, X, Plus, Minus, Divide, Equal, AtSign, Slash, Asterisk, Ampersand } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'


const tools = [
  {
    id: 'text-converter',
    name: 'Text Converter',
    description: 'Convert text between different cases, remove spaces, reverse text, and more text manipulation tools.',
    icon: <Type size={32} />,
    color: 'from-blue-500 to-cyan-500',
    route: '/tools/text-converter',
    features: ['Uppercase & Lowercase', 'Remove Spaces', 'Reverse Text', 'Copy to Clipboard']
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure passwords with customizable options including length, character types, and strength indicators.',
    icon: <KeyIcon size={32} />,
    color: 'from-purple-500 to-pink-500',
    route: '/tools/password-generator',
    features: ['Custom Length', 'Character Types', 'Strength Meter', 'Secure Generation']
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Create QR codes for URLs, text, and other data. Download high-quality QR codes instantly.',
    icon: <QrCode size={32} />,
    color: 'from-green-500 to-teal-500',
    route: '/tools/qr-generator',
    features: ['URL & Text Support', 'High Quality', 'Instant Download', 'Custom Size']
  },
  {
    id: 'image-resize',
    name: 'Image Resizer',
    description: 'Resize images to custom dimensions while maintaining aspect ratio. Support for multiple image formats.',
    icon: <ImageIcon size={32} />,
    color: 'from-orange-500 to-red-500',
    route: '/tools/image-resize',
    features: ['Custom Dimensions', 'Aspect Ratio Lock', 'Multiple Formats', 'Instant Preview']
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate, and beautify JSON code with error highlighting and minification options.',
    icon: <Code2 size={32} />,
    color: 'from-indigo-500 to-blue-500',
    route: '/tools/json-formatter',
    features: ['Format & Minify', 'Real-time Validation', 'Error Detection', 'Download JSON']
  },
  {
    id: 'color-converter',
    name: 'Color Converter',
    description: 'Convert between HEX, RGB, and HSL color formats. Generate random colors and copy color codes.',
    icon: <Palette size={32} />,
    color: 'from-pink-500 to-purple-500',
    route: '/tools/color-converter',
    features: ['HEX/RGB/HSL', 'Random Colors', 'Live Preview', 'Copy Formats']
  },
  {
    id: 'time-converter',
    name: 'Time Converter',
    description: 'Convert timestamps between Unix and human-readable formats. Support multiple timezones.',
    icon: <Clock size={32} />,
    color: 'from-blue-500 to-indigo-500',
    route: '/tools/time-converter',
    features: ['Unix Timestamp', 'Multiple Formats', 'Timezone Support', 'Current Time']
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'Create short, memorable URLs from long links. Generate unique codes and manage URLs.',
    icon: <Link2 size={32} />,
    color: 'from-purple-500 to-pink-500',
    route: '/tools/url-shortener',
    features: ['Instant Shortening', 'Unique Codes', 'URL Management', 'Copy Links']
  },
  {
    id: 'base64-converter',
    name: 'Base64 Converter',
    description: 'Encode and decode text to/from Base64. Support file upload and bidirectional conversion.',
    icon: <Binary size={32} />,
    color: 'from-green-500 to-blue-500',
    route: '/tools/base64-converter',
    features: ['Encode & Decode', 'File Upload', 'Bidirectional', 'Download Results']
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units of measurement including length, weight, temperature, and data storage.',
    icon: <Ruler size={32} />,
    color: 'from-orange-500 to-yellow-500',
    route: '/tools/unit-converter',
    features: ['Length & Weight', 'Temperature', 'Data Storage', 'Multiple Units']
  },
  {
    id: 'markdown-editor',
    name: 'Markdown Editor',
    description: 'Write and preview markdown with live rendering. Export to HTML and download as files.',
    icon: <FileText size={32} />,
    color: 'from-teal-500 to-green-500',
    route: '/tools/markdown-editor',
    features: ['Live Preview', 'Toolbar Shortcuts', 'HTML Export', 'File Download']
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate cryptographic hashes for text and files. Support for multiple hash algorithms.',
    icon: <Hash size={32} />,
    color: 'from-red-500 to-orange-500',
    route: '/tools/hash-generator',
    features: ['MD5 & SHA', 'File Support', 'Secure Hashing', 'Multiple Algorithms']
  },
  {
    id: 'wifi-password-generator',
    name: 'WiFi Password Generator',
    description: 'Generate secure WiFi passwords with WPA2/WPA3 support. Create memorable passwords for routers.',
    icon: <Wifi size={32} />,
    color: 'from-blue-500 to-cyan-500',
    route: '/tools/wifi-password-generator',
    features: ['WPA2/WPA3 Support', 'Router Compatibility', 'Secure Generation', 'Copy Friendly']
  },
  {
    id: 'css-minifier',
    name: 'CSS Minifier',
    description: 'Minify and compress CSS code for faster loading. Remove whitespace and optimize styles.',
    icon: <Zap size={32} />,
    color: 'from-purple-500 to-pink-500',
    route: '/tools/css-minifier',
    features: ['Code Minification', 'Whitespace Removal', 'Size Reduction', 'Copy Output']
  },
  {
    id: 'html-encoder-decoder',
    name: 'HTML Encoder/Decoder',
    description: 'Encode and decode HTML entities. Convert special characters for safe web display.',
    icon: <Globe size={32} />,
    color: 'from-green-500 to-teal-500',
    route: '/tools/html-encoder-decoder',
    features: ['Entity Encoding', 'Special Characters', 'Safe Display', 'Bidirectional']
  },
  {
    id: 'json-to-csv',
    name: 'JSON to CSV Converter',
    description: 'Convert JSON data to CSV format for spreadsheet applications. Download converted files.',
    icon: <FileJson size={32} />,
    color: 'from-orange-500 to-red-500',
    route: '/tools/json-to-csv',
    features: ['JSON to CSV', 'Download Files', 'Data Validation', 'Format Support']
  },
  {
    id: 'loan-calculator',
    name: 'Loan Calculator',
    description: 'Calculate loan payments, interest, and amortization schedule. Support different loan types.',
    icon: <Calculator size={32} />,
    color: 'from-indigo-500 to-blue-500',
    route: '/tools/loan-calculator',
    features: ['Payment Calculation', 'Interest Rates', 'Amortization', 'Multiple Types']
  },
  {
    id: 'credit-card-validator',
    name: 'Credit Card Validator',
    description: 'Validate credit card numbers using Luhn algorithm. Check card type and validity.',
    icon: <CreditCard size={32} />,
    color: 'from-pink-500 to-purple-500',
    route: '/tools/credit-card-validator',
    features: ['Luhn Validation', 'Card Type Detection', 'Security Check', 'Instant Results']
  },
  {
    id: 'email-validator',
    name: 'Email Validator',
    description: 'Validate email addresses for format and domain. Check disposable email detection.',
    icon: <Mail size={32} />,
    color: 'from-teal-500 to-green-500',
    route: '/tools/email-validator',
    features: ['Format Validation', 'Domain Check', 'Disposable Detection', 'Syntax Check']
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, days, hours, and minutes from birth date.',
    icon: <Calendar size={32} />,
    color: 'from-blue-500 to-indigo-500',
    route: '/tools/age-calculator',
    features: ['Exact Age', 'Birth Date', 'Current Time', 'Multiple Formats']
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index and check your health status based on height and weight.',
    icon: <Heart size={32} />,
    color: 'from-red-500 to-pink-500',
    route: '/tools/bmi-calculator',
    features: ['BMI Calculation', 'Health Status', 'Weight Categories', 'Health Tips']
  },
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate restaurant tips and split bills among friends with tax included.',
    icon: <DollarSign size={32} />,
    color: 'from-green-500 to-teal-500',
    route: '/tools/tip-calculator',
    features: ['Tip Amount', 'Bill Split', 'Tax Include', 'Percentage Options']
  },
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    description: 'Calculate discount prices and savings. Perfect for shopping and sales.',
    icon: <ShoppingBag size={32} />,
    color: 'from-purple-500 to-pink-500',
    route: '/tools/discount-calculator',
    features: ['Discount Amount', 'Final Price', 'Savings', 'Multiple Items']
  },
  {
    id: 'fuel-cost-calculator',
    name: 'Fuel Cost Calculator',
    description: 'Calculate fuel costs for trips based on distance, mileage, and gas prices.',
    icon: <Car size={32} />,
    color: 'from-orange-500 to-red-500',
    route: '/tools/fuel-cost-calculator',
    features: ['Trip Cost', 'Fuel Efficiency', 'Distance', 'Gas Prices']
  },
  {
    id: 'recipe-scaler',
    name: 'Recipe Scaler',
    description: 'Scale recipe ingredients up or down based on serving size adjustments.',
    icon: <Home size={32} />,
    color: 'from-yellow-500 to-orange-500',
    route: '/tools/recipe-scaler',
    features: ['Ingredient Scaling', 'Serving Adjust', 'Fraction Support', 'Measurement Units']
  },
  {
    id: 'sleep-calculator',
    name: 'Sleep Calculator',
    description: 'Calculate optimal bedtime and wake-up times based on sleep cycles.',
    icon: <Moon size={32} />,
    color: 'from-indigo-500 to-purple-500',
    route: '/tools/sleep-calculator',
    features: ['Sleep Cycles', 'Bedtime Suggestions', 'Wake-up Times', 'Quality Tips']
  },
  {
    id: 'water-intake',
    name: 'Water Intake Calculator',
    description: 'Calculate daily water intake needs based on weight, activity, and climate.',
    icon: <Droplets size={32} />,
    color: 'from-cyan-500 to-blue-500',
    route: '/tools/water-intake',
    features: ['Hydration Needs', 'Activity Factor', 'Climate Adjust', 'Daily Goals']
  },
  {
    id: 'calorie-calculator',
    name: 'Calorie Calculator',
    description: 'Calculate daily calorie needs based on age, gender, weight, and activity level.',
    icon: <Target size={32} />,
    color: 'from-green-500 to-emerald-500',
    route: '/tools/calorie-calculator',
    features: ['Daily Calories', 'BMR Calculation', 'Activity Level', 'Weight Goals']
  },
  {
    id: 'phone-number-formatter',
    name: 'Phone Number Formatter',
    description: 'Format phone numbers in different international standards and validate them.',
    icon: <Phone size={32} />,
    color: 'from-teal-500 to-cyan-500',
    route: '/tools/phone-number-formatter',
    features: ['International Format', 'Country Codes', 'Validation', 'Multiple Standards']
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in text. Perfect for writers.',
    icon: <MessageSquare size={32} />,
    color: 'from-gray-500 to-slate-500',
    route: '/tools/word-counter',
    features: ['Word Count', 'Character Count', 'Reading Time', 'Text Analysis']
  },
  {
    id: 'calorie-burner',
    name: 'Calorie Burn Calculator',
    description: 'Calculate calories burned during different exercises and daily activities.',
    icon: <Flame size={32} />,
    color: 'from-orange-500 to-red-500',
    route: '/tools/calorie-burner',
    features: ['Exercise Calories', 'Activity Tracking', 'Duration Based', 'Multiple Activities']
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, percentage changes, and percentage increases/decreases.',
    icon: <Percent size={32} />,
    color: 'from-blue-500 to-cyan-500',
    route: '/tools/percentage-calculator',
    features: ['Percentage Calc', 'Percentage Change', 'Increase/Decrease', 'Tip Calculator']
  },
  {
    id: 'pregnancy-calculator',
    name: 'Pregnancy Calculator',
    description: 'Calculate due date, pregnancy weeks, and important milestones during pregnancy.',
    icon: <Baby size={32} />,
    color: 'from-pink-500 to-purple-500',
    route: '/tools/pregnancy-calculator',
    features: ['Due Date', 'Pregnancy Weeks', 'Milestones', 'Trimester Info']
  },
  {
    id: 'caffeine-calculator',
    name: 'Caffeine Calculator',
    description: 'Track daily caffeine intake and calculate safe consumption limits.',
    icon: <Coffee size={32} />,
    color: 'from-amber-500 to-orange-500',
    route: '/tools/caffeine-calculator',
    features: ['Caffeine Tracking', 'Daily Limits', 'Beverage Types', 'Health Guidelines']
  },
  {
    id: 'grade-calculator',
    name: 'Grade Calculator',
    description: 'Calculate final grades, GPA, and required scores for academic goals.',
    icon: <Gauge size={32} />,
    color: 'from-green-500 to-teal-500',
    route: '/tools/grade-calculator',
    features: ['GPA Calculator', 'Final Grade', 'Required Score', 'Grade Planning']
  },
  {
    id: 'random-generator',
    name: 'Random Number Generator',
    description: 'Generate random numbers within custom ranges. Perfect for games and statistics.',
    icon: <Shuffle size={32} />,
    color: 'from-purple-500 to-pink-500',
    route: '/tools/random-generator',
    features: ['Custom Range', 'Multiple Numbers', 'Integer/Decimal', 'Copy Results']
  },
  {
    id: 'timezone-converter',
    name: 'Timezone Converter',
    description: 'Convert time between different timezones worldwide. Schedule meetings easily.',
    icon: <Globe size={32} />,
    color: 'from-blue-500 to-green-500',
    route: '/tools/timezone-converter',
    features: ['World Timezones', 'Time Conversion', 'Meeting Planner', 'Daylight Saving']
  },
  {
    id: 'roman-numeral',
    name: 'Roman Numeral Converter',
    description: 'Convert between Roman numerals and Arabic numbers. Historical number system.',
    icon: <Hash size={32} />,
    color: 'from-orange-500 to-red-500',
    route: '/tools/roman-numeral',
    features: ['Roman to Number', 'Number to Roman', 'Date Conversion', 'Validation']
  },
  {
    id: 'ascii-art',
    name: 'ASCII Art Generator',
    description: 'Create ASCII art from text and images. Retro text art generator.',
    icon: <Type size={32} />,
    color: 'from-gray-500 to-slate-500',
    route: '/tools/ascii-art',
    features: ['Text to ASCII', 'Image to ASCII', 'Font Styles', 'Copy Art']
  },
  {
    id: 'password-strength',
    name: 'Password Strength Checker',
    description: 'Check password strength and get security recommendations. Improve your passwords.',
    icon: <Shield size={32} />,
    color: 'from-red-500 to-orange-500',
    route: '/tools/password-strength',
    features: ['Strength Analysis', 'Security Tips', 'Breach Check', 'Improvement Suggestions']
  },
  {
    id: 'text-statistics',
    name: 'Text Statistics Analyzer',
    description: 'Analyze text for readability, complexity, and linguistic patterns.',
    icon: <BarChart size={32} />,
    color: 'from-indigo-500 to-blue-500',
    route: '/tools/text-statistics',
    features: ['Readability Score', 'Word Frequency', 'Sentence Analysis', 'Text Complexity']
  },
    {
    id: 'unit-converter-pro',
    name: 'Advanced Unit Converter',
    description: 'Convert between 500+ units across 20+ categories. Professional unit conversion.',
    icon: <Ruler size={32} />,
    color: 'from-teal-500 to-cyan-500',
    route: '/tools/unit-converter-pro',
    features: ['500+ Units', '20 Categories', 'Precision Control', 'History Tracking']
  },
  {
    id: 'file-converter',
    name: 'File Format Converter',
    description: 'Convert files between different formats. Images, documents, and media files.',
    icon: <FileText size={32} />,
    color: 'from-green-500 to-emerald-500',
    route: '/tools/file-converter',
    features: ['Image Convert', 'Document Convert', 'Media Convert', 'Batch Processing']
  },
  {
    id: 'project-cost-estimator',
    name: 'Project Cost Estimator',
    description: 'Estimate project costs with detailed breakdown. Calculate development time and resources.',
    icon: <DollarSign size={32} />,
    color: 'from-green-500 to-emerald-500',
    route: '/tools/project-cost-estimator',
    features: ['Cost Breakdown', 'Time Estimation', 'Resource Planning', 'Budget Analysis']
  },
  {
    id: 'color-palette-pro',
    name: 'Color Palette Generator Pro',
    description: 'Generate professional color palettes for design projects. Export in multiple formats.',
    icon: <Palette size={32} />,
    color: 'from-pink-500 to-purple-500',
    route: '/tools/color-palette-pro',
    features: ['Palette Generation', 'Color Export', 'Design Tools', 'Color Theory']
  },
  {
    id: 'app-vs-website',
    name: 'App vs Website Calculator',
    description: 'Decide between app and website for your project. Compare features, costs, and benefits.',
    icon: <Smartphone size={32} />,
    color: 'from-blue-500 to-cyan-500',
    route: '/tools/app-vs-website',
    features: ['Feature Comparison', 'Cost Analysis', 'User Experience', 'Platform Choice']
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate dummy text for design and development. Multiple languages and styles.',
    icon: <FileText size={32} />,
    color: 'from-gray-500 to-slate-500',
    route: '/tools/lorem-ipsum',
    features: ['Multiple Languages', 'Text Styles', 'Character Count', 'Copy Options']
  },
  {
    id: 'website-speed-checker',
    name: 'Website Speed Checker',
    description: 'Analyze website performance and loading speed. Get optimization recommendations.',
    icon: <Zap size={32} />,
    color: 'from-yellow-500 to-orange-500',
    route: '/tools/website-speed-checker',
    features: ['Performance Analysis', 'Speed Score', 'Optimization Tips', 'Mobile Testing']
  },
  {
    id: 'roi-calculator',
    name: 'ROI Calculator',
    description: 'Calculate Return on Investment for projects and marketing campaigns.',
    icon: <TrendingUp size={32} />,
    color: 'from-green-500 to-teal-500',
    route: '/tools/roi-calculator',
    features: ['ROI Analysis', 'Investment Tracking', 'Profit Calculation', 'Time Period']
  }
]

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="site-subnav sticky top-0 z-50 animate-in slide-in-from-top duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Developer Tools</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatedSection delay={200}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6">
              Developer & Daily Life Tools
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              A comprehensive collection of 53+ tools for developers, students, health enthusiasts, and daily life. Built with modern web technologies for speed and efficiency.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search tools by name, description, or features..."
                  className="w-full px-6 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              {searchTerm && (
                <div className="mt-4 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    Found {filteredTools.length} tools matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mb-16">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.id}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color}`}></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={tool.route}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${tool.color} text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-xl`}
                  >
                    Use Tool
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Type size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">Built for speed and efficiency with modern web technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <KeyIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-400">All processing happens in your browser, no data sent to servers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <QrCode size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Always Updated</h3>
              <p className="text-gray-600 dark:text-gray-400">Modern tools with the latest features and improvements</p>
            </div>
          </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
