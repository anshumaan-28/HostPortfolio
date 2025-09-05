"use client";

import React, { useCallback, useRef, useState } from "react";
import Header from "@/components/Header";
import StatPanel from "@/components/StatPanel";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";
import Carousel from "@/components/Carousel";
// import Testimonials from "@/components/Testimonials";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export default function Home() {
  // State for form pre-filling
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Reference to the connect section for scrolling
  const connectSectionRef = useRef<HTMLDivElement>(null);

  const handleSocialClick = useCallback((url: string): void => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const handleConnectClick = useCallback((): void => {
    // Open email client or contact form
    if (typeof window !== 'undefined') {
      window.open('mailto:mail@anshumaan.me?subject=Let\'s Connect!', '_blank');
    }
  }, []);

  const handleConnectKeyDown = useCallback((event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleConnectClick();
    }
  }, [handleConnectClick]);

  const handleResumeClick = useCallback((): void => {
    // Trigger resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume file to the public folder
    link.download = 'Anshumaan_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleResumeKeyDown = useCallback((event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleResumeClick();
    }
  }, [handleResumeClick]);
  
  // Handle starting a project from the Carousel
  const handleStartProject = useCallback((serviceInfo: string): void => {
    // Set the message in the contact form
    setFormState(prev => ({
      ...prev,
      message: serviceInfo
    }));
    
    // Scroll to the contact form
    if (connectSectionRef.current) {
      connectSectionRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  }, []);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/anshumaan-28", icon: FiGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/anshumaansharma28/", icon: FiLinkedin },
    { name: "Email", url: "mailto:mail@anshumaan.me", icon: FiMail },
    { name: "Twitter", url: "https://x.com/anshumaan_28", icon: FiTwitter }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <div id="home" className="min-h-screen pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center items-center md:items-start px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16 xl:px-26 xl:py-20 order-2 lg:order-1">
            <div className="w-full max-w-md space-y-4 sm:space-y-6 text-center md:text-left">
              {/* Header Section */}
              <div className="space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-300 font-medium">Available for work</span>
                </div>
                
                <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block text-white">Anshumaan</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Sharma
                  </span>
                </h1>
                
                <div className="flex items-center gap-2">
                  <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                  <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-gray-300">
                    Software Engineer
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                  I build websites that work{" "}
                  <span className="text-white font-medium">smoothly</span>, look{" "}
                  <span className="text-white font-medium">clean</span>, and occasionally make people say,{" "}
                  <span className="text-blue-400 font-medium">&ldquo;Nice.&rdquo;</span>
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>✨</span>
                  <span>Crafting digital experiences since 2020</span>
                </div>
              </div>

              {/* Mobile Social Links (only visible on mobile) */}
              <div className="flex md:hidden justify-center gap-4 pt-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleSocialClick(link.url)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors duration-300"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-3 w-full">
                <button
                  className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 min-h-[44px] w-full sm:w-auto"
                  onClick={handleConnectClick}
                  onKeyDown={handleConnectKeyDown}
                  type="button"
                  tabIndex={0}
                  aria-label="Let&apos;s connect and start a conversation"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Let&apos;s Connect</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>

                <button
                  className="group px-6 py-3 bg-white/5 border border-white/20 rounded-lg font-medium text-sm text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 backdrop-blur-sm min-h-[44px] w-full sm:w-auto"
                  onClick={handleResumeClick}
                  onKeyDown={handleResumeKeyDown}
                  type="button"
                  tabIndex={0}
                  aria-label="Download my resume"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Resume</span>
                  </span>
                </button>
              </div>
              
              {/* Mobile Stats Panel (only visible on mobile) */}
              <div className="md:hidden mt-8">
                <StatPanel className="w-full max-w-none" />
              </div>
            </div>
          </div>

          {/* Right Column - Stats Panel (hidden on mobile) */}
          <div className="hidden md:flex items-center justify-center p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
            <div className="w-full max-w-[300px]">
              <StatPanel className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>
      
      {/* Technologies Section */}
      <Technologies />
      
      {/* Services Carousel */}
      <div id="services">
        <Carousel onStartProject={handleStartProject} />
      </div>
      
      {/* Blog Section */}
      <div id="blog">
        <Blog />
      </div>
      
      {/* Testimonials Section */}
      {/* <Testimonials /> */}
      
      {/* Connect Section */}
      <div id="connect" ref={connectSectionRef}>
        <ConnectSection prefilledMessage={formState.message} />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
