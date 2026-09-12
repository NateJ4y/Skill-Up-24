import { Programme } from '../types';

export const programmesData: Programme[] = [
  {
    id: 'leadership',
    title: 'Leadership Performance',
    tag: 'Leadership Performance',
    tagline: 'Turn supervisors into confident, accountable leaders',
    description: 'Leadership training that builds practical skills — motivating teams, handling conflict, and driving accountability — not just theory.',
    fullOverview: 'Designed specifically for frontline supervisors, emerging managers, and department heads who need to transition from technical individual contributors to credible, inspiring leaders. We replace theoretical slides with real workplace scenarios, difficult conversation simulations, and direct accountability structures.',
    modules: [
      'Transitioning from Peer to Respected Leader',
      'Constructive Conflict Management & Difficult Conversations',
      'Delegation, Coaching & Sustainable Follow-Through',
      'Driving Team Accountability Without Micromanagement',
      'Managing Multi-Generational & Diverse Teams'
    ],
    keyOutcomes: [
      'Measurable reduction in unresolved team grievances',
      'Enhanced confidence in holding direct reports accountable',
      'Clearer operational KPI ownership across departmental managers'
    ],
    targetAudience: 'Supervisors, Team Leads, Department Heads & Newly Promoted Managers',
    duration: '2 to 3-day intensive workshop or 6-week phased intervention with coaching',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&fit=crop&crop=center'
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience (CX)',
    tag: 'Customer Experience',
    tagline: 'Fix service problems before they cost you customers',
    description: 'CX training that changes how your frontline team thinks and behaves — reducing complaints and protecting your reputation.',
    fullOverview: 'Frontline service is the visible frontline of your brand. When customer service breaks down, revenue and retention bleed quietly. This intervention shifts service delivery from reactive compliance to proactive empathy, dispute de-escalation, and high-standard customer journey touchpoints.',
    modules: [
      'Customer Psychology & Empathy in High-Pressure Environments',
      'Service Recovery & De-escalating Angry Customers',
      'Professional Brand Representation & Cross-Channel Etiquette',
      'Active Listening & First-Contact Resolution Techniques',
      'Internal Customer Service & Inter-Departmental Alignment'
    ],
    keyOutcomes: [
      'Demonstrated reduction in repeated customer complaints',
      'Higher Net Promoter Score (NPS) and customer retention',
      'Consistent, polished customer engagement across branches'
    ],
    targetAudience: 'Frontline Staff, Customer Care Agents, Branch Officers & Relationship Managers',
    duration: '2-day interactive workshop with ongoing mystery audit checkpoints',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop&crop=center'
  },
  {
    id: 'sales',
    title: 'Sales Performance',
    tag: 'Sales Performance',
    tagline: 'Equip your team to sell with confidence and consistency',
    description: 'Sales training that gives your team a method, stronger objection-handling, and the mindset to close — not just pitch.',
    fullOverview: 'B2B and retail sales professionals face sophisticated buyers, price pressure, and elongated decision cycles. SkillUp24 instills a consultative selling methodology that focuses on uncovering true customer pain points, positioning value over discounting, and executing disciplined pipeline management.',
    modules: [
      'Consultative Selling: Asking High-Value Diagnostic Questions',
      'Overcoming Price Resistance & Value Negotiation',
      'Handling Common Industry Objections with Poise',
      'Effective Closing Strategies & Contract Finalisation',
      'Account Management & Maximising Client Lifetime Value'
    ],
    keyOutcomes: [
      'Shorter sales cycle duration from lead to closed contract',
      'Improved win rates without sacrificing margin to discounts',
      'Disciplined qualification and proactive pipeline hygiene'
    ],
    targetAudience: 'B2B Sales Executives, Key Account Managers, Business Development Officers',
    duration: '2-day workshop + 30-day practical pipeline application coaching',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop&crop=center'
  },
  {
    id: 'team-performance',
    title: 'Team Performance',
    tag: 'Team Performance',
    tagline: 'Build teams that communicate, collaborate and deliver',
    description: 'Team-effectiveness programmes that improve how people manage time, give feedback, and hold each other accountable.',
    fullOverview: 'Silos, miscommunication, and passive-aggressive friction drain corporate momentum. Our team effectiveness workshops foster psychological safety, mutual trust, and practical protocols for cross-functional collaboration, ensuring deliverables move across departments without friction.',
    modules: [
      'Breaking Down Departmental Silos & Rebuilding Trust',
      'High-Impact Peer Feedback & Emotional Intelligence',
      'Effective Meeting Governance & Action Tracking',
      'Time Optimisation & Priority Alignment',
      'Collective Problem-Solving Under Pressure'
    ],
    keyOutcomes: [
      'Faster cross-departmental project turnaround times',
      'Elimination of finger-pointing and defensive communication',
      'A culture of shared accountability for organizational objectives'
    ],
    targetAudience: 'Intact Project Teams, Inter-Departmental Units & Operations Crews',
    duration: '1 to 2-day team immersion and team charter alignment',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80&fit=crop&crop=center'
  },
  {
    id: 'culture',
    title: 'Workplace Culture',
    tag: 'Workplace Culture',
    tagline: 'Build a culture of accountability and engagement',
    description: 'Culture interventions that shift default behaviours, improve how feedback is given, and build clarity around expectations.',
    fullOverview: 'Culture is not slogans on the wall; it is what people do when leadership is not watching. We work with leadership teams to define, calibrate, and reinforce observable daily behaviours that drive ethical rigor, accountability, high engagement, and mutual respect.',
    modules: [
      'Translating Corporate Values into Everyday Observable Behaviors',
      'Building Psychological Safety & Speaking Up Without Fear',
      'Institutionalizing Recognition, Appreciation & Meritocracy',
      'Healthy Disagreement & Alignment Execution Frameworks',
      'Sustaining Culture During Growth & Change'
    ],
    keyOutcomes: [
      'Higher employee engagement and reduced voluntary turnover',
      'Consistent behavioral standards modelled from top to bottom',
      'Proactive identification of workplace friction points'
    ],
    targetAudience: 'Senior Executives, HR Leaders, People Champions & Company-wide Rollouts',
    duration: 'Custom multi-stage cultural transformation initiative (1 to 3 months)',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop&crop=center'
  },
  {
    id: 'strategy',
    title: 'Strategy & Org. Development',
    tag: 'Strategy & Org. Development',
    tagline: 'Align people, strategy and execution around growth',
    description: 'Organisational development consulting that connects your business strategy to the capability of your people.',
    fullOverview: 'Great strategies fail when organizational capability and organizational design are misaligned with market realities. We facilitate executive retreats and structural reviews to bridge the gap between strategic vision and operational execution capability across Southern Africa.',
    modules: [
      'Strategic Alignment: Cascading Goals from Boardroom to Frontline',
      'Organisational Capability & Competency Gap Analysis',
      'Performance Management Systems & KPI Rationalisation',
      'Change Management & Transition Leadership',
      'Succession Planning & Talent Pipeline Architecture'
    ],
    keyOutcomes: [
      'Clarity of focus: elimination of conflicting organizational priorities',
      'Direct link between employee performance metrics and strategic growth',
      'Robust executive alignment and execution cadence'
    ],
    targetAudience: 'CEOs, Board Members, C-Suite Leaders & Strategy Directors',
    duration: 'Executive Retreat (2 days) + 90-day execution milestone reviews',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&fit=crop&crop=center'
  }
];

export const programmes = programmesData;
