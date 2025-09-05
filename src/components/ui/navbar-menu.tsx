"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const isLastItem = item === "Connect"; // Special handling for the last item
  const isServices = item === "Services";
  const isBlog = item === "Blog";
  
  // Function to handle mobile scroll behavior for Services and Blog
  const handleMobileClick = () => {
    // Check if we're on mobile using a media query
    const isMobileView = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
    
    // For mobile: Services and Blog scroll to their sections
    if (isMobileView) {
      if (isServices) {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
        setActive(null); // Close dropdown
        return;
      }
      
      if (isBlog) {
        const blogSection = document.getElementById('blog');
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: 'smooth' });
        }
        setActive(null); // Close dropdown
        return;
      }
    }
    
    // Desktop behavior (unchanged) or for other menu items on mobile
    setActive(active === item ? null : item);
  };
  
  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      onClick={handleMobileClick}
      className="relative py-2 md:py-0"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base whitespace-nowrap px-2"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className={`absolute top-[calc(100%_+_1.2rem)] ${isLastItem ? 'md:right-0 right-0' : 'md:left-1/2 left-0'} transform ${isLastItem ? 'md:translate-x-0' : 'md:-translate-x-1/2'} translate-x-0 pt-4 z-50 ${(isServices || isBlog) ? 'md:block hidden' : ''}`}>
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-[#111111] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
                style={{
                  maxHeight: 'calc(80vh - 100px)',
                  overflowY: 'auto',
                  maxWidth: 'min(calc(100vw - 16px), 300px)'
                }}
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max max-w-[min(calc(100vw-16px),300px)] h-full p-3"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-white/[0.2] bg-black/50 backdrop-blur-md shadow-xl flex flex-wrap justify-center space-x-3 md:space-x-6 px-4 md:px-8 py-3 md:py-4"
    >
      {children}
    </nav>
  );
};

export const ProjectItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex space-x-3 hover:bg-white/5 p-2 rounded-lg transition-colors duration-300"
    >
      <img
        src={src}
        width={60}
        height={40}
        alt={title}
        className="shrink-0 rounded-md shadow-lg"
      />
      <div>
        <h4 className="text-sm font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-gray-300 text-xs max-w-[8rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm py-1"
    >
      {children}
    </a>
  );
};
