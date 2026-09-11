import React from 'react';
import { ArrowRight, Trophy, Flame, Shield, ChevronDown } from 'lucide-react';
import { TEAM_INFO } from '../data/esportsData';

interface HeroProps {
  onExploreTeam: () => void;
  onViewAchievements: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTeam, onViewAchievements }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#070709]"
    >
      {/* Background Arena Image with Dark Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={TEAM_INFO.heroBg}
          alt="Esports Arena Background"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered Gradients for Deep Cinematic Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/75 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/35 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070709] to-transparent" />
        {/* Esports Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444408_1px,transparent_1px),linear-gradient(to_bottom,#ef444408_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* High-Impact Achievement Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-red-950/80 via-zinc-900/90 to-red-950/80 border border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.3)] mb-6 md:mb-8 backdrop-blur-md animate-fade-in">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-red-600 text-black shadow-inner">
              <Trophy className="w-3.5 h-3.5 text-zinc-950" />
            </div>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-widest text-amber-300 uppercase">
              FFWS BANGLADESH 2026 FALL — RUNNER-UP
            </span>
            <div className="hidden sm:inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/60">
              OFFICIAL
            </div>
          </div>

          {/* Main Esports Heading */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-3 drop-shadow-2xl">
            PIRATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">ESPORTS</span>
          </h1>

          {/* Slogan & Tagline */}
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="h-[2px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-red-500" />
            <p className="font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-[0.25em] text-zinc-200 uppercase">
              BUILT TO COMPETE. BORN TO CONQUER.
            </p>
            <span className="h-[2px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-red-500" />
          </div>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Bangladesh's competitive Free Fire esports organization. Representing the nation with discipline, strategic grit, and podium finishes.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreTeam}
              id="hero-explore-team-btn"
              className="w-full sm:w-auto px-8 py-4 btn-premium-primary font-heading text-base font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer clip-angled-button group"
            >
              <span>EXPLORE THE TEAM</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onViewAchievements}
              id="hero-achievements-btn"
              className="w-full sm:w-auto px-8 py-4 btn-premium-secondary font-heading text-base font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer clip-angled-button"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>OUR ACHIEVEMENTS</span>
            </button>
          </div>

          {/* Quick Specs Micro Strip */}
          <div className="mt-12 pt-8 border-t border-white/5 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl text-zinc-400 text-xs tracking-wider uppercase">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>REGION: BANGLADESH</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>DISCIPLINE: FREE FIRE</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 text-red-400">
              <Shield className="w-3.5 h-3.5 text-red-500" />
              <span>SEASON: 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors hidden md:block">
        <a href="#stats-strip" aria-label="Scroll to statistics">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
