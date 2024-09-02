import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ServicesCarousel from "@/components/subcomponents/ServicesCarousel";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <ServicesCarousel />
      <Works />
      <About />
      <Process />
    </main>
  );
}
