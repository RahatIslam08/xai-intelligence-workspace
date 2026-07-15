"use client";

import { motion } from "framer-motion";

export default function Glow() {
  return (
    <>
      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[720px]
          h-[720px]
          rounded-full
          bg-violet-600/30
          blur-[180px]
        "
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[58%]
          top-[52%]
          w-[520px]
          h-[520px]
          rounded-full
          bg-cyan-500/20
          blur-[150px]
        "
      />
    </>
  );
}