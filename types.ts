
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MetricCard {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
}

export interface AIResponse {
  content: string;
  suggestedActions: string[];
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export interface RegisteredUser {
  id: string;
  name: string;
  email: string;
  type?: string; 
  company?: string;
  timestamp: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'critical' | 'success';
  videoUrl?: string;
}

export interface PartnerRegistration extends RegisteredUser {
  type: string;
  website: string;
  message: string;
}

export interface MemberRegistration extends RegisteredUser {
  role: string;
  specialization: string;
  linkedin: string;
}

export interface InvestorRegistration extends RegisteredUser {
  type: string;
  portfolioSize: string;
  sectors: string[];
}
