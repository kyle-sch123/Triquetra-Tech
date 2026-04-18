"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ScanSearch,
  PencilRuler,
  Code2,
  Rocket,
  LineChart,
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  type LucideIcon,
} from "lucide-react";

type Step = {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
  Icon: LucideIcon;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Analysis",
    subtitle: "Exploration",
    description:
      "We begin by thoroughly understanding your organization's learning needs, compliance requirements, and target audience. Stakeholder interviews and a structured needs assessment ensure every module addresses a real-world challenge.",
    outputs: [
      "Stakeholder interviews",
      "Needs assessment",
      "Audience profile",
    ],
    Icon: ScanSearch,
  },
  {
    num: "02",
    title: "Design",
    subtitle: "Planning",
    description:
      "Instructional designers craft detailed learning pathways, interactive scenarios, and assessment strategies. Storyboards and prototypes align with your brand identity while protecting pedagogical clarity and engagement.",
    outputs: ["Storyboards", "Learning pathways", "Prototypes"],
    Icon: PencilRuler,
  },
  {
    num: "03",
    title: "Develop",
    subtitle: "Create",
    description:
      "Using modern e-learning technologies, we build interactive modules with multimedia, simulations, and gamification. Cross-platform compatibility and responsive design are baked in from the first build.",
    outputs: ["Interactive modules", "Media & motion", "QA builds"],
    Icon: Code2,
  },
  {
    num: "04",
    title: "Application",
    subtitle: "Implement",
    description:
      "We deploy across your preferred LMS, train administrators, and integrate with existing systems. Our team supports rollout from pilot group to full organizational adoption.",
    outputs: ["LMS deployment", "Admin training", "Pilot rollout"],
    Icon: Rocket,
  },
  {
    num: "05",
    title: "Evaluation",
    subtitle: "Review",
    description:
      "Detailed analytics and feedback collection measure learning effectiveness and surface opportunities to improve. Ongoing evaluation keeps programs current with industry standards and audit-ready.",
    outputs: ["Analytics", "Learner feedback", "Iteration roadmap"],
    Icon: LineChart,
  },
];

const AUTO_ADVANCE_MS = 5200;

