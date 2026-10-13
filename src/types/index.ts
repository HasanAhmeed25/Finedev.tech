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
