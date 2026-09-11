import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

interface ScrollProgressProps {
  /**
   * The DOM ID of the main content element to track scrolling through.
   * Defaults to 'main-content'.
   */
  targetId?: string;
  /**
   * Optional custom class for the outer wrapper
   */
  className?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  targetId = 'main-content',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const rawProgress = useMotionValue(0);

  // Smooth spring physics for fluid responsiveness without abrupt jumps
  const smoothProgress = useSpring(rawProgress, {
    stiffness: shouldReduceMotion ? 1000 : 380,
    damping: shouldReduceMotion ? 60 : 36,
    restDelta: 0.001,
  });

  useEffect(() => {
    let ticking = false;

    const calculateProgress = () => {
      const el = document.getElementById(targetId);
      if (!el) {
        // Fallback to full window scroll height if target element is not present
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
          const current = Math.min(1, Math.max(0, window.scrollY / docHeight));
          rawProgress.set(current);
        }
        return;
      }

      const rect = el.getBoundingClientRect();
      const elementHeight = el.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = Math.max(1, elementHeight - windowHeight);

      // When the top of the element is at the viewport top, scrolled is 0.
      // As the user scrolls down, rect.top becomes negative.
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));

      rawProgress.set(progress);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Calculate initial position on mount
    calculateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Additional check in case content renders or images load
    const timer = setTimeout(calculateProgress, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, [targetId, rawProgress]);

  return (
    <div
      id="scroll-progress-indicator"
      role="progressbar"
      aria-label="Main content scroll progress"
      className={`fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none bg-black/40 backdrop-blur-[1px] ${className}`}
    >
      {/* Thin Red Progress Bar */}
      <motion.div
        className="relative h-full w-full bg-gradient-to-r from-red-700 via-red-500 to-orange-500 shadow-[0_0_10px_rgba(239,68,68,0.85),0_0_4px_rgba(249,115,22,0.6)]"
        style={{
          scaleX: smoothProgress,
          transformOrigin: '0% 50%',
        }}
      >
        {/* Leading Laser Flare Tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#ffffff,0_0_12px_#ef4444] pointer-events-none" />
      </motion.div>
    </div>
  );
};
