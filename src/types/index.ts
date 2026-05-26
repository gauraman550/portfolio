export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}
