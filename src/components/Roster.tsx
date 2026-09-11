import React from 'react';
import { PLAYERS } from '../data/esportsData';
import { Player } from '../types';
import { PlayerCard } from './PlayerCard';
import { Users, Shield, ArrowRight } from 'lucide-react';

interface RosterProps {
  onSelectPlayer: (player: Player) => void;
  onOpenFullRosterModal: () => void;
}

export const Roster: React.FC<RosterProps> = ({ onSelectPlayer, onOpenFullRosterModal }) => {
  return (
    <section id="team" className="py-24 relative bg-[#09090d] border-t border-zinc-900">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-2">
              <Users className="w-3.5 h-3.5" />
              CURRENT COMPETITIVE ROSTER
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">CREW</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              The verified four-man squad that carried Pirate Esports to the FFWS Bangladesh 2026 Fall Grand Finals podium.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={onOpenFullRosterModal}
              id="view-full-roster-btn"
              className="px-6 py-3 btn-premium-secondary text-zinc-200 hover:text-white font-heading text-sm font-bold tracking-wider uppercase rounded clip-angled-button flex items-center gap-2 cursor-pointer group shadow-lg"
            >
              <span>VIEW FULL ROSTER</span>
              <ArrowRight className="w-4 h-4 text-red-500 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLAYERS.map((player) => (
            <PlayerCard key={player.id} player={player} onSelect={onSelectPlayer} />
          ))}
        </div>

        {/* Bottom Banner with Verification Badge */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-[#0e1017] border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-950/80 border border-red-800/60 flex items-center justify-center text-red-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-white uppercase">
                OFFICIAL GARENA FREE FIRE REGISTERED ROSTER
              </h4>
              <p className="text-xs text-zinc-400">
                All 4 athletes are officially registered under Pirate Esports Bangladesh for the 2026 Competitive Campaign.
              </p>
            </div>
          </div>

          <div className="text-right sm:shrink-0">
            <span className="inline-block text-[11px] font-bold tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded-full uppercase">
              ACTIVE COMPETITORS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
