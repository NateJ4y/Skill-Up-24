import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-main-wrap">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&fit=crop&crop=center"
                alt="Professional facilitator leading a corporate workshop"
                loading="lazy"
              />
            </div>
            <div className="about-img-secondary-wrap">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80&fit=crop&crop=faces"
                alt="Diverse team in a strategy session"
                loading="lazy"
              />
            </div>
            <div className="about-img-badge">
              <strong>10+</strong>
              <span>Years<br />Delivering<br />Results</span>
            </div>
          </div>
          <div className="about-text">
            <p className="section-label">Who We Are</p>
            <h2>We solve business problems through people development</h2>
            <p>
              SkillUp24 is a corporate training and consultancy firm operating across Zimbabwe and Southern Africa. We work with organisations that are serious about improving how their people lead, sell, serve customers, and collaborate — not through generic workshops, but through targeted programmes designed around the outcomes you need.
            </p>
            <p>
              Every engagement starts with a diagnosis: we identify the specific performance gaps holding your organisation back, then design and deliver a programme that addresses those gaps directly.
            </p>
            <div className="about-pillars">
              <div className="about-pillar">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4>Experienced Facilitators</h4>
                  <p>Practitioners with real-world business and leadership experience — not just trainers.</p>
                </div>
              </div>
              <div className="about-pillar">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Outcome-Led Design</h4>
                  <p>Every programme is built around measurable business outcomes — not just training completion.</p>
                </div>
              </div>
              <div className="about-pillar">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Regional Understanding</h4>
                  <p>Deep familiarity with the Southern African business context — culturally relevant, practically applicable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
