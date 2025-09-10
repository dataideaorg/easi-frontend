# East African Statistics Institute (EASI) Website

A modern, responsive website for the East African Statistics Institute built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Modern Design**: Clean, professional design with smooth animations using Framer Motion
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Accessible**: Follows web accessibility best practices
- **Type-Safe**: Written in TypeScript for better development experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Static export for GitHub Pages

## Pages

- **Home**: Hero section with services overview, stats, and social media links
- **About**: Mission, vision, team information, and organizational details
- **Training**: Training programs and course offerings
- **Courses**: Detailed course catalog with descriptions and schedules
- **Consultancy**: Consulting services and expertise areas
- **Resources**: Educational materials, research papers, and external links
- **Contact**: Contact form and organizational information
- **Terms & Conditions**: Legal terms and conditions

## Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Site footer with links and contact information
- **Services**: Service cards with animations
- **Partners**: Partner logos and information
- **Stats**: Animated statistics display
- **BackToTop**: Smooth scroll-to-top button

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── consultancy/
│   ├── courses/
│   ├── resources/
│   ├── terms-and-conditions/
│   ├── training/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── BackToTop.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── Partners.tsx
│   ├── Services.tsx
│   └── Stats.tsx
└── lib/                   # Utilities and configurations
    ├── navigation.ts
    ├── styles.ts
    └── utils.ts
```

## Design System

The project uses a consistent design system with:

- **Colors**: EASI orange (#dd8604) as primary color with variations
- **Typography**: Responsive typography scale using Tailwind CSS
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components from shadcn/ui

## Deployment

The website is configured for static export and can be deployed to:

- **GitHub Pages**: Using the `npm run deploy` script
- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder after running `npm run build`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to the East African Statistics Institute (EASI).

## Contact

For questions or support, contact:
- Email: info@easi.ac.ug
- Phone: +256 414 542 803
- Website: https://easi.ac.ug