import { NextRequest, NextResponse } from "next/server";

const brandNames: Record<string, string[]> = {
  tech: [
    "Vectar", "Nexial", "Orbiton", "Cypheris",
    "Beamcore", "Synthos", "Driftware", "Plexicon",
  ],
  luxury: [
    "Atelier Noire", "Selve", "Oro & Co.", "Maison Lune",
    "Veritier", "Cielis", "Nacre", "Sommet",
  ],
  food: [
    "Bramble & Root", "Zest", "Harvest Hand", "Pulp & Seed",
    "Salt & Soil", "Rind", "Petrel", "Porch & Pantry",
  ],
  music: [
    "Overlay", "Resonance", "Tonic", "Chord & Static",
    "Amplify Studio", "B-Side", "Tempo House", "Loudness",
  ],
};

const vibes = [
  "Modernist", "Brutalist", "Warm Minimal", "Playful",
  "Heritage", "Futurist", "Earthy", "Electric",
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const industry = searchParams.get("industry")?.toLowerCase() || "tech";
  const vibe = searchParams.get("vibe") || "Modernist";

  const candidates = brandNames[industry] || brandNames.tech;

  // Deterministic "generation" — shuffle based on vibe string
  const seed = [...vibe].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const shuffled = [...candidates].sort((_, __) => seed % 3 - 1);

  const result = shuffled.map((name, i) => ({
    name,
    style: vibes[(seed + i) % vibes.length],
    available: (seed + i) % 3 !== 0, // ~66% "available"
  }));

  return NextResponse.json({ names: result, source: "heuristic" });
}
