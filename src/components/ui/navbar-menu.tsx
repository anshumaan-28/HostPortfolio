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
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const getDropdownPosition = () => {
    // On mobile, Portfolio and Connect (the first and last items) need special positioning
    if (item === "Portfolio") {
      return "absolute top-[calc(100%_+_1.2rem)] left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 pt-4 z-50";
    }
    if (item === "Connect") {
      return "absolute top-[calc(100%_+_1.2rem)] right-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 pt-4 z-50";
    }
    // For middle items (Services, Blog), use center alignment
    return "absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50";
  };

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-blue-400 transition-colors duration-300"
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
            <div className={getDropdownPosition()}>
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-[#111111] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl max-w-[90vw] sm:max-w-none"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 max-w-[85vw] sm:max-w-none"
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
      className="relative rounded-full border border-white/[0.2] bg-black/50 backdrop-blur-md shadow-xl flex justify-center space-x-3 sm:space-x-6 px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
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
