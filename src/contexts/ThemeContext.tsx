'use client'

import { createContext, useContext, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

// The <html> class is the single source of truth (set before first paint by the inline script in layout.tsx).
const subscribe = (cb: () => void) => {
  const observer = new MutationObserver(cb)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
const getSnapshot = (): Theme => (document.documentElement.classList.contains('light') ? 'light' : 'dark')
const getServerSnapshot = (): Theme => 'dark'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement.classList
    root.remove('light', 'dark')
    root.add(next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
