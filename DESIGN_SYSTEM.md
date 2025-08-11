# 🎨 Design System Documentation

## Overview
Comprehensive design system for the premium mobile bar delivery service website, featuring a refined color palette, typography scale, and component library.

---

## 🎨 Color Palette

### Background Colors
```css
--background-primary: #0B0B0B    /* Clean matte black */
--background-secondary: #161616  /* Card base */
--background-tertiary: #2A2A2A   /* Divider lines */
```

### Gold Accents
```css
--gold-primary: #D4AF37         /* Refined gold (not greenish) */
--gold-hover: #F5D76E           /* Button hover */
--gold-light: #F5D76E           /* Light gold variant */
```

### Text Colors
```css
--text-primary: #FFFFFF         /* White */
--text-secondary: #B8B8B8       /* Muted grey */
```

### Usage Examples
```jsx
// Background
<div className="bg-background-primary">Main background</div>
<div className="bg-background-secondary">Card background</div>

// Text
<h1 className="text-text-primary">Primary text</h1>
<p className="text-text-secondary">Secondary text</p>

// Gold accents
<button className="bg-gold-primary hover:bg-gold-hover">Gold button</button>
```

---

## 📝 Typography Scale

### Headings
```css
/* H1 - Hero titles */
font-size: 3.5rem (56px)
line-height: 1.1
font-weight: 700
letter-spacing: -0.02em

/* H2 - Section titles */
font-size: 2.5rem (40px)
line-height: 1.2
font-weight: 600
letter-spacing: -0.01em

/* H3 - Subsection titles */
font-size: 2rem (32px)
line-height: 1.3
font-weight: 600
letter-spacing: -0.01em

/* H4 - Card titles */
font-size: 1.5rem (24px)
line-height: 1.4
font-weight: 500

/* H5 - Small titles */
font-size: 1.25rem (20px)
line-height: 1.5
font-weight: 500

/* H6 - Micro titles */
font-size: 1.125rem (18px)
line-height: 1.5
font-weight: 500
```

### Body Text
```css
/* Body Large */
font-size: 1.125rem (18px)
line-height: 1.6
font-weight: 400

/* Body */
font-size: 1rem (16px)
line-height: 1.6
font-weight: 400

/* Body Small */
font-size: 0.875rem (14px)
line-height: 1.5
font-weight: 400

/* Caption */
font-size: 0.75rem (12px)
line-height: 1.4
font-weight: 400

/* Badge */
font-size: 0.75rem (12px)
line-height: 1.2
font-weight: 500
```

### Usage Examples
```jsx
// Headings
<h1 className="text-h1 font-heading">Hero Title</h1>
<h2 className="text-h2 font-heading">Section Title</h2>
<h3 className="text-h3 font-heading">Subsection Title</h3>

// Body text
<p className="text-body-lg font-body">Large body text</p>
<p className="text-body font-body">Regular body text</p>
<p className="text-body-sm font-body">Small body text</p>

// Special text
<span className="text-caption font-body">Caption text</span>
<span className="text-badge font-body">Badge text</span>
```

---

## 📏 Spacing Scale

### Spacing Values
```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
--spacing-4xl: 6rem (96px)
--spacing-5xl: 8rem (128px)
```

### Usage Examples
```jsx
// Padding
<div className="p-xs">Extra small padding</div>
<div className="p-sm">Small padding</div>
<div className="p-md">Medium padding</div>
<div className="p-lg">Large padding</div>

// Margin
<div className="m-xs">Extra small margin</div>
<div className="m-sm">Small margin</div>
<div className="m-md">Medium margin</div>
<div className="m-lg">Large margin</div>

// Gap
<div className="gap-xs">Extra small gap</div>
<div className="gap-sm">Small gap</div>
<div className="gap-md">Medium gap</div>
<div className="gap-lg">Large gap</div>
```

---

## 🔘 Button Variants

### Primary Button
```jsx
<Button 
  variant="primary"
  className="bg-gold-primary hover:bg-gold-hover text-black font-semibold rounded-button-lg px-6 py-3 shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300"
>
  Primary Action
</Button>
```

### Secondary Button
```jsx
<Button 
  variant="secondary"
  className="bg-transparent text-text-primary border-2 border-text-primary hover:bg-text-primary hover:text-background-primary rounded-button-lg px-6 py-3 transition-all duration-300"
>
  Secondary Action
</Button>
```

### Outline Button
```jsx
<Button 
  variant="outline"
  className="bg-transparent text-gold-primary border-2 border-gold-primary hover:bg-gold-primary hover:text-black rounded-button-lg px-6 py-3 transition-all duration-300"
>
  Outline Action
</Button>
```

