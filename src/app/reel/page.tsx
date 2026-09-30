"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { caseStudies } from "@/data/studio";

const categories = ["all", "brand", "motion", "web"] as const;
type Category = (typeof categories)[number];

export default function ReelPage() {
  const active = "all";

  return (
    <main className="bg-ink-950 text-white min-h-screen">
      <Header />
      <div className="pt-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="heading-xl mb-2">Reel</h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-300 max-w-2xl mb-12">
            A living archive of the work. Filter by discipline, scroll into the detail.
          </p>
        </ScrollReveal>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              data-category={cat}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-[0.15em] border ${
                cat === active
                  ? "bg-neon-500 text-ink-950 border-neon-500"
                  : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
              } transition-all`}
            >
              {cat === "all" ? "All Work" : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project) => (
            <ScrollReveal key={project.id}>
              <Link
                href={`/work/${project.id}`}
                className="group block overflow-hidden rounded-2xl bg-canvas-900/20 border border-white/5 hover:border-neon-500/50 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-neon-500 mb-2">
                    {project.client}
                  </p>
                  <h2 className="text-3xl font-display leading-[0.9] mb-1">
                    {project.title}
                  </h2>
                  <p className="body-sm text-ink-400">{project.tag}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </section>
      </div>
    </main>
  );
}
