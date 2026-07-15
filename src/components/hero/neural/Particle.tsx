"use client";

import { motion } from "framer-motion";

type Props = {
  x: number;
  y: number;
  size: number;
};

export default function Particle({
  x,
  y,
  size,
}: Props) {
  return (
    <motion.div
      className="absolute rounded-full bg-cyan-300"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        boxShadow:
          "0 0 8px #22d3ee, 0 0 18px #22d3ee",
      }}
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.55, 1, 0.55],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}