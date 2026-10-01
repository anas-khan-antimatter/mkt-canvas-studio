"use client";

import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/header'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ArrowRight, ChevronDown, Zap, Sparkles, Check } from 'lucide-react'

// ─── DATA ───────────────────────────────────────────────────────

const caseStudies = [
  {
    id: 'aura',
    title: 'AURA',
    subtitle: 'Luxury Fashion House',
    tag: 'Identity · Campaign · 3D',
    description: 'A complete brand reset for a heritage maison — from the monogram to the metaverse pop-up.',
    image: 'https://images.unsplash.com/photo-1612698093157-b06f34c7b43d?w=1200&q=80',
  },
  {
    id: 'neon',
    title: 'NEON°',
    subtitle: 'Tech Startup',
    tag: 'Digital · Web3 · Motion',
    description: 'Launch identity and ecosystem design for a decentralised energy platform that hit 200k users in week one.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&q=80',
  },
  {
    id: 'terra',
    title: 'TERRA',
    subtitle: 'Sustainable Goods Brand',
    tag: 'Packaging · Art Direction · Content',
    description: 'From farmers\' market stall to national retailer — a visual language rooted in soil, texture, and honesty.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
  },
]

const services = [
  { title: 'Brand Identity', description: 'Strategy, naming, visual systems, and guidelines that last decades.' },
  { title: 'Campaigns', description: 'Integrated campaigns across print, OOH, digital, and experiential.' },
  { title: 'Digital Products', description: 'Websites, platforms, and apps engineered for delight and performance.' },
  { title: 'Motion & 3D', description: 'Cinematic brand films, 3D assets, and generative real-time experiences.' },
  { title: 'Art Direction', description: 'Editorial, photography direction, and visual storytelling at scale.' },
  { title: 'Sound & Voice', description: 'Sonic identity, voice UX, and audio branding that resonates.' },
]

// ─── HERO ────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-ink-950 text-white overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(153,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(153,255,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-[70vw] h-[70vw] rounded-full bg-gradient-to-bl from-neon-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-ink-800/60 to-transparent blur-3xl" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8 stagger-1">
            <span className="w-2 h-2 rounded-full bg-neon-400 animate-pulse-neon" />
            <p className="eyebrow text-neon-400">Canvas Studio</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="heading-xxl mb-8 max-w-6xl stagger-2 leading-[0.78]">
            Brands that<br />
            <span className="text-neon-400 neon-glow">refuse</span> to<br />
            blend in.
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-xl text-ink-400 max-w-2xl mb-12 stagger-3">
            A creative agency for the courageous. We craft identities, campaigns, and
            digital experiences that <span className="text-neon-400">earn attention</span> and keep it.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap gap-4 stagger-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-neon-400 text-ink-950 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-neon-300 transition-all neon-border"
            >
              View Our Work <ArrowRight size={16} />
            </Link>
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 border border-neon-400/30 text-neon-400 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] hover:bg-neon-400/10 transition-all"
            >
              <Sparkles size={16} /> Name Generator
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-neon-400/40" size={24} />
      </div>
    </section>
  )
}

// ─── MARQUEE ─────────────────────────────────────────────────────

function MarqueeBar() {
  return (
    <div className="bg-ink-950 py-4 overflow-hidden border-t border-neon-400/10 border-b border-neon-400/10">
      <div className="flex animate-marquee whitespace-nowrap gap-16 text-sm uppercase tracking-[0.25em] text-ink-400">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="flex gap-16">
            <span>Brand Identity</span>
            <span className="text-neon-400">✦</span>
            <span>Campaigns</span>
            <span className="text-neon-400">✦</span>
            <span>Digital Products</span>
            <span className="text-neon-400">✦</span>
            <span>Motion &amp; 3D</span>
            <span className="text-neon-400">✦</span>
            <span>Art Direction</span>
            <span className="text-neon-400">✦</span>
            <span>Sonic Identity</span>
            <span className="text-neon-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── FEATURED WORK ──────────────────────────────────────────────

function FeaturedWorkSection() {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-ink-950 text-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-neon-400 mb-4">Selected Work</p>
        </ScrollReveal>
        <div className="flex items-end justify-between mb-20">
          <ScrollReveal>
            <h2 className="heading-lg max-w-3xl">
              Every project is a <span className="text-neon-400 italic neon-glow">living case study.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neon-400 hover:text-neon-300 transition-colors"
            >
              All Work <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid gap-32 md:gap-48">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.id}>
              <Link href={`/work/${cs.id}`}>
                <article className="group cursor-pointer">
                  <div className={`relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] mb-8 ${i === 1 ? 'md:ml-24 rotate-negative' : i === 2 ? 'md:mr-24 rotate-positive' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-ink-950/80 via-ink-950/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700 z-10" />
                    <div className="absolute inset-0 border border-neon-400/20 group-hover:border-neon-400/40 rounded-[2rem] z-20 transition-colors" />
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent">
                      <p className="eyebrow text-neon-400 mb-2">{cs.tag}</p>
                      <h3 className="heading-md">{cs.title}</h3>
                    </div>
                  </div>
                  <div className={`grid md:grid-cols-[1fr_2fr] gap-6 ${i === 1 ? 'md:ml-24' : i === 2 ? 'md:mr-24' : ''}`}>
                    <p className="eyebrow text-ink-500">{cs.subtitle}</p>
                    <div>
                      <p className="body-lg text-ink-400 mb-4">{cs.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neon-400 group-hover:text-neon-300 transition-colors">
                        View Case Study <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neon-400"
            >
              All Work <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── SERVICES ────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section id="services" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-ink-50 text-ink-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="left">
          <p className="eyebrow text-neon-600 mb-4">What We Do</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="heading-lg mb-6 max-w-3xl">
            Capabilities across <span className="italic text-neon-600">every channel</span> that matters.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-500 max-w-2xl mb-20">
            Some agencies specialise. We orchestrate — from a single wordmark to a full-ecosystem launch.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} direction={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}>
              <div className="bg-white p-10 md:p-12 h-full hover:shadow-xl hover:-translate-y-1 transition-all rounded-3xl border border-ink-200 group">
                <div className="w-10 h-10 rounded-full bg-neon-400/20 flex items-center justify-center mb-6 group-hover:bg-neon-400/30 transition-colors">
                  <Zap size={18} className="text-neon-600" />
                </div>
                <h3 className="heading-sm mb-4 group-hover:text-neon-700 transition-colors">{service.title}</h3>
                <p className="body-base text-ink-500">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── GENERATOR TEASER ───────────────────────────────────────────

function GeneratorTeaser() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-ink-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-neon-500/5 to-transparent blur-3xl" />

        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="eyebrow text-neon-400 mb-4">Brand Name Generator</p>
              <h2 className="heading-lg mb-6 max-w-xl">
                Stuck on a <span className="text-neon-400 italic neon-glow">name?</span>
              </h2>
              <p className="body-lg text-ink-400 mb-8 max-w-lg">
                Feed us your industry and vibe. We&apos;ll spit back 8 name ideas worth fighting for.
              </p>
              <Link
                href="/generator"
                className="inline-flex items-center gap-2 bg-neon-400 text-ink-950 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-neon-300 transition-all"
              >
                <Sparkles size={16} /> Try the Generator
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="bg-ink-900/50 border border-neon-400/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div className="space-y-4">
                {['VELORA', 'NEXUS', 'AETHRA', 'ZENTA', 'CIRCA', 'LUMI', 'FORMA', 'DOT'].map((name, i) => (
                  <div key={name} className="flex items-center gap-4">
                    <span className="w-6 text-neon-400 text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-2xl md:text-3xl tracking-tight">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT BRIEF BUILDER ──────────────────────────────────────

function ContactSection() {
  const [selectedWork, setSelectedWork] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggleWork = (id: string) => {
    setSelectedWork((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-ink-50 text-ink-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-neon-600 mb-4">Start a Project</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="heading-lg mb-6 max-w-3xl">
            Brief builder. <span className="italic text-neon-600">No fluff.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-500 max-w-2xl mb-20">
            Tell us what you need, and we&apos;ll come back with a proposal within 48 hours.
          </p>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center bg-white border border-neon-400/30 rounded-3xl p-16">
              <div className="w-16 h-16 rounded-full bg-neon-400/20 flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-neon-600" />
              </div>
              <h3 className="heading-md mb-4">Brief Received</h3>
              <p className="body-lg text-ink-500">
                Thanks{selectedWork.length > 0 ? ` — we see you referenced ${selectedWork.length} project${selectedWork.length > 1 ? 's' : ''}` : ''}. 
                We&apos;ll be in touch within 48 hours.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-ink-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-white border border-ink-200 rounded-xl px-5 py-4 text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-neon-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-ink-600 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full bg-white border border-ink-200 rounded-xl px-5 py-4 text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-neon-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-ink-600 mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full bg-white border border-ink-200 rounded-xl px-5 py-4 text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-neon-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-ink-600 mb-2">Budget Range</label>
                  <select className="w-full bg-white border border-ink-200 rounded-xl px-5 py-4 text-ink-950 focus:outline-none focus:border-neon-400 transition-colors">
                    <option value="">Select a range</option>
                    <option value="10-25k">$10k – $25k</option>
                    <option value="25-50k">$25k – $50k</option>
                    <option value="50-100k">$50k – $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-ink-600 mb-2">Brief / Description</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full bg-white border border-ink-200 rounded-xl px-5 py-4 text-ink-950 placeholder:text-ink-400 focus:outline-none focus:border-neon-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-ink-600 mb-3">
                    Reference Work (select any that resonate)
                  </label>
                  <div className="space-y-2">
                    {caseStudies.map((cs) => (
                      <button
                        key={cs.id}
                        type="button"
                        onClick={() => toggleWork(cs.id)}
                        className={`w-full text-left px-5 py-3 rounded-xl border transition-all ${
                          selectedWork.includes(cs.id)
                            ? 'bg-neon-400/10 border-neon-400 text-neon-700'
                            : 'bg-white border-ink-200 text-ink-600 hover:border-ink-300'
                        }`}
                      >
                        <span className="font-display text-sm">{cs.title}</span>
                        <span className="text-xs ml-3 text-ink-400">{cs.subtitle}</span>
                        {selectedWork.includes(cs.id) && (
                          <Check size={14} className="inline ml-2 text-neon-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-neon-400 text-ink-950 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-neon-300 transition-all neon-border"
                >
                  Send Brief
                </button>
              </div>
            </ScrollReveal>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 bg-ink-950 text-white border-t border-neon-400/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-neon-400 font-display text-lg tracking-[0.3em] uppercase">Canvas Studio</p>
          <p className="text-ink-500 text-sm mt-2">© {new Date().getFullYear()} — All rights reserved</p>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/work" className="text-ink-400 hover:text-neon-400 text-xs uppercase tracking-[0.2em] transition-colors">Work</Link>
          <Link href="/generator" className="text-ink-400 hover:text-neon-400 text-xs uppercase tracking-[0.2em] transition-colors">Generator</Link>
          <Link href="/templated" className="text-ink-400 hover:text-neon-400 text-xs uppercase tracking-[0.2em] transition-colors">Templates</Link>
          <Link href="/#contact" className="text-ink-400 hover:text-neon-400 text-xs uppercase tracking-[0.2em] transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeBar />
        <FeaturedWorkSection />
        <ServicesSection />
        <GeneratorTeaser />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}