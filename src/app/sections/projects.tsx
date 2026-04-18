"use client";

import React, { useEffect, useRef, useState } from "react";
import t1 from "@/app/assets/images/TT Work 1.png";
import t2 from "@/app/assets/images/TT Work 2.png";
import t3 from "@/app/assets/images/TT Work 3.png";
import t4 from "@/app/assets/images/TT Work 4.png";
import t5 from "@/app/assets/images/TT Work 5.png";
import t6 from "@/app/assets/images/TT Work 6.png";
import t7 from "@/app/assets/images/TT Work 7.png";
import t8 from "@/app/assets/images/TT Work 8.png";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

/* --------------------------------- Helpers -------------------------------- */

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

/* --------------------------------- Counter -------------------------------- */

const Counter = ({
  value,
  suffix = "+",
  visible,
}: {
  value: number;
  suffix?: string;
  visible: boolean;
}) => {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [visible, value]);

  return (
    <span className="inline-flex items-baseline gap-1">
      <span className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2.25rem,7vw,5.5rem)] leading-none text-white font-normal tabular-nums">
        {display}
      </span>
      <span className="text-[12px] md:text-[14px] font-[family-name:var(--font-roboto-mono)] text-emerald-400/80">
        {suffix}
      </span>
    </span>
  );
};

/* ------------------------------ Image Slideshow ---------------------------- */

