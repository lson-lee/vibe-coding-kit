'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.1,
}: AnimatedTextProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
      },
    },
  }

  return (
    <motion.div
      className={cn('flex flex-wrap', className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}