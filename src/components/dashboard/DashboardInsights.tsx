export default function DashboardInsights() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <h4 className="font-semibold">
        AI Summary
      </h4>

      <p className="mt-4 text-sm text-[var(--text-secondary)] leading-7">
        Revenue is up 23% this month.

        Enterprise customers continue to grow steadily with
        improved engagement and lower churn.
      </p>

      <button className="mt-6 text-sm font-medium text-[var(--brand)] hover:underline">
        View Full Summary →
      </button>

    </div>
  );
}