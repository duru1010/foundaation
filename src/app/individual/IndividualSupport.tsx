"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Briefcase, Megaphone, Gift } from 'lucide-react';

const IndividualSupport = () => {
  const supportOptions = [
    { icon: <Heart className="w-5 h-5" />, title: "Make a Donation", desc: "Financial contributions help fund programs across education and health." },
    { icon: <Users className="w-5 h-5" />, title: "Volunteer Your Time", desc: "Assist in program implementation and community engagement." },
    { icon: <Briefcase className="w-5 h-5" />, title: "Internships", desc: "Gain experience in the non-profit sector while contributing to our mission." },
    { icon: <Megaphone className="w-5 h-5" />, title: "Spread Awareness", desc: "Share our work on social media to increase our reach and impact." },
    { icon: <Gift className="w-5 h-5" />, title: "In-Kind Contributions", desc: "Donate goods like educational materials or medical supplies." },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#f8f9ff] py-20 px-6 lg:px-12 overflow-hidden flex items-center">
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/50 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-100/60 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2D2140] leading-tight">
                Support <span className="text-[#6d62e5]">Swachetna</span> <br />Foundation
              </h2>
              <p className="mt-4 text-gray-600 text-lg max-w-md font-medium">
                How Individuals Can Support Swachetna Foundation
              </p>
            </div>

            <div className="space-y-6">
              {supportOptions.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-[#6d62e5]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D2140]">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Form (Exact Style from reference image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* White card with sharp spacing and soft shadow like 'Hipops' */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Get Involved</h3>
                <p className="text-sm text-gray-400 font-medium">Please fill out the form for more details.</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Your Name*</label>
                    <input type="text" placeholder="Full Name" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-purple-100 focus:border-purple-300 outline-none transition-all placeholder:text-gray-200" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Phone Number*</label>
                    <input type="text" placeholder="+91 00000 00000" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-purple-100 focus:border-purple-300 outline-none transition-all placeholder:text-gray-200" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email*</label>
                  <input type="email" placeholder="email@example.com" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-purple-100 focus:border-purple-300 outline-none transition-all placeholder:text-gray-200" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">State</label>
                    <input type="text" placeholder="State" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-purple-100 focus:border-purple-300 outline-none transition-all placeholder:text-gray-200" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">City</label>
                    <input type="text" placeholder="City" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-purple-100 focus:border-purple-300 outline-none transition-all placeholder:text-gray-200" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Address*</label>
                  <textarea placeholder="Enter your full address" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-purple-100 focus:border-purple-300 outline-none transition-all min-h-[90px] resize-none placeholder:text-gray-200" />
                </div>

               <motion.button 
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  type="submit" 
  className="w-full bg-gradient-to-r from-[#6d62e5] to-[#9181f4] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-100 hover:brightness-105 transition-all mt-4"
>
  Submit
</motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IndividualSupport;