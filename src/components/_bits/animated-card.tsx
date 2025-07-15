'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  initialScale?: number
  hoverRotate?: number
}

export function AnimatedCard({
  children,
  className,
  hoverScale = 1.05,
  initialScale = 1,
  hoverRotate = 0,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn('relative overflow-hidden rounded-lg', className)}
      initial={{ scale: initialScale }}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
        animate={{
          opacity: isHovered ? 0.3 : 0,
          x: isHovered ? ['-100%', '100%'] : '-100%',
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}