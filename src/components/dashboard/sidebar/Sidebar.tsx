"use client";

import {
  LayoutDashboard,
  BrainCircuit,
  Bot,
  FileBarChart2,
  Database,
  Settings,
  Sparkles,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside
  className="
    relative
    flex
    h-full
    w-[250px]
    flex-col
    border-r
    border-white/5
    bg-white/[0.03]
    backdrop-blur-2xl
    px-5
    py-6
  "
>

{/* Background Glow */}
<div
  className="
    absolute
    -left-20
    top-20
    h-56
    w-56
    rounded-full
    bg-[var(--brand)]/10
    blur-[120px]
    pointer-events-none
  "
/>

      {/* Logo */}
      <div className="relative z-10 mb-12 flex items-center gap-3">

  <div
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-xl
      bg-gradient-to-br
      from-cyan-400
      to-violet-500
      shadow-lg
      shadow-cyan-500/30
    "
  >
    <Sparkles
      size={18}
      className="text-white"
    />
  </div>

  <div>

    <h2 className="text-lg font-bold tracking-wide">
      Xai
    </h2>

    <p className="text-xs text-[var(--text-secondary)]">
      Intelligence
    </p>

  </div>

</div>

      {/* Navigation */}
      <p
  className="
    mb-3
    text-xs
    uppercase
    tracking-[0.25em]
    text-[var(--text-secondary)]
  "
>
  Navigation
</p>
      <div className="space-y-2">

        <SidebarItem
          active
          icon={<LayoutDashboard size={18} />}
          label="Workspace"
        />

        <SidebarItem
          icon={<BrainCircuit size={18} />}
          label="Intelligence"
        />

        <SidebarItem
          icon={<Bot size={18} />}
          label="Automation"
        />

        <SidebarItem
          icon={<FileBarChart2 size={18} />}
          label="Reports"
        />

        <SidebarItem
          icon={<Database size={18} />}
          label="Data Sources"
        />

        <SidebarItem
          icon={<Settings size={18} />}
          label="Settings"
        />

      </div>

      <SidebarFooter />

    </aside>
  );
}