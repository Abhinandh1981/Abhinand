export interface NavItem {
  label: string;
  href: string;
}

export interface QuickFact {
  label: string;
  value: string;
  iconName: string;
}

export interface Skill {
  name: string;
  level: string; // e.g. "Primary", "Learning", "Familiar"
  category: 'core' | 'ai-ml' | 'web' | 'tools';
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: string;
  year: string;
  githubUrl: string;
  liveUrl: string;
  previewGradient: string;
  featuredMetric?: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  tags: string[];
  badge?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    branch: string;
    college: string;
    location: string;
    status: string;
    email: string;
    shortBio: string;
    extendedBio: string[];
    headlineWords: string[];
    overlappingTags: string[];
  };
  navigation: NavItem[];
  quickFacts: QuickFact[];
  skills: Skill[];
  projects: Project[];
  journey: JourneyMilestone[];
  socials: SocialLink[];
  marqueeItems: string[];
}

