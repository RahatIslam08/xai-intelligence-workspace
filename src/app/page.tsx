import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
}