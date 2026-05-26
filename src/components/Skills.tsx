"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Gauge, Wrench, BookOpen } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    Icon: Monitor,
    color: "#7c3aed",
    bgColor: "rgba(124,58,237,0.08)",
    borderColor: "rgba(124,58,237,0.2)",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "React.js", "Next.js", "Redux Toolkit", "Context API", "TanStack Query", "Tailwind CSS", "SCSS", "Bootstrap", "Material UI", "ShadCN UI"],
  },
  {
    title: "Backend & APIs",
    Icon: Server,
    color: "#06b6d4",
    bgColor: "rgba(6,182,212,0.08)",
    borderColor: "rgba(6,182,212,0.2)",
    skills: ["REST APIs", "API Integration", "JWT Authentication", "Cookies & Sessions", "Axios", "Fetch API"],
  },
  {
    title: "Performance",
    Icon: Gauge,
    color: "#a78bfa",
    bgColor: "rgba(167,139,250,0.08)",
    borderColor: "rgba(167,139,250,0.2)",
    skills: ["Code Splitting", "Lazy Loading", "Virtualization", "Memoization", "SSR / CSR / SSG", "SEO", "Web Performance"],
  },
  {
    title: "Tools & DevOps",
    Icon: Wrench,
    color: "#34d399",
    bgColor: "rgba(52,211,153,0.08)",
    borderColor: "rgba(52,211,153,0.2)",
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Vercel", "Netlify"],
  },
  {
    title: "CS Fundamentals",
    Icon: BookOpen,
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.2)",
    skills: ["Data Structures", "Algorithms", "Recursion", "Backtracking", "Searching & Sorting", "Time Complexity"],
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

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          ref={ref}
        >
          <SectionLabel num="02" title="Skills" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" as const }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Technologies I use
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-[15px] mt-2 max-w-lg">
            The stack I&apos;ve actually used in production — not just things I&apos;ve touched once.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.08, ease: "easeOut" as const }}
              className="group rounded-2xl border p-5 transition-all hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--card-border)",
              }}
              whileHover={{ borderColor: cat.borderColor }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: cat.bgColor, border: `1px solid ${cat.borderColor}` }}
                >
                  <cat.Icon size={15} style={{ color: cat.color }} />
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{cat.title}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.28, delay: 0.18 + ci * 0.06 + si * 0.025, ease: "easeOut" as const }}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/70 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-default"
                    style={{ background: "var(--bg-card-2)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
