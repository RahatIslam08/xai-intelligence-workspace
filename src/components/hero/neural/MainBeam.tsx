"use client";

import { motion } from "framer-motion";

export default function MainBeam() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="beamGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#38bdf8" />

          <stop offset="45%" stopColor="#60a5fa" />

          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      <motion.path
        d="
        M20 50
        C35 35,
        45 35,
        60 50

        S85 68,
        100 42
      "
        fill="none"
        stroke="url(#beamGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}