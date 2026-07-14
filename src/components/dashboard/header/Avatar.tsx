"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        relative
        h-11
        w-11
        overflow-hidden
        rounded-xl
        border
        border-white/10
        ring-2
        ring-cyan-500/20
        shadow-lg
        shadow-cyan-500/20
      "
    >
      <Image
        src="/images/avatar.jpg"
        alt="Avatar"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}