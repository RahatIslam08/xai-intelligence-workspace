import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import Dashboard from "@/components/dashboard";
import NeuralNetwork from "./neural";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-[calc(100vh-80px)]
        flex
        items-center
        pt-6
        pb-10
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-[var(--brand)]/10
          blur-[180px]
        "
      />

      <Container className="relative">
        <div
          className="
            relative
            z-10
            grid
            gap-12
            lg:grid-cols-[480px_1fr_560px]
            lg:items-center
            lg:min-h-[760px]
          "
        >
          {/* Left Content */}
          <HeroContent />

          {/* Center Neural Network */}
          <div className="relative h-[560px]">
            <NeuralNetwork />
          </div>

          {/* Right Dashboard */}
          <Dashboard />
        </div>
      </Container>
    </section>
  );
}