"use client";

import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { team } from "@/data/studio";
import { useState } from "react";

const roles = ["all", "Strategy", "Design", "Motion & 3D", "Digital", "Creative Technology"] as const;

export default function TeamPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? team
    : team.filter((m) => m.role.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main className="bg-ink-950 text-white min-h-screen">
      <Header />
      <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-neon-500 mb-4">The Studio</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="heading-xl mb-8 max-w-5xl">
            Six humans, <span className="text-neon-500">one pulse.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-300 max-w-2xl mb-12">
            Designers, strategists, and technologists who&apos;ve worked at the
            world&apos;s most respected studios — and chose to build their own.
          </p>
        </ScrollReveal>

        {/* Role filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-[0.15em] border ${
                role === filter
                  ? "bg-neon-500 text-ink-950 border-neon-500"
                  : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
              } transition-all`}
            >
              {role === "all" ? "Everyone" : role}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filtered.map((member) => (
            <ScrollReveal key={member.name}>
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-canvas-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-display mb-1">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.15em] text-neon-500">
                  {member.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
