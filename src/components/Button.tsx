import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  target,
  rel,
}) => {
  const baseClasses = [
    'inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer border-2 text-center relative overflow-hidden',
    'focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'active:scale-95 transform',
    fullWidth ? 'w-full' : '',
  ]

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl',
  }

  const variantClasses = {
    primary: [
      'bg-gradient-to-r from-gold to-light-gold text-black border-gold',
      'hover:from-light-gold hover:to-gold hover:shadow-lg hover:shadow-gold/25',
      'focus:ring-gold/50',
      'active:shadow-inner',
    ],
    secondary: [
      'bg-transparent text-white border-white',
      'hover:bg-white hover:text-black hover:shadow-lg',
      'focus:ring-white/50',
    ],
    outline: [
      'bg-transparent text-gold border-gold',
      'hover:bg-gold hover:text-black hover:shadow-lg hover:shadow-gold/25',
      'focus:ring-gold/50',
    ],
    ghost: [
              'bg-transparent text-white/70 border-transparent',
      'hover:bg-white/10 hover:text-white hover:border-white/20',
      'focus:ring-white/50',
    ],
    destructive: [
      'bg-red-600 text-white border-red-600',
      'hover:bg-red-700 hover:border-red-700 hover:shadow-lg hover:shadow-red-500/25',
      'focus:ring-red-500/50',
    ],
  }

  const classes = [
    ...baseClasses,
    sizeClasses[size],
    ...variantClasses[variant],
    className,
  ].join(' ')

  const content = (
    <>
      {loading && (
        <Loader2 className="animate-spin mr-2 h-4 w-4" />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  )

  // If href is provided, render as Link
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={fullWidth ? 'w-full' : 'inline-block'}
      >
        <Link
          to={href}
          className={classes}
          target={target}
          rel={rel}
          onClick={onClick}
        >
          {content}
        </Link>
      </motion.div>
    )
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}

export default Button 