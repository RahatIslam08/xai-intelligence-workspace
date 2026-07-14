"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

export default function SidebarItem({
  icon,
  label,
  active = false,
}: SidebarItemProps) {
  return (
    <motion.button
      whileHover={{
        x: 4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={cn(
  "group relative flex h-12 w-full items-center gap-3 rounded-xl px-4 transition-all duration-300",
        active
          ? "bg-gradient-to-r from-cyan-500/15 to-violet-500/10 border border-cyan-400/10 shadow-lg shadow-cyan-500/10"
          : "hover:bg-white/5"
      )}
    >
      <span
        className={cn(
          "transition-colors duration-300",
          active
            ? "text-[var(--brand)]"
            : "text-[var(--text-secondary)] group-hover:text-white"
        )}
      >
        <div
  className="
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-lg
    transition-all
    duration-300
    group-hover:bg-white/5
  "
>
  {icon}
</div>



      </span>
{active && (
  <motion.div
    layoutId="activeSidebar"
    className="
      absolute
      left-0
      h-7
      w-1
      rounded-full
      bg-cyan-400
    "
  />
)}
      <span
        className={cn(
          "text-sm font-medium",
          active
            ? "text-white"
            : "text-[var(--text-secondary)] group-hover:text-white"
        )}
      >
        {label}
      </span>
    </motion.button>
  );
}