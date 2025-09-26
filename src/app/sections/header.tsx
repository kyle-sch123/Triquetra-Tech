"use client";
import Image from "next/image";
import Logo2 from "@/app/assets/images/Untitled_design-removebg-preview.png";
import React, { useState } from "react";
import Link from "next/link";

export const Headers = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-10 backdrop-blur-xs mt-0 pt-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* First div - Logo and Business Name */}
          <div className="flex-col items-center">
            <div className="flex flex-col items-center">
              <Link href="/">
                <Image
                  src={Logo2}
                  alt="Triquetra Technology's Logo"
                  className="w-13 h-auto rounded-lg brightness-105 contrast-0"
                />
              </Link>
              <p className=" mt-0.5  text-[10px] text-center font- bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent font-mono tracking-wide ">
                Triquetra Technologies
              </p>
            </div>
          </div>

          {/* Second div - Navigation Links (centered) */}
          <div className="hidden md:flex items-center space-x-7">
            <Link
              href="/#home"
              className="text-white/90 hover:text-white transition-colors duration-200 text-[17px] tracking-widest font-mono"
            >
              HOME
            </Link>
            <Link
              href="/#about-us"
              className="text-white/90 hover:text-white transition-colors duration-200 text-[17px] tracking-widest font-mono"
            >
              ABOUT
            </Link>
            <Link
              href="/#projects"
              className="text-white/90 hover:text-white transition-colors duration-200 text-[17px] tracking-widest font-mono"
            >
              PROJECTS
            </Link>
          </div>

          {/* Third div - Contact Button (hidden on small screens) */}
          <div className="hidden md:flex items-center">
            {/* <a href="mailto:learning@triquetratech.co.za?subject=Let's Connect - Project Inquiry&body=Hi, %0D%0A%0D%0AI'd love to discuss a potential project with you.%0D%0A%0D%0ABest regards"> */}
            <a href="/#contact">
              <div className="bg-[#1111] border border-white px-5 py-2 inline-flex items-center gap-4 rounded-sm">
                <div className="bg-white size-2.5 rounded-full relative">
                  <div className="bg-green-200 absolute inset-0 rounded-full animate-ping"></div>
                </div>
                <div className="text-[15px] font-instrument tracking-widest">
                  CONTACT
                </div>
              </div>
            </a>
          </div>

          {/* Mobile menu button - only visible on small screens */}
          <div className="md:hidden">
            <button
              className="text-white p-2"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Open mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
              <div className="absolute right-4 top-16 bg-[#181818] border border-white/10 rounded-lg shadow-lg py-4 px-6 flex flex-col items-end space-y-4 z-50 min-w-[180px]">
                <a
                  href="#home"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-[16px] tracking-widest font-mono"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#about-us"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-[16px] tracking-widest font-mono"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </a>
                <a
                  href="#projects"
                  className="text-white/90 hover:text-white transition-colors duration-200 text-[16px] tracking-widest font-mono"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PROJECTS
                </a>
                <a
                  href="mailto:learning@triquetratech.co.za?subject=Let's Connect - Project Inquiry&body=Hi, %0D%0A%0D%0AI'd love to discuss a potential project with you. Please contact me at: [your phone number]%0D%0A%0D%0ABest regards"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="bg-[#1111] border border-white px-5 py-2 inline-flex items-center gap-4 rounded-sm w-full">
                    <div className="bg-white size-2.5 rounded-full relative">
                      <div className="bg-white absolute inset-0 rounded-full animate-ping"></div>
                    </div>
                    <div className="text-[15px] font-instrument tracking-widest">
                      CONTACT
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
