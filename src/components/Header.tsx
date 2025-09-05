"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProjectItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export default function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 sm:top-3" />
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
    
    // Close dropdown on mobile after clicking
    setActive(null);
  };

  return (
    <div
      className={cn("fixed top-2 sm:top-6 inset-x-0 max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto z-50 px-2 sm:px-4", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Portfolio">
          <div className="flex flex-col space-y-3 text-sm min-w-[280px]">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Featured Projects</div>
            <ProjectItem
              title="Kiki Beauty"
              href="https://kikibeauty.in/"
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=60&h=40&fit=crop&crop=center"
              description="Modern e-commerce platform for beauty products"
            />
            <ProjectItem
              title="Studyffy"
              href="https://studyffy.com/"
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=60&h=40&fit=crop&crop=center"
              description="AI-powered study companion app"
            />
            <ProjectItem
              title="EduVeda"
              href="https://eduveda.academy/"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=60&h=40&fit=crop&crop=center"
              description="EdTech platform for Digital Marketing & Data Science"
            />
            <ProjectItem
              title="Crop Prediction"
              href="https://cropprediction.anshumaan.me/"
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=60&h=40&fit=crop&crop=center"
              description="ML application for agriculture"
            />
            <div className="border-t border-white/10 pt-3">
              <HoveredLink href="#projects" onClick={() => scrollToSection('projects')}>View All Projects →</HoveredLink>
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
            <HoveredLink href="https://anshumaansharma.medium.com/structured-prompt-for-generating-app-planning-conversations-c63551405722" target="_blank">
              Structured Prompt for App Planning
            </HoveredLink>
            <HoveredLink href="https://anshumaansharma.medium.com/blog-sites-after-ai-how-your-content-became-someone-elses-data-2f57e195ac59" target="_blank">
              Blog Sites After AI: Content & Data
            </HoveredLink>
            <HoveredLink href="https://anshumaansharma.medium.com/how-ai-is-revolutionising-digital-marketing-opportunities-risks-and-seo-implications-442d614cf144" target="_blank">
              AI Revolutionising Digital Marketing
            </HoveredLink>
            <HoveredLink href="https://anshumaansharma.medium.com/wtf-is-perplexity-ai-830ef31838a0" target="_blank">
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
          <div className="flex flex-col space-y-4 text-sm min-w-[220px] max-w-[90vw]">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Get In Touch</div>
            
            {/* Mobile-optimized Connect layout */}
            <div className="sm:hidden grid grid-cols-2 gap-2">
              <a 
                href="mailto:mail@anshumaan.me"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5 text-xs"
              >
                <FiMail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              
              <a 
                href="https://github.com/anshumaan-28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5 text-xs"
              >
                <FiGithub className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/anshumaansharma28/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5 text-xs"
              >
                <FiLinkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://x.com/anshumaan_28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5 text-xs"
              >
                <FiTwitter className="w-3.5 h-3.5" />
                <span>Twitter</span>
              </a>
            </div>
            
            {/* Desktop Connect layout */}
            <div className="hidden sm:block space-y-3">
              <a 
                href="mailto:mail@anshumaan.me"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <FiMail className="w-4 h-4" />
                <span>Email Me</span>
              </a>
              
              <a 
                href="https://github.com/anshumaan-28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/anshumaansharma28/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://x.com/anshumaan_28"
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
                    window.open('mailto:mail@anshumaan.me', '_blank');
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
