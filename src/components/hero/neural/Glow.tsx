export default function Glow() {
  return (
    <>
      {/* Main Blue Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* Purple Glow */}
      <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-violet-500/15 blur-[90px]" />
    </>
  );
}