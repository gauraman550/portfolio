"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";

const socialLinks = [
  { Icon: GithubIcon,   label: "GitHub",   href: "https://github.com" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: TwitterIcon,  label: "Twitter",  href: "https://twitter.com" },
];

const stats = [
  { value: "1 yr 10 mo", label: "Experience" },
  { value: "3+",         label: "Projects shipped" },
  { value: "20+",        label: "Technologies" },
];

/* Syntax-highlighted code lines for the right panel */
const codeLines = [
  { tokens: [{ t: "const ", c: "#a78bfa" }, { t: "aman", c: "#e2e8f0" }, { t: " = {", c: "#94a3b8" }] },
  { tokens: [{ t: "  role", c: "#7dd3fc" }, { t: ": ", c: "#94a3b8" }, { t: '"Software Developer"', c: "#86efac" }] },
  { tokens: [{ t: "  stack", c: "#7dd3fc" }, { t: ": [", c: "#94a3b8" }, { t: '"React"', c: "#86efac" }, { t: ", ", c: "#94a3b8" }, { t: '"Next.js"', c: "#86efac" }, { t: "]", c: "#94a3b8" }] },
  { tokens: [{ t: "  focus", c: "#7dd3fc" }, { t: ": ", c: "#94a3b8" }, { t: '"Frontend"', c: "#86efac" }] },
  { tokens: [{ t: "  location", c: "#7dd3fc" }, { t: ": ", c: "#94a3b8" }, { t: '"India"', c: "#86efac" }] },
  { tokens: [{ t: "  available", c: "#7dd3fc" }, { t: ": ", c: "#94a3b8" }, { t: "true", c: "#fb923c" }] },
  { tokens: [{ t: "}", c: "#94a3b8" }] },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Status badge */}
            <motion.div {...fade(0.1)} className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                Open to work
              </span>
              <span className="text-emerald-300 dark:text-emerald-700">·</span>
              <MapPin size={11} className="text-emerald-600 dark:text-emerald-500" />
              <span className="text-xs text-emerald-600 dark:text-emerald-500">India</span>
            </motion.div>

            {/* Name */}
            <motion.div {...fade(0.2)}>
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.07] tracking-tight mb-4">
                <span className="block text-slate-900 dark:text-white">Hi, I&apos;m</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed 20%, #6366f1 50%, #06b6d4 85%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Aman Gaur
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.p {...fade(0.3)} className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 font-medium mb-4">
              Software Developer &mdash; Frontend Specialist
            </motion.p>

            {/* Bio */}
            <motion.p {...fade(0.4)} className="text-[15px] sm:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed mb-9">
              I build fast, scalable frontend applications with React.js and Next.js.
              Focused on clean architecture, performance, and experiences users actually enjoy.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.5)} className="flex flex-wrap items-center gap-3 mb-10">
              <motion.a
                href="mailto:amangaur@email.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg shadow-violet-500/20"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={14} />
                Get in touch
              </motion.a>

              <motion.button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                See my work
                <ArrowRight size={14} />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={14} />
                Resume
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div {...fade(0.58)} className="flex items-center gap-2 mb-10">
              {socialLinks.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                  whileHover={{ scale: 1.12, y: -1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon width={16} height={16} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fade(0.68)}
              className="flex flex-wrap gap-x-8 gap-y-4 pt-7 border-t border-slate-200 dark:border-slate-800"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{s.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: code card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" as const }}
            className="hidden lg:block"
          >
            <div
              className="relative rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl shadow-violet-500/5"
              style={{
                background: "var(--bg-card)",
                animation: "float 7s ease-in-out infinite",
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-200 dark:border-slate-800" style={{ background: "var(--bg-card-2)" }}>
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs font-mono text-slate-400 dark:text-slate-600">aman.ts</span>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-7">
                {codeLines.map((line, li) => (
                  <motion.div
                    key={li}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.7 + li * 0.08, ease: "easeOut" as const }}
                    className="flex flex-wrap"
                  >
                    {line.tokens.map((tok, ti) => (
                      <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Active status row */}
              <div className="px-6 pb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  available for new opportunities
                </span>
              </div>

              {/* Subtle gradient glow below card */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full"
                style={{
                  background: "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
            </div>

            {/* Tech badges floating below card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" as const }}
              className="flex flex-wrap justify-center gap-2 mt-5"
            >
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                  style={{ background: "var(--bg-card)" }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
