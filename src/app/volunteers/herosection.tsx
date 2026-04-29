"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SwechetnaVolunteerHero = () => {
  return (
    <section className="relative w-full min-h-[450px] lg:h-[60vh] bg-white font-sans text-black overflow-hidden flex flex-col">
      
      {/* --- TOP BRANDING --- */}
      <div className="pt-6 flex flex-col items-center justify-center z-20">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400">Community Support</span>
          <div className="h-4 w-px bg-purple-200 mx-1" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-purple-600 text-center">
            Swechetna <br /> Foundation
          </span>
        </div>
      </div>

      {/* --- STEPPED GRADIENT BACKGROUND --- */}
      <div className="relative flex-grow flex justify-center items-start pt-4">
        <div className="absolute top-0 flex flex-col items-center w-full px-4 pointer-events-none">
          <div className="w-full max-w-[1100px] h-[40px] border-x border-b border-gray-50 bg-[#F9F7FF]" />
          <div className="w-[90%] max-w-[900px] h-[40px] border-x border-b border-gray-100 bg-[#F0E9FF]" />
          <div className="w-[80%] max-w-[700px] h-[40px] border-x border-b border-gray-100 bg-[#E1D4FF]" />
          <div className="w-[70%] max-w-[550px] h-[40px] border-x border-b border-gray-200 bg-[#C8B1FF]" />
          <div className="w-[55%] max-w-[400px] h-[50px] border-x border-b border-gray-200 bg-[#9B7CFF]" />
          <div className="w-[35%] max-w-[250px] h-[60px] bg-gradient-to-b from-[#7C5CFF] to-[#5A3DFF]" />
        </div>

        {/* Floating 3D Object */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 mt-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="140" height="140" viewBox="0 0 200 200" className="drop-shadow-[0_25px_25px_rgba(124,92,255,0.25)]">
              <path d="M100 100L30 40C60 10 140 10 170 40L100 100Z" fill="url(#iron-top)" />
              <path d="M100 100L170 160C195 130 195 70 170 40L100 100Z" fill="url(#iron-right)" />
              <path d="M100 100L30 160C5 130 5 70 30 40L100 100Z" fill="url(#iron-left)" />
              <defs>
                <linearGradient id="iron-top" x1="100" y1="10" x2="100" y2="100">
                  <stop stopColor="#F5F5F5" /><stop offset="1" stopColor="#A3A3A3" />
                </linearGradient>
                <linearGradient id="iron-right" x1="180" y1="100" x2="100" y2="100">
                  <stop stopColor="#A3A3A3" /><stop offset="1" stopColor="#404040" />
                </linearGradient>
                <linearGradient id="iron-left" x1="20" y1="100" x2="100" y2="100">
                  <stop stopColor="#FFFFFF" /><stop offset="1" stopColor="#D4D4D4" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* --- HEADING SECTION --- */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16 z-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          
          {/* Animated Heading */}
          <div className="flex flex-col">
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-purple-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4"
            >
              Heart of our mission
            </motion.p>
            
            <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-[0.85]">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="block text-gray-200"
              >
                Our
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
              >
                Volunteer
              </motion.span>
            </h1>
          </div>

          {/* Side Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xs space-y-5"
          >
            <p className="text-gray-500 text-sm lg:text-base font-medium leading-relaxed italic border-l-2 border-purple-200 pl-4">
              "We make a living by what we get, but we make a life by what we give."
            </p>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-600 group hover:text-purple-800 transition-colors">
              Join the team 
              <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-50/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default SwechetnaVolunteerHero;