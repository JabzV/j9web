import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | J9 Design and Build",
  description:
    "Let's connect. Reach out to J9 Design and Build and request a free estimate for your next project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Connect"
        description="Fill out the form and let's embark on the journey of turning your vision into a reality."
      />
      <Contact />
    </>
  );
}
