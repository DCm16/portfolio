import type { Skill, Service, Achievement, SocialLink, ContactInfo, NavItem, Stat } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS: Stat[] = [
  { value: "3+", label: "Years exp" },
  { value: "40+", label: "Projects" },
  { value: "99%", label: "Client sat." },
];

export const TYPED_PHRASES: string[] = [
  "Full-Stack Developer.",
  "React Specialist.",
  "UI/UX Craftsman.",
  "Next.js Expert.",
  "Open Source Builder.",
];

export const SKILLS: Skill[] = [
  { name: "HTML / CSS", icon: "🌐", percentage: 95, category: "frontend" },
  { name: "JavaScript", icon: "⚡", percentage: 90, category: "frontend" },
  { name: "TypeScript", icon: "🔷", percentage: 85, category: "frontend" },
  { name: "React", icon: "⚛️", percentage: 90, category: "frontend" },
  { name: "Next.js", icon: "▲", percentage: 85, category: "frontend" },
  { name: "Node.js", icon: "🟢", percentage: 80, category: "backend" },
  { name: "Tailwind CSS", icon: "🎨", percentage: 92, category: "frontend" },
  { name: "GitHub", icon: "🐙", percentage: 88, category: "tools" },
  { name: "UI/UX Design", icon: "✨", percentage: 78, category: "design" },
  { name: "SQL / NoSQL", icon: "🗄️", percentage: 75, category: "backend" },
];

export const SERVICES: Service[] = [
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Modern, performant websites and web apps built with Next.js, React, and cutting-edge tooling. SEO-optimized and production-ready.",
    cta: "Get started",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Interfaces that users love — intuitive, accessible, and visually stunning. From wireframes to polished prototypes in Figma.",
    cta: "See examples",
  },
  {
    icon: "📁",
    title: "Portfolio Creation",
    description:
      "Stand-out developer portfolios that showcase your work, skills, and personality. Tailored to make recruiters stop scrolling.",
    cta: "View samples",
  },
  {
    icon: "🔧",
    title: "Maintenance & Fixes",
    description:
      "Bug hunting, performance audits, security patches, and ongoing support. I keep your projects healthy and up-to-date.",
    cta: "Let's talk",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: "🏆",
    title: "Best Web App Award",
    description: "Regional hackathon, 1st place — 48hr build of a real-time collaboration tool",
    year: "2024",
    variant: "gold",
  },
  {
    icon: "📜",
    title: "AWS Certified Developer",
    description: "Associate-level certification in cloud architecture and deployment",
    year: "2024",
    variant: "blurple",
  },
  {
    icon: "⭐",
    title: "500+ GitHub Stars",
    description: "Open source CLI tool for automated code review — community favorite",
    year: "2023",
    variant: "green",
  },
  {
    icon: "🎖️",
    title: "Google Developer Expert",
    description: "Recognized expert in Web Technologies and Angular ecosystems",
    year: "2023",
    variant: "pink",
  },
  {
    icon: "🥇",
    title: "Hackathon Champion",
    description: "MLH global hackathon winner — AI-powered accessibility tool",
    year: "2022",
    variant: "gold",
  },
  {
    icon: "🎓",
    title: "CS Dean's List",
    description: "Academic excellence — top 5% of graduating class",
    year: "2022",
    variant: "blurple",
  },
  {
    icon: "🚀",
    title: "First SaaS Launch",
    description: "Launched a developer productivity tool with 1,200 users at launch",
    year: "2023",
    variant: "green",
  },
  {
    icon: "💎",
    title: "40 Projects Delivered",
    description: "Milestone: 40 client projects shipped — 100% on-time, 99% satisfaction",
    year: "2024",
    variant: "pink",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", icon: "Github", href: "https://github.com" },
  { label: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com" },
  { label: "Twitter", icon: "Twitter", href: "https://twitter.com" },
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: "📧", label: "Email", value: "alex@alexdev.io" },
  { icon: "📱", label: "Phone", value: "+1 (555) 000-0000" },
  { icon: "💬", label: "Discord", value: "AlexDev#0001" },
  { icon: "🐙", label: "GitHub", value: "github.com/alexdev" },
];
