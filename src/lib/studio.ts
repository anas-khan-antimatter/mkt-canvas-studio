// ─── Canvas Studio Data ──────────────────────────────────────────

export interface Project {
  id: string
  title: string
  client: string
  tag: string
  tags: string[]
  year: string
  description: string
  fullDescription: string
  color: string
  accentColor: string
  image: string
  images: string[]
  services: string[]
  role: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 'aura',
    title: 'AURA',
    client: 'Luxury Fashion House',
    tag: 'Identity · Campaign · 3D',
    tags: ['brand', 'motion', 'digital'],
    year: '2025',
    description:
      'A complete brand reset for a heritage maison — from the monogram to the metaverse pop-up.',
    fullDescription:
      'AURA is the rebirth of a centuries-old fashion house. We stripped back gilded ornament to reveal the raw architecture beneath — a monolithic wordmark, a sound bath of whispering silks for sonic branding, and a virtual flagship built in Unreal Engine. The campaign launched during Paris Couture Week with a kinetic typography installation on the Pont Neuf. Within 72 hours, the brand refresh generated 140M earned impressions and a 23% lift in consideration among Gen-Z buyers.',
    color: 'from-rose-900/80 via-zinc-900 to-stone-900',
    accentColor: 'rose-500',
    image: 'https://images.unsplash.com/photo-1612698093157-b06f34c7b43d?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1612698093157-b06f34c7b43d?w=1200&q=80',
      'https://images.unsplash.com/photo-1581044777550-4c0a0e1b7e6f?w=1200&q=80',
      'https://images.unsplash.com/photo-1558766652-5b3d262e4a5f?w=1200&q=80',
    ],
    services: ['Brand Identity', 'Campaign', '3D & Motion'],
    role: 'Lead Creative Agency',
  },
  {
    id: 'neon',
    title: 'NEON°',
    client: 'Tech Startup',
    tag: 'Digital · Web3 · Motion',
    tags: ['digital', 'motion'],
    year: '2025',
    description:
      'Launch identity and ecosystem design for a decentralised energy platform that hit 200k users in week one.',
    fullDescription:
      'NEON° was born in a Berlin warehouse and scaled to a global community in six weeks. We designed a fluid identity system built around a generative energy orb — its rotation, colour temperature, and particle density change in real-time based on platform usage data. The app UI uses a proprietary neon-on-mesh visual language inspired by high-voltage infrastructure diagrams. Our motion system became the product’s onboarding narrative, reducing time-to-first-action by 40%.',
    color: 'from-cyan-900/80 via-slate-900 to-indigo-900',
    accentColor: 'cyan-400',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
    ],
    services: ['Digital Product', 'Motion & 3D', 'Art Direction'],
    role: 'Digital Design Partner',
  },
  {
    id: 'terra',
    title: 'TERRA',
    client: 'Sustainable Goods Brand',
    tag: 'Packaging · Art Direction · Content',
    tags: ['brand', 'digital'],
    year: '2024',
    description:
      'From farmers’ market stall to national retailer — a visual language rooted in soil, texture, and honesty.',
    fullDescription:
      'TERRA started with a single compostable soap bar. We built a world. The visual identity is anchored in soil microscopy — every texture, pattern, and colour palette derives from electron-microscope scans of regenerative farmland. The packaging is monolithic: uncoated boards, blind deboss, a single stamp of colour per SKU. Our content strategy turned farmers into storytellers via a Substack that grew to 80k subscribers in nine months. TERRA now sits on shelves in 1,200 Whole Foods locations across the US.',
    color: 'from-emerald-900/80 via-teal-900 to-green-900',
    accentColor: 'emerald-400',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
      'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=1200&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
    ],
    services: ['Brand Identity', 'Art Direction', 'Content Strategy'],
    role: 'Brand & Content Partner',
  },
  {
    id: 'signal',
    title: 'SIGNAL',
    client: 'Audio Tech Company',
    tag: 'Product · UI/UX · Sound',
    tags: ['digital', 'motion'],
    year: '2024',
    description:
      'Spatial audio platform interface — designing for ears, not eyes. Gesture-driven, screenless UX.',
    fullDescription:
      'SIGNAL asked us to rethink the music app for a world without screens. We designed a fully spatial interface — head gestures, air taps, and a haptic vocabulary that replaces buttons with texture. The visual companion app (for those moments you do glance at a phone) uses waveform-as-typography: every label, button, and menu is a sonified glyph. The result: 4.8 stars, 500k downloads, and Apple named it "Design of the Year" for audio UX.',
    color: 'from-violet-900/80 via-fuchsia-900 to-purple-900',
    accentColor: 'violet-400',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
      'https://images.unsplash.com/photo-1615247659196-c2d0e8a2e96a?w=1200&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80',
    ],
    services: ['Digital Product', 'Sound & Voice', 'Motion & 3D'],
    role: 'UX & Sound Design',
  },
  {
    id: 'monolith',
    title: 'MONOLITH',
    client: 'Architecture Studio',
    tag: 'Identity · Print · Space',
    tags: ['brand'],
    year: '2024',
    description:
      'A visual system carved from concrete. Identity, monograph, and exhibition design for a brutalist practice.',
    fullDescription:
      'MONOLITH is an architecture firm that builds in raw concrete, pigmented earth, and shadow. Our identity mirrors their process: a modular grid system derived from their own building plans, a typeface custom-cut from architectural stencil traditions, and a paper-stock library of 14 architectural substrates. The monograph — a 4kg concrete-bound book with no images, only architectural drawings — sold out its first print run of 3,000 in two weeks.',
    color: 'from-stone-900/90 via-neutral-900 to-zinc-900',
    accentColor: 'stone-300',
    image: 'https://images.unsplash.com/photo-1581044777550-4c0a0e1b7e6f?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1581044777550-4c0a0e1b7e6f?w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
      'https://images.unsplash.com/photo-1558766652-5b3d262e4a5f?w=1200&q=80',
    ],
    services: ['Brand Identity', 'Art Direction', 'Print & Publication'],
    role: 'Identity & Editorial Partner',
  },
  {
    id: 'drift',
    title: 'DRIFT',
    client: 'Wellness Studio',
    tag: 'Campaign · Content · Space',
    tags: ['brand', 'motion'],
    year: '2023',
    description:
      'From a single studio in Brooklyn to a national franchise — the brand that made wellness feel human again.',
    fullDescription:
      'DRIFT started as a cold-plunge-and-sauna studio in Williamsburg. We built a brand around the poetry of discomfort — 35mm film photography of real people mid-shiver, a typeface that breaks apart at the edges like frost on glass, and a scent (pine, smoke, stone) pumped into every location. The campaign "Embrace the Cold" generated 3M Instagram views in 48 hours. DRIFT is now 14 locations and growing.',
    color: 'from-sky-900/80 via-blue-900 to-indigo-900',
    accentColor: 'sky-400',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
      'https://images.unsplash.com/photo-1612698093157-b06f34c7b43d?w=1200&q=80',
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&q=80',
    ],
    services: ['Campaigns', 'Art Direction', 'Sound & Voice'],
    role: 'Lead Creative Agency',
  },
]

