"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const industries = ["tech", "luxury", "food", "music"] as const;
const vibeOptions = [
  "Modernist",
  "Brutalist",
  "Warm Minimal",
  "Playful",
  "Heritage",
  "Futurist",
  "Earthy",
  "Electric",
];

interface NameResult {
  name: string;
  style: string;
  available: boolean;
}

export default function GeneratorPage() {
  const [industry, setIndustry] = useState("tech");
  const [vibe, setVibe] = useState("Modernist");
  const [results, setResults] = useState<NameResult[] | null>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    try {
      const res = await fetch(`/api/names?industry=${industry}&vibe=${vibe}`);
      const data = await res.json();
      setResults(data.names);
    } catch {
      // fallback
      setResults([
        { name: "Vectar", style: "Modernist", available: true },
        { name: "Nexial", style: "Brutalist", available: true },
        { name: "Orbiton", style: "Futurist", available: false },
        { name: "Cypheris", style: "Electric", available: true },
        { name: "Beamcore", style: "Modernist", available: true },
        { name: "Synthos", style: "Playful", available: false },
        { name: "Driftware", style: "Earthy", available: true },
        { name: "Plexicon", style: "Heritage", available: true },
      ]);
    }
    setLoading(false);
  }

  return (
    <main className="bg-ink-950 text-white min-h-screen">
      <Header />
      <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-neon-500 mb-4">Brand Name Generator</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="heading-xl mb-8 max-w-5xl">
            What should <span className="text-neon-500">they call it?</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-300 max-w-2xl mb-16">
            Pick an industry and a vibe. We&apos;ll generate a set of brand names
            — some available, some taken — to get the creative sparks flying.
          </p>
        </ScrollReveal>

        {/* Controls */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-neon-500 mb-4">
              Industry
            </label>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setIndustry(ind)}
                  className={`px-6 py-3 rounded-full text-sm uppercase tracking-[0.15em] border ${
                    ind === industry
                      ? "bg-neon-500 text-ink-950 border-neon-500"
                      : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
                  } transition-all`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-neon-500 mb-4">
              Vibe
            </label>
            <div className="flex flex-wrap gap-3">
              {vibeOptions.map((v) => (
                <button
                  key={v}
                  onClick={() => setVibe(v)}
                  className={`px-6 py-3 rounded-full text-sm uppercase tracking-[0.15em] border ${
                    v === vibe
                      ? "bg-neon-500 text-ink-950 border-neon-500"
                      : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
                  } transition-all`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <button
            onClick={generate}
            disabled={loading}
            className={`inline-flex items-center gap-3 ${
              loading ? "opacity-50" : ""
            } bg-neon-500 text-ink-950 px-10 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-neon-400 transition-all`}
          >
            <Sparkles size={16} />
            {loading ? "Generating…" : "Generate Names"}
          </button>
        </div>

        {/* Results */}
        {results && (
          <section>
            <ScrollReveal>
              <h2 className="text-3xl font-display mb-8 text-neon-500">
                Territory Names
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((r, i) => (
                <ScrollReveal key={r.name}>
                  <div
                    className={`p-6 rounded-2xl border ${
                      r.available
                        ? "border-neon-500/30 bg-canvas-900/10"
                        : "border-white/10 bg-canvas-900/5 opacity-60"
                    }`}
                  >
                    <h3 className="text-2xl font-display mb-1">{r.name}</h3>
                    <p className="text-xs uppercase tracking-[0.15em] text-ink-400 mb-2">
                      {r.style}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-2xs uppercase tracking-[0.1em] ${
                        r.available
                          ? "bg-neon-500/20 text-neon-500"
                          : "bg-white/5 text-ink-500"
                      }`}
                    >
                      {r.available ? "Available" : "Taken"}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}