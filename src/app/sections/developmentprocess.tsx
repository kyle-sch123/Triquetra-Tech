"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const DevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      title: "Analysis",
      subtitle: "Exploration",
      description:
        "We begin by thoroughly understanding your organization's specific learning needs, compliance requirements, and target audience. Our team conducts comprehensive stakeholder interviews and needs assessments to ensure every module addresses real-world challenges.",
      icon: "🔍",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Design",
      subtitle: "Planning",
      description:
        "Our instructional designers create detailed learning pathways, interactive scenarios, and assessment strategies. We develop storyboards and prototypes that align with your brand identity while ensuring optimal user experience and engagement.",
      icon: "🎨",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Develop",
      subtitle: "Create",
      description:
        "Using cutting-edge e-learning technologies, we build interactive modules with multimedia elements, simulations, and gamification features. Our development team ensures cross-platform compatibility and responsive design for seamless learning experiences.",
      icon: "⚙️",
      color: "from-red-400 to-red-600",
    },
    {
      title: "Application",
      subtitle: "Implement",
      description:
        "We deploy your custom learning solution across your preferred LMS platform, provide comprehensive training for administrators, and ensure smooth integration with existing systems. Our team supports the rollout process from start to finish.",
      icon: "🚀",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Evaluation",
      subtitle: "Review",
      description:
        "Through detailed analytics and feedback collection, we measure learning effectiveness and identify areas for improvement. Our ongoing evaluation ensures your training programs continue to deliver measurable results and stay current with industry standards.",
      icon: "📊",
      color: "from-yellow-400 to-yellow-600",
    },
  ];

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
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4500);

      return () => clearInterval(timer);
    }
  }, [isVisible, steps.length]);

  const lightbulbBrightness = ((activeStep + 1) / steps.length) * 100;

  return (
    <motion.div
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-24 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-green-400 text-sm md:text-base font-semibold tracking-wider mb-4">
            OUR METHODOLOGY
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-roboto">
            Development Process
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our proven 5-stage methodology ensures every e-learning solution is
            tailored, effective, and delivers measurable results for your
            organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lightbulb Visualization */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Lightbulb SVG */}
              <div className="relative w-80 h-80">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Lightbulb outline */}
                  <path
                    d="M100 20 C120 20, 140 40, 140 70 C140 85, 135 95, 130 105 L130 120 L70 120 L70 105 C65 95, 60 85, 60 70 C60 40, 80 20, 100 20 Z"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="3"
                  />

                  {/* Lightbulb base */}
                  <rect
                    x="70"
                    y="120"
                    width="60"
                    height="15"
                    fill="#374151"
                    rx="2"
                  />
                  <rect
                    x="75"
                    y="135"
                    width="50"
                    height="8"
                    fill="#374151"
                    rx="1"
                  />
                  <rect
                    x="80"
                    y="143"
                    width="40"
                    height="8"
                    fill="#374151"
                    rx="1"
                  />

                  {/* Glowing fill */}
                  <path
                    d="M100 20 C120 20, 140 40, 140 70 C140 85, 135 95, 130 105 L130 120 L70 120 L70 105 C65 95, 60 85, 60 70 C60 40, 80 20, 100 20 Z"
                    fill={`rgba(251, 191, 36, ${lightbulbBrightness / 100})`}
                    className="transition-all duration-1000"
                  />

                  {/* Inner glow */}
                  <circle
                    cx="100"
                    cy="70"
                    r="25"
                    fill={`rgba(255, 255, 255, ${lightbulbBrightness / 200})`}
                    className="transition-all duration-1000"
                  />

                  {/* Filament lines */}
                  <g
                    stroke="#fbbf24"
                    strokeWidth="2"
                    opacity={lightbulbBrightness / 100}
                    className="transition-all duration-1000"
                  >
                    <path d="M85 60 Q100 65 115 60" fill="none" />
                    <path d="M85 70 Q100 75 115 70" fill="none" />
                    <path d="M85 80 Q100 85 115 80" fill="none" />
                  </g>
                </svg>

                {/* Outer glow effect */}
                <div
                  className="absolute inset-0 rounded-full transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle, rgba(251, 191, 36, ${
                      lightbulbBrightness / 400
                    }) 0%, transparent 70%)`,
                    filter: `blur(${lightbulbBrightness / 10}px)`,
                  }}
                />
              </div>

              {/* Progress indicators around lightbulb */}
              <div className="absolute inset-0">
                {steps.map((step, index) => {
                  const angle = index * 72 - 90; // 360/5 = 72 degrees apart, -90 to start at top
                  const radius = 160;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute w-16 h-16 flex items-center justify-center rounded-full border-2 transition-all duration-500 cursor-pointer"
                      style={{
                        left: `calc(50% + ${x}px - 2rem)`,
                        top: `calc(50% + ${y}px - 2rem)`,
                        backgroundColor:
                          index <= activeStep ? "#10b981" : "#374151",
                        borderColor:
                          index <= activeStep ? "#10b981" : "#6b7280",
                        transform:
                          index === activeStep ? "scale(1.2)" : "scale(1)",
                        boxShadow:
                          index === activeStep
                            ? "0 0 20px rgba(16, 185, 129, 0.5)"
                            : "none",
                      }}
                      onClick={() => setActiveStep(index)}
                    >
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step Details */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-2xl`}
                >
                  {steps[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-green-400 font-medium">
                    {steps[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-full transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400">
              <span>
                Step {activeStep + 1} of {steps.length}
              </span>
              <span>
                {Math.round(((activeStep + 1) / steps.length) * 100)}% Complete
              </span>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3 pt-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep
                      ? "bg-green-400 scale-125"
                      : index < activeStep
                      ? "bg-green-600"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DevelopmentProcess;
