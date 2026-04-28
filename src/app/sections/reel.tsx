"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const ReelSection = () => {
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
    <section
      id="reel"
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-400/60" />
              <span className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase">
                004
              </span>
              <span className="text-[10px] md:text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/50 uppercase">
                Process Reel
              </span>
            </div>
            <h2 className="mt-6 font-[family-name:var(--font-roboto)] text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-white font-medium">
              How a course{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                comes together.
              </span>
            </h2>
            <p className="mt-5 font-[family-name:var(--font-roboto)] text-[15px] md:text-[17px] leading-[1.65] text-white/55 max-w-xl">
              A short reel through our workflow — from scoping and storyboarding
              to motion design, narration, and final build. Two minutes, one
              threefold process.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2 text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 uppercase">
            <span>Runtime · 02:28</span>
            <span>Reel · 2024</span>
          </div>
        </motion.div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="relative group"
        >
          <div className="relative rounded-md overflow-hidden border border-white/10 bg-black aspect-[16/9]">
            {/* Corner meta */}
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

            {/* Bottom controls */}
            <div
              className={`absolute left-0 right-0 bottom-0 z-20 px-4 pb-4 pt-10 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 ${
                hasStarted
                  ? playing
                    ? "opacity-0 group-hover:opacity-100"
                    : "opacity-100"
                  : "opacity-0"
              }`}
            >
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

          {/* Hover border accent */}
          <div className="pointer-events-none absolute -inset-px rounded-md border border-emerald-400/0 group-hover:border-emerald-400/20 transition-colors duration-500" />
        </motion.div>

        <div className="mt-5 flex items-center justify-between text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/35 uppercase">
          <span>— Sound optional</span>
          <span className="hidden sm:inline">Enable · Empower · Elevate</span>
        </div>
      </div>
    </section>
  );
};

export default ReelSection;
