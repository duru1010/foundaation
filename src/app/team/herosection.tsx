"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SwechetnaLeadershipHero = () => {
  return (
    // Reduced height from 75vh to 60vh
    <section className="relative w-full min-h-[450px] lg:h-[60vh] bg-white font-sans text-black overflow-hidden flex flex-col">
      
      {/* --- 1. TOP BRANDING --- */}
      <div className="pt-6 flex flex-col items-center justify-center z-20">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400">Executive Panel</span>
          <div className="h-4 w-px bg-purple-200 mx-1" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-purple-600">
            Swechetna <br /> Council
          </span>
        </div>
      </div>

      {/* --- 2. THE STEPPED GRADIENT BACKGROUND & 3D OBJECT --- */}
      <div className="relative flex-grow flex justify-center items-start pt-4">
        
        {/* Stepped Gradient Background (Exact Solana Purple/White Palette) */}
        <div className="absolute top-0 flex flex-col items-center w-full px-4">
          <div className="w-full max-w-[1100px] h-[40px] border-x border-b border-gray-50 bg-[#F9F7FF]" />
          <div className="w-[90%] max-w-[900px] h-[40px] border-x border-b border-gray-100 bg-[#F0E9FF]" />
          <div className="w-[80%] max-w-[700px] h-[40px] border-x border-b border-gray-100 bg-[#E1D4FF]" />
          <div className="w-[70%] max-w-[550px] h-[40px] border-x border-b border-gray-200 bg-[#C8B1FF]" />
          <div className="w-[55%] max-w-[400px] h-[50px] border-x border-b border-gray-200 bg-[#9B7CFF]" />
          <div className="w-[35%] max-w-[250px] h-[60px] bg-gradient-to-b from-[#7C5CFF] to-[#5A3DFF]" />
        </div>

        {/* Floating 3D Y-Shape Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 mt-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="160" height="160" viewBox="0 0 200 200" className="drop-shadow-[0_25px_25px_rgba(124,92,255,0.25)]">
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

      {/* --- 3. SWECHETNA LEADERSHIP HEADING SECTION --- */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-12 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 items-end">
          
          {/* Main Leadership Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            <p className="text-purple-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-2">Visionaries & Architects</p>
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-black leading-[0.85]">
              Swechetna <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Leadership</span>
            </h1>
          </motion.div>

          {/* Right Description Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:pl-10 lg:pl-20"
          >
            <div className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-bold tracking-tight uppercase">Strategic Core</h2>
              <p className="text-gray-500 text-sm lg:text-base font-medium leading-relaxed max-w-sm">
                Empowering the ecosystem through modular AI frameworks and decentralized governance.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-600 group transition-all">
              Meet the board 
              <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* --- REFINED WHITE & PURPLE BORDER --- */}
      {/* Layer 1: The thin purple line */}
      <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
      {/* Layer 2: The soft glow/shadow */}
      <div className="absolute inset-0 rounded-2xl border border-purple-300 opacity-70 group-hover:opacity-100 transition"/>
    </section>
  );
};

export default SwechetnaLeadershipHero;