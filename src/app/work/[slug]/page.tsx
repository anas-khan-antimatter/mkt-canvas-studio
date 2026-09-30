'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/header'
import { ScrollReveal } from '@/components/scroll-reveal'
import { projects } from '@/lib/studio'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function CaseStudyPage() {
  const params = useParams()
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    return (
      <main className="bg-ink-950 min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Project not found</h1>
          <Link href="/work" className="text-canvas-400 underline">← Back to all work</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-ink-950 min-h-screen text-white">
      <Header />

      {/* Hero — full-bleed immersive */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
          <div className="absolute inset-0 bg-ink-950/40 mix-blend-multiply" />
        </div>
        {project.images[0] && (
          <img
            src={project.images[0]}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        {/* Asymmetric floating elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full border border-white/10" />
        <div className="absolute bottom-1/3 left-[5%] w-32 h-32 bg-white/5 rounded-full blur-xl" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-24 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-canvas-300 hover:text-white text-sm uppercase tracking-[0.15em] mb-8 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Projects
            </Link>
            <ScrollReveal>
              <p className="eyebrow text-canvas-400 mb-4">{project.tag}</p>
              <h1 className="heading-xl mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-ink-300 body-lg">{project.client}</span>
                <span className="text-white/20">·</span>
                <span className="text-ink-300 body-lg">{project.year}</span>
                <span className="text-white/20">·</span>
                <span className="text-canvas-400 text-sm uppercase tracking-[0.15em]">{project.role}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project info — asymmetric layout */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            {/* Meta sidebar */}
            <div>
              <ScrollReveal>
                <div className="space-y-10">
                  <div>
                    <p className="eyebrow text-canvas-400 mb-3">Services</p>
                    <ul className="space-y-2">
                      {project.services.map((s) => (
                        <li key={s} className="text-white/80 body-base">{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow text-canvas-400 mb-3">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-white/5 text-ink-300 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-canvas-300 hover:text-white text-sm uppercase tracking-[0.15em] transition-colors"
                    >
                      Visit Live Site <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Main content */}
            <div>
              <ScrollReveal>
                <p className="body-lg text-ink-200 leading-relaxed mb-12">
                  {project.fullDescription}
                </p>
              </ScrollReveal>

              {/* Image gallery — brutalist grid */}
              <div className="space-y-8">
                {project.images.slice(1).map((img, i) => (
                  <ScrollReveal key={i}>
                    <div className={`relative overflow-hidden ${i % 2 === 0 ? 'rounded-tr-[4rem]' : 'rounded-bl-[4rem]'}`}>
                      <img
                        src={img}
                        alt={`${project.title} — image ${i + 2}`}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-ink-950/0 hover:bg-ink-950/20 transition-colors duration-500" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Impact strip */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-ink-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: 'Services Delivered', value: project.services.length },
              { label: 'Year Completed', value: project.year },
              { label: 'Role', value: project.role.split(' ').slice(0, 2).join(' ') },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center md:text-left">
                  <p className="text-4xl md:text-5xl font-display text-canvas-400 mb-2">{stat.value}</p>
                  <p className="text-ink-400 text-sm uppercase tracking-[0.15em]">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next / CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center">
        <ScrollReveal>
          <p className="eyebrow text-canvas-400 mb-4">Next Project</p>
          <div className="max-w-2xl mx-auto">
            {(() => {
              const idx = projects.findIndex((p) => p.id === project.id)
              const next = projects[(idx + 1) % projects.length]
              return (
                <Link
                  href={`/work/${next.id}`}
                  className="group inline-flex items-center gap-3"
                >
                  <span className="heading-lg text-white group-hover:text-canvas-300 transition-colors">
                    {next.title}
                  </span>
                  <ArrowUpRight size={24} className="text-canvas-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              )
            })()}
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}