import React, { useState, useEffect } from 'react';
import {
  User,
  Mail,
  Building2,
  Briefcase,
  Phone,
  Compass,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Check,
  RotateCcw
} from 'lucide-react';
import { AuditResult } from '../types';
import { submitConsultationRequest } from '../services/leadService';

interface ContactSectionProps {
  preselectedProgramme?: string;
  auditResult?: AuditResult | null;
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedProgramme,
  auditResult,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    role: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Prefill from selected programme
  useEffect(() => {
    if (preselectedProgramme) {
      const lower = preselectedProgramme.toLowerCase();
      let interestKey = 'other';
      if (lower.includes('lead') || lower.includes('supervis')) interestKey = 'leadership';
      else if (lower.includes('custom') || lower.includes('cx')) interestKey = 'cx';
      else if (lower.includes('sale')) interestKey = 'sales';
      else if (lower.includes('team')) interestKey = 'team';
      else if (lower.includes('cultur')) interestKey = 'culture';
      else if (lower.includes('strat')) interestKey = 'strategy';

      setFormData((prev) => ({
        ...prev,
        interest: interestKey,
        message: prev.message || `We are interested in discussing the "${preselectedProgramme}" programme.`
      }));
    }
  }, [preselectedProgramme]);

  // Prefill from Audit Result
  useEffect(() => {
    if (auditResult) {
      setFormData((prev) => ({
        ...prev,
        name: auditResult.leadInfo?.name || prev.name,
        email: auditResult.leadInfo?.email || prev.email,
        organisation: auditResult.leadInfo?.organisation || prev.organisation,
        interest: 'audit-followup',
        message:
          prev.message ||
          `We completed the Workplace Performance Audit (Score: ${auditResult.percentage}%, Category: ${auditResult.headline}). We would like to discuss our key focus areas and recommended interventions.`
      }));
    }
  }, [auditResult]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldMap: Record<string, string> = {
      'cf-name': 'name',
      'cf-email': 'email',
      'cf-org': 'organisation',
      'cf-role': 'role',
      'cf-phone': 'phone',
      'cf-interest': 'interest',
      'cf-message': 'message'
    };
    const key = fieldMap[id] || id;
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.organisation.trim()) {
      setErrorMsg('Please complete all required fields (Name, Work Email, and Organisation).');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitConsultationRequest({
        name: formData.name.trim(),
        email: formData.email.trim(),
        organisation: formData.organisation.trim(),
        jobTitle: formData.role.trim(),
        phone: formData.phone.trim(),
        programmeInterest: formData.interest,
        notes: formData.message.trim(),
        source: auditResult ? 'Audit Follow-up' : 'Website Contact Form'
      });

      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch {
      setErrorMsg('Unable to submit enquiry. Please try again or email us directly at info@skillup24.co.zw');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact" style={{ padding: '90px 0', background: 'var(--ice)' }}>
      <div className="container">
        <div className="contact-grid" style={{ alignItems: 'start' }}>
          {/* Left Column: Context & Contact Details */}
          <div className="contact-info">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#18933E] bg-[#EBF8EF] border border-[#22B24C]/25 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Advisory Access
            </span>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', lineHeight: 1.2, fontWeight: 800, color: 'var(--navy)', marginBottom: '16px' }}>
              Let&apos;s talk about what your team needs
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '32px' }}>
              Whether you have a specific programme in mind or just know something in team performance needs to improve — we&apos;re ready to listen and build a bespoke solution.
            </p>

            <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <div className="cd-item flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-xs">
                <div className="cd-icon w-10 h-10 rounded-lg bg-[#EBF8EF] text-[#22B24C] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--navy)' }}>Office &amp; Hub</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--slate)' }}>Harare, Zimbabwe · Programmes Delivered Africa-Wide</span>
                </div>
              </div>

              <div className="cd-item flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-xs">
                <div className="cd-icon w-10 h-10 rounded-lg bg-[#EBF8EF] text-[#22B24C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--navy)' }}>Email Inquiries</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--slate)' }}>info@skillup24.co.zw</span>
                </div>
              </div>

              <div className="cd-item flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-xs">
                <div className="cd-icon w-10 h-10 rounded-lg bg-[#EBF8EF] text-[#22B24C] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--navy)' }}>Phone &amp; WhatsApp</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--slate)' }}>+263 (0) 77 000 0000</span>
                </div>
              </div>
            </div>

            <div
              className="contact-promise py-5 pr-5 pl-7 sm:pl-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
              style={{ borderLeft: '4px solid #22B24C' }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#22B24C] shrink-0" />
                <strong style={{ fontSize: '0.92rem', color: 'var(--navy)', fontWeight: 700 }}>
                  Our Executive Commitment
                </strong>
              </div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--slate)', margin: 0 }}>
                We respond within 24 hours. No aggressive sales pitches — simply an objective discussion on whether our behavioral methodologies match your strategic objectives.
              </p>
            </div>
          </div>

