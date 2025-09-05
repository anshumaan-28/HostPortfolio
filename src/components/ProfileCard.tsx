"use client";

import React, { useRef, useCallback, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface ProfileCardProps {
  avatarUrl?: string;
  className?: string;
  enableTilt?: boolean;
  socialLinks?: SocialLink[];
  onSocialClick?: (url: string) => void;
}

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/anshumaan-28", icon: FiGithub },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anshumaansharma28/", icon: FiLinkedin },
  { name: "Twitter", url: "https://x.com/anshumaan_28", icon: FiTwitter },
  { name: "Email", url: "mailto:mail@anshumaan.me", icon: FiMail },
];

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
  className = "",
  enableTilt = true,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  onSocialClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Framer Motion values for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  
  // Transform mouse position to gradient position and shine offset
  const gradientX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const gradientY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);
  const shineX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (event.clientX - centerX) / (rect.width / 2);
    const y = (event.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  }, [enableTilt, mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleSocialClick = useCallback((url: string) => {
    if (onSocialClick) {
      onSocialClick(url);
    } else if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, [onSocialClick]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent, url: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSocialClick(url);
    }
  }, [handleSocialClick]);

  return (
    <div className={`perspective-1000 ${className}`.trim()}>
      <motion.div
        ref={cardRef}
        className="relative w-72 h-96 md:w-80 md:h-[420px] mx-auto cursor-pointer"
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow Effect Background */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 blur-xl"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 0.8,
            background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main Card */}
        <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Animated Gradient Overlay */}
          <motion.div
            className="absolute inset-0 opacity-0"
            animate={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)`,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Holographic Shine Effect */}
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: `linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 100%)`,
              x: shineX,
              y: shineY,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-48 h-48 md:w-56 md:h-56"
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.9 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={avatarUrl}
                alt="Profile Avatar"
                fill
                className="object-cover object-center rounded-2xl"
                priority
              />
              
              {/* Avatar Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)`,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

         

          {/* Social Links */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.button
                key={link.name}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white transition-colors duration-200"
                tabIndex={0}
                aria-label={`Visit ${link.name}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                onClick={() => handleSocialClick(link.url)}
                onKeyDown={(e) => handleKeyDown(e, link.url)}
              >
                <link.icon size={18} />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
