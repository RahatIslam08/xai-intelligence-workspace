import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-5">

      {/* Left */}
      <div>
        <p className="text-sm text-[var(--text-secondary)]">
          Welcome back
        </p>

        <h3 className="mt-1 text-2xl font-bold">
          Xai Workspace
        </h3>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition">
          <Search size={18} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition">
          <Bell size={18} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 font-semibold">
          X
        </div>

      </div>
    </div>
  );
}