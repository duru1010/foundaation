"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Updated data with the "Gift of Support" event added
const events = [
  { 
    id: 1, 
    name: "Gift of Support", 
    date: "11th February 2026", 
    beneficiaries: 1, 
    img: "image_0ffdb9.png", 
    location: "Pune, Maharashtra",
    quote: "Providing personalized support to individuals in need, ensuring that no one has to walk their journey alone."
  },
  
];

// Tripling the data for a seamless infinite scroll effect in the timeline
const timelineData = [...events, ...events, ...events];

const ImpactDashboard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const currentEvent = events[index];

  return (
    <div className="min-h-[800px] bg-white flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden font-sans">
      
      {/* SECTION TITLE */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-black text-zinc-900 tracking-tighter">
          Event<span className="text-purple-600"> Summary</span>
        </h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-10 md:gap-20">
        
        {/* LEFT SIDE: AUTO-SCROLLING TIMELINE */}
        <div className="w-full lg:w-1/3 h-[450px] relative flex items-center">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-purple-100 mr-20 hidden md:block" />
          
          {/* Focal Point Indicator */}
          <div className="absolute right-[68px] top-1/2 -translate-y-1/2 w-10 h-20 bg-white border-2 border-purple-500 rounded-full hidden md:flex items-center justify-center z-10 shadow-lg">
             <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
          </div>

          <div className="w-full h-full overflow-hidden relative">
            <motion.div 
              animate={{ y: ["0%", "-33.33%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex flex-col items-center gap-24 py-20"
            >
              {timelineData.map((event, idx) => (
                <div key={idx} className="group relative flex items-center justify-end w-full pr-12 md:pr-28">
                  <span className={`text-sm font-bold transition-all duration-500 ${event.date === currentEvent.date ? 'text-purple-600 scale-125' : 'text-purple-300'}`}>
                    {event.date}
                  </span>
                  <div className={`absolute right-0 h-[2px] transition-all duration-500 ${event.date === currentEvent.date ? 'w-8 bg-purple-600' : 'w-4 bg-purple-200'}`} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: DYNAMIC CONTENT WITH IMAGE */}
        <div className="w-full lg:w-2/3 min-h-[550px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentEvent.id}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="w-full bg-purple-50/40 rounded-[3rem] p-8 md:p-10 border border-purple-100 flex flex-col md:flex-row items-center gap-12 backdrop-blur-sm"
            >
              {/* Event Image */}
              <div className="w-full md:w-5/12 overflow-hidden rounded-3xl shadow-2xl shadow-purple-200/50 aspect-square border-4 border-white">
                <img 
                  src={currentEvent.img} 
                  alt={currentEvent.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Event Details */}
              <div className="w-full md:w-7/12 space-y-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Report</span>
                    <span className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">{currentEvent.location}</span>
                  </div>
                  <h2 className="text-4xl font-black text-zinc-900 leading-tight tracking-tight">
                    {currentEvent.name}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-5xl font-black text-purple-600 tracking-tighter">
                      {currentEvent.beneficiaries}
                    </span>
                    <span className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Impacted Souls</span>
                  </div>
                  
                  <div className="p-4 bg-white rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-center">
                    <p className="text-[10px] text-zinc-400 uppercase font-black mb-1">Execution Date</p>
                    <p className="text-purple-900 font-bold text-sm">{currentEvent.date}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-100">
                  <p className="text-zinc-500 text-sm italic font-medium leading-relaxed">
                    "{currentEvent.quote}"
                  </p>
                </div>

                <button className="group flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold shadow-xl shadow-purple-200 hover:bg-zinc-900 transition-all">
                  Read Testimonials
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Decorative Elements */}
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-purple-200 rounded-full blur-[100px] opacity-20 -z-10" />
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-purple-300 rounded-full blur-[100px] opacity-10 -z-10" />
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;