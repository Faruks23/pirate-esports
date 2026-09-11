import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AchievementStats } from './components/AchievementStats';
import { AboutSection } from './components/AboutSection';
import { Roster } from './components/Roster';
import { Achievements } from './components/Achievements';
import { MatchSection } from './components/MatchSection';
import { MediaGallery } from './components/MediaGallery';
import { Sponsors } from './components/Sponsors';
import { SponsorPresentation } from './components/SponsorPresentation';
import { CommunityCTA } from './components/CommunityCTA';
import { ContactForm, ContactFormHandle } from './components/ContactForm';
import { Footer } from './components/Footer';
import { PlayerModal } from './components/PlayerModal';
import { MediaModal } from './components/MediaModal';
import { FullRosterModal } from './components/FullRosterModal';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatedSection } from './components/AnimatedSection';
import { MouseFollower } from './components/MouseFollower';
import { ScrollProgress } from './components/ScrollProgress';
import { Player, MediaItem } from './types';

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isFullRosterOpen, setIsFullRosterOpen] = useState(false);

  const contactRef = useRef<ContactFormHandle>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerWithUs = (
    category: 'SPONSORSHIP' | 'PARTNERSHIPS' = 'SPONSORSHIP',
    initialMessage?: string
  ) => {
    contactRef.current?.setCategory(category);
    if (initialMessage) {
      contactRef.current?.setMessage(initialMessage);
    }
    scrollToSection('contact');
    setTimeout(() => {
      contactRef.current?.focusForm();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-red-600 selection:text-white relative">
      {/* Thin Red Viewport Scroll Progress Indicator for Main Content */}
      <ScrollProgress targetId="main-content" />

      {/* Global Mouse Follower Glow Aura */}
      <MouseFollower />

      {/* Intro Loading Screen with Glowing Emblem Aura */}
      <LoadingScreen minDuration={1600} />

      {/* Top Navigation */}
      <Navbar onPartnerClick={() => handlePartnerWithUs('SPONSORSHIP')} />

      {/* Main Content Sections with Viewport Scroll Entrance Animations */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onExploreTeam={() => scrollToSection('team')}
          onViewAchievements={() => scrollToSection('achievements')}
        />

        {/* 2. Achievement Strip */}
        <AnimatedSection delay={0.1}>
          <AchievementStats />
        </AnimatedSection>

        {/* 3. About Section */}
        <AnimatedSection delay={0.1}>
          <AboutSection />
        </AnimatedSection>

        {/* 4. Current Roster ("THE CREW") */}
        <AnimatedSection delay={0.1}>
          <Roster
            onSelectPlayer={(player) => setSelectedPlayer(player)}
            onOpenFullRosterModal={() => setIsFullRosterOpen(true)}
          />
        </AnimatedSection>

        {/* 5. Achievements Archive */}
        <AnimatedSection delay={0.1}>
          <Achievements />
        </AnimatedSection>

        {/* 6. Tournaments & Matches */}
        <AnimatedSection delay={0.1}>
          <MatchSection />
        </AnimatedSection>

        {/* 7. Media Gallery */}
        <AnimatedSection delay={0.1}>
          <MediaGallery onSelectMedia={(media) => setSelectedMedia(media)} />
        </AnimatedSection>

        {/* 8. Sponsors Section */}
        <AnimatedSection delay={0.1}>
          <Sponsors onBecomeSponsor={() => handlePartnerWithUs('SPONSORSHIP')} />
        </AnimatedSection>

        {/* 9. Commercial & Sponsor Suite: Tiers, Deliverables & Proposal Request */}
        <AnimatedSection delay={0.1}>
          <SponsorPresentation
            onDiscussPartnership={(tierName) =>
              handlePartnerWithUs(
                'SPONSORSHIP',
                tierName
                  ? `Hello Pirate Esports Commercial Operations, we would like to request an official partnership deck and commercial proposal for the ${tierName} tier.`
                  : undefined
              )
            }
          />
        </AnimatedSection>

        {/* 10. Community CTA */}
        <AnimatedSection delay={0.1}>
          <CommunityCTA />
        </AnimatedSection>

        {/* 11. Interactive Contact & Category Inquiry */}
        <AnimatedSection delay={0.1}>
          <ContactForm ref={contactRef} />
        </AnimatedSection>
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />

      <MediaModal
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />

      <FullRosterModal
        isOpen={isFullRosterOpen}
        onClose={() => setIsFullRosterOpen(false)}
        onSelectPlayer={(player) => setSelectedPlayer(player)}
      />
    </div>
  );
}
