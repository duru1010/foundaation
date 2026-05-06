"use client"; // Required for animations in Next.js App Router

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-[700px] bg-white flex flex-col items-center justify-center px-6 py-12 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Top Heading: News Letter */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mb-12"
      >
        <h2 className="text-purple-600 font-bold text-xl uppercase tracking-widest">
          News Letter
        </h2>
        <div className="h-1 w-20 bg-purple-600 mt-2"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
           News 
            <span className="text-purple-600">Letter</span> <br />
        
          </h1>
          
          
        </motion.div>

        {/* Right Side: Animated Image */}
        <div className="relative flex justify-center items-center">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-purple-100 rounded-full blur-[100px] opacity-40 scale-75"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }} // Starts 100px to the right
            animate={{ opacity: 1, x: 0 }}   // Slides to center
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg"
          >
            {/* Verbatim reference to the requested file: 64ec91b789fa792fa725fdd8c8daea10.jpg */}
            <img 
              src="/16b95f1195cc4de0bdaaeb7d9e381ad3.jpg" 
              alt="Digital landscape illustration" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;