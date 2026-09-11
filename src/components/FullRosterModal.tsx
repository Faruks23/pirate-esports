import React from 'react';
import { PLAYERS, TEAM_INFO } from '../data/esportsData';
import { Player } from '../types';
import { X, Shield, Crosshair, Trophy } from 'lucide-react';

interface FullRosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlayer: (player: Player) => void;
}

export const FullRosterModal: React.FC<FullRosterModalProps> = ({ isOpen, onClose, onSelectPlayer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div
        className="relative bg-[#0d0e14] border border-zinc-700/80 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-1">
              <Shield className="w-4 h-4" />
              OFFICIAL BANGLADESH FREE FIRE ROSTER
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              PIRATE ESPORTS LINEUP
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs text-zinc-300">
                <span className="text-white font-bold block uppercase">FFWS BANGLADESH 2026 FALL SQUAD</span>
                This active starting roster scored 155 points and claimed 2nd place in the national grand finals.
              </div>
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase bg-black/50 px-3 py-1 rounded border border-amber-500/40 shrink-0">
              RUNNER-UP SQUAD
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PLAYERS.map((player) => (
              <div
                key={player.id}
                onClick={() => {
                  onClose();
                  onSelectPlayer(player);
                }}
                className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-red-500/80 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(220,38,38,0.25)] flex items-center gap-4 group relative overflow-hidden"
              >
                {/* Subtle top red laser accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-16 h-20 rounded-lg overflow-hidden bg-black shrink-0 border border-zinc-700 group-hover:border-red-500/60 transition-colors shadow-sm">
                  <img
                    src={player.image}
                    alt={player.nickname}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-black text-white group-hover:text-red-400 transition-colors uppercase truncate">
                      {player.nickname}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      #{player.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 my-1">
                    <span className="text-[10px] font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded uppercase">
                      {player.role}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      {player.country} (BD)
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-500 truncate">
                    {player.stats?.[1]?.label}: {player.stats?.[1]?.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-black/40 flex items-center justify-between text-xs text-zinc-500">
          <span>Official Roster Version 2026.1 • Bangladesh</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-heading font-bold uppercase rounded"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
