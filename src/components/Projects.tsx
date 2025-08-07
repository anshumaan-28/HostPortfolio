"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiExternalLink, FiGithub, FiCalendar, FiTag } from "react-icons/fi";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "kiki-beauty",
    title: "Kiki Beauty",
    description: "A modern e-commerce platform for beauty products with advanced filtering, wishlist functionality, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
    tags: ["React", "Next.js", "Stripe", "MongoDB"],
    liveUrl: "https://kiki-beauty.vercel.app",
    githubUrl: "https://github.com/anshumaan/kiki-beauty",
    date: "Dec 2024",
    category: "E-commerce"
  },
  {
    id: "studyffy",
    title: "Studyffy",
    description: "AI-powered study companion that helps students organize notes, create flashcards, and track their learning progress effectively.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
    tags: ["TypeScript", "OpenAI", "PostgreSQL", "Prisma"],
    liveUrl: "https://studyffy.com",
    githubUrl: "https://github.com/anshumaan/studyffy",
    date: "Oct 2024",
    category: "EdTech"
  },
  {
    id: "pihu-resort",
    title: "The Pihu Resort",
    description: "Luxury resort booking website with virtual tours, real-time availability, and integrated payment system for seamless reservations.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop&crop=center",
    tags: ["Vue.js", "Node.js", "Express", "MySQL"],
    liveUrl: "https://pihu-resort.com",
    githubUrl: "https://github.com/anshumaan/pihu-resort",
    date: "Aug 2024",
    category: "Travel"
  },
  {
    id: "crop-prediction",
    title: "Crop Prediction",
    description: "Machine learning application that analyzes soil conditions, weather patterns, and historical data to predict optimal crop yields.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&crop=center",
    tags: ["Python", "TensorFlow", "Flask", "Pandas"],
    liveUrl: "https://crop-predict.vercel.app",
    githubUrl: "https://github.com/anshumaan/crop-prediction",
    date: "Jun 2024",
    category: "Machine Learning"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      className="w-full group/card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 sm:h-96 rounded-xl shadow-xl w-full flex flex-col justify-between p-4 sm:p-6 bg-cover bg-center",
          "border border-white/10 backdrop-blur-sm"
        )}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        {/* Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition duration-300 group-hover/card:from-black/90 group-hover/card:via-black/60 group-hover/card:to-black/30"></div>
        
        {/* Header */}
        <div className="flex flex-row items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300 font-medium">{project.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-400">{project.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-content z-10">
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white relative z-10 mb-2 sm:mb-3">
            {project.title}
          </h3>
          <p className="font-normal text-sm text-gray-200 relative z-10 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs text-gray-300 backdrop-blur-sm"
              >
                <FiTag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-lg text-xs text-blue-300 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm min-h-[32px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="w-3 h-3" />
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-300 hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm min-h-[32px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-3 h-3" />
                <span>Code</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-4">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300 font-medium">Portfolio</span>
          </div> */}
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">
            Featured Projects
          </h2>
          
          <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-transparent mx-auto mb-4"></div>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            A showcase of my recent work, from e-commerce platforms to AI-powered applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/anshumaan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 rounded-lg font-medium text-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm min-h-[44px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-4 h-4" />
            <span>View All Projects</span>
            <FiExternalLink className="w-3 h-3" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
