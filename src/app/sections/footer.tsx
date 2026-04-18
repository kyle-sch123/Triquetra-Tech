"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo2 from "@/app/assets/images/Untitled_design-removebg-preview.png";

const navigationLinks = [
  { label: "Home", href: "/#home", num: "01" },
  { label: "About", href: "/#about-us", num: "02" },
  { label: "Projects", href: "/#projects", num: "03" },
  { label: "Process", href: "/#process", num: "04" },
  { label: "Contact", href: "/#contact", num: "05" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/triquetra-technologies/",
    handle: "@triquetra-tech",
  },
  { label: "X / Twitter", href: "#", handle: "@triquetratech" },
];

const SectionHeading = ({ num, label }: { num: string; label: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="h-px w-6 bg-emerald-400/50" />
    <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase">
      {num}
    </span>
    <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/45 uppercase">
      {label}
    </span>
  </div>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white border-t border-white/[0.06]">
      {/* Ambient emerald glow at bottom */}
      <div className="pointer-events-none absolute h-[500px] w-full bottom-0 left-0 bg-gradient-to-t from-emerald-500/[0.04] to-transparent" />
      <div className="pointer-events-none absolute h-[420px] w-[1400px] -bottom-20 left-1/2 -translate-x-1/2 bg-emerald-400/[0.07] blur-3xl [mask-image:radial-gradient(50%_50%_at_50%_100%,black,transparent)]" />

      {/* Background grid */}
      <div
        className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 50%, black 10%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 50%, black 10%, transparent 80%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-10 lg:px-16 pt-14 pb-8 md:pt-16 md:pb-10">
        {/* Top — Wordmark CTA */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 pb-12 md:pb-14 border-b border-white/[0.06]">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <div className="relative size-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-emerald-400/30" />
                <div className="absolute inset-1 rounded-full border border-emerald-400/15" />
                <Image
                  src={Logo2}
                  alt="Triquetra Technologies"
                  className="w-6 h-auto brightness-105 contrast-0"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[13px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.18em] text-white uppercase">
                  Triquetra
                </span>
                <span className="text-[9px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase">
                  Technologies
                </span>
              </div>
            </div>

            <h2 className="mt-6 font-[family-name:var(--font-roboto)] text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-white font-medium max-w-xl">
              Learning experiences,{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                engineered
              </span>{" "}
              with intention.
            </h2>

            <p className="mt-4 text-[14px] md:text-[15px] leading-[1.65] text-white/50 font-[family-name:var(--font-roboto)] max-w-md">
              Empowering organizations with compliance-grade, audience-aware
              e-learning — built for a safer, more productive workforce.
            </p>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="md:max-w-[340px] w-full">
              <SectionHeading num="F·01" label="Next Step" />
              <Link
                href="/#contact"
                className="group block border border-white/[0.08] hover:border-emerald-400/50 bg-white/[0.015] hover:bg-emerald-400/[0.04] rounded-sm p-5 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/70 uppercase">
                      Start a Project
                    </div>
                    <div className="mt-2.5 text-[18px] md:text-[20px] font-[family-name:var(--font-roboto)] leading-[1.25] text-white font-medium">
                      Let&apos;s talk about your{" "}
                      <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                        next
                      </span>{" "}
                      learning initiative.
                    </div>
                  </div>
                  <ArrowUpRight
                    className="shrink-0 size-5 text-white/40 group-hover:text-emerald-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-emerald-400/40 via-emerald-400/10 to-transparent" />
                <div className="mt-3 flex items-center gap-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/50 uppercase">
                    Accepting 2026 Projects
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Middle — Nav columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 py-10 md:py-12">
          {/* Navigate */}
          <div className="lg:col-span-4">
            <SectionHeading num="N·01" label="Navigate" />
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-[9px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/60 group-hover:text-emerald-400 transition-colors duration-200">
                      {link.num}
                    </span>
                    <span className="text-[14px] font-[family-name:var(--font-roboto)]">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="size-3.5 text-white/0 group-hover:text-emerald-400 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-200"
                      strokeWidth={2}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4">
            <SectionHeading num="N·02" label="Connect" />
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-start justify-between gap-4 py-1 border-b border-white/[0.04] hover:border-emerald-400/20 transition-colors duration-200"
                  >
                    <div className="flex flex-col">
                      <span className="text-[14px] font-[family-name:var(--font-roboto)] text-white/75 group-hover:text-white transition-colors duration-200">
                        {link.label}
                      </span>
                      <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.18em] text-white/30 uppercase mt-0.5">
                        {link.handle}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="shrink-0 mt-1 size-4 text-white/25 group-hover:text-emerald-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct */}
          <div className="lg:col-span-4">
            <SectionHeading num="N·03" label="Direct" />
            <div className="space-y-4">
              <div>
                <div className="text-[9px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/35 uppercase mb-1.5">
                  Email
                </div>
                <a
                  href="mailto:learning@triquetratech.co.za"
                  className="group inline-flex items-center gap-2 text-[14px] md:text-[15px] font-[family-name:var(--font-roboto)] text-white/80 hover:text-emerald-300 transition-colors duration-200 break-all"
                >
                  learning@triquetratech.co.za
                  <ArrowUpRight
                    className="size-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </a>
              </div>
              <div>
                <div className="text-[9px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/35 uppercase mb-1.5">
                  Hours
                </div>
                <div className="text-[14px] font-[family-name:var(--font-roboto)] text-white/80">
                  Mon – Fri · 08:00–17:00 SAST
                </div>
              </div>
              <div>
                <div className="text-[9px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/35 uppercase mb-1.5">
                  Response
                </div>
                <div className="text-[14px] font-[family-name:var(--font-roboto)] text-white/80">
                  Within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom — Copyright bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.24em] text-white/35 uppercase">
              © {year} Triquetra Tech
            </span>
            <span className="hidden sm:inline text-white/10">/</span>
            <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.24em] text-white/35 uppercase">
              All rights reserved
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.24em] text-white/45 hover:text-emerald-400 uppercase transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <span className="hidden md:inline text-white/10">/</span>
            <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.24em] text-white/35 uppercase">
              v2026.1
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
