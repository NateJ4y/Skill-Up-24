import { AuditResult, ConsultationFormData } from '../types';

export interface ConsultationRequestInput {
  name: string;
  email: string;
  organisation: string;
  jobTitle?: string;
  phone?: string;
  programmeInterest?: string;
  notes?: string;
  source?: string;
}

export interface LeadSubmissionPayload {
  source: 'audit' | 'consultation';
  timestamp: string;
  lead: {
    name: string;
    email: string;
    phone?: string;
    organisation: string;
    role?: string;
  };
  auditData?: {
    totalScore: number;
    percentage: number;
    level: string;
    zoneScores: { zone: string; status: string; percentage: number }[];
  };
  consultationData?: {
    challenge?: string;
    teamSize?: string;
    message?: string;
    programmeInterest?: string;
  };
  systemMeta: {
    userAgent: string;
    referrer: string;
    url: string;
  };
}

export async function submitConsultationRequest(data: ConsultationRequestInput): Promise<{ success: boolean; referenceId: string }> {
  const referenceId = 'SK24-' + Math.floor(100000 + Math.random() * 900000);

  const payload: LeadSubmissionPayload = {
    source: 'consultation',
    timestamp: new Date().toISOString(),
    lead: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      organisation: data.organisation,
      role: data.jobTitle
    },
    consultationData: {
      challenge: data.programmeInterest,
      message: data.notes,
      programmeInterest: data.programmeInterest
    },
    systemMeta: {
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      url: typeof window !== 'undefined' ? window.location.href : ''
    }
  };

  try {
    if (typeof window !== 'undefined') {
      const stored = JSON.parse(localStorage.getItem('skillup24_consultations') || '[]');
      stored.push({ ...payload, referenceId });
      localStorage.setItem('skillup24_consultations', JSON.stringify(stored));
    }
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  return { success: true, referenceId };
}

export const leadService = {
  /**
   * Dispatches or stores an audit completion lead.
   */
  async submitAuditLead(result: AuditResult): Promise<{ success: boolean; leadId: string }> {
    const leadId = 'AUD-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    
    const payload: LeadSubmissionPayload = {
      source: 'audit',
      timestamp: new Date().toISOString(),
      lead: {
        name: result.leadInfo?.name || 'Anonymous Leader',
        email: result.leadInfo?.email || '',
        organisation: result.leadInfo?.organisation || 'Undisclosed',
        phone: result.leadInfo?.phone,
        role: result.leadInfo?.jobTitle
      },
      auditData: {
        totalScore: result.totalScore,
        percentage: result.percentage,
        level: result.level,
        zoneScores: result.zoneBreakdown.map((z) => ({
          zone: z.name,
          status: z.status,
          percentage: z.percentage
        }))
      },
      systemMeta: {
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        url: typeof window !== 'undefined' ? window.location.href : ''
      }
    };

    try {
      if (typeof window !== 'undefined') {
        const stored = JSON.parse(localStorage.getItem('skillup24_leads') || '[]');
        stored.push({ ...payload, leadId });
        localStorage.setItem('skillup24_leads', JSON.stringify(stored));
        localStorage.setItem('skillup24_last_audit', JSON.stringify({ ...result, leadId }));
      }
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    return { success: true, leadId };
  },

  /**
   * Submits a consultation booking enquiry
   */
  async submitConsultation(formData: ConsultationFormData): Promise<{ success: boolean; referenceId: string }> {
    return submitConsultationRequest({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      organisation: formData.organisation,
      jobTitle: formData.role,
      phone: formData.phone,
      programmeInterest: formData.challenge,
      notes: formData.message
    });
  },

  /**
   * Helper to validate business email
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
};
