import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
// import { Speakers } from "@/components/Speakers";
import { Schedule } from "@/components/Schedule";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      {/* <section id="speakers"><Speakers /></section> */}
      <section id="schedule"><Schedule /></section>
      <section id="gallery"><Gallery /></section>
      <Footer />
    </main>
  );
}