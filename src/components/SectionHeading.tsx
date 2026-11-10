import React from 'react';

interface SectionHeadingProps {
  pillText: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  pillText,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* Decorative Overlapping Pill */}
      <div className={`inline-flex items-center gap-2 bg-[#141414] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-md ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
        <span>{pillText}</span>
      </div>

      {/* Main Condensed Display Title */}
      <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#141414] tracking-tight leading-[0.95] sm:leading-[0.9] uppercase">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#635E5D] font-medium max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

