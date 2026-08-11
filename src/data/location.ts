import type { LocationContent } from "./types";

export const location: LocationContent = {
  eyebrow: "Location",
  heading: "Find Our Office",
  intro:
    "Our office sits in Gawad Kalinga, Barangay 9, just off San Victores St. — a short walk from the main road and minutes from Malaybalay City's government center.",
  address:
    "Lot 15, Block 8, Purok 7, Gawad Kalinga, Barangay 9, Malaybalay City, Bukidnon 8700",
  facts: [
    { id: "barangay", label: "Barangay", value: "Gawad Kalinga, Barangay 9" },
    { id: "main-road", label: "From Main Road", value: "San Victores St." },
    { id: "walk", label: "On Foot", value: "±13 min · approx. 950 m" },
    { id: "service-area", label: "Service Area", value: "Bukidnon and nearby areas" },
  ],
  mapImage: "/assets/images/location/vicinity-map.jpg",
  mapAlt:
    "Vicinity map showing the route from San Victores St. to the J9 Design and Build office in Gawad Kalinga, Barangay 9, Malaybalay City, Bukidnon",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=J9+Design+and+Build+Construction+and+Trading+Services+Malaybalay+City+Bukidnon",
  directionsLabel: "Open in Google Maps",
};
