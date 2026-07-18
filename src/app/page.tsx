import Hero from "@/sections/Hero";
import Message from "@/sections/Message";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Reviews from "@/sections/Reviews";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Page() {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>
      <Message />
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      <section id="reviews" className="scroll-mt-24">
        <Reviews />
      </section>
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </>
  );
}