const ImageSlideshow = ({
  images,
  alt,
}: {
  images: StaticImageData[];
  alt: string;
}) => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p === images.length - 1 ? 0 : p + 1));
  const prev = () => setI((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-black">
      <div className="relative aspect-[4/3]">
        <Image
          src={images[i]}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
      </div>

      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-11 md:size-9 rounded-full border border-white/15 bg-black/60 backdrop-blur-sm text-white/80 hover:text-white hover:border-emerald-400/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="size-4" strokeWidth={2} />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-11 md:size-9 rounded-full border border-white/15 bg-black/60 backdrop-blur-sm text-white/80 hover:text-white hover:border-emerald-400/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="size-4" strokeWidth={2} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to image ${idx + 1}`}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              idx === i
                ? "w-6 bg-emerald-400"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 bg-black/60 backdrop-blur-sm">
        <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.24em] text-white/80 uppercase">
          {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

/* ---------------------------- Process Reel Video -------------------------- */

const ProcessReel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setHasStarted(true);
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => {
      if (v.duration) setProgress((v.currentTime / v.duration) * 100);
    };
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("timeupdate", onTime);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  return (
    <div className="relative group">
      {/* Outer frame */}
      <div className="relative rounded-md overflow-hidden border border-white/10 bg-black aspect-[16/9]">
        {/* Corner meta top */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/15 bg-black/60 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/85 uppercase">
              Reel · 02:28
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/15 bg-black/60 backdrop-blur-sm">
            <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/60 uppercase">
              Motion · Narration · Design
            </span>
          </div>
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-contain"
          poster="/videos/workflow-reel-poster.jpg"
          preload="metadata"
          playsInline
          muted={muted}
          onClick={toggle}
        >
          <source src="/videos/workflow-reel.webm" type="video/webm" />
          <source src="/videos/workflow-reel.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Gradient scrim */}
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            playing ? "opacity-0 group-hover:opacity-40" : "opacity-70"
          } bg-gradient-to-t from-black/80 via-black/20 to-black/40`}
        />

        {/* Play / Pause overlay */}
        <button
          onClick={toggle}
          aria-label={playing ? "Pause reel" : "Play reel"}
          className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
            playing && hasStarted
              ? "opacity-0 group-hover:opacity-100"
              : "opacity-100"
          }`}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute size-24 md:size-28 rounded-full border border-emerald-400/30 wave-animate" />
            <span
              className="absolute size-20 md:size-24 rounded-full border border-emerald-400/40 wave-animate"
              style={{ animationDelay: "0.3s" }}
            />
            <div className="relative flex items-center justify-center size-16 md:size-20 rounded-full bg-emerald-400 text-black transition-transform duration-300 group-hover:scale-105">
              {playing ? (
                <Pause className="size-7 md:size-8" strokeWidth={2} fill="currentColor" />
              ) : (
                <Play
                  className="size-7 md:size-8 translate-x-0.5"
                  strokeWidth={2}
                  fill="currentColor"
                />
              )}
            </div>
          </div>
        </button>

        {/* Bottom control strip */}
        <div
          className={`absolute left-0 right-0 bottom-0 z-20 px-4 pb-4 pt-10 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 ${
            hasStarted
              ? playing
                ? "opacity-0 group-hover:opacity-100"
                : "opacity-100"
              : "opacity-0"
          }`}
        >
          {/* Progress bar */}
          <div className="relative h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-emerald-400 transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                className="flex items-center justify-center size-8 rounded-full border border-white/15 bg-white/[0.05] text-white/80 hover:text-white hover:border-emerald-400/50 transition-colors duration-200 cursor-pointer"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <Pause className="size-3.5" strokeWidth={2} fill="currentColor" />
                ) : (
                  <Play className="size-3.5 translate-x-[1px]" strokeWidth={2} fill="currentColor" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="flex items-center justify-center size-8 rounded-full border border-white/15 bg-white/[0.05] text-white/80 hover:text-white hover:border-emerald-400/50 transition-colors duration-200 cursor-pointer"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? (
                  <VolumeX className="size-3.5" strokeWidth={2} />
                ) : (
                  <Volume2 className="size-3.5" strokeWidth={2} />
                )}
              </button>
            </div>
            <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/60 uppercase">
              Workflow Reel · Triquetra Tech
            </div>
          </div>
        </div>
      </div>

      {/* Frame shadow accent */}
      <div className="pointer-events-none absolute -inset-px rounded-md border border-emerald-400/0 group-hover:border-emerald-400/20 transition-colors duration-500" />
    </div>
  );
};

/* --------------------------------- Projects -------------------------------- */

type Project = {
  num: string;
  title: string;
  images: StaticImageData[];
  tags: string[];
  body: string;
};

const projectList: Project[] = [
  {
    num: "01",
    title: "PPE Compliance",
    images: [t1, t2],
    tags: [
      "OSHA-Aligned",
      "Health & Safety",
      "HSE Certified",
      "Workplace Safety",
      "Risk Reduction",
    ],
    body: "A compliance-first course that equips teams with practical knowledge on personal protective equipment, aligned with OSHA and HSE standards. Interactive scenarios drive retention and reduce on-the-job incidents.",
  },
  {
    num: "02",
    title: "Management of Change",
    images: [t3, t4],
    tags: [
      "Organizational Adaptability",
      "Employee Engagement",
      "Operational Continuity",
      "Risk Mitigation",
    ],
    body: "In today's dynamic environments, change is inevitable — but managing it effectively is essential. Teams get tools and strategies to plan, communicate, and implement changes safely and efficiently.",
  },
  {
    num: "03",
    title: "Communication Skills",
    images: [t5, t6],
    tags: [
      "Workplace Communication",
      "Team Collaboration",
      "Conflict Resolution",
      "Active Listening",
      "Clear Messaging",
    ],
    body: "Effective communication is the backbone of successful teamwork. This module enhances verbal and non-verbal communication, empowering staff to build trust and collaborate across departments and hierarchies.",
  },
  {
    num: "04",
    title: "Induction Training",
    images: [t7, t8],
    tags: [
      "Orientation Essentials",
      "HR & Policy",
      "Tools & Systems",
      "Role Clarity",
      "Safety Protocols",
    ],
    body: "First impressions matter. Induction Training helps new hires get up to speed quickly — company values, safety procedures, and job-specific expectations — through interactive, branded onboarding experiences.",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const reverse = index % 2 === 1;
  return (
    <motion.div
      id={`project${index + 1}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative"
    >
      <div
        className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="md:col-span-6">
          <ImageSlideshow images={project.images} alt={project.title} />
        </div>

        <div className="md:col-span-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase">
              {project.num}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent max-w-24" />
            <span className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 uppercase">
              Featured Course
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-roboto)] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.01em] text-white font-medium mb-4">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.14em] uppercase border border-white/10 bg-white/[0.03] text-white/70 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/60">
            {project.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* --------------------------------- Section -------------------------------- */

const Projects = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 px-5 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 hero-grid-bg opacity-25 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 50%, black 15%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 50%, black 15%, transparent 80%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <SectionLabel num="003" label="Projects" />
          <h2 className="mt-6 font-[family-name:var(--font-roboto)] text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-white font-medium">
            <span>Industry-relevant work,</span>
            <br />
            <span className="text-white/85">crafted with </span>
            <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
              purpose.
            </span>
          </h2>
          <p className="mt-7 font-[family-name:var(--font-roboto)] text-[15px] md:text-[17px] leading-[1.65] text-white/55 max-w-xl">
            From PPE Compliance and Management of Change to Communication Skills
            and Induction Training — our featured projects empower organizations
            to stay safe, informed, and future-ready.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 grid grid-cols-3 gap-2 md:gap-5"
        >
          {[
            { num: "P·01", label: "Courses Delivered", shortLabel: "Courses", value: 34 },
            { num: "P·02", label: "Modules Completed", shortLabel: "Modules", value: 117 },
            { num: "P·03", label: "Industries Served", shortLabel: "Industries", value: 7 },
          ].map((stat) => (
            <div
              key={stat.num}
              className="relative rounded-md border border-white/10 bg-white/[0.02] p-3 md:p-6 overflow-hidden hover:border-emerald-400/30 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent shimmer-line" />
              <div className="text-[9px] md:text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.22em] md:tracking-[0.3em] text-white/40 uppercase mb-2 md:mb-3">
                <span className="md:hidden">{stat.num} · {stat.shortLabel}</span>
                <span className="hidden md:inline">{stat.num} / {stat.label}</span>
              </div>
              <Counter value={stat.value} visible={statsVisible} />
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Process Reel — video feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 md:mt-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <SectionLabel num="P·04" label="Process Reel" />
              <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.01em] text-white font-medium">
                How a course{" "}
                <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                  comes together.
                </span>
              </h3>
              <p className="mt-5 font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/55">
                A short reel through our workflow — from scoping and
                storyboarding to motion design, narration, and final build. Two
                minutes, one threefold process.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2 text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 uppercase">
              <span>Runtime · 02:28</span>
              <span>Reel · 2024</span>
            </div>
          </div>

          <ProcessReel />

          <div className="mt-5 flex items-center justify-between text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/35 uppercase">
            <span>— Sound optional</span>
            <span className="hidden sm:inline">
              Enable · Empower · Elevate
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 md:mt-20 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <SectionLabel num="P·05" label="Featured Courses" />
            <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.01em] text-white font-medium max-w-xl">
              Courses in{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                production.
              </span>
            </h3>
          </div>
          <a
            href="#contact"
            className="group hidden md:inline-flex items-center gap-2 text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/60 hover:text-white uppercase transition-colors duration-200"
          >
            Commission a course
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </a>
        </motion.div>

        <div className="space-y-14 md:space-y-20">
          {projectList.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
