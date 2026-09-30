"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight, ChevronDown } from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────

const caseStudies = [
  {
    id: "aura",
    title: "AURA",
    client: "Luxury Fashion House",
    tag: "Identity · Campaign · 3D",
    description:
      "A complete brand reset for a heritage maison — from the monogram to the metaverse pop-up.",
    color: "from-rose-900/80 via-zinc-900 to-stone-900",
    image:
      "https://images.unsplash.com/photo-1612698093157-b06f34c7b43d?w=1200&q=80",
  },
  {
    id: "neon",
    title: "NEON°",
    client: "Tech Startup",
    tag: "Digital · Web3 · Motion",
    description:
      "Launch identity and ecosystem design for a decentralised energy platform that hit 200k users in week one.",
    color: "from-cyan-900/80 via-slate-900 to-indigo-900",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&q=80",
  },
  {
    id: "terra",
    title: "TERRA",
    client: "Sustainable Goods Brand",
    tag: "Packaging · Art Direction · Content",
    description:
      "From farmers’ market stall to national retailer — a visual language rooted in soil, texture, and honesty.",
    color: "from-emerald-900/80 via-teal-900 to-green-900",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  },
];

const services = [
  {
    title: "Brand Identity",
    description:
      "Strategy, naming, visual systems, and guidelines that last decades.",
  },
  {
    title: "Campaigns",
    description:
      "Integrated campaigns across print, OOH, digital, and experiential.",
  },
  {
    title: "Digital Products",
    description:
      "Websites, platforms, and apps engineered for delight and performance.",
  },
  {
    title: "Motion & 3D",
    description:
      "Cinematic brand films, 3D assets, and generative real-time experiences.",
  },
  {
    title: "Art Direction",
    description:
      "Editorial, photography direction, and visual storytelling at scale.",
  },
  {
    title: "Sound & Voice",
    description: "Sonic identity, voice UX, and audio branding that resonates.",
  },
];

const processSteps = [
  {
    year: "01",
    title: "Discover",
    description:
      "Immersive research, stakeholder workshops, cultural audit, competitor landscape.",
  },
  {
    year: "02",
    title: "Define",
    description:
      "Strategy articulation, positioning, narrative framework, creative brief.",
  },
  {
    year: "03",
    title: "Design",
    description:
      "Iterative exploration, prototyping, refinement across all touchpoints.",
  },
  {
    year: "04",
    title: "Deliver",
    description:
      "Final assets, guidelines, production partners, launch support.",
  },
  {
    year: "05",
    title: "Evolve",
    description:
      "Post-launch evaluation, extension, and ongoing creative partnership.",
  },
];

const team = [
  {
    name: "Maya Chen",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Leo Park",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sofia Rivas",
    role: "Strategy Lead",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Kai Nakamura",
    role: "Motion & 3D",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    name: "Anouk Verbeeck",
    role: "Digital Design",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Rafi Osei",
    role: "Creative Technologist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

// ─── HERO ────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-ink-950 text-white overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-950 to-canvas-950 opacity-60" />
      <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-canvas-600/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-amber-900/20 to-transparent blur-3xl" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <ScrollReveal>
          <p className="eyebrow text-canvas-300 mb-6 stagger-1">
            Canvas Studio
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="heading-xl mb-8 max-w-5xl stagger-2">
            We build brands
            <br />
            <span className="text-canvas-400 italic">that move culture.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-300 max-w-2xl mb-12 stagger-3">
            A creative agency for the courageous. We partner with founders,
            leaders, and visionaries to craft identities, campaigns, and digital
            experiences that earn attention and keep it.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap gap-4 stagger-4">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 bg-white text-ink-950 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-canvas-200 transition-all"
            >
              View Our Work <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] hover:bg-white/10 transition-all"
            >
              Start a Project
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/40" size={24} />
      </div>
    </section>
  );
}

// ─── MARQUEE SCROLLER ──────────────────────────────────────────

function MarqueeBar() {
  return (
    <div className="bg-ink-950 text-white py-4 overflow-hidden border-t border-white/5 border-b border-white/5">
      <div className="flex animate-marquee whitespace-nowrap gap-16 text-sm uppercase tracking-[0.2em]">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="flex gap-16">
            <span>Brand Identity</span>
            <span className="text-canvas-400">✦</span>
            <span>Campaigns</span>
            <span className="text-canvas-400">✦</span>
            <span>Digital Products</span>
            <span className="text-canvas-400">✦</span>
            <span>Motion &amp; 3D</span>
            <span className="text-canvas-400">✦</span>
            <span>Art Direction</span>
            <span className="text-canvas-400">✦</span>
            <span>Sonic Identity</span>
            <span className="text-canvas-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── CASE STUDIES ───────────────────────────────────────────────

function CaseStudiesSection() {
  return (
    <section
      id="work"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-ink-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-canvas-400 mb-4">Selected Work</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="heading-lg mb-20 max-w-3xl">
            Every project is a{" "}
            <span className="text-canvas-400 italic">living case study</span> in
            how we think.
          </h2>
        </ScrollReveal>

        <div className="grid gap-32 md:gap-48">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.id}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cs.color} opacity-60 group-hover:opacity-40 transition-opacity duration-700 z-10`}
                  />
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <p className="eyebrow text-canvas-300 mb-2">{cs.tag}</p>
                    <h3 className="heading-md">{cs.title}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                  <p className="eyebrow text-white/40">{cs.client}</p>
                  <div>
                    <p className="body-base text-ink-300 mb-4">
                      {cs.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-white group-hover:text-canvas-300 transition-colors">
                      View Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-canvas-50 text-ink-950"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-canvas-600 mb-4">What We Do</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="heading-lg mb-6 max-w-3xl">
            Capabilities across{" "}
            <span className="italic text-canvas-600">every channel</span> that
            matters.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-500 max-w-2xl mb-20">
            Some agencies specialise. We orchestrate — from a single wordmark to
            a full-ecosystem launch.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-canvas-200 rounded-2xl overflow-hidden">
          {services.map((service) => (
            <ScrollReveal key={service.title}>
              <div className="bg-canvas-50 p-10 md:p-12 h-full hover:bg-canvas-100 transition-colors group">
                <h3 className="heading-sm mb-4 group-hover:text-canvas-600 transition-colors">
                  {service.title}
                </h3>
                <p className="body-base text-ink-500">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS TIMELINE ───────────────────────────────────────────

function ProcessSection() {
  return (
    <section
      id="process"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-ink-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-canvas-400 mb-4">Our Process</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="heading-lg mb-6 max-w-3xl">
            A timeline,{" "}
            <span className="text-canvas-400 italic">not a pipeline.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-300 max-w-2xl mb-24">
            We don&apos;t batch-and-blast. Every phase feeds the next, with room
            to circle back when discovery demands it.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          {processSteps.map((step, i) => (
            <ScrollReveal key={step.title}>
              <div
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 pb-24 md:pb-32 ${i % 2 === 0 ? "" : "md:text-right"}`}
              >
                {/* Year badge */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-canvas-600 flex items-center justify-center text-sm font-display font-bold z-10 shadow-lg">
                  {step.year}
                </div>

                {/* Content */}
                <div
                  className={`${i % 2 === 0 ? "md:pr-16" : "md:pl-16 md:col-start-2"} pt-16 md:pt-0`}
                >
                  <h3 className="heading-md mb-4">{step.title}</h3>
                  <p className="body-base text-ink-400">{step.description}</p>
                </div>

                {/* Empty col for alignment */}
                {i % 2 === 0 ? (
                  <div className="hidden md:block" />
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TEAM ────────────────────────────────────────────────────────

function TeamSection() {
  return (
    <section
      id="team"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-canvas-50 text-ink-950"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-canvas-600 mb-4">The Studio</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="heading-lg mb-6 max-w-3xl">
            Six humans,{" "}
            <span className="italic text-canvas-600">one creative pulse.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-500 max-w-2xl mb-20">
            We&apos;re a small, mighty team of designers, strategists, and
            technologists who have worked at the world&apos;s most respected
            studios — and chose to build our own.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member) => (
            <ScrollReveal key={member.name}>
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-canvas-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="heading-sm mb-1">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.15em] text-canvas-600">
                  {member.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT / START A PROJECT ──────────────────────────────────

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-ink-950 text-white relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="eyebrow text-canvas-400 mb-4">Start a Project</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="heading-lg mb-6 max-w-3xl">
            Got a brief that needs{" "}
            <span className="text-canvas-400 italic">
              brains, craft, and audacity?
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-300 max-w-2xl mb-16">
            Tell us about your project. We&apos;ll be in touch within 48 hours —
            sometimes sooner, always with a point of view.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <form className="grid gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.2em] text-ink-400 mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-ink-500 focus:outline-none focus:border-canvas-400 transition-colors"
                  placeholder="e.g. Alex Morgan"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] text-ink-400 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-ink-500 focus:outline-none focus:border-canvas-400 transition-colors"
                  placeholder="alex@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="project"
                className="block text-xs uppercase tracking-[0.2em] text-ink-400 mb-3"
              >
                Tell us about your project
              </label>
              <textarea
                id="project"
                rows={5}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-ink-500 focus:outline-none focus:border-canvas-400 transition-colors resize-none"
                placeholder="Scope, timeline, budget, vibe — anything helps."
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-white text-ink-950 px-10 py-5 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-canvas-200 transition-all"
              >
                Send Brief <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-400 border-t border-white/5 px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-white font-display text-lg tracking-tight mb-1">
            Canvas Studio
          </p>
          <p className="text-xs uppercase tracking-[0.15em]">
            &copy; 2025 — All rights reserved
          </p>
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-[0.15em]">
          <span className="hover:text-white transition-colors cursor-pointer">
            Instagram
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            LinkedIn
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Dribbble
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Are.na
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <MarqueeBar />
      <CaseStudiesSection />
      <ServicesSection />
      <ProcessSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
