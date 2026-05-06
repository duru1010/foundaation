'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['900'] 
});

const MultiStepDonation = () => {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState('UPI');
  const [amount, setAmount] = useState('500');
  const [customAmount, setCustomAmount] = useState('');

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-[#F9F8FF] flex flex-col items-center justify-center p-4">
      
      {/* Top Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className={`${playfair.className} text-4xl md:text-5xl text-purple-950 mb-2`}>
          Support Our Mission
        </h2>
        <p className="text-purple-600/60 font-medium tracking-wide uppercase text-xs">
          Your contribution creates lasting change
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl shadow-purple-100 border border-purple-50 overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="h-2 w-full bg-purple-50 flex">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`h-full transition-all duration-500 ${step >= i ? 'bg-purple-600' : 'bg-transparent'}`} 
              style={{ width: '33.33%' }}
            />
          ))}
        </div>

        <div className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            {/* STEP 1: Personal & Donation Details */}
            {step === 1 && (
              <motion.div key="step1" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                <h3 className="text-xl font-bold text-purple-950 mb-6 flex items-center gap-2">
                   <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">1</span>
                   Personal Details
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" className="input-style" required />
                    <input type="email" placeholder="Email Address *" className="input-style" required />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="input-style" />
                </div>

                <label className="text-sm font-bold text-purple-900 block mb-3">Select Amount (₹)</label>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {['100', '500', '1000'].map((val) => (
                    <button 
                      key={val}
                      onClick={() => {setAmount(val); setCustomAmount('');}}
                      className={`py-2 rounded-xl text-sm font-bold transition-all ${amount === val && !customAmount ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'}`}
                    >
                      ₹{val}
                    </button>
                  ))}
                  <input 
                    type="number" 
                    placeholder="Custom" 
                    value={customAmount}
                    onChange={(e) => {setCustomAmount(e.target.value); setAmount('');}}
                    className="bg-purple-50 rounded-xl px-2 text-center text-sm outline-none border-2 border-transparent focus:border-purple-300 focus:bg-white transition-all" 
                  />
                </div>

                <div className="flex gap-4 mb-8">
                  <button className="flex-1 py-3 rounded-xl border-2 border-purple-100 text-purple-600 font-bold focus:bg-purple-600 focus:text-white focus:border-purple-600 transition-all">One-time</button>
                  <button className="flex-1 py-3 rounded-xl border-2 border-purple-100 text-purple-600 font-bold focus:bg-purple-600 focus:text-white focus:border-purple-600 transition-all">Monthly</button>
                </div>

                <button onClick={nextStep} className="w-full btn-purple">Next Step</button>
              </motion.div>
            )}

            {/* STEP 2: Payment & Additional Info */}
            {step === 2 && (
              <motion.div key="step2" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                <h3 className="text-xl font-bold text-purple-950 mb-6 flex items-center gap-2">
                   <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">2</span>
                   Payment Method
                </h3>
                
                <div className="space-y-3 mb-6">
                  {['UPI', 'Card', 'Net Banking'].map((m) => (
                    <div 
                      key={m}
                      onClick={() => setMethod(m)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${method === m ? 'border-purple-600 bg-purple-50/50 shadow-md shadow-purple-50' : 'border-purple-50 hover:border-purple-100'}`}
                    >
                      <span className="font-semibold text-purple-900">{m}</span>
                      {method === m && <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-sm" />}
                    </div>
                  ))}
                </div>

                <input 
                  type="text" 
                  placeholder={method === 'UPI' ? "Enter UPI ID" : "Card Number"} 
                  className="input-style mb-6" 
                />

                <div className="space-y-4 mb-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-purple-600 rounded" />
                    <span className="text-sm text-purple-700 font-medium">Donate as Anonymous</span>
                  </label>
                  <textarea placeholder="Message / Note (Optional)" className="input-style h-24 resize-none pt-4" />
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="flex-1 py-4 text-purple-400 font-bold hover:text-purple-600 transition-colors">Back</button>
                  <button onClick={nextStep} className="flex-[2] btn-purple">Review</button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Final Consent & Submit */}
            {step === 3 && (
              <motion.div key="step3" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-purple-600 font-bold">₹</span>
                </div>
                <h2 className="text-4xl font-bold text-purple-950 mb-2 tracking-tight">₹{customAmount || amount}</h2>
                <p className="text-purple-600/60 mb-8 font-medium">Finalizing your contribution</p>

                <div className="space-y-4 mb-8 text-left bg-purple-50/50 p-6 rounded-3xl border border-purple-100">
                   <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 w-5 h-5 accent-purple-600" />
                    <span className="text-xs text-purple-900 leading-relaxed font-medium">I accept the Terms & Conditions and acknowledge the privacy policy. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 accent-purple-600" />
                    <span className="text-xs text-purple-900 leading-relaxed font-medium">Subscribe to updates regarding our foundation's initiatives.</span>
                  </label>
                </div>

                <button className="w-full btn-purple !py-5 text-lg">Confirm Donation</button>
                <button onClick={prevStep} className="mt-4 text-purple-400 font-bold text-sm hover:text-purple-600 transition-colors">Edit Details</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <style jsx>{`
        .input-style {
          @apply w-full px-5 py-3.5 bg-purple-50/50 border-2 border-transparent rounded-2xl outline-none focus:border-purple-300 focus:bg-white transition-all text-purple-900 placeholder:text-purple-300 font-medium;
        }
        .btn-purple {
          @apply bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-purple-200 transition-all active:scale-95 flex items-center justify-center;
        }
      `}</style>
    </div>
  );
};

export default MultiStepDonation;