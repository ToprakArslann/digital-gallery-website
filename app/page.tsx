import Hero from "@/components/hero";
import { ReactLenis } from "lenis/react";
import Navigation from "@/components/navigation";
import About from "@/components/about";
import Collections from "@/components/collections";
export default function Home() {
  return (
    <main className="flex flex-col font-sans">
      <ReactLenis root />
      <Navigation />
      <Hero />
      <About />
      <Collections />
    </main>
  );
}