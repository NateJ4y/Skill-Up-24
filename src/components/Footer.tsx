import React from 'react';
import { SkillUpLogo } from './SkillUpLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" aria-label="SkillUp24 Home">
              <SkillUpLogo height={32} />
            </a>
            <p>
              Corporate training and consultancy for organisations that want measurable performance improvement — across Zimbabwe and Southern Africa.
            </p>
          </div>

          <div className="footer-col">
            <h4>Programmes</h4>
            <ul>
              <li><a href="#solutions">Leadership Development</a></li>
              <li><a href="#solutions">Customer Experience</a></li>
              <li><a href="#solutions">Sales Performance</a></li>
              <li><a href="#solutions">Team Effectiveness</a></li>
              <li><a href="#solutions">Workplace Culture</a></li>
              <li><a href="#solutions">Strategy &amp; Org Dev</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tools &amp; Proof</h4>
            <ul>
              <li><a href="#audit">Workplace Performance Audit</a></li>
              <li><a href="#proof">Client Results</a></li>
              <li><a href="#process">Our Method</a></li>
              <li><a href="#about">About SkillUp24</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#contact">Book a Consultation</a></li>
              <li><span>Harare, Zimbabwe</span></li>
              <li><span>Delivery Africa-Wide</span></li>
              <li><a href="mailto:info@skillup24.co.zw">info@skillup24.co.zw</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SkillUp24. All rights reserved. Corporate Training &amp; Consultancy.</p>
          <p>Zimbabwe · Southern Africa · Africa-Wide</p>
        </div>
      </div>
    </footer>
  );
};
