"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatPanelProps {
  className?: string;
}

const stats = [
  {
    value: "15+",
    label: "Projects Delivered",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    value: "3+",
    label: "Years Experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "24hr",
    label: "Response Time",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "1 Year",
    label: "Free Bug Fixes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const StatPanel: React.FC<StatPanelProps> = ({ className = "" }) => {
  return (
    <motion.div
      className={`flex flex-col bg-gradient-to-br from-neutral-900/90 to-neutral-800/70 backdrop-blur-sm border border-white/10 rounded-xl ${className}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="px-5 py-4">
        {/* Header */}
        <div className="mb-3 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300 font-medium">Professional Standards</span>
          </div>
          <h3 className="text-base font-semibold text-white mt-1 text-center">What to expect</h3>
          <div className="w-10 h-px bg-gradient-to-r from-blue-400 to-transparent mt-1 mx-auto"></div>
        </div>

        {/* Stats list */}
        <div className="space-y-3.5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-md flex items-center justify-center text-blue-400">
                {stat.icon}
              </div>
              <div className="flex flex-col text-center">
                <div className="text-base font-bold text-white leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 leading-tight mt-0.5">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-3 pt-2 border-t border-white/5">
          <p className="text-xs text-gray-400 text-center">
            Committed to quality and communication
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatPanel;
