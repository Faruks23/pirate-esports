export interface Player {
  id: string;
  nickname: string;
  realName?: string;
  role: string;
  country: string;
  countryCode: string;
  image: string;
  number?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  socials?: {
    platform: 'facebook' | 'youtube' | 'instagram' | 'tiktok' | 'twitter';
    url: string;
  }[];
  bio?: string;
}

export interface Achievement {
  id: string;
  tournament: string;
  placement: string;
  rankBadge: string;
  year: string;
  season?: string;
  points?: string;
  prize?: string;
  isFeatured?: boolean;
  tier: 'tier1' | 'tier2' | 'regional';
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  date: string;
}

export interface MatchTournament {
  id: string;
  title: string;
  stage: string;
  date: string;
  status: 'UPCOMING' | 'COMPLETED' | 'LIVE';
  game: string;
  result?: string;
  points?: string;
  placement?: string;
  streamUrl?: string;
  description: string;
  format: string;
  prizePool?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: 'MATCHES' | 'TEAM' | 'BEHIND THE SCENES' | 'COMMUNITY';
  type: 'image' | 'video';
  thumbnail: string;
  date: string;
  viewsOrBadge?: string;
  description: string;
  aspect?: string;
}

export interface SponsorPartner {
  id: string;
  name: string;
  category: string;
  isDemoPlaceholder: boolean;
  logoText: string;
  subText: string;
  description: string;
}

export interface SponsorshipBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface SponsorshipTier {
  id: string;
  name: string;
  badge: string;
  isPopular?: boolean;
  tagline: string;
  investmentLevel: string;
  deliverables: string[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
  followers?: string;
}
