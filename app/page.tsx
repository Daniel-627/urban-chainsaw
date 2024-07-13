import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/subcomponents/ServicesCarousel";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="px-24 mx-auto bg-gradient-to-r from-gray-900 via-blue-800 to-black">
      <Hero />
      <ServicesCarousel />
      <Works />
      <About />
      <Contacts />
    </main>
  );
}
