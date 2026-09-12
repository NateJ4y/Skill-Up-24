import React from 'react';

interface SkillUpLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'light' | 'dark' | 'on-navy';
}

export const SkillUpLogo: React.FC<SkillUpLogoProps> = ({
  className = '',
  height = 36,
  variant = 'light',
}) => {
  // Brand colors from exact logo:
  // Primary Green: #22B24C
  // Primary Red: #E52328
  // Text color on dark can adapt or remain green with high contrast
  const greenColor = variant === 'on-navy' ? '#2CD65F' : '#22B24C';
  const redColor = '#E52328';
  const textColor = variant === 'on-navy' ? '#FFFFFF' : greenColor;

  return (
    <div
      className={`skillup-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        lineHeight: 1,
        userSelect: 'none',
      }}
      aria-label="SkillUp24"
    >
      <svg
        height={height}
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', height: height, width: 'auto' }}
      >
        {/* sk (Green) */}
        <text
          x="2"
          y="39"
          fontFamily="'Sora', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="-0.03em"
          fill={greenColor}
        >
          sk
        </text>

        {/* i - Red dot */}
        <circle cx="50" cy="14" r="4.5" fill={redColor} />
        {/* i - Red stem */}
        <rect x="46" y="21" width="8" height="19" rx="2" fill={redColor} />

        {/* ll (Green) with styled tops */}
        <path
          d="M60 40V14C60 11.5 62 9.5 66 8.5C66.5 8.5 67 9 67 9.5V40H60Z"
          fill={greenColor}
        />
        <path
          d="M70 40V14C70 11.5 72 9.5 76 8.5C76.5 8.5 77 9 77 9.5V40H70Z"
          fill={greenColor}
        />

        {/* UP (Green Uppercase) */}
        <text
          x="82"
          y="39"
          fontFamily="'Sora', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="-0.02em"
          fill={greenColor}
        >
          UP
        </text>

        {/* Red Rounded Badge for '24' */}
        <rect
          x="146"
          y="9"
          width="46"
          height="33"
          rx="8"
          fill={redColor}
        />

        {/* '24' in White */}
        <text
          x="169"
          y="34"
          textAnchor="middle"
          fontFamily="'Sora', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="-0.02em"
          fill="#FFFFFF"
        >
          24
        </text>
      </svg>
    </div>
  );
};
