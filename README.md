# ORBITZ AI - AI Automation Platform

A modern, responsive landing page for ORBITZ AI, an AI automation company. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design inspired by HeyGen
- 📱 Fully responsive layout
- ⚡ Built with Vite for fast development
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🚀 Production-ready components

## Getting Started

### Prerequisites

- Node.js (v20.17.0 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── Services.tsx    # Services section
│   ├── Testimonials.tsx # Customer testimonials
│   ├── TrustedBy.tsx   # Trusted by section
│   ├── FAQ.tsx         # FAQ section
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── style.css           # Global styles with Tailwind
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is currently set to blue (`primary-600`).

### Content

All content is in the component files. Edit the respective component files to update:
- Hero text and CTAs
- Features and services
- Testimonials
- FAQ items
- Footer links

## License

© 2025 ORBITZ AI. All rights reserved.


