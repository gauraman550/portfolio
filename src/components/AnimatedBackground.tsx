"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blob 1 — top left, violet */}
      <div
        className="absolute -top-32 -left-32 w-150 h-150 rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.13) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "blob 14s ease-in-out infinite",
        }}
      />

      {/* Blob 2 — top right, cyan */}
      <div
        className="absolute -top-16 -right-32 w-125 h-125 rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "blob 18s ease-in-out infinite 4s",
        }}
      />

      {/* Blob 3 — bottom center, indigo */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "blob 22s ease-in-out infinite 8s",
        }}
      />
    </div>
  );
}
