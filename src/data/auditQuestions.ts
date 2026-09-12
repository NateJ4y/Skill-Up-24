import { AuditQuestion, AuditResult, ZoneScore } from '../types';

export const auditQuestions: AuditQuestion[] = [
  {
    id: 1,
    question: 'When your managers face team conflict, how do they handle it?',
    context: 'Leadership & Conflict Resolution',
    zone: 'Leadership & Management',
    options: [
      { text: 'They avoid it and hope it resolves itself or blows over', points: 1 },
      { text: 'They immediately escalate it to HR or senior management', points: 2 },
      { text: 'They address it, but inconsistently depending on who is involved', points: 3 },
      { text: 'They handle it confidently, objectively, and constructively', points: 4 }
    ]
  },
  {
    id: 2,
    question: 'How would you describe accountability in your organisation?',
    context: 'Accountability & Ownership',
    zone: 'Culture & Accountability',
    options: [
      { text: 'People rarely own their results — blame and excuses spread easily', points: 1 },
      { text: 'Some individuals are accountable, but it is not a consistent standard', points: 2 },
      { text: 'There is reasonable accountability, but clear operational gaps exist', points: 3 },
      { text: 'Ownership and disciplined follow-through are strong across the board', points: 4 }
    ]
  },
  {
    id: 3,
    question: 'How satisfied are your customers with your frontline service delivery?',
    context: 'Customer Experience & Retention',
    zone: 'Customer Experience',
    options: [
      { text: 'We receive frequent, repeated complaints about service attitude and speed', points: 1 },
      { text: 'Complaints are occasional, but the exact same issues recur regularly', points: 2 },
      { text: 'Service is acceptable and polite, but not a competitive differentiator', points: 3 },
      { text: 'Our customers consistently praise the proactive, responsive experience', points: 4 }
    ]
  },
  {
    id: 4,
    question: 'How does your sales team perform against revenue targets?',
    context: 'Commercial Execution & Close Rates',
    zone: 'Sales Performance',
    options: [
      { text: 'We consistently miss monthly targets — it is a serious recurring problem', points: 1 },
      { text: 'Results are unpredictable — good months are followed by sharp drops', points: 2 },
      { text: 'We achieve targets most quarters, but know significant upside is missed', points: 3 },
      { text: 'The team consistently meets or exceeds targets through structured pipeline discipline', points: 4 }
    ]
  },
  {
    id: 5,
    question: 'How effectively do your teams collaborate across departmental boundaries?',
    context: 'Cross-Departmental Collaboration & Silos',
    zone: 'Team Collaboration',
    options: [
      { text: 'Rigid silos exist — teams protect their turf and rarely communicate well', points: 1 },
      { text: 'Collaboration happens, but it is friction-heavy and requires executive escalation', points: 2 },
      { text: 'Most teams collaborate reasonably well when working on urgent priorities', points: 3 },
      { text: 'Cross-functional collaboration and knowledge-sharing are a genuine strength', points: 4 }
    ]
  },
  {
    id: 6,
    question: 'How clear are employees about their priorities and expected performance standards?',
    context: 'Role Clarity & KPI Definition',
    zone: 'Leadership & Management',
    options: [
      { text: 'Expectations are vague — people interpret their responsibilities differently', points: 1 },
      { text: 'Job descriptions exist, but day-to-day priorities diverge from them', points: 2 },
      { text: 'Most employees know expectations, but certain metrics lack clarity', points: 3 },
      { text: 'Roles, scorecard KPIs, and daily success standards are crystal clear', points: 4 }
    ]
  },
  {
    id: 7,
    question: 'How is performance feedback delivered in your organisation?',
    context: 'Feedback & Coaching Cadence',
    zone: 'Culture & Accountability',
    options: [
      { text: 'Feedback is avoided — leaders struggle to give it and staff become defensive', points: 1 },
      { text: 'Feedback only occurs formally during annual or bi-annual reviews', points: 2 },
      { text: 'Managers give feedback periodically, but not always constructively', points: 3 },
      { text: 'Continuous, two-way constructive coaching is embedded in our daily culture', points: 4 }
    ]
  },
  {
    id: 8,
    question: 'How engaged and motivated are your employees in their daily responsibilities?',
    context: 'Morale, Energy & Retention',
    zone: 'Culture & Accountability',
    options: [
      { text: 'Disengagement is palpable — low energy, passive compliance, high absenteeism', points: 1 },
      { text: 'A few top performers drive results while many just go through the motions', points: 2 },
      { text: 'Staff are generally engaged, though periodic motivation dips occur', points: 3 },
      { text: 'Our teams demonstrate visible pride, proactive energy, and high commitment', points: 4 }
    ]
  },
  {
    id: 9,
    question: 'How does your leadership handle underperformance within teams?',
    context: 'Performance Discipline & Standards',
    zone: 'Development Readiness & Growth',
    options: [
      { text: 'Chronic underperformance is tolerated and rarely addressed directly', points: 1 },
      { text: 'It is addressed eventually, but inconsistently and usually too late', points: 2 },
      { text: 'We have a process, but managers sometimes delay difficult performance conversations', points: 3 },
      { text: 'We have a fair, structured process that identifies and addresses gaps early', points: 4 }
    ]
  },
  {
    id: 10,
    question: 'How aligned is your management team around business strategy and execution?',
    context: 'Strategic Leadership Cohesion',
    zone: 'Leadership & Management',
    options: [
      { text: 'Leaders operate with competing agendas and pull the business in different directions', points: 1 },
      { text: 'Strategy is agreed on paper, but departmental execution lacks coherence', points: 2 },
      { text: 'There is good alignment on top priorities, with slight execution drift', points: 3 },
      { text: 'The leadership team is tightly unified, with flawless cascade to frontline operations', points: 4 }
    ]
  },
  {
    id: 11,
    question: 'How does your organisation approach workforce training and capability building?',
    context: 'Training ROI & Transfer to Work',
    zone: 'Development Readiness & Growth',
    options: [
      { text: 'Training is viewed as an expense and rarely invested in systematically', points: 1 },
      { text: 'We conduct occasional ad-hoc sessions, but they are not linked to business KPIs', points: 2 },
      { text: 'We invest in workshops, but struggle to measure lasting behaviour change', points: 3 },
      { text: 'People development is strategic, outcome-oriented, and tracked against operational metrics', points: 4 }
    ]
  },
  {
    id: 12,
    question: 'How equipped are your people and systems to support sustained corporate growth?',
    context: 'Scalability & Operational Readiness',
    zone: 'Development Readiness & Growth',
    options: [
      { text: 'We struggle to scale — personnel and processes break whenever volume increases', points: 1 },
      { text: 'Growth occurs, but it introduces extreme burnout and recurring bottlenecks', points: 2 },
      { text: 'We can manage current growth, but key managerial capability gaps need resolving', points: 3 },
      { text: 'Our leaders, teams, and operating rhythms are primed for scalable expansion', points: 4 }
    ]
  }
];

