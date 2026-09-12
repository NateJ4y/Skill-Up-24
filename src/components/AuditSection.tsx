import React, { useState } from 'react';
import { auditQuestions, calculateAuditResult } from '../data/auditQuestions';
import { AuditResult } from '../types';
import { leadService } from '../services/leadService';
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Calendar,
  Check
} from 'lucide-react';

interface AuditSectionProps {
  onBookConsultationWithResult?: (result: AuditResult) => void;
}

export const AuditSection: React.FC<AuditSectionProps> = ({ onBookConsultationWithResult }) => {
  const [currentStep, setCurrentStep] = useState<number | 'capture' | 'result'>(1);
  const [scores, setScores] = useState<Record<number, number>>({});
  const [leadName, setLeadName] = useState('');
  const [leadOrg, setLeadOrg] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadRole, setLeadRole] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [validationError, setValidationError] = useState('');
  const [calculatedResult, setCalculatedResult] = useState<AuditResult | null>(null);

  const TOTAL = auditQuestions.length; // 12

  const handleSelectOption = (step: number, points: number) => {
    setScores((prev) => ({ ...prev, [step]: points }));
    setTimeout(() => {
      if (step < TOTAL) {
        setCurrentStep(step + 1);
      } else {
        setCurrentStep('capture');
      }
    }, 240);
  };

  const handleCaptureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.trim() || !leadOrg.trim()) {
      setValidationError('Please enter your name, organisation, and work email.');
      return;
    }
    if (!leadService.validateEmail(leadEmail.trim())) {
      setValidationError('Please enter a valid work email address.');
      return;
    }
    setValidationError('');

    const leadInfo = {
      name: leadName.trim(),
      organisation: leadOrg.trim(),
      email: leadEmail.trim(),
      jobTitle: leadRole.trim() || undefined,
      phone: leadPhone.trim() || undefined
    };

    const finalResult = calculateAuditResult(scores, leadInfo);
    setCalculatedResult(finalResult);

    // Persist lead asynchronously
    try {
      await leadService.submitAuditLead(finalResult);
    } catch (err) {
      console.warn('Lead submission notice:', err);
    }

    setCurrentStep('result');
  };

  const handleBookConsultation = () => {
    if (calculatedResult && onBookConsultationWithResult) {
      onBookConsultationWithResult(calculatedResult);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRetake = () => {
    setScores({});
    setLeadName('');
    setLeadOrg('');
    setLeadEmail('');
    setLeadRole('');
    setLeadPhone('');
    setValidationError('');
    setCalculatedResult(null);
    setCurrentStep(1);
  };

  const progressPct =
    currentStep === 'result'
      ? 100
      : currentStep === 'capture'
      ? 95
      : Math.round(((Number(currentStep) - 1) / TOTAL) * 100);

  const currentQIndex = typeof currentStep === 'number' ? currentStep - 1 : 0;
  const currentQ = auditQuestions[currentQIndex];

  // Circle gauge math for result
  const pctValue = calculatedResult ? calculatedResult.percentage : 0;
  const circ = 2 * Math.PI * 52;
  const strokeDash = (pctValue / 100) * circ;

  return (
    <section className="audit" id="audit">
      <div className="container">
        <div className="audit-container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="audit-badge">Free Diagnostic Assessment</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.25 }}>
              How is your organisation really performing?
            </h2>
            <p style={{ color: 'var(--slate)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 18px', lineHeight: 1.6 }}>
              Answer 12 diagnostic questions across 6 core capability zones. Get an instant score, identify critical performance gaps, and unlock actionable recommendations for your team.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 500 }}>
              <span>✓ 12 Questions</span>
              <span>•</span>
              <span>✓ ~3 Minutes</span>
              <span>•</span>
              <span>✓ Instant Score &amp; Insights</span>
              <span>•</span>
              <span>✓ 100% Confidential</span>
            </div>
          </div>

          {/* Main Card Container */}
          <div className="audit-card">
            {/* Steps 1 to 12: Questions */}
            {typeof currentStep === 'number' && currentQ && (
              <div className="audit-step active" style={{ display: 'block' }}>
                {/* Meta bar */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--teal-dim)', background: 'var(--teal-light)', padding: '4px 10px', borderRadius: '100px' }}>
                      {currentQ.zone}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--slate)' }}>
                      Focus: {currentQ.context}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy)' }}>
                    Question {currentStep} of {TOTAL}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="audit-progress-wrap" style={{ marginBottom: '24px' }}>
                  <div className="audit-progress-bar">
                    <div
                      className="audit-progress-fill"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>

                {/* Step indicators navigation */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '28px', overflowX: 'auto', paddingBottom: '4px' }}>
                  {auditQuestions.map((q) => {
                    const isAnswered = scores[q.id] !== undefined;
                    const isCurrent = currentStep === q.id;
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setCurrentStep(q.id)}
                        title={`Jump to Question ${q.id}: ${q.context}`}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: isCurrent ? '2px solid var(--teal)' : '1px solid var(--ice-2)',
                          background: isCurrent ? 'var(--teal-light)' : isAnswered ? 'var(--ice-2)' : 'var(--white)',
                          color: isCurrent ? 'var(--navy)' : isAnswered ? 'var(--navy)' : 'var(--text-light)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {isAnswered && !isCurrent ? <Check style={{ width: '12px', height: '12px', color: 'var(--teal-dim)' }} /> : q.id}
                      </button>
                    );
                  })}
                </div>

                {/* Question Text */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '22px', lineHeight: 1.4 }}>
                  {currentQ.question}
                </h3>

                {/* Options List */}
                <div className="audit-opts" style={{ marginBottom: '28px' }}>
                  {currentQ.options.map((opt, oIdx) => {
                    const isSelected = scores[currentStep] === opt.points;
                    const letter = String.fromCharCode(65 + oIdx); // A, B, C, D
                    return (
                      <button
                        key={oIdx}
                        type="button"
                        className={`audit-opt ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectOption(currentStep, opt.points)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          padding: '16px 20px',
                          borderRadius: 'var(--r-sm)',
                          border: isSelected ? '2px solid var(--teal)' : '1.5px solid var(--ice-2)',
                          background: isSelected ? 'var(--teal-light)' : 'var(--white)',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'border-color 0.15s, background 0.15s'
                        }}
                      >
                        <span
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            background: isSelected ? 'var(--teal)' : 'var(--ice-2)',
                            color: isSelected ? '#fff' : 'var(--navy)'
                          }}
                        >
                          {isSelected ? <Check style={{ width: '14px', height: '14px' }} /> : letter}
                        </span>
                        <span style={{ fontSize: '0.92rem', color: isSelected ? 'var(--navy)' : 'var(--text)', fontWeight: isSelected ? 600 : 400, lineHeight: 1.5, flex: 1 }}>
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Question Navigation Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--ice-2)', paddingTop: '18px' }}>
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => (typeof prev === 'number' && prev > 1 ? prev - 1 : 1))}
                    disabled={currentStep === 1}
                    className="btn btn-ghost"
                    style={{
                      padding: '8px 18px',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      opacity: currentStep === 1 ? 0.4 : 1,
                      cursor: currentStep === 1 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <ArrowLeft style={{ width: '16px', height: '16px' }} /> Previous
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {scores[currentStep] ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (currentStep < TOTAL) {
                            setCurrentStep(currentStep + 1);
                          } else {
                            setCurrentStep('capture');
                          }
                        }}
                        className="btn btn-primary"
                        style={{
                          padding: '8px 20px',
                          fontSize: '0.85rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        Next <ArrowRight style={{ width: '16px', height: '16px' }} />
                      </button>
                    ) : (
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                        Select an answer above to advance
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 13: Lead Capture */}
            {currentStep === 'capture' && (
              <div className="audit-step active" style={{ display: 'block' }}>
                <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 28px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'var(--teal-light)', color: 'var(--teal-dim)', marginBottom: '14px' }}>
                    <Sparkles style={{ width: '24px', height: '24px' }} />
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '10px' }}>
                    Where should we send your performance report?
                  </h3>
                  <p style={{ color: 'var(--slate)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Your responses are complete. Enter your contact details below to generate your instant diagnostic score, capability breakdown, and executive findings.
                  </p>
                </div>

                {validationError && (
                  <div style={{ background: '#FEECEE', border: '1px solid #E52328', color: '#C0392B', padding: '10px 16px', borderRadius: 'var(--r-sm)', fontSize: '0.88rem', marginBottom: '20px', textAlign: 'center' }}>
                    {validationError}
                  </div>
                )}

                <form onSubmit={handleCaptureSubmit} style={{ maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="auditName" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="auditName"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="e.g. Tendai Moyo"
                      required
                      style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--ice-2)', borderRadius: 'var(--r-sm)', fontSize: '0.92rem' }}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="auditOrg" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                      Organisation *
                    </label>
                    <input
                      type="text"
                      id="auditOrg"
                      value={leadOrg}
                      onChange={(e) => setLeadOrg(e.target.value)}
                      placeholder="e.g. ABC Holdings or EcoBank"
                      required
                      style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--ice-2)', borderRadius: 'var(--r-sm)', fontSize: '0.92rem' }}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="auditEmail" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="auditEmail"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="e.g. tendai@organisation.co.zw"
                      required
                      style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--ice-2)', borderRadius: 'var(--r-sm)', fontSize: '0.92rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label htmlFor="auditRole" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                        Your Role (Optional)
                      </label>
                      <input
                        type="text"
                        id="auditRole"
                        value={leadRole}
                        onChange={(e) => setLeadRole(e.target.value)}
                        placeholder="e.g. HR Director, COO"
                        style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--ice-2)', borderRadius: 'var(--r-sm)', fontSize: '0.92rem' }}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label htmlFor="auditPhone" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        id="auditPhone"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        placeholder="e.g. +263 77..."
                        style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--ice-2)', borderRadius: 'var(--r-sm)', fontSize: '0.92rem' }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="auditSubmit"
                    style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '10px' }}
                  >
                    Generate Instant Diagnostic Report <ArrowRight style={{ width: '18px', height: '18px', marginLeft: '6px', display: 'inline-block' }} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '6px' }}>
                    <ShieldCheck style={{ width: '15px', height: '15px', color: 'var(--teal)' }} />
                    <span>Strictly confidential. We respect your privacy and never share your details.</span>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(TOTAL)}
                      className="btn btn-ghost"
                      style={{ fontSize: '0.82rem', padding: '6px 12px' }}
                    >
                      <ArrowLeft style={{ width: '14px', height: '14px', marginRight: '4px', display: 'inline' }} /> Back to Question {TOTAL}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step: Result Screen */}
            {currentStep === 'result' && calculatedResult && (
              <div className="audit-step active" style={{ display: 'block' }}>
                <div className="audit-result-wrap">
                  {/* Gauge */}
                  <div className="result-ring">
                    <svg viewBox="0 0 120 120">
                      <circle className="ring-bg" cx="60" cy="60" r="52" />
                      <circle
                        className="ring-fill"
                        cx="60"
                        cy="60"
                        r="52"
                        strokeDasharray={`${strokeDash} ${circ}`}
                      />
                    </svg>
                    <div className="result-score">{calculatedResult.percentage}%</div>
                  </div>

                  <div style={{ display: 'inline-block', marginBottom: '12px' }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '5px 14px',
                        borderRadius: '100px',
                        background:
                          calculatedResult.percentage >= 80
                            ? 'var(--teal-light)'
                            : calculatedResult.percentage >= 60
                            ? '#FFF3E0'
                            : '#FEECEE',
                        color:
                          calculatedResult.percentage >= 80
                            ? 'var(--teal-dim)'
                            : calculatedResult.percentage >= 60
                            ? '#E67E22'
                            : '#E52328'
                      }}
                    >
                      {calculatedResult.level}
                    </span>
                  </div>

                  <h3 className="result-title" style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '12px' }}>
                    {calculatedResult.headline}
                  </h3>
                  <p className="result-msg" style={{ color: 'var(--slate)', fontSize: '0.94rem', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto 32px' }}>
                    {calculatedResult.summary}
                  </p>

                  {/* 6 Capability Zones Diagnostic Grid */}
                  <div style={{ textAlign: 'left', marginBottom: '32px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Operational Capability Breakdown:
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px' }}>
                      {calculatedResult.zoneBreakdown.map((zone, zIdx) => {
                        const isHigh = zone.status === 'Strong';
                        const isMid = zone.status === 'Developing';
                        return (
                          <div
                            key={zIdx}
                            style={{
                              border: '1px solid var(--ice-2)',
                              borderRadius: 'var(--r-sm)',
                              padding: '16px 18px',
                              background: '#FAFBFD'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <strong style={{ fontSize: '0.92rem', color: 'var(--navy)' }}>
                                {zone.name}
                              </strong>
                              <span
                                className={`ra-pill ${isHigh ? 'pill-high' : isMid ? 'pill-mid' : 'pill-low'}`}
                              >
                                {zone.status} · {zone.percentage}%
                              </span>
                            </div>
                            <p style={{ fontSize: '0.82rem', color: 'var(--slate)', margin: 0, lineHeight: 1.5 }}>
                              {zone.insight}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Call to Actions */}
                  <div style={{ borderTop: '1px solid var(--ice-2)', paddingTop: '28px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '14px' }}>
                      <button
                        type="button"
                        onClick={handleBookConsultation}
                        className="btn btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '0.95rem' }}
                      >
                        <Calendar style={{ width: '18px', height: '18px' }} />
                        Book a Free 30-Minute Consultation With These Results
                      </button>

                      <button
                        type="button"
                        onClick={handleRetake}
                        className="btn btn-ghost"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 20px', fontSize: '0.9rem' }}
                      >
                        <RotateCcw style={{ width: '16px', height: '16px' }} />
                        Retake Audit
                      </button>
                    </div>

                    <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', maxWidth: 'none', margin: 0 }}>
                      We will attach your diagnostic scores directly to your consultation enquiry so our senior team can prepare specific insights for your call.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

