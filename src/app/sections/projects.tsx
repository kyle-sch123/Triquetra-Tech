"use client";

import React, { useState, useEffect, useRef } from "react";
import t1 from "@/app/assets/images/TT Work 1.png";
import t2 from "@/app/assets/images/TT Work 2.png";
import t3 from "@/app/assets/images/TT Work 3.png";
import t4 from "@/app/assets/images/TT Work 4.png";
import t5 from "@/app/assets/images/TT Work 5.png";
import t6 from "@/app/assets/images/TT Work 6.png";
import t7 from "@/app/assets/images/TT Work 7.png";
import t8 from "@/app/assets/images/TT Work 8.png";
import Image from "next/image";
import { motion } from "framer-motion";

const FlipDigit = ({
  digit,
  isFlipping,
}: {
  digit: string;
  isFlipping: boolean;
}) => {
  return (
    <div className="relative inline-block mx-1">
      <div
        className={`bg-gray-800 rounded-lg p-3 shadow-2xl border-2 border-green-400 transition-all duration-300 ${
          isFlipping ? "transform -translate-y-1" : ""
        }`}
      >
        <div className="text-4xl md:text-5xl font-bold text-green-400 font-mono w-8 text-center">
          {digit}
        </div>
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700"></div>
      </div>
    </div>
  );
};

const FlipNumber = ({
  value,
  label,
  isVisible,
}: {
  value: number;
  label: string;
  isVisible: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);

      const steps = 40; // Reduced number of steps for better performance
      const increment = value / steps;
      let current = 0;

      const animate = () => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          return;
        } else {
          setDisplayValue(Math.floor(current));
          setIsFlipping(true);
          setTimeout(() => setIsFlipping(false), 150);
          requestAnimationFrame(animate);
        }
      };

      const timer = setTimeout(animate, 0);

      return () => clearTimeout(timer);
    }
  }, [value, isVisible, hasAnimated]);

  // Convert number to string and pad with zeros if needed
  const displayString = displayValue.toString().padStart(3, "0");
  const digits = displayString.split("");

  return (
    <div className="text-center">
      <div className="flex justify-center items-center mb-4">
        {digits.map((digit, index) => (
          <FlipDigit key={index} digit={digit} isFlipping={isFlipping} />
        ))}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-white capitalize">
        {label}
      </h3>
    </div>
  );
};

