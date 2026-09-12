import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { programmes } from '../data/programmes';

interface ProgrammesSectionProps {
  onSelectProgramme?: (programmeTitle: string) => void;
}

export const ProgrammesSection: React.FC<ProgrammesSectionProps> = ({ onSelectProgramme }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleDiscuss = (title: string) => {
    if (onSelectProgramme) {
      onSelectProgramme(title);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="solutions" id="solutions">
      {/* Invisible anchor target for #programmes link compatibility */}
      <span id="programmes" style={{ display: 'block', position: 'relative', top: '-80px', visibility: 'hidden' }} />
      <div className="container">
        <div className="section-header">
          <p className="section-label">Our Programmes</p>
          <h2>What are you trying to improve?</h2>
          <p>
            Six focus areas — each built around a real business problem your organisation may be facing right now.
          </p>
        </div>

        <div className="solutions-grid">
          {programmes.map((p) => {
            const isExpanded = expandedId === p.id;

            return (
              <div key={p.id} className="sol-card">
                <div className="sol-card-img">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="sol-card-img-overlay"></div>
                </div>

                <div className="sol-card-body">
                  <span className="sol-tag">{p.tag}</span>
                  <h3>{p.tagline}</h3>
                  <p>{p.description}</p>

                  {/* Collapsible Details */}
                  {isExpanded && (
                    <div
                      style={{
                        paddingTop: '14px',
                        marginTop: '8px',
                        marginBottom: '16px',
                        borderTop: '1px solid var(--ice-2)',
                        fontSize: '0.82rem',
                        color: 'var(--slate)'
                      }}
                    >
                      <div style={{ marginBottom: '12px' }}>
                        <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '6px' }}>
                          Core Focus Modules:
                        </strong>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {p.modules.slice(0, 3).map((mod, mIdx) => (
                            <li key={mIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                              <CheckCircle2 size={13} color="var(--teal)" style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span>{mod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem', color: 'var(--text-light)', borderTop: '1px dashed var(--ice-2)', paddingTop: '8px' }}>
                        <span><strong>Duration:</strong> {p.duration}</span>
                        <span><strong>Audience:</strong> {p.targetAudience}</span>
                      </div>
                    </div>
                  )}

                  <div className="sol-card-actions">
                    <button
                      type="button"
                      onClick={() => handleDiscuss(p.title)}
                      className="sol-link"
                    >
                      Discuss this programme →
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleExpand(p.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.75rem',
                        color: 'var(--text-light)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
