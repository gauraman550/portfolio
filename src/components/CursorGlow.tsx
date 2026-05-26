"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full hidden md:block"
        animate={{
          x: position.x - 200,
          y: position.y - 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          width: 8,
          height: 8,
          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
        }}
      />
    </>
  );
}
