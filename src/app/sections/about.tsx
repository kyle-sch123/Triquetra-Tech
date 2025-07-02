"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import PlaceholderImage from "@/app/assets/images/placeholder.jpg";
import PlaceholderImage2 from "@/app/assets/images/istockphoto-1197547448-1024x1024.jpg";
import Mission from "@/app/assets/images/mission (1).jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="relative text-white py-20 px-4 md:px-8 lg:px-0"
    >
      <div className="max-w-4xl lg:max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-green-400 text-sm md:text-base font-semibold tracking-wider mb-2">
            NICE TO MEET YOU
          </h3>
          <h1 className="text-2xl md:text-3xl lg:text-[45px] font-medium font-roboto mb-2.5 tracking-wider">
            About Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-roboto leading-relaxed max-w-3xl mx-auto mb-8">
            Triquetra Tech's company and culture are a lot like our product.
            They're crafted, not cobbled, for a delightful experience.
          </p>
        </div>
        {/*Mission*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w mx-auto ">
            <div className="grid md:grid-cols-2 gap-5 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="w-auto h-100 rounded-lg shadow-2xl flex items-center justify-center ">
                  <Image
                    src={Mission}
                    alt="suck my nuts"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-[25px] font-bold text-white mb-1 text-left font-roboto-mono">
                  Our Mission
                </h2>
                <p className="font-roboto text-gray-200/90 text-[16px] tracking-wider">
                  To empower organizations through innovative digital learning
                  and compliance solutions that drive growth, performance, and
                  long-term impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/*Story - text first, image second*/}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w mx-auto">
            <div className="grid md:grid-cols-2 gap-5 items-center">
              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-[25px] font-bold text-white mb-1 text-left font-roboto-mono">
                  Our Story
                </h2>
                <p className="font-roboto text-gray-200/90 text-[16px] tracking-wider">
                  Triquetra Tech was founded in 2017 by a group of passionate
                  South African technologists and learning specialists who saw
                  an opportunity to modernize the way businesses train and
                  transform their workforce. What began as a vision to make
                  learning more engaging and effective quickly grew into a
                  full-scale IT solutions company, serving clients across
                  multiple industries with tailored e-learning, automation, and
                  digital platforms.
                </p>
                <p className="font-roboto text-gray-200/90 text-[16px] tracking-wider mt-2">
                  Our story is one of growth, innovation, and a relentless
                  commitment to helping businesses thrive in a rapidly changing
                  world.
                </p>
              </div>
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">
                <div className="w-auto h-100 shadow-2xl flex items-center justify-center">
                  <Image
                    src={PlaceholderImage2}
                    alt="suck my nuts"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/*What we do section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-[25px] font-bold text-white -mb-1 text-left font-roboto-mono">
                What We Do
              </h2>
              <p className="text-[20px] text-gray-300 leading-relaxed mb-4 text-left font-roboto">
                Triquetra Tech offers three core solution pillars:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-400 text-left">
                  <h4 className="text-green-400 font-semibold mb-2">
                    Learning Solutions:
                  </h4>
                  <p className="text-gray-200 text-sm">
                    We specialize in creating impactful e-learning experiences
                    that equip teams with the knowledge, skills, and confidence
                    they need to excel.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-400 text-left">
                  <h4 className="text-green-400 font-semibold mb-2">
                    Excellence Solutions:
                  </h4>
                  <p className="text-gray-200 text-sm">
                    We deliver high-quality, accessible e-learning content that
                    inspires growth, sparks curiosity, and cultivates lifelong
                    learning across industries.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-400 text-left">
                  <h4 className="text-green-400 font-semibold mb-2">
                    Compliance Solutions:
                  </h4>
                  <p className="text-gray-200 text-sm">
                    We develop expertly crafted e-learning programs that
                    simplify complexity and strengthen compliance—because when
                    compliance becomes culture, businesses thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        &nbsp; &nbsp;
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-left">
            <h1 className="font-roboto-mono font-bold text-[25px] mb-2 mt-5">
              Why "Triquetra"?
            </h1>
            <p className="font-roboto text-gray-200/90 text-[16px] tracking-wider">
              The name Triquetra, derived from an ancient symbol meaning
              "threefold," reflects our commitment to balance and unity: Enable.
              Empower. Elevate. We believe the intersection of people, process,
              and technology creates long-term success — and we're here to build
              that future with our clients.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="text-left mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="font-roboto-mono font-bold text-[25px] mb-2 mt-5">
            Looking Ahead
          </h1>
          <p className="font-roboto text-gray-200/90 text-[16px] tracking-wider">
            Triquetra Tech was founded in 2017 by a group of passionate South
            African technologists and learning specialists who saw an
            opportunity to modernize the way businesses train and transform
            their workforce. What began as a vision to make learning more
            engaging and effective quickly grew into a full-scale IT solutions
            company, serving clients across multiple industries with tailored
            e-learning, automation, and digital platforms. Our story is one of
            growth, innovation, and a relentless commitment to helping
            businesses thrive in a rapidly changing world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
