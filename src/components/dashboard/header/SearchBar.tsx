"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-xs">
      <Search
        size={18}
        className="absolute left- 1  top-1/2 -translate-y-1/2 text-white/35"
      />

      <input
        type="text"
        className="
          h-11
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          pl-14
          pr-4
          text-sm
          text-white
          outline-none
          backdrop-blur-xl
          transition-all
          duration-300
          focus:border-cyan-400/30
          focus:bg-white/[0.05]
          focus:shadow-[0_0_25px_rgba(56,189,248,0.12)]
        "
      />
    </div>
  );
}