### Ghost Button
```jsx
<Button 
  variant="ghost"
  className="bg-transparent text-text-secondary hover:text-text-primary hover:bg-background-secondary rounded-button-md px-4 py-2 transition-all duration-300"
>
  Ghost Action
</Button>
```

### Text Button
```jsx
<Button 
  variant="text"
  className="bg-transparent text-gold-primary hover:text-gold-hover underline-offset-4 hover:underline px-2 py-1 transition-all duration-300"
>
  Text Action
</Button>
```

---

## 🃏 Card Components

### Standard Card
```jsx
<Card className="bg-background-secondary border border-background-tertiary rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
  <CardHeader>
    <CardTitle className="text-h4 text-text-primary">Card Title</CardTitle>
    <CardDescription className="text-body-sm text-text-secondary">Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-body text-text-primary">Card content</p>
  </CardContent>
</Card>
```

### Glassmorphism Card
```jsx
<Card className="bg-background-secondary/60 backdrop-blur-xl border border-gold-primary/20 rounded-3xl shadow-glassmorphism hover:border-gold-primary/40 transition-all duration-500">
  <CardContent className="p-6">
    <h3 className="text-h5 text-text-primary mb-4">Glassmorphism Card</h3>
    <p className="text-body-sm text-text-secondary">Premium glassmorphism effect</p>
  </CardContent>
</Card>
```

---

## 🏷️ Badge Components

### Primary Badge
```jsx
<Badge className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-3 py-1 rounded-full text-badge font-medium">
  Primary Badge
</Badge>
```

### Secondary Badge
```jsx
<Badge className="bg-background-tertiary text-text-secondary border border-background-tertiary px-3 py-1 rounded-full text-badge font-medium">
  Secondary Badge
</Badge>
```

### Feature Badge
```jsx
<Badge className="bg-gradient-to-r from-gold-primary/25 to-gold-hover/25 text-gold-primary border border-gold-primary/40 px-4 py-2 rounded-full text-badge font-semibold backdrop-blur-sm">
  Feature Badge
</Badge>
```

---

## 🎭 Animation Presets

### Fade In
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Scale In
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Slide In
```jsx
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Effects
```jsx
<motion.div
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.3 }}
>
  Interactive Content
</motion.div>
```

---

## 🎨 Gradient Utilities

### Gold Gradient
```css
.bg-gradient-gold {
  background: linear-gradient(135deg, #D4AF37 0%, #F5D76E 100%);
}
```

### Glassmorphism Gradient
```css
.bg-gradient-glassmorphism {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
}
```

### Text Gradient
```jsx
<h1 className="bg-gradient-to-r from-gold-primary to-gold-hover bg-clip-text text-transparent">
  Gradient Text
</h1>
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Responsive Typography
```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  Responsive Heading
</h1>

<p className="text-sm md:text-base lg:text-lg">
  Responsive body text
</p>
```

### Responsive Spacing
```jsx
<div className="p-4 md:p-6 lg:p-8 xl:p-10">
  Responsive padding
</div>

<div className="gap-4 md:gap-6 lg:gap-8">
  Responsive gap
</div>
```

---

## 🎯 Component Guidelines

### Accessibility
- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure sufficient color contrast
- Support keyboard navigation
- Include focus indicators

### Performance
- Use CSS transforms for animations
- Implement lazy loading for images
- Optimize bundle size
- Use efficient selectors

### Consistency
- Follow the spacing scale
- Use consistent typography
- Maintain color harmony
- Apply consistent animations

---

## 📚 Usage Examples

### Hero Section
```jsx
<section className="min-h-screen bg-background-primary flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-h1 md:text-h1 lg:text-h1 font-heading text-text-primary mb-lg">
      Premium Mobile Bar
    </h1>
    <p className="text-body-lg md:text-h4 font-body text-text-secondary mb-xl max-w-2xl mx-auto">
      Licensed staffed bars and dry hire options for your special events
    </p>
    <div className="flex flex-col sm:flex-row gap-md justify-center">
      <Button variant="primary" className="text-h6 px-xl py-lg">
        Get Quote
      </Button>
      <Button variant="secondary" className="text-h6 px-xl py-lg">
        View Services
      </Button>
    </div>
  </div>
</section>
```

### Feature Card
```jsx
<Card className="bg-background-secondary border border-background-tertiary rounded-2xl p-lg hover:shadow-card-hover transition-all duration-300">
  <div className="text-center">
    <div className="w-16 h-16 bg-gold-primary/20 rounded-full flex items-center justify-center mb-md mx-auto">
      <Icon className="w-8 h-8 text-gold-primary" />
    </div>
    <h3 className="text-h5 text-text-primary mb-sm">Feature Title</h3>
    <p className="text-body-sm text-text-secondary">Feature description</p>
  </div>
</Card>
```

---

*This design system ensures consistency, accessibility, and premium aesthetics across the entire application.* 