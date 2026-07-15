"use client";

import { motion } from "framer-motion";

interface ParticleProps {
  x: number;
  y: number;
  size?: number;
  delay?: number;
}

export default function Particle({
  x,
  y,
  size = 6,
  delay = 0,
}: ParticleProps) {
  return (
    <motion.div
      className="absolute rounded-full bg-cyan-400"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        boxShadow: `
          0 0 8px #22d3ee,
          0 0 18px #22d3ee,
          0 0 40px #3b82f6
        `,
      }}
      animate={{
        scale: [1, 1.6, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.8,
        delay,
      }}
    />
  );
}