"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Mail, ArrowUpRight, ChevronDown } from "lucide-react";

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
    id: "information-collection",
    title: "Information We Collect",
    content: `We only collect the information you provide directly to us through our contact form:\n\n• Your email address\n\nWe do not collect names, phone numbers, cookies, analytics, or any other personal data.`,
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    content: `We use the email address you provide only to:\n\n• Respond to your inquiries\n• Communicate with you directly about your request`,
  },
  {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    content: `We do not sell, trade, or share your email address with third parties.\n\nWe may only disclose information if required by law.`,
  },
  {
    id: "data-security",
    title: "Data Security",
    content: `We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.\n\nHowever, no method of transmission over the internet is completely secure, and we cannot guarantee absolute protection.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain your email only as long as necessary to respond to your inquiry. After that, emails may be deleted.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `You have the right to request that we delete your email communications with us.\n\nTo do so, please contact us at: learning@triquetratech.co.za`,
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
    content: `Our website is not directed to individuals under the age of 18. We do not knowingly collect information from children.`,
  },
  {
    id: "policy-changes",
    title: "Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.`,
  },
];

export const PrivacyPolicySection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggle = (id: string) =>
    setActiveSection((prev) => (prev === id ? null : id));

  return (
    <section
      id="privacy-policy"
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
          <SectionLabel num="P·01" label="Privacy Policy" />
          <h1 className="mt-6 font-[family-name:var(--font-roboto)] text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-white font-medium">
            Your privacy,{" "}
            <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
              protected.
            </span>
          </h1>
          <p className="mt-7 font-[family-name:var(--font-roboto)] text-[15px] md:text-[17px] leading-[1.65] text-white/55 max-w-xl">
            We are committed to protecting your privacy and ensuring the
            security of your personal information. This policy explains how we
            collect, use, and safeguard your data.
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
              <Shield className="size-4 text-emerald-400" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-emerald-400/80 uppercase mb-2">
                Important Information
              </div>
              <p className="font-[family-name:var(--font-roboto)] text-[15px] leading-[1.7] text-white/60">
                At Triquetra Tech, we respect your privacy and are committed to
                protecting your personal data. This policy informs you about how
                we look after your personal data and tells you about your privacy
                rights and how the law protects you.
              </p>
              <div className="mt-4 border border-emerald-400/20 bg-emerald-400/[0.04] rounded-sm px-4 py-3">
                <span className="text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.2em] text-emerald-400/80 uppercase">
                  Contact:{" "}
                </span>
                <a
                  href="mailto:learning@triquetratech.co.za"
                  className="text-[14px] font-[family-name:var(--font-roboto)] text-white/80 hover:text-emerald-300 transition-colors duration-200"
                >
                  learning@triquetratech.co.za
                </a>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <SectionLabel num="P·02" label="Questions?" />
            <h3 className="mt-4 font-[family-name:var(--font-roboto)] text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.2] tracking-[-0.01em] text-white font-medium">
              Questions about your{" "}
              <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                privacy?
              </span>
            </h3>
            <p className="mt-3 font-[family-name:var(--font-roboto)] text-[14px] leading-[1.65] text-white/50 max-w-md">
              We&apos;re here to help. Reach out to our team and we&apos;ll
              respond within 24 hours.
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

export default PrivacyPolicySection;
