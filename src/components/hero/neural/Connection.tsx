"use client";

import { motion } from "framer-motion";

export default function Connection() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 260 620"
    >
      <defs>
        <linearGradient
          id="connectionGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="#38bdf8"
          />

          <stop
            offset="100%"
            stopColor="#7c3aed"
          />
        </linearGradient>
      </defs>

      <motion.path
        d="
          M10 300
          C70 260 120 210 170 170
          C200 145 225 90 250 30
        "
        fill="none"
        stroke="url(#connectionGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.path
        d="
          M10 300
          C80 320 120 360 170 420
          C205 470 230 520 250 590
        "
        fill="none"
        stroke="url(#connectionGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </svg>
  );
}