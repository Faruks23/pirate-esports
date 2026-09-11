import React from 'react';
import { TEAM_INFO, ABOUT_PILLARS } from '../data/esportsData';
import { ShieldCheck, Target, Users, Flame, Award, Crosshair } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillarIcons = [Crosshair, ShieldCheck, Users, Flame];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070709]">
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 clip-corner-tr shadow-2xl">
                <img
                  src={TEAM_INFO.teamHuddle}
                  alt="Pirate Esports Team Huddle"
                  className="w-full h-auto max-h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />
                
                {/* Floating Inset Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-[#0d0e13]/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase block">
                      BANGLADESH DIVISION
                    </span>
                    <span className="font-heading text-lg font-bold text-white uppercase">
                      PIRATE SQUAD HQ
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded border border-zinc-700">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-zinc-200">EST. {TEAM_INFO.established}</span>
                  </div>
                </div>
              </div>

              {/* Angle Accent Tag */}
              <div className="absolute -top-3 -right-3 bg-red-600 text-white font-heading font-bold text-xs uppercase px-3 py-1 rounded shadow-lg">
                OFFICIAL ROSTER
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Core Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
              <span className="w-2 h-2 rounded-sm bg-red-500" />
              ABOUT PIRATE ESPORTS
            </div>

            {/* Main Section Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-6">
              MORE THAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">A TEAM</span>
            </h2>

            {/* Official Description */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
              {TEAM_INFO.shortBio}
            </p>

            {/* 4 Pillars Grid: COMPETITIVE, DISCIPLINE, COMMUNITY, AMBITION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_PILLARS.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <div
                    key={pillar.keyword}
                    className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80 hover:border-red-500/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded bg-red-950/60 border border-red-800/60 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-heading text-base font-bold tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                        {pillar.keyword}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
