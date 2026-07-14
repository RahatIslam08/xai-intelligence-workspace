"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
      />

      <input
        type="text"
        placeholder="Search..."
        className="
          h-11
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/5
          pl-11
          pr-4
          text-sm
          text-white
          outline-none
          backdrop-blur-xl
          transition-all
          duration-300
          focus:border-cyan-400/40
          focus:bg-white/10
          focus:shadow-lg
          focus:shadow-cyan-500/10
        "
      />
    </div>
  );
}