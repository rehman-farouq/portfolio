'use client'

import React, { useState } from 'react'
import { 
  Type, 
  Key, 
  QrCode, 
  Image as ImageIcon, 
  Code2, 
  Copy, 
  Download, 
  RefreshCw,
  Check,
  X,
  Upload,
  Shield,
  Zap,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import TextConverterTool from '@/components/tools/TextConverterTool'
import PasswordGeneratorTool from '@/components/tools/PasswordGeneratorTool'
import QRCodeGeneratorTool from '@/components/tools/QRCodeGeneratorTool'
import ImageResizeTool from '@/components/tools/ImageResizeTool'
import JSONFormatterTool from '@/components/tools/JSONFormatterTool'
import Link from 'next/link'

const Tools = () => {
  const [activeTool, setActiveTool] = useState('text-converter')

  const tools = [
    {
      id: 'text-converter',
      name: 'Text Converter',
      description: 'Convert, format, and transform text instantly',
      icon: <Type size={24} />,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-600/20 via-cyan-600/10 to-blue-500/20',
      route: '/tools/text-converter'
    },
    {
      id: 'password-generator',
      name: 'Password Generator',
      description: 'Generate secure passwords with customizable options',
      icon: <Key size={24} />,
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-600/20 via-pink-600/10 to-purple-500/20',
      route: '/tools/password-generator'
    },
    {
      id: 'qr-generator',
      name: 'QR Code Generator',
      description: 'Create QR codes for URLs and text',
      icon: <QrCode size={24} />,
      color: 'from-green-500 to-teal-500',
      gradient: 'from-green-600/20 via-teal-600/10 to-green-500/20',
      route: '/tools/qr-generator'
    },
    {
      id: 'image-resize',
      name: 'Image Resizer',
      description: 'Resize images quickly and easily',
      icon: <ImageIcon size={24} />,
      color: 'from-orange-500 to-red-500',
      gradient: 'from-orange-600/20 via-red-600/10 to-orange-500/20',
      route: '/tools/image-resize'
    },
    {
      id: 'json-formatter',
      name: 'JSON Formatter',
      description: 'Format and validate JSON code',
      icon: <Code2 size={24} />,
      color: 'from-indigo-500 to-blue-500',
      gradient: 'from-indigo-600/20 via-blue-600/10 to-indigo-500/20',
      route: '/tools/json-formatter'
    }
  ]

  const renderActiveTool = () => {
    switch (activeTool) {
      case 'text-converter':
        return <TextConverterTool />
      case 'password-generator':
        return <PasswordGeneratorTool />
      case 'qr-generator':
        return <QRCodeGeneratorTool />
      case 'image-resize':
        return <ImageResizeTool />
      case 'json-formatter':
        return <JSONFormatterTool />
      default:
        return <TextConverterTool />
    }
  }

  return (
    <section id="tools" className="relative py-24 bg-gradient-to-b from-transparent via-white/45 to-transparent dark:via-white/[0.025] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
              Developer <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tools</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Handy utility tools for developers and designers. Built with modern web technologies.
            </p>
          </FadeIn>
        </div>

        {/* Tool Selection Tabs */}
        <FadeIn direction="up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
            {tools.map((tool, index) => (
              <div key={tool.id} className="relative group">
                <button
                  onClick={() => setActiveTool(tool.id)}
                  className={`group relative overflow-hidden px-6 py-4 rounded-2xl font-medium transition-all duration-500 flex items-center gap-4 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ${
                    activeTool === tool.id
                      ? 'bg-gradient-to-r ' + tool.color + ' text-white ring-4 ring-white/20 scale-105 shadow-2xl'
                      : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-2xl hover:shadow-gray-500/10 border border-gray-200/50 dark:border-gray-700/50'
                  }`}
                >
                  {/* Icon Background */}
                  <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeTool === tool.id 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-r ' + tool.gradient
                  }`}>
                    {tool.icon}
                  </div>
                  
                  {/* Tool Info */}
                  <div className="text-left">
                    <div className={`font-bold text-lg mb-1 ${
                      activeTool === tool.id ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {tool.name}
                    </div>
                    <div className={`text-sm leading-relaxed ${
                      activeTool === tool.id ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {tool.description}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  {activeTool !== tool.id && (
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
                  )}
                </button>
                
                {/* Open in New Screen Button */}
                <Link 
                  href={tool.route}
                  className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-0"
                  title="Open in dedicated screen"
                >
                  <ExternalLink size={16} className="text-gray-600 dark:text-gray-400" />
                </Link>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Active Tool Content */}
        <FadeIn direction="up" delay={400}>
          <div className="relative">
            {/* Background decoration for active tool */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl ring-4 ring-white/10">
              {renderActiveTool()}
            </div>
          </div>
        </FadeIn>

        {/* Tools Stats */}
        <FadeIn direction="up" delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">Built for speed and efficiency</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-400">All processing happens in your browser</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <RefreshCw size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">Always Updated</h3>
              <p className="text-gray-600 dark:text-gray-400">Modern tools with latest features</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Tools
