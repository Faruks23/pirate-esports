import React, { useState } from 'react';
import { MATCHES } from '../data/esportsData';
import { MatchTournament } from '../types';
import { Swords, Calendar, Radio, Play, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

export const MatchSection: React.FC = () => {
  const [showAllModal, setShowAllModal] = useState(false);
  const upcomingMatches = MATCHES.filter((m) => m.status === 'UPCOMING');
  const recentMatches = MATCHES.filter((m) => m.status === 'COMPLETED');

  return (
    <section id="matches" className="py-24 relative bg-[#090a0f] border-t border-zinc-900">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-2">
              <Swords className="w-3.5 h-3.5" />
              COMPETITIVE CALENDAR
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              TOURNAMENTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">& MATCHES</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              Official campaign matches, verified stage fixtures, and championship performance logs.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => setShowAllModal(true)}
              id="view-all-matches-btn"
              className="px-6 py-3 btn-premium-secondary text-zinc-200 hover:text-white font-heading text-sm font-bold tracking-wider uppercase rounded clip-angled-button flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW ALL MATCHES</span>
              <ExternalLink className="w-4 h-4 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* 2-Column Layout: NEXT BATTLE & RECENT RESULTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: NEXT BATTLE (Upcoming) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-2xl font-black tracking-wider text-white uppercase flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                NEXT BATTLE
              </h3>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/60 border border-orange-800/60 px-3 py-1 rounded">
                SCHEDULED
              </span>
            </div>

            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="flex-1 rounded-xl bg-gradient-to-br from-[#12131a] to-[#0a0b10] border border-orange-500/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-orange-400" />
                      {match.date}
                    </span>
                    <span className="text-[11px] font-bold text-orange-300 bg-orange-950/80 px-2.5 py-0.5 rounded border border-orange-800/80">
                      {match.game}
                    </span>
                  </div>

                  <h4 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
                    {match.title}
                  </h4>

                  <div className="inline-block text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
                    Stage: {match.stage}
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {match.description}
                  </p>

                  <div className="p-4 rounded-lg bg-black/50 border border-zinc-800 mb-6">
                    <div className="text-xs text-zinc-400">
                      <span className="font-bold text-white uppercase block mb-1">TOURNAMENT FORMAT:</span>
                      {match.format}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    <span className="text-zinc-500 block uppercase">Stream Broadcast</span>
                    <span className="text-zinc-200 font-bold">Official Garena Broadcast Channels</span>
                  </div>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-heading text-xs font-bold tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-colors clip-angled-button shadow-lg shadow-orange-950/40"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>WATCH STREAM</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: RECENT RESULTS */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-2xl font-black tracking-wider text-white uppercase flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                RECENT RESULTS
              </h3>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded">
                VERIFIED OUTCOME
              </span>
            </div>

            {recentMatches.map((match) => (
              <div
                key={match.id}
                className="flex-1 rounded-xl bg-gradient-to-br from-[#12131a] to-[#0a0b10] border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {match.date}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/80">
                      COMPLETED
                    </span>
                  </div>

                  <h4 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
                    {match.title}
                  </h4>

                  <div className="inline-block px-3 py-1 rounded bg-red-950/80 border border-red-800 text-red-300 font-heading text-sm font-bold uppercase tracking-wider mb-4">
                    OUTCOME: {match.result}
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {match.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-black/50 border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 uppercase block font-semibold">
                        FINAL SCORE
                      </span>
                      <span className="font-heading text-xl font-bold text-white">
                        {match.points}
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/50 border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 uppercase block font-semibold">
                        PRIZE EARNED
                      </span>
                      <span className="font-heading text-xl font-bold text-emerald-400">
                        {match.prizePool}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    <span className="text-zinc-500 block uppercase">Official Grand Finals VOD</span>
                    <span className="text-zinc-200 font-bold">Recorded on Garena Esports BD</span>
                  </div>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 btn-premium-secondary text-white font-heading text-xs font-bold tracking-widest uppercase rounded flex items-center justify-center gap-2 clip-angled-button"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>WATCH REPLAY</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for "VIEW ALL MATCHES" */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0e1017] border border-zinc-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div>
                <h3 className="font-heading text-2xl font-black text-white uppercase">
                  COMPETITIVE FIXTURES & SCHEDULE
                </h3>
                <p className="text-xs text-zinc-400">
                  Official tournament registry for Pirate Esports
                </p>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {MATCHES.map((m) => (
                <div key={m.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-red-400 font-bold uppercase">{m.status}</span>
                    <span className="text-zinc-500">{m.date}</span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white uppercase">{m.title}</h4>
                  <p className="text-xs text-zinc-300 mt-1">{m.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setShowAllModal(false)}
                className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-heading text-xs font-bold uppercase rounded"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
