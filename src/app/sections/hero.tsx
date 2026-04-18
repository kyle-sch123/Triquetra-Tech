"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MoveDown } from "lucide-react";

const PulseRing = ({
  size,
  delay,
  opacity,
  border = false,
}: {
  size: string;
  delay: string;
  opacity: number;
  border?: boolean;
}) => (
  <div
    className={`absolute left-1/2 top-1/2 rounded-full wave-animate ${
      border ? "border border-emerald-400/40 bg-emerald-500/5" : ""
    }`}
    style={{
      width: size,
      height: size,
      translate: "-50% -50%",
      background: border
        ? undefined
        : `radial-gradient(circle at 50% 50%, rgba(16,185,129,${
            opacity * 0.9
          }) 0%, rgba(16,185,129,${opacity * 0.3}) 45%, rgba(16,185,129,0) 75%)`,
      animationDelay: delay,
    }}
  />
);

const TriPoint = ({
  angle,
  radius,
  delay,
}: {
  angle: number;
  radius: number;
  delay: string;
}) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  return (
    <div
      className="absolute left-1/2 top-1/2 size-2 rounded-full bg-emerald-300 live-dot"
      style={{
        translate: `calc(-50% + ${x}px) calc(-50% + ${y}px)`,
        boxShadow: "0 0 12px rgba(110, 231, 183, 0.8)",
        animationDelay: delay,
      }}
    />
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 hero-grid-bg opacity-70"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 55%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 55%, black 20%, transparent 80%)",
        }}
      />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 hero-noise opacity-[0.18] mix-blend-overlay pointer-events-none" />

      {/* Ambient emerald glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Concentric pulsing rings — signature pulsing element */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
        }}
      >
        <div className="relative w-0 h-0">
          <PulseRing size="min(80vw,720px)" delay="1.8s" opacity={0.08} />
          <PulseRing size="min(68vw,620px)" delay="1.6s" opacity={0.1} />
          <PulseRing size="min(56vw,520px)" delay="1.4s" opacity={0.12} />
          <PulseRing size="min(44vw,420px)" delay="1.2s" opacity={0.15} />
          <PulseRing size="min(32vw,320px)" delay="1.0s" opacity={0.18} />
          <PulseRing size="min(22vw,220px)" delay="0.8s" opacity={0.22} />
          <PulseRing size="min(14vw,140px)" delay="0.5s" opacity={0.28} />
          <div
            className="absolute left-1/2 top-1/2 wave-animate"
            style={{
              width: "min(8vw, 72px)",
              height: "min(8vw, 72px)",
              translate: "-50% -50%",
              animationDelay: "0.2s",
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-emerald-400/50 bg-emerald-500/10 backdrop-blur-sm" />
          </div>

          {/* Triquetra three-point accents */}
          <TriPoint angle={-90} radius={160} delay="0s" />
          <TriPoint angle={30} radius={160} delay="0.6s" />
          <TriPoint angle={150} radius={160} delay="1.2s" />
        </div>
      </div>

      {/* Content frame */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex items-center justify-between pt-20 md:pt-24 px-5 md:px-10 lg:px-16"
        >
          <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/35 uppercase">
            <span className="hidden sm:inline">— Est. 2017</span>
            <span className="hidden md:inline text-white/20">/</span>
            <span>Johannesburg · ZA</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/60 uppercase">
              Now Accepting Briefs
            </span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex items-center px-5 md:px-10 lg:px-16 py-8">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left column — primary message */}
              <div className="lg:col-span-8">
                {/* Eyebrow tag */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                  className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-5"
                >
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/70 uppercase">
                    Enable · Empower · Elevate
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
                  className="font-[family-name:var(--font-roboto)] text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-white font-medium"
                >
                  <span className="block">Training that</span>
                  <span className="block">
                    <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal bg-gradient-to-b from-emerald-300 via-emerald-200 to-emerald-400/70 bg-clip-text text-transparent pr-4">
                      elevates
                    </span>
                    <span className="text-white/80"> the</span>
                  </span>
                  <span className="block text-white/80">modern workforce.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
                  className="mt-5 max-w-xl font-[family-name:var(--font-roboto)] text-[15px] md:text-[17px] leading-[1.65] text-white/55"
                >
                  In an era defined by rapid change and evolving skill demands,
                  effective training is more than a checkbox — it&apos;s the
                  foundation of organizational excellence.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="mt-7 flex flex-wrap items-center gap-3"
                >
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-3 bg-emerald-400 hover:bg-emerald-300 text-black px-6 py-3.5 rounded-sm transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  >
                    <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.22em] uppercase">
                      Start a Conversation
                    </span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </a>

                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-3 border border-white/15 hover:border-white/40 hover:bg-white/[0.03] text-white/85 hover:text-white px-6 py-3.5 rounded-sm transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  >
                    <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.22em] uppercase">
                      Explore Our Work
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* Right column — stats panel (desktop only) */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
                className="hidden lg:flex lg:col-span-4 flex-col gap-4"
              >
                <div className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-5 rounded-sm overflow-hidden group hover:border-emerald-400/30 transition-colors duration-300">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent shimmer-line" />
                  <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 uppercase mb-3">
                    01 / Courses Delivered
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[44px] font-medium font-[family-name:var(--font-instrument-serif)] leading-none text-white">
                      34
                    </span>
                    <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] text-emerald-400/80">
                      +
                    </span>
                  </div>
                  <div className="mt-2 text-[12px] font-[family-name:var(--font-roboto)] text-white/45">
                    Across seven industries
                  </div>
                </div>

                <div className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-5 rounded-sm overflow-hidden group hover:border-emerald-400/30 transition-colors duration-300">
                  <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent shimmer-line"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 uppercase mb-3">
                    02 / Modules Completed
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[44px] font-medium font-[family-name:var(--font-instrument-serif)] leading-none text-white">
                      117
                    </span>
                    <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] text-emerald-400/80">
                      +
                    </span>
                  </div>
                  <div className="mt-2 text-[12px] font-[family-name:var(--font-roboto)] text-white/45">
                    Compliance · Learning · Excellence
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 pt-2 text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/35 uppercase">
                  <span>Threefold</span>
                  <span>— since 2017</span>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex items-center justify-between px-5 md:px-10 lg:px-16 pb-6"
        >
          <a
            href="#about-us"
            className="group flex items-center gap-2.5 text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 hover:text-white/80 uppercase transition-colors duration-200 cursor-pointer"
          >
            <MoveDown
              className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              strokeWidth={2}
            />
            <span>Scroll to explore</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/30 uppercase">
            <span>Learning</span>
            <span className="text-white/15">·</span>
            <span>Excellence</span>
            <span className="text-white/15">·</span>
            <span>Compliance</span>
          </div>
          <div className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 uppercase">
            <span className="hidden sm:inline">[</span>
            <span>001 · Triquetra</span>
            <span className="hidden sm:inline">]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
