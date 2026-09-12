import React, { useState, useEffect } from 'react';

const geoData = [
  {
    title: 'Zimbabwe',
    desc: 'Primary market — Harare, Bulawayo & nationwide'
  },
  {
    title: 'Southern Africa',
    desc: 'Zambia, Botswana, South Africa, Mozambique'
  },
  {
    title: 'Africa-Wide',
    desc: 'East Africa, West Africa, and beyond'
  },
  {
    title: 'International',
    desc: 'Remote and virtual delivery worldwide'
  }
];

export const IndustriesSection: React.FC = () => {
  const [activeGeo, setActiveGeo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGeo((prev) => (prev + 1) % geoData.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="industries" id="audience">
      <div className="container">
        <div className="industries-header">
          <p className="section-label">Who We Serve</p>
          <h2>Built for the decision-makers who own performance</h2>
          <p>
            SkillUp24 works with CEOs, HR Directors, L&amp;D Managers, Operations Managers, and Business Owners across Zimbabwe and Africa who are responsible for how their people perform.
          </p>
        </div>

        <div className="industries-layout">
          <div className="industry-mosaic">
            <div className="mosaic-cell large">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80&fit=crop&crop=center"
                alt="Banking and finance professionals"
                loading="lazy"
              />
              <div className="mosaic-label">Banking &amp; Finance</div>
            </div>
            <div className="mosaic-cell">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80&fit=crop&crop=center"
                alt="Retail sector"
                loading="lazy"
              />
              <div className="mosaic-label">Retail</div>
            </div>
            <div className="mosaic-cell">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80&fit=crop&crop=center"
                alt="Manufacturing operations"
                loading="lazy"
              />
              <div className="mosaic-label">Manufacturing</div>
            </div>
            <div className="mosaic-cell">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80&fit=crop&crop=center"
                alt="Hospitality team"
                loading="lazy"
              />
              <div className="mosaic-label">Hospitality</div>
            </div>
            <div className="mosaic-cell">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80&fit=crop&crop=center"
                alt="Healthcare professionals"
                loading="lazy"
              />
              <div className="mosaic-label">Healthcare</div>
            </div>
          </div>

          <div className="industries-right">
            <div className="industries-tag-cloud">
              <span>Retail</span>
              <span>Hospitality</span>
              <span>Banking &amp; Finance</span>
              <span>Insurance</span>
              <span>Manufacturing</span>
              <span>Telecoms</span>
              <span>Healthcare</span>
              <span>Education</span>
              <span>Logistics</span>
              <span>NGOs</span>
              <span>Professional Services</span>
              <span>Government</span>
            </div>

            <div className="geo-card">
              <div className="geo-card-inner">
                <p className="section-label" style={{ marginBottom: '16px' }}>
                  Geographic Reach
                </p>
                <div className="geo-steps">
                  {geoData.map((item, index) => (
                    <div
                      key={item.title}
                      className={`geo-item ${activeGeo === index ? 'active' : ''}`}
                      onClick={() => setActiveGeo(index)}
                    >
                      <div className="geo-dot"></div>
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
