import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-grid">
          <div className="process-text">
            <p className="section-label">How We Work</p>
            <h2>A structured process, not a one-off event</h2>
            <p>
              From the first conversation to measurable results — every SkillUp24 engagement follows a clear method designed to produce lasting behaviour change, not just a training tick-box.
            </p>
            <div className="process-steps">
              <div className="process-step">
                <div className="process-num">01</div>
                <div className="process-step-text">
                  <h4>Diagnose</h4>
                  <p>
                    We identify the specific performance gaps limiting your organisation — through conversations, audits, and data — before recommending anything.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="process-num">02</div>
                <div className="process-step-text">
                  <h4>Design</h4>
                  <p>
                    A bespoke programme mapped to your challenges, your industry, and your team&apos;s real context — not an off-the-shelf catalogue course.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="process-num">03</div>
                <div className="process-step-text">
                  <h4>Deliver</h4>
                  <p>
                    High-impact workshops, coaching sessions, and facilitated interventions — led by experienced practitioners, not lecturers.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="process-num">04</div>
                <div className="process-step-text">
                  <h4>Measure &amp; Sustain</h4>
                  <p>
                    We track behaviour change against business outcomes — and offer ongoing support to embed what was learned into day-to-day practice.
                  </p>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
              Start with a Consultation
            </a>
          </div>

          <div className="process-image">
            <div className="process-img-main">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&fit=crop&crop=faces"
                alt="Experienced facilitator coaching an executive"
                loading="lazy"
              />
            </div>
            <div className="process-img-float">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80&fit=crop&crop=center"
                alt="Diverse team in a learning session"
                loading="lazy"
              />
              <div className="process-float-label">
                <strong>Outcome-Led</strong>
                <span>Every session tied to business results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
