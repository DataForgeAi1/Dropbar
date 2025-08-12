# Drop Bar - Premium Mobile Bar Service

A modern, responsive website for Drop Bar, Perth's premier mobile bar delivery service. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Elegant, professional design with dark/light mode support
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized with lazy loading and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Contact Forms**: Integrated quote request and contact forms
- **Interactive Elements**: Smooth animations and micro-interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI primitives
- **Routing**: React Router DOM
- **Backend**: Node.js, Express
- **Email**: Nodemailer
- **Deployment**: Ready for Vercel, Netlify, or custom hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dropbar-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure your `.env` file:
   ```env
   PORT=5000
   NODE_ENV=development
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Radix UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── Button.tsx      # Custom button component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Pricing.tsx     # Pricing page
│   ├── Contact.tsx     # Contact page
│   ├── Quote.tsx       # Quote request form
│   ├── FAQ.tsx         # FAQ page
│   ├── Privacy.tsx     # Privacy policy
│   └── Terms.tsx       # Terms of service
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets

server/
├── routes/             # API routes
├── services/           # Business logic
└── index.js           # Express server
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Deploy to Netlify**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist/client`

### Backend (Railway/Render)

1. **Set environment variables** in your hosting platform
2. **Deploy the server directory**
3. **Update frontend API endpoints** to point to your backend URL

## 📝 Available Scripts

- `npm run dev` - Start development server (client + server)
- `npm run dev:client` - Start frontend development server
- `npm run dev:server` - Start backend development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary gold: `#D4AF37`
- Light gold: `#F5D76E`
- Dark backgrounds: `#000000`, `#121212`, `#1E1E1E`

### Content
Update content in the respective page components:
- `src/pages/Home.tsx` - Landing page content
- `src/pages/About.tsx` - Company information
- `src/pages/Pricing.tsx` - Service packages and pricing
- `src/pages/Contact.tsx` - Contact information

### Images
Replace images in the `public/` directory:
- `logo white.png` - Company logo
- `Hero_*.png` - Hero section images
- `bar-*.jpg` - Bar style images

## 🔧 Configuration

### Email Setup
Configure email settings in `server/routes/contact.js` and `server/routes/quote.js`:
- Update SMTP settings
- Customize email templates
- Set up email notifications

### API Endpoints
- `POST /api/contact` - Contact form submission
- `POST /api/quote` - Quote request submission
- `GET /api/health` - Health check endpoint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:
- Email: info@dropbar.com.au
- Phone: 0434 991 263

---

Built with ❤️ for Drop Bar 