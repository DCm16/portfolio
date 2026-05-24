# Discord Dark Dev Portfolio

A premium Discord-inspired developer portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** — App Router, Server Components
- **TypeScript** — Strict type safety
- **Tailwind CSS v4** — Utility-first styling with custom Discord design tokens
- **Framer Motion** — Smooth animations and scroll reveals
- **Lucide React** — Icon library

## Project Structure

```
/app            → Next.js App Router pages + layouts
/components     → Feature-based component folders
  /navigation   → Sticky navbar with mobile drawer
  /hero         → Hero section with typed animation
  /about        → About section with Discord profile card
  /skills       → Animated skill cards + progress bars
  /services     → Service cards with hover effects
  /achievements → Achievement cards with badges
  /contact      → Contact form + info
  /footer       → Footer component
  /shared       → Reusable FadeIn, SectionWrapper, SectionHeader
/constants      → All data (skills, services, achievements, etc.)
/types          → TypeScript interfaces
/hooks          → useTyped, useScrollSpy
/lib            → cn() utility
```

## Customization

**Personal info** → Edit `/constants/index.ts` to update name, skills, services, achievements, and contact details.

**Colors** → Discord design tokens live in `/app/globals.css` under `@theme`.

**Fonts** → Change in `/app/layout.tsx` (Google Fonts import + CSS variables).

## Build for Production

```bash
npm run build
npm start
```
