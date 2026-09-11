import React from 'react';
import { MediaItem } from '../types';
import { X, Play, ExternalLink, Calendar, Tag } from 'lucide-react';

interface MediaModalProps {
  media: MediaItem | null;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ media, onClose }) => {
  if (!media) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div
        className="relative bg-[#0d0e14] border border-zinc-700/80 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/80 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close media preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview Box */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={media.thumbnail}
            alt={media.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />

          {media.type === 'video' && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Media Meta Details */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-bold tracking-widest text-red-400 uppercase bg-red-950/80 border border-red-800/60 px-2.5 py-0.5 rounded">
              {media.category}
            </span>
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {media.date}
            </span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-2">
            {media.title}
          </h3>

          <p className="text-sm text-zinc-300 leading-relaxed mb-6">
            {media.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
            <span className="text-xs text-zinc-500">
              Official Media Asset • Pirate Esports Bangladesh
            </span>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 btn-premium-primary text-white font-heading text-xs font-bold uppercase rounded flex items-center gap-1.5"
            >
              <span>WATCH ON CHANNEL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
