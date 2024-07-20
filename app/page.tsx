import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ServicesCarousel from "@/components/subcomponents/ServicesCarousel";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="px-24 mx-auto ">
      <Hero />
      <ServicesCarousel />
      <Works />
      <About />
      <Process />
    </main>
  );
}
