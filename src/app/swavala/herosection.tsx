'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function AnnadataHero() {
  // Updated Animation: x is now 200 (positive) to slide from the right
  const imageVariants: Variants = {
    hidden: { 
      x: 200,         // Changed from -200 to 200 to start from the right
      opacity: 0, 
      scale: 0.95
    },
    visible: { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 1.2,
        delay: 0.2 
      }
    },
    animate: {
      y: [0, -10, 0], 
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full h-[700px] flex items-center overflow-hidden bg-[#F3E8FF]">
      
      {/* Background Diagonal Split */}
      <div 
        className="absolute inset-0 bg-white" 
        style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 35% 100%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          <h4 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tighter text-gray-900">
            Nurturing <br /> 
            <span className="text-[#7C3AED]">Agricultural Prosperity</span>
          </h4>
          
          <p className="text-lg md:text-xl font-medium max-w-md text-gray-600 leading-relaxed">
            Empowering farmers through innovation, sustainable practices, and direct market access for a truly Aatmanirbhar future.
          </p>
          
          <div className="flex gap-4 pt-2">
            <button className="px-10 py-4 bg-[#7C3AED] text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-xl hover:bg-[#6D28D9] hover:-translate-y-1 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Content: Image now slides in from the RIGHT */}
        <div className="relative flex justify-center items-center">
  {/* The image is now the direct motion element */}
  <motion.img
    variants={imageVariants}
    initial="hidden"
    animate={["visible", "animate"]}
    src="/9a033de77c209e626a1c80c8a3211352.jpg"
    alt="Farmer Welfare"
    // Apply all sizing and styling directly here
    className="relative w-full max-w-[400px] aspect-[4/3] md:aspect-square object-cover shadow-2xl rounded-3xl z-10"
  />

  {/* Decorative accent stays relative to the parent flex container */}
  <div className="absolute translate-x-20 translate-y-20 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl z-0" />
</div>
      </div>
    </section>
  );
}