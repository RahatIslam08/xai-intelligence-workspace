export default function DashboardInsights() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <h4 className="font-semibold">
        AI Summary
      </h4>

      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
        Your revenue trend is improving.

        AI predicts another 18% growth over the next
        quarter with strong customer retention.
      </p>

      <button className="mt-6 text-sm font-medium text-[var(--brand)] hover:underline">
        View Report →
      </button>

    </div>
  );
}