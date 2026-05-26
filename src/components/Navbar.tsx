"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3 glass border-b border-violet-500/10" : "py-5 bg-transparent"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              >
                AG
              </div>
              <span className="hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-white transition-colors">
                Aman Gaur
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-violet-700 dark:text-white"
                        : "text-slate-600 dark:text-slate-400 hover:text-violet-700 dark:hover:text-white"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08))",
                          border: "1px solid rgba(124,58,237,0.25)",
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              {mounted && (
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white transition-colors"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.18)",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              )}

              {/* Resume button - desktop */}
              <motion.a
                href="/resume.pdf"
                download
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                whileHover={{ scale: 1.05, opacity: 0.9 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 size={14} />
                Resume
              </motion.a>

              {/* Mobile menu button */}
              <motion.button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white transition-colors"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.18)",
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-6 px-4 md:hidden"
            style={{
              background: "var(--bg-nav)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(124,58,237,0.12)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "text-violet-700 dark:text-white"
                        : "text-slate-600 dark:text-slate-400 hover:text-violet-700 dark:hover:text-white"
                    )}
                    style={
                      isActive
                        ? {
                            background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.06))",
                            border: "1px solid rgba(124,58,237,0.2)",
                          }
                        : {}
                    }
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              <div className="mt-3 px-1">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white rounded-xl"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
