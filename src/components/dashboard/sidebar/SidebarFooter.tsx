"use client";

import Button from "@/components/ui/Button";

export default function SidebarFooter() {
  return (
    <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <p className="text-sm font-semibold">
        Pro Plan
      </p>

      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        Unlock premium AI tools.
      </p>

      <Button
        className="mt-4 w-full"
      >
        Upgrade
      </Button>
    </div>
  );
}