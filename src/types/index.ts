export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  description: string;
}

export interface InquirySubmissionResponse {
  success: boolean;
  message?: string;
  referenceId?: string;
  submittedAt?: string;
  error?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  accentColor: 'violet' | 'cyan';
}

export interface SolutionItem {
  id: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  capabilities: string[];
  tag: string;
  accent: 'violet' | 'cyan';
}

export interface ProcessStepItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export interface WhyUsPillar {
  id: string;
  title: string;
  headline: string;
  description: string;
  metricLabel: string;
  accent: 'violet' | 'cyan';
}

export interface TechItem {
  name: string;
  category: string;
  tag: string;
}

export interface TechCategory {
  category: string;
  description: string;
  technologies: TechItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  techStack: string[];
  status: 'Production Architecture' | 'Active Release' | 'Case Study' | 'Studio Framework';
  liveUrl?: string;
  githubUrl?: string;
  badge: string;
  metrics?: { label: string; value: string }[];
  deliverables: string[];
  layoutVariant: 'featured-large' | 'split-detail' | 'card';
}
