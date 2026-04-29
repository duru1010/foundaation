

'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function CocoberryHero() {
  const bowlVariants: Variants = {
    hidden: { 
      x: -600, 
      opacity: 0, 
      rotate: -120 
    },
    visible: { 
      x: 0, 
      opacity: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 12,
        duration: 1.5
      }
    },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden bg-[#F3E8FF]">
      
      {/* Background Diagonal Split: Pure White and Light Purple */}
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
          <h4 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter text-white">
            Completely <br /> 
            <span className="text-[#7C3AED]">Indian brand</span>
          </h4>
          
          <p className="text-sm md:text-base font-medium max-w-sm text-gray opacity-80 leading-relaxed">
            Cocoberry is India's first and leading frozen yogurt brand. 
            We are 8 years old and have the largest network of outlets.
          </p>
          
          <div className="flex gap-4 pt-2">
            <button className="px-8 py-3 bg-[#7C3AED] text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-lg hover:bg-[#6D28D9] transition-all">
              view more
            </button>
           
          </div>
        </motion.div>

        {/* Right Content: Bowl in a Circle with Entrance Animation */}
        <div className="relative flex justify-center items-center">
          
          <motion.div 
            variants={bowlVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            className="relative w-[220px] h-[220px] md:w-[420px] md:h-[420px]"
          >
            {/* The Bowl in a Clean White Circular Container */}
            <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-[0_20px_50px_rgba(124,58,237,0.2)] bg-white p-2">
                <img 
                  src="/68a413e23f50e364193b5e8ab9e6bd1e.jpg" 
                  alt="Cocoberry Bowl"
                  className=" object-cover rounded-full"
                />
            </div>
            
            {/* Show Menu Overlay Circle */}
            <motion.div 
             
            >
             
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}