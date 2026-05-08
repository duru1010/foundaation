

// "use client";

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const members = [
//   {
//     name: "Dr. Aristhoth",
//     role: "Chief Architect",
//     desc: "Leading the decentralized infrastructure strategy with over 15 years of experience in modular AI systems and high-throughput blockchain scaling.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     name: "Sarah Jen",
//     role: "Ecosystem Lead",
//     desc: "Dedicated to scaling community-driven protocols and fostering global developer partnerships to expand the network's reach.",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     name: "Marcus Vane",
//     role: "Head of AI",
//     desc: "Expert in neural architecture search and symbiotic machine learning frameworks designed for decentralized cloud computing.",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     name: "Elena Rossi",
//     role: "Strategy Director",
//     desc: "Optimizing institutional growth and decentralized governance models to ensure long-term ecosystem sustainability.",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
//   }
// ];

// const LeadershipCard = ({ member }: any) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="flex justify-center w-full">
//       <motion.div
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         initial={false}
//         animate={{ 
//           width: isHovered ? "100%" : "240px", 
//         }}
//         transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
//         className="relative flex items-center bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden cursor-pointer h-64 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10"
//       >
//         {/* IMAGE SECTION */}
//         <div className="h-64 w-60 flex-shrink-0 relative z-20 overflow-hidden">
//           <img
//             src={member.image}
//             alt={member.name}
//             className={`w-full h-full object-cover transition-all duration-700 ${
//               isHovered ? 'grayscale-0 scale-105' : 'grayscale'
//             }`}
//           />
          
//           {/* Default State: Name on Image Bottom */}
//           <AnimatePresence>
//             {!isHovered && (
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6"
//               >
//                 <h4 className="text-white font-bold text-lg leading-tight uppercase tracking-tighter">
//                   {member.name}
//                 </h4>
//                 <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">
//                   {member.role}
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Hover Overlay tint */}
//           {isHovered && <div className="absolute inset-0 bg-purple-900/5 transition-opacity" />}
//         </div>

//         {/* CONTENT SECTION (Visible on Hover) */}
//         <div className="flex-grow flex flex-col justify-center px-10 min-w-[350px]">
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.4, delay: 0.15 }}
//               >
//                 <div className="space-y-1 mb-4">
//                   <h3 className="text-3xl font-black uppercase tracking-tighter text-black leading-none">
//                     {member.name}
//                   </h3>
//                   <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.4em]">
//                     {member.role}
//                   </p>
//                 </div>
                
//                 <p className="text-sm text-gray-500 leading-relaxed font-medium max-w-sm">
//                   {member.desc}
//                 </p>
                
//                 <motion.div 
//                   initial={{ width: 0 }}
//                   animate={{ width: "60px" }}
//                   className="mt-6 h-[2px] bg-purple-600" 
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Watermark */}
//         <AnimatePresence>
//           {isHovered && (
//             <motion.span 
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 0.03, scale: 1 }}
//               className="absolute right-8 bottom-4 text-[120px] font-black italic text-purple-900 pointer-events-none select-none"
//             >
//               SC
//             </motion.span>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default function SwechetnaLeadershipGrid() {
//   return (
//     <section className="w-full bg-white py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
//         <div className="mb-24 flex flex-col items-start text-left">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="h-[1px] w-12 bg-purple-600" />
//             <span className="text-purple-600 font-bold text-xs uppercase tracking-[0.5em]">The Council</span>
//           </div>
          
//           <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black">
//             Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400">Swechetna Foundation</span>
//           </h3>
          
//           <div className="w-full max-w-lg mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
//              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest border-l-2 border-purple-100 pl-4">
//                Strategic leadership driving decentralized intelligence.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12 justify-items-center">
//           {members.map((member, i) => (
//             <LeadershipCard key={i} member={member} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const members = [
  {
    name: "Dr. Aristhoth",
    role: "Chief Architect",
    desc: "Leading the decentralized infrastructure strategy with over 15 years of experience in modular AI systems and high-throughput blockchain scaling.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Sarah Jen",
    role: "Ecosystem Lead",
    desc: "Dedicated to scaling community-driven protocols and fostering global developer partnerships to expand the network's reach.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Marcus Vane",
    role: "Head of AI",
    desc: "Expert in neural architecture search and symbiotic machine learning frameworks designed for decentralized cloud computing.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Elena Rossi",
    role: "Strategy Director",
    desc: "Optimizing institutional growth and decentralized governance models to ensure long-term ecosystem sustainability.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
  },
];

const LeadershipCard = ({ member }: { member: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center w-full">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{
          width: isHovered ? "100%" : "240px",
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="
          relative 
          flex 
          items-center 
          bg-white 
          border 
          border-gray-100 
          rounded-[2.5rem] 
          overflow-hidden 
          cursor-pointer 
          shadow-sm 
          hover:shadow-2xl 
          hover:shadow-purple-500/10

          h-[260px]
          md:h-64

          w-full
          md:w-auto
        "
      >
    
      {/* ================= MOBILE VIEW ================= */}
<div className="md:hidden w-full h-full relative">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-end p-4">
    
    <h4 className="text-white font-black text-sm uppercase leading-tight">
      {member.name}
    </h4>

    <p className="text-purple-300 text-[9px] font-bold uppercase tracking-[0.3em] mt-1">
      {member.role}
    </p>

    {/* DESCRIPTION */}
    <p className="mt-3 text-[10px] leading-4 text-white/80 line-clamp-4">
      {member.desc}
    </p>

  </div>
</div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:flex w-full h-full">
          {/* IMAGE SECTION */}
          <div className="h-64 w-60 flex-shrink-0 relative z-20 overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? "grayscale-0 scale-105" : "grayscale"
              }`}
            />

            {/* Default State */}
            <AnimatePresence>
              {!isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6"
                >
                  <h4 className="text-white font-bold text-lg leading-tight uppercase tracking-tighter">
                    {member.name}
                  </h4>

                  <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">
                    {member.role}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover Overlay */}
            {isHovered && (
              <div className="absolute inset-0 bg-purple-900/5 transition-opacity" />
            )}
          </div>

          {/* CONTENT SECTION */}
          <div className="flex-grow flex flex-col justify-center px-10 min-w-[350px]">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="space-y-1 mb-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-black leading-none">
                      {member.name}
                    </h3>

                    <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.4em]">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed font-medium max-w-sm">
                    {member.desc}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60px" }}
                    className="mt-6 h-[2px] bg-purple-600"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Watermark */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.03, scale: 1 }}
                className="absolute right-8 bottom-4 text-[120px] font-black italic text-purple-900 pointer-events-none select-none"
              >
                SC
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default function SwechetnaLeadershipGrid() {
  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        
        {/* ================= HEADING ================= */}
        <div className="mb-14 md:mb-24 flex flex-col items-start text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-purple-600" />

            <span className="text-purple-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.5em]">
              The Council
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black leading-tight">
            Leadership{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400">
              Swechetna Foundation
            </span>
          </h3>

          <div className="w-full max-w-lg mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border-l-2 border-purple-100 pl-4">
              Strategic leadership driving decentralized intelligence.
            </p>
          </div>
        </div>

        {/* ================= MOBILE GRID ================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {members.map((member, i) => (
            <LeadershipCard key={i} member={member} />
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12 justify-items-center">
          {members.map((member, i) => (
            <LeadershipCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}