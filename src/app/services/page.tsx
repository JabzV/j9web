import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/sections/Services";
import ServicesDetail from "@/sections/ServicesDetail";

export const metadata: Metadata = {
  title: "Services | J9 Design and Build",
  description:
    "From architectural design to general construction and material supply, explore the full range of services offered by J9 Design and Build.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What We Do"
        description="Your all-in-one partner for building plans, construction, and supply. Explore the full range of what we offer."
      />
      <ServicesDetail />
      <Services />
    </>
  );
}
