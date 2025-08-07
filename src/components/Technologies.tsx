"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
  {
    name: "React",
    icon: (
      <SiReact className="w-12 h-12 text-blue-500 transition-all duration-300 group-hover:rotate-180" />
    ),
    animation: "spin",
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="w-12 h-12 text-white transition-all duration-300 group-hover:scale-110" />
    ),
    animation: "pulse",
  },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript className="w-12 h-12 text-yellow-400 transition-all duration-300 group-hover:rotate-12" />
    ),
    animation: "bounce",
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript className="w-12 h-12 text-blue-600 transition-all duration-300 group-hover:-rotate-12" />
    ),
    animation: "bounce",
  },
  {
    name: "Node.js",
    icon: (
      <SiNodedotjs className="w-12 h-12 text-green-600 transition-all duration-300 group-hover:scale-110" />
    ),
    animation: "pulse",
  },
  {
    name: "Express",
    icon: (
      <SiExpress className="w-12 h-12 text-gray-300 transition-all duration-300 group-hover:rotate-180" />
    ),
    animation: "spin",
  },
  {
    name: "Python",
    icon: (
      <SiPython className="w-12 h-12 text-yellow-500 transition-all duration-300 group-hover:rotate-12" />
    ),
    animation: "bounce",
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb className="w-12 h-12 text-green-500 transition-all duration-300 group-hover:scale-110" />
    ),
    animation: "pulse",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss className="w-12 h-12 text-cyan-500 transition-all duration-300 group-hover:scale-110" />
    ),
    animation: "pulse",
  },
  {
    name: "Java",
    icon: (
      <FaJava className="w-12 h-12 text-red-500 transition-all duration-300 group-hover:rotate-12" />
    ),
    animation: "bounce",
  },
  {
    name: "Git",
    icon: (
      <SiGit className="w-12 h-12 text-orange-500 transition-all duration-300 group-hover:rotate-180" />
    ),
    animation: "spin",
  },
  {
    name: "Docker",
    icon: (
      <SiDocker className="w-12 h-12 text-blue-400 transition-all duration-300 group-hover:scale-110" />
    ),
    animation: "pulse",
  },
  {
    name: "Vercel",
    icon: (
      <SiVercel className="w-12 h-12 text-white transition-all duration-300 group-hover:rotate-12" />
    ),
    animation: "bounce",
  },
];

const Technologies: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-4">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300 font-medium">Tech Stack</span>
          </div> */}
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white">
            Technologies
          </h2>
          
          <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent mx-auto mb-4"></div>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>
      </div>

      <div className="w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
        
        <Marquee speed={40} gradient={false} className="py-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center mx-8"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: index * 0.1 },
              }}
            >
              <motion.div
                className="mb-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                animate={
                  tech.animation === "spin"
                    ? {
                        rotate: [0, 360],
                      }
                    : tech.animation === "pulse"
                    ? {
                        scale: [1, 1.05, 1],
                      }
                    : tech.animation === "bounce"
                    ? {
                        y: [0, -5, 0],
                      }
                    : {}
                }
                transition={{
                  duration: tech.animation === "spin" ? 8 : 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {tech.icon}
              </motion.div>
              <motion.span
                className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Technologies;
