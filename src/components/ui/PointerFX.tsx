'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Global micro-interactions for EVERY page (no per-page code needed):
 *  1. cursor spotlight that follows the mouse
 *  2. 3D tilt + moving glare on cards (mouse only, small cards only, never on forms)
 *  3. 3D scroll-reveal for article / tool / legal pages (home & section pages animate themselves)
 *  4. magnetic pull on gradient call-to-action buttons
 */
const TILT_SELECTOR = [
  '.glass-panel',
  '.section-shell',
  '[data-tilt]',
  'main :is(div,article,a,li)[class*="rounded-2xl"][class*="shadow"]',
  'main :is(div,a,li)[class*="rounded-3xl"]',
  'main :is(div,a,li)[class*="rounded-xl"][class*="border"][class*="p-"]',
].join(',')

const REVEAL_PATHS = ['/blog', '/tools', '/privacy-policy', '/terms-of-service']
const REVEAL_SELECTOR = 'article section, article h2, main .grid > *, main .space-y-8 > *, main .space-y-6 > *'

export default function PointerFX() {
  const pathname = usePathname()

  /* ---- spotlight + tilt + magnetic (once) ---- */
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const root = document.documentElement
    let tilted: HTMLElement | null = null
    let magnet: HTMLElement | null = null
    let raf = 0

    let resetTimer: ReturnType<typeof setTimeout> | undefined
    const clearTilt = () => {
      if (!tilted) return
      const el = tilted
      tilted = null
      // ease back to flat first, then drop the class
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
      clearTimeout(resetTimer)
      resetTimer = setTimeout(() => {
        if (el !== tilted) el.classList.remove('fx-tilt-active')
      }, 320)
    }
    const clearMagnet = () => {
      if (!magnet) return
      magnet.style.removeProperty('--mx-shift')
      magnet.style.removeProperty('--my-shift')
      magnet = null
    }

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--cx', `${e.clientX}px`)
        root.style.setProperty('--cy', `${e.clientY}px`)

        const target = e.target as HTMLElement | null
        if (!target?.closest) return

        // magnetic CTA
        const btn = target.closest<HTMLElement>('main a[class*="bg-gradient"], main button[class*="bg-gradient"], .site-navbar a[class*="bg-linear"]')
        if (btn) {
          if (magnet && magnet !== btn) clearMagnet()
          magnet = btn
          const r = btn.getBoundingClientRect()
          btn.style.setProperty('--mx-shift', `${((e.clientX - (r.left + r.width / 2)) / r.width) * 10}px`)
          btn.style.setProperty('--my-shift', `${((e.clientY - (r.top + r.height / 2)) / r.height) * 8}px`)
          btn.classList.add('fx-magnet')
        } else clearMagnet()

        // 3D tilt
        const card = target.closest<HTMLElement>(TILT_SELECTOR)
        if (!card || card.querySelector('input,textarea,select') || card.closest('nav')) {
          clearTilt()
          return
        }
        const r = card.getBoundingClientRect()
        if (r.width > 640 || r.height > 560 || r.width < 120) {
          clearTilt()
          return
        }
        if (tilted && tilted !== card) clearTilt()
        tilted = card
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        card.classList.add('fx-tilt-active')
        card.style.setProperty('--rx', `${((0.5 - y) * 9).toFixed(2)}deg`)
        card.style.setProperty('--ry', `${((x - 0.5) * 11).toFixed(2)}deg`)
        card.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`)
        card.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`)
      })
    }

    const onLeave = () => {
      clearTilt()
      clearMagnet()
    }

    root.classList.add('fx-cursor')
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(resetTimer)
      root.classList.remove('fx-cursor')
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      clearTilt()
      clearMagnet()
    }
  }, [])

  /* ---- 3D scroll reveal on content pages (re-runs on every route change) ---- */
  useEffect(() => {
    if (!REVEAL_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const vh = window.innerHeight
    const prepared: Element[] = []
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('fx-in')
            io.unobserve(en.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    )

    // wait a frame so the page content exists
    const t = requestAnimationFrame(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el, i) => {
        if (el.classList.contains('fx-reveal') || el.closest('nav,footer')) return
        const top = el.getBoundingClientRect().top
        if (top < vh * 0.92) return // already on screen: leave it alone
        const h = el as HTMLElement
        h.style.setProperty('--fx-delay', `${(i % 4) * 70}ms`)
        h.classList.add('fx-reveal')
        prepared.push(el)
        io.observe(el)
      })
    })

    return () => {
      cancelAnimationFrame(t)
      io.disconnect()
      prepared.forEach((el) => el.classList.remove('fx-reveal', 'fx-in'))
    }
  }, [pathname])

  return <div aria-hidden className="cursor-spotlight" />
}
