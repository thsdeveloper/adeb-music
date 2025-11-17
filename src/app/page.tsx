import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Artists from "@/components/Artists";
import Releases from "@/components/Releases";
import Services from "@/components/Services";
import Credits from "@/components/Credits";
import BehindTheScenes from "@/components/BehindTheScenes";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Artists />
      <Releases />
      <Services />
      <Credits />
      <BehindTheScenes />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
