
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const events = [
  { id: 1, name: "7th June Anna Seva", date: "7th June 2025", beneficiaries: 100, img: "image_0ffdb9.png" },
  { id: 2, name: "14th June Anna Seva", date: "14th June 2025", beneficiaries: 200, img: "image_0ffdb9.png" },
  { id: 3, name: "26th Sept Anna Seva", date: "26th September 2025", beneficiaries: 150, img: "image_0ffdb9.png" },
  { id: 4, name: "27th Sept Anna Seva", date: "27th September 2025", beneficiaries: 18, img: "image_0ffdb9.png" },
];

const timelineData = [...events, ...events, ...events];

const ImpactDashboard = () => {
  const [index, setIndex] = useState(0);

  // Sync the right side content with the timeline animation speed
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 5000); // Changes content every 5 seconds to match scroll feel
    return () => clearInterval(interval);
  }, []);

  const currentEvent = events[index];

  return (
    <div className="h-[700px] bg-white flex items-center justify-center p-4 md:p-10 overflow-hidden font-sans">
        <h1 className="text-5xl font-black text-zinc-900 tracking-tighter top-6">
            Event<span className="text-purple-600"> Summary</span>
          </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-16">
        
        {/* LEFT SIDE: AUTO-SCROLLING TIMELINE */}
        <div className="w-full lg:w-1/3 h-[500px] relative flex items-center">
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
                  <span className={`text-sm font-bold transition-all duration-500 ${event.date === currentEvent.date ? 'text-purple-600 scale-110' : 'text-purple-300'}`}>
                    {event.date}
                  </span>
                  <div className="absolute right-0 w-4 h-[2px] bg-purple-200" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: DYNAMIC CONTENT WITH IMAGE */}
        <div className="w-full lg:w-2/3 h-[600px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentEvent.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full bg-purple-50/50 rounded-[3rem] p-8 md:p-12 border border-purple-100 flex flex-col md:flex-row items-center gap-10"
            >
              {/* Event Image from image_0ffdb9.png */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl shadow-purple-200 aspect-square">
                <img 
                  src={currentEvent.img} 
                  alt="Event Highlight" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Event Details */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-1">
                  <span className="text-purple-600 font-black text-xs uppercase tracking-[0.3em]">Event Active</span>
                  <h2 className="text-3xl font-black text-zinc-900 leading-tight">
                    {currentEvent.name}
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-purple-600 tracking-tighter">{currentEvent.beneficiaries}</span>
                    <span className="text-zinc-400 font-bold uppercase text-xs">Beneficiaries</span>
                  </div>
                  
                  <div className="p-4 bg-white rounded-2xl border border-purple-100 shadow-sm">
                    <p className="text-xs text-zinc-400 uppercase font-bold mb-1">Scheduled Date</p>
                    <p className="text-purple-900 font-bold">{currentEvent.date}</p>
                  </div>
                </div>

                <button className="w-full md:w-auto px-10 py-4 bg-purple-600 text-white rounded-2xl font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all">
                  View Testimonials
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Background Decorative Blur */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-200 rounded-full blur-[100px] opacity-30 -z-10" />
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;