import React, { useState, useEffect } from 'react';
import { SkillUpLogo } from './SkillUpLogo';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key for mobile menu accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <div className="nav-inner">
          <a
            href="#hero"
            className="nav-logo"
            onClick={(e) => handleLinkClick(e, 'hero')}
            aria-label="SkillUp24 Home"
          >
            <SkillUpLogo height={32} />
          </a>

          <ul className="nav-links">
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#solutions" onClick={(e) => handleLinkClick(e, 'solutions')}>
                Programmes
              </a>
            </li>
            <li>
              <a href="#proof" onClick={(e) => handleLinkClick(e, 'proof')}>
                Results
              </a>
            </li>
            <li>
              <a href="#audit" onClick={(e) => handleLinkClick(e, 'audit')}>
                Free Audit
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-cta"
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Book a Consultation
              </a>
            </li>
          </ul>

          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <SkillUpLogo height={30} />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ color: '#111827', fontSize: '1.75rem', lineHeight: 1, padding: '6px 10px', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>
        <ul>
          <li>
            <a
              href="#about"
              className="mobile-link"
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#solutions"
              className="mobile-link"
              onClick={(e) => handleLinkClick(e, 'solutions')}
            >
              Programmes
            </a>
          </li>
          <li>
            <a
              href="#proof"
              className="mobile-link"
              onClick={(e) => handleLinkClick(e, 'proof')}
            >
              Results
            </a>
          </li>
          <li>
            <a
              href="#audit"
              className="mobile-link"
              onClick={(e) => handleLinkClick(e, 'audit')}
            >
              Free Audit
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mobile-link mobile-link-cta"
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Book a Consultation
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
