"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/data";

export default function Navbar() {
  const root = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(root.current, {
        y: -24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.2,
        // A leftover transform would make the header the containing block
        // for the fixed-position mobile menu, breaking its full-screen layout
        clearProps: "transform,opacity",
      });
    },
    { scope: root }
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : (pathname?.startsWith(href) ?? false);

  return (
    <>
    <header
      ref={root}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Same .shell grid as page content so the logo aligns with headlines.
          On 2560px+ the shell cap is lifted so logo/CTA sit at the far edges. */}
      <div className="shell relative flex items-center justify-between py-4 sm:py-5 2xl:py-6 shell-wide">
        {/* Logo */}
        <Link
          href="/"
          data-cursor="hover"
          className="relative z-50 transition-opacity duration-300 hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          <Image
            src={site.logo}
            alt={site.name}
            width={140}
            height={43}
            priority
            className="h-9 w-auto sm:h-11 2xl:h-14"
          />
        </Link>

        {/* Center pill (desktop) */}
        <nav className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-2 py-2 backdrop-blur-md lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              data-cursor="hover"
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 2xl:px-6 2xl:py-2.5 2xl:text-base ${
                isActive(item.href)
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {isActive(item.href) && (
                <span className="absolute inset-0 -z-10 rounded-full bg-white/10" />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact button (desktop) */}
        <Link
          href={site.contactCta.href}
          data-cursor="hover"
          className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors duration-300 hover:border-accent hover:text-accent lg:flex 2xl:px-8 2xl:py-3.5 2xl:text-base"
        >
          <span>{site.contactCta.label}</span>
          <PhoneCall className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white backdrop-blur-md lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

    </header>

    {/* Mobile menu — rendered outside the header so no ancestor transform /
        backdrop-filter can break its fixed full-screen positioning */}
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-40 flex flex-col justify-center gap-3 bg-black/95 px-8 pt-16 backdrop-blur-xl transition-opacity duration-400 lg:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {site.nav.map((item, i) => (
        <Link
          key={item.key}
          href={item.href}
          onClick={() => setOpen(false)}
          className={`font-display text-5xl uppercase leading-tight transition-all duration-500 ${
            isActive(item.href) ? "text-accent" : "text-white/80"
          } ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
        >
          {item.label}
        </Link>
      ))}
      <Link
        href={site.contactCta.href}
        onClick={() => setOpen(false)}
        className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-3 text-base font-medium text-white transition-all duration-500 ${
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: open ? `${80 + site.nav.length * 50}ms` : "0ms" }}
      >
        {site.contactCta.label}
        <ArrowUpRight className="h-5 w-5" />
      </Link>

      {/* Socials at the bottom of the menu */}
      <div className="absolute bottom-10 left-8 flex items-center gap-5">
        {site.socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/50 transition-colors hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
    </>
  );
}
