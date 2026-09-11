import {
  Player,
  Achievement,
  MatchTournament,
  MediaItem,
  SponsorPartner,
  SponsorshipBenefit,
  SponsorshipTier,
  SocialLink
} from '../types';
import pirateEsportsLogo from '../assets/images/pirate_esports_logo_1789128861359.jpg';
import pirateHeroBg from '../assets/images/pirate_hero_bg_1789128846005.jpg';
import pirateTeamHuddle from '../assets/images/pirate_team_huddle_1789128878450.jpg';
import playerAzoic from '../assets/images/player_azoic_1789128966903.jpg';
import playerRasel from '../assets/images/player_rasel_1789128979877.jpg';
import playerTajz from '../assets/images/player_tajz_1789128935469.jpg';
import playerToki from '../assets/images/player_toki_1789128952761.jpg';

export const TEAM_INFO = {
  name: 'Pirate Esports',
  tag: 'PIRATE',
  slogan: 'BUILT TO COMPETE. BORN TO CONQUER.',
  game: 'Free Fire',
  country: 'Bangladesh',
  countryCode: 'BD',
  established: '2024',
  season: '2026 Competitive Season',
  shortBio:
    'Pirate Esports is a Bangladeshi Free Fire esports organization focused on competitive performance, player development, community engagement and building a strong presence in the esports ecosystem.',
  logo: pirateEsportsLogo,
  heroBg: pirateHeroBg,
  teamHuddle: pirateTeamHuddle,
  keyAchievement: 'FFWS BANGLADESH 2026 FALL — RUNNER-UP',
  officialEmail: 'management@pirateesports.bd',
  businessEmail: 'partnerships@pirateesports.bd',
  discord: 'https://discord.gg/pirateesports',
};

export const STATS_STRIP = [
  {
    id: 'rank',
    number: '02',
    label: 'RUNNER-UP — FFWS BANGLADESH 2026 FALL',
    highlight: '2ND IN BANGLADESH',
  },
  {
    id: 'season',
    number: '2026',
    label: 'COMPETITIVE SEASON',
    highlight: 'CURRENT CAMPAIGN',
  },
  {
    id: 'points',
    number: '155',
    label: 'FFWS BD FINAL POINTS',
    highlight: 'GRAND FINALS SCORE',
  },
  {
    id: 'prize',
    number: '$9,765',
    label: 'FFWS BD PRIZE',
    highlight: 'EARNED TOURNAMENT PRIZE',
  },
];

export const PLAYERS: Player[] = [
  {
    id: 'tajz',
    nickname: 'TAJZ',
    role: 'Player',
    country: 'Bangladesh',
    countryCode: 'BD',
    image: playerTajz,
    number: '01',
    stats: [
      { label: 'Role Focus', value: 'In-Game Combat' },
      { label: 'Specialty', value: 'Zone Entry' },
      { label: 'Tournament', value: 'FFWS 2026 Fall' },
    ],
    socials: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
    bio: 'Core frontline competitor for Pirate Esports with high combat impact and exceptional game awareness in Free Fire high-tier lobby play.',
  },
  {
    id: 'toki',
    nickname: 'TOKI',
    role: 'Player',
    country: 'Bangladesh',
    countryCode: 'BD',
    image: playerToki,
    number: '07',
    stats: [
      { label: 'Role Focus', value: 'Combat Specialist' },
      { label: 'Specialty', value: 'Mid-Range Firepower' },
      { label: 'Tournament', value: 'FFWS 2026 Fall' },
    ],
    socials: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
    bio: 'Key frag engine renowned for clutch mechanics, split-second reflexes, and relentless zone control under tournament pressure.',
  },
  {
    id: 'azoic',
    nickname: 'AZOIC',
    role: 'Player',
    country: 'Bangladesh',
    countryCode: 'BD',
    image: playerAzoic,
    number: '10',
    stats: [
      { label: 'Role Focus', value: 'Tactical Recon' },
      { label: 'Specialty', value: 'Long-Range Overlook' },
      { label: 'Tournament', value: 'FFWS 2026 Fall' },
    ],
    socials: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
    bio: 'Tactical marksman anchoring rotations and securing perimeter visibility to pave safe entry paths for the squad.',
  },
  {
    id: 'rasel',
    nickname: 'RASEL',
    role: 'Player',
    country: 'Bangladesh',
    countryCode: 'BD',
    image: playerRasel,
    number: '12',
    stats: [
      { label: 'Role Focus', value: 'Squad Coordinator' },
      { label: 'Specialty', value: 'Resource & Positioning' },
      { label: 'Tournament', value: 'FFWS 2026 Fall' },
    ],
    socials: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
    bio: 'Disciplined and steady combatant providing invaluable stability, late-circle rotations, and tactical utility during decisive matches.',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ffws-bd-2026-fall',
    tournament: 'Free Fire World Series (FFWS) Bangladesh 2026 Fall',
    placement: 'RUNNER-UP',
    rankBadge: '2ND PLACE',
    year: '2026',
    season: 'Fall Split',
    points: '155 Points',
    prize: '$9,765 Prize',
    isFeatured: true,
    tier: 'tier1',
    description:
      'The definitive breakout tournament performance for Pirate Esports, securing 2nd place in the premier official Garena Free Fire competitive league of Bangladesh with 155 final points.',
    stats: [
      { label: 'Placement', value: 'Runner-Up (2nd Place)' },
      { label: 'Grand Finals Points', value: '155' },
      { label: 'Prize Money', value: '$9,765 USD' },
      { label: 'Status', value: 'Verified Official Result' },
    ],
    date: '2026 Season',
  },
  {
    id: 'ffws-bd-qualifiers',
    tournament: 'FFWS Bangladesh Regional Stage',
    placement: 'GRAND FINALS QUALIFIER',
    rankBadge: 'FINALIST',
    year: '2026',
    season: 'Group Stage',
    points: 'Top Tier Seed',
    prize: 'Grand Finals Berth',
    isFeatured: false,
    tier: 'tier1',
    description:
      'Dominant qualification run throughout the grueling group stages to secure an automatic berth in the FFWS Bangladesh 2026 Fall Grand Finals.',
    stats: [
      { label: 'Stage', value: 'Play-in & Group Phase' },
      { label: 'Outcome', value: 'Grand Finals Qualification' },
      { label: 'Region', value: 'Bangladesh' },
      { label: 'League', value: 'Garena Free Fire Official' },
    ],
    date: '2026 Season',
  },
];

export const MATCHES: MatchTournament[] = [
  {
    id: 'ffbpl-s4',
    title: 'FFBPL S4 (Free Fire Bangladesh Premier League)',
    stage: 'Battle Royale Grand Stage',
    date: 'SEPTEMBER 28 — OCTOBER 10',
    status: 'UPCOMING',
    game: 'Free Fire',
    format: 'Official Multi-Day Battle Royale Finals',
    description:
      'The next major verified battle for Pirate Esports, competing against the premier professional Free Fire rosters in Bangladesh.',
    prizePool: 'Competitive League Prize Pool',
  },
  {
    id: 'ffws-2026-fall-finals',
    title: 'FFWS Bangladesh 2026 Fall — Grand Finals',
    stage: 'Grand Finals Championship Stage',
    date: '2026 Competitive Season',
    status: 'COMPLETED',
    game: 'Free Fire',
    result: 'RUNNER-UP (2nd Place)',
    points: '155 Total Points',
    placement: '2nd Place',
    format: 'Battle Royale 6-Match Final Stage',
    description:
      'Historic championship finish with 155 total points, earning $9,765 USD and establishing Pirate Esports as one of the country’s top contenders.',
    prizePool: '$9,765 Prize Earned',
  },
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'media-1',
    title: 'FFWS Bangladesh 2026 Fall Grand Finals Stage',
    category: 'MATCHES',
    type: 'image',
    thumbnail: pirateHeroBg,
    date: '2026 Season',
    viewsOrBadge: 'GRAND FINALS',
    description: 'Championship arena stage during the decisive Free Fire World Series matches.',
  },
  {
    id: 'media-2',
    title: 'Pirate Esports Crew Strategic Huddle',
    category: 'TEAM',
    type: 'image',
    thumbnail: pirateTeamHuddle,
    date: '2026 Campaign',
    viewsOrBadge: 'THE CREW',
    description: 'Tactical briefing and match preparation between high-pressure battle royale rounds.',
  },
  {
    id: 'media-3',
    title: 'TAJZ Clutch Highlights — Zone Push Execution',
    category: 'MATCHES',
    type: 'video',
    thumbnail: playerTajz,
    date: 'FFWS Match Day',
    viewsOrBadge: 'MATCH HIGHLIGHT',
    description: 'High-leverage zone breach and elimination sequences by TAJZ during decisive circles.',
  },
  {
    id: 'media-4',
    title: 'Behind the Scenes — Tournament Boot Camp',
    category: 'BEHIND THE SCENES',
    type: 'image',
    thumbnail: playerToki,
    date: 'Official Prep',
    viewsOrBadge: 'VLOG & BTS',
    description: 'Intense training schedule, scrim analytics, and equipment check before official game days.',
  },
  {
    id: 'media-5',
    title: 'Tactical Comms & Communication Flow',
    category: 'BEHIND THE SCENES',
    type: 'video',
    thumbnail: playerAzoic,
    date: 'Voice Comms',
    viewsOrBadge: 'COMMS LEAK',
    description: 'Audio breakdown of real-time callouts and fast adaptation under intense teamfights.',
  },
  {
    id: 'media-6',
    title: 'Bangladeshi Community Watch Party & Fan Base',
    category: 'COMMUNITY',
    type: 'image',
    thumbnail: playerRasel,
    date: 'Community Live',
    viewsOrBadge: 'FAN CREW',
    description: 'Passionate esports supporters across Bangladesh cheering on Pirate Esports during finals.',
  },
];

export const SPONSORS: SponsorPartner[] = [
  {
    id: 'sponsor-hardware',
    name: 'TITAN RIGS',
    category: 'Official Hardware & Systems Partner',
    isDemoPlaceholder: true,
    logoText: 'TITAN RIGS [DEMO]',
    subText: 'Gaming Hardware Partner',
    description: 'High performance tournament displays and low-latency mobile competition gear.',
  },
  {
    id: 'sponsor-energy',
    name: 'REDZONE LABS',
    category: 'Official Performance Drink Partner',
    isDemoPlaceholder: true,
    logoText: 'REDZONE LABS [DEMO]',
    subText: 'Performance & Energy Partner',
    description: 'Focus and hydration formulas powering long training sessions and tournament days.',
  },
  {
    id: 'sponsor-apparel',
    name: 'STRIKE APPAREL',
    category: 'Official Team Jersey & Merch Partner',
    isDemoPlaceholder: true,
    logoText: 'STRIKE APPAREL [DEMO]',
    subText: 'Official Apparel Partner',
    description: 'Custom athletic esports jerseys, track jackets, and fan merchandise.',
  },
  {
    id: 'sponsor-network',
    name: 'VOLT FIBER',
    category: 'Ultra Low-Latency Network Partner',
    isDemoPlaceholder: true,
    logoText: 'VOLT FIBER [DEMO]',
    subText: 'Network Infrastructure Partner',
    description: 'Dedicated low-ping scrim and broadcast connections for the team training facility.',
  },
];

