"use client"; // <--- THIS IS THE FIX

import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Lightbulb, Megaphone, Code } from 'lucide-react';

const WorkWithUs = () => {
  const iconsData = [
    { Icon: Code, delay: 0.2, position: { left: '5%', bottom: '20%' } },
    { Icon: Users, delay: 0.4, position: { left: '15%', top: '15%' } },
    { Icon: FileText, delay: 0.6, position: { left: '50%', top: '-5%', transform: 'translateX(-50%)' } },
    { Icon: Lightbulb, delay: 0.8, position: { right: '15%', top: '15%' } },
    { Icon: Megaphone, delay: 1.0, position: { right: '5%', bottom: '20%' } },
  ];

  return (
    <div className="w-full min-h-[450px] bg-[#f9f7ff] flex flex-col md:flex-row items-center justify-center p-10 gap-16 overflow-hidden">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 max-w-xl text-left">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          <span className="text-purple-600">Work</span> With Us
        </h1>
        <h2 className="text-xl font-bold text-gray-800 mb-4 italic">Let's Scale Innovations Together</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Have a passion for modular AI frameworks or deep expertise in 
          decentralized governance? Join our team of visionaries and 
          architects. Apply today and let's turn forward-thinking ideas into 
          powerful digital realities.
        </p>
      </div>

      {/* RIGHT ANIMATION AREA */}
      <div className="flex-1 relative h-[350px] w-full max-w-[500px] flex items-center justify-center">
        
        {/* The Arc Background */}
        <svg className="absolute w-full h-full text-purple-100" viewBox="0 0 400 200">
          <path d="M 40 180 Q 200 10 360 180" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>

        {/* Central Phone - The "Floating" Animation */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="z-10 bg-gradient-to-br from-purple-700 to-indigo-900 p-6 rounded-3xl shadow-2xl w-32 h-44 flex flex-col justify-between border border-white/10"
        >
          <div className="w-full h-6 bg-white/20 rounded-md" />
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-4 bg-white/30 rounded-sm" />
            ))}
          </div>
        </motion.div>

        {/* Floating Icons */}
        {iconsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: item.delay, type: 'spring', stiffness: 200 }}
            style={{ 
              position: 'absolute', 
              ...item.position,
              zIndex: 20 
            }}
            className="bg-white p-4 rounded-full shadow-lg border border-purple-50 text-purple-600 flex items-center justify-center"
          >
            <item.Icon size={24} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkWithUs;