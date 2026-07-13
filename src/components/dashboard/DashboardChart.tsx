"use client";

import { motion } from "framer-motion";

export default function DashboardChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.3,
      }}
      className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--text-secondary)]">
            Revenue Overview
          </p>

          <h3 className="mt-1 text-3xl font-bold tracking-tight">
            $8.42M
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.4,
          }}
          className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400"
        >
          ▲ 13.4%
        </motion.div>
      </div>

      {/* Chart */}
      <div className="relative h-60">
        {/* Grid */}
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="border-t border-white/5" />
          <div className="border-t border-white/5" />
          <div className="border-t border-white/5" />
          <div className="border-t border-white/5" />
          <div className="border-t border-white/5" />
        </div>

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 600 220"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#38bdf8"
              />
              <stop
                offset="100%"
                stopColor="#7c3aed"
              />
            </linearGradient>

            <linearGradient
              id="areaGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#7c3aed"
                stopOpacity="0.35"
              />
              <stop
                offset="100%"
                stopColor="#7c3aed"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Area */}
          <path
            d="M0 180
               C70 150,100 130,140 140
               S220 90,280 110
               S360 60,420 80
               S520 30,600 50
               L600 220
               L0 220 Z"
            fill="url(#areaGradient)"
          />

          {/* Animated Line */}
          <motion.path
            d="M0 180
               C70 150,100 130,140 140
               S220 90,280 110
               S360 60,420 80
               S520 30,600 50"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

          {/* Data Points */}
          {[
            { cx: 140, cy: 140 },
            { cx: 280, cy: 110 },
            { cx: 420, cy: 80 },
            { cx: 600, cy: 50 },
          ].map((point, index) => (
            <motion.circle
              key={index}
              cx={point.cx}
              cy={point.cy}
              r="5"
              fill="#7c3aed"
              stroke="#fff"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1 + index * 0.15,
              }}
            />
          ))}
        </svg>

        {/* Month Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[var(--text-secondary)]">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}