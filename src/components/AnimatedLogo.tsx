import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  className = '', 
  size = 'md', 
  animated = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const strokeWidth = {
    sm: 2,
    md: 2.5,
    lg: 3
  }

  return (
    <motion.svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animated ? { opacity: 0, scale: 0.8 } : false}
      animate={animated ? { opacity: 1, scale: 1 } : false}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#goldGradient)"
        stroke="url(#goldGradient)"
        strokeWidth={strokeWidth[size]}
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Wine Glass Stem */}
      <motion.path
        d="M45 25 L45 60 M55 25 L55 60"
        stroke="white"
        strokeWidth={strokeWidth[size]}
        strokeLinecap="round"
        initial={animated ? { pathLength: 0 } : false}
        animate={animated ? { pathLength: 1 } : false}
        transition={{ duration: 1, delay: 0.4 }}
      />
      
      {/* Wine Glass Bowl */}
      <motion.path
        d="M35 60 Q50 75 65 60"
        stroke="white"
        strokeWidth={strokeWidth[size]}
        fill="none"
        initial={animated ? { pathLength: 0 } : false}
        animate={animated ? { pathLength: 1 } : false}
        transition={{ duration: 1, delay: 0.6 }}
      />
      
      {/* Wine Liquid */}
      <motion.path
        d="M38 60 Q50 70 62 60"
        fill="url(#wineGradient)"
        initial={animated ? { scaleY: 0 } : false}
        animate={animated ? { scaleY: 1 } : false}
        transition={{ duration: 0.8, delay: 0.8 }}
        transformOrigin="center"
      />
      
      {/* Bubbles */}
      <motion.circle
        cx="42"
        cy="35"
        r="2"
        fill="white"
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 0.4, delay: 1.0 }}
      />
      <motion.circle
        cx="58"
        cy="40"
        r="1.5"
        fill="white"
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 0.4, delay: 1.1 }}
      />
      <motion.circle
        cx="48"
        cy="45"
        r="1"
        fill="white"
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 0.4, delay: 1.2 }}
      />
      
      {/* Text "DROPBA" */}
      <motion.text
        x="50"
        y="85"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        initial={animated ? { opacity: 0, y: 10 } : false}
        animate={animated ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        DROPBA
      </motion.text>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b68e52" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
        <linearGradient id="wineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#DC143C" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export default AnimatedLogo 