export interface Programme {
  id: string;
  title: string;
  tag: string;
  tagline: string;
  description: string;
  fullOverview: string;
  modules: string[];
  keyOutcomes: string[];
  targetAudience: string;
  duration: string;
  image: string;
}

export interface AuditOption {
  text: string;
  points: number; // 1 to 4
}

export interface AuditQuestion {
  id: number;
  question: string;
  context: string;
  zone: string;
  options: AuditOption[];
}

export interface ZoneScore {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  status: 'Strong' | 'Developing' | 'Needs Focus';
  insight: string;
  recommendedProgrammeId: string;
}

export interface AuditResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: 'Leading Edge' | 'Strong Foundation' | 'Developing' | 'Performance Gaps';
  headline: string;
  summary: string;
  zoneBreakdown: ZoneScore[];
  completedAt: string;
  leadInfo?: {
    name: string;
    organisation: string;
    email: string;
    jobTitle?: string;
    phone?: string;
  };
}

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  challenge: string;
  teamSize?: string;
  message?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organisation: string;
  location: string;
  initials: string;
  metric?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientSector: string;
  location: string;
  challenge: string;
  solution: string;
  result: string;
}
