'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function CocoberryHero() {
  const bowlVariants: Variants = {
    hidden: { 
      y: -800,          // Start high above the screen
      opacity: 0, 
      rotate: -120      // Keeps the spinning effect as it drops
    },
    visible: { 
      y: 0,             // Drop to original position
      opacity: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 45,  // Slightly stiffer for a nice bounce
        damping: 14,    // Controlled oscillation
        duration: 1.5
      }
    },
    animate: {
      y: [0, -15, 0],   // Floating effect continues after landing
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden bg-[#F3E8FF]">
      
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
          {/* Changed text color to gray-900 for readability against white bg */}
          <h4 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter text-gray-900">
            Completely <br /> 
            <span className="text-[#7C3AED]">Indian brand</span>
          </h4>
          
          <p className="text-sm md:text-base font-medium max-w-sm text-gray-600 leading-relaxed">
            Cocoberry is India's first and leading frozen yogurt brand. 
            We are 8 years old and have the largest network of outlets.
          </p>
          
          <div className="flex gap-4 pt-2">
            <button className="px-8 py-3 bg-[#7C3AED] text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-lg hover:bg-[#6D28D9] transition-all">
              view more
            </button>
          </div>
        </motion.div>

        {/* Right Content: Bowl dropping from UPWARD */}
        <div className="relative flex justify-center items-center">
          <motion.div 
            variants={bowlVariants}
            initial="hidden"
            animate={["visible", "animate"]}
            className="relative w-[220px] h-[220px] md:w-[420px] md:h-[420px]"
          >
            {/* The Bowl Container */}
            <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-[0_20px_50px_rgba(124,58,237,0.2)] bg-white p-2">
                <img 
                  src="/0ff15680fb153ea43be829b2701b9564.jpg" 
                  alt="Cocoberry Bowl"
                  className="w-full h-full object-cover rounded-full"
                />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}