// "use client";

// import GrainImage from "@/app/assets/images/grain.jpg";
// import Image from "next/image";
// import { ChangeEvent, FormEvent, useState } from "react";

// export const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("");

//     try {
//       // Create mailto link with form data
//       const emailBody = `
// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Subject: ${formData.subject}

// Message:
// ${formData.message}
//       `.trim();

//       const mailtoLink = `mailto:kyleschaffner39@gmail.com?subject=${encodeURIComponent(
//         formData.subject || "Contact Form Inquiry"
//       )}&body=${encodeURIComponent(emailBody)}`;

//       window.location.href = mailtoLink;
//       setSubmitStatus("success");

//       // Reset form after successful submission
//       setTimeout(() => {
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//         setSubmitStatus("");
//       }, 2000);
//     } catch (error) {
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-24" id="contact">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-[#111111] text-gray-900 py-8 px-8 md:py-10 md:px-12 relative overflow-hidden">
//           {/* Grain texture background */}
//           <div className="absolute inset-0 opacity-5 -z-10">
//             <Image src={GrainImage} alt="" layout="fill" objectFit="cover" />
//           </div>

//           {/* Header */}
//           <div className="text-center mb-8 md:mb-10">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-roboto font-semibold mb-3">
//               Send Us a Message
//             </h2>
//             <p className="text-sm md:text-base lg:text-lg text-white/90 font-roboto max-w-2xl mx-auto">
//               Ready to bring your next project to life? Fill out the form below
//               and let's discuss how we can help you achieve your goals.
//             </p>
//           </div>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Name Field */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-white/90 mb-2"
//                 >
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-white/90 mb-2"
//                 >
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-white/90 mb-2"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               {/* Subject Field */}
//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-white/90 mb-2"
//                 >
//                   Subject *
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               {/* Message Field - Full Width */}
//               <div className="md:col-span-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-white/90 mb-2"
//                 >
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all resize-vertical min-h-[120px]"
//                   placeholder="Tell us about your project or inquiry..."
//                 />
//               </div>
//             </div>

//             {/* Submit Button and Status */}
//             <div className="mt-8 text-center">
//               {submitStatus === "success" && (
//                 <p className="text-green-400 mb-4 text-sm">
//                   Thank you! Your message has been prepared. Please check your
//                   email client to send it.
//                 </p>
//               )}
//               {submitStatus === "error" && (
//                 <p className="text-red-400 mb-4 text-sm">
//                   There was an error processing your message. Please try again.
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`inline-flex items-center gap-2 px-8 py-3 rounded-md font-semibold text-base transition-all ${
//                   isSubmitting
//                     ? "bg-gray-600 text-gray-300 cursor-not-allowed"
//                     : "bg-white text-[#111111] hover:bg-[#111111] hover:text-white border-2 border-transparent hover:border-white/90"
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
//                     Sending...
//                   </>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>
//             </div>
//           </form>

//           {/* Alternative Contact Info */}
//           <div className="mt-12 pt-8 border-t border-white/20">
//             <div className="text-center">
//               <h3 className="text-lg font-semibold text-white/90 mb-4">
//                 Or reach out directly
//               </h3>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <a
//                   href="mailto:learning@triquetratech.co.za"
//                   className="text-white/80 hover:text-white transition-colors underline"
//                 >
//                   learning@triquetratech.co.za
//                 </a>
//                 <span className="hidden sm:block text-white/60">•</span>
//                 <span className="text-white/80">
//                   We'll get back to you within 24 hours
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
"use client";

import GrainImage from "@/app/assets/images/grain.jpg";
import Image from "next/image";

export const ContactSection = () => {
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

          {/* Contact Card */}
          <div className="max-w-lg mx-auto">
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
                  Let's Connect
                </h3>

                <div className="space-y-4">
                  <div>
                    <a
                      href="mailto:learning@triquetratech.co.za"
                      className="text-white/90 hover:text-white transition-all duration-300 text-lg font-medium block py-2 px-4 rounded-lg hover:bg-white/10"
                    >
                      learning@triquetratech.co.za
                    </a>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <p className="text-white/70 text-sm">
                      ⚡ Quick response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="mailto:learning@triquetratech.co.za?subject=Project Inquiry&body=Hi there,%0D%0A%0D%0AI'm interested in discussing a project with your team.%0D%0A%0D%0APlease let me know when would be a good time to connect.%0D%0A%0D%0AThanks!"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 bg-white text-[#111111] hover:bg-white/90 hover:scale-105 transform shadow-lg hover:shadow-xl"
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
