import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface Project3DCardProps {
  children: React.ReactNode;
  className?: string;
}

export const Project3DCard: React.FC<Project3DCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    setSheenPos({ x: percentX, y: percentY });

    // Max tilt angles (+/- 8 degrees for clean subtle 3D depth)
    const tiltY = ((x - centerX) / centerX) * 6;
    const tiltX = -((y - centerY) / centerY) * 6;

    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative ${className}`}
      >
        {children}

        {/* Dynamic Sheen / Glare Highlight */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[2.5rem] opacity-35 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 350px at ${sheenPos.x}% ${sheenPos.y}%, rgba(255,255,255,0.4), transparent 80%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

