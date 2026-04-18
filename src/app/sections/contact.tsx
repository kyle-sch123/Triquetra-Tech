"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

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

const MetaRow = ({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="group flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-b-0">
      <div className="shrink-0 mt-0.5 size-8 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-emerald-400/40 group-hover:bg-emerald-400/[0.04] transition-colors duration-200">
        <Icon className="size-3.5 text-white/60 group-hover:text-emerald-400 transition-colors duration-200" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[9px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/40 uppercase mb-1">
          {label}
        </div>
        <div className="text-[14px] md:text-[15px] font-[family-name:var(--font-roboto)] text-white/85 group-hover:text-white break-words transition-colors duration-200">
          {value}
        </div>
      </div>
      {href && (
        <ArrowUpRight
          className="shrink-0 size-4 text-white/30 group-hover:text-emerald-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
};

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    if (status.type === "success" || status.type === "error") {
      const timer = setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [status.type]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({ type: "loading", message: "Transmitting message..." });

    try {
      const response = await fetch("https://formspree.io/f/xjkakzvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Website Contact from ${formData.name}: ${formData.subject}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Message received. We'll respond within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Transmission failed. Please try again or email us directly.",
      });
    }
  };

  const isLoading = status.type === "loading";

  return (
    <section
      id="contact"
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

      {/* Ambient emerald glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[900px] rounded-full bg-emerald-500/[0.04] blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <SectionLabel num="005" label="Contact" />
          <h2 className="mt-6 font-[family-name:var(--font-roboto)] text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] text-white font-medium">
            <span>Let&apos;s build something </span>
            <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
              meaningful
            </span>
            <span className="text-white/85">.</span>
          </h2>
          <p className="mt-7 font-[family-name:var(--font-roboto)] text-[15px] md:text-[17px] leading-[1.65] text-white/55 max-w-xl">
            Whether you need a complete learning program, a single compliance
            course, or strategic advice on an existing initiative — tell us
            what you&apos;re working on and we&apos;ll respond within one
            business day.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Grid: Meta aside + Form */}
        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left — Contact meta */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-white/[0.08] bg-white/[0.015] rounded-sm p-6 md:p-8">
              {/* Corner bracket decoration */}
              <div className="absolute -top-px -left-px size-4 border-t border-l border-emerald-400/40" />
              <div className="absolute -top-px -right-px size-4 border-t border-r border-emerald-400/40" />
              <div className="absolute -bottom-px -left-px size-4 border-b border-l border-emerald-400/40" />
              <div className="absolute -bottom-px -right-px size-4 border-b border-r border-emerald-400/40" />

              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.28em] text-emerald-400/80 uppercase">
                  Accepting Projects
                </span>
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-roboto)] text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.2] tracking-[-0.01em] text-white font-medium">
                Direct channels,
                <br />
                <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-emerald-300">
                  no queues.
                </span>
              </h3>

              <p className="mt-4 text-[14px] leading-[1.65] font-[family-name:var(--font-roboto)] text-white/50">
                Prefer asynchronous? Reach us through any of these channels —
                we&apos;re attentive across all of them.
              </p>

              <div className="mt-5">
                <MetaRow
                  Icon={Mail}
                  label="Email"
                  value="learning@triquetratech.co.za"
                  href="mailto:learning@triquetratech.co.za"
                />
                <MetaRow
                  Icon={Clock}
                  label="Response time"
                  value="Within 24 hours, Mon–Fri"
                />
                <MetaRow
                  Icon={MapPin}
                  label="Based in"
                  value="South Africa · Remote worldwide"
                />
              </div>
            </div>
          </motion.aside>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative border border-white/[0.08] bg-white/[0.015] rounded-sm p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <SectionLabel num="F·01" label="Transmission" />
                <span className="text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/30 uppercase hidden sm:inline">
                  Encrypted · Secure
                </span>
              </div>

              {/* Status message */}
              {status.type !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-5 flex items-start gap-3 p-4 rounded-sm border ${
                    status.type === "success"
                      ? "bg-emerald-500/[0.06] border-emerald-400/30"
                      : status.type === "error"
                      ? "bg-red-500/[0.06] border-red-400/30"
                      : "bg-white/[0.03] border-white/15"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="shrink-0 size-4 text-emerald-400 mt-0.5" strokeWidth={2} />
                  ) : status.type === "error" ? (
                    <AlertCircle className="shrink-0 size-4 text-red-400 mt-0.5" strokeWidth={2} />
                  ) : (
                    <Loader2 className="shrink-0 size-4 text-white/60 mt-0.5 animate-spin" strokeWidth={2} />
                  )}
                  <span
                    className={`text-[13px] md:text-[14px] font-[family-name:var(--font-roboto)] leading-[1.55] ${
                      status.type === "success"
                        ? "text-emerald-200"
                        : status.type === "error"
                        ? "text-red-200"
                        : "text-white/75"
                    }`}
                  >
                    {status.message}
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/50 uppercase"
                    >
                      Name <span className="text-emerald-400/80">·</span> Required
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 md:py-3.5 rounded-sm bg-white/[0.02] border border-white/10 text-white placeholder:text-white/25 font-[family-name:var(--font-roboto)] text-[15px] focus:outline-none focus:border-emerald-400/60 focus:bg-emerald-400/[0.03] transition-colors duration-200 disabled:opacity-50"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/50 uppercase"
                    >
                      Email <span className="text-emerald-400/80">·</span> Required
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 md:py-3.5 rounded-sm bg-white/[0.02] border border-white/10 text-white placeholder:text-white/25 font-[family-name:var(--font-roboto)] text-[15px] focus:outline-none focus:border-emerald-400/60 focus:bg-emerald-400/[0.03] transition-colors duration-200 disabled:opacity-50"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/50 uppercase"
                  >
                    Subject <span className="text-emerald-400/80">·</span> Required
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 md:py-3.5 rounded-sm bg-white/[0.02] border border-white/10 text-white placeholder:text-white/25 font-[family-name:var(--font-roboto)] text-[15px] focus:outline-none focus:border-emerald-400/60 focus:bg-emerald-400/[0.03] transition-colors duration-200 disabled:opacity-50"
                    placeholder="Compliance program inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-[family-name:var(--font-roboto-mono)] tracking-[0.3em] text-white/50 uppercase"
                  >
                    Message <span className="text-emerald-400/80">·</span> Required
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={6}
                    className="w-full px-4 py-3 md:py-3.5 rounded-sm bg-white/[0.02] border border-white/10 text-white placeholder:text-white/25 font-[family-name:var(--font-roboto)] text-[15px] leading-[1.6] focus:outline-none focus:border-emerald-400/60 focus:bg-emerald-400/[0.03] transition-colors duration-200 resize-y min-h-[140px] disabled:opacity-50"
                    placeholder="Tell us about your audience, timeline, and what success looks like…"
                  />
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-[11px] font-[family-name:var(--font-roboto-mono)] tracking-[0.18em] text-white/35 uppercase">
                    All fields kept confidential.
                  </p>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-emerald-400 text-black hover:bg-emerald-300 disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed transition-colors duration-200 min-h-[48px] cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" strokeWidth={2.25} />
                        <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.24em] uppercase">
                          Sending
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[12px] font-[family-name:var(--font-roboto-mono)] font-medium tracking-[0.24em] uppercase">
                          Send Message
                        </span>
                        <ArrowUpRight
                          className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={2.25}
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
