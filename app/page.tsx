import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <Services />
      <Works />
      <About />
      <Process />
    </main>
  );
}
