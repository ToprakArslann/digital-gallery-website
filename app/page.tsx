import Hero from "@/components/hero";
import { ReactLenis } from "lenis/react";
import About from "@/components/about";
import Collections from "@/components/collections";
import Artists from "@/components/artists";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <main className="flex flex-col font-sans">
      <ReactLenis root />
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Artists />
      <Contact />
    </main>
  );
}