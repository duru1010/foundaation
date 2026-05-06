// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';

// export default function CocoberryHero() {
//   // Entrance and floating animation for the bowl
//   const bowlVariants: Variants = {
//     // Initial state: Off-screen to the left
//     hidden: { 
//       x: -500, 
//       opacity: 0, 
//       rotate: -45 
//     },
//     // Visible state: Slides into center
//     visible: { 
//       x: 0, 
//       opacity: 1, 
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 15,
//         duration: 1.2
//       }
//     },
//     // Hover/Floating state: Gentle up and down
//     animate: {
//       y: [0, -20, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <section className="relative w-full h-[500px] flex items-center overflow-hidden bg-[#D1C4E9]">
      
//       {/* Background Diagonal Split */}
//       <div 
//         className="absolute inset-0 bg-white" 
//         style={{ clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 40% 100%)' }}
//       />

//       <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center relative z-10">
        
//         {/* Left Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-white space-y-4"
//         >
//           <h1 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">
//             Completely <br /> Indian brand
//           </h1>
//           <p className="text-sm md:text-base font-medium max-w-sm opacity-90">
//             Cocoberry is India's first and leading frozen yogurt brand. 
//             We are 8 years old and have the largest network of outlets.
//           </p>
//           <div className="flex gap-3 pt-2">
//             <button className="px-6 py-2.5 bg-white text-purple-900 font-bold rounded-full text-xs uppercase tracking-widest shadow-md hover:bg-gray-100 transition-colors">
//               About Cocoberry
//             </button>
//             <button className="px-6 py-2.5 bg-[#FF3366] text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-md hover:brightness-110 transition-all">
//               Contact Us
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Content: Bowl in a Circle with Entrance Animation */}
//         <div className="relative flex justify-center items-center">
          
//           <motion.div 
//             variants={bowlVariants}
//             initial="hidden"
//             animate={["visible", "animate"]} // Executes entrance then loop
//             className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
//           >
//             {/* The Bowl in a Circular Container */}
//             <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm">
//                 <img 
//                 src="https://i.ibb.co/Xz9fN3K/smoothie-bowl-top.png" 
//                 alt="Cocoberry Bowl"
//                 className="w-full h-full object-cover scale-110" // scale ensures the image fills the circle
//                 />
//             </div>
            
//             {/* Show Menu Overlay Circle */}
//             <motion.div 
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer z-20"
//             >
//               <span className="text-[9px] font-black text-black text-center leading-none">
//                 SHOW <br /> MENU
//               </span>
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function CocoberryBookHero() {
  // Animation for the text content (Preserved)
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, delay: 0.5 } 
    }
  };

  // Animation for the whole book container (Preserved)
  const bookContainerVariants: Variants = {
    hidden: { x: 600, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 15,
        duration: 1.5
      }
    },
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }
  };

  // Animation for the cover swinging open (Preserved)
  const coverVariants: Variants = {
    closed: { rotateY: 0 },
    open: { 
      rotateY: -145, 
      transition: {
        delay: 2.2, 
        duration: 1.8,
        ease: [0.45, 0.05, 0.55, 0.95]
      }
    }
  };

  // NEW: Animation for the Internal Image Opening/Unfolding
  const internalImageVariants: Variants = {
    closed: { 
      rotateY: 90,     // Start folded inwards
      scale: 0.9,       // Slightly smaller
      opacity: 0.5,     // Dimmed
      transformOrigin: 'left' // Critical for unfolding
    },
    open: { 
      rotateY: 0, 
      scale: 1,
      opacity: 1,
      transition: {
        // COORDINATION: This delay must slightly overlap with or match the cover delay
        delay: 2.3, 
        duration: 1.6,
        ease: [0.33, 1, 0.68, 1] // Strong ease-out for a dramatic unroll
      }
    }
  };

  return (
    <section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-[#F3E8FF]">
      
      {/* Background Diagonal Split */}
      <div 
        className="absolute inset-0 bg-white" 
        style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 35% 100%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT SECTION */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-gray-900">
              Completely <br /> 
              <span className="text-[#7C3AED]">Indian brand</span>
            </h1>
            <div className="h-2 w-24 bg-[#7C3AED] rounded-full" />
          </div>
          
          <p className="text-lg md:text-xl font-medium max-w-md text-gray-600 leading-relaxed">
            Cocoberry is India's first and leading frozen yogurt brand. 
            We are 8 years old and have the largest network of outlets across the nation.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-4 bg-[#7C3AED] text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-xl hover:bg-[#6D28D9] hover:-translate-y-1 transition-all">
              View Our Story
            </button>
            <button className="px-10 py-4 border-2 border-[#7C3AED] text-[#7C3AED] font-bold rounded-full text-sm uppercase tracking-widest hover:bg-purple-50 transition-all">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* RIGHT CONTENT: THE 3D BOOK */}
        <div className="relative flex justify-center items-center perspective-[2000px]">
          <motion.div 
            variants={bookContainerVariants}
            initial="hidden"
            animate={["visible", "floating"]}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative w-[300px] h-[420px] md:w-[380px] md:h-[520px]"
          >
            
            {/* THE BOOK BODY */}
            <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* THE IMAGE (Revealed via Unfolding Animation) */}
              <motion.div 
                variants={internalImageVariants}
                initial="closed"
                animate="open"
                className="absolute inset-0 bg-white rounded-r-xl shadow-inner border-l-[10px] border-gray-100 overflow-hidden"
                style={{ 
                    backfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d', 
                }}
              >
                <img 
                  src="/313b9733598cfb4a60c9dad0a4f3608e.jpg" 
                  alt="Delicious Yogurt"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
              </motion.div>

              {/* STACK OF PAGES (Thickness - Preserved) */}
              <div className="absolute top-0 right-0 h-full w-[15px] bg-gray-200 origin-left"
                   style={{ transform: 'rotateY(90deg) translateZ(365px)' }} />

              {/* FRONT COVER (Swinging Open Animation - Preserved) */}
              <motion.div 
                variants={coverVariants}
                initial="closed"
                animate="open"
                className="absolute inset-0 bg-[#7C3AED] rounded-r-xl shadow-2xl z-30 flex flex-col items-center justify-center p-10 border-l-[12px] border-[#5B21B6]"
                style={{ 
                  transformOrigin: 'left',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="border-2 border-white/30 w-full h-full flex flex-col items-center justify-center space-y-6">
                  <div className="text-white text-center">
                    <h2 className="text-4xl font-black tracking-tighter uppercase">Coco</h2>
                    <h2 className="text-4xl font-black tracking-tighter uppercase -mt-2">Berry</h2>
                  </div>
                  <div className="w-12 h-1 bg-white" />
                  <p className="text-purple-200 text-[10px] font-bold uppercase tracking-[0.4em]">Est. 2016</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}