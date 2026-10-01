'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { ArrowRight, Sparkles, Download } from 'lucide-react'

const templates = [
  {
    id: 'brand-guide',
    title: 'Brand Guidelines Template',
    desc: 'A comprehensive brand guide framework — from mission to visual system.',
    items: ['Visual identity specs', 'Tone of voice guide', 'Logo usage rules', 'Color palette system'],
    color: 'from-neon-500/20 to-transparent',
  },
  {
    id: 'pitch-deck',
    title: 'Investor Pitch Deck',
    desc: 'Story-first pitch structure designed to captivate investors in under 3 minutes.',
    items: ['Problem & solution narrative', 'Market sizing framework', 'Traction timeline', 'Financial projections'],
    color: 'from-neon-400/20 to-transparent',
  },
  {
    id: 'campaign',
    title: 'Campaign Launch Kit',
    desc: 'Everything you need to launch a multi-channel campaign with coherence.',
    items: ['Creative brief template', 'Asset checklist', 'Channel distribution plan', 'Performance tracker'],
    color: 'from-neon-300/20 to-transparent',
  },
  {
    id: 'social',
    title: 'Social Media Playbook',
    desc: 'Platform-specific content strategies that build community and drive engagement.',
    items: ['Platform audit framework', 'Content calendar template', 'Engagement guidelines', 'Analytics dashboard'],
    color: 'from-neon-500/20 to-transparent',
  },
  {
    id: 'web',
    title: 'Web Design System',
    desc: 'A modular UI kit with components, tokens, and responsive patterns.',
    items: ['Component library', 'Design tokens', 'Accessibility checklist', 'Breakpoint specs'],
    color: 'from-neon-400/20 to-transparent',
  },
  {
    id: 'naming',
    title: 'Naming & Positioning Workbook',
    desc: 'Structured exercises to arrive at the perfect brand name and market position.',
    items: ['Name brainstorming canvases', 'Competitive landscape map', 'Trademark screening guide', 'Positioning statement builder'],
    color: 'from-neon-300/20 to-transparent',
  },
]

export default function TemplatedPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <>
      <Header />
      <main className="bg-ink-950 text-white pt-32">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-32">
          <ScrollReveal>
            <p className="eyebrow text-neon-400 mb-4">Templates & Tools</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="heading-xl mb-6 max-w-5xl">
              Steal our <span className="text-neon-400 neon-glow">process.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-xl text-ink-400 max-w-2xl mb-20">
              Every template is a distilled version of the frameworks we use with our clients. <br />
              <span className="text-ink-300">Free to use, adapt, and make your own.</span>
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t, i) => (
              <ScrollReveal
                key={t.id}
                direction={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl border border-neon-400/10 bg-gradient-to-br ${t.color} p-8 md:p-10 h-full group cursor-pointer transition-all duration-500 hover:border-neon-400/30 hover:-translate-y-1 ${
                    expanded === t.id ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                >
                  <div className="relative z-10">
                    <h3 className="heading-sm mb-3 group-hover:text-neon-400 transition-colors">{t.title}</h3>
                    <p className="body-base text-ink-400 mb-6">{t.desc}</p>

                    <ul className="space-y-2 mb-8">
                      {t.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-400/60 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neon-400 group-hover:text-neon-300 transition-colors">
                      <Download size={14} /> Download Template
                    </button>
                  </div>

                  {/* Decorative */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-neon-400/5 blur-2xl group-hover:bg-neon-400/10 transition-all" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-24 text-center border-t border-neon-400/10 pt-16">
              <h3 className="heading-md mb-4">Need something custom?</h3>
              <p className="body-lg text-ink-400 mb-8 max-w-lg mx-auto">
                We build bespoke brand systems and toolkits tailored to your business.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-neon-400 text-ink-950 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-neon-300 transition-all"
              >
                Get in Touch <Sparkles size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </>
  )
}