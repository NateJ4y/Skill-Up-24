import React from 'react';
import { Building2, Layers, Calendar, Globe2 } from 'lucide-react';

export const CredibilityBar: React.FC = () => {
  const stats = [
    {
      value: '200+',
      label: 'Organisations Trained',
      subtext: 'Across corporate, financial & industrial sectors',
      icon: Building2
    },
    {
      value: '12+',
      label: 'Industries Served',
      subtext: 'Banking, retail, hospitality, telecoms & more',
      icon: Layers
    },
    {
      value: '10+ Years',
      label: 'of Expertise',
      subtext: 'Proven regional track record in people development',
      icon: Calendar
    },
    {
      value: 'Africa-Wide',
      label: 'Geographic Reach',
      subtext: 'Zimbabwe headquarters with regional delivery',
      icon: Globe2
    }
  ];

  return (
    <div
      id="credibility-bar"
      className="relative z-20 bg-white border-y border-gray-200 text-gray-900 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 rounded-md bg-[#22B24C]/10 text-[#22B24C]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <strong className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#22B24C] tracking-tight">
                    {stat.value}
                  </strong>
                </div>
                <span className="font-display font-semibold text-xs sm:text-sm text-gray-900 tracking-wide uppercase mb-1">
                  {stat.label}
                </span>
                <p className="text-xs text-gray-500 hidden sm:block max-w-[22ch]">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
