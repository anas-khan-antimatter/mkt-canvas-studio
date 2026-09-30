"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { caseStudies } from "@/data/studio";
import { ArrowRight } from "lucide-react";

export default function WorkIndex() {
  return (
    <main className="bg-ink-950 text-white min-h-screen">
      <Header />
      <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-canvas-400 mb-4">Selected Projects</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="heading-xl mb-16 max-w-5xl">
            Work that <span className="text-neon-500 italic">earns its keep.</span>
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
                  <p className="text-xs uppercase tracking-[0.2em] text-neon-500 mb-1">
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
        </div>
      </div>
    </main>
  );
}