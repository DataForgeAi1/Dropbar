/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Color Palette - Design System
        // Background Colors
        background: {
          DEFAULT: '#0B0B0B', // Clean matte black
          secondary: '#161616', // Card base
          tertiary: '#2A2A2A', // Divider lines
        },
        
        // Gold Accents (Refined)
        gold: {
          50: '#fef7e6',
          100: '#fdecc3',
          200: '#fbd68a',
          300: '#f8bb4d',
          400: '#f59e2e',
          500: '#f0831a',
          600: '#e16512',
          700: '#bb4d12',
          800: '#953d16',
          900: '#793415',
          950: '#421a08',
          DEFAULT: '#D4AF37', // Refined gold (not greenish)
          hover: '#F5D76E', // Button hover
        },
        'light-gold': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
          DEFAULT: '#F5D76E', // Button hover
        },
        
        // Text Colors
        text: {
          primary: '#FFFFFF', // White
          secondary: '#B8B8B8', // Muted grey
        },
        
        // Luxe Noir Core Dark Backgrounds
        'true-black': '#000000',
        'charcoal': '#121212',
        'gunmetal': '#1E1E1E',
        
        // Light Accents / Fonts
        'classic-white': '#FFFFFF',
        'platinum': '#EDEDED',
        'soft-grey': '#BDBDBD',
        
        // Champagne Tint (For CTA Backgrounds)
        'champagne-mist': '#F7ECD8',
        'soft-sand': '#E0C187',
        charcoal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
          DEFAULT: '#1e293b',
        },
        'off-white': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
          DEFAULT: '#fafafa',
        },
        'primary-black': '#000000',
        'secondary-black': '#1a1a1a',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      
      // Typography Scale - Design System
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'h3': ['2rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0' }],
        'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        'badge': ['0.75rem', { lineHeight: '1.2', fontWeight: '500' }],
      },
      
      // Spacing Scale - Design System
      spacing: {
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '3rem',      // 48px
        '3xl': '4rem',      // 64px
        '4xl': '6rem',      // 96px
        '5xl': '8rem',      // 128px
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'floating': 'floating 3s ease-in-out infinite',
        'gradientShift': 'gradientShift 3s ease-in-out infinite',
        'iconPulse': 'iconPulse 2s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-0': 'fade-in-0 0.2s ease-out',
        'fade-out-0': 'fade-out-0 0.2s ease-out',
        'zoom-in-95': 'zoom-in-95 0.2s ease-out',
        'zoom-out-95': 'zoom-out-95 0.2s ease-out',
        'slide-in-from-top-2': 'slide-in-from-top-2 0.2s ease-out',
        'slide-in-from-right-2': 'slide-in-from-right-2 0.2s ease-out',
        'slide-in-from-left-2': 'slide-in-from-left-2 0.2s ease-out',
        'slide-in-from-bottom-2': 'slide-in-from-bottom-2 0.2s ease-out',
        'gradient-x': 'gradient-x 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        iconPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in-0': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out-0': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'zoom-in-95': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'zoom-out-95': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        'slide-in-from-top-2': {
          '0%': { transform: 'translateY(-0.5rem)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-right-2': {
          '0%': { transform: 'translateX(0.5rem)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-left-2': {
          '0%': { transform: 'translateX(-0.5rem)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-bottom-2': {
          '0%': { transform: 'translateY(0.5rem)' },
          '100%': { transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      
      // Button Variants - Design System
      borderRadius: {
        'button-sm': '0.5rem',    // 8px
        'button-md': '0.75rem',   // 12px
        'button-lg': '1rem',      // 16px
        'button-xl': '1.5rem',    // 24px
      },
      
      // Component Utilities
      boxShadow: {
        'button-primary': '0 4px 14px 0 rgba(212, 175, 55, 0.3)',
        'button-primary-hover': '0 6px 20px 0 rgba(212, 175, 55, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glassmorphism': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
} 