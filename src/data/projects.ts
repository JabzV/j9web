import type { ProjectsContent } from "./types";

/**
 * Add, remove, or reorder projects here — the site updates automatically.
 * Set `featured: true` on the projects you want in the landing-page showcase.
 *
 * Each project has its own page at /projects/<id>.
 * `images` powers that page's gallery: the FIRST image is the cover used in
 * the showcase and grid, and you can add as many images as you want (12+).
 *
 * `type` is the broad category that drives the filter pills on /projects:
 * "Residential" | "Commercial" | "Institutional" | "Interior Design".
 * `year` is optional — fill it in per project as the dates are confirmed.
 */
export const projects: ProjectsContent = {
  eyebrow: "Projects",
  heading: "Selected Works",
  featured: {
    eyebrow: "Featured Projects",
    heading: "Recent Projects We've Completed",
  },
  featuredCount: 6,
  projects: [
    {
      id: "gango-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Gango, Libona, Bukidnon",
      description: "An interior design project in Gango, Libona, Bukidnon.",
      images: [
        "/assets/images/projects/gango-interior-design/01.webp",
        "/assets/images/projects/gango-interior-design/02.webp",
        "/assets/images/projects/gango-interior-design/03.webp",
        "/assets/images/projects/gango-interior-design/04.webp",
        "/assets/images/projects/gango-interior-design/05.webp",
      ],
      featured: true,
    },
    {
      id: "cagayan-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Cagayan de Oro City, Misamis Oriental",
      description:
        "A two-storey residential build in Cagayan de Oro City, Misamis Oriental.",
      images: [
        "/assets/images/projects/cagayan-two-storey-building/01.webp",
        "/assets/images/projects/cagayan-two-storey-building/02.webp",
        "/assets/images/projects/cagayan-two-storey-building/03.webp",
        "/assets/images/projects/cagayan-two-storey-building/04.webp",
      ],
      featured: true,
    },
    {
      id: "mandaue-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Mandaue City, Cebu",
      description: "An interior design project in Mandaue City, Cebu.",
      images: [
        "/assets/images/projects/mandaue-interior-design/01.webp",
        "/assets/images/projects/mandaue-interior-design/02.webp",
        "/assets/images/projects/mandaue-interior-design/03.webp",
        "/assets/images/projects/mandaue-interior-design/04.webp",
      ],
      featured: true,
    },
    {
      id: "macasandig-three-storey-building",
      name: "Three-Storey Building",
      type: "Residential",
      location: "Macasandig, Cagayan de Oro City",
      description:
        "A three-storey residential build in Macasandig, Cagayan de Oro City.",
      images: [
        "/assets/images/projects/macasandig-three-storey-building/01.webp",
      ],
      featured: true,
    },
    {
      id: "villanueva-mendez-barbershop",
      name: "Mendez Barbershop",
      type: "Commercial",
      location: "Villanueva, Misamis Oriental",
      description:
        "A commercial barbershop build in Villanueva, Misamis Oriental.",
      images: [
        "/assets/images/projects/villanueva-mendez-barbershop/01.webp",
      ],
      featured: true,
    },
    {
      id: "tagoloan-sned-building",
      name: "Central School SNED Building",
      type: "Institutional",
      location: "Tagoloan, Misamis Oriental",
      description:
        "An institutional SNED building for Tagoloan Central School in Tagoloan, Misamis Oriental.",
      images: [
        "/assets/images/projects/tagoloan-sned-building/01.webp",
      ],
      featured: true,
    },
    {
      id: "aglayan-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Aglayan, Bukidnon",
      description: "A one-storey residential build in Aglayan, Bukidnon.",
      images: [
        "/assets/images/projects/aglayan-one-storey-building/01.webp",
      ],
    },
    {
      id: "barangay9-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Barangay 9, Malaybalay City, Bukidnon",
      description:
        "An interior design project in Barangay 9, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/barangay9-interior-design/01.webp",
      ],
    },
    {
      id: "bugo-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Bugo, Cagayan de Oro City",
      description:
        "A two-storey residential build in Bugo, Cagayan de Oro City.",
      images: [
        "/assets/images/projects/bugo-two-storey-building/01.webp",
      ],
    },
    {
      id: "bulua-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Bulua, Cagayan de Oro City",
      description:
        "A one-storey residential build in Bulua, Cagayan de Oro City.",
      images: [
        "/assets/images/projects/bulua-one-storey-building/01.webp",
      ],
    },
    {
      id: "cabanglasan-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Cabanglasan, Bukidnon",
      description: "An interior design project in Cabanglasan, Bukidnon.",
      images: [
        "/assets/images/projects/cabanglasan-interior-design/01.webp",
        "/assets/images/projects/cabanglasan-interior-design/02.webp",
        "/assets/images/projects/cabanglasan-interior-design/03.webp",
      ],
    },
    {
      id: "cabanglasan-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Cabanglasan, Bukidnon",
      description: "A one-storey residential build in Cabanglasan, Bukidnon.",
      images: [
        "/assets/images/projects/cabanglasan-one-storey-building/01.webp",
      ],
    },
    {
      id: "cabanglasan-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Cabanglasan, Bukidnon",
      description: "A two-storey residential build in Cabanglasan, Bukidnon.",
      images: [
        "/assets/images/projects/cabanglasan-two-storey-building/01.webp",
      ],
    },
    {
      id: "cabanglasan-two-storey-building-2",
      name: "Two-Storey Building II",
      type: "Residential",
      location: "Cabanglasan, Bukidnon",
      description: "A two-storey residential build in Cabanglasan, Bukidnon.",
      images: [
        "/assets/images/projects/cabanglasan-two-storey-building-2/01.webp",
      ],
    },
    {
      id: "cagayan-three-storey-building",
      name: "Three-Storey Building",
      type: "Residential",
      location: "Cagayan de Oro City, Misamis Oriental",
      description:
        "A three-storey residential build in Cagayan de Oro City, Misamis Oriental.",
      images: [
        "/assets/images/projects/cagayan-three-storey-building/01.webp",
      ],
    },
    {
      id: "cagayan-two-storey-building-2",
      name: "Two-Storey Building II",
      type: "Residential",
      location: "Cagayan de Oro City, Misamis Oriental",
      description:
        "A two-storey residential build in Cagayan de Oro City, Misamis Oriental.",
      images: [
        "/assets/images/projects/cagayan-two-storey-building-2/01.webp",
      ],
    },
    {
      id: "cagayan-two-storey-building-3",
      name: "Two-Storey Building III",
      type: "Residential",
      location: "Cagayan de Oro City, Misamis Oriental",
      description:
        "A two-storey residential build in Cagayan de Oro City, Misamis Oriental.",
      images: [
        "/assets/images/projects/cagayan-two-storey-building-3/01.webp",
      ],
    },
    {
      id: "cagayan-de-oro-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Cagayan de Oro City, Misamis Oriental",
      description:
        "An interior design project in Cagayan de Oro City, Misamis Oriental.",
      images: [
        "/assets/images/projects/cagayan-de-oro-interior-design/01.webp",
        "/assets/images/projects/cagayan-de-oro-interior-design/02.webp",
        "/assets/images/projects/cagayan-de-oro-interior-design/03.webp",
      ],
    },
    {
      id: "casisang-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building/01.webp",
      ],
    },
    {
      id: "casisang-two-storey-building-2",
      name: "Two-Storey Building II",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building-2/01.webp",
      ],
    },
    {
      id: "casisang-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A one-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-one-storey-building/01.webp",
      ],
    },
    {
      id: "casisang-two-storey-building-3",
      name: "Two-Storey Building III",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building-3/01.webp",
      ],
    },
    {
      id: "casisang-two-storey-building-4",
      name: "Two-Storey Building IV",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building-4/01.webp",
      ],
    },
    {
      id: "casisang-two-storey-building-5",
      name: "Two-Storey Building V",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building-5/01.webp",
      ],
    },
    {
      id: "casisang-two-storey-building-6",
      name: "Two-Storey Building VI",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building-6/01.webp",
      ],
    },
    {
      id: "casisang-two-storey-building-7",
      name: "Two-Storey Building VII",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building-7/01.webp",
      ],
    },
    {
      id: "casisang-two-storey-building-8",
      name: "Two-Storey Building VIII",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building-8/01.webp",
      ],
    },
    {
      id: "casisang-two-storey-building-9",
      name: "Two-Storey Building IX",
      type: "Residential",
      location: "Casisang, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Casisang, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/casisang-two-storey-building-9/01.webp",
      ],
    },
    {
      id: "catarman-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Catarman, Camiguin",
      description: "A two-storey residential build in Catarman, Camiguin.",
      images: [
        "/assets/images/projects/catarman-two-storey-building/01.webp",
      ],
    },
    {
      id: "crossing-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Crossing, Libona, Bukidnon",
      description:
        "A two-storey residential build in Crossing, Libona, Bukidnon.",
      images: [
        "/assets/images/projects/crossing-two-storey-building/01.webp",
      ],
    },
    {
      id: "dalwangan-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Dalwangan, Bukidnon",
      description: "A one-storey residential build in Dalwangan, Bukidnon.",
      images: [
        "/assets/images/projects/dalwangan-one-storey-building/01.webp",
      ],
    },
    {
      id: "damilag-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Damilag, Manolo Fortich, Bukidnon",
      description:
        "A one-storey residential build in Damilag, Manolo Fortich, Bukidnon.",
      images: [
        "/assets/images/projects/damilag-one-storey-building/01.webp",
      ],
    },
    {
      id: "dumalahay-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Dumalahay, Malaybalay City, Bukidnon",
      description:
        "A one-storey residential build in Dumalahay, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/dumalahay-one-storey-building/01.webp",
      ],
    },
    {
      id: "fortich-street-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Fortich Street, Malaybalay City, Bukidnon",
      description:
        "An interior design project in Fortich Street, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/fortich-street-interior-design/01.webp",
      ],
    },
    {
      id: "gango-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Gango, Libona, Bukidnon",
      description: "A one-storey residential build in Gango, Libona, Bukidnon.",
      images: [
        "/assets/images/projects/gango-one-storey-building/01.webp",
      ],
    },
    {
      id: "gingoog-vape-shop",
      name: "Vape Shop",
      type: "Commercial",
      location: "Gingoog City, Misamis Oriental",
      description:
        "A commercial vape shop build in Gingoog City, Misamis Oriental.",
      images: [
        "/assets/images/projects/gingoog-vape-shop/01.webp",
      ],
    },
    {
      id: "greenfields-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Greenfields, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Greenfields, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/greenfields-two-storey-building/01.webp",
      ],
    },
    {
      id: "iligan-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Iligan City",
      description: "A two-storey residential build in Iligan City.",
      images: [
        "/assets/images/projects/iligan-two-storey-building/01.webp",
      ],
    },
    {
      id: "iligan-two-storey-building-2",
      name: "Two-Storey Building II",
      type: "Residential",
      location: "Iligan City",
      description: "A two-storey residential build in Iligan City.",
      images: [
        "/assets/images/projects/iligan-two-storey-building-2/01.webp",
        "/assets/images/projects/iligan-two-storey-building-2/02.webp",
      ],
    },
    {
      id: "impalambong-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Impalambong, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Impalambong, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/impalambong-two-storey-building/01.webp",
      ],
    },
    {
      id: "impalambong-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Impalambong, Malaybalay City, Bukidnon",
      description:
        "An interior design project in Impalambong, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/impalambong-interior-design/01.webp",
      ],
    },
    {
      id: "impalambong-two-storey-building-2",
      name: "Two-Storey Building II",
      type: "Residential",
      location: "Impalambong, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Impalambong, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/impalambong-two-storey-building-2/01.webp",
      ],
    },
    {
      id: "impasugong-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Impasugong, Bukidnon",
      description: "A two-storey residential build in Impasugong, Bukidnon.",
      images: [
        "/assets/images/projects/impasugong-two-storey-building/01.webp",
      ],
    },
    {
      id: "impasugong-two-storey-building-2",
      name: "Two-Storey Building II",
      type: "Residential",
      location: "Impasugong, Bukidnon",
      description: "A two-storey residential build in Impasugong, Bukidnon.",
      images: [
        "/assets/images/projects/impasugong-two-storey-building-2/01.webp",
      ],
    },
    {
      id: "kalasungay-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Kalasungay, Malaybalay City, Bukidnon",
      description:
        "A one-storey residential build in Kalasungay, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/kalasungay-one-storey-building/01.webp",
      ],
    },
    {
      id: "km4-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Km. 4, Malaybalay City, Bukidnon",
      description:
        "A one-storey residential build in Km. 4, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/km4-one-storey-building/01.webp",
      ],
    },
    {
      id: "laguitas-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Laguitas, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Laguitas, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/laguitas-two-storey-building/01.webp",
      ],
    },
    {
      id: "laguitas-two-storey-building-2",
      name: "Two-Storey Building II",
      type: "Residential",
      location: "Laguitas, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Laguitas, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/laguitas-two-storey-building-2/01.webp",
      ],
    },
    {
      id: "lapasan-computer-shop",
      name: "Computer Shop",
      type: "Commercial",
      location: "Lapasan, Cagayan de Oro City",
      description:
        "A commercial computer shop build in Lapasan, Cagayan de Oro City.",
      images: [
        "/assets/images/projects/lapasan-computer-shop/01.webp",
      ],
    },
    {
      id: "macasandig-three-storey-building-2",
      name: "Three-Storey Building II",
      type: "Residential",
      location: "Macasandig, Cagayan de Oro City",
      description:
        "A three-storey residential build in Macasandig, Cagayan de Oro City.",
      images: [
        "/assets/images/projects/macasandig-three-storey-building-2/01.webp",
      ],
    },
    {
      id: "macasandig-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Macasandig, Cagayan de Oro City",
      description:
        "A two-storey residential build in Macasandig, Cagayan de Oro City.",
      images: [
        "/assets/images/projects/macasandig-two-storey-building/01.webp",
      ],
    },
    {
      id: "mahinog-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Mahinog, Camiguin",
      description: "A two-storey residential build in Mahinog, Camiguin.",
      images: [
        "/assets/images/projects/mahinog-two-storey-building/01.webp",
      ],
    },
    {
      id: "malaybalay-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/malaybalay-two-storey-building/01.webp",
      ],
    },
    {
      id: "malaybalay-city-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Malaybalay City, Bukidnon",
      description: "An interior design project in Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/malaybalay-city-interior-design/01.webp",
        "/assets/images/projects/malaybalay-city-interior-design/02.webp",
      ],
    },
    {
      id: "manolo-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Manolo Fortich, Bukidnon",
      description: "A one-storey residential build in Manolo Fortich, Bukidnon.",
      images: [
        "/assets/images/projects/manolo-one-storey-building/01.webp",
      ],
    },
    {
      id: "manticao-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Manticao, Misamis Oriental",
      description:
        "A two-storey residential build in Manticao, Misamis Oriental.",
      images: [
        "/assets/images/projects/manticao-two-storey-building/01.webp",
      ],
    },
    {
      id: "maramag-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Maramag, Bukidnon",
      description: "A one-storey residential build in Maramag, Bukidnon.",
      images: [
        "/assets/images/projects/maramag-one-storey-building/01.webp",
      ],
    },
    {
      id: "maramag-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Maramag, Bukidnon",
      description: "A two-storey residential build in Maramag, Bukidnon.",
      images: [
        "/assets/images/projects/maramag-two-storey-building/01.webp",
      ],
    },
    {
      id: "meadows-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Meadows, Valencia City, Bukidnon",
      description:
        "A two-storey residential build in Meadows, Valencia City, Bukidnon.",
      images: [
        "/assets/images/projects/meadows-two-storey-building/01.webp",
      ],
    },
    {
      id: "nazareth-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Nazareth, Cagayan de Oro City",
      description:
        "A two-storey residential build in Nazareth, Cagayan de Oro City.",
      images: [
        "/assets/images/projects/nazareth-two-storey-building/01.webp",
      ],
    },
    {
      id: "nazareth-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Nazareth, Cagayan de Oro City",
      description:
        "An interior design project in Nazareth, Cagayan de Oro City.",
      images: [
        "/assets/images/projects/nazareth-interior-design/01.webp",
        "/assets/images/projects/nazareth-interior-design/02.webp",
      ],
    },
    {
      id: "san-carlos-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "San Carlos, Valencia City, Bukidnon",
      description:
        "A one-storey residential build in San Carlos, Valencia City, Bukidnon.",
      images: [
        "/assets/images/projects/san-carlos-one-storey-building/01.webp",
      ],
    },
    {
      id: "san-jose-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "San Jose, Malaybalay City, Bukidnon",
      description:
        "An interior design project in San Jose, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/san-jose-interior-design/01.webp",
      ],
    },
    {
      id: "san-jose-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "San Jose, Malaybalay City, Bukidnon",
      description:
        "A two-storey residential build in San Jose, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/san-jose-two-storey-building/01.webp",
      ],
    },
    {
      id: "sumilao-two-storey-building",
      name: "Two-Storey Building",
      type: "Residential",
      location: "Sumilao, Bukidnon",
      description: "A two-storey residential build in Sumilao, Bukidnon.",
      images: [
        "/assets/images/projects/sumilao-two-storey-building/01.webp",
      ],
    },
    {
      id: "sumpong-one-storey-building",
      name: "One-Storey Building",
      type: "Residential",
      location: "Sumpong, Malaybalay City, Bukidnon",
      description:
        "A one-storey residential build in Sumpong, Malaybalay City, Bukidnon.",
      images: [
        "/assets/images/projects/sumpong-one-storey-building/01.webp",
        "/assets/images/projects/sumpong-one-storey-building/02.webp",
      ],
    },
    {
      id: "valencia-city-interior-design",
      name: "Interior Design",
      type: "Interior Design",
      location: "Valencia City, Bukidnon",
      description: "An interior design project in Valencia City, Bukidnon.",
      images: [
        "/assets/images/projects/valencia-city-interior-design/01.webp",
        "/assets/images/projects/valencia-city-interior-design/02.webp",
        "/assets/images/projects/valencia-city-interior-design/03.webp",
      ],
    },
  ],
};
