"use client";

import Image from "next/image";
import React from "react";
import PlaceholderImage2 from "@/app/assets/images/Our Story.jpg";
import Mission from "@/app/assets/images/mission.jpg";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Learning Solutions",
    body: "We specialize in creating impactful e-learning experiences that equip teams with the knowledge, skills, and confidence they need to excel.",
  },
  {
    num: "02",
    title: "Excellence Solutions",
    body: "We deliver high-quality, accessible e-learning content that inspires growth, sparks curiosity, and cultivates lifelong learning across industries.",
  },
  {
    num: "03",
    title: "Compliance Solutions",
    body: "We develop expertly crafted e-learning programs that simplify complexity and strengthen compliance — because when compliance becomes culture, businesses thrive.",
  },
];

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

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="relative text-white py-16 md:py-20 px-5 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 10%, transparent 75%)",
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
          <SectionLabel num="002" label="About" />
          <h2 className="mt-6 font-[family-name:var(--font-roboto)] text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-white font-medium">
            <span>A company </span>
            <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
              crafted,
            </span>
            <br />
            <span className="text-white/85">not cobbled.</span>
          </h2>
          <p className="mt-7 font-[family-name:var(--font-roboto)] text-[15px] md:text-[17px] leading-[1.65] text-white/55 max-w-xl">
            Triquetra Tech&apos;s company and culture are a lot like our
            product. They&apos;re built with intention for a delightful
            experience — and a lasting one.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Mission — image right, text left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid md:grid-cols-12 gap-8 md:gap-12 items-center"
        >
          <div className="md:col-span-6 order-2 md:order-1">
            <SectionLabel num="M·01" label="Our Mission" />
            <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-white font-medium">
              Empowering organizations to{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                elevate
              </span>{" "}
              performance through digital learning.
            </h3>
            <p className="mt-5 font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/55">
              To empower organizations through innovative digital learning and
              compliance solutions that drive growth, performance, and long-term
              impact.
            </p>
          </div>

          <div className="md:col-span-6 order-1 md:order-2">
            <div className="group relative overflow-hidden rounded-md border border-white/10">
              <div className="relative aspect-[4/3] md:aspect-[5/4]">
                <Image
                  src={Mission}
                  alt="Our Mission"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/75 uppercase">
                    Mission · 2017–Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story — text right, image left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-12 items-center"
        >
          <div className="md:col-span-6">
            <div className="group relative overflow-hidden rounded-md border border-white/10">
              <div className="relative aspect-[4/3] md:aspect-[5/4]">
                <Image
                  src={PlaceholderImage2}
                  alt="Our Story"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/75 uppercase">
                    Origin · JHB, ZA
                  </span>
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <SectionLabel num="M·02" label="Our Story" />
            <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-white font-medium">
              A vision for learning that actually{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                sticks.
              </span>
            </h3>
            <p className="mt-5 font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/55">
              Triquetra Tech was founded in 2017 by a group of passionate South
              African technologists and learning specialists who saw an
              opportunity to modernize the way businesses train and transform
              their workforce.
            </p>
            <p className="mt-4 font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/55">
              What began as a vision to make learning more engaging and
              effective quickly grew into a full-scale IT solutions company,
              serving clients across multiple industries with tailored
              e-learning, automation, and digital platforms.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* What We Do — three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 md:mt-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <SectionLabel num="M·03" label="What We Do" />
              <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.01em] text-white font-medium max-w-xl">
                Three pillars.{" "}
                <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                  One
                </span>{" "}
                threefold promise.
              </h3>
            </div>
            <p className="md:max-w-sm font-[family-name:var(--font-roboto)] text-[14px] leading-[1.7] text-white/50">
              Our solutions are designed to integrate seamlessly — from first
              onboarding to ongoing compliance and career-long growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-400/30 transition-colors duration-300 p-6 md:p-7 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase">
                    {pillar.num}
                  </span>
                  <ArrowUpRight
                    className="size-4 text-white/30 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                    strokeWidth={2}
                  />
                </div>
                <h4 className="font-[family-name:var(--font-roboto)] text-[20px] md:text-[22px] leading-snug text-white font-medium mb-3 tracking-[-0.01em]">
                  {pillar.title}
                </h4>
                <p className="font-[family-name:var(--font-roboto)] text-[14px] leading-[1.65] text-white/55">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Triquetra + Looking Ahead — editorial two-up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-10"
        >
          <div className="relative">
            <SectionLabel num="M·04" label="The Name" />
            <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] tracking-[-0.01em] text-white font-medium">
              Why{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                &ldquo;Triquetra&rdquo;
              </span>
              ?
            </h3>
            <p className="mt-5 font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/55">
              Derived from an ancient symbol meaning &ldquo;threefold,&rdquo;
              the name reflects our commitment to balance and unity:{" "}
              <span className="text-white/75">
                Enable. Empower. Elevate.
              </span>{" "}
              We believe the intersection of people, process, and technology
              creates long-term success — and we&apos;re here to build that
              future with our clients.
            </p>
          </div>

          <div className="relative">
            <SectionLabel num="M·05" label="Looking Ahead" />
            <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] tracking-[-0.01em] text-white font-medium">
              Built for what&apos;s{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                next.
              </span>
            </h3>
            <p className="mt-5 font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/55">
              Our story is one of growth, innovation, and a relentless
              commitment to helping businesses thrive in a rapidly changing
              world. With each new partnership, we&apos;re redefining what
              meaningful training and digital transformation can look like
              across industries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
