"use client";

import { motion } from "framer-motion";

type Props = {
  x: number;
  y: number;
  size?: number;
};

export default function Particle({
  x,
  y,
  size = 8,
}: Props) {
  return (
    <motion.div
      className="absolute rounded-full bg-cyan-400 shadow-[0_0_18px_#38bdf8]"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      animate={{
        y: [-8, 8, -8],
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.25, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    />
  );
}