'use client'

import { motion } from 'framer-motion'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme, type ThemePreference } from '@/contexts/ThemeContext'

const OPTIONS: { value: ThemePreference; label: string; Icon: typeof Sun }[] = [
  { value: 'system', label: 'System theme', Icon: Monitor },
  { value: 'light', label: 'Light theme', Icon: Sun },
  { value: 'dark', label: 'Dark theme', Icon: Moon },
]

/** Floating 3-way theme switch: System (default) · Light · Dark. */
const ThemeToggle = () => {
  const { preference, theme, setPreference } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 220, damping: 20 }}
      role="radiogroup"
      aria-label="Theme"
      className="theme-dock fixed bottom-6 left-4 z-[70] flex items-center gap-0.5 rounded-full p-1 sm:left-6"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = preference === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={value === 'system' ? `System (currently ${theme})` : label}
            onClick={() => setPreference(value)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            {active && (
              <motion.span
                layoutId="theme-pill"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/40"
              />
            )}
            <motion.span
              className={`relative z-10 ${active ? 'text-white' : ''}`}
              whileHover={{ rotate: value === 'light' ? 90 : value === 'dark' ? -15 : 0, scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
            >
              <Icon size={16} />
            </motion.span>
          </button>
        )
      })}
    </motion.div>
  )
}

export default ThemeToggle
