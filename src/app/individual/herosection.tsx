'use client';
import React from 'react';
import { motion } from 'framer-motion';

const LegalFinanceBanner = () => {
  return (
    <main className="relative w-full h-[400px] bg-white overflow-hidden flex items-end p-12 md:p-16 lg:px-24 selection:bg-purple-100">
      
      {/* 1. Animated Geometric Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        
        {/* Base Wash */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF5FF] via-white to-[#F9FAFB]" />

        {/* Shard SVG with Path Animations */}
        <svg
          className="absolute inset-0 w-full h-full scale-[1.05]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Deep Purple Shard - Slides in from right */}
          <motion.path
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            d="M1440 0L900 0L1200 400L1440 400V0Z"
            fill="url(#grad_deep_purple)"
          />
          
          {/* Middle Violet Shard - Floating effect */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.3,
              y: [0, -10, 0] 
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            d="M1100 0L600 0L900 400L1350 400L1100 0Z"
            fill="url(#grad_violet)"
          />
          
          <defs>
            <linearGradient id="grad_deep_purple" x1="1440" y1="0" x2="1000" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6D28D9" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad_violet" x1="900" y1="0" x2="1100" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pulsing Creative Accent */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-[10%] w-[250px] h-[250px] bg-purple-400 rounded-full blur-[80px]" 
        />
        
        {/* Animated Divider Lines */}
        <div className="absolute inset-0 opacity-50">
          {[35, 55, 75].map((left, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.2 * i }}
              className="absolute top-0 w-[1px] bg-white rotate-[18deg] blur-[0.5px]"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>
      </div>

      {/* 2. Text Content with Reveal Animation */}
      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
        <h1 className="text-[48px] md:text-[72px] font-extrabold tracking-tight text-[#2D2140] leading-[0.95] antialiased">
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="block"
  >
    Individual
  </motion.span>
  
  <motion.span 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    className="block bg-gradient-to-r from-[#6d62e5] to-[#a855f7] bg-clip-text text-transparent italic font-serif"
  >
    Support
  </motion.span>
</h1>
        </motion.div>
      </div>

      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
    </main>
  );
};

export default LegalFinanceBanner;