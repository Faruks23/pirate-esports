import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { TEAM_INFO } from '../data/esportsData';
import { Shield, Sparkles, Crosshair } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number; // in milliseconds
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minDuration = 1600,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    }

    const interval = 25; // ms
    const step = 100 / (minDuration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 350);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [minDuration, onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    setIsVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07070a] overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 1.04,
            filter: shouldReduceMotion ? 'none' : 'blur(4px)',
            transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          {/* Background Ambient Glow Auras */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/25 via-[#0c0d14] to-[#07070a] pointer-events-none" />

          <motion.div
            className="absolute w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[90px] pointer-events-none"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute w-[320px] h-[320px] bg-orange-600/15 rounded-full blur-[70px] pointer-events-none"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1.1, 0.9, 1.1],
                    opacity: [0.3, 0.6, 0.3],
                  }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Centered Animated Team Emblem */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm">
            {/* Emblem Container with Luminous Rotating Halo */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Outer Rotating Cyber Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-dashed border-red-500/40 pointer-events-none"
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Inner Pulsing Hexagonal / Circular Aura */}
              <motion.div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-red-600/40 via-orange-500/30 to-red-600/40 blur-md pointer-events-none"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [0.96, 1.06, 0.96],
                        opacity: [0.6, 1, 0.6],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Logo Emblem Frame */}
              <motion.div
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#0e1017] border-2 border-red-500/80 p-2 overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.5)] flex items-center justify-center clip-corner-tr"
                initial={shouldReduceMotion ? { scale: 1 } : { scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <img
                  src={TEAM_INFO.logo}
                  alt="Pirate Esports Official Team Emblem"
                  className="w-full h-full object-cover rounded-xl filter contrast-110 brightness-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle sheen highlight swipe */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                    repeatDelay: 0.5,
                  }}
                />
              </motion.div>
            </div>

            {/* Team Identity Typography */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase mb-2">
                <Crosshair className="w-3 h-3 text-red-400 animate-spin" />
                <span>BANGLADESH COMPETITIVE ROSTER</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-wider text-white uppercase">
                PIRATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">ESPORTS</span>
              </h1>

              <p className="text-xs text-zinc-400 tracking-widest font-heading font-bold uppercase mt-1">
                {TEAM_INFO.slogan}
              </p>
            </motion.div>

            {/* High-Tech Loading Progress Bar */}
            <div className="w-full max-w-xs mt-8">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
                <span className="tracking-wider uppercase text-zinc-500 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-red-500" />
                  INITIALIZING
                </span>
                <span className="font-bold text-red-400">{Math.round(progress)}%</span>
              </div>

              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="text-[10px] text-zinc-500 tracking-widest mt-2 uppercase">
                FFWS BANGLADESH 2026 FALL RUNNER-UP
              </div>
            </div>

            {/* Skip Option */}
            <button
              onClick={handleSkip}
              className="mt-6 text-[11px] font-mono text-zinc-500 hover:text-zinc-300 tracking-widest uppercase transition-colors underline underline-offset-4 cursor-pointer"
            >
              SKIP INTRO
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
