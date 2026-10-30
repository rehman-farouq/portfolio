'use client'

import { motion } from 'framer-motion'

/**
 * Re-mounts on every navigation → smooth page enter for every screen.
 * NOTE: only opacity/translate/scale are animated (no perspective/filter) so that once the animation
 * finishes the wrapper has `transform: none` and does not become a containing block for the
 * fixed navbar / scroll-to-top button.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