const SectionLabel = ({ num, label }: { num: string; label: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-2">
      <span className="h-px w-8 bg-emerald-400/60" />
      <span className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase">
        {num}
      </span>
    </div>
    <span className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/50 uppercase">
      {label}
    </span>
  </div>
);

const DevelopmentProcess = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [visible, paused]);

  const go = (i: number) => setActive((i + steps.length) % steps.length);
  const step = steps[active];
  const progress = ((active + 1) / steps.length) * 100;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-16 md:py-20 px-5 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 hero-grid-bg opacity-25 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 60% at 50% 50%, black 15%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 60% at 50% 50%, black 15%, transparent 80%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl"
        >
          <div className="max-w-2xl">
            <SectionLabel num="004" label="Methodology" />
            <h2 className="mt-6 font-[family-name:var(--font-roboto)] text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-white font-medium">
              <span>A process,</span>
              <br />
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                five-fold.
              </span>
            </h2>
          </div>
          <p className="md:max-w-sm font-[family-name:var(--font-roboto)] text-[14px] md:text-[15px] leading-[1.7] text-white/55">
            Our proven methodology ensures every e-learning solution is
            tailored, effective, and delivers measurable results — from first
            interview to final analytics review.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 md:mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Desktop horizontal timeline */}
          <div className="hidden md:block relative">
            {/* Connecting track */}
            <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />
            <div
              className="absolute left-0 top-6 h-px bg-gradient-to-r from-emerald-400/80 to-emerald-400/40 transition-[width] duration-700 ease-out"
              style={{
                width: `calc(${(active / (steps.length - 1)) * 100}% )`,
              }}
            />

            <div className="relative grid grid-cols-5">
              {steps.map((s, i) => {
                const isActive = i === active;
                const isPast = i < active;
                const Icon = s.Icon;
                return (
                  <button
                    key={s.num}
                    onClick={() => go(i)}
                    className="group flex flex-col items-center text-center pt-0 cursor-pointer focus:outline-none"
                    aria-label={`Step ${s.num} — ${s.title}`}
                  >
                    <span
                      className={`relative flex items-center justify-center size-12 rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-emerald-400 bg-emerald-400/15 text-emerald-300 scale-110"
                          : isPast
                          ? "border-emerald-400/40 bg-emerald-400/5 text-emerald-300/70"
                          : "border-white/15 bg-[#0a0a0a] text-white/40 group-hover:border-white/35 group-hover:text-white/70"
                      }`}
                    >
                      {isActive && (
                        <>
                          <span className="absolute inset-0 rounded-full border border-emerald-400/40 wave-animate" />
                          <span
                            className="absolute inset-[-6px] rounded-full border border-emerald-400/20 wave-animate"
                            style={{ animationDelay: "0.3s" }}
                          />
                        </>
                      )}
                      <Icon className="size-[18px]" strokeWidth={1.75} />
                    </span>
                    <span
                      className={`mt-5 text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-emerald-400/80"
                          : isPast
                          ? "text-white/50"
                          : "text-white/30 group-hover:text-white/55"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span
                      className={`mt-1 text-[13px] font-[family-name:var(--font-roboto-mono)] tracking-[0.18em] uppercase font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : isPast
                          ? "text-white/70"
                          : "text-white/45 group-hover:text-white/75"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-white/10" />
            <div
              className="absolute left-6 top-6 w-px bg-gradient-to-b from-emerald-400/80 to-emerald-400/40 transition-[height] duration-700"
              style={{ height: `${(active / (steps.length - 1)) * 100}%` }}
            />
            <div className="space-y-3">
              {steps.map((s, i) => {
                const isActive = i === active;
                const isPast = i < active;
                const Icon = s.Icon;
                return (
                  <button
                    key={s.num}
                    onClick={() => go(i)}
                    className="relative w-full flex items-center gap-4 text-left cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`relative flex items-center justify-center size-12 rounded-full border transition-all duration-500 shrink-0 ${
                        isActive
                          ? "border-emerald-400 bg-emerald-400/15 text-emerald-300"
                          : isPast
                          ? "border-emerald-400/40 bg-emerald-400/5 text-emerald-300/70"
                          : "border-white/15 bg-[#0a0a0a] text-white/40"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border border-emerald-400/40 wave-animate" />
                      )}
                      <Icon className="size-[18px]" strokeWidth={1.75} />
                    </span>
                    <div className="flex flex-col">
                      <span
                        className={`text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] uppercase ${
                          isActive ? "text-emerald-400/80" : "text-white/40"
                        }`}
                      >
                        {s.num}
                      </span>
                      <span
                        className={`text-[13px] font-[family-name:var(--font-roboto-mono)] tracking-[0.18em] uppercase font-medium ${
                          isActive ? "text-white" : "text-white/55"
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Active step card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 md:mt-12 relative rounded-md border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Top accent line — animates with auto-advance */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/5">
            <div
              key={`${active}-${paused ? "paused" : "live"}`}
              className="h-full bg-gradient-to-r from-emerald-400/80 to-emerald-400/30"
              style={{
                width: paused ? `${progress}%` : "100%",
                animation: paused
                  ? "none"
                  : `stepAdvance ${AUTO_ADVANCE_MS}ms linear forwards`,
              }}
            />
          </div>

          <div className="grid md:grid-cols-12 gap-5 md:gap-8 p-5 md:p-8 lg:p-10">
            {/* Giant numeral + icon */}
            <div className="md:col-span-4 lg:col-span-5 flex md:flex-col md:justify-between gap-6">
              <div className="flex items-center gap-5">
                <span className="font-[family-name:var(--font-instrument-serif)] italic text-[clamp(4.5rem,11vw,8rem)] leading-[0.85] text-white font-normal">
                  {step.num}
                </span>
                <div className="flex flex-col gap-1 pt-2">
                  <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase">
                    Step · {active + 1} / {steps.length}
                  </span>
                  <span className="text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.22em] text-white/55 uppercase">
                    {step.subtitle}
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3 self-start">
                <div className="relative flex items-center justify-center size-14 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-300">
                  <span className="absolute inset-[-4px] rounded-full border border-emerald-400/15 wave-animate" />
                  <step.Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/40 uppercase">
                    Phase
                  </span>
                  <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] tracking-[0.18em] text-white/75 uppercase">
                    {step.title} / {step.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="md:col-span-8 lg:col-span-7">
              <h3 className="font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] tracking-[-0.01em] text-white font-medium">
                {step.title}{" "}
                <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                  &mdash; {step.subtitle.toLowerCase()}.
                </span>
              </h3>
              <p className="mt-4 font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/60">
                {step.description}
              </p>

              {/* Outputs */}
              <div className="mt-5">
                <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 uppercase mb-3">
                  Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {step.outputs.map((o) => (
                    <span
                      key={o}
                      className="text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.14em] uppercase border border-white/10 bg-white/[0.03] text-white/70 px-2.5 py-1 rounded-full"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer control bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 px-4 md:px-8 lg:px-10 py-3 border-t border-white/5 bg-white/[0.015]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                onClick={() => go(active - 1)}
                className="flex items-center justify-center size-11 md:size-9 rounded-full border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-white/30 transition-colors duration-200 cursor-pointer"
                aria-label="Previous step"
              >
                <ArrowLeft className="size-3.5" strokeWidth={2} />
              </button>
              <button
                onClick={() => go(active + 1)}
                className="flex items-center justify-center size-11 md:size-9 rounded-full border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-white/30 transition-colors duration-200 cursor-pointer"
                aria-label="Next step"
              >
                <ArrowRight className="size-3.5" strokeWidth={2} />
              </button>
              <button
                onClick={() => setPaused((p) => !p)}
                className="ml-1 flex items-center gap-2 px-3 h-11 md:h-9 rounded-full border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-white/30 transition-colors duration-200 cursor-pointer"
                aria-label={paused ? "Resume auto-advance" : "Pause auto-advance"}
              >
                {paused ? (
                  <Play className="size-3" strokeWidth={2} fill="currentColor" />
                ) : (
                  <Pause className="size-3" strokeWidth={2} fill="currentColor" />
                )}
                <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.22em] uppercase">
                  {paused ? "Resume" : "Auto"}
                </span>
              </button>
            </div>

            {/* Dot navigation */}
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    i === active
                      ? "w-8 bg-emerald-400"
                      : i < active
                      ? "w-1.5 bg-emerald-400/40"
                      : "w-1.5 bg-white/15 hover:bg-white/35"
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            <div className="hidden sm:block text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/35 uppercase">
              {Math.round(progress)}% Through
            </div>
          </div>
        </motion.div>

        {/* Bottom meta */}
        <div className="mt-6 flex items-center justify-between text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/35 uppercase">
          <span>— Iterative by design</span>
          <span className="hidden sm:inline">
            Analysis · Design · Develop · Apply · Evaluate
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes stepAdvance {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default DevelopmentProcess;
