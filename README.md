# Growth Leder - Services Website

A modern, responsive Next.js website for Growth Leder services, built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Fully static export (no server required)
- ✅ Modern animated testimonial slider
- ✅ Service carousel on homepage
- ✅ Individual service detail pages with breadcrumbs
- ✅ Responsive design for all devices
- ✅ SEO-friendly with schema markup
- ✅ Fast loading times

## Services Offered

1. Lead Generation
2. Admin Support
3. General Virtual Assistance
4. Outreach Services (Social + Cold Outreach)
5. Social Media Management & Ads
6. CRM Management
7. Automation & Workflows
8. Accounting & Bookkeeping

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export to StackCP

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git (for version control)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd haseeb-services-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This generates a static site in the `out` folder, ready for deployment.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCarousel.tsx
│   └── Testimonials.tsx
├── lib/                   # Data and utilities
│   ├── services.ts        # Services data
│   └── testimonials.ts    # Testimonials data
├── public/                # Static assets
└── out/                   # Build output (generated)
```

## Deployment

### StackCP Deployment

1. Build the site:
   ```powershell
   .\build-for-stackcp.ps1
   ```

2. Upload contents of `out` folder to StackCP `public_html`

See [STACKCP_DEPLOYMENT.md](./STACKCP_DEPLOYMENT.md) for detailed instructions.

### Other Platforms

This static site can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static site
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© {new Date().getFullYear()} Growth Leder. All rights reserved.
