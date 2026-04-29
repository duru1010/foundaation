"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StatCircle = ({ value, label, percent, description, index }: any) => {
  const radius = 80; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="relative w-44 h-44 mb-4 flex items-center justify-center">
        <svg className="absolute w-full h-full -rotate-90">
          <circle cx="88" cy="88" r={radius} stroke="currentColor" strokeWidth="10" fill="transparent" className="text-purple-50" />
          <motion.circle
            cx="88" cy="88" r={radius} stroke="currentColor" strokeWidth="10" fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            strokeLinecap="round"
            className="text-purple-600"
          />
        </svg>

        <div className="z-10 flex flex-col items-center">
          <div className="flex flex-col items-center leading-none">
            <span className="text-[9px] uppercase font-bold text-gray-400 mb-1">Total</span>
            <span className="text-2xl font-black text-gray-800 tracking-tighter">{value}</span>
          </div>
          <div className="mt-2 flex flex-col items-center leading-none border-t border-gray-100 pt-2 px-4">
            <span className="text-[9px] uppercase font-bold text-purple-600 tracking-widest">{label}</span>
          </div>
        </div>
      </div>

      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-800 mb-1">
        {label} <span className="text-purple-600">Metric</span>
      </h3>
      <p className="text-[10px] text-gray-400 leading-tight max-w-[170px]">
        {description}
      </p>
    </motion.div>
  );
};

const BusinessCircleAnalysis = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Volunteers", value: "500,000", percent: 85, desc: "Community members engaged worldwide." },
    { label: "Donation", value: "5M+", percent: 65, desc: "Total funds raised for global initiatives." },
    { label: "Total Project", value: "1,240", percent: 45, desc: "Completed infrastructures and programs." },
    { label: "Countries", value: "Global", percent: 95, desc: "Active presence across all continents." },
  ];

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="h-[400px] flex items-center justify-center bg-white"
          >
            <div className="w-10 h-10 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin" />
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto px-8 py-10" // Reduced py-10 for tighter vertical fit
          >
            {/* Header section - mb-12 instead of mb-80 or mb-20 */}
            <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-purple-400 mb-1">Impact Section Analysis</p>
                <h1 className="text-3xl font-black uppercase tracking-tighter leading-none">
                  Global <span className="text-purple-600">Stat</span> Analysis
                </h1>
              </div>
              <div className="text-right leading-none">
                <span className="text-[10px] font-black text-gray-300 block mb-1 tracking-widest">FILE: 122</span>
                <span className="text-[9px] font-bold py-1 px-2 bg-purple-50 text-purple-600 rounded uppercase">Live Data</span>
              </div>
            </div>

            {/* Grid for Circles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {stats.map((stat, i) => (
                <StatCircle 
                  key={i} 
                  index={i}
                  percent={stat.percent} 
                  value={stat.value} 
                  label={stat.label}
                  description={stat.desc}
                />
              ))}
            </div>

            {/* Footer - mt-12 instead of mt-24 */}
            <div className="mt-12 pt-4 border-t border-gray-50 flex justify-between items-center opacity-30">
               <p className="text-[8px] font-bold tracking-[0.3em]">EST. 2026 ANALYTICS</p>
               <div className="flex gap-4 text-[9px] font-bold">
                  <span>REPORT_READY</span>
                  <span>SYSTEM_ACTIVE</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BusinessCircleAnalysis;