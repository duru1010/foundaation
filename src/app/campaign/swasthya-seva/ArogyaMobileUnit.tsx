"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Truck, Heart, ShieldCheck, Zap } from 'lucide-react';

/**
 * Clean White & Purple Theme
 * Stability Fix: Destructured arguments with default value for delay
 */
const InfoCard = ({ title, icon: IconComponent, children, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-7 rounded-[2rem] shadow-xl shadow-purple-100/50 border border-purple-50 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl text-white shadow-lg shadow-purple-200">
          {IconComponent && <IconComponent size={24} />}
        </div>
        <h3 className="text-xl font-extrabold text-slate-800 leading-tight">{title}</h3>
      </div>
      
      <div className="text-slate-600 space-y-3 flex-grow text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

export default function PetCtCampaign() {
  return (
    <div className="h-[600px] bg-[#FCFBFF] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 mb-4 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-widest uppercase"
          >
            Swachetna Foundation
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">PET/CT</span> Unit
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Bridging the gap in cancer diagnostics with advanced technology on wheels.
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <InfoCard title="Why PET/CT?" icon={Activity} delay={0.1}>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> 
              Early cancer detection
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> 
              Precise tumor staging
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> 
              Cardiac & Neuro imaging
            </p>
          </InfoCard>

          <InfoCard title="The Unit" icon={Truck} delay={0.2}>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> 
              50–70 patients daily
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> 
              Solar & GPS enabled
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> 
              Licensed experts
            </p>
          </InfoCard>

          <InfoCard title="Services" icon={ShieldCheck} delay={0.3}>
            <div className="bg-purple-50 p-3 rounded-xl border border-purple-100 mb-3 text-purple-800 font-bold text-xs text-center uppercase">
              Free for BPL Patients
            </div>
            <p>• On-site reporting</p>
            <p>• Digital EMR Records</p>
            <p>• Telemedicine follow-up</p>
          </InfoCard>

          <InfoCard title="CSR Impact" icon={Heart} delay={0.4}>
            <p>• Schedule VII Compliant</p>
            <p>• Donor branding on van</p>
            <p>• Real-time Impact reports</p>
            <p>• Community health data</p>
          </InfoCard>

        </div>

        {/* Partnership Section - Deep Purple Theme */}
        
      </div>
    </div>
  );
}