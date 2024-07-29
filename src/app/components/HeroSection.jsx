"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 bg-[#121212]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Wisdom",
                1000,
                "Software Engineer",
                1000,
                "Mobile Developer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I am a driven software engineer and health data analyst passionate about solving complex problems. My experience and proficiency in programming languages like Java, Python, and C++, along with my commitment to code quality and project deadlines, make me a valuable asset to any innovative organization. Additionally, I have expertise in health information management and coding, with strong attention to detail and organizational skills. Knowledgeable administrative professional with expertise in medical records management, coding, and data analysis. Proven ability to review and document clinical data, ensuring accuracy and compliance. Well-versed in ICD-11 and other coding systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="#contact"
              className="inline-block px-1 py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 self-center mt-4 lg:mt-0"
        >
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mx-auto">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="rounded-full absolute inset-0 w-full h-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
