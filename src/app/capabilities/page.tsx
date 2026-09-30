"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";

const matrixLevels = [
  { level: "Core", description: "Non-negotiable craft. Every project gets this.", color: "neon" },
  { level: "Extended", description: "Brought in when the brief demands more reach.", color: "white" },
  { level: "Experimental", description: "R&D partnerships — we learn together.", color: "ink" },
];

const capabilities = [
  { name: "Brand Strategy", level: "Core", description: "Positioning, naming, narrative, and audience architecture." },
  { name: "Visual Identity", level: "Core", description: "Logos, color systems, typography, and brand guidelines." },
  { name: "Campaign Creative", level: "Core", description: "Concept development, copy, and cross-channel execution." },
  { name: "Web & App Design", level: "Core", description: "UX, UI, prototyping, and front-end design systems." },
  { name: "Motion & 3D", level: "Extended", description: "Brand films, explainers, product visualisation, and real-time 3D." },
  { name: "Sound Design", level: "Extended", description: "Sonic identity, voice UX, audio branding, and podcast production." },
  { name: "Art Direction", level: "Core", description: "Photography direction, editorial design, and visual storytelling." },
  { name: "Spatial Design", level: "Extended", description: "Exhibition, retail, and experiential environment design." },
  { name: "Generative AI", level: "Experimental", description: "Creative AI tools, brand-name generators, and personalised content engines." },
  { name: "Data Storytelling", level: "Experimental", description: "Dashboard design, data viz, and insight-led creative." },
];

export default function CapabilitiesPage() {
  const [activeLevel] = useState("Core");

  return (
    <main className="bg-ink-950 text-white min-h-screen">
      <Header />
      <div className="pt-32 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-neon-500 mb-4">Capability Matrix</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="heading-xl mb-8 max-w-5xl">
            What we <span className="text-neon-500">actually do.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-lg text-ink-300 max-w-2xl mb-16">
            Not a menu. A matrix — organised by depth of engagement, not by
            department. Browse by engagement level below.
          </p>
        </ScrollReveal>

        {/* Level key */}
        <div className="flex flex-wrap gap-3 mb-16">
          {matrixLevels.map((l) => (
            <span
              key={l.level}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-[0.15em] border ${
                l.level === "Core"
                  ? "bg-neon-500 text-ink-950 border-neon-500"
                  : "bg-transparent text-white/60 border-white/10"
              }`}
            >
              {l.level}
            </span>
          ))}
        </div>

        {/* Matrix table */}
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-ink-400">
                <th className="py-4 px-6">Capability</th>
                <th className="py-4 px-6">Level</th>
                <th className="py-4 px-6 hidden md:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((cap) => (
                <tr
                  key={cap.name}
                  className={`border-b border-white/5 transition-all ${
                    cap.level === "Core"
                      ? "hover:bg-neon-500/5"
                      : cap.level === "Extended"
                      ? "hover:bg-white/5"
                      : "hover:bg-ink-900/5"
                  }`}
                >
                  <td className="py-5 px-6 text-lg font-display">{cap.name}</td>
                  <td className="py-5 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-2xs uppercase tracking-[0.1em] ${
                        cap.level === "Core"
                          ? "bg-neon-500/20 text-neon-500"
                          : cap.level === "Extended"
                          ? "bg-white/10 text-ink-200"
                          : "bg-ink-900/30 text-ink-400"
                      }`}
                    >
                      {cap.level}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-sm text-ink-400 hidden md:table-cell">
                    {cap.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-20">
          <Link
            href="/brief"
            className="inline-flex items-center gap-3 bg-neon-500 text-ink-950 px-10 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-neon-400 transition-all"
          >
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
