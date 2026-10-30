'use client'

import { motion } from 'framer-motion'
import { Code2, Briefcase, Award, Users } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const SocialProof = () => {
  const stats = [
    {
      icon: <Code2 size={24} />,
      value: 50,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Across mobile and web platforms'
    },
    {
      icon: <Briefcase size={24} />,
      value: 3,
      suffix: '+',
      label: 'Years Experience',
      description: 'Professional development experience'
    },
    {
      icon: <Award size={24} />,
      value: 15,
      suffix: '+',
      label: 'Technologies Mastered',
      description: 'Modern frameworks and tools'
    },
    {
      icon: <Users size={24} />,
      value: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Consistently delivering quality'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-white/45 to-transparent dark:via-white/[0.025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that speak for themselves and the quality I deliver
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-slate-200 dark:border-gray-700/50 rounded-2xl p-8 text-center hover:bg-white dark:hover:bg-gray-800/70 hover:border-slate-300 dark:hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300"
              >
                {stat.icon}
              </motion.div>

              {/* Counter */}
              <div className="mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                />
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
