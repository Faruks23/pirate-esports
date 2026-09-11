import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { STATS_STRIP } from '../data/esportsData';
import { Trophy, Calendar, Target, DollarSign } from 'lucide-react';

export const AchievementStats: React.FC = () => {
  const icons = [Trophy, Calendar, Target, DollarSign];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="stats-strip" className="relative z-20 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0e0f14]/95 border border-zinc-800/90 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
        {/* Top Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS_STRIP.map((stat, index) => {
            const IconComponent = icons[index % icons.length];
            const delay = index * 0.12;

            return (
              <div
                key={stat.id}
                className="relative p-6 sm:p-7 flex flex-col justify-between group hover:bg-zinc-900/40 transition-colors duration-300 overflow-hidden"
              >
                {/* Subtle Glow corner */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/15 transition-colors pointer-events-none" />

                <div className="flex items-center justify-between mb-2 relative z-10">
                  {/* Category Pill with Entrance Shift */}
                  <motion.div
                    className="flex items-center gap-1.5"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, delay }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-sm bg-red-500 inline-block shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                      initial={shouldReduceMotion ? {} : { scale: 0.5 }}
                      whileInView={
                        shouldReduceMotion
                          ? {}
                          : {
                              scale: [0.5, 1.8, 1],
                            }
                      }
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.6, delay: delay + 0.15 }}
                    />
                    <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                      {stat.highlight}
                    </span>
                  </motion.div>

                  {/* Pulsing Achievement Badge with Radiant Shockwave Ring */}
                  <div className="relative flex items-center justify-center">
                    {/* Expanding Radiant Shockwave Ring that pulses outward when scrolled into view */}
                    {!shouldReduceMotion && (
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-red-500/35 border border-red-400/60 pointer-events-none"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{
                          scale: [0.8, 1.7, 2.15],
                          opacity: [0.95, 0.4, 0],
                        }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{
                          duration: 1.1,
                          delay: delay + 0.12,
                          ease: 'easeOut',
                        }}
                      />
                    )}

                    {/* Secondary Fiery Ambient Glow Bloom */}
                    {!shouldReduceMotion && (
                      <motion.div
                        className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 to-orange-500 blur-md pointer-events-none"
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{
                          opacity: [0, 0.75, 0.25],
                          scale: [0.6, 1.4, 1],
                        }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{
                          duration: 0.85,
                          delay,
                          ease: 'easeOut',
                        }}
                      />
                    )}

                    {/* Core Badge with Growth 'Pulse' Entrance Animation */}
                    <motion.div
                      className="relative w-8 h-8 rounded-lg bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-center text-zinc-300 group-hover:text-red-400 group-hover:border-red-500/60 shadow-md group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-colors duration-300"
                      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.45 }}
                      whileInView={
                        shouldReduceMotion
                          ? { opacity: 1, scale: 1 }
                          : {
                              opacity: 1,
                              scale: [0.45, 1.3, 0.94, 1.08, 1],
                            }
                      }
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{
                        duration: shouldReduceMotion ? 0.01 : 0.8,
                        delay,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                    >
                      <IconComponent className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                  </div>
                </div>

                {/* Big Dominant Number with Milestone Growth Entrance */}
                <motion.div
                  className="my-2"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: 12 }}
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1, scale: 1, y: 0 }
                      : {
                          opacity: 1,
                          scale: [0.8, 1.08, 1],
                          y: 0,
                        }
                  }
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.6,
                    delay: delay + 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-orange-200 group-hover:to-red-400 transition-all">
                    {stat.number}
                  </span>
                </motion.div>

                {/* Description Label */}
                <motion.p
                  className="font-heading text-xs sm:text-sm font-bold tracking-wider text-zinc-400 uppercase leading-snug group-hover:text-zinc-300 transition-colors"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.45,
                    delay: delay + 0.16,
                  }}
                >
                  {stat.label}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