export const SPONSORSHIP_BENEFITS: SponsorshipBenefit[] = [
  {
    id: 'brand-visibility',
    title: 'BRAND VISIBILITY',
    description: 'Expose your brand across team content, competition live broadcasts, and official tournament broadcasts.',
    iconName: 'Eye',
    deliverables: ['Tournament stream overlays', 'Jersey chest & sleeve placements', 'Live shoutout integrations'],
  },
  {
    id: 'community-reach',
    title: 'COMMUNITY REACH',
    description: 'Connect with an intensely engaged Bangladeshi and regional gaming audience.',
    iconName: 'Users',
    deliverables: ['Direct community engagement', 'Discord server integrations', 'Dedicated fan competitions'],
  },
  {
    id: 'content-collaboration',
    title: 'CONTENT COLLABORATION',
    description: 'Create branded social content, video highlight series, and targeted digital campaigns.',
    iconName: 'Video',
    deliverables: ['Custom YouTube video features', 'Branded short-form reels & TikToks', 'Product showcase posts'],
  },
  {
    id: 'event-activation',
    title: 'EVENT ACTIVATION',
    description: 'Integrate brands into competitive tournaments, watch parties, and community esports activities.',
    iconName: 'Trophy',
    deliverables: ['Interactive booth activations', 'Showmatch naming rights', 'Giveaway & fan interaction days'],
  },
  {
    id: 'team-branding',
    title: 'TEAM BRANDING',
    description: 'Potential jersey and team branding opportunities with prominent stage placement.',
    iconName: 'Shield',
    deliverables: ['Official team uniform co-branding', 'Player social banners', 'Team vehicle & gear graphics'],
  },
  {
    id: 'digital-presence',
    title: 'DIGITAL PRESENCE',
    description: 'Continuous visibility across official team website, match trackers, and social media channels.',
    iconName: 'Globe',
    deliverables: ['Primary website partner placement', 'Social media bio attribution', 'Custom campaign landing links'],
  },
];

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    id: 'title-partner',
    name: 'PRINCIPAL TITLE SPONSOR',
    badge: 'TIER 1 • EXCLUSIVE',
    isPopular: true,
    tagline: 'Maximum brand integration across team identity, tournament jerseys, and digital broadcasts.',
    investmentLevel: 'Premier Category Exclusivity',
    deliverables: [
      'Primary front-of-jersey logo placement across all national competitions',
      'Official team naming co-branding & verified social handles',
      'Exclusive industry category rights (No competitor entry)',
      'Dedicated tournament broadcast video shoutouts & stream overlays',
      'Monthly custom video highlight feature with player endorsements',
      'Homepage header feature & permanent website partner recognition',
    ],
  },
  {
    id: 'official-partner',
    name: 'OFFICIAL TEAM PARTNER',
    badge: 'TIER 2 • MULTI-CATEGORY',
    isPopular: false,
    tagline: 'High-frequency exposure across match livestreams, player jerseys, and community events.',
    investmentLevel: 'Official Category Partner',
    deliverables: [
      'Jersey sleeve & chest crest co-branding placement',
      'Social media highlight clip presented-by sponsorship tags',
      'Community tournament, Discord activations, & fan watch parties',
      'Product placement in bootcamp vlogs & tactical debrief videos',
      'Quarterly promotional fan giveaways & branded merchandise',
      'Dedicated partner page link on official organization website',
    ],
  },
  {
    id: 'technical-partner',
    name: 'TECHNICAL & GEAR ALLY',
    badge: 'TIER 3 • HARDWARE / ENERGY',
    isPopular: false,
    tagline: 'Direct product integration into athlete practice routines, tournament scrims, and gear setups.',
    investmentLevel: 'Equipment & Value-in-Kind Ally',
    deliverables: [
      'Official hardware, peripheral, or performance drink endorsement',
      'Player gear reviews, unboxing reels, & setup showcases',
      'Apparel collar or jersey hem branding badge',
      'Digital tournament stream banner inclusions',
      'Community Discord brand role & dedicated spotlight channel',
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Facebook',
    label: 'FOLLOW ON FACEBOOK',
    url: 'https://facebook.com',
    handle: '@PirateEsportsBD',
    followers: 'Official Page',
  },
  {
    platform: 'YouTube',
    label: 'SUBSCRIBE ON YOUTUBE',
    url: 'https://youtube.com',
    handle: 'Pirate Esports Official',
    followers: 'Match Replays & Highlights',
  },
  {
    platform: 'Instagram',
    label: 'FOLLOW ON INSTAGRAM',
    url: 'https://instagram.com',
    handle: '@pirateesports.bd',
    followers: 'Behind The Scenes',
  },
  {
    platform: 'TikTok',
    label: 'FOLLOW ON TIKTOK',
    url: 'https://tiktok.com',
    handle: '@pirateesports',
    followers: 'Clips & Viral Moments',
  },
];

export const ABOUT_PILLARS = [
  {
    keyword: 'COMPETITIVE',
    title: 'Elite Tournament Mindset',
    text: 'Relentlessly pursuing podium finishes on national and international stages through rigorous analytics and scrim discipline.',
  },
  {
    keyword: 'DISCIPLINE',
    title: 'Structured Player Growth',
    text: 'Cultivating professional work ethic, communication standards, and mental resilience under high-pressure competitive conditions.',
  },
  {
    keyword: 'COMMUNITY',
    title: 'Grassroots Connection',
    text: 'Building genuine bonds with Bangladeshi Free Fire fans, empowering passionate gaming communities across the region.',
  },
  {
    keyword: 'AMBITION',
    title: 'Uncapped Growth',
    text: 'Advancing Bangladeshi esports onto the world stage with long-term commercial sustainability and championship standards.',
  },
];

export const CONTACT_CATEGORIES = [
  'GENERAL INQUIRIES',
  'SPONSORSHIP',
  'MEDIA',
  'PARTNERSHIPS',
] as const;
