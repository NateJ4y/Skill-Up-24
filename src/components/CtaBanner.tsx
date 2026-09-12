import React from 'react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="cta-banner">
      <div className="cta-banner-bg">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=75&fit=crop&crop=center"
          alt="Team discussing strategy"
          loading="lazy"
        />
        <div className="cta-banner-overlay"></div>
      </div>
      <div className="container cta-banner-content">
        <h2>Ready to close your performance gaps?</h2>
        <p>
          Book a free 30-minute discovery call. No pitch — just an honest conversation about where your team is, where you want them to be, and what it will take to get there.
        </p>
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ fontSize: '1.05rem', padding: '16px 36px' }}
        >
          Book Your Free Consultation
        </a>
      </div>
    </section>
  );
};
