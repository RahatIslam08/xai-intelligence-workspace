const sources = [
  "Stripe",
  "GitHub",
  "Database",
  "Analytics",
];

export default function DashboardSources() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <h4 className="font-semibold">
        Connected Sources
      </h4>

      <div className="mt-5 space-y-4">

        {sources.map((source) => (
          <div
            key={source}
            className="flex items-center justify-between"
          >
            <span>{source}</span>

            <div className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        ))}

      </div>

    </div>
  );
}