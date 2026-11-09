import React from 'react';

interface MarqueeStripProps {
  items: string[];
  speed?: 'normal' | 'fast' | 'slow';
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  items,
  reverse = false,
  className = 'bg-[#FF4D00] text-white py-4',
  itemClassName = 'text-2xl md:text-3xl font-display font-bold tracking-wider uppercase px-4',
  separator = '✦',
}) => {
  // Multiply items to ensure seamless infinite looping without gaps
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden select-none whitespace-nowrap flex items-center ${className}`}>
      <div
        className={`flex items-center shrink-0 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } will-change-transform`}
      >
        {repeatedItems.map((item, idx) => (
          <span key={idx} className="inline-flex items-center">
            <span className={itemClassName}>{item}</span>
            <span className="opacity-70 text-sm md:text-base px-2">{separator}</span>
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={`flex items-center shrink-0 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } will-change-transform`}
      >
        {repeatedItems.map((item, idx) => (
          <span key={`dup-${idx}`} className="inline-flex items-center">
            <span className={itemClassName}>{item}</span>
            <span className="opacity-70 text-sm md:text-base px-2">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

