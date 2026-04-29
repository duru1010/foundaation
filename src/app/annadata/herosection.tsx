'use client';

import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

export default function Annadata3DGrowthHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force play on mount to ensure autoplay works
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  const growthVariants: Variants = {
    hidden: { 
      rotateX: 45, 
      y: 100,      
      z: -100,     
      opacity: 0,
      scale: 0.8,
      transformOrigin: 'bottom', 
    },
    visible: { 
      rotateX: 0, 
      y: 0, 
      z: 0,
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 2.5, 
        ease: [0.33, 1, 0.68, 1],
        delay: 0.5 
      }
    }
  };

  return (
    <section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-[#F3E8FF] [perspective:1200px] py-20">
      
      {/* Background Shape */}
      <div className="absolute inset-0 bg-white" 
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
          <h4 className="text-3xl md:text-6xl font-black uppercase leading-tight text-gray-900">
            Nurturing <br /> 
            <span className="text-[#7C3AED]">Agricultural Prosperity</span>
          </h4>
          <p className="text-gray-600 max-w-lg text-lg">
            Swachetna Foundation empowers farmers through innovation and market access.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#7C3AED] text-white font-bold rounded-full shadow-lg"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Content: 3D Video Card */}
       {/* Right Content: Smaller 3D Growing Crop Image */}
<div className="relative flex justify-center items-center">
  <motion.div 
    variants={growthVariants}
    initial="hidden"
    animate="visible"
    // REDUCED DIMENSIONS: Changed from [300x400] to [220x300] on mobile 
    // and from [450x550] to [320x420] on desktop
    className="relative w-[220px] h-[300px] md:w-[320px] md:h-[420px] [transform-style:preserve-3d]"
  >
    {/* The Image Container */}
    <motion.div 
      style={{ z: 50 }} 
      className="w-full h-full rounded-[30px] overflow-hidden border-[8px] border-white shadow-2xl bg-black"
    >
        <img 
            src="/videoframe_5782.png"
            alt="Annadata Growth"
            className="w-full h-full object-cover"
        />
    </motion.div>
    
    {/* Adjusted Base Shadow for smaller size */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-900/20 blur-2xl -z-10" />
  </motion.div>
</div>
      </div>
    </section>
  );
}