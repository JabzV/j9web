import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/sections/About";
import Message from "@/sections/Message";

export const metadata: Metadata = {
  title: "About | J9 Design and Build",
  description:
    "We don't just build structures; we architect permanence. Learn what differentiates J9 Design and Build.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Who We Are"
        description="At J9 Design, we bridge the gap between raw engineering and conceptual art, creating spaces that stand as testaments to precision and vision."
      />
      <About />
      <Message />
    </>
  );
}