const ImageSlideshow = ({
  images,
  alt,
  className,
}: {
  images: any[];
  alt: string;
  className: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden group">
      <Image
        src={images[currentImageIndex]}
        alt={alt}
        className={`${className} transition-opacity duration-500`}
        width={500}
        height={300}
      />

      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slideshow indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? "bg-green-400" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Define image arrays for each project
  const project1Images = [t1, t2];
  const project2Images = [t3, t4];
  const project3Images = [t5, t6];
  const project4Images = [t7, t8];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-10">
      <div className="min-h-screen">
        {/* Header Section */}
        <motion.div
          className="px-6 md:px-12 lg:px-24 text-center mb-16 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-green-400 text-sm md:text-base font-semibold tracking-wider mb-2">
            OUR SOLUTIONS
          </h3>
          <h1 className="text-2xl md:text-3xl lg:text-[45px] font-medium font-roboto mb-2.5 tracking-wider">
            Featured Projects
          </h1>
          <div className="max-w-5xl mx-auto">
            <p className="font-roboto text-gray-200/90 text-[14px] md:text-[16px] lg:text-[17px] tracking-wider">
              At Triquetra Tech, we&apos;ve successfully designed and delivered
              industry-relevant e-learning solutions focused on real-world
              impact. From PPE Compliance and Management of Change to
              Communication Skills and Induction Training, our featured projects
              empower organizations to stay safe, informed, and future-ready.
              Each course is crafted with purpose — helping teams learn better,
              faster, and with lasting results.
            </p>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          ref={sectionRef}
          className="px-6 md:px-12 lg:px-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Courses Delivered */}
              <div className="flex justify-center">
                <FlipNumber
                  value={34}
                  label="Courses Delivered"
                  isVisible={isVisible}
                />
              </div>

              {/* Modules Completed */}
              <div className="flex justify-center">
                <FlipNumber
                  value={117}
                  label="Modules Completed"
                  isVisible={isVisible}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Showcase Section */}
        <div className="px-6 md:px-12 lg:px-24 mt-20">
          <motion.div
            id="project1"
            className="max-w-6xl mx-auto mt-15"
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <ImageSlideshow
                    images={project1Images}
                    alt="PPE Compliance Training"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    PPE Compliance
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {/* Bento box style tags */}
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                      OSHA-Aligned
                    </span>
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                      Health & Safety Standards
                    </span>
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                      HSE Certified Learning
                    </span>
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                      Workplace Occupational Safety Compliance
                    </span>
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                      Risk Reduction
                    </span>
                  </div>

                  <p className="text-white leading-relaxed">
                    At Triquetra Tech, we&apos;ve successfully designed and
                    delivered industry-relevant e-learning solutions focused on
                    real-world impact. From PPE Compliance and Management of
                    Change to Communication Skills and Induction Training, our
                    featured projects empower organizations to stay safe,
                    informed, and future-ready. Each course is crafted with
                    purpose — helping teams learn better, faster, and with
                    lasting results.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              id="project2"
              className="max-w-6xl mx-auto mt-15"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Management of Change
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {/* Bento box style tags */}
                      <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                        Organizational Adaptability
                      </span>
                      <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                        Employee Engagement
                      </span>
                      <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                        Minimizing Operational Disruption
                      </span>
                      <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                        Risk Mitigation Strategies
                      </span>
                    </div>

                    <p className="text-white leading-relaxed">
                      In today&apos;s dynamic environments, change is inevitable
                      — but managing it effectively is essential. This module
                      equips teams with tools and strategies to plan,
                      communicate, and implement changes safely and efficiently,
                      reducing operational risks and ensuring smooth
                      transitions.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <ImageSlideshow
                      images={project2Images}
                      alt="Management of Change Training"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <motion.div
                id="project3"
                className="max-w-6xl mx-auto mt-15"
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <ImageSlideshow
                        images={project3Images}
                        alt="Communication Skills Training"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        Communication Skills
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {/* Bento box style tags */}
                        <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                          Effective Workplace Communication
                        </span>
                        <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                          Team Collaboration
                        </span>
                        <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                          Conflict Resolution
                        </span>
                        <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                          Clear & Concise Messaging
                        </span>
                        <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                          Active Listening
                        </span>
                      </div>

                      <p className="text-white leading-relaxed">
                        Effective communication is the backbone of successful
                        teamwork. Our Communication Skills module enhances both
                        verbal and non-verbal communication across teams,
                        empowering staff to build trust, avoid
                        misunderstandings, and collaborate more productively
                        across departments and hierarchies.
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  id="project4"
                  className="max-w-6xl mx-auto mt-15"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                          Induction Training
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {/* Bento box style tags */}
                          <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                            Orientation Essentials
                          </span>
                          <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                            HR & Policy Introduction
                          </span>
                          <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                            Introduction to Tools & Systems
                          </span>
                          <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                            Role Clarity & Expectations
                          </span>
                          <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                            Workplace Safety Protocols
                          </span>
                          <span className="bg-white text-black px-3 py-1 rounded-full text-sm border-2">
                            Smooth Start-Up Experience
                          </span>
                        </div>

                        <p className="text-white leading-relaxed">
                          First impressions matter. Our Induction Training
                          solution helps new hires get up to speed quickly with
                          essential information about company values, safety
                          procedures, and job-specific expectations. We design
                          interactive, branded onboarding experiences that set
                          the tone for long-term success.
                        </p>
                      </div>
                      <div className="w-full md:w-1/2">
                        <ImageSlideshow
                          images={project4Images}
                          alt="Induction Training"
                          className="w-full h-64 md:h-full object-cover "
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
