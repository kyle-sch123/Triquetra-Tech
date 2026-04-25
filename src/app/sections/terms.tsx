"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Mail, ArrowUpRight, ChevronDown } from "lucide-react";

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

const sections = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    content: `By accessing and using Triquetra Tech's website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.\n\nIf you do not agree with any part of these terms, you must not use our website. Your continued use of our website following any updates to these terms will constitute acceptance of those changes.`,
  },
  {
    id: "description-of-services",
    title: "Description of Services",
    content: `Triquetra Tech provides a static informational website that showcases our brand, projects, and related content.\n\nWe do not provide paid services, collect payments, or offer contractual agreements through this website.`,
  },
  {
    id: "user-obligations",
    title: "User Obligations and Conduct",
    content: `When using our website, you agree to:\n\n• Use the website only for lawful purposes\n• Not interfere with or disrupt the website or servers\n• Not attempt to gain unauthorized access to our systems\n• Not transmit harmful, offensive, or illegal content\n• Comply with all applicable laws and regulations\n\nViolation of these obligations may result in restricted access to the website.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: `All content, materials, and intellectual property on this website, including but not limited to text, graphics, logos, and code, are owned by Triquetra Tech or our licensors and are protected by copyright, trademark, and other intellectual property laws.\n\nYou may not copy, modify, distribute, or create derivative works without express written permission.`,
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: `The content on this website is provided for general informational purposes only.\n\n• The website is provided "as is" without warranties of any kind\n• We do not guarantee that the site will be error-free or available at all times\n• We are not responsible for third-party links or content\n• We do not guarantee specific outcomes from the use of information on this website`,
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, Triquetra Tech shall not be liable for any damages arising from your use of this website, including but not limited to:\n\n• Indirect, incidental, or consequential damages\n• Loss of profits, data, or business opportunities\n• Damages resulting from third-party websites or services linked to from our site`,
  },
  {
    id: "privacy",
    title: "Privacy",
    content: `We respect your privacy. The only personal data we collect is the email address you provide through our contact form. We use it solely to respond to inquiries. For more details, please see our Privacy Policy.`,
  },
  {
    id: "termination",
    title: "Termination of Access",
    content: `We reserve the right to suspend or terminate access to our website at our discretion if we believe you have violated these Terms of Service.`,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `These Terms of Service are governed by and construed in accordance with the laws of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the South African courts.`,
  },
];

const summaryPoints = [
  { label: "Use of Website", body: "Provided for informational purposes only; must be used lawfully." },
  { label: "Intellectual Property", body: "All content is owned by Triquetra Tech and protected by law." },
  { label: "Privacy", body: "We only collect your email via the contact form — no tracking or analytics." },
  { label: "Disclaimers", body: `Website provided "as is"; no warranties or guarantees of availability.` },
  { label: "Limitation of Liability", body: "We are not liable for damages arising from use of the website." },
  { label: "Governing Law", body: "These terms are governed by South African law." },
];

