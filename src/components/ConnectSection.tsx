"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { 
  SiGithub, SiInstagram, SiLinkedin, SiMedium, SiPinterest, SiX 
} from "react-icons/si";
import { FiSend, FiArrowRight, FiArrowLeft, FiCheck, FiMail, FiTwitter } from "react-icons/fi";

// Social media links with modern styling
const socialLinks = [
  {
    name: "GitHub",
    icon: <SiGithub size={24} />,
    url: "https://github.com/anshumaan",
    color: "bg-gradient-to-br from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600",
    textColor: "text-white",
    username: "anshumaan",
    description: "Code repositories & projects"
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin size={24} />,
    url: "https://linkedin.com/in/anshumaan",
    color: "bg-gradient-to-br from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500",
    textColor: "text-white",
    username: "anshumaan",
    description: "Professional network"
  },
  {
    name: "Twitter",
    icon: <SiX size={24} />,
    url: "https://twitter.com/anshumaan",
    color: "bg-gradient-to-br from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700",
    textColor: "text-white",
    username: "@anshumaan",
    description: "Latest thoughts & updates"
  },
  {
    name: "Medium",
    icon: <SiMedium size={24} />,
    url: "mailto:anshumaan.sharma.vns@gmail.com",
    color: "bg-gradient-to-br from-neutral-300 to-neutral-200 hover:from-neutral-200 hover:to-neutral-100",
    textColor: "text-black",
    username: "axuman",
    description: "Direct communication"
  },
   {
    name: "Instagram",
    icon: <SiInstagram size={24} />,
    url: "mailto:anshumaan.sharma.vns@gmail.com",
    color: "bg-gradient-to-br from-pink-800 to-pink-600 hover:from-pink-600 hover:to-pink-500",
    textColor: "text-white",
    username: "axuman",
    description: "Direct communication"
  },
   {
    name: "Pinterest",
    icon: <SiPinterest size={24} />,
    url: "mailto:anshumaan.sharma.vns@gmail.com",
    color: "bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-400",
    textColor: "text-white",
    username: "axuman",
    description: "Direct communication"
  },
  
];

export default function ConnectSection() {
  const formRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'social' | 'form'>('social');
  
  useEffect(() => {
    if (isFormInView) {
      controls.start('visible');
    }
  }, [isFormInView, controls]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header with animated gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            animate={{ 
              background: [
                'linear-gradient(90deg, #0072ff 0%, #00c6ff 100%)',
                'linear-gradient(90deg, #8a2387 0%, #e94057 50%, #f27121 100%)',
                'linear-gradient(90deg, #0072ff 0%, #00c6ff 100%)'
              ]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "mirror" 
            }}
            className="absolute inset-0 opacity-10 rounded-3xl"
          />
          <div className="relative z-10 py-16 px-4">
            
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-white">
                Let's Connect
              </span>
            </motion.h2>
            
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent mx-auto mb-6"></div>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              I'm always interested in new opportunities, collaborations, or just a friendly chat about technology and innovation.
            </motion.p>
          </div>
        </motion.div>

        {/* Tabs for switching between social and contact form */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex justify-center gap-4 mb-10">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab('social')}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                activeTab === 'social' 
                  ? 'bg-gradient-to-br from-neutral-800 to-neutral-700' 
                  : 'bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              Social Networks
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab('form')}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                activeTab === 'form' 
                  ? 'bg-gradient-to-br from-neutral-800 to-neutral-700' 
                  : 'bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              Contact Form
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'social' ? (
              /* Social Media Grid with beautiful cards */
              <motion.div
                key="social"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={index}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`${link.color} ${link.textColor} rounded-2xl overflow-hidden shadow-xl border border-white/10`}
                  >
                    <div className="h-full p-6 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          {link.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{link.name}</h3>
                          <p className="text-xs opacity-90">{link.description}</p>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <p className="text-sm opacity-90 mb-4 font-mono">
                          {link.username}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs opacity-75">
                            Click to connect
                          </span>
                          <motion.div 
                            whileHover={{ x: 3 }} 
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                          >
                            <FiArrowRight size={14} />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            ) : (
              /* Contact Form with modern styling */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 backdrop-blur-sm max-w-2xl mx-auto"
                ref={formRef}
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 mb-6 rounded-full bg-green-500 flex items-center justify-center">
                      <FiCheck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Message Sent!</h3>
                    <p className="text-gray-400 mb-8 max-w-md">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <motion.button 
                      onClick={() => setIsSubmitted(false)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors border border-white/20"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0 * 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 * 0.1 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2 * 0.1 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                        placeholder="I'm interested in discussing a potential collaboration..."
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 3 * 0.1 }}
                      className="pt-2"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-medium shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            Sending message...
                            <span className="inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                          </>
                        ) : (
                          <>
                            Send Message
                            <FiSend className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
