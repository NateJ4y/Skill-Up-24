import { Testimonial, CaseStudy } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    quote: 'Our management team came out of the programme with a completely different understanding of what it means to lead. Productivity metrics improved noticeably within three months — and the atmosphere across the business shifted.',
    author: 'Nomsa M.',
    role: 'HR Director',
    organisation: 'Financial Services Group',
    location: 'Harare, Zimbabwe',
    initials: 'NM',
    metric: '+28% Managerial Accountability Index'
  },
  {
    id: 't2',
    quote: 'We were dealing with the same customer-service complaints over and over. The SkillUp24 CX programme gave our frontline team a real mindset shift. Complaints dropped by around 40% in the quarter after delivery.',
    author: 'Tatenda K.',
    role: 'Operations Manager',
    organisation: 'Leading Hospitality Group',
    location: 'Victoria Falls & Harare',
    initials: 'TK',
    metric: '40% Drop in Repeat Customer Grievances'
  },
  {
    id: 't3',
    quote: 'They didn\'t come with a generic catalogue slide deck. They took time to understand our pipeline bottleneck, designed a programme specific to our sales context, and our close rate improved.',
    author: 'Chiedza B.',
    role: 'Head of Sales',
    organisation: 'Commercial Retail & Distribution',
    location: 'Harare, Zimbabwe',
    initials: 'CB',
    metric: '+22% Pipeline Conversion'
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Transforming Branch Supervision in Retail Banking',
    clientSector: 'Banking & Financial Services',
    location: 'Zimbabwe & Southern Africa',
    challenge: 'Branch supervisors had technical banking competence but avoided holding staff accountable for service delays, resulting in customer churn and branch bottleneck escalations.',
    solution: 'A 6-week experiential leadership and conflict resolution journey featuring real customer escalation simulations, peer coaching, and structured weekly accountability checkpoints.',
    result: 'Branch resolution speed improved by 34%, internal escalations decreased by 42%, and supervisor confidence scores doubled.'
  },
  {
    id: 'cs-2',
    title: 'Customer Experience Transformation for Hospitality Group',
    clientSector: 'Hospitality & Tourism',
    location: 'Harare & Regional Resorts',
    challenge: 'Frontline guest service consistency varied sharply between shifts, generating repeat complaints on review channels and impacting repeat corporate bookings.',
    solution: 'Comprehensive CX mindset intervention, de-escalation protocols, and bespoke frontline service standards manual aligned with premier African hospitality benchmarks.',
    result: 'Repeat guest complaints dropped by 40% in Q1 post-delivery; guest review satisfaction scores rose from 3.6 to 4.7 stars.'
  },
  {
    id: 'cs-3',
    title: 'Consultative B2B Sales Re-tooling for Industrial Supplier',
    clientSector: 'Manufacturing & Distribution',
    location: 'Harare & Bulawayo',
    challenge: 'Sales representatives competed almost purely on price discounts, eroding corporate gross margin and failing to uncover high-margin recurring service opportunities.',
    solution: 'Outcome-driven consultative sales methodology: diagnostic probing, value-based proposition modeling, and executive objection handling.',
    result: 'Average contract deal value increased by 26% within 120 days while discount concessions dropped by more than half.'
  }
];

export const industriesData = [
  {
    name: 'Banking & Finance',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80&fit=crop&crop=center',
    tag: 'Fintech & Retail Banks',
    challenge: 'High-compliance pressure, supervisory accountability, and rapid customer channel shifts.',
    recommendedProgramme: 'Leadership Performance & Customer Experience'
  },
  {
    name: 'Retail & Distribution',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80&fit=crop&crop=center',
    tag: 'FMCG & Chain Stores',
    challenge: 'Frontline service consistency, shrinkage prevention, and retail sales upselling.',
    recommendedProgramme: 'Customer Experience & Sales Performance'
  },
  {
    name: 'Manufacturing & Industrial',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&fit=crop&crop=center',
    tag: 'Production & Logistics',
    challenge: 'Shop-floor supervisory leadership, cross-shift communication, and safety accountability.',
    recommendedProgramme: 'Team Performance & Leadership'
  },
  {
    name: 'Hospitality & Tourism',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80&fit=crop&crop=center',
    tag: 'Hotels, Lodges & Venues',
    challenge: 'Guest experience excellence, staff turnover, and service recovery under pressure.',
    recommendedProgramme: 'Customer Experience (CX)'
  },
  {
    name: 'Healthcare & Pharmaceuticals',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop&crop=center',
    tag: 'Clinics & Medical Supply',
    challenge: 'High emotional pressure, inter-professional collaboration, and patient-centric communication.',
    recommendedProgramme: 'Workplace Culture & Team Collaboration'
  },
  {
    name: 'Telecommunications & Tech',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&fit=crop&crop=center',
    tag: 'Telecoms & ICT',
    challenge: 'Rapid organizational scale, technical-to-managerial transitions, and enterprise solution sales.',
    recommendedProgramme: 'Sales Performance & Strategy & Org Dev'
  }
];

export const allIndustryTags = [
  'Retail', 'Hospitality', 'Banking & Finance', 'Insurance', 'Manufacturing',
  'Telecoms', 'Healthcare', 'Education', 'Logistics & Supply Chain', 'NGOs & Aid Sector',
  'Professional Services', 'Government & State Parastatals'
];

export const geographicPresence = [
  {
    region: 'Zimbabwe',
    badge: 'Primary Hub',
    detail: 'Harare Headquarters, Bulawayo branch coverage, and nationwide corporate interventions.',
    coverage: 'In-person facilitation, diagnostic audits, and executive retreats across all provinces.'
  },
  {
    region: 'Southern Africa',
    badge: 'Regional Network',
    detail: 'Active client partnerships across Zambia, Botswana, South Africa, and Mozambique.',
    coverage: 'Regional multi-site rollouts and cross-border leadership team alignments.'
  },
  {
    region: 'Africa-Wide',
    badge: 'Continental Delivery',
    detail: 'Facilitating corporate and NGO leadership programmes across East and West Africa.',
    coverage: 'Bespoke corporate capability frameworks tailored to local regulatory and cultural contexts.'
  },
  {
    region: 'International / Remote',
    badge: 'Virtual & Hybrid',
    detail: 'Live interactive virtual workshops, executive coaching, and remote LMS consulting.',
    coverage: 'Timezone-flexible digital delivery platforms with high participant engagement.'
  }
];
