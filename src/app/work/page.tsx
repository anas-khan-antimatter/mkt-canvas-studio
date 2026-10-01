import { Header } from '@/components/header'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const caseStudies = [
  {
    id: 'aura',
    title: 'AURA',
    client: 'Luxury Fashion House',
    tag: 'Identity · Campaign · 3D',
    description: 'A complete brand reset for a heritage maison — from the monogram to the metaverse pop-up.',
    hero: 'https://images.unsplash.com/photo-1612698093157-b06f34c7b43d?w=1600&q=80',
  },
  {
    id: 'neon',
    title: 'NEON°',
    client: 'Tech Startup',
    tag: 'Digital · Web3 · Motion',
    description: 'Launch identity and ecosystem design for a decentralised energy platform that hit 200k users in week one.',
    hero: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1600&q=80',
  },
  {
    id: 'terra',
    title: 'TERRA',
    client: 'Sustainable Goods Brand',
    tag: 'Packaging · Art Direction · Content',
    description: 'From farmers\' market stall to national retailer — a visual language rooted in soil, texture, and honesty.',
    hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80',
  },
]

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="bg-ink-950 text-white pt-32">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <p className="eyebrow text-neon-400 mb-4">Case Studies</p>
          <h1 className="heading-xxl mb-6 max-w-5xl">
            Our <span className="text-neon-400 neon-glow">work</span> speaks.
          </h1>
          <p className="body-xl text-ink-400 max-w-2xl mb-24">
            Every project is a collaboration with founders and teams who refuse to do ordinary.
          </p>
        </div>

        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-32 space-y-40">
          {caseStudies.map((cs, i) => (
            <Link key={cs.id} href={`/work/${cs.id}`}>
              <article className="group">
                <div className={`relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] mb-8 ${i === 1 ? 'md:-ml-12 rotate-negative' : i === 2 ? 'md:-mr-12 rotate-positive' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-950/70 via-ink-950/30 to-transparent z-10" />
                  <div className="absolute inset-0 border border-neon-400/20 group-hover:border-neon-400/50 rounded-[2rem] z-20 transition-colors" />
                  <img src={cs.hero} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent">
                    <p className="eyebrow text-neon-400 mb-2">{cs.tag}</p>
                    <h2 className="heading-md">{cs.title}</h2>
                  </div>
                </div>
                <div className={`grid md:grid-cols-[1fr_2fr] gap-6 ${i === 1 ? 'md:-ml-12' : i === 2 ? 'md:-mr-12' : ''}`}>
                  <p className="eyebrow text-ink-500">{cs.client}</p>
                  <div>
                    <p className="body-lg text-ink-400 mb-4">{cs.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neon-400 group-hover:text-neon-300 transition-colors">
                      Read Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-32">
          <div className="border-t border-neon-400/10 pt-16 text-center">
            <h3 className="heading-md mb-4">Ready to create something remarkable?</h3>
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-neon-400 text-ink-950 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-neon-300 transition-all">
              Start a Project <Sparkles size={16} />
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}