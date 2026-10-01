import { Header } from '@/components/header'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { notFound } from 'next/navigation'

const studies = [
  {
    id: 'aura',
    title: 'AURA',
    client: 'Luxury Fashion House',
    tag: 'Identity · Campaign · 3D',
    description: 'A complete brand reset for a heritage maison — from the monogram to the metaverse pop-up.',
    hero: 'https://images.unsplash.com/photo-1612698093157-b06f34c7b43d?w=1600&q=80',
    challenge: 'After 80 years of quiet prestige, this heritage fashion house needed to connect with a generation that shops on TikTok and discovers brands through immersive digital worlds.',
    approach: 'We stripped away decades of visual debt, built a modular identity system rooted in the original atelier’s craft philosophy, and launched via a 3D metaverse pop-up that drew 50,000 visitors in 72 hours.',
    results: [
      '300% increase in Gen Z brand searches',
      '2.1M organic impressions from the pop-up',
      'Wordmark registered as a cultural touchpoint',
    ],
    services: ['Brand Identity', 'Campaign Strategy', '3D & Metaverse', 'Art Direction'],
  },
  {
    id: 'neon',
    title: 'NEON°',
    client: 'Tech Startup',
    tag: 'Digital · Web3 · Motion',
    description: 'Launch identity and ecosystem design for a decentralised energy platform that hit 200k users in week one.',
    hero: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1600&q=80',
    challenge: 'A decentralised energy trading platform launching in a crowded cleantech space needed to communicate complex blockchain mechanics without losing the human story.',
    approach: 'We built a vibrant, motion-first identity that used generative gradients and a proprietary type system to visualise energy flows. Every touchpoint — from the app to the whitepaper — felt like part of one living system.',
    results: [
      '200k users in the first 7 days',
      '$4.2M in community funding within 2 weeks',
      'Featured as Product Hunt #1 in Tech',
    ],
    services: ['Digital Product', 'Motion Design', 'Web3 Strategy', 'Visual Identity'],
  },
  {
    id: 'terra',
    title: 'TERRA',
    client: 'Sustainable Goods Brand',
    tag: 'Packaging · Art Direction · Content',
    description: 'From farmers\' market stall to national retailer — a visual language rooted in soil, texture, and honesty.',
    hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80',
    challenge: 'A farmers\' market favourite needed to scale to national retail without losing the handmade soul that made customers fall in love.',
    approach: 'We designed a packaging system that felt tactile even on a screen — uncoated stock textures, earthy color palettes, and a wordmark drawn from the founder\'s handwriting. The result: a shelf presence that stopped shoppers mid-aisle.',
    results: [
      'Listed in 600+ retail locations',
      '44% reduction in return rate',
      'Named "Best Packaging Design" by Dieline',
    ],
    services: ['Packaging Design', 'Art Direction', 'Content Strategy', 'Visual Identity'],
  },
]

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const study = studies.find((s) => s.id === params.slug)
  if (!study) notFound()

  return (
    <>
      <Header />
      <main className="bg-ink-950 text-white pt-32">
        {/* Hero */}
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950/80 via-ink-950/40 to-transparent z-10" />
          <img src={study.hero} alt={study.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto -mt-32 relative z-20 pb-32">
          <Link href="/work" className="inline-flex items-center gap-2 text-neon-400 text-sm uppercase tracking-[0.2em] mb-12 hover:text-neon-300 transition-colors">
            <ArrowLeft size={14} /> Back to Work
          </Link>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <p className="eyebrow text-neon-400 mb-2">{study.tag}</p>
              <h1 className="heading-xxl mb-4">{study.title}</h1>
              <p className="eyebrow text-ink-500">{study.client}</p>
            </div>
            <div className="space-y-12">
              <div>
                <p className="body-lg text-ink-300 leading-relaxed">{study.description}</p>
              </div>

              <div>
                <h3 className="heading-sm text-neon-400 mb-4">The Challenge</h3>
                <p className="body-lg text-ink-400">{study.challenge}</p>
              </div>

              <div>
                <h3 className="heading-sm text-neon-400 mb-4">Our Approach</h3>
                <p className="body-lg text-ink-400">{study.approach}</p>
              </div>

              <div>
                <h3 className="heading-sm text-neon-400 mb-4">Results</h3>
                <ul className="space-y-3">
                  {study.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 body-lg text-ink-300">
                      <span className="w-2 h-2 rounded-full bg-neon-400 mt-3 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="heading-sm text-neon-400 mb-4">Services Delivered</h3>
                <div className="flex flex-wrap gap-3">
                  {study.services.map((s) => (
                    <span key={s} className="border border-neon-400/30 text-neon-400 text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-neon-400/10">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-neon-400 text-ink-950 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-neon-300 transition-all"
                >
                  Start a Similar Project <Sparkles size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}