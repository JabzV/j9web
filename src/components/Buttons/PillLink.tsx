import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * The outlined pill CTA used across the site (the "Let's talk" button style):
 * hairline border that fills with the accent on hover.
 */
export default function PillLink({
  href,
  label,
  size = "base",
  variant = "outline",
  className = "",
}: {
  href: string;
  label: string;
  /** "sm" matches the in-section CTA, "base" the standalone/footer-of-section CTA. */
  size?: "sm" | "base";
  /** "solid" is the filled primary CTA; "outline" the default hairline pill. */
  variant?: "outline" | "solid";
  className?: string;
}) {
  const padding =
    size === "sm"
      ? "px-5 py-3 2xl:px-7 2xl:py-4"
      : "px-6 py-3.5 2xl:px-8 2xl:py-4";

  const skin =
    variant === "solid"
      ? "border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover"
      : "border-white/20 text-white hover:border-accent hover:bg-accent";

  return (
    <Link
      href={href}
      data-cursor="hover"
      className={`inline-flex items-center gap-2 rounded-full border text-sm font-medium transition-colors duration-300 2xl:text-base ${skin} ${padding} ${className}`}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
    </Link>
  );
}
