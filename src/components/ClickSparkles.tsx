import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/sound';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
}

const colors = ['#FF4D00', '#141414', '#FFF8F5', '#FF8A65', '#2A2A2A'];

export const ClickSparkles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const handleClick = (e: MouseEvent) => {
      // Don't spawn if clicking input or textarea
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea')) return;

      sound.playPop();

      const newParticles: Particle[] = [];
      const count = 5 + Math.floor(Math.random() * 3);

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 25 + Math.random() * 40;
        newParticles.push({
          id: ++idCounter,
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 6 + Math.random() * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rotation: Math.random() * 360,
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
      }, 700);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: p.x,
              y: p.y,
              scale: 1,
              opacity: 1,
              rotate: 0,
            }}
            animate={{
              x: p.x + p.vx,
              y: p.y + p.vy,
              scale: 0,
              opacity: 0,
              rotate: p.rotation,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: p.size > 8 ? '2px' : '50%',
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 shadow-sm"
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

