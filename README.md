# Gelephu Mindfulness City (GMC)

A modern, animated landing page for Gelephu Mindfulness City, built with React and GSAP. This project showcases the vision of GMC through engaging animations and a clean, responsive interface.

![GMC Preview](public/docs/screenshots/preview.png)

## Overview

Gelephu Mindfulness City is an ambitious urban development project representing the future of Bhutan. This landing page serves as the digital gateway for visitors to understand the project's vision, sustainability goals, and key initiatives.

### Why This Project?

The current GMC website doesn't reflect the modern, forward-thinking vision of what GMC represents. As a project that embodies Bhutan's future, it deserves a digital presence that matches its innovative spirit. This reimagined landing page aims to bridge that gap with:

- Modern, engaging animations that bring the vision to life
- Clean, contemporary design language
- Enhanced user experience through smooth interactions
- A digital presence worthy of Bhutan's future

**Current Status:** The project currently focuses on building a comprehensive, animation-rich home page that effectively communicates GMC's mission and values to first-time visitors.

**Future Plans:** Additional pages (About, Projects, Contact, etc.) will be developed to create a full-featured website experience.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework for building component-based architecture |
| **GSAP 3.12** | Professional-grade animation library for scroll-triggered effects and transitions |
| **Lenis** | Smooth scroll library for enhanced user experience |
| **Tailwind CSS 4** | Utility-first CSS framework for rapid UI development |
| **Vite** | Fast build tool and development server |
| **React Router 7** | Client-side routing (prepared for future pages) |

## Key Features

- **Smooth Scroll Experience**: Implemented with Lenis for buttery-smooth scrolling
- **GSAP Animations**: Advanced scroll-triggered animations and visual effects
  - Animated underlines for section headings
  - Category badges with dynamic animations
  - Parallax effects and fade transitions
  - Interactive element animations on scroll
- **Responsive Design**: Mobile-first approach ensuring optimal viewing on all devices
- **Modern Component Architecture**: Modular, reusable React components
- **Performance Optimized**: Built with Vite for fast HMR and optimized production builds

## Project Structure

```
gmc/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── assets/         # Images, fonts, and static assets
│   └── App.jsx         # Main application component
├── public/             # Public assets
└── package.json        # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gmc.git

# Navigate to the project directory
cd gmc

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Development Notes

### Learning GSAP

This project serves as a hands-on exploration of GSAP (GreenSock Animation Platform). Key learning areas include:

- **ScrollTrigger**: Implementing scroll-based animations
- **Timeline Animations**: Coordinating multiple animations
- **Easing Functions**: Creating natural motion
- **Performance**: Optimizing animations for smooth 60fps rendering

### Code Quality

- **ESLint**: Configured for React best practices
- **Prettier**: Code formatting with Tailwind CSS plugin
- **Component Patterns**: Following React 19 best practices

## Support

If you like this project and appreciate the effort to create a modern digital presence for GMC, please consider giving it a star ⭐ on GitHub. It helps motivate continued development and improvements!

## Roadmap

- [x] Home page with core sections
- [x] Smooth scroll implementation
- [x] GSAP scroll animations
- [x] News section with category badges
- [x] Sustainability section with visual effects
- [x] FAQ section
- [ ] About page
- [ ] Projects/Initiatives page
- [ ] Contact page
- [ ] Blog/News page
- [ ] Enhanced mobile experience
- [ ] Dark mode support

## License

This project is for educational and portfolio purposes.

## Acknowledgments

- Inspired by the official Gelephu Mindfulness City initiative
- Built as a learning project to master GSAP animations
- Thanks to the React and GSAP communities for excellent documentation
