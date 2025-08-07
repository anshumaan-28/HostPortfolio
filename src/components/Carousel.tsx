"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FiCode, FiLayers, FiZap, FiTrendingUp, FiUsers, FiGlobe } from "react-icons/fi";

const DeveloperContent = ({ title, description, features, techStack }: {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <FiZap className="w-5 h-5" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
              <FiLayers className="w-5 h-5" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-sm text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <FiCode className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Ready to Collaborate?</h4>
            <p className="text-gray-400 text-sm">Let's build something amazing together</p>
          </div>
        </div>
        <motion.button
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-white hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start a Project
        </motion.button>
      </div>
    </div>
  );
};

export default function DeveloperCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

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
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-4">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300 font-medium">Services & Expertise</span>
          </div> */}
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white">
            What I Can Build for You
          </h2>
          
          <div className="w-12 h-px bg-gradient-to-r from-green-400 to-transparent mx-auto mb-4"></div>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            From concept to deployment, I create digital solutions that drive results
          </p>
        </motion.div>

        <div className="w-full h-full">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    category: "Web Development",
    title: "Full-Stack Web Applications",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center",
    content: (
      <DeveloperContent
        title="Modern Web Applications"
        description="I build scalable, performant web applications using cutting-edge technologies. From responsive frontends to robust backends, I create solutions that grow with your business."
        features={[
          "Responsive design for all devices",
          "SEO-optimized architecture",
          "Real-time features and APIs",
          "Database design and optimization",
          "Authentication and security"
        ]}
        techStack={["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"]}
      />
    ),
  },
  {
    category: "AI & Machine Learning",
    title: "AI-Powered Solutions",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
    content: (
      <DeveloperContent
        title="Intelligent Applications"
        description="Harness the power of AI to automate processes, gain insights, and create innovative user experiences. I integrate machine learning models and AI APIs into practical business solutions."
        features={[
          "Natural language processing",
          "Computer vision applications",
          "Predictive analytics models",
          "Chatbots and virtual assistants",
          "Data analysis and visualization"
        ]}
        techStack={["Python", "TensorFlow", "OpenAI API", "Langchain", "Pandas"]}
      />
    ),
  },
  {
    category: "E-commerce",
    title: "Online Store Development",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    content: (
      <DeveloperContent
        title="Complete E-commerce Solutions"
        description="From product catalogs to payment processing, I build comprehensive e-commerce platforms that convert visitors into customers and streamline your business operations."
        features={[
          "Product management systems",
          "Secure payment integration",
          "Inventory tracking",
          "Order management",
          "Analytics and reporting"
        ]}
        techStack={["Next.js", "Stripe", "MongoDB", "Vercel", "Tailwind CSS"]}
      />
    ),
  },
  {
    category: "Mobile Development",
    title: "Cross-Platform Mobile Apps",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
    content: (
      <DeveloperContent
        title="Native-Quality Mobile Apps"
        description="Build once, deploy everywhere. I create mobile applications that work seamlessly across iOS and Android platforms while maintaining native performance and user experience."
        features={[
          "Cross-platform compatibility",
          "Native performance optimization",
          "Offline functionality",
          "Push notifications",
          "App store deployment"
        ]}
        techStack={["React Native", "Expo", "Firebase", "Redux", "TypeScript"]}
      />
    ),
  },
  {
    category: "DevOps & Deployment",
    title: "Cloud Infrastructure & CI/CD",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
    content: (
      <DeveloperContent
        title="Scalable Cloud Solutions"
        description="Set up robust, scalable infrastructure that grows with your needs. I implement CI/CD pipelines, monitoring systems, and deployment strategies that ensure reliability."
        features={[
          "Automated deployment pipelines",
          "Cloud infrastructure setup",
          "Performance monitoring",
          "Security implementations",
          "Backup and disaster recovery"
        ]}
        techStack={["Docker", "AWS", "Vercel", "GitHub Actions", "Terraform"]}
      />
    ),
  },
  {
    category: "Consulting",
    title: "Technical Consulting & Strategy",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
    content: (
      <DeveloperContent
        title="Strategic Technology Guidance"
        description="Get expert advice on technology decisions, architecture choices, and development strategies. I help businesses make informed decisions about their technical roadmap."
        features={[
          "Technology stack recommendations",
          "Architecture design and review",
          "Code audits and optimization",
          "Team training and mentoring",
          "Project planning and estimation"
        ]}
        techStack={["System Design", "Code Review", "Mentoring", "Planning", "Best Practices"]}
      />
    ),
  },
];
