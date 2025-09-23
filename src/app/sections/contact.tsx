"use client";

import { useState, useEffect } from "react";
import GrainImage from "@/app/assets/images/grain.jpg";
import Image from "next/image";

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

  // Auto-hide status message after 5 seconds
  useEffect(() => {
    if (status.type === "success" || status.type === "error") {
      const timer = setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 6500);

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

    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email us directly.",
      });
    }
  };

  return (
    <section className="py-10 lg:py-14 px-6 md:px-10 lg:px-15" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-gray-900 py-12 px-8 md:py-16 md:px-12 relative overflow-hidden rounded-xl">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-green-400 text-sm md:text-base font-semibold tracking-wider mb-2 uppercase">
              Get In Touch
            </h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-roboto">
              Contact Us
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to bring your next project to life? We'd love to hear from
              you and discuss how we can help turn your vision into reality.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-400/70 mb-2">
                  Send Us a Message
                </h3>
              </div>

              {/* Status Message */}
              {status.type !== "idle" && (
                <div
                  className={`mb-6 p-4 rounded-lg text-center ${
                    status.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : status.type === "error"
                      ? "bg-red-500/20 border border-red-500/30 text-red-300"
                      : "bg-blue-500/20 border border-blue-500/30 text-blue-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/90 text-sm font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/90 text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white/90 text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/90 text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform ${
                      status.type === "loading"
                        ? "bg-white/50 text-gray-500 cursor-not-allowed"
                        : "bg-white text-[#111111] hover:bg-white/90 hover:scale-105"
                    }`}
                  >
                    {status.type === "loading" ? (
                      <>
                        <svg
                          className="w-5 h-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {/* Alternative Contact */}
                <div className="text-center pt-6 border-t border-white/10">
                  <p className="text-white/70 text-sm mb-2">
                    Or email us directly at:
                  </p>
                  <a
                    href="mailto:learning@triquetratech.co.za"
                    className="text-green-400 hover:text-green-300 transition-colors font-medium"
                  >
                    learning@triquetratech.co.za
                  </a>
                  <p className="text-white/50 text-xs mt-2">
                    ⚡ Quick response within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
