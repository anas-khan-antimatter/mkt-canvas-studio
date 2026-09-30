"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { caseStudies } from "@/data/studio";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// In a real app, this would be dynamic. For now we extract from the data.
const projectMap = Object.fromEntries(caseStudies.map((p) => [p.id, p]));

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const project = projectMap[params.slug];
  if (!project) return notFound();

  return (
    <main className="bg-ink-950 text-white min-h-screen">
      <Header />
      <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-neon-500/70 hover:text-neon-500 transition-all mb-12"
          >
            <ArrowLeft size={16} /> Back to Work
          </Link>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-canvas-900/30">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.2em] text-neon-500 mb-2">
                {project.client}
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h1 className="text-6xl md:text-8xl font-display leading-[0.85] mb-6">
                {project.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="body-lg text-ink-300 mb-4">{project.description}</p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tag.split(" · ").map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] border border-neon-500/30 text-neon-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Placeholder detail sections */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-2xl font-display mb-4 text-neon-500">
                The Challenge
              </h2>
              <p className="body-base text-ink-400">
                {project.client} needed to break through a crowded market. The
                existing brand had equity but no coherence across touchpoints. We
                were asked to create a system that felt both timeless and
                forward.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-display mb-4 text-neon-500">
                The Approach
              </h2>
              <p className="body-base text-ink-400">
                A deep immersion phase — stakeholder workshops, cultural audit,
                competitor mapping — gave way to a visual language rooted in
                contrast. Bold typography, a restricted palette, and motion that
                surprises.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}