'use client'

import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

/**
 * Site-wide animated backdrop (sits behind every page):
 *  - 2D: drifting aurora blobs, dot grid, film grain
 *  - 3D: perspective floor grid + floating CSS-3D cubes / rings that react to the mouse and to scrolling
 * Colours come from CSS variables, so it follows the active theme automatically.
 */
const Cube = ({ className }: { className: string }) => (
  <div className={`scene-cube ${className}`}>
    {['front', 'back', 'right', 'left', 'top', 'bottom'].map((f) => (
      <span key={f} className={`scene-face scene-face-${f}`} />
    ))}
  </div>
)

export default function SceneBackground() {
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 50, damping: 20 })
  const sy = useSpring(py, { stiffness: 50, damping: 20 })
  const rotY = useTransform(sx, [-0.5, 0.5], [-9, 9])
  const rotX = useTransform(sy, [-0.5, 0.5], [7, -7])
  const moveX = useTransform(sx, [-0.5, 0.5], [-26, 26])
  const moveY = useTransform(sy, [-0.5, 0.5], [-18, 18])

  const { scrollYProgress } = useScroll()
  const scrollRot = useTransform(scrollYProgress, [0, 1], [0, 160])
  const scrollShift = useTransform(scrollYProgress, [0, 1], [0, -240])

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e: PointerEvent) => {
      px.set(e.clientX / window.innerWidth - 0.5)
      py.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [px, py])

  return (
    <div aria-hidden className="scene-bg">
      {/* 2D layer */}
      <div className="scene-aurora">
        <span className="scene-blob scene-blob-a" />
        <span className="scene-blob scene-blob-b" />
        <span className="scene-blob scene-blob-c" />
      </div>
      <div className="scene-dots" />

      {/* 3D floor grid */}
      <div className="scene-floor-wrap">
        <div className="scene-floor" />
      </div>

      {/* 3D floating shapes */}
      <motion.div className="scene-3d" style={{ rotateX: rotX, rotateY: rotY, x: moveX, y: moveY }}>
        <motion.div className="scene-3d-inner" style={{ rotateZ: scrollRot, y: scrollShift }}>
          <Cube className="scene-cube-1" />
          <Cube className="scene-cube-2" />
          <Cube className="scene-cube-3" />
          <div className="scene-ring scene-ring-1" />
          <div className="scene-ring scene-ring-2" />
          <div className="scene-ring scene-ring-3" />
          <div className="scene-plane scene-plane-1" />
          <div className="scene-plane scene-plane-2" />
        </motion.div>
      </motion.div>

      <div className="scene-grain" />
    </div>
  )
}
