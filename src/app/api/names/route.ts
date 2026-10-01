import { NextRequest, NextResponse } from 'next/server'

const prefixes = ['Vel', 'Nex', 'Aeth', 'Zen', 'Cir', 'Lum', 'For', 'Dot', 'Zep', 'Kai', 'Mox', 'Pix', 'Vox', 'Syn', 'Blu', 'Aer', 'No', 'Re', 'Vi', 'So']
const suffixes = ['ora', 'us', 'ra', 'ta', 'ca', 'i', 'ma', 'is', 'um', 'on', 'en', 'ix', 'io', 'a', 'os', 'in', 'ly', 'vo', 'ra', 'na']
const extras = ['', '°', '.', ' AI', ' Co.', ' Studio', ' Labs', 'x', '™', '°', ' Platform', '.io', ' OS', '']

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const industry = searchParams.get('industry') || 'Technology'
  const vibe = searchParams.get('vibe') || 'Bold'

  const seed = industry.length * 7 + vibe.length * 11
  const names: string[] = []

  for (let i = 0; i < 8; i++) {
    const pIdx = (seed + i * 13 + 3) % prefixes.length
    const sIdx = (seed + i * 17 + 5) % suffixes.length
    const eIdx = (seed + i * 19) % extras.length
    const prefix = prefixes[pIdx]
    const suffix = suffixes[sIdx]
    const extra = extras[eIdx]
    names.push(`${prefix}${suffix}${extra}`.toUpperCase())
  }

  // Deterministic shuffle
  for (let i = names.length - 1; i > 0; i--) {
    const j = (seed + i * 5) % (i + 1);
    [names[i], names[j]] = [names[j], names[i]]
  }

  return NextResponse.json({ names, industry, vibe })
}