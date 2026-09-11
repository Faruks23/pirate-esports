import React from 'react';
import { SPONSORS, TEAM_INFO } from '../data/esportsData';
import { Handshake, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface SponsorsProps {
  onBecomeSponsor: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onBecomeSponsor }) => {
  return (
    <section id="sponsors" className="py-24 relative bg-[#090a0f] border-t border-zinc-900">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-2">
            <Handshake className="w-4 h-4" />
            PARTNERSHIPS & ALLIANCES
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            POWERED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">PARTNERS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Fueling elite tournament performance, athlete development, and digital fan experiences across Bangladesh.
          </p>
        </div>

        {/* Current Sponsors / Partners Grid with Clear Demo Placeholder Badging */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group relative bg-[#0d0e14] border border-zinc-800 rounded-xl p-6 flex flex-col justify-between items-center text-center hover:border-red-500/60 transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              {/* Demo Notice Tag */}
              <div className="w-full flex justify-end mb-2">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                  DEMO SLOT
                </span>
              </div>

              {/* Logo Card Center */}
              <div className="my-6 w-full h-24 rounded-lg bg-black/50 border border-zinc-800/80 flex items-center gap-3 p-3 group-hover:border-red-500/40 transition-colors">
                <div className="w-14 h-14 shrink-0 rounded-md overflow-hidden border border-red-500/40 bg-zinc-950">
                  <img
                    src={TEAM_INFO.logo}
                    alt={`${sponsor.name} demo logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 text-left">
                  <span className="font-heading text-lg sm:text-xl font-black tracking-wider text-zinc-300 group-hover:text-white uppercase transition-colors block truncate">
                    {sponsor.name}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-red-400 font-bold block">
                    {sponsor.subText}
                  </span>
                </div>
              </div>

              {/* Category info */}
              <div className="w-full">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide block mb-1">
                  {sponsor.category}
                </span>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Partnership CTA Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-red-950/70 via-zinc-950 to-[#160d10] border border-red-500/40 p-8 sm:p-12 shadow-[0_0_40px_rgba(220,38,38,0.2)] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                SPONSORSHIP OPPORTUNITY
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                PUT YOUR BRAND ON THE BATTLEFIELD
              </h3>

              <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                Partner with Pirate Esports and connect your brand with a passionate gaming community and competitive esports audience.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                onClick={onBecomeSponsor}
                id="become-a-sponsor-btn"
                className="w-full sm:w-auto px-8 py-4 btn-premium-primary text-white font-heading text-base font-black tracking-wider uppercase cursor-pointer clip-angled-button flex items-center justify-center gap-2 group"
              >
                <span>BECOME A SPONSOR</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-[11px] text-zinc-400 mt-3 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-zinc-500" /> Custom deck & tier packages available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
