"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DonationDashboard = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | string>(100);
  const raised = 508193;
  const goal = 2000000;
  const percentage = (raised / goal) * 100;

  const presets = [50, 100, 300];

  return (
    <div className="h-[600px] bg-purple-50 flex flex-col items-center justify-center p-6 font-sans">
       <h1 className="text-5xl font-black text-zinc-900 tracking-tighter">
            Anna Seva<span className="text-purple-600"></span>
          </h1>
      {/* HEADER: OUTSIDE THE CARD */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 px-2"
      >
        
       
      </motion.div>

      {/* THE CARD SECTION */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-stretch shadow-[0_40px_80px_-20px_rgba(124,58,237,0.15)] rounded-[2.5rem] overflow-hidden bg-white">
        
        {/* LEFT SIDE: IMPACT SUMMARY */}
        <div className="w-full lg:w-5/12 bg-purple-600 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden text-white">
          <div className="absolute top-[-10%] left-[-10%] w-56 h-56 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-purple-400/20 rounded-full blur-2xl" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <span className="text-purple-200 font-bold uppercase tracking-widest text-[10px]">Impact Mission</span>
            <h2 className="text-3xl font-black mt-2 leading-tight">Nourish with Love</h2>
            <p className="mt-3 text-purple-100 leading-relaxed text-sm opacity-90">
              Serving hot, nutritious meals to those in need in Pune, Maharashtra.
            </p>
          </motion.div>

          <div className="mt-12 relative z-10 space-y-5">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] text-purple-200 uppercase font-bold tracking-tighter">Total Raised</p>
                <h3 className="text-3xl font-black">₹{raised.toLocaleString()}</h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-purple-200 uppercase font-bold tracking-tighter">Campaign Goal</p>
                <p className="font-bold text-sm">₹{goal.toLocaleString()}</p>
              </div>
            </div>

            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-white h-full rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              />
            </div>

            <div className="flex gap-8 pt-2">
               <div>
                 <p className="text-[10px] text-purple-200 uppercase font-black">Donors</p>
                 <p className="text-lg font-bold">1</p>
               </div>
               <div>
                 <p className="text-[10px] text-purple-200 uppercase font-black">Benefited</p>
                 <p className="text-lg font-bold">500,000</p>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: DONATE FORM */}
        <div className="w-full lg:w-7/12 p-8 md:p-12 bg-white flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black text-zinc-900 tracking-tight">Support Our Cause</h2>
              <p className="text-zinc-400 text-sm mt-1 font-medium italic">Choose an amount to help us serve more meals.</p>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-purple-600 uppercase tracking-widest">Select Amount</label>
              <div className="grid grid-cols-3 gap-3">
                {presets.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 ${
                      selectedAmount === amount 
                      ? 'bg-purple-600 border-purple-600 text-white shadow-xl shadow-purple-100 scale-105' 
                      : 'bg-white border-purple-50 text-zinc-400 hover:border-purple-200 hover:text-purple-600'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>

              <div className="relative group">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 font-bold">₹</span>
                <input 
                  type="number"
                  placeholder="Enter Custom Amount"
                  value={presets.includes(Number(selectedAmount)) ? '' : selectedAmount}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  className="w-full bg-purple-50/50 border-2 border-transparent focus:border-purple-600 focus:bg-white rounded-2xl py-4 pl-10 pr-5 outline-none font-bold text-zinc-800 transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <motion.button 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-purple-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-purple-200 hover:bg-purple-700 transition-all flex items-center justify-center gap-3 group"
              >
                Donate Now
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
              <p className="text-center text-[10px] text-zinc-400 mt-5 uppercase font-bold tracking-[0.2em]">Secure Encryption Active</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DonationDashboard;