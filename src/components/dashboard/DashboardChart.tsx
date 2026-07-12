export default function DashboardChart() {
  const bars = [40, 70, 55, 90, 65, 110, 95];

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">

      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-semibold">
          Revenue Overview
        </h4>

        <span className="text-sm text-emerald-400">
          +13.4%
        </span>
      </div>

      <div className="flex h-52 items-end justify-between gap-4">

        {bars.map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-400 to-indigo-500 transition-all duration-500 hover:opacity-80"
            style={{
              height: `${height}%`,
            }}
          />
        ))}

      </div>

    </div>
  );
}