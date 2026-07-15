import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import Dashboard from "@/components/dashboard";
import NeuralNetwork from "./neural";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--brand)]/10 blur-[180px]" />

      <Container>

  <NeuralNetwork />

  <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_620px]">

      <HeroContent />

      <Dashboard />

  </div>

</Container>

    </section>
  );
}