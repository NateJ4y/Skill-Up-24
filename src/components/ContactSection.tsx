import React, { useState, useEffect } from 'react';
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organisation) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitConsultationRequest({
        name: formData.name,
        email: formData.email,
        organisation: formData.organisation,
        jobTitle: formData.role,
        phone: formData.phone,
        programmeInterest: formData.interest,
        notes: formData.message,
        source: auditResult ? 'Audit Follow-up' : 'Website Contact Form'
      });

      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch {
      setErrorMsg('Unable to submit enquiry. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="section-label">Get in Touch</p>
            <h2>Let&apos;s talk about what your team needs</h2>
            <p>
              Whether you have a specific programme in mind or just know something needs to improve — we&apos;re ready to listen.
            </p>

            <div className="contact-details">
              <div className="cd-item">
                <div className="cd-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <strong>Location</strong>
                  <span>Harare, Zimbabwe · Delivery Africa-Wide</span>
                </div>
              </div>

              <div className="cd-item">
                <div className="cd-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>info@skillup24.co.zw</span>
                </div>
              </div>

              <div className="cd-item">
                <div className="cd-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <strong>Phone &amp; WhatsApp</strong>
                  <span>+263 (0) 77 000 0000</span>
                </div>
              </div>
            </div>

            <div className="contact-promise">
              <strong>Our Commitment</strong>
              <p>
                We respond within 24 hours. No high-pressure sales — just a focused conversation about whether we&apos;re the right fit for your organisation.
              </p>
            </div>
          </div>

          <div className="contact-form-wrap">
            {!submitted ? (
              <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                {errorMsg && (
                  <div style={{ color: '#C0392B', fontSize: '0.85rem', marginBottom: '14px' }}>
                    {errorMsg}
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name">Your Name *</label>
                    <input
                      type="text"
                      id="cf-name"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email">Work Email *</label>
                    <input
                      type="email"
                      id="cf-email"
                      required
                      placeholder="name@organisation.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-org">Organisation *</label>
                    <input
                      type="text"
                      id="cf-org"
                      required
                      placeholder="Company or Institution"
                      value={formData.organisation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-role">Your Role</label>
                    <input
                      type="text"
                      id="cf-role"
                      placeholder="e.g. HR Director, Operations Manager"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-phone">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      id="cf-phone"
                      placeholder="+263..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-interest">Area of Interest</label>
                    <select
                      id="cf-interest"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="">Select an area...</option>
                      <option value="leadership">Leadership &amp; Supervisory Skills</option>
                      <option value="cx">Customer Experience &amp; Service</option>
                      <option value="sales">Sales Performance &amp; Closing</option>
                      <option value="team">Team Collaboration &amp; Performance</option>
                      <option value="culture">Workplace Culture &amp; Accountability</option>
                      <option value="strategy">Strategy &amp; Organisation Development</option>
                      <option value="audit-followup">Follow-up on Audit Results</option>
                      <option value="other">Other / Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cf-message">Tell us about the challenge you&apos;re trying to solve</label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    placeholder="What is happening in your team or organisation right now that you'd like to change?"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%', fontSize: '1rem', padding: '16px' }}
                >
                  {isSubmitting ? 'Sending Request...' : 'Request a Consultation Call'}
                </button>

                <p
                  style={{
                    fontSize: '.75rem',
                    color: 'var(--text-light)',
                    textAlign: 'center',
                    marginTop: '12px',
                    marginBottom: 0,
                    maxWidth: 'none'
                  }}
                >
                  We treat all information confidentially. We will never share your details.
                </p>
              </form>
            ) : (
              <div className="contact-success" id="contactSuccess" style={{ display: 'block' }}>
                <h3>Thank you — we&apos;ve received your enquiry</h3>
                <p>
                  A member of our team will contact you within 24 hours to arrange your discovery call.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-ghost"
                  style={{ marginTop: '20px', color: 'var(--navy)', borderColor: 'var(--ice-2)' }}
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
