import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/esportsData';
import { Trophy, Award, Calendar, DollarSign, Target, ChevronRight, PlusCircle, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('ffws-bd-2026-fall');
  const featured = ACHIEVEMENTS.find((a) => a.isFeatured) || ACHIEVEMENTS[0];

  return (
    <section id="achievements" className="py-24 relative bg-[#070709] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-500 uppercase mb-2">
            <Trophy className="w-4 h-4" />
            HONOR & PODIUM FINISHES
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            HALL OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">ACHIEVEMENTS</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Documenting Pirate Esports' journey through major Garena Free Fire tournaments and national championship circuits.
          </p>
        </div>

        {/* Featured Achievement Showcase Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#141216] via-[#0d0d12] to-[#070709] border border-amber-500/40 p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(245,158,11,0.15)] mb-16 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-amber-500/20 to-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Featured Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-widest uppercase">
              <Award className="w-4 h-4 text-amber-400" />
              <span>FEATURED HISTORIC MILESTONE</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              <span>SEASON 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Title & Narrative */}
            <div className="lg:col-span-7">
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                GARENA FREE FIRE OFFICIAL CHAMPIONSHIP
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
                FFWS BANGLADESH 2026 FALL
              </h3>
              
              <div className="inline-block px-4 py-1.5 rounded bg-gradient-to-r from-red-600 to-amber-600 text-white font-heading text-lg sm:text-xl font-black uppercase tracking-wider mb-5 shadow-md">
                RUNNER-UP (2ND PLACE)
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                {featured.description}
              </p>

              {/* Status pill */}
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Officially Recorded on Liquipedia & Garena Esports BD</span>
              </div>
            </div>

            {/* 3 Core Highlight Stat Blocks: 2ND PLACE, 155 POINTS, $9,765 PRIZE */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-black/60 border border-amber-500/30 rounded-xl p-4 text-center flex flex-col justify-center">
                <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-widest mb-1">
                  PLACEMENT
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-black text-white">
                  2ND PLACE
                </span>
                <span className="text-[10px] text-zinc-400 mt-1">Podium Finish</span>
              </div>

              <div className="bg-black/60 border border-amber-500/30 rounded-xl p-4 text-center flex flex-col justify-center">
                <span className="text-[10px] font-bold text-orange-400/80 uppercase tracking-widest mb-1">
                  FINAL POINTS
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-black text-white">
                  155 PTS
                </span>
                <span className="text-[10px] text-zinc-400 mt-1">Grand Finals Total</span>
              </div>

              <div className="bg-black/60 border border-amber-500/30 rounded-xl p-4 text-center flex flex-col justify-center">
                <span className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-widest mb-1">
                  PRIZE WON
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-black text-emerald-400">
                  $9,765
                </span>
                <span className="text-[10px] text-zinc-400 mt-1">Official Award</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline / Extensible Achievements Archive */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase text-white">
                TOURNAMENT TIMELINE
              </h3>
              <p className="text-xs text-zinc-400">
                Chronological record of competitive Free Fire campaigns.
              </p>
            </div>
            <span className="text-xs font-semibold text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800 uppercase">
              2026 SEASON ARCHIVE
            </span>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-zinc-900/90 border-red-500/60 shadow-lg'
                      : 'bg-zinc-950/70 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-black/60 border border-zinc-800 flex items-center justify-center text-amber-400 font-heading font-black text-lg">
                        {item.year}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading text-lg sm:text-xl font-bold text-white uppercase">
                            {item.tournament}
                          </h4>
                          {item.isFeatured && (
                            <span className="hidden sm:inline-block text-[10px] font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded uppercase">
                              RUNNER-UP
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-red-400 font-semibold tracking-wider uppercase mt-0.5">
                          {item.placement} {item.points ? `• ${item.points}` : ''} {item.prize ? `• ${item.prize}` : ''}
                        </p>
                      </div>
                    </div>

                    <div className="text-zinc-400">
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90 text-red-400' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-zinc-800/80 bg-black/30">
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {item.stats.map((st) => (
                          <div key={st.label} className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800">
                            <span className="text-[10px] text-zinc-500 uppercase block font-semibold">
                              {st.label}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5 block">
                              {st.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Extensible placeholder slot showing future verified entries can easily be added */}
            <div className="p-4 rounded-xl border border-dashed border-zinc-800 bg-zinc-950/30 flex items-center justify-between text-zinc-500 text-xs">
              <div className="flex items-center gap-3">
                <PlusCircle className="w-4 h-4 text-zinc-600" />
                <span>Next Tournament Log will automatically slot into the 2026 Competitive Archive</span>
              </div>
              <span className="text-[11px] font-mono uppercase text-zinc-600">STANDBY FOR FFBPL S4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
