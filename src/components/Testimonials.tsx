"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Anshumaan delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise transformed our business completely.",
      name: "Sarah Chen",
      designation: "Founder at Kiki Beauty",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b372?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The AI-powered study platform he built for us is revolutionary. Students love the intuitive interface and the smart features have significantly improved learning outcomes.",
      name: "Michael Rodriguez",
      designation: "CEO at Studyfy",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Our resort booking system has been flawless since launch. Anshumaan's full-stack development skills and project management made the entire process seamless.",
      name: "Emily Watson",
      designation: "Operations Director at The Pihu Resort",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The machine learning model for crop prediction has been a game-changer for our agricultural research. Outstanding technical implementation and ongoing support.",
      name: "Dr. James Kim",
      designation: "Research Lead at AgriTech Solutions",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Professional, reliable, and incredibly skilled. Anshumaan's development work has scaled beautifully with our growing user base. Highly recommend for any serious project.",
      name: "Lisa Thompson",
      designation: "CTO at TechFlow Ventures",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-4">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300 font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          
          <div className="w-12 h-px bg-gradient-to-r from-yellow-400 to-transparent mx-auto mb-4"></div>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Real feedback from businesses I&apos;ve helped grow through technology
          </p>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
