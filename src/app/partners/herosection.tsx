"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const SwechetnaHero = () => {
  return (
    <section className="relative w-full bg-white font-sans text-black overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[100%] bg-[#f3f0ff] blur-[100px] rounded-full opacity-100" />
        <div className="absolute top-[0%] left-[-5%] w-[30%] h-[100%] bg-[#ede9fe] blur-[80px] rounded-full opacity-60" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[22vw] font-bold text-[#6d62e5]/[0.02] select-none translate-y-4"
        >
          Lucca.
        </motion.h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] items-center">
          
          {/* LEFT SIDE: Heading & Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative pt-16 lg:mt-10"
          > 
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-[1.1]">
                Swechetna Partner <br />
                <span className="text-[#6d62e5] relative">
                  Foundation
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-1 left-0 h-1 bg-[#6d62e5]/10 -z-10" 
                  />
                </span>
              </h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm"
              >
                Knowing your risk tolerance can serve as an internal compass, 
                guiding your business growth decisions.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-5 pt-1"
              >
                
              </motion.div>
            </div>

            {/* STAR BADGE */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 left-4 opacity-40 scale-75"
            >
               <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#6d62e5]/20 fill-current">
                  <path d="M50 0 L55 35 L90 15 L70 45 L100 50 L70 55 L90 85 L55 65 L50 100 L45 65 L10 85 L30 55 L0 50 L30 45 L10 15 L45 35 Z" />
                </svg>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Moved upward using lg:-translate-y-56 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-end lg:translate-x-12 lg:-translate-y-36"
          >
            <div className="relative group p-1.5 border border-[#6d62e5]/10 rounded-[8rem] bg-white shadow-xl shadow-[#6d62e5]/5">
              
              {/* ✨ PURPLE GLOW */}
              <div className="absolute inset-0 rounded-[8rem] bg-purple-500/20 blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

              {/* ✨ GLOW BORDER */}
              <div className="absolute inset-0 rounded-[8rem] border border-purple-300 opacity-70 group-hover:opacity-100 transition"></div>

              <div className="relative w-52 h-64 rounded-[8rem] overflow-hidden bg-gray-100 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1542744095-2918e2f3986c?auto=format&fit=crop&q=80&w=600"
                  alt="Founders"
                  className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-8 -right-1 w-3.5 h-3.5 bg-[#6d62e5] rounded-full border-2 border-white z-20" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* FOOTER BORDER */}
     

    </section>
  );
};

export default SwechetnaHero;