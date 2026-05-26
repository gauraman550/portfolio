"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Zap, Package, Palette, GitBranch } from "lucide-react";

const highlights = [
  { Icon: Code2,      label: "React.js & Next.js",   desc: "SPA, SSR, SSG — primary framework" },
  { Icon: GitBranch,  label: "TypeScript",            desc: "Strong typing across all projects" },
  { Icon: Database,   label: "API Integration",       desc: "REST APIs, JWT auth, Axios" },
  { Icon: Package,    label: "State Management",      desc: "Redux Toolkit, Context, TanStack Query" },
  { Icon: Zap,        label: "Performance",           desc: "Code splitting, lazy loading, memoization" },
  { Icon: Palette,    label: "Styling",               desc: "Tailwind CSS, SCSS, component libraries" },
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

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <SectionLabel num="01" title="About Me" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" as const }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-snug">
              Frontend developer who{" "}
              <span style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1 50%, #06b6d4)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                cares about the details.
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed">
              <p>
                I&apos;m a Software Developer with{" "}
                <span className="text-slate-900 dark:text-slate-200 font-medium">1 year 10 months</span>{" "}
                of professional experience, currently at{" "}
                <span className="text-slate-900 dark:text-slate-200 font-medium">Telepathy Infotech</span>.
                My focus is building frontend applications that are fast, scalable, and
                maintainable — not just ones that look good in a demo.
              </p>
              <p>
                I work primarily with{" "}
                <span className="text-violet-600 dark:text-violet-400 font-medium">React.js</span> and{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">Next.js</span>, and I&apos;ve
                shipped real-world products — a hospital management system and a real estate
                platform — where performance and correctness actually matter.
              </p>
              <p>
                Outside of work I keep my DSA skills sharp and stay current on whatever
                the frontend ecosystem decides to reinvent next.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              {[
                { v: "1.8+", l: "yrs experience" },
                { v: "3",    l: "shipped projects" },
                { v: "20+",  l: "technologies" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08, ease: "easeOut" as const }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {s.v}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — skill cards with icons */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" as const }}
              className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5"
            >
              Things I work with
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--bg-card)" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.06, ease: "easeOut" as const }}
                >
                  <span
                    className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 transition-colors"
                    style={{ background: "var(--bg-card-2)" }}
                  >
                    <item.Icon size={13} className="text-indigo-500 dark:text-indigo-400" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
