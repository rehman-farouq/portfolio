'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Shield, Users, Clock, Award } from 'lucide-react'

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: <Code2 size={24} />,
      title: 'Clean Code Architecture',
      description: 'Scalable, maintainable, and well-documented code that grows with your business.',
      benefit: 'Future-proof solutions'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Delivery',
      description: 'Agile development process with rapid iterations and consistent delivery.',
      benefit: 'Time to market advantage'
    },
    {
      icon: <Shield size={24} />,
      title: 'Scalable Solutions',
      description: 'Built to handle growth and increased user loads without performance issues.',
      benefit: 'Business growth ready'
    },
    {
      icon: <Users size={24} />,
      title: 'Strong Communication',
      description: 'Clear, regular updates and transparent collaboration throughout the project.',
      benefit: 'No surprises, full visibility'
    },
    {
      icon: <Clock size={24} />,
      title: 'Long-term Support',
      description: 'Ongoing maintenance and support to ensure continued success.',
      benefit: 'Peace of mind guaranteed'
    },
    {
      icon: <Award size={24} />,
      title: 'Results-Driven',
      description: 'Focus on delivering measurable business outcomes and ROI.',
      benefit: 'Proven track record'
    }
  ]

  return (
    <section id="why-choose-me" className="py-20 bg-gradient-to-b from-transparent via-white/45 to-transparent dark:via-white/[0.025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Why <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">Choose Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            The strategic advantages that make me the ideal partner for your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-slate-200 dark:border-gray-700/50 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-800/70 hover:border-slate-300 dark:hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:from-green-700 group-hover:to-blue-700 transition-all duration-300"
              >
                {reason.icon}
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                  {reason.description}
                </p>
                
                {/* Benefit Tag */}
                <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-emerald-600 dark:text-green-400 text-sm font-medium">
                    {reason.benefit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Build Something <span className="text-emerald-600 dark:text-green-400">Powerful</span> Together?
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how my expertise can help you achieve your business goals and drive measurable growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 flex items-center gap-3 mx-auto"
            >
              Start Conversation
              <Award className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseMe
