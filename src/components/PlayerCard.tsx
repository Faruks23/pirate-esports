import React from 'react';
import { Player } from '../types';
import { Shield, Sparkles, Youtube, Facebook, Instagram, Crosshair } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  onSelect: (player: Player) => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, onSelect }) => {
  return (
    <div className="group relative transition-transform duration-300 hover:z-20">
      {/* Outer ambient glow halo that expands and illuminates on hover */}
      <div
        className="absolute -inset-1.5 rounded-2xl bg-gradient-to-b from-red-600/0 via-red-500/0 to-orange-500/0 group-hover:from-red-600/35 group-hover:via-red-500/25 group-hover:to-orange-500/25 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none -z-10 group-hover:scale-105"
        aria-hidden="true"
      />

      <div
        onClick={() => onSelect(player)}
        className="relative bg-[#0c0d12] border border-zinc-800/90 group-hover:border-red-500/90 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:scale-[1.03] shadow-xl group-hover:shadow-[0_0_35px_rgba(239,68,68,0.35),0_20px_35px_rgba(0,0,0,0.85)] group-hover:drop-shadow-[0_10px_20px_rgba(220,38,38,0.25)] flex flex-col clip-corner-tr will-change-transform"
      >
        {/* Subtle Cyber Neon Top Accent Line on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30" />

        {/* Top Banner with Jersey Number & Country */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <span className="font-heading text-xl font-black tracking-widest text-zinc-600 group-hover:text-red-500 transition-colors">
            #{player.number || '00'}
          </span>

          {/* Bangladesh Flag & Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700/60 group-hover:border-red-500/40 text-[11px] font-bold text-zinc-200 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006a4e] flex items-center justify-center overflow-hidden relative">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f42a41] absolute" />
            </span>
            <span className="tracking-wider uppercase">BD</span>
          </div>
        </div>

        {/* Player Image with Background Atmosphere */}
        <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-zinc-900 to-[#070709] overflow-hidden">
          <img
            src={player.image}
            alt={`Esports Player ${player.nickname}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 contrast-105 group-hover:brightness-105"
            referrerPolicy="no-referrer"
          />

          {/* Esports Ambient Glows */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-36 h-36 bg-red-600/20 rounded-full blur-2xl group-hover:bg-red-600/50 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

          {/* Subtle light sweep reflection across portrait on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Floating Role Pill */}
          <div className="absolute bottom-3 left-4 z-20">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-950/80 border border-red-700/60 group-hover:border-red-500 text-red-300 group-hover:text-red-200 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm transition-colors shadow-sm">
              <Crosshair className="w-3 h-3 text-red-400 group-hover:animate-pulse" />
              <span>{player.role}</span>
            </div>
          </div>
        </div>

        {/* Card Info Details */}
        <div className="p-5 flex-1 flex flex-col justify-between relative z-10 bg-[#0c0d12]">
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-heading text-2xl sm:text-3xl font-black tracking-wider text-white group-hover:text-red-400 transition-colors uppercase">
                {player.nickname}
              </h3>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                {player.country}
              </span>
            </div>

            <p className="text-xs text-zinc-400 line-clamp-2 mt-1 mb-4 leading-relaxed group-hover:text-zinc-300 transition-colors">
              {player.bio}
            </p>
          </div>

          {/* Footer info: Specialty + Social Icons */}
          <div className="pt-3 border-t border-zinc-800/80 group-hover:border-zinc-700/80 transition-colors flex items-center justify-between">
            <div className="text-[11px] font-medium text-zinc-400">
              <span className="text-zinc-500 uppercase">Focus: </span>
              <span className="text-zinc-300 font-semibold group-hover:text-red-300 transition-colors">{player.stats?.[1]?.value || 'Tactical Combat'}</span>
            </div>

            {/* Social Icons & Interactive Cue */}
            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <span className="text-[10px] font-bold text-red-400/0 group-hover:text-red-400 transition-all duration-300 uppercase tracking-wider hidden sm:inline-block">
                PROFILE →
              </span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-1 text-zinc-500 hover:text-red-400 transition-colors"
                aria-label={`${player.nickname} on Facebook`}
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-1 text-zinc-500 hover:text-red-400 transition-colors"
                aria-label={`${player.nickname} on YouTube`}
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-1 text-zinc-500 hover:text-red-400 transition-colors"
                aria-label={`${player.nickname} on Instagram`}
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
