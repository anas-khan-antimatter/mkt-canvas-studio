'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Sparkles, RefreshCw, Copy, Check } from 'lucide-react'
import Link from 'next/link'

const industries = [
  'Fashion & Luxury',
  'Technology & SaaS',
  'Food & Beverage',
  'Health & Wellness',
  'Finance & Fintech',
  'Creative & Arts',
  'Sustainability & Climate',
  'Education & Learning',
]

const vibes = [
  'Bold & Disruptive',
  'Warm & Approachable',
  'Sleek & Premium',
  'Playful & Quirky',
  'Minimal & Clean',
  'Heritage & Timeless',
  'Futuristic & Cyber',
  'Organic & Earthy',
]

const prefixes = ['Vel', 'Nex', 'Aeth', 'Zen', 'Cir', 'Lum', 'For', 'Dot', 'Zep', 'Kai', 'Mox', 'Pix', 'Vox', 'Syn', 'Blu', 'Aer']
const suffixes = ['ora', 'us', 'ra', 'ta', 'ca', 'i', 'ma', 'is', 'um', 'on', 'en', 'ix', 'io', 'a', 'os', 'in']

function generateNames(industry: string, vibe: string): string[] {
  const seed = industry.length + vibe.length
  const names: string[] = []

  for (let i = 0; i < 8; i++) {
    const pIdx = (seed + i * 3) % prefixes.length
    const sIdx = (seed + i * 7 + 2) % suffixes.length
    const prefix = prefixes[pIdx]
    const suffix = suffixes[sIdx]
    names.push(`${prefix}${suffix}`.toUpperCase())
  }

  // Shuffle deterministically
  for (let i = names.length - 1; i > 0; i--) {
    const j = (seed + i) % (i + 1);
    [names[i], names[j]] = [names[j], names[i]]
  }

  return names.map((n, idx) => {
    const extra = idx === 0 ? '' : idx === 1 ? '°' : idx === 2 ? '.' : idx === 3 ? ' AI' : idx === 4 ? ' Co.' : idx === 5 ? ' Studio' : idx === 6 ? ' Labs' : 'x'
    return `${n}${extra}`
  })
}

export default function GeneratorPage() {
  const [industry, setIndustry] = useState('Technology & SaaS')
  const [vibe, setVibe] = useState('Bold & Disruptive')
  const [names, setNames] = useState<string[]>(() => generateNames('Technology & SaaS', 'Bold & Disruptive'))
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [generating, setGenerating] = useState(false)
  const [fetched, setFetched] = useState(false)
  const [apiNames, setApiNames] = useState<string[]>([])

  const handleGenerate = async () => {
    setGenerating(true)
    setFetched(true)
    // Generate local names
    const localNames = generateNames(industry, vibe)
    setNames(localNames)

    // Fetch from API
    try {
      const res = await fetch(`/api/names?industry=${encodeURIComponent(industry)}&vibe=${encodeURIComponent(vibe)}`)
      const data = await res.json()
      if (data.names) setApiNames(data.names)
    } catch {
      // fallback — local is fine
    }

    setGenerating(false)
  }

  const copyName = (name: string, idx: number) => {
    navigator.clipboard.writeText(name)
    setCopiedIndex(idx)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <>
      <Header />
      <main className="bg-ink-950 text-white pt-32">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-32">
          <ScrollReveal>
            <p className="eyebrow text-neon-400 mb-4">Brand Name Generator</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="heading-xl mb-6 max-w-5xl">
              Find a name worth <span className="text-neon-400 neon-glow">building</span> around.
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-xl text-ink-400 max-w-2xl mb-16">
              Pick your industry and creative vibe. We&apos;ll instantly generate 8 brand-ready name ideas — no account, no paywall.
            </p>
          </ScrollReveal>

          {/* Controls */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-neon-400 mb-3">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-ink-900 border border-neon-400/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-400 transition-colors"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-neon-400 mb-3">Creative Vibe</label>
                <select
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value)}
                  className="w-full bg-ink-900 border border-neon-400/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-400 transition-colors"
                >
                  {vibes.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full inline-flex items-center justify-center gap-3 bg-neon-400 text-ink-950 px-8 py-5 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-neon-300 transition-all neon-border disabled:opacity-50 disabled:cursor-not-allowed mb-20"
            >
              {generating ? (
                <><RefreshCw size={18} className="animate-spin" /> Generating…</>
              ) : (
                <><Sparkles size={18} /> Generate Name Ideas</>
              )}
            </button>
          </ScrollReveal>

          {/* Results */}
          {names.length > 0 && (
            <ScrollReveal>
              <div className="bg-ink-900/50 border border-neon-400/20 rounded-3xl overflow-hidden backdrop-blur-sm">
                <div className="px-8 py-6 border-b border-neon-400/10 flex items-center justify-between">
                  <span className="eyebrow text-neon-400">
                    {fetched ? apiNames.length > 0 ? 'API-powered name ideas' : 'Generated names' }
                  </span>
                  <span className="text-ink-500 text-xs">{names.length} ideas</span>
                </div>
                <div className="divide-y divide-neon-400/10">
                  {(fetched && apiNames.length > 0 ? apiNames : names).map((name, idx) => (
                    <div
                      key={`${name}-${idx}`}
                      className="flex items-center justify-between px-8 py-5 hover:bg-neon-400/5 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-6 text-neon-400/60 text-xs font-mono">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="font-display text-2xl md:text-3xl tracking-tight text-white group-hover:text-neon-400 transition-colors">
                          {name}
                        </span>
                      </div>
                      <button
                        onClick={() => copyName(name, idx)}
                        className="text-ink-500 hover:text-neon-400 transition-colors p-2"
                        title="Copy name"
                      >
                        {copiedIndex === idx ? <Check size={18} className="text-neon-400" /> : <Copy size={18} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-20 text-center border-t border-neon-400/10 pt-16">
              <h3 className="heading-md mb-4">Found one you love?</h3>
              <p className="body-lg text-ink-400 mb-8 max-w-lg mx-auto">
                Let&apos;s build a full brand identity around it — from logo to launch.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-neon-400 text-ink-950 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-neon-300 transition-all"
              >
                Start a Project <Sparkles size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </>
  )
}