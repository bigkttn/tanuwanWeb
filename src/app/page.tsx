import Preloader from "../components/Preloader";
import Cursor from "../components/Cursor";
import LenisScroll from "../components/LenisScroll";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Portfolio from "../components/Portfolio";
import Marquee from "../components/ui/Marquee";
import Packages from "../components/Packages";
import Process from "../components/Process";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Area from "../components/Area";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingCallBar from "../components/FloatingCallBar";

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <LenisScroll />
      <Navbar />
      
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Certificates />
        <Portfolio />
        <Marquee />
        <Packages />
        <Process />
        <Reviews />
        <FAQ />
        <Area />
        <Contact />
      </main>

      <Footer />
      <FloatingCallBar />
    </>
  );
}
