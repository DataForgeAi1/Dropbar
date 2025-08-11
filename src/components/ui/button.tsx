import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#b68e52] to-[#d4af37] text-black border-2 border-[#b68e52] hover:from-[#d4af37] hover:to-[#b68e52] hover:shadow-xl hover:shadow-[#b68e52]/40 focus:ring-[#b68e52]/50",
        gold: "bg-gradient-to-r from-gold to-light-gold text-black border-2 border-gold hover:from-light-gold hover:to-gold hover:shadow-xl hover:shadow-gold/40 focus:ring-gold/50",
        destructive: "bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 hover:border-red-700 hover:shadow-xl hover:shadow-red-500/40 focus:ring-red-500/50",
        outline: "border-2 border-[#b68e52] bg-transparent text-[#b68e52] hover:bg-[#b68e52] hover:text-black hover:shadow-xl hover:shadow-[#b68e52]/40 focus:ring-[#b68e52]/50 backdrop-blur-sm",
        secondary: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white/40 focus:ring-white/50 backdrop-blur-sm",
        ghost: "border-2 border-transparent bg-transparent text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 focus:ring-white/50",
        link: "text-[#b68e52] underline-offset-4 hover:underline focus:ring-[#b68e52]/50 rounded-none",
        charcoal: "bg-charcoal text-off-white border-2 border-charcoal hover:bg-charcoal-800 hover:border-charcoal-800 hover:shadow-xl hover:shadow-charcoal/40 focus:ring-charcoal/50",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        xl: "h-16 px-12 py-5 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, icon, iconPosition = 'left', children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const content = (
      <>
        {loading && (
          <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
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

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 