'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { ScrollReveal } from '@/components/scroll-reveal'
import { projects } from '@/lib/studio'
import { ArrowRight, Play, Film, Grid3X3, Type } from 'lucide-react'

const filters = [
  { id: 'all', label: 'All Work', icon: Grid3X3 },
  { id: 'brand', label: 'Brand', icon: Type },
  { id: 'motion', label: 'Motion', icon: Film },
  { id: 'digital', label: 'Digital', icon: Play },
] as const

export default function ReelPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <main className="bg-ink-950 min-h-screen text-white">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-canvas-400 mb-4">The Reel</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="heading-xl mb-8">
              A living archive of<br />
              <span className="text-canvas-400 italic">what we&apos;ve made</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-lg text-ink-300 max-w-2xl mb-16">
              Scroll the grid. Filter by discipline. Every tile is a story — tap to go deep.
            </p>
          </ScrollReveal>

          {/* Filter bar — brutalist pill row */}
          <div className="flex flex-wrap gap-3 mb-16">
            {filters.map((f) => {
              const Icon = f.icon
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-sans transition-all ${
                    activeFilter === f.id
                      ? 'bg-white text-ink-950'
                      : 'bg-white/5 text-ink-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Icon size={14} />
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reel grid — asymmetric masonry-like */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {filtered.map((project, i) => {
              const isTall = i % 3 === 0
              return (
                <ScrollReveal key={project.id}>
                  <Link
                    href={`/work/${project.id}`}
                    className="group block break-inside-avoid relative overflow-hidden"
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        isTall ? 'aspect-[4/5]' : 'aspect-[4/3]'
                      } bg-gradient-to-br ${project.color}`}
                    >
                      {/* Hover overlay */}
                      <div
                        className={`absolute inset-0 bg-ink-950/60 flex items-center justify-center transition-opacity duration-500 z-20 ${
                          hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <div className="text-center p-6">
                          <Play
                            size={48}
                            className="mx-auto mb-4 text-white/80"
                          />
                          <p className="text-sm uppercase tracking-[0.15em]">
                            View Project
                          </p>
                        </div>
                      </div>

                      {/* Decorative number */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-white/20 text-7xl font-display font-bold leading-none select-none">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="absolute top-4 right-4 z-10 flex flex-wrap gap-2 justify-end">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/80 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent">
                        <h3
                          className={`font-display font-bold transition-all duration-500 ${
                            isTall ? 'text-3xl' : 'text-2xl'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-ink-400 text-xs uppercase tracking-[0.1em] mt-1 font-sans">
                          {project.client}
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-ink-400 body-lg">Nothing here yet for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center">
        <ScrollReveal>
          <p className="eyebrow text-canvas-400 mb-4">Want to be next?</p>
          <h2 className="heading-lg text-white mb-8 max-w-2xl mx-auto">
            Your project could be<br />
            <span className="text-canvas-400 italic">on this wall</span>
          </h2>
          <Link
            href="/brief"
            className="inline-flex items-center gap-2 bg-white text-ink-950 px-10 py-5 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-canvas-200 transition-all"
          >
            Start a Brief <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </main>
  )
}