'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { ScrollReveal } from '@/components/scroll-reveal'
import { projects } from '@/lib/studio'
import { ArrowRight, Filter } from 'lucide-react'
import { useState } from 'react'

export default function WorkPage() {
  const [filter, setFilter] = useState<string>('all')

  const filtered = filter === 'all' ? projects : projects.filter(p => p.tags.includes(filter))

  return (
    <main className="bg-ink-950 min-h-screen">
      <Header />
      <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        {/* Page header */}
        <div className="max-w-7xl mx-auto mb-20">
          <ScrollReveal>
            <p className="eyebrow text-canvas-400 mb-4">Portfolio</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="heading-xl text-white mb-8">
              Selected<br />
              <span className="text-canvas-400 italic">Projects</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-lg text-ink-300 max-w-2xl">
              A curated selection of recent work. Each project represents a partnership built on trust, 
              risk-taking, and an obsession with craft.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter bar */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={14} className="text-ink-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-ink-400 font-sans">Filter</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {['all', 'brand', 'digital', 'motion'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-sans transition-all ${
                  filter === cat
                    ? 'bg-white text-ink-950'
                    : 'bg-white/5 text-ink-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat === 'all' ? 'All Work' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid — brutalist asymmetric layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id}>
                <Link
                  href={`/work/${project.id}`}
                  className="group block"
                >
                  <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${project.color} mb-6`}>
                    <div className="absolute inset-0 bg-ink-950/30 mix-blend-multiply" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 text-8xl md:text-9xl font-display font-bold tracking-tighter select-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-block bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-display text-white mb-2 group-hover:text-canvas-300 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-ink-400 text-sm uppercase tracking-[0.1em] font-sans mb-2">
                        {project.client}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full bg-white/5 text-ink-400 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 text-white/30 group-hover:text-white transition-colors mt-2">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-ink-400 body-lg">No projects match this filter.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto mt-32 pt-16 border-t border-white/5">
          <ScrollReveal>
            <div className="text-center">
              <p className="eyebrow text-canvas-400 mb-4">Next Step</p>
              <h2 className="heading-lg text-white mb-8">
                Let&apos;s make something<br />
                <span className="text-canvas-400 italic">unforgettable</span>
              </h2>
              <Link
                href="/brief"
                className="inline-flex items-center gap-2 bg-white text-ink-950 px-10 py-5 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-canvas-200 transition-all"
              >
                Start a Brief <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}