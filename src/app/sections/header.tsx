"use client";
import Image from "next/image";
import Logo2 from "@/app/assets/images/Untitled_design-removebg-preview.png";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Headers = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/#home", label: "Home", num: "01" },
    { href: "/#about-us", label: "About", num: "02" },
    { href: "/#projects", label: "Projects", num: "03" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/75 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left — brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative size-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-emerald-400/30 group-hover:border-emerald-400/60 transition-colors duration-300" />
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
          </Link>

          {/* Center — nav links */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm px-2 py-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors duration-200"
              >
                <span className="text-[9px] font-[family-name:var(--font-roboto-mono)] text-emerald-400/60 group-hover:text-emerald-400 tracking-[0.15em] transition-colors duration-200">
                  {item.num}
                </span>
                <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.22em] uppercase">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right — CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/50 uppercase">
                Live
              </span>
            </div>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 border border-white/15 hover:border-emerald-400/60 bg-white/[0.02] hover:bg-emerald-400/[0.06] px-4 py-2 rounded-sm transition-colors duration-200"
            >
              <span className="text-[11px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.24em] text-white/85 group-hover:text-white uppercase">
                Contact
              </span>
              <ArrowUpRight
                className="size-3.5 text-white/60 group-hover:text-emerald-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.25}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative flex items-center justify-center size-11 rounded-full border border-white/10 bg-white/[0.02] text-white/80 hover:text-white hover:border-white/25 transition-colors duration-200 cursor-pointer"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="size-4" strokeWidth={2} />
            ) : (
              <Menu className="size-4" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-[72px] border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-md shadow-2xl overflow-hidden">
            <div className="p-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-sm hover:bg-white/[0.04] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] text-emerald-400/70 tracking-[0.2em]">
                      {item.num}
                    </span>
                    <span className="text-[13px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.22em] text-white uppercase">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="size-4 text-white/40"
                    strokeWidth={2}
                  />
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-between px-4 py-3.5 rounded-sm bg-emerald-400 text-black hover:bg-emerald-300 transition-colors duration-200"
              >
                <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.22em] uppercase">
                  Start a Conversation
                </span>
                <ArrowUpRight className="size-4" strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Headers;
