import React from 'react';

export const ResultsSection: React.FC = () => {
  return (
    <section className="proof" id="proof">
      <div className="proof-backdrop">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=70&fit=crop&crop=center"
          alt="Conference and event delivery"
          loading="lazy"
        />
        <div className="proof-backdrop-overlay"></div>
      </div>

      <div className="container proof-content">
        <div className="proof-header">
          <p className="section-label">Client Results</p>
          <h2>What organisations say after working with us</h2>
        </div>

        <div className="testimonials-grid">
          <div className="tcard">
            <div className="tcard-quote">
              &ldquo;Our management team came out of the programme with a completely different understanding of what it means to lead. Productivity metrics improved noticeably within three months — and the atmosphere across the business shifted.&rdquo;
            </div>
            <div className="tcard-person">
              <div className="tcard-avatar">NM</div>
              <div>
                <strong>Nomsa M.</strong>
                <span>HR Director — Financial Services, Zimbabwe</span>
              </div>
            </div>
          </div>

          <div className="tcard">
            <div className="tcard-quote">
              &ldquo;We were dealing with the same customer-service complaints over and over. The SkillUp24 CX programme gave our frontline team a real mindset shift. Complaints dropped by around 40% in the quarter after delivery.&rdquo;
            </div>
            <div className="tcard-person">
              <div className="tcard-avatar">TK</div>
              <div>
                <strong>Tatenda K.</strong>
                <span>Operations Manager — Hospitality Group</span>
              </div>
            </div>
          </div>

          <div className="tcard">
            <div className="tcard-quote">
              &ldquo;They didn&apos;t come with a generic programme. They asked what we were trying to achieve, designed a programme specific to our sales context, and our close rate improved. That&apos;s the difference.&rdquo;
            </div>
            <div className="tcard-person">
              <div className="tcard-avatar">CB</div>
              <div>
                <strong>Chiedza B.</strong>
                <span>Sales Manager — Retail Group, Harare</span>
              </div>
            </div>
          </div>
        </div>

        <div className="proof-logo-strip">
          <p>Trusted by organisations in</p>
          <div className="proof-logos">
            <span>Retail</span>
            <span>Banking</span>
            <span>Hospitality</span>
            <span>Telecoms</span>
            <span>Manufacturing</span>
            <span>Healthcare</span>
            <span>NGO Sector</span>
            <span>Government</span>
          </div>
        </div>
      </div>
    </section>
  );
};
