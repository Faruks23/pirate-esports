import React from 'react';
import { TEAM_INFO, SOCIAL_LINKS } from '../data/esportsData';
import { Shield, ChevronUp, ArrowUpRight, Youtube, Facebook, Instagram, Music2, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'TEAM', href: '#team' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
    { name: 'MATCHES', href: '#matches' },
    { name: 'MEDIA', href: '#media' },
    { name: 'SPONSORS', href: '#sponsors' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'tiktok':
        return <Music2 className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#050507] border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden text-zinc-400">
      {/* Subtle Bottom Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-red-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/80">
          {/* Col 1: Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded overflow-hidden border border-red-500/60 bg-black">
                  <img
                    src={TEAM_INFO.logo}
                    alt="Pirate Esports Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="font-heading text-2xl font-black tracking-wider text-white">
                    PIRATE <span className="text-red-500">ESPORTS</span>
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-zinc-500 block font-semibold">
                    BANGLADESH FREE FIRE DIVISION
                  </span>
                </div>
              </div>

              {/* Slogan */}
              <p className="font-heading text-lg font-bold tracking-widest text-zinc-200 uppercase mb-4">
                "{TEAM_INFO.slogan}"
              </p>

              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                Runner-Up of Free Fire World Series (FFWS) Bangladesh 2026 Fall. Committed to championship execution, player development, and building esports in South Asia.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/80 hover:text-white flex items-center justify-center text-zinc-400 transition-colors"
                  aria-label={s.platform}
                >
                  {getPlatformIcon(s.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-white mb-4">
              ORGANIZATION
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-red-400 transition-colors uppercase tracking-wider block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Legal (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-white mb-4">
              OFFICIAL CONTACT
            </h4>

            <div className="space-y-3 text-xs mb-6">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-zinc-300">{TEAM_INFO.businessEmail}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-zinc-300">{TEAM_INFO.officialEmail}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-[11px] text-zinc-400">
              <span className="text-white font-bold block mb-1">PROSPECTIVE PARTNERS</span>
              Download our 2026 Commercial Sponsorship Deck & audience demographic summary via the contact section.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-500" />
            <span>© 2026 Pirate Esports. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-500">Client Demo Presentation</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
