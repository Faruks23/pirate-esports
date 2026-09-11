import React, { useState } from 'react';
import { MEDIA_ITEMS, SOCIAL_LINKS } from '../data/esportsData';
import { MediaItem } from '../types';
import { Play, Image as ImageIcon, Video, Youtube, Facebook, Instagram, Music2, ExternalLink, Eye } from 'lucide-react';

interface MediaGalleryProps {
  onSelectMedia: (item: MediaItem) => void;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({ onSelectMedia }) => {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const categories = ['ALL', 'MATCHES', 'TEAM', 'BEHIND THE SCENES', 'COMMUNITY'];

  const filteredItems =
    activeTab === 'ALL'
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((item) => item.category === activeTab);

  const featuredItem = MEDIA_ITEMS[0];

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'youtube':
        return <Youtube className="w-4 h-4 text-red-500" />;
      case 'facebook':
        return <Facebook className="w-4 h-4 text-blue-500" />;
      case 'instagram':
        return <Instagram className="w-4 h-4 text-pink-500" />;
      case 'tiktok':
        return <Music2 className="w-4 h-4 text-cyan-400" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="media" className="py-24 relative bg-[#070709] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-2">
            <Video className="w-4 h-4" />
            VISUAL VAULT & HIGHLIGHTS
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            MEDIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">GALLERY</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Tournament arenas, tactical bootcamp moments, decisive clutch plays, and community celebrations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase clip-angled-button ${
                  isActive
                    ? 'btn-premium-primary text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                    : 'btn-premium-secondary text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Large Featured Media Showcase (When in ALL or MATCHES) */}
        {activeTab === 'ALL' && featuredItem && (
          <div
            onClick={() => onSelectMedia(featuredItem)}
            className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d0e14] mb-8 cursor-pointer shadow-2xl hover:border-red-500/60 transition-all duration-300"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full max-h-[480px] overflow-hidden">
              <img
                src={featuredItem.thumbnail}
                alt={featuredItem.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/40 to-transparent" />

              {/* Play Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.7)] group-hover:scale-110 group-hover:bg-red-500 transition-all">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/80 border border-red-700/60 text-red-300 text-xs font-bold tracking-wider uppercase mb-2">
                    FEATURED BROADCAST
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                    {featuredItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-xl line-clamp-2 mt-1">
                    {featuredItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-black/60 px-3 py-1.5 rounded border border-zinc-700 shrink-0">
                  <Eye className="w-3.5 h-3.5 text-red-400" />
                  <span>WATCH PREVIEW</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectMedia(item)}
              className="group relative bg-[#0c0d12] border border-zinc-800/80 rounded-xl overflow-hidden cursor-pointer hover:border-red-500/60 transition-all duration-300 flex flex-col shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-80" />

                {/* Type Icon Badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-white">
                  {item.type === 'video' ? (
                    <Play className="w-3.5 h-3.5 fill-current text-red-400 ml-0.5" />
                  ) : (
                    <ImageIcon className="w-3.5 h-3.5 text-zinc-300" />
                  )}
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-bold tracking-widest text-red-400 bg-red-950/90 border border-red-800/60 px-2 py-0.5 rounded uppercase">
                    {item.viewsOrBadge || item.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-red-400 transition-colors uppercase leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>{item.date}</span>
                  <span className="text-red-400 font-semibold group-hover:underline flex items-center gap-1">
                    VIEW ASSET <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOLLOW OUR JOURNEY Strip */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-[#12131b] to-zinc-950 border border-zinc-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              FOLLOW OUR <span className="text-red-500">JOURNEY</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Join tens of thousands of passionate fans across official Pirate Esports digital channels.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.platform}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/70 hover:border-red-500/60 text-zinc-200 hover:text-white transition-all duration-200 flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider group shadow"
                aria-label={`Follow Pirate Esports on ${soc.platform}`}
              >
                {getPlatformIcon(soc.platform)}
                <span>{soc.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
