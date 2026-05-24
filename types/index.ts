export interface Skill {
  name: string;
  icon: string;
  percentage: number;
  category: "frontend" | "backend" | "tools" | "design";
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  cta: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  year: string;
  variant: "gold" | "blurple" | "green" | "pink";
}

export interface SocialLink {
  label: string;
  icon: string;
  href: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}