export type Category = 'all' | 'brand' | 'digital' | 'motion'

export interface TeamMember {
  id: string
  name: string
  role: string
  roleCategory: string
  image: string
  bio: string
  specialties: string[]
}

export const team: TeamMember[] = [
  {
    id: 'maya',
    name: 'Maya Chen',
    role: 'Founder & Creative Director',
    roleCategory: 'leadership',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Formerly Pentagram and Apple. Maya has spent 18 years building brands that refuse to fade. She leads every project from brief to delivery.',
    specialties: ['Brand Strategy', 'Creative Direction', 'Taste'],
  },
  {
    id: 'leo',
    name: 'Leo Park',
    role: 'Design Director',
    roleCategory: 'design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Leo shapes the studio’s visual output — from typography systems to spatial design. His work lives in the Museum of Modern Art’s permanent collection.',
    specialties: ['Typography', 'Identity', 'Editorial'],
  },
  {
    id: 'sofia',
    name: 'Sofia Rivas',
    role: 'Strategy Lead',
    roleCategory: 'strategy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'A cultural anthropologist by training, Sofia decodes behaviour to uncover brand territories competitors miss. She writes the creative briefs that win pitches.',
    specialties: ['Research', 'Positioning', 'Narrative'],
  },
  {
    id: 'kai',
    name: 'Kai Nakamura',
    role: 'Motion & 3D Director',
    roleCategory: 'production',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    bio: 'Kai builds worlds in motion — from Houdini simulations to real-time Unreal experiences. His generative brand systems are used by millions.',
    specialties: ['3D', 'Motion Design', 'Generative Art'],
  },
  {
    id: 'anouk',
    name: 'Anouk Verbeeck',
    role: 'Digital Design Lead',
    roleCategory: 'design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Anouk makes pixels feel physical. She leads our digital output — websites, apps, and interactive installations that beg to be touched.',
    specialties: ['UI/UX', 'Interaction', 'Prototyping'],
  },
  {
    id: 'rafi',
    name: 'Rafi Osei',
    role: 'Creative Technologist',
    roleCategory: 'production',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Rafi builds the bridges between creativity and code — from WebGL experiences to AI pipelines. He runs our R&D lab.',
    specialties: ['Creative Dev', 'AI', 'WebGL'],
  },
  {
    id: 'elsa',
    name: 'Elsa Johansson',
    role: 'Head of Production',
    roleCategory: 'leadership',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    bio: 'Elsa orchestrates chaos into craft. She runs the studio floor, managing timelines, budgets, and partner relationships across every project.',
    specialties: ['Production', 'Project Management', 'Partnerships'],
  },
  {
    id: 'dante',
    name: 'Dante Reyes',
    role: 'Sound Designer',
    roleCategory: 'production',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Dante composes the invisible half of our work — sonic identities, voice UX, and immersive soundscapes that make brands resonate.',
    specialties: ['Sonic Identity', 'Composition', 'Audio UX'],
  },
]

