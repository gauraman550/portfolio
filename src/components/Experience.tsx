"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Clock, BadgeCheck } from "lucide-react";

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-sm font-medium text-violet-600 dark:text-violet-400">{num}.</span>
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{title}</span>
      <div className="h-px w-16 bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}

const responsibilities = [
  "Built and maintained scalable frontend applications with React.js and Next.js",
  "Integrated REST APIs and implemented JWT-based authentication flows",
  "Designed reusable component libraries that cut development time across projects",
  "Improved performance through code splitting, lazy loading, and rendering optimisations",
  "Collaborated with backend engineers and designers to ship end-to-end features",
  "Shipped a hospital management system and a real estate platform — both in production",
];

const tech = ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "REST APIs", "Git"];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <SectionLabel num="03" title="Experience" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" as const }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" as const }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          style={{ background: "var(--bg-card)" }}
        >
          {/* Gradient top bar */}
          <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1 50%, #06b6d4)" }} />

          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                {/* Company logo placeholder */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(99,102,241,0.1))" }}
                >
                  <Briefcase size={18} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Software Developer</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-0.5">
                    Telepathy Infotech
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700" style={{ background: "var(--bg-card-2)" }}>
                  <Calendar size={11} />
                  2023 – Present
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700" style={{ background: "var(--bg-card-2)" }}>
                  <Clock size={11} />
                  1 yr 10 mo
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/40">
                  <BadgeCheck size={11} />
                  Full-time
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2.5 mb-6">
              {responsibilities.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.22 + i * 0.07, ease: "easeOut" as const }}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {r}
                </motion.li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100 dark:border-slate-800">
              {tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.28, delay: 0.5 + i * 0.04, ease: "easeOut" as const }}
                  className="px-2.5 py-1 rounded-md text-xs font-medium text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
