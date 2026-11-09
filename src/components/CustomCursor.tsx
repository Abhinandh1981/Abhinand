import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Disable on touch screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const type = interactive.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorVariant('view');
          setCursorText('VIEW');
          return;
        }
        if (type === 'copy') {
          setCursorVariant('view');
          setCursorText('COPY');
          return;
        }
      }

      if (target.closest('button, a, input, textarea, [role="button"]')) {
        setCursorVariant('hover');
        setCursorText('');
        return;
      }

      setCursorVariant('default');
      setCursorText('');
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  const size = cursorVariant === 'view' ? 68 : cursorVariant === 'hover' ? 36 : 12;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center font-display tracking-wider text-xs font-bold text-white shadow-lg mix-blend-difference hidden md:flex"
      style={{
        x: mouseX,
        y: mouseY,
        width: size,
        height: size,
        translateX: '-50%',
        translateY: '-50%',
        backgroundColor: '#FF4D00',
      }}
      animate={{
        scale: 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
    >
      {cursorVariant === 'view' && (
        <span className="text-[10px] tracking-widest uppercase font-bold text-white select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};

