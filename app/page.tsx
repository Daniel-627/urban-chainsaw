import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 mx-auto">
      <Hero />
      <Works />
      <About />
      <Contacts />
    </main>
  );
}
