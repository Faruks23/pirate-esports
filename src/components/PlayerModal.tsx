import React from 'react';
import { Player } from '../types';
import { X, Crosshair, Shield, Award, Facebook, Youtube, Instagram } from 'lucide-react';

interface PlayerModalProps {
  player: Player | null;
  onClose: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative bg-[#0d0e14] border border-zinc-700/80 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/80 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12">
          {/* Player Photo Column */}
          <div className="sm:col-span-5 relative bg-gradient-to-b from-zinc-900 to-black min-h-[300px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
            <img
              src={player.image}
              alt={player.nickname}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-transparent to-transparent sm:hidden" />
            <div className="absolute bottom-3 left-3 bg-red-600 text-white font-heading font-black text-xs uppercase px-2.5 py-1 rounded">
              JERSEY #{player.number || '00'}
            </div>
          </div>

          {/* Player Data Column */}
          <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase bg-red-950/80 border border-red-800/60 px-2.5 py-0.5 rounded">
                  {player.role}
                </span>
                <span className="text-[11px] font-semibold text-zinc-400">
                  {player.country} (BD)
                </span>
              </div>

              <h3 className="font-heading text-4xl font-black text-white uppercase tracking-wide">
                {player.nickname}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-3 mb-6">
                {player.bio}
              </p>

              {/* Verified Competitor Stats */}
              <div className="space-y-2 mb-6">
                <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  TOURNAMENT PROFILE
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {player.stats?.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between p-2.5 rounded bg-zinc-900/80 border border-zinc-800 text-xs"
                    >
                      <span className="text-zinc-400 uppercase font-medium">{stat.label}</span>
                      <span className="text-white font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom: Verified badge & Socials */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <Shield className="w-4 h-4" />
                <span>Verified Pro Athlete</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 rounded"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 rounded"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 rounded"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
