import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export const MouseFollower: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse position motion values
  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);

  // Responsive spring physics for smooth fluid tracking
  const springX = useSpring(rawX, { stiffness: 280, damping: 28, mass: 0.4 });
  const springY = useSpring(rawY, { stiffness: 280, damping: 28, mass: 0.4 });

  // Secondary delayed spring for a layered fluid tail aura
  const trailX = useSpring(rawX, { stiffness: 120, damping: 24, mass: 0.8 });
  const trailY = useSpring(rawY, { stiffness: 120, damping: 24, mass: 0.8 });

  useEffect(() => {
    // Detect touch / fine pointer capabilities
    if (typeof window !== 'undefined') {
      const finePointer = window.matchMedia('(pointer: fine)');
      setIsTouchDevice(!finePointer.matches);

      const updatePointerType = (e: MediaQueryListEvent) => {
        setIsTouchDevice(!e.matches);
      };

      finePointer.addEventListener('change', updatePointerType);
      return () => finePointer.removeEventListener('change', updatePointerType);
    }
  }, []);

  useEffect(() => {
    if (isTouchDevice || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if element under cursor is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer') ||
          target.closest('button') !== null ||
          target.closest('a') !== null;

        setIsHoveringClickable(Boolean(isClickable));
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice, isVisible, rawX, rawY, shouldReduceMotion]);

  // If on touch screens or reduced-motion is requested, don't display
  if (isTouchDevice || shouldReduceMotion) {
    return null;
  }

  return (
    <div
      id="global-mouse-follower-glow"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none"
    >
      {/* Outer Soft Red Atmosphere (Wider halo) */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none will-change-transform"
        style={{
          x: trailX,
          y: trailY,
          width: isHoveringClickable ? 520 : 420,
          height: isHoveringClickable ? 520 : 420,
          background: isHoveringClickable
            ? 'radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, rgba(220, 38, 38, 0.05) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.03) 45%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.35s ease-out, height 0.35s ease-out, opacity 0.3s ease-out',
        }}
      />

      {/* Inner Focused Radiant Core (Highlights cards & borders beneath cursor) */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none will-change-transform"
        style={{
          x: springX,
          y: springY,
          width: isHoveringClickable ? 220 : 160,
          height: isHoveringClickable ? 220 : 160,
          background: isHoveringClickable
            ? 'radial-gradient(circle, rgba(239, 68, 68, 0.20) 0%, rgba(249, 115, 22, 0.10) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(239, 68, 68, 0.14) 0%, rgba(249, 115, 22, 0.06) 40%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.3s ease-out, height 0.3s ease-out, opacity 0.25s ease-out',
        }}
      />

      {/* Subtle Micro Pinpoint Center Beam */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none will-change-transform"
        style={{
          x: springX,
          y: springY,
          width: isHoveringClickable ? 40 : 24,
          height: isHoveringClickable ? 40 : 24,
          background: 'radial-gradient(circle, rgba(255, 120, 100, 0.25) 0%, rgba(239, 68, 68, 0.10) 60%, transparent 100%)',
          opacity: isVisible ? 0.9 : 0,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out',
        }}
      />
    </div>
  );
};
