import React, { useEffect, useState, useRef } from 'react';

export const OrangeTabbyCat: React.FC<{ className?: string }> = ({ className = '' }) => {
  const catRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catRef.current) return;
      const rect = catRef.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width * 0.78;
      const eyeY = rect.top + rect.height * 0.42;

      const deltaX = e.clientX - eyeX;
      const deltaY = e.clientY - eyeY;
      const angle = Math.atan2(deltaY, deltaX);
      const dist = Math.min(2.8, Math.hypot(deltaX, deltaY) / 60);

      setPupilOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={catRef} className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 160 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto animate-walk-bob"
      >
        {/* Soft Shadow */}
        <ellipse cx="80" cy="104" rx="55" ry="5" fill="#141414" fillOpacity="0.12" />

        {/* Upright Looping Tail */}
        <path
          d="M35 65 C20 50 15 25 30 15 C38 10 45 20 40 32 C35 44 48 58 55 65"
          fill="#FF4D00"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Back Leg Left */}
        <path d="M48 70 L42 98 L52 100 L56 75 Z" fill="#FF4D00" stroke="#141414" strokeWidth="2.5" />
        {/* Back Leg Right */}
        <path d="M60 70 L65 98 L75 99 L70 75 Z" fill="#E04300" stroke="#141414" strokeWidth="2.5" />

        {/* Cat Body */}
        <ellipse
          cx="82"
          cy="65"
          rx="38"
          ry="20"
          fill="#FF4D00"
          stroke="#141414"
          strokeWidth="3"
        />
        {/* Tabby stripes */}
        <path d="M72 48 L76 60 M82 46 L85 62 M92 48 L93 59" stroke="#B83800" strokeWidth="3" strokeLinecap="round" />

        {/* White chest bib */}
        <path d="M102 60 C108 65 106 78 95 82 C105 78 112 70 102 60 Z" fill="#FFF8F5" />

        {/* Front Leg Left */}
        <path d="M98 72 L92 99 L102 101 L106 74 Z" fill="#FF4D00" stroke="#141414" strokeWidth="2.5" />
        {/* Front Leg Right (stepping forward) */}
        <path d="M110 72 L120 97 L130 98 L118 73 Z" fill="#FFF8F5" stroke="#141414" strokeWidth="2.5" />

        {/* Cat Head */}
        <circle cx="118" cy="48" r="17" fill="#FF4D00" stroke="#141414" strokeWidth="3" />
        {/* Ears */}
        <path d="M110 36 L112 22 L122 34 Z" fill="#FF4D00" stroke="#141414" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M125 34 L132 24 L134 38 Z" fill="#FF4D00" stroke="#141414" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M113 32 L115 26 L119 32 Z" fill="#FF8A65" />

        {/* Eye Socket & Tracking Pupil */}
        <circle cx="125" cy="46" r="4.5" fill="#FFF8F5" stroke="#141414" strokeWidth="1.8" />
        <circle
          cx={125 + pupilOffset.x}
          cy={46 + pupilOffset.y}
          r="2.5"
          fill="#141414"
          className="transition-transform duration-75"
        />
        {/* Eye highlight glint */}
        <circle cx={124.5 + pupilOffset.x * 0.5} cy={45 + pupilOffset.y * 0.5} r="0.8" fill="#FFFFFF" />

        {/* Whiskers */}
        <path d="M130 50 L145 48 M130 52 L146 54" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" />
        {/* Cute nose */}
        <polygon points="132,49 135,51 131,52" fill="#141414" />
      </svg>
    </div>
  );
};

export const TuxedoCat: React.FC<{ className?: string }> = ({ className = '' }) => {
  const catRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catRef.current) return;
      const rect = catRef.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width * 0.78;
      const eyeY = rect.top + rect.height * 0.42;

      const deltaX = e.clientX - eyeX;
      const deltaY = e.clientY - eyeY;
      const angle = Math.atan2(deltaY, deltaX);
      const dist = Math.min(2.8, Math.hypot(deltaX, deltaY) / 60);

      setPupilOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={catRef} className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 160 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto animate-walk-bob"
      >
        {/* Soft Shadow */}
        <ellipse cx="80" cy="104" rx="55" ry="5" fill="#141414" fillOpacity="0.12" />

        {/* Tail */}
        <path
          d="M38 65 C25 50 15 28 28 18 C36 12 44 22 38 34 C32 46 48 58 55 65"
          fill="#141414"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Back Legs */}
        <path d="M48 70 L44 98 L54 100 L56 75 Z" fill="#141414" stroke="#141414" strokeWidth="2.5" />
        <path d="M60 70 L65 98 L75 99 L70 75 Z" fill="#2A2A2A" stroke="#141414" strokeWidth="2.5" />

        {/* Body (White & Black) */}
        <ellipse cx="82" cy="65" rx="38" ry="20" fill="#141414" stroke="#141414" strokeWidth="3" />
        {/* White chest & belly patch */}
        <path
          d="M75 58 C85 58 105 60 108 72 C100 82 85 84 75 80 C68 76 68 64 75 58 Z"
          fill="#FFF8F5"
          stroke="#141414"
          strokeWidth="2"
        />

        {/* Front Legs with white socks */}
        <path d="M98 72 L92 99 L102 101 L106 74 Z" fill="#141414" stroke="#141414" strokeWidth="2.5" />
        <rect x="91" y="93" width="12" height="7" rx="3" fill="#FFF8F5" stroke="#141414" strokeWidth="1.5" />
        <path d="M110 72 L120 97 L130 98 L118 73 Z" fill="#141414" stroke="#141414" strokeWidth="2.5" />
        <rect x="119" y="92" width="12" height="7" rx="3" fill="#FFF8F5" stroke="#141414" strokeWidth="1.5" />

        {/* Head */}
        <circle cx="118" cy="48" r="17" fill="#141414" stroke="#141414" strokeWidth="3" />
        {/* Ears */}
        <path d="M110 36 L112 22 L122 34 Z" fill="#141414" stroke="#141414" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M125 34 L132 24 L134 38 Z" fill="#141414" stroke="#141414" strokeWidth="2.5" strokeLinejoin="round" />

        {/* White face blaze */}
        <polygon points="118,40 123,55 113,55" fill="#FFF8F5" />

        {/* Eye Socket & Tracking Pupil */}
        <circle cx="125" cy="46" r="4.5" fill="#FFBD2E" stroke="#141414" strokeWidth="1.8" />
        <circle
          cx={125 + pupilOffset.x}
          cy={46 + pupilOffset.y}
          r="2.5"
          fill="#141414"
          className="transition-transform duration-75"
        />
        {/* Eye glint */}
        <circle cx={124.5 + pupilOffset.x * 0.5} cy={45 + pupilOffset.y * 0.5} r="0.8" fill="#FFFFFF" />

        {/* Whiskers */}
        <path d="M130 50 L145 48 M130 52 L146 54" stroke="#FFF8F5" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
};
