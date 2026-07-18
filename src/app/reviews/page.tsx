import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ReviewsGrid from "@/sections/ReviewsGrid";

export const metadata: Metadata = {
  title: "Reviews | J9 Design and Build",
  description:
    "See what our clients have to say about working with J9 Design and Build.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Client Stories"
        description="We measure our success by the spaces we create and the clients who call them home."
      />
      <ReviewsGrid />
    </>
  );
}
