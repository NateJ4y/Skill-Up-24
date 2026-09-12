import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  eyebrow: string;
  headlineMain: string;
  headlineHighlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: 'Corporate Training & Consultancy · Zimbabwe & Africa',
    headlineMain: 'Develop Better Leaders.',
    headlineHighlight: 'Drive Real Results.',
    description: 'Outcome-focused corporate training designed to close critical performance gaps and drive measurable business growth.',
    primaryCtaText: 'Take the Free Performance Audit',
    primaryCtaLink: '#audit',
    secondaryCtaText: 'Explore Our Programmes',
    secondaryCtaLink: '#solutions',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=85&fit=crop&crop=center',
    imageAlt: 'Corporate training session with engaged professionals'
  },
  {
    id: 2,
    eyebrow: 'Supervisory Excellence · Accountability & Culture',
    headlineMain: 'Equip Supervisors.',
    headlineHighlight: 'Elevate Team Execution.',
    description: 'Practical, scenario-based training that turns supervisors into confident, accountable team leaders.',
    primaryCtaText: 'Book a Free Consultation',
    primaryCtaLink: '#contact',
    secondaryCtaText: 'Explore Our Programmes',
    secondaryCtaLink: '#solutions',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=85&fit=crop&crop=center',
    imageAlt: 'Diverse business professionals collaborating in modern boardroom'
  },
  {
    id: 3,
    eyebrow: 'Customer Experience & Sales · Frontline Retention',
    headlineMain: 'Delight Customers.',
    headlineHighlight: 'Close More Deals.',
    description: 'Proven CX and sales methodologies that eliminate service complaints and accelerate revenue conversion.',
    primaryCtaText: 'Take the Free Performance Audit',
    primaryCtaLink: '#audit',
    secondaryCtaText: 'Read Client Results',
    secondaryCtaLink: '#proof',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=85&fit=crop&crop=faces',
    imageAlt: 'Corporate team analyzing performance growth metrics'
  }
];

export const HeroCarousel: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeSlide = slides[currentSlideIndex];

  return (
    <section
      className="hero"
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-label="SkillUp24 Hero Showcase"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="hero-bg-wrap"
          style={{
            opacity: index === currentSlideIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: 0
          }}
          aria-hidden={index !== currentSlideIndex}
        >
          <img
            src={slide.image}
            alt={slide.imageAlt}
            className="hero-bg-img"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Hero Dark/Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container hero-content">
        <div className="hero-text" key={activeSlide.id}>
          <p className="hero-eyebrow">{activeSlide.eyebrow}</p>
          <h1 className="hero-headline">
            {activeSlide.headlineMain} <em>{activeSlide.headlineHighlight}</em>
          </h1>
          <p className="hero-sub">{activeSlide.description}</p>
          <div className="hero-actions">
            <a href={activeSlide.primaryCtaLink} className="btn btn-primary">
              {activeSlide.primaryCtaText}
            </a>
            <a href={activeSlide.secondaryCtaLink} className="btn btn-ghost">
              {activeSlide.secondaryCtaText}
            </a>
          </div>
        </div>

        {/* Carousel Slide Indicators & Controls */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '36px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10
          }}
        >
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'background .2s, transform .15s'
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <div style={{ display: 'flex', gap: '6px' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: idx === currentSlideIndex ? '22px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === currentSlideIndex ? 'var(--teal)' : '#D1D5DB',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all .3s ease'
                }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'background .2s, transform .15s'
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Hero Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="hero-stats">
            <div className="stat-item">
              <strong>200+</strong>
              <span>Organisations Trained</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>12+</strong>
              <span>Industries Served</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>10+ Years</strong>
              <span>of Expertise</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>Africa-Wide</strong>
              <span>Geographic Reach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