export const TermsOfServiceSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggle = (id: string) =>
    setActiveSection((prev) => (prev === id ? null : id));

  return (
    <section
      id="terms-of-service"
      className="relative text-white py-16 md:py-20 px-5 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 hero-grid-bg opacity-25 pointer-events-none"
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
          <SectionLabel num="T·01" label="Terms of Service" />
          <h1 className="mt-6 font-[family-name:var(--font-roboto)] text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-white font-medium">
            Terms of{" "}
            <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
              engagement.
            </span>
          </h1>
          <p className="mt-7 font-[family-name:var(--font-roboto)] text-[15px] md:text-[17px] leading-[1.65] text-white/55 max-w-xl">
            These terms govern your use of our website and establish the legal
            framework for our professional relationship. Please read them
            carefully.
          </p>
          <div className="mt-4 text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/35 uppercase">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 relative border border-white/[0.08] bg-white/[0.015] rounded-sm p-6 md:p-8 overflow-hidden"
        >
          {/* Corner brackets */}
          <div className="absolute -top-px -left-px size-4 border-t border-l border-emerald-400/40" />
          <div className="absolute -top-px -right-px size-4 border-t border-r border-emerald-400/40" />
          <div className="absolute -bottom-px -left-px size-4 border-b border-l border-emerald-400/40" />
          <div className="absolute -bottom-px -right-px size-4 border-b border-r border-emerald-400/40" />

          <div className="flex items-start gap-5">
            <div className="shrink-0 flex items-center justify-center size-10 rounded-sm border border-emerald-400/30 bg-emerald-400/[0.06]">
              <FileText className="size-4 text-emerald-400" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase mb-2">
                Legal Agreement
              </div>
              <p className="font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/60">
                These Terms of Service constitute a binding legal agreement
                between you and Triquetra Tech. By using our website, you agree
                to comply with and be bound by these terms. If you do not agree,
                please do not use our services.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <div className="border border-emerald-400/20 bg-emerald-400/[0.04] rounded-sm px-4 py-3">
                  <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-emerald-400/80 uppercase mb-1">
                    Scope
                  </div>
                  <p className="font-[family-name:var(--font-roboto)] text-[13px] text-white/55">
                    Applies to all use of our website and informational services.
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] rounded-sm px-4 py-3">
                  <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-white/40 uppercase mb-1">
                    Contact
                  </div>
                  <a
                    href="mailto:learning@triquetratech.co.za"
                    className="font-[family-name:var(--font-roboto)] text-[13px] text-white/80 hover:text-emerald-300 transition-colors duration-200 break-all"
                  >
                    learning@triquetratech.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-6 space-y-2"
        >
          {sections.map((section, index) => {
            const isOpen = activeSection === section.id;
            return (
              <div
                key={section.id}
                className={`border rounded-sm overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-emerald-400/30 bg-white/[0.03]"
                    : "border-white/10 bg-white/[0.015] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(section.id)}
                  className="w-full px-5 md:px-7 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/70 uppercase shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-[family-name:var(--font-roboto)] text-[15px] md:text-[16px] font-medium transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-white/80"
                      }`}
                    >
                      {section.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`shrink-0 size-4 text-white/40 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-7 pb-6 border-t border-white/[0.06]">
                        <div className="pt-5 border-l-2 border-emerald-400/30 pl-4">
                          <p className="font-[family-name:var(--font-roboto)] text-[14px] md:text-[15px] leading-[1.75] text-white/55 whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <SectionLabel num="T·02" label="Key Points" />
          <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] tracking-[-0.01em] text-white font-medium">
            What you need to{" "}
            <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
              know.
            </span>
          </h3>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {summaryPoints.map((point, i) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative border border-white/10 bg-white/[0.02] hover:border-emerald-400/25 hover:bg-white/[0.04] rounded-sm p-4 md:p-5 transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="size-1.5 rounded-full bg-emerald-400/70" />
                  <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.22em] text-emerald-400/80 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="font-[family-name:var(--font-roboto)] text-[14px] font-medium text-white/85 mb-1.5">
                  {point.label}
                </div>
                <p className="font-[family-name:var(--font-roboto)] text-[13px] leading-[1.6] text-white/45">
                  {point.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <SectionLabel num="T·03" label="Questions?" />
            <h3 className="mt-4 font-[family-name:var(--font-roboto)] text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.2] tracking-[-0.01em] text-white font-medium">
              Questions about these{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                terms?
              </span>
            </h3>
            <p className="mt-3 font-[family-name:var(--font-roboto)] text-[14px] leading-[1.65] text-white/50 max-w-md">
              We&apos;re happy to clarify. Reach out and we&apos;ll respond
              within 24 hours.
            </p>
          </div>
          <a
            href="mailto:learning@triquetratech.co.za"
            className="group inline-flex items-center gap-3 bg-emerald-400 hover:bg-emerald-300 text-black px-6 py-3.5 rounded-sm transition-colors duration-200 shrink-0 self-start md:self-auto"
          >
            <Mail className="size-4" strokeWidth={2.25} />
            <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.22em] uppercase">
              Contact Us
            </span>
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.25}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfServiceSection;
