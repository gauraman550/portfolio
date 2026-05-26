"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  const letters = "AMAN GAUR".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "#0b0b12" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
              }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* Logo letters */}
          <div className="relative flex items-center gap-0 mb-8">
            {letters.map((letter, i) =>
              letter === " " ? (
                <span key={i} className="w-4" />
              ) : (
                <motion.span
                  key={i}
                  className="text-5xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "var(--font-geist-sans)",
                    letterSpacing: "0.05em",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {letter}
                </motion.span>
              )
            )}
          </div>

          {/* Tagline */}
          <motion.p
            className="text-slate-400 text-sm tracking-[0.3em] uppercase mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Software Developer
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="relative w-64 h-[2px] rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                width: `${Math.min(progress, 100)}%`,
              }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </motion.div>

          <motion.p
            className="mt-3 text-slate-500 text-xs tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
