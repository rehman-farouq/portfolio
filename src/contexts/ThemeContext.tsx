'use client'

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from 'react'

export type ThemePreference = 'system' | 'light' | 'dark'
export type ResolvedTheme = 'light' | 'dark'

interface ThemeContextType {
  /** What the visitor picked: follow the device ('system') or force light/dark. */
  preference: ThemePreference
  /** What is actually showing right now. */
  theme: ResolvedTheme
  setPreference: (p: ThemePreference) => void
  /** Quick light <-> dark flip (leaves 'system' mode). */
  toggleTheme: () => void
}

const STORAGE_KEY = 'theme'
const MEDIA = '(prefers-color-scheme: dark)'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

/* ---------- tiny external store (single source of truth = localStorage + <html> class) ---------- */

const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

const readPreference = (): ThemePreference => {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'light' || v === 'dark' ? v : 'system' // nothing saved => follow the device
  } catch {
    return 'system'
  }
}

const resolve = (p: ThemePreference): ResolvedTheme =>
  p === 'system' ? (window.matchMedia(MEDIA).matches ? 'dark' : 'light') : p

const apply = (p: ThemePreference) => {
  const resolved = resolve(p)
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(resolved)
  root.style.colorScheme = resolved
  root.dataset.theme = resolved
  const meta = document.querySelector('meta[name="theme-color"][data-dynamic]') as HTMLMetaElement | null
  if (meta) meta.content = resolved === 'dark' ? '#05060f' : '#f4f6ff'
}

let mediaBound = false
const bindMedia = () => {
  if (mediaBound || typeof window === 'undefined') return
  mediaBound = true
  // When the device theme changes and the visitor is on 'system', follow it live.
  window.matchMedia(MEDIA).addEventListener('change', () => {
    if (readPreference() === 'system') {
      apply('system')
      emit()
    }
  })
  // Keep multiple tabs in sync.
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      apply(readPreference())
      emit()
    }
  })
}

const subscribe = (cb: () => void) => {
  bindMedia()
  listeners.add(cb)
  return () => {
    listeners.delete(cb)
  }
}

// Snapshot is a string so React can compare by value: "<preference>|<resolved>"
const getSnapshot = () => {
  const p = readPreference()
  return `${p}|${resolve(p)}`
}
const getServerSnapshot = () => 'system|dark'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [preference, theme] = snap.split('|') as [ThemePreference, ResolvedTheme]

  const setPreference = useCallback((p: ThemePreference) => {
    try {
      if (p === 'system') localStorage.removeItem(STORAGE_KEY)
      else localStorage.setItem(STORAGE_KEY, p)
    } catch {}
    apply(p)
    emit()
  }, [])

  const toggleTheme = useCallback(() => {
    setPreference(resolve(readPreference()) === 'dark' ? 'light' : 'dark')
  }, [setPreference])

  const value = useMemo(
    () => ({ preference, theme, setPreference, toggleTheme }),
    [preference, theme, setPreference, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