          {/* Right Column: Redesigned Professional Form Card */}
          <div className="consultation-card">
            {!submitted ? (
              <div>
                {/* Form Header */}
                <div className="consultation-header">
                  <div className="consultation-header-top">
                    <h3 className="consultation-title">
                      Request a Consultation
                    </h3>
                    <span className="consultation-badge">
                      <span className="consultation-badge-dot"></span>
                      24h Response
                    </span>
                  </div>
                  <p className="consultation-subtitle">
                    Provide your team details below. A senior learning facilitator will reach out to understand your goals.
                  </p>

                  {/* Context Pill if coming from Programme or Audit */}
                  {preselectedProgramme && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquiring about: <strong>{preselectedProgramme}</strong></span>
                    </div>
                  )}
                  {auditResult && !preselectedProgramme && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Audit Score Attached: <strong>{auditResult.percentage}% · {auditResult.headline}</strong></span>
                    </div>
                  )}
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form className="consultation-form" id="contactForm" onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Name & Work Email */}
                  <div className="consultation-grid-2">
                    <div className="consultation-field">
                      <label htmlFor="cf-name" className="consultation-label">
                        Your Name <span className="consultation-req">*</span>
                      </label>
                      <div className="consultation-input-wrap">
                        <span className="consultation-input-icon">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="cf-name"
                          required
                          placeholder="e.g. Tendai Moyo"
                          value={formData.name}
                          onChange={handleChange}
                          className="consultation-input"
                        />
                      </div>
                    </div>

                    <div className="consultation-field">
                      <label htmlFor="cf-email" className="consultation-label">
                        Work Email <span className="consultation-req">*</span>
                      </label>
                      <div className="consultation-input-wrap">
                        <span className="consultation-input-icon">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          id="cf-email"
                          required
                          placeholder="name@organisation.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="consultation-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Organisation & Role */}
                  <div className="consultation-grid-2">
                    <div className="consultation-field">
                      <label htmlFor="cf-org" className="consultation-label">
                        Organisation <span className="consultation-req">*</span>
                      </label>
                      <div className="consultation-input-wrap">
                        <span className="consultation-input-icon">
                          <Building2 className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="cf-org"
                          required
                          placeholder="Company or Institution"
                          value={formData.organisation}
                          onChange={handleChange}
                          className="consultation-input"
                        />
                      </div>
                    </div>

                    <div className="consultation-field">
                      <label htmlFor="cf-role" className="consultation-label">
                        Your Role
                      </label>
                      <div className="consultation-input-wrap">
                        <span className="consultation-input-icon">
                          <Briefcase className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="cf-role"
                          placeholder="e.g. HR Director, Operations Head"
                          value={formData.role}
                          onChange={handleChange}
                          className="consultation-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Phone & Area of Interest */}
                  <div className="consultation-grid-2">
                    <div className="consultation-field">
                      <label htmlFor="cf-phone" className="consultation-label">
                        Phone / WhatsApp
                      </label>
                      <div className="consultation-input-wrap">
                        <span className="consultation-input-icon">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          id="cf-phone"
                          placeholder="+263 77 000 0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="consultation-input"
                        />
                      </div>
                    </div>

                    <div className="consultation-field">
                      <label htmlFor="cf-interest" className="consultation-label">
                        Area of Interest
                      </label>
                      <div className="consultation-input-wrap">
                        <span className="consultation-input-icon">
                          <Compass className="w-4 h-4" />
                        </span>
                        <select
                          id="cf-interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="consultation-select"
                        >
                          <option value="">Select an area...</option>
                          <option value="leadership">Leadership &amp; Supervisory Skills</option>
                          <option value="cx">Customer Experience &amp; Service</option>
                          <option value="sales">Sales Performance &amp; Closing</option>
                          <option value="team">Team Collaboration &amp; Performance</option>
                          <option value="culture">Workplace Culture &amp; Accountability</option>
                          <option value="strategy">Strategy &amp; Organisation Development</option>
                          <option value="audit-followup">Follow-up on Audit Results</option>
                          <option value="other">Other / Custom In-House Programme</option>
                        </select>
                        <ChevronDown className="consultation-select-arrow" />
                      </div>
                    </div>
                  </div>

                  {/* Challenge Textarea */}
                  <div className="consultation-field">
                    <label htmlFor="cf-message" className="consultation-label">
                      Tell us about the challenge you&apos;re trying to solve
                    </label>
                    <textarea
                      id="cf-message"
                      rows={3}
                      placeholder="What is happening in your team or organisation right now that you'd like to change or improve?"
                      value={formData.message}
                      onChange={handleChange}
                      className="consultation-textarea"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="consultation-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request a Consultation Call</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Micro-Trust Badges */}
                  <div className="consultation-trust-bar">
                    <span className="consultation-trust-item">
                      <ShieldCheck className="consultation-trust-icon" />
                      100% Confidential
                    </span>
                    <span className="consultation-trust-item">
                      <Clock className="consultation-trust-icon" />
                      24h Response
                    </span>
                    <span className="consultation-trust-item">
                      <CheckCircle2 className="consultation-trust-icon" />
                      No-Obligation Discussion
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-6 px-2 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#22B24C] flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                  Thank You, {formData.name.split(' ')[0] || 'Partner'}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                  We have received your enquiry for <strong>{formData.organisation}</strong>. A senior learning facilitator will review your requirements and reach out within 24 hours.
                </p>

                {/* What Happens Next steps */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100 text-left max-w-md mx-auto mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                    What happens next:
                  </h4>
                  <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span>Our practice lead reviews your specific team challenge and objectives.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span>We reach out via email or WhatsApp to schedule a brief 20-minute discovery call.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span>You receive a tailored programme outline with measurable outcomes and pricing.</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      organisation: '',
                      role: '',
                      phone: '',
                      interest: '',
                      message: ''
                    });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer shadow-xs"
                >
                  <RotateCcw className="w-4 h-4" />
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

