# Anshumaan Sharma Portfolio Website - Technical Documentation

This document provides a comprehensive overview of the portfolio website's structure, components, and data flow.

## Project Overview

This is a modern portfolio website for Anshumaan Sharma, a Software Engineer, built using Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. The site features a responsive design with interactive UI components, animations, and seamless navigation.

## Tech Stack

- **Framework**: Next.js 15.4.4
- **UI Library**: React 19.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.11
- **Icons**: React Icons 5.5.0, @tabler/icons-react 3.34.1
- **Fonts**: Geist Sans and Geist Mono (from Google Fonts)

## Project Structure

```
anshumaan/
├── public/                  # Static assets
│   ├── images/              # Image assets
│   │   └── Profilecard.PNG  # Author profile image
│   ├── Resume.pdf           # Downloadable resume
│   └── [various icons]      # SVG icons
├── src/                     # Source code
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page component
│   │   └── navbar-fix.css   # Navbar-specific styles
│   ├── components/          # React components
│   │   ├── Blog.tsx         # Blog section component
│   │   ├── Carousel.tsx     # Services carousel component
│   │   ├── ConnectSection.tsx # Contact form component
│   │   ├── Footer.tsx       # Site footer component
│   │   ├── Header.tsx       # Site header component
│   │   ├── ProfileCard.tsx  # Profile card component
│   │   ├── Projects.tsx     # Projects showcase component
│   │   ├── StatPanel.tsx    # Statistics panel component
│   │   ├── Technologies.tsx # Tech stack component
│   │   ├── Testimonials.tsx # Testimonials component
│   │   └── ui/              # Reusable UI components
│   │       ├── 3d-card.tsx  # 3D interactive card
│   │       ├── animated-testimonials.tsx # Animated testimonials
│   │       ├── apple-cards-carousel.tsx # Custom carousel
│   │       ├── hover-effect.tsx # Hover animation effect
│   │       └── navbar-menu.tsx # Navigation menu
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions
└── [config files]           # Project configuration files
```

## Component Breakdown and Data Flow

### Key Components

1. **page.tsx**
   - Main entry point of the application
   - Manages global state for the form using `useState`
   - Handles callbacks for social links, resume download, and contact form
   - Orchestrates component communication (e.g., Carousel to ConnectSection)

2. **Header.tsx**
   - Contains the navigation bar
   - Uses `useState` to manage dropdown menu states
   - Implements smooth scrolling to sections

3. **Carousel.tsx (Services Section)**
   - Showcases services with interactive cards
   - Communicates with parent (page.tsx) via `onStartProject` callback
   - Uses custom Card components from apple-cards-carousel.tsx

4. **ConnectSection.tsx**
   - Contact form with tab switching between contact form and social links
   - Receives pre-filled message data from page.tsx
   - Handles form submissions

5. **StatPanel.tsx**
   - Displays professional statistics (projects, experience, etc.)
   - Features animated counters and icons

6. **Blog.tsx**
   - Displays blog posts with links to Medium articles
   - Features BlogCard sub-component with image, title, and excerpt
   - Links to author's Medium profile

7. **Projects.tsx**
   - Showcases portfolio projects with interactive 3D cards
   - Features filtering and categorization

### UI Components

1. **navbar-menu.tsx**
   - Implements dropdown navigation with responsive design
   - Uses Framer Motion for animations
   - Conditionally shows/hides dropdowns based on screen size for Services and Blog

2. **apple-cards-carousel.tsx**
   - Custom carousel implementation
   - Features scrolling controls and responsive layout
   - Used by Carousel.tsx for service display

### Data Flow

1. **User Interaction with Services**
   - User clicks "Start a Project" in Carousel.tsx
   - `handleStartProject` callback passes service info to page.tsx
   - page.tsx updates form state with `setFormState`
   - page.tsx scrolls to ConnectSection using ref
   - ConnectSection receives pre-filled message via props

2. **Navigation and Routing**
   - Header.tsx handles navigation item clicks
   - On mobile: Services and Blog items scroll directly to their sections
   - On desktop: Navigation items show dropdown menus
   - Smooth scrolling implemented via the `scrollToSection` function

3. **Form Handling**
   - ConnectSection maintains its own form state
   - Initial message can be pre-filled from page.tsx
   - Form validation and submission handled within ConnectSection

4. **Responsive Adaptations**
   - Different layouts for mobile/desktop controlled via Tailwind classes
   - Conditional rendering (e.g., StatPanel shown inline on mobile)
   - Navbar behavior changes based on screen size
   - Special handling for mobile dropdown positioning

## Key Features

1. **Interactive UI Components**
   - 3D cards with hover effects
   - Animated statistics and counters
   - Smooth scrolling navigation
   - Custom carousel with navigation controls

2. **Responsive Design**
   - Mobile-first approach with tailored experiences
   - Different layouts and component arrangements based on screen size
   - Touch-friendly interactive elements

3. **Optimized Performance**
   - Next.js app router for efficient page loading
   - Component-based architecture for code reusability
   - Modern React practices (hooks, functional components)

4. **Visual Appeal**
   - Consistent dark theme with accent colors
   - Subtle animations and transitions
   - Professional typography with Geist fonts
   - Visual hierarchy emphasizing important information

## Potential Enhancements

1. **Performance Optimization**
   - Implement image optimization with next/image for blog thumbnails
   - Add lazy loading for below-the-fold components
   - Implement code splitting for larger components

2. **Accessibility Improvements**
   - Enhance keyboard navigation
   - Add ARIA attributes where missing
   - Improve color contrast for better readability

3. **Additional Features**
   - Add a dedicated blog page with filtering
   - Implement a dark/light theme toggle
   - Add more interactive project showcases
   - Implement a newsletter subscription feature

## Deployment

The website is built for deployment on Vercel, leveraging Next.js's optimized build process. The production build includes:

- Server-side rendering for improved SEO
- Optimized asset delivery
- Fast page transitions
- Responsive designs for all device sizes
