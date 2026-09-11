import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  direction = 'up',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialOffset = () => {
    if (shouldReduceMotion || direction === 'none') {
      return { x: 0, y: 0 };
    }
    switch (direction) {
      case 'up':
        return { x: 0, y: 32 };
      case 'down':
        return { x: 0, y: -32 };
      case 'left':
        return { x: 36, y: 0 };
      case 'right':
        return { x: -36, y: 0 };
      default:
        return { x: 0, y: 30 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      id={id}
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
