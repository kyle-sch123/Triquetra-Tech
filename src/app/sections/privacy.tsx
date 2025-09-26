"use client";

import { useState } from "react";

export const PrivacyPolicySection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      content: `We only collect the information you provide directly to us through our contact form:
    • Your email address
    
    We do not collect names, phone numbers, cookies, analytics, or any other personal data.`,
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: `We use the email address you provide only to:
    • Respond to your inquiries
    • Communicate with you directly about your request`,
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      content: `We do not sell, trade, or share your email address with third parties.
    
    We may only disclose information if required by law.`,
    },
    {
      id: "data-security",
      title: "Data Security",
      content: `We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.
    
    However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute protection.`,
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: `We retain your email only as long as necessary to respond to your inquiry. After that, emails may be deleted.`,
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: `You have the right to request that we delete your email communications with us.
    
    To do so, please contact us at: learning@triquetratech.co.za`,
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

  return (
    <section
      className="py-10 lg:py-14 px-6 md:px-10 lg:px-15"
      id="privacy-policy"
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-green-400 text-sm md:text-base font-semibold tracking-wider mb-3 uppercase">
              Your Privacy Matters
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-roboto">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the
              security of your personal information. This policy explains how we
              collect, use, and safeguard your data when you use our services.
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
                    Important Information
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    At Triquetra Tech, we respect your privacy and are committed
                    to protecting your personal data. This privacy policy will
                    inform you about how we look after your personal data when
                    you visit our website or engage with our services, and tell
                    you about your privacy rights and how the law protects you.
                  </p>
                </div>
              </div>

              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                <p className="text-green-300 text-sm mb-2">
                  <strong>Contact Information:</strong>
                </p>
                <p className="text-gray-300 text-sm">
                  If you have any questions about this privacy policy or our
                  privacy practices, please contact us at{" "}
                  <a
                    href="mailto:learning@triquetratech.co.za"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    learning@triquetratech.co.za
                  </a>
                </p>
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
                        ? "max-h-96 opacity-100"
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

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 border border-white/20 rounded-2xl p-8 md:p-10 text-center">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Questions About Your Privacy?
              </h3>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We're here to help. If you have any questions about this privacy
                policy or how we handle your data, don't hesitate to reach out
                to our team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:learning@triquetratech.co.za"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#111111] rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/90 hover:scale-105"
                >
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us
                </a>

                <div className="text-white/70 text-sm">
                  <p>Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-green-400/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
