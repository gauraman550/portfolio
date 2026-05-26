"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Loader2, Mail, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-sm font-medium text-violet-600 dark:text-violet-400">{num}.</span>
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{title}</span>
      <div className="h-px w-16 bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}

const socials = [
  { Icon: GithubIcon,   href: "https://github.com",   label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: TwitterIcon,  href: "https://twitter.com",  label: "Twitter" },
];

const contactInfo = [
  {
    Icon: Mail,
    label: "amangaur@email.com",
    href: "mailto:amangaur@email.com",
    clickable: true,
  },
  {
    Icon: MapPin,
    label: "India",
    href: null,
    clickable: false,
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setTimeout(() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }, 3000);
  };

  const fieldClass = "w-full px-4 py-3 rounded-xl text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all border border-slate-200 dark:border-slate-700 focus:border-indigo-400 dark:focus:border-indigo-500";
  const fieldBg = { background: "var(--bg-input)" };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <SectionLabel num="05" title="Contact" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" as const }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed mb-8 max-w-md">
              I&apos;m open to new opportunities — full-time roles, freelance projects, or just a chat
              about frontend stuff. My inbox is always open.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map(({ Icon, label, href, clickable }) => {
                const inner = (
                  <div className="flex items-center gap-3 group">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 transition-colors shrink-0"
                      style={{ background: "var(--bg-card)" }}
                    >
                      <Icon size={14} className="text-indigo-500 dark:text-indigo-400" />
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {label}
                    </span>
                    {clickable && <ArrowRight size={12} className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-400 transition-colors ml-auto" />}
                  </div>
                );

                return clickable && href ? (
                  <a key={label} href={href}>{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-3">
                Find me on
              </p>
              <div className="flex gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                    style={{ background: "var(--bg-card)" }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon width={16} height={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" as const }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800"
              style={{ background: "var(--bg-card)" }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={fieldClass} style={fieldBg} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className={fieldClass} style={fieldBg} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="What's on your mind?" required rows={5} className={`${fieldClass} resize-none`} style={fieldBg} />
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-opacity shadow-lg"
                style={{
                  background: status === "success"
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #7c3aed, #6366f1)",
                  opacity: status === "loading" ? 0.75 : 1,
                  boxShadow: status === "success" ? "0 4px 20px rgba(16,185,129,0.25)" : "0 4px 20px rgba(99,102,241,0.25)",
                }}
                whileHover={status === "idle" ? { scale: 1.02, y: -1 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
              >
                {status === "idle"    && <><Send size={14} /> Send message</>}
                {status === "loading" && <><Loader2 size={14} className="animate-spin" /> Sending...</>}
                {status === "success" && <><CheckCircle size={14} /> Message sent!</>}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
