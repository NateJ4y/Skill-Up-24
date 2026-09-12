import React from 'react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="quote-banner">
      <div className="quote-banner-bg">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=75&fit=crop&crop=center"
          alt="Team meeting in a modern boardroom"
          loading="lazy"
        />
        <div className="quote-banner-overlay"></div>
      </div>
      <div className="container quote-banner-content">
        <blockquote>
          &ldquo;We don&apos;t sell training categories.<br />We solve business problems.&rdquo;
        </blockquote>
        <p>
          An outcome-based question is easier to understand, easier to relate to, and easier to say yes to — which makes SkillUp24 easier to choose.
        </p>
        <a href="#contact" className="btn btn-primary">
          Start the Conversation
        </a>
      </div>
    </section>
  );
};
