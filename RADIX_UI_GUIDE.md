# Radix UI Integration Guide

This guide explains how to use Radix UI components in your Dropba project.

## What's Been Added

### 1. Installed Packages
- **Core Radix UI Components**: Dialog, Dropdown Menu, Navigation Menu, Tabs, Accordion, Alert Dialog, Toast, Tooltip, Popover, Select, Checkbox, Radio Group, Switch, Slider, Progress, Avatar, Separator, Scroll Area, Hover Card, Context Menu, Menubar, Aspect Ratio, Collapsible, Toggle, Toggle Group, Label, Slot
- **Utility Libraries**: class-variance-authority, clsx, tailwind-merge

### 2. Created Components
- **Button**: Versatile button component with multiple variants and sizes
- **Dialog**: Modal dialog component with overlay and content
- **Card**: Card component with header, content, and footer sections

### 3. Configuration
- **Tailwind Config**: Added Radix UI design tokens and CSS variables
- **CSS Variables**: Added light and dark theme support
- **Utility Functions**: Created `cn()` function for class merging

## How to Use

### Basic Button Usage
```tsx
import { Button } from '@/components/ui/button'

// Different variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Dialog Usage
```tsx
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Your content here */}
  </DialogContent>
</Dialog>
```

### Card Usage
```tsx
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Customization

### Styling with Your Design System
The components are designed to work with your existing gold/light-gold color scheme:

```tsx
// Custom styled button
<Button className="bg-gradient-to-r from-gold to-light-gold text-black hover:from-light-gold hover:to-gold">
  Custom Button
</Button>

// Custom styled card
<Card className="bg-gradient-to-br from-gold/10 to-light-gold/10 border-gold/30">
  <CardHeader>
    <CardTitle className="text-gold">Gold Title</CardTitle>
  </CardHeader>
  {/* Content */}
</Card>
```

### Glass Effect
```tsx
<Card className="bg-white/5 backdrop-blur-md border-white/10">
  {/* Glass morphism effect */}
</Card>
```

## Available Components

### UI Components (`src/components/ui/`)
- `button.tsx` - Button component with variants
- `dialog.tsx` - Modal dialog component
- `card.tsx` - Card layout component

### Utility Functions (`src/lib/utils.ts`)
- `cn()` - Class name merging utility

## Demo Page

Visit `/radix-demo` to see all components in action with examples.

## Adding New Components

To add more Radix UI components:

1. Install the component package:
   ```bash
   npm install @radix-ui/react-[component-name]
   ```

2. Create the component file in `src/components/ui/`

3. Export it from `src/components/ui/index.ts`

4. Add any necessary CSS variables to `src/index.css`

## Best Practices

1. **Use the `cn()` utility** for combining classes
2. **Leverage your existing color scheme** (gold, light-gold)
3. **Maintain accessibility** - Radix UI handles this automatically
4. **Use TypeScript** for better type safety
5. **Follow the component patterns** established in the existing UI components

## Theme Support

The components support both light and dark themes through CSS variables. The current setup uses your dark theme by default, but you can easily switch to light theme by adding the `light` class to your root element.

## Next Steps

Consider adding these popular Radix UI components next:
- **Form components** (Input, Textarea, Select)
- **Navigation components** (Tabs, Accordion)
- **Feedback components** (Toast, Alert Dialog)
- **Data display** (Table, Badge)

For more information, visit the [Radix UI documentation](https://www.radix-ui.com/). 