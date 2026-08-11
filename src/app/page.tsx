import Hero from "@/sections/Hero";
import Message from "@/sections/Message";
import About from "@/sections/About";
import MissionVision from "@/sections/MissionVision";
import PillLink from "@/components/Buttons/PillLink";
import Services from "@/sections/Services";
import Clients from "@/sections/Clients";
import Reviews from "@/sections/Reviews";
import Projects from "@/sections/Projects";
import Location from "@/sections/Location";
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
      <div className="shell -mt-[clamp(3rem,2rem+4vw,8rem)] flex justify-end pb-[clamp(2.5rem,2rem+2vw,5rem)]">
        <PillLink href="/about" label="Learn more" />
      </div>
      <section id="mission-vision" className="scroll-mt-24">
        <MissionVision />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      <section id="clients" className="scroll-mt-24">
        <Clients />
      </section>
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="reviews" className="scroll-mt-24">
        <Reviews />
      </section>
      <section id="location" className="scroll-mt-24">
        <Location />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </>
  );
}
