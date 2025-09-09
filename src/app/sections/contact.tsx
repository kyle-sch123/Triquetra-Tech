"use client";

import GrainImage from "@/app/assets/images/grain.jpg";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Create mailto link with form data
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:kyleschaffner39@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Contact Form Inquiry"
      )}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setSubmitStatus("");
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#111111] text-gray-900 py-8 px-8 md:py-10 md:px-12 relative overflow-hidden">
          {/* Grain texture background */}
          <div className="absolute inset-0 opacity-5 -z-10">
            <Image src={GrainImage} alt="" layout="fill" objectFit="cover" />
          </div>

          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-roboto font-semibold mb-3">
              Send Us a Message
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white/90 font-roboto max-w-2xl mx-auto">
              Ready to bring your next project to life? Fill out the form below
              and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90 mb-2"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/90 mb-2"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field - Full Width */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all resize-vertical min-h-[120px]"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
            </div>

            {/* Submit Button and Status */}
            <div className="mt-8 text-center">
              {submitStatus === "success" && (
                <p className="text-green-400 mb-4 text-sm">
                  Thank you! Your message has been prepared. Please check your
                  email client to send it.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 mb-4 text-sm">
                  There was an error processing your message. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-md font-semibold text-base transition-all ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-white text-[#111111] hover:bg-[#111111] hover:text-white border-2 border-transparent hover:border-white/90"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>

          {/* Alternative Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white/90 mb-4">
                Or reach out directly
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:learning@triquetratech.co.za"
                  className="text-white/80 hover:text-white transition-colors underline"
                >
                  learning@triquetratech.co.za
                </a>
                <span className="hidden sm:block text-white/60">•</span>
                <span className="text-white/80">
                  We'll get back to you within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
