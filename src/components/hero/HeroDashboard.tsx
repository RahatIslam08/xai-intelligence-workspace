import Card from "@/components/ui/Card";

export default function HeroDashboard() {
  return (
    <Card className="relative h-[560px] w-full overflow-hidden rounded-3xl p-8">

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-[var(--brand)]/20 blur-3xl" />

      <div className="relative space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-[var(--text-secondary)]">
              Workspace
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              Xai Intelligence
            </h3>
          </div>

          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

        </div>

        {/* Fake Analytics */}
        <div className="space-y-3">

          <div className="h-2 rounded-full bg-white/10">
            <div className="h-full w-4/5 rounded-full bg-[var(--brand)]" />
          </div>

          <div className="h-2 rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-cyan-400" />
          </div>

          <div className="h-2 rounded-full bg-white/10">
            <div className="h-full w-1/2 rounded-full bg-violet-400" />
          </div>

        </div>

        {/* Graph */}
        <div className="relative h-52 rounded-2xl border border-white/5 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10">

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-6 pb-6">

            <div className="h-16 w-6 rounded bg-[var(--brand)]" />
            <div className="h-28 w-6 rounded bg-cyan-400" />
            <div className="h-20 w-6 rounded bg-violet-400" />
            <div className="h-36 w-6 rounded bg-[var(--brand)]" />
            <div className="h-24 w-6 rounded bg-cyan-400" />

          </div>

        </div>

      </div>

    </Card>
  );
}