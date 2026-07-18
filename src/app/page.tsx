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
      <section id="home">
        <Hero />
      </section>
      <Message />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
