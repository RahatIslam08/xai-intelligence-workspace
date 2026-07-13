import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Revenue",
    value: "$8.42M",
    growth: "+13.4%",
  },
  {
    title: "Customers",
    value: "2,847",
    growth: "+11.4%",
  },
  {
    title: "AI Accuracy",
    value: "96.8%",
    growth: "+4.2%",
  },
];

export default function DashboardStats() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all duration-300 hover:border-[var(--brand)]/40 hover:bg-white/[0.06]"
        >
          <p className="text-xs text-[var(--text-secondary)]">
            {item.title}
          </p>

          <h3 className="mt-2 text-4xl font-bold tracking-tight">
            {item.value}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium text-emerald-400">
              ▲ {item.growth}
            </span>

            {/* Fake Mini Chart */}
            <div className="flex items-end gap-[2px]">
              {[10, 18, 12, 26, 20, 30].map((h, index) => (
                <div
                  key={index}
                  className="w-1 rounded-full bg-gradient-to-t from-cyan-400 to-violet-500"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}