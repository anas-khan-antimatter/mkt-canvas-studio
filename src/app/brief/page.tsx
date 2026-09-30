"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { caseStudies } from "@/data/studio";

export default function BriefPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleProject(id: string) {
    setSelectedProjects((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="bg-ink-950 text-white min-h-screen">
        <Header />
        <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="heading-xl mb-6">
              Brief <span className="text-neon-500">received.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-lg text-ink-300 max-w-2xl mx-auto mb-16">
              Thanks, {name}. We&apos;ll review your project notes and selected
              references, then get back to you within 48 hours with a creative
              territories proposal.
            </p>
          </ScrollReveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neon-500 hover:text-neon-400 transition-all"
          >
            Back home <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-ink-950 text-white min-h-screen">
      <Header />
      <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-neon-500 mb-4">Start a Project</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="heading-xl mb-8 max-w-5xl">
            Tell us what <span className="text-neon-500">you&apos;re building.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-300 max-w-2xl mb-16">
            Fill in the quick brief below. Select any past projects that feel
            directionally relevant — we&apos;ll use them as creative anchors.
          </p>
        </ScrollReveal>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-neon-500 mb-3">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg font-display placeholder:text-ink-500 transition-all"
                placeholder="e.g. Alex Kim"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-neon-500 mb-3">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg font-display placeholder:text-ink-500 transition-all"
                placeholder="e.g. alex@studio.com"
              />
            </div>
          </div>

          {/* Project description */}
          <div className="mb-16">
            <label className="block text-xs uppercase tracking-[0.2em] text-neon-500 mb-3">
              What are you looking for?
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-base font-display placeholder:text-ink-500 transition-all resize-none"
              placeholder="Describe your project, timeline, budget range, and any creative references…"
            />
          </div>

          {/* Reference projects */}
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-neon-500 mb-6">
              Select reference work (optional)
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudies.map((p) => (
                <label
                  key={p.id}
                  className={`block relative rounded-xl overflow-hidden border cursor-pointer transition-all ${
                    selectedProjects.includes(p.id)
                      ? "border-neon-500 ring-2 ring-neon-500/30"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedProjects.includes(p.id)}
                    onChange={() => toggleProject(p.id)}
                    className="absolute opacity-0"
                  />
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs uppercase tracking-[0.1em] text-ink-400">
                      {p.title}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-neon-500 text-ink-950 px-12 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-neon-400 transition-all"
            >
              <Send size={16} />
              Send Brief
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}