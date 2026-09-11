import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Flame,
  Shield,
  ArrowUpRight,
  ChevronRight,
  Crosshair,
  Trophy,
  Users,
  Calendar,
  Image as ImageIcon,
  Briefcase,
  Mail,
  Share2
} from 'lucide-react';
import { TEAM_INFO, SOCIAL_LINKS } from '../data/esportsData';

interface NavbarProps {
  onPartnerClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPartnerClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'team', 'achievements', 'matches', 'media', 'sponsors', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home', code: '01', desc: 'HQ & Overview', icon: Crosshair },
    { name: 'TEAM', href: '#team', id: 'team', code: '02', desc: 'Starting 4 & Staff', icon: Users },
    { name: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements', code: '03', desc: 'Trophies & Milestones', icon: Trophy },
    { name: 'MATCHES', href: '#matches', id: 'matches', code: '04', desc: 'Tournament Schedule', icon: Calendar },
    { name: 'MEDIA', href: '#media', id: 'media', code: '05', desc: 'Gallery & Highlights', icon: ImageIcon },
    { name: 'SPONSORS', href: '#sponsors', id: 'sponsors', code: '06', desc: 'Commercial Tier Suite', icon: Briefcase },
    { name: 'CONTACT', href: '#contact', id: 'contact', code: '07', desc: 'Direct Inquiries & Decks', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080c]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80 py-3'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
            aria-label="Pirate Esports Home"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-md overflow-hidden border border-red-500/50 bg-black/60 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-transform duration-300 group-hover:scale-105">
              <img
                src={TEAM_INFO.logo}
                alt="Pirate Esports Logo"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5">
                PIRATE <span className="text-red-500">ESPORTS</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                BANGLADESH • FREE FIRE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 uppercase relative ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onPartnerClick}
              id="nav-partner-btn"
              className="px-5 py-2.5 btn-premium-primary text-white text-xs font-bold tracking-wider uppercase cursor-pointer clip-angled-button flex items-center gap-1.5 group"
            >
              <span>PARTNER WITH US</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onPartnerClick}
              className="px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase btn-premium-primary text-white rounded clip-angled-button cursor-pointer"
            >
              PARTNER
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              id="mobile-menu-trigger"
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900/90 border border-zinc-700/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors cursor-pointer shadow-lg"
              aria-label="Open Mobile Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-red-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Premium Sliding Esports Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            {/* Backdrop with High-Density Dark Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Sidebar Slide-in Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute inset-y-0 right-0 w-[88%] sm:w-96 bg-[#0a0c12] border-l border-red-500/40 shadow-[-25px_0_60px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-y-auto"
            >
              {/* Background Cybernetic Watermark & Glow Aura */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* 1. Sidebar Header */}
                <div className="p-5 border-b border-zinc-800/90 bg-[#0c0e16] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-red-500/60 bg-black shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                      <img
                        src={TEAM_INFO.logo}
                        alt="Pirate Esports"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h2 className="font-heading text-lg font-black tracking-wider text-white uppercase leading-none">
                        PIRATE <span className="text-red-500">ESPORTS</span>
                      </h2>
                      <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mt-0.5 block">
                        DHAKA • BANGLADESH
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-red-500 hover:bg-zinc-800 transition-all cursor-pointer"
                    aria-label="Close Mobile Navigation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Tactical Status Pill */}
                <div className="px-5 py-2.5 bg-red-950/30 border-b border-red-900/30 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ROSTER ACTIVE
                  </span>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                    FFWS 2026 RUNNER-UP
                  </span>
                </div>

                {/* 2. Navigation Items List */}
                <nav className="p-4 space-y-1.5 flex-1">
                  <div className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase px-3 py-1">
                    TACTICAL NAVIGATION
                  </div>

                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.id;
                    const Icon = link.icon;

                    return (
                      <motion.button
                        key={link.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.3 }}
                        onClick={() => handleNavClick(link.href)}
                        className={`w-full group px-3.5 py-3 rounded-xl flex items-center justify-between transition-all duration-200 text-left cursor-pointer border ${
                          isActive
                            ? 'bg-gradient-to-r from-red-950/60 to-zinc-900 border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.25)]'
                            : 'bg-[#0d0f17]/60 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                              isActive
                                ? 'bg-red-600 text-white'
                                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-red-400 group-hover:border-red-900/50'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`font-mono text-[10px] font-bold ${
                                  isActive ? 'text-red-400' : 'text-zinc-500'
                                }`}
                              >
                                {link.code}
                              </span>
                              <span
                                className={`font-heading text-base font-black tracking-wider uppercase ${
                                  isActive
                                    ? 'text-white'
                                    : 'text-zinc-300 group-hover:text-white transition-colors'
                                }`}
                              >
                                {link.name}
                              </span>
                            </div>
                            <span className="text-[11px] text-zinc-500 block -mt-0.5 group-hover:text-zinc-400 transition-colors">
                              {link.desc}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          {isActive ? (
                            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* 3. Bottom Action Suite & Social Presence */}
                <div className="p-5 border-t border-zinc-800/90 bg-[#090b10] space-y-4">
                  {/* Primary Proposal Action */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onPartnerClick();
                    }}
                    className="w-full py-3.5 px-4 btn-premium-primary font-heading text-xs font-black tracking-widest uppercase flex items-center justify-center gap-2 rounded-lg clip-angled-button transition-all cursor-pointer group"
                  >
                    <span>REQUEST PARTNERSHIP DECK</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  {/* Official Social Handles */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                        <Share2 className="w-3 h-3 text-red-500" />
                        OFFICIAL COMMUNITY
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">120K+ TOTAL FANS</span>
                    </div>

                    <div className="grid grid-cols-5 gap-1.5">
                      {SOCIAL_LINKS.map((s) => (
                        <a
                          key={s.platform}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 rounded bg-zinc-900/90 border border-zinc-800 hover:border-red-500/60 hover:bg-zinc-800 text-[10px] font-heading font-bold text-zinc-400 hover:text-white text-center tracking-wider uppercase transition-colors"
                          title={`${s.platform} - ${s.followers}`}
                        >
                          {s.platform.slice(0, 2)}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-2 flex items-center justify-between text-[10px] text-zinc-500 font-mono border-t border-zinc-900">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-red-500" /> PIRATE ESPORTS
                    </span>
                    <span>2026 EDITION</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

