"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProjectItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export default function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={cn("fixed top-3 sm:top-6 inset-x-0 max-w-full sm:max-w-2xl mx-auto z-50 px-4 sm:px-0", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Portfolio">
          <div className="flex flex-col space-y-3 text-sm min-w-[280px]">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Featured Projects</div>
            <ProjectItem
              title="Kiki Beauty"
              href="#projects"
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=60&h=40&fit=crop&crop=center"
              description="Modern e-commerce platform for beauty products"
            />
            <ProjectItem
              title="Studyffy"
              href="#projects"
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=60&h=40&fit=crop&crop=center"
              description="AI-powered study companion app"
            />
            <ProjectItem
              title="The Pihu Resort"
              href="#projects"
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=60&h=40&fit=crop&crop=center"
              description="Luxury resort booking website"
            />
            <ProjectItem
              title="Crop Prediction"
              href="#projects"
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=60&h=40&fit=crop&crop=center"
              description="ML application for agriculture"
            />
            <div className="border-t border-white/10 pt-3">
              <HoveredLink href="#projects">View All Projects →</HoveredLink>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-3 text-sm min-w-[250px]">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">What I Do</div>
            <HoveredLink href="#services" onClick={() => scrollToSection('services')}>
              Full-Stack Development
            </HoveredLink>
            <HoveredLink href="#services" onClick={() => scrollToSection('services')}>
              AI & Machine Learning
            </HoveredLink>
            <HoveredLink href="#services" onClick={() => scrollToSection('services')}>
              E-commerce Solutions
            </HoveredLink>
            <HoveredLink href="#services" onClick={() => scrollToSection('services')}>
              Mobile Development
            </HoveredLink>
            <HoveredLink href="#services" onClick={() => scrollToSection('services')}>
              DevOps & Cloud
            </HoveredLink>
            <HoveredLink href="#services" onClick={() => scrollToSection('services')}>
              Technical Consulting
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="flex flex-col space-y-3 text-sm min-w-[280px]">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Latest Posts</div>
            <HoveredLink href="/blog/structured-prompt-app-planning">
              Structured Prompt for App Planning
            </HoveredLink>
            <HoveredLink href="/blog/blog-sites-after-ai">
              Blog Sites After AI: Content & Data
            </HoveredLink>
            <HoveredLink href="/blog/ai-digital-marketing">
              AI Revolutionising Digital Marketing
            </HoveredLink>
            <HoveredLink href="/blog/wtf-is-perplexity">
              WTF is Perplexity.ai?
            </HoveredLink>
            <div className="border-t border-white/10 pt-3">
              <HoveredLink href="#blog" onClick={() => scrollToSection('blog')}>
                View All Posts →
              </HoveredLink>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Connect">
          <div className="flex flex-col space-y-4 text-sm min-w-[220px]">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Get In Touch</div>
            
            <div className="space-y-3">
              <a 
                href="mailto:anshumaan.sharma.vns@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <FiMail className="w-4 h-4" />
                <span>Email Me</span>
              </a>
              
              <a 
                href="https://github.com/anshumaan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/anshumaan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://twitter.com/anshumaan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <FiTwitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
            </div>

            <div className="border-t border-white/10 pt-3">
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('mailto:anshumaan.sharma.vns@gmail.com', '_blank');
                  }
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                Start a Project
              </button>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
