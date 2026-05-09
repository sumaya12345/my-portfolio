import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/components/portfolio/use-reveal";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
