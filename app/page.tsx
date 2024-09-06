import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ServicesLoop from "@/components/ServicesLoop";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <ServicesLoop />
      <Works />
      <About />
      <Process />
    </main>
  );
}
