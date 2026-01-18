# Deployment Guide - Growth Leder Website

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Deployment Options

### Vercel (Recommended - Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Manual Deployment

1. Run `npm run build`
2. Upload the `.next` folder and all files to your hosting provider
3. Ensure Node.js 18+ is available on your server

## Environment Variables

No environment variables required for basic functionality.

## Features Implemented

✅ All "About Me" changed to "About Us"
✅ First-person language converted to company/team language
✅ About Us section updated with new content
✅ SEO optimization with meta tags and keywords
✅ Services converted to working slider/carousel
✅ All emojis replaced with professional SVG icons
✅ Next.js with React and Tailwind CSS
✅ Smooth hover animations on cards, icons, and buttons
✅ Fully responsive design
✅ Performance optimized

## File Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About Us page
│   ├── services/          # Services page with carousel
│   ├── portfolio/         # Portfolio page
│   ├── contact/           # Contact page with form
│   ├── automation/        # Automation services page
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with social links
│   ├── ServiceCarousel.tsx # Services slider component
│   ├── BackToTop.tsx      # Back to top button
│   └── icons.tsx          # SVG icon components
├── public/                # Static assets
│   ├── logo.svg
│   ├── logo-white.svg
│   ├── favicon.svg
│   └── ...
└── package.json           # Dependencies
```

## Important Notes

- All pages are server-side rendered for better SEO
- Images are optimized through Next.js Image component
- Form submissions go to Formspree (configured in contact page)
- All animations respect `prefers-reduced-motion` for accessibility

## Support

For issues or questions, contact: admin@growthleder.com