export function calculateAuditResult(answers: Record<number, number>, leadInfo?: AuditResult['leadInfo']): AuditResult {
  const totalQuestions = auditQuestions.length; // 12
  const maxScore = totalQuestions * 4; // 48
  
  let totalScore = 0;
  auditQuestions.forEach(q => {
    totalScore += (answers[q.id] || 1);
  });

  // Calculate percentage: (totalScore / maxScore) * 100
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Category mapping
  const zoneDefinitions: { name: string; questionIds: number[]; recommendedProgrammeId: string }[] = [
    { name: 'Leadership & Management', questionIds: [1, 6, 10], recommendedProgrammeId: 'leadership' },
    { name: 'Culture & Accountability', questionIds: [2, 7, 8], recommendedProgrammeId: 'culture' },
    { name: 'Customer Experience', questionIds: [3], recommendedProgrammeId: 'customer-experience' },
    { name: 'Sales Performance', questionIds: [4], recommendedProgrammeId: 'sales' },
    { name: 'Team Collaboration', questionIds: [5], recommendedProgrammeId: 'team-performance' },
    { name: 'Development Readiness & Growth', questionIds: [9, 11, 12], recommendedProgrammeId: 'strategy' }
  ];

  const zoneBreakdown: ZoneScore[] = zoneDefinitions.map(def => {
    const zMax = def.questionIds.length * 4;
    const zScore = def.questionIds.reduce((sum, qId) => sum + (answers[qId] || 1), 0);
    const zPct = Math.round((zScore / zMax) * 100);

    let status: 'Strong' | 'Developing' | 'Needs Focus';
    let insight: string;

    if (zPct >= 75) {
      status = 'Strong';
      insight = 'Strong foundational capability. Maintain standards and elevate peer mentoring.';
    } else if (zPct >= 50) {
      status = 'Developing';
      insight = 'Inconsistent execution. Targeted skill-building will unlock significant performance gains.';
    } else {
      status = 'Needs Focus';
      insight = 'Critical vulnerability directly impacting output, customer trust, and team morale.';
    }

    return {
      name: def.name,
      score: zScore,
      maxScore: zMax,
      percentage: zPct,
      status,
      insight,
      recommendedProgrammeId: def.recommendedProgrammeId
    };
  });

  let level: AuditResult['level'];
  let headline: string;
  let summary: string;

  if (percentage >= 80) {
    level = 'Leading Edge';
    headline = 'High-Performance Foundation with Selective Optimisation Areas';
    summary = 'Your organisation demonstrates mature operational discipline and strong team habits. Prioritise advanced leadership coaching and cross-functional alignment to sustain competitive advantage.';
  } else if (percentage >= 65) {
    level = 'Strong Foundation';
    headline = 'Solid Operational Core with Identifiable Growth Levers';
    summary = 'Your teams perform well in core functions, but friction in delegation, feedback, or frontline consistency is suppressing full commercial potential.';
  } else if (percentage >= 45) {
    level = 'Developing';
    headline = 'Emerging Capability with Meaningful Performance Friction';
    summary = 'Noticeable performance gaps exist across key supervisory or customer-facing areas. Left unresolved, these gaps continue to cost customer retention and revenue.';
  } else {
    level = 'Performance Gaps';
    headline = 'Systemic Performance Constraints Requiring Immediate Action';
    summary = 'Critical vulnerabilities across supervisory accountability, cross-team silos, and motivation are actively constraining your business. A targeted, outcome-led intervention is strongly advised.';
  }

  return {
    totalScore,
    maxScore,
    percentage,
    level,
    headline,
    summary,
    zoneBreakdown,
    completedAt: new Date().toISOString(),
    leadInfo
  };
}
