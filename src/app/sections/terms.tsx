"use client";

import { useState } from "react";

export const TermsOfServiceSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      content: `By accessing and using Triquetra Tech's website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

If you do not agree with any part of these terms, you must not use our website. Your continued use of our website following any updates to these terms will constitute acceptance of those changes.`,
    },
    {
      id: "description-of-services",
      title: "Description of Services",
      content: `Triquetra Tech provides a static informational website that showcases our brand, projects, and related content.

We do not provide paid services, collect payments, or offer contractual agreements through this website.`,
    },
    {
      id: "user-obligations",
      title: "User Obligations and Conduct",
      content: `When using our website, you agree to:

• Use the website only for lawful purposes
• Not interfere with or disrupt the website or servers
• Not attempt to gain unauthorized access to our systems
• Not transmit harmful, offensive, or illegal content
• Comply with all applicable laws and regulations

Violation of these obligations may result in restricted access to the website.`,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      content: `All content, materials, and intellectual property on this website, including but not limited to text, graphics, logos, and code, are owned by Triquetra Tech or our licensors and are protected by copyright, trademark, and other intellectual property laws.

You may not copy, modify, distribute, or create derivative works without express written permission.`,
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      content: `The content on this website is provided for general informational purposes only. 

• The website is provided "as is" without warranties of any kind
• We do not guarantee that the site will be error-free or available at all times
• We are not responsible for third-party links or content
• We do not guarantee specific outcomes from the use of information on this website`,
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, Triquetra Tech shall not be liable for any damages arising from your use of this website, including but not limited to:

• Indirect, incidental, or consequential damages
• Loss of profits, data, or business opportunities
• Damages resulting from third-party websites or services linked to from our site`,
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

  return (
    <section
      className="py-10 lg:py-14 px-6 md:px-10 lg:px-15"
      id="terms-of-service"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-gray-900 py-12 px-8 md:py-16 md:px-12 relative overflow-hidden rounded-xl ">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-green-400 text-sm md:text-base font-semibold tracking-wider mb-3 uppercase">
              Legal Agreement
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-roboto">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              These terms govern your use of our services and establish the
              legal framework for our professional relationship. Please read
              them carefully before engaging with our services.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              <p>
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Legal Agreement
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms of Service constitute a binding legal agreement
                    between you and Triquetra Tech. By using our website or
                    engaging our services, you agree to comply with and be bound
                    by these terms. If you do not agree to these terms, please
                    do not use our services.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-4">
                  <p className="text-amber-300 text-sm mb-2">
                    <strong>Professional Services:</strong>
                  </p>
                  <p className="text-gray-300 text-sm">
                    These terms apply to all professional services including
                    consulting, development, and ongoing support.
                  </p>
                </div>

                <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4">
                  <p className="text-blue-300 text-sm mb-2">
                    <strong>Contact Us:</strong>
                  </p>
                  <p className="text-gray-300 text-sm">
                    Questions about these terms? Email us at{" "}
                    <a
                      href="mailto:learning@triquetratech.co.za"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      learning@triquetratech.co.za
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between group transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-green-400 font-bold text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                        {section.title}
                      </h3>
                    </div>

                    <div
                      className={`transition-transform duration-300 ${
                        activeSection === section.id ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activeSection === section.id
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="bg-white/5 rounded-lg p-6 border-l-4 border-green-400/50">
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 border border-white/20 rounded-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  Key Points Summary
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Use of Website
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Website provided for informational purposes only; must
                        be used lawfully.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Intellectual Property
                      </h4>
                      <p className="text-gray-300 text-sm">
                        All content is owned by Triquetra Tech and protected by
                        law.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Privacy</h4>
                      <p className="text-gray-300 text-sm">
                        We only collect your email via the contact form; no
                        tracking or analytics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Disclaimers
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Website provided "as is"; no warranties or guarantees of
                        availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Limitation of Liability
                      </h4>
                      <p className="text-gray-300 text-sm">
                        We are not liable for damages arising from use of the
                        website.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Governing Law
                      </h4>
                      <p className="text-gray-300 text-sm">
                        These terms are governed by South African law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceSection;