export const capabilitiesData = {
  categories: [
    {
      name: 'Brand Identity',
      items: [
        { name: 'Brand Strategy', proficiency: 5 },
        { name: 'Visual Identity', proficiency: 5 },
        { name: 'Naming & Taglines', proficiency: 4 },
        { name: 'Brand Guidelines', proficiency: 5 },
        { name: 'Art Direction', proficiency: 5 },
        { name: 'Tone of Voice', proficiency: 4 },
      ],
    },
    {
      name: 'Campaigns',
      items: [
        { name: 'Integrated Campaigns', proficiency: 5 },
        { name: 'OOH & Print', proficiency: 4 },
        { name: 'Social Content', proficiency: 5 },
        { name: 'Experiential', proficiency: 4 },
        { name: 'Influencer Strategy', proficiency: 3 },
      ],
    },
    {
      name: 'Digital',
      items: [
        { name: 'Web Design & Dev', proficiency: 5 },
        { name: 'App UI/UX', proficiency: 5 },
        { name: 'Interactive Installations', proficiency: 4 },
        { name: 'E-Commerce', proficiency: 3 },
        { name: 'CRM & Email', proficiency: 3 },
      ],
    },
    {
      name: 'Motion & 3D',
      items: [
        { name: 'Brand Films', proficiency: 5 },
        { name: '3D Asset Creation', proficiency: 4 },
        { name: 'Generative Visuals', proficiency: 4 },
        { name: 'AR/VR Experiences', proficiency: 3 },
        { name: 'Title Sequences', proficiency: 5 },
      ],
    },
    {
      name: 'Sound',
      items: [
        { name: 'Sonic Identity', proficiency: 4 },
        { name: 'Voice UX', proficiency: 3 },
        { name: 'Audio Production', proficiency: 4 },
        { name: 'Music Supervision', proficiency: 3 },
      ],
    },
  ],
}

export const creativeTerritories = [
  {
    title: 'Monolithic Presence',
    description:
      'A single, unignorable visual gesture. One shape, one colour, one texture that owns the category.',
  },
  {
    title: 'Generative Identity',
    description:
      'A living brand that changes — with data, with weather, with user behaviour. Never the same twice.',
  },
  {
    title: 'Raw Luxury',
    description:
      'Unpolished materials, honest textures, deliberate imperfection. Luxury that feels real, not staged.',
  },
  {
    title: 'Spatial Storytelling',
    description:
      'Brands that exist in three dimensions — physical spaces, AR layers, volumetric brand films.',
  },
  {
    title: 'Ritual Design',
    description:
      'Designing behaviours, not just assets. Rituals, routines, and daily touchpoints that build devotion.',
  },
  {
    title: 'Anti-Brand',
    description:
      'No logos. No colours. No voice. A brand that refuses to perform — and becomes unforgettable as a result.',
  },
]

export const services = [
  {
    title: 'Brand Identity',
    description:
      'Strategy, naming, visual systems, and guidelines that last decades. We build identities that earn their place in culture.',
  },
  {
    title: 'Campaigns',
    description:
      'Integrated campaigns across print, OOH, digital, and experiential. We make noise that lands.',
  },
  {
    title: 'Digital Products',
    description:
      'Websites, platforms, and apps engineered for delight and performance. Pixels you want to touch.',
  },
  {
    title: 'Motion & 3D',
    description:
      'Cinematic brand films, 3D assets, and generative real-time experiences. Brands that move.',
  },
  {
    title: 'Art Direction',
    description:
      'Editorial, photography direction, and visual storytelling at scale. Every frame is a composition.',
  },
  {
    title: 'Sound & Voice',
    description:
      'Sonic identity, voice UX, and audio branding that resonates. The half of branding you hear.',
  },
]

export const processSteps = [
  { year: '01', title: 'Discover', description: 'Immersive research, stakeholder workshops, cultural audit, competitor landscape. We listen before we draw.' },
  { year: '02', title: 'Define', description: 'Strategy articulation, positioning, narrative framework, creative brief. The compass before the map.' },
  { year: '03', title: 'Design', description: 'Iterative exploration, prototyping, refinement across all touchpoints. Make, test, make again.' },
  { year: '04', title: 'Deliver', description: 'Final assets, guidelines, production partners, launch support. Ship with conviction.' },
  { year: '05', title: 'Evolve', description: 'Post-launch evaluation, extension, and ongoing creative partnership. A brand never finishes.' },
]