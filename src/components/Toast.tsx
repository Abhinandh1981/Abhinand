import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-[9000] flex items-center gap-3 bg-[#141414] text-[#FFF8F5] px-5 py-3.5 rounded-full shadow-2xl border border-white/10"
        >
          <div className="w-7 h-7 rounded-full bg-[#FF4D00] flex items-center justify-center text-white shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-xs md:text-sm font-semibold tracking-wide flex items-center gap-2">
            <span>{message}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF4D00]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

