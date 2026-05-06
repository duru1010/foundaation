"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageSquare, Headphones, AtSign } from 'lucide-react';

const ContactPage = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* SECTION 1: HEADER & ANIMATED ARCH */}
      <section className="relative bg-[#F9F7FF] pt-20 pb-32 px-6 lg:px-24">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-100 rounded-full blur-[100px] -z-10 opacity-60" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:w-1/2 space-y-4"
          >
            <motion.h1 variants={fadeInUp} className="text-[42px] font-bold text-[#8B5CF6] leading-tight">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg font-bold text-gray-900">
              Let's Build Something Great Together
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[#6B7280] max-w-lg text-[15px] leading-relaxed">
              Have a project in mind, a question about our services, or need expert guidance? 
              We're here to help. Reach out to us and let's discuss how we can turn your 
              ideas into powerful digital solutions.
            </motion.p>
          </motion.div>

          {/* THE ARCH ANIMATION */}
          <div className="md:w-1/2 flex justify-center mt-20 md:mt-0 relative">
            <div className="relative w-[300px] h-[200px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <IconCircle delay={0} icon={<Headphones size={14}/>} pos="left-[0%] top-[60%]" color="text-purple-400" />
                <IconCircle delay={0.2} icon={<MessageSquare size={14}/>} pos="left-[15%] top-[25%]" color="text-pink-400" />
                <IconCircle delay={0.4} icon={<Mail size={14}/>} pos="left-[50%] -top-[10%] -translate-x-1/2" color="text-blue-400" />
                <IconCircle delay={0.6} icon={<Phone size={14}/>} pos="right-[15%] top-[25%]" color="text-yellow-500" />
                <IconCircle delay={0.8} icon={<AtSign size={14}/>} pos="right-[0%] top-[60%]" color="text-red-400" />
              </div>

              <svg className="absolute top-[-20px] left-[-20px] w-[340px] h-[200px]" viewBox="0 0 340 200">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M40,150 Q170,-30 300,150" 
                  fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="6 6" 
                />
              </svg>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#6D28D9] to-[#4C1D95] w-36 h-36 rounded-2xl shadow-xl flex flex-col p-4"
              >
                <div className="flex gap-2 mb-3">
                  <div className="w-8 h-16 bg-white/20 rounded-lg" />
                  <div className="flex-1 grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => <div key={i} className="bg-white/30 h-3 w-full rounded-[2px]" />)}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE DARK FORM CARD */}
      <section className="px-6 mt-24 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1000px] mx-auto bg-[#1A0B38] rounded-[45px] p-10 md:p-16 shadow-2xl border border-white/5"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full" 
              />
              <span className="text-[#A78BFA] text-[11px] font-bold tracking-[0.2em] uppercase">Contact Us</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <FormInput label="Full Name *" placeholder="Name" />
            <FormInput label="Email Address *" placeholder="Email" type="email" />
            <FormInput label="Phone Number *" placeholder="Phone" />
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-300 ml-1">Enquiry Type *</label>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all">
                <option>Enquiry</option>
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-300 ml-1">Message *</label>
              <textarea rows={4} placeholder="Message" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-gray-500 transition-all" />
            </div>

            <div className="md:col-span-2 flex items-center gap-3 py-2">
              <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-transparent text-purple-600 focus:ring-0 cursor-pointer" />
              <span className="text-[13px] text-gray-400">I agree to talk about my project with Smartbytelabs</span>
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 border border-white/30 rounded-full text-white text-sm font-medium flex items-center gap-2 hover:bg-white hover:text-[#1A0B38] transition-all group"
              >
                Send Message
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: BOTTOM INFO BOXES */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-3">
        <InfoCard delay={0.1} icon={<Phone className="text-pink-400" size={22} />} bg="bg-pink-50" title="Call Us" sub="Mon-Sat from 9am to 6pm" detail="+91 82382 57652" />
        <InfoCard delay={0.2} icon={<MapPin className="text-purple-500" size={22} />} bg="bg-purple-50" title="Our Office" sub="Come say hello at our office locations" detail="312, Silver trade center, Surat." border />
        <InfoCard delay={0.3} icon={<Mail className="text-blue-400" size={22} />} bg="bg-blue-50" title="Email Us" sub="Drop us an email anytime" detail="support@smartbytelabs.com" />
      </section>
    </div>
  );
};

// Sub-components with internal animations
const IconCircle = ({ icon, pos, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
    transition={{ 
      opacity: { delay, duration: 0.5 },
      scale: { delay, duration: 0.5 },
      y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay }
    }}
    className={`absolute ${pos} w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center ${color}`}
  >
    {icon}
  </motion.div>
);

const FormInput = ({ label, placeholder, type = "text" }) => (
  <motion.div whileHover={{ y: -2 }} className="flex flex-col gap-2">
    <label className="text-[13px] font-medium text-gray-300 ml-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-gray-500 transition-all focus:bg-white/10"
    />
  </motion.div>
);

const InfoCard = ({ icon, bg, title, sub, detail, border, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`flex flex-col items-center text-center p-8 ${border ? 'md:border-x border-gray-100' : ''}`}
  >
    <motion.div whileHover={{ rotate: 15 }} className={`w-14 h-14 ${bg} rounded-full flex items-center justify-center mb-6 cursor-pointer`}>
      {icon}
    </motion.div>
    <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
    <p className="text-[11px] text-gray-400 mb-2">{sub}</p>
    <p className="text-sm font-semibold text-gray-800 max-w-[200px]">{detail}</p>
  </motion.div>
);

export default ContactPage;