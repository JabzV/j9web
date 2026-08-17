import { Phone, MapPin, Mail } from "lucide-react";
import type { ContactContent } from "./types";

export const contact: ContactContent = {
  eyebrow: "Contact",
  headingLines: ["Let's", "Connect"],
  intro:
    "We're excited to connect with you! Fill out the form below, and let's embark on the journey of turning your vision into a reality.",
  details: [
    {
      id: "phone",
      label: "Phone",
      value: "0991 411 1242",
      href: "tel:+639914111242",
      icon: Phone,
    },
    {
      id: "location",
      label: "Visit Us",
      value: "Lot 15, Block 8, Purok 7, Gawad Kalinga, Malaybalay, Philippines, 8700",
      icon: MapPin,
    },
    {
      id: "email",
      label: "Email",
      value: "j9dabcats@gmail.com",
      href: "mailto:j9dabcats@gmail.com",
      icon: Mail,
    },
  ],
  fields: [
    {
      name: "name",
      label: "Name",
      placeholder: "Jane Doe",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "09xxxxxxxxx",
      type: "tel",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      placeholder: "you@example.com",
      type: "email",
      required: true,
    },
    {
      name: "location",
      label: "Location",
      placeholder: "Barangay, City",
      type: "text",
      required: false,
    },
    {
      name: "message",
      label: "Message",
      placeholder: "Tell us about your project...",
      type: "textarea",
      required: true,
    },
  ],
  submitLabel: "Request Free Estimate",
  backgroundImage: "/assets/images/contact/contact-bg.jpg",
};
