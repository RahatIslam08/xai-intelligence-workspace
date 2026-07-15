"use client";

import { motion } from "framer-motion";

type Props = {
  d: string;
};

export default function Connection({ d }: Props) {
  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="neuralGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      <motion.path
        d={d}
        fill="none"
        stroke="url(#neuralGradient)"
        strokeWidth="1.3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}