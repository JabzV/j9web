"use client";

import { useRef, useState } from "react";
import { Loader2, Check } from "lucide-react";
import SmartImage from "@/components/Media/SmartImage";
import { gsap, useGSAP } from "@/lib/gsap";
import { contact } from "@/data";

type Status = "idle" | "submitting" | "success";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<Record<string, string>>({});

  useGSAP(
    () => {
      gsap.from("[data-contact-panel]", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  const handleChange = (name: string, value: string) =>
    setValues((v) => ({ ...v, [name]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Stub: no backend yet. Simulate a request then show success.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setValues({});
    }, 3500);
  };

  return (
    <section ref={root} className="shell section-pad bg-background">
      <div className="grid overflow-hidden rounded-2xl lg:grid-cols-2">
        {/* Left panel */}
        <div
          data-contact-panel
          className="relative flex flex-col justify-between gap-12 overflow-hidden bg-neutral-900 p-8 md:p-12 2xl:p-16"
        >
          <div className="absolute inset-0 -z-10 opacity-30">
            <SmartImage src={contact.backgroundImage} alt="" className="h-full w-full" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <h2 className="display-lg">
            <span className="block text-white">{contact.headingLines[0]}</span>
            <span className="block text-accent">{contact.headingLines[1]}</span>
          </h2>

          <ul className="flex flex-col gap-6 2xl:gap-8">
            {contact.details.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-white/70 2xl:h-6 2xl:w-6" />
                  <div className="flex flex-col">
                    <span className="label text-white/50">
                      {detail.label}
                    </span>
                    <span className="body-sm text-white/90">{detail.value}</span>
                  </div>
                </div>
              );
              return (
                <li key={detail.id}>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      data-cursor="hover"
                      className="transition-opacity hover:opacity-70"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Form */}
        <div data-contact-panel className="bg-[#f4f2ee] p-6 sm:p-8 md:p-12 2xl:p-16">
          <p className="body-sm mx-auto mb-8 max-w-md text-center text-neutral-600 2xl:max-w-lg">
            {contact.intro}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {contact.fields
                .filter((f) => f.type !== "textarea")
                .map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={field.name}
                      className="text-sm font-medium text-neutral-800"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={values[field.name] ?? ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent 2xl:px-4 2xl:py-3.5 2xl:text-base"
                    />
                  </div>
                ))}
            </div>

            {contact.fields
              .filter((f) => f.type === "textarea")
              .map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={field.name}
                    className="text-sm font-medium text-neutral-800"
                  >
                    {field.label}
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    rows={4}
                    value={values[field.name] ?? ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="resize-none rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent 2xl:px-4 2xl:py-3.5 2xl:text-base"
                  />
                </div>
              ))}

            <button
              type="submit"
              data-cursor="hover"
              disabled={status !== "idle"}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-black py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent disabled:opacity-80 2xl:py-4.5 2xl:text-base"
            >
              {status === "submitting" && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "idle" && contact.submitLabel}
              {status === "submitting" && "Sending..."}
              {status === "success" && "Request Sent!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
