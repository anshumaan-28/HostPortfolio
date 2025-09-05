"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiExternalLink } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anshumaan-sharma-a36883286/",
      icon: FaLinkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/anshumaan-28",
      icon: FaGithub,
      color: "hover:text-gray-300"
    },
    {
      name: "Twitter",
      url: "https://x.com/anshumaan_28",
      icon: FaTwitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/anshumaansharma_/",
      icon: FaInstagram,
      color: "hover:text-pink-400"
    }
  ];

  const quickLinks = [
    { name: "About", url: "https://anshumaansharma.medium.com/about-me-e70637fba7c9" },
    { name: "Projects", url: "#projects" },
    { name: "Blog", url: "#blog" },
    { name: "Contact", url: "#contact" }
  ];

  const services = [
    "Web Development",
    "AI/ML Solutions",
    "E-commerce Development",
    "Technical Consulting"
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Anshumaan Sharma</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Full-stack developer and AI enthusiast with 3+ years of experience helping businesses build powerful web applications, e-commerce platforms, and automated solutions. I specialize in turning ideas into scalable, high-performing digital products that don't just look good but deliver measurable results. Whether it's creating seamless user experiences, streamlining workflows with AI, or developing custom solutions tailored to your needs, I'm here to help bring your vision to life.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FiMail className="w-4 h-4" />
                <a 
                  href="mailto:contact@anshumaan.me" 
                  className="hover:text-white transition-colors"
                >
                  contact@anshumaan.me
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FiMapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    {link.name}
                    {link.url.startsWith("http") && (
                      <FiExternalLink className="w-3 h-3" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-gray-500 text-sm">
              © {currentYear} Anshumaan Sharma. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
