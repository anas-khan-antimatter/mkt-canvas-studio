export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  tag: string;
  description: string;
  color: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface ProcessStep {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "aura",
    title: "AURA",
    client: "Luxury Fashion House",
    tag: "Identity \u00b7 Campaign \u00b7 3D",
    description: "A complete brand reset for a heritage maison \u2014 from the monogram to the metaverse pop-up.",
    color: "from-rose-900/80 via-zinc-900 to-stone-900",
    image: "https://images.unsplash.com/photo-1612698093157-b06f34c7b43d?w=1200&q=80",
  },
  {
    id: "neon",
    title: "NEON\u00b0",
    client: "Tech Startup",
    tag: "Digital \u00b7 Web3 \u00b7 Motion",
    description: "Launch identity and ecosystem design for a decentralised energy platform that hit 200k users in week one.",
    color: "from-cyan-900/80 via-slate-900 to-indigo-900",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&q=80",
  },
  {
    id: "terra",
    title: "TERRA",
    client: "Sustainable Goods Brand",
    tag: "Packaging \u00b7 Art Direction \u00b7 Content",
    description: "From farmers\u2019 market stall to national retailer \u2014 a visual language rooted in soil, texture, and honesty.",
    color: "from-emerald-900/80 via-teal-900 to-green-900",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  },
];

export const services: Service[] = [
  { title: "Brand Identity", description: "Strategy, naming, visual systems, and guidelines that last decades." },
  { title: "Campaigns", description: "Integrated campaigns across print, OOH, digital, and experiential." },
  { title: "Digital Products", description: "Websites, platforms, and apps engineered for delight and performance." },
  { title: "Motion & 3D", description: "Cinematic brand films, 3D assets, and generative real-time experiences." },
  { title: "Art Direction", description: "Editorial, photography direction, and visual storytelling at scale." },
  { title: "Sound & Voice", description: "Sonic identity, voice UX, and audio branding that resonates." },
];

export const processSteps: ProcessStep[] = [
  { year: "01", title: "Discover", description: "Immersive research, stakeholder workshops, cultural audit, competitor landscape." },
  { year: "02", title: "Define", description: "Strategy articulation, positioning, narrative framework, creative brief." },
  { year: "03", title: "Design", description: "Iterative exploration, prototyping, refinement across all touchpoints." },
  { year: "04", title: "Deliver", description: "Final assets, guidelines, production partners, launch support." },
  { year: "05", title: "Evolve", description: "Post-launch evaluation, extension, and ongoing creative partnership." },
];

export const team: TeamMember[] = [
  { name: "Maya Chen", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Leo Park", role: "Design Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Sofia Rivas", role: "Strategy Lead", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Kai Nakamura", role: "Motion & 3D", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { name: "Anouk Verbeeck", role: "Digital Design", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Rafi Osei", role: "Creative Technologist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];
