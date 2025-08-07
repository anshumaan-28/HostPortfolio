"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiArrowRight } from "react-icons/fi";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  date: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "structured-prompt-app-planning",
    title: "Structured Prompt for Generating App Planning Conversations",
    excerpt: "Learn how to create effective prompts that guide AI in generating comprehensive app planning discussions and strategic insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    author: "Anshumaan Sharma",
    readTime: "5 min read",
    date: "Jan 15, 2025",
    category: "AI & Productivity",
    slug: "structured-prompt-app-planning"
  },
  {
    id: "blog-sites-after-ai",
    title: "Blog Sites After AI: How Your Content Became Someone Else's Data",
    excerpt: "Exploring the impact of AI on content creation, data ownership, and the future of blogging in an AI-driven world.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
    author: "Anshumaan Sharma",
    readTime: "8 min read",
    date: "Jan 10, 2025",
    category: "AI & Content",
    slug: "blog-sites-after-ai"
  },
  {
    id: "ai-digital-marketing",
    title: "How AI is Revolutionising Digital Marketing: Opportunities, Risks, and SEO Implications",
    excerpt: "A comprehensive look at how artificial intelligence is transforming digital marketing strategies and what it means for SEO.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    author: "Anshumaan Sharma",
    readTime: "7 min read",
    date: "Jan 5, 2025",
    category: "Digital Marketing",
    slug: "ai-digital-marketing"
  },
  {
    id: "wtf-is-perplexity",
    title: "WTF is Perplexity.ai?",
    excerpt: "An honest breakdown of Perplexity.ai - what it does, how it works, and whether it's worth the hype in the AI search space.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
    author: "Anshumaan Sharma",
    readTime: "4 min read",
    date: "Dec 28, 2024",
    category: "AI Tools",
    slug: "wtf-is-perplexity"
  }
];

const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="max-w-xs w-full group/card mx-auto"
    >
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto bg-cover flex flex-col justify-between p-4 transition-transform duration-300 hover:scale-105"
        )}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black bg-black/40 opacity-60"></div>
        
        {/* Author Info */}
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="40"
            width="40"
            alt="Author Avatar"
            src="/avatar.jpg"
            className="h-10 w-10 rounded-full border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {post.author}
            </p>
            <p className="text-sm text-gray-300">{post.readTime}</p>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
            {post.category}
          </span>
        </div>
        
        {/* Content */}
        <div className="text-content z-10">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 line-clamp-2 leading-tight">
            {post.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Read More Link */}
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 relative z-10"
          >
            <span>Read More</span>
            <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Blog: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">
            Recent Blog Posts
          </h2>
          
          <div className="w-12 h-px bg-gradient-to-r from-orange-400 to-transparent mx-auto mb-4"></div>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Thoughts on AI, technology, and the future of digital experiences
          </p>
        </motion.div>

        {/* Blog Grid - Responsive: 1 column mobile, 2 columns tablet, 2 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 place-items-center">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 rounded-lg font-medium text-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm min-h-[44px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Posts</span>
            <FiArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
