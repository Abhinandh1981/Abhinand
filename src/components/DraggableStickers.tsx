import React from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/sound';

interface Sticker {
  id: string;
  label: string;
  icon: string;
  bgColor: string;
  textColor: string;
  initialX: number;
  initialY: number;
  rotate: number;
}

const initialStickers: Sticker[] = [
  {
    id: 'st-1',
    label: 'AI & ML CORE',
    icon: '⚡',
    bgColor: '#FF4D00',
    textColor: '#FFFFFF',
    initialX: 30,
    initialY: 40,
    rotate: -8,
  },
  {
    id: 'st-2',
    label: 'PYTHON 3.14',
    icon: '🐍',
    bgColor: '#141414',
    textColor: '#FFFFFF',
    initialX: -40,
    initialY: 120,
    rotate: 6,
  },
  {
    id: 'st-3',
    label: 'KERALA VIBES',
    icon: '🌴',
    bgColor: '#FFF8F5',
    textColor: '#141414',
    initialX: 50,
    initialY: 210,
    rotate: -4,
  },
  {
    id: 'st-4',
    label: 'BUG FREE ZONE',
    icon: '✨',
    bgColor: '#141414',
    textColor: '#FF4D00',
    initialX: -60,
    initialY: 290,
    rotate: 9,
  },
  {
    id: 'st-5',
    label: 'CAT APPROVED',
    icon: '🐾',
    bgColor: '#FF4D00',
    textColor: '#FFFFFF',
    initialX: 20,
    initialY: 380,
    rotate: -6,
  },
];

export const DraggableStickers: React.FC<{ containerRef?: React.RefObject<HTMLDivElement> }> = ({
  containerRef,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden hidden xl:block">
      {/* Left Sticker Column */}
      <div className="absolute left-4 top-24 bottom-24 w-48 pointer-events-none">
        {initialStickers.slice(0, 3).map((st) => (
          <motion.div
            key={st.id}
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.08, rotate: st.rotate * 1.5 }}
            whileDrag={{ scale: 1.15, rotate: st.rotate * 2, zIndex: 100 }}
            onDragStart={() => sound.playPop()}
            onDragEnd={() => sound.playPluck()}
            initial={{ opacity: 0, scale: 0.8, x: st.initialX, y: st.initialY, rotate: st.rotate }}
            animate={{ opacity: 1, scale: 1, x: st.initialX, y: st.initialY, rotate: st.rotate }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{
              backgroundColor: st.bgColor,
              color: st.textColor,
            }}
            className="pointer-events-auto absolute cursor-grab active:cursor-grabbing px-3.5 py-2 rounded-2xl shadow-xl border-2 border-[#141414]/15 flex items-center gap-2 text-xs font-black tracking-wider uppercase select-none transition-shadow hover:shadow-2xl"
          >
            <span className="text-sm">{st.icon}</span>
            <span>{st.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Right Sticker Column */}
      <div className="absolute right-4 top-24 bottom-24 w-48 pointer-events-none">
        {initialStickers.slice(3).map((st) => (
          <motion.div
            key={st.id}
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.08, rotate: st.rotate * 1.5 }}
            whileDrag={{ scale: 1.15, rotate: st.rotate * 2, zIndex: 100 }}
            onDragStart={() => sound.playPop()}
            onDragEnd={() => sound.playPluck()}
            initial={{ opacity: 0, scale: 0.8, x: st.initialX, y: st.initialY, rotate: st.rotate }}
            animate={{ opacity: 1, scale: 1, x: st.initialX, y: st.initialY, rotate: st.rotate }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{
              backgroundColor: st.bgColor,
              color: st.textColor,
            }}
            className="pointer-events-auto absolute cursor-grab active:cursor-grabbing px-3.5 py-2 rounded-2xl shadow-xl border-2 border-[#141414]/15 flex items-center gap-2 text-xs font-black tracking-wider uppercase select-none transition-shadow hover:shadow-2xl"
          >
            <span className="text-sm">{st.icon}</span>
            <span>{st.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

