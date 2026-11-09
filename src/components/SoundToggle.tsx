import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/sound';

export const SoundToggle: React.FC = () => {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(sound.getMuted());
  }, []);

  const handleToggle = () => {
    const isNowMuted = sound.toggleMute();
    setMuted(isNowMuted);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={muted ? 'Enable sound effects' : 'Mute sound effects'}
      className="group flex items-center gap-2 bg-[#FFF8F5]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#141414]/10 hover:border-[#FF4D00] text-[#141414] transition-all shadow-sm active:scale-95 text-xs font-bold uppercase tracking-wider"
      title={muted ? 'Turn Sound ON' : 'Turn Sound OFF'}
    >
      {muted ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#635E5D]" />
          <span className="hidden sm:inline text-[10px] text-[#635E5D]">Sound Off</span>
        </>
      ) : (
        <>
          <div className="flex items-end gap-0.5 h-3.5 w-3.5">
            <span className="w-0.5 bg-[#FF4D00] h-full animate-[pulse_0.6s_ease-in-out_infinite]" />
            <span className="w-0.5 bg-[#FF4D00] h-2/3 animate-[pulse_0.4s_ease-in-out_infinite_0.2s]" />
            <span className="w-0.5 bg-[#FF4D00] h-4/5 animate-[pulse_0.5s_ease-in-out_infinite_0.1s]" />
          </div>
          <span className="hidden sm:inline text-[10px] text-[#FF4D00]">Sound On</span>
        </>
      )}
    </button>
  );
};

