"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";

const links = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

const socials = [
  { Icon: GithubIcon,   href: "https://github.com",   label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: TwitterIcon,  href: "https://twitter.com",  label: "Twitter" },
];

export function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="border-t border-slate-200 dark:border-slate-800"
      style={{ background: "var(--bg-footer)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              AG
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Aman Gaur</p>
              <p className="text-xs text-slate-500 dark:text-slate-500">Software Developer</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Socials + top */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-400 dark:text-slate-600 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="ml-1 w-7 h-7 flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Aman Gaur. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600 font-mono">
            Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
