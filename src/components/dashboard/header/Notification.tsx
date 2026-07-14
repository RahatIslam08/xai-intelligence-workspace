"use client";

import { Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function Notification() {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
      "
    >
      <Bell size={18} />

      <span
        className="
          absolute
          right-3
          top-3
          h-2
          w-2
          rounded-full
          bg-cyan-400
        "
      />
    </motion.button>
  );
}