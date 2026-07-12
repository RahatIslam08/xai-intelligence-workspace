const sources = [
  "Database",
  "API",
  "Files",
  "Apps",
];

export default function DashboardSources() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <h4 className="font-semibold">
        Sources
      </h4>

      <div className="mt-5 space-y-3">

        {sources.map((source) => (
          <div
            key={source}
            className="flex items-center justify-between"
          >
            <span>{source}</span>

            <span className="text-emerald-400">
              Active
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}