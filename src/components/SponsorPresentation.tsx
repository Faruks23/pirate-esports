import React from 'react';
import { SPONSORSHIP_BENEFITS, SPONSORSHIP_TIERS } from '../data/esportsData';
import { Eye, Users, Video, Trophy, Shield, Globe, ArrowRight, CheckCircle2, Crown, Sparkles, FileText } from 'lucide-react';

interface SponsorPresentationProps {
  onDiscussPartnership: (tierName?: string) => void;
}

export const SponsorPresentation: React.FC<SponsorPresentationProps> = ({ onDiscussPartnership }) => {
  const benefitIcons = [Eye, Users, Video, Trophy, Shield, Globe];

  return (
    <section id="why-partner" className="py-24 relative bg-[#070709] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-orange-500 uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            COMMERCIAL & SPONSOR SUITE
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            PARTNERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-500">TIERS & ROI</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A high-growth esports property delivering authentic community connection, national stage-level visibility, and measurable commercial value.
          </p>
        </div>

        {/* 1. Structured Sponsorship Tiers */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase block">
                COMMERCIAL INVENTORY
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                SPONSORSHIP PACKAGES & TIERS
              </h3>
            </div>
            <span className="text-xs text-zinc-400 hidden sm:inline-block">
              2026 Competitive Campaign
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SPONSORSHIP_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-gradient-to-b from-[#190e12] to-[#0c0d12] border-2 border-red-500 shadow-[0_0_35px_rgba(239,68,68,0.25)]'
                    : 'bg-[#0d0e14] border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-heading text-[11px] font-black tracking-widest uppercase shadow-md flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" />
                    <span>FLAGSHIP PARTNERSHIP</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
                      {tier.badge}
                    </span>
                    <span className="text-[11px] font-bold text-red-400 uppercase">
                      {tier.investmentLevel}
                    </span>
                  </div>

                  <h4 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {tier.name}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {tier.tagline}
                  </p>

                  <div className="pt-4 border-t border-zinc-800/80 mb-6">
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-3">
                      KEY DELIVERABLES INCLUDED:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => onDiscussPartnership(tier.name)}
                    className={`w-full py-3.5 px-4 font-heading text-xs font-bold tracking-widest uppercase rounded flex items-center justify-center gap-2 cursor-pointer ${
                      tier.isPopular
                        ? 'btn-premium-primary clip-angled-button'
                        : 'btn-premium-secondary'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>REQUEST {tier.isPopular ? 'FLAGSHIP' : 'TIER'} PROPOSAL</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Deliverables & Value Proposition Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-orange-400 uppercase block mb-1">
              PROVEN AUDIENCE ACTIVATION
            </span>
            <h3 className="font-heading text-3xl font-black text-white uppercase tracking-tight">
              DELIVERABLES & ACTIVATION GRID
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPONSORSHIP_BENEFITS.map((b, idx) => {
              const IconComp = benefitIcons[idx % benefitIcons.length];
              return (
                <div
                  key={b.id}
                  className="bg-[#0d0e14] border border-zinc-800 rounded-xl p-7 flex flex-col justify-between hover:border-orange-500/60 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-orange-950/40 border border-orange-800/40 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="font-heading text-2xl font-black text-white uppercase tracking-wider mb-2 group-hover:text-orange-400 transition-colors">
                      {b.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {b.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                    {b.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Dedicated Proposal Request System Banner */}
        <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 text-center max-w-3xl mx-auto flex flex-col items-center shadow-xl">
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
            READY TO POWER BANGLADESH'S NEXT CHAMPIONS?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mb-6">
            We build bespoke partnership proposals tailored to your marketing goals, product category, and target audience segments with verified deliverables.
          </p>

          <button
            onClick={() => onDiscussPartnership()}
            id="discuss-partnership-btn"
            className="px-8 py-4 btn-premium-primary text-white font-heading text-sm font-bold tracking-widest uppercase clip-angled-button flex items-center gap-2 cursor-pointer group"
          >
            <span>REQUEST CUSTOM PARTNERSHIP DECK</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
