import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/sections/About";
import MissionVision from "@/sections/MissionVision";
import Process from "@/sections/Process";
import Highlights from "@/sections/Highlights";
import Location from "@/sections/Location";
import Message from "@/sections/Message";

export const metadata: Metadata = {
  title: "About | J9 Design and Build",
  description:
    "J9 Design & Build Construction and Trading Services is a Filipino construction company in Malaybalay City, Bukidnon, delivering complete construction, engineering, and design solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Who We Are"
        description="A proudly Filipino construction company based in Malaybalay City, Bukidnon — delivering complete construction, engineering, and design solutions for residential, commercial, institutional, and infrastructure projects."
      />
      <About />
      <section id="mission-vision" className="scroll-mt-24">
        <MissionVision />
      </section>
      <section id="process" className="scroll-mt-24">
        <Process />
      </section>
      <section id="highlights" className="scroll-mt-24">
        <Highlights />
      </section>
      <section id="location" className="scroll-mt-24">
        <Location />
      </section>
      <Message />
    </>
  );
}
