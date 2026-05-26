"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const projects = [
  {
    num: "01",
    title: "Hospital Management System",
    desc: "A production healthcare platform with patient records, appointments, and role-based access. Built for real-world use — not a tutorial project.",
    tech: ["Next.js", "React.js", "TypeScript", "React Query", "REST APIs"],
    highlights: ["JWT auth + role-based access control", "Reusable component library", "Optimised data fetching with React Query"],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #6366f1)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "02",
    title: "Real Estate Platform",
    desc: "Property listing platform with advanced search, filters, and SSR for SEO. Fast page loads, clean UI, works on every device.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    highlights: ["SSR for SEO + fast TTFB", "Dynamic search & filter UI", "Fully responsive across breakpoints"],
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    num: "03",
    title: "Developer Portfolio",
    desc: "This site — designed from scratch with a focus on performance, accessibility, and a design that doesn't look like every other portfolio.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    highlights: ["Dark / light mode system", "Scroll-triggered animations", "Responsive, accessible markup"],
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)",
    liveUrl: "#",
    githubUrl: "#",
  },
];

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-sm font-medium text-violet-600 dark:text-violet-400">{num}.</span>
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{title}</span>
      <div className="h-px w-16 bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <SectionLabel num="04" title="Projects" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Things I&apos;ve built
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
          >
            <GithubIcon width={15} height={15} />
            All repos on GitHub
            <ArrowUpRight size={13} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" as const }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" as const } }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 overflow-hidden cursor-default"
              style={{
                background: "var(--bg-card)",
                boxShadow: "var(--card-shadow)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Colored header band */}
              <div
                className="h-24 w-full flex items-end px-5 pb-4 relative overflow-hidden"
                style={{ background: p.gradient }}
              >
                {/* Subtle noise/grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative flex items-center justify-between w-full">
                  <span className="font-mono text-2xl font-bold text-white/40">{p.num}</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/25 text-white transition-colors"
                      aria-label="GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon width={13} height={13} />
                    </a>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/25 text-white transition-colors"
                      aria-label="Live demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5">
                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400"
                      style={{ background: "var(--bg-card-2)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
