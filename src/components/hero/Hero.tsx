import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import Dashboard from "@/components/dashboard";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--brand)]/10 blur-[180px]" />

      <Container>
        <div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <Dashboard />
        </div>
      </Container>
    </section>
  );
}