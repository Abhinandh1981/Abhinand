import React, { useEffect, useState, useRef } from 'react';

export type StudentVariant = 'walking' | 'coding' | 'traveler' | 'waving';

interface StudentCharacterProps {
  className?: string;
  isWalking?: boolean;
  variant?: StudentVariant;
}

export const StudentCharacter: React.FC<StudentCharacterProps> = ({
  className = '',
  isWalking = true,
  variant = 'walking',
}) => {
  const charRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!charRef.current) return;
      const rect = charRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 3;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      setTilt({
        x: Math.max(-5, Math.min(5, deltaX * 5)),
        y: Math.max(-3, Math.min(3, deltaY * 3)),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Waving variant (Contact Section)
  if (variant === 'waving') {
    return (
      <div ref={charRef} className={`relative inline-block select-none ${className}`}>
        <svg
          viewBox="0 0 280 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-lg"
        >
          {/* Shadow */}
          <ellipse cx="140" cy="405" rx="70" ry="10" fill="#201E1D" fillOpacity="0.15" />

          {/* Legs in relaxed standing posture */}
          <path d="M120 240 L110 370 L135 372 L145 250 Z" fill="#EAE2DE" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M145 240 L165 370 L190 372 L165 250 Z" fill="#FFF8F5" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
          {/* Sneakers with orange sole */}
          <path d="M100 370 C100 370 95 385 115 390 C135 392 140 378 140 378 Z" fill="#201E1D" />
          <rect x="96" y="386" width="42" height="6" rx="3" fill="#FF4D00" />
          <path d="M165 370 C165 370 170 385 190 390 C210 392 215 378 215 378 Z" fill="#FF4D00" />
          <rect x="170" y="386" width="45" height="6" rx="3" fill="#201E1D" />

          {/* Torso / Studio Jacket (Orange + Graphite details) */}
          <path d="M108 145 C108 145 155 135 182 148 C188 170 180 245 172 255 C150 260 120 258 115 250 C108 240 102 175 108 145 Z" fill="#FF4D00" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M145 142 L143 255" stroke="#201E1D" strokeWidth="2.5" strokeDasharray="4 3" />

          {/* Left Arm: Holding Messenger Bag */}
          <path d="M110 155 L90 220 L108 225 L125 175 Z" fill="#FF4D00" stroke="#201E1D" strokeWidth="3" />
          <rect x="75" y="210" width="35" height="30" rx="6" fill="#201E1D" stroke="#201E1D" strokeWidth="2" />
          <line x1="75" y1="218" x2="110" y2="218" stroke="#FF4D00" strokeWidth="2" />

          {/* Right Arm: Waving High with Floating Paper Plane */}
          <g className="animate-wobble-subtle origin-bottom-left" style={{ transformOrigin: '175px 160px' }}>
            <path d="M178 160 L215 110 L230 120 L188 175 Z" fill="#FF4D00" stroke="#201E1D" strokeWidth="3" />
            <circle cx="225" cy="110" r="10" fill="#F6B894" stroke="#201E1D" strokeWidth="2.5" />
            {/* Paper Airplane in Hand */}
            <path d="M235 95 L265 80 L245 115 L240 98 Z" fill="#FFF8F5" stroke="#201E1D" strokeWidth="2" />
            <path d="M240 98 L252 92" stroke="#FF4D00" strokeWidth="1.5" />
          </g>

          {/* Neck & Head with Tilt */}
          <rect x="138" y="125" width="16" height="22" rx="4" fill="#F6B894" stroke="#201E1D" strokeWidth="3" />
          <g style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)`, transformOrigin: '146px 110px' }}>
            <circle cx="146" cy="110" r="28" fill="#F6B894" stroke="#201E1D" strokeWidth="3.5" />
            {/* Sunglasses */}
            <rect x="145" y="103" width="22" height="12" rx="3" fill="#201E1D" />
            <rect x="124" y="103" width="16" height="12" rx="3" fill="#201E1D" />
            <line x1="140" y1="108" x2="145" y2="108" stroke="#201E1D" strokeWidth="3" />
            {/* Big friendly smile */}
            <path d="M138 123 C145 130 154 130 158 122" stroke="#201E1D" strokeWidth="2.5" strokeLinecap="round" />
            {/* Hair */}
            <path d="M120 110 C115 85 135 75 160 80 C175 83 180 98 178 112 C172 100 162 95 145 96 C132 97 125 102 120 110 Z" fill="#201E1D" />
          </g>
        </svg>
      </div>
    );
  }

  // Coding variant (About Section)
  if (variant === 'coding') {
    return (
      <div ref={charRef} className={`relative inline-block select-none ${className}`}>
        <svg
          viewBox="0 0 280 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-md"
        >
          {/* Shadow */}
          <ellipse cx="140" cy="325" rx="90" ry="12" fill="#201E1D" fillOpacity="0.14" />

          {/* Desk / Studio Surface */}
          <rect x="25" y="270" width="230" height="14" rx="7" fill="#201E1D" />
          <rect x="40" y="284" width="8" height="40" rx="3" fill="#2C2A29" />
          <rect x="232" y="284" width="8" height="40" rx="3" fill="#2C2A29" />

          {/* Steaming Coffee Cup */}
          <rect x="200" y="245" width="22" height="25" rx="4" fill="#FF4D00" stroke="#201E1D" strokeWidth="2" />
          <path d="M222 250 C228 250 228 260 222 260" stroke="#201E1D" strokeWidth="2" />
          {/* Animated Steam */}
          <path d="M205 238 C203 232 208 228 206 222" stroke="#8C8582" strokeWidth="1.5" strokeLinecap="round" className="animate-pulse" />
          <path d="M213 236 C211 230 216 226 214 220" stroke="#8C8582" strokeWidth="1.5" strokeLinecap="round" className="animate-pulse" />

          {/* Laptop on desk open */}
          <path d="M70 270 L140 270 L135 220 L75 220 Z" fill="#201E1D" stroke="#201E1D" strokeWidth="2" />
          <rect x="80" y="225" width="50" height="38" rx="3" fill="#FBE3E1" />
          <line x1="86" y1="234" x2="110" y2="234" stroke="#FF4D00" strokeWidth="2" strokeLinecap="round" />
          <line x1="86" y1="240" x2="124" y2="240" stroke="#201E1D" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="90" y1="246" x2="118" y2="246" stroke="#201E1D" strokeWidth="1.8" strokeLinecap="round" />

          {/* Hands typing */}
          <path d="M100 262 L120 265 L115 272 L95 268 Z" fill="#F6B894" stroke="#201E1D" strokeWidth="2" />
          <path d="M125 262 L145 265 L140 272 L120 268 Z" fill="#F6B894" stroke="#201E1D" strokeWidth="2" />

          {/* Torso & Head leaning over code */}
          <path d="M110 160 C110 160 155 150 180 162 C185 185 180 250 172 260 C150 265 120 263 115 255 Z" fill="#FF4D00" stroke="#201E1D" strokeWidth="3" />
          <rect x="136" y="140" width="16" height="22" rx="4" fill="#F6B894" stroke="#201E1D" strokeWidth="2.5" />
          
          <g style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)`, transformOrigin: '146px 120px' }}>
            <circle cx="146" cy="120" r="28" fill="#F6B894" stroke="#201E1D" strokeWidth="3.5" />
            <rect x="145" y="113" width="22" height="12" rx="3" fill="#201E1D" />
            <rect x="124" y="113" width="16" height="12" rx="3" fill="#201E1D" />
            <line x1="140" y1="118" x2="145" y2="118" stroke="#201E1D" strokeWidth="3" />
            <path d="M140 134 C145 138 152 138 156 133" stroke="#201E1D" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M120 120 C115 95 135 85 160 90 C175 93 180 108 178 122 C172 110 162 105 145 106 C132 107 125 112 120 120 Z" fill="#201E1D" />
          </g>
        </svg>
      </div>
    );
  }

  // Traveler variant (Journey Section)
  if (variant === 'traveler') {
    return (
      <div ref={charRef} className={`relative inline-block select-none ${className}`}>
        <svg
          viewBox="0 0 280 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-lg animate-walk-bob"
        >
          {/* Shadow */}
          <ellipse cx="140" cy="405" rx="75" ry="10" fill="#201E1D" fillOpacity="0.12" />

          {/* Legs Walking */}
          <path d="M125 240 L85 365 L115 370 L145 250 Z" fill="#EAE2DE" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M75 365 C75 365 70 380 90 385 C115 390 120 375 120 375 L112 365 Z" fill="#201E1D" />
          <rect x="70" y="380" width="48" height="6" rx="3" fill="#FF4D00" stroke="#201E1D" strokeWidth="1.5" />

          <path d="M145 240 L195 360 L165 368 L125 250 Z" fill="#FFF8F5" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M175 360 C185 360 215 372 210 388 C200 395 160 390 160 375 L165 362 Z" fill="#FF4D00" stroke="#201E1D" strokeWidth="3" />
          <rect x="162" y="383" width="50" height="7" rx="3.5" fill="#201E1D" stroke="#201E1D" strokeWidth="1.5" />

          {/* Backpack on Back (Graphite gray) */}
          <rect x="80" y="160" width="35" height="60" rx="8" fill="#201E1D" stroke="#201E1D" strokeWidth="2.5" />
          <line x1="80" y1="180" x2="115" y2="180" stroke="#FF4D00" strokeWidth="3" />

          {/* Torso */}
          <path d="M110 145 C110 145 155 135 180 148 C185 170 178 245 170 255 C150 260 120 258 115 250 C110 240 105 175 110 145 Z" fill="#FF4D00" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
          
          {/* Hand holding Compass / GPS map */}
          <g transform="rotate(-10 150 200)">
            <circle cx="165" cy="195" r="14" fill="#201E1D" stroke="#201E1D" strokeWidth="2" />
            <circle cx="165" cy="195" r="11" fill="#FFF8F5" />
            <polygon points="165,188 168,195 165,193 162,195" fill="#FF4D00" />
            <polygon points="165,202 168,195 165,197 162,195" fill="#201E1D" />
          </g>

          {/* Head & Neck */}
          <rect x="138" y="125" width="16" height="22" rx="4" fill="#F6B894" stroke="#201E1D" strokeWidth="3" />
          <g style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)`, transformOrigin: '146px 110px' }}>
            <circle cx="146" cy="110" r="28" fill="#F6B894" stroke="#201E1D" strokeWidth="3.5" />
            <rect x="145" y="103" width="22" height="12" rx="3" fill="#201E1D" />
            <rect x="124" y="103" width="16" height="12" rx="3" fill="#201E1D" />
            <line x1="140" y1="108" x2="145" y2="108" stroke="#201E1D" strokeWidth="3" />
            <path d="M140 124 C145 128 152 128 156 123" stroke="#201E1D" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M120 110 C115 85 135 75 160 80 C175 83 180 98 178 112 C172 100 162 95 145 96 C132 97 125 102 120 110 Z" fill="#201E1D" />
          </g>
        </svg>
      </div>
    );
  }

  // Default Walking Variant (Hero Section)
  return (
    <div ref={charRef} className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 280 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto drop-shadow-md ${isWalking ? 'animate-walk-bob' : ''}`}
      >
        {/* Shadow */}
        <ellipse cx="140" cy="405" rx="75" ry="10" fill="#201E1D" fillOpacity="0.12" />

        {/* Back Leg */}
        <g className="transition-transform duration-500">
          <path d="M125 240 L85 365 L115 370 L145 250 Z" fill="#EAE2DE" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M75 365 C75 365 70 380 90 385 C115 390 120 375 120 375 L112 365 Z" fill="#201E1D" />
          <rect x="70" y="380" width="48" height="6" rx="3" fill="#FFF8F5" stroke="#201E1D" strokeWidth="2" />
        </g>

        {/* Front Leg */}
        <g>
          <path d="M145 240 L195 360 L165 368 L125 250 Z" fill="#FFF8F5" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M175 360 C185 360 215 372 210 388 C200 395 160 390 160 375 L165 362 Z" fill="#FF4D00" stroke="#201E1D" strokeWidth="3" />
          <rect x="162" y="383" width="50" height="7" rx="3.5" fill="#201E1D" stroke="#201E1D" strokeWidth="2" />
        </g>

        {/* Torso / Orange Studio Jacket */}
        <path d="M110 145 C110 145 155 135 180 148 C185 170 178 245 170 255 C150 260 120 258 115 250 C110 240 105 175 110 145 Z" fill="#FF4D00" stroke="#201E1D" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M146 142 L143 255" stroke="#201E1D" strokeWidth="2.5" strokeDasharray="4 3" />
        <path d="M135 142 L146 160 L158 142" fill="#EAE2DE" stroke="#201E1D" strokeWidth="3" strokeLinejoin="round" />

        {/* Laptop in hand */}
        <g transform="rotate(8 160 210)">
          <rect x="120" y="170" width="85" height="60" rx="8" fill="#201E1D" stroke="#201E1D" strokeWidth="3" />
          <rect x="125" y="175" width="75" height="50" rx="4" fill="#FBE3E1" />
          <line x1="135" y1="188" x2="165" y2="188" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round" />
          <line x1="135" y1="196" x2="185" y2="196" stroke="#201E1D" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="145" y1="204" x2="175" y2="204" stroke="#201E1D" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="135" y1="212" x2="155" y2="212" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M110 200 C110 200 125 210 135 210 C145 210 142 195 130 192 Z" fill="#F6B894" stroke="#201E1D" strokeWidth="3" />
        </g>

        {/* Neck */}
        <rect x="138" y="125" width="16" height="22" rx="4" fill="#F6B894" stroke="#201E1D" strokeWidth="3" />

        {/* Head */}
        <g style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)`, transformOrigin: '146px 110px' }}>
          <circle cx="146" cy="110" r="28" fill="#F6B894" stroke="#201E1D" strokeWidth="3.5" />
          <rect x="145" y="103" width="22" height="12" rx="3" fill="#201E1D" />
          <rect x="124" y="103" width="16" height="12" rx="3" fill="#201E1D" />
          <line x1="140" y1="108" x2="145" y2="108" stroke="#201E1D" strokeWidth="3" />
          <path d="M140 124 C145 128 152 128 156 123" stroke="#201E1D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M120 110 C115 85 135 75 160 80 C175 83 180 98 178 112 C172 100 162 95 145 96 C132 97 125 102 120 110 Z" fill="#201E1D" />
          {/* Headphones */}
          <path d="M125 130 C125 145 165 145 165 130" stroke="#201E1D" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="123" cy="132" r="7" fill="#FF4D00" stroke="#201E1D" strokeWidth="2.5" />
          <circle cx="167" cy="132" r="7" fill="#FF4D00" stroke="#201E1D" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
};
