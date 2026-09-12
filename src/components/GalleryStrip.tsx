import React from 'react';

export const GalleryStrip: React.FC = () => {
  return (
    <section className="gallery-strip" aria-label="Corporate Training Visual Gallery">
      <div className="gallery-track">
        <div className="gallery-cell">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=75&fit=crop&crop=center"
            alt="Training session"
            loading="lazy"
          />
        </div>
        <div className="gallery-cell">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=75&fit=crop&crop=faces"
            alt="Leadership coaching"
            loading="lazy"
          />
        </div>
        <div className="gallery-cell">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=75&fit=crop&crop=center"
            alt="Team collaboration"
            loading="lazy"
          />
        </div>
        <div className="gallery-cell">
          <img
            src="https://images.unsplash.com/photo-1543269664-7eef42226a21?w=700&q=75&fit=crop&crop=center"
            alt="Facilitated workshop"
            loading="lazy"
          />
        </div>
        <div className="gallery-cell">
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=75&fit=crop&crop=center"
            alt="Corporate office environment"
            loading="lazy"
          />
        </div>
        <div className="gallery-cell">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&q=75&fit=crop&crop=center"
            alt="Strategy meeting"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
