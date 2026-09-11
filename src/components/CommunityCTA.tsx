import React from 'react';
import { Facebook, Youtube, Flame, Shield, ArrowUpRight } from 'lucide-react';
import { TEAM_INFO } from '../data/esportsData';

export const CommunityCTA: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-red-950 via-[#0e0f14] to-zinc-950 border-y border-red-900/40">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444408_1px,transparent_1px),linear-gradient(to_bottom,#ef444408_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-700/60 text-red-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>BANGLADESH FREE FIRE COMMUNITY</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">CREW</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8">
            Follow Pirate Esports and stay connected with every match, milestone and moment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              id="cta-facebook-btn"
              className="w-full sm:w-auto px-8 py-4 btn-premium bg-[#1877f2] hover:bg-[#166fe5] text-white font-heading text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2.5 clip-angled-button group"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span>FOLLOW ON FACEBOOK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              id="cta-youtube-btn"
              className="w-full sm:w-auto px-8 py-4 btn-premium bg-[#ff0000] hover:bg-[#e60000] text-white font-heading text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded shadow-lg shadow-red-900/40 flex items-center justify-center gap-2.5 clip-angled-button group"
            >
              <Youtube className="w-4 h-4 fill-current" />
              <span>SUBSCRIBE ON YOUTUBE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-zinc-500 font-semibold tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-red-500" /> OFFICIAL BROADCASTS
            </span>
            <span>•</span>
            <span>EXCLUSIVE HIGHLIGHTS</span>
            <span>•</span>
            <span>COMMUNITY GIVEAWAYS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
