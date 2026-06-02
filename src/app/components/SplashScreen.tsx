import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #0038A8 0%, #CE1126 100%)' }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mb-8"
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Fencer Body */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            d="M 35 260 L 50 260 L 120 200 L 190 200 L 190 260 L 210 260 M 120 200 L 160 130 M 160 130 L 230 130 M 160 130 Q 110 110 60 150"
            stroke="#FCD116"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Sword */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            d="M 230 130 L 300 130"
            stroke="#FCD116"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Bell Guard */}
          <motion.path
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: 'backOut' }}
            d="M 226 115 Q 240 130 226 145"
            stroke="#FCD116"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Head */}
          <motion.circle
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, ease: 'backOut' }}
            cx="170"
            cy="105"
            r="16"
            fill="#FCD116"
          />
          
          {/* Action lines */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
            d="M 100 200 L 50 200 M 130 165 L 80 165 M 140 130 L 90 130"
            stroke="#FCD116"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl mb-2 text-white tracking-wide" style={{ fontWeight: 500 }}>
          Christine Fencing
        </h1>
        <p className="text-xl text-white/90">En Garde</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12"
      >
        <div className="flex gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#FCD116' }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#FCD116' }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#FCD116' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
