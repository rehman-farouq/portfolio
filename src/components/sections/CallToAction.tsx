'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Star } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-white/45 to-transparent dark:via-white/[0.025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 sm:p-16">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-lg"
            >
              <Rocket size={32} />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Let's Build Something <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">Powerful</span> Together
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-slate-600 dark:text-gray-400 text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Transform your ideas into reality with cutting-edge Flutter and Next.js applications 
              that drive business growth and deliver exceptional user experiences.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center gap-3 mx-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex justify-center gap-8 mt-8"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-slate-600 dark:text-gray-400 text-sm">Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-slate-600 dark:text-gray-400 text-sm">Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-slate-600 dark:text-gray-400 text-sm">On-Time Delivery</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
