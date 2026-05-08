// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';

// export default function CocoberryHero() {
//   const imageVariants: Variants = {
//     hidden: { 
//       y: 600,        
//       opacity: 0, 
//     },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: {
//         type: "spring",
//         stiffness: 40,  
//         damping: 15,
//         duration: 1.5
//       }
//     },
//   };

//   return (
//     <section className="relative w-full h-[600px] flex items-center overflow-hidden bg-[#F3E8FF]">
      
//       {/* Background Diagonal Split */}
//       <div 
//         className="absolute inset-0 bg-white" 
//         style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 35% 100%)' }}
//       />

//       <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center relative z-10">
        
//         {/* Left Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="space-y-6"
//         >
//           <h4 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter text-gray-900">
//             Completely <br /> 
//             <span className="text-[#7C3AED]">Indian brand</span>
//           </h4>
          
//           <p className="text-sm md:text-base font-medium max-w-sm text-gray-600 opacity-80 leading-relaxed">
//             Cocoberry is India's first and leading frozen yogurt brand. 
//             We are 8 years old and have the largest network of outlets.
//           </p>
          
//           <div className="flex gap-4 pt-2">
//             <button className="px-8 py-3 bg-[#7C3AED] text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-lg hover:bg-[#6D28D9] transition-all">
//               view more
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Content: Rectangular Image Animation */}
//         <div className="relative flex justify-center items-center h-full">
//           <motion.div 
//             variants={imageVariants}
//             initial="hidden"
//             animate="visible"
//             className="relative w-full max-w-[500px] aspect-square md:aspect-auto md:h-[450px]"
//           >
//             {/* Removed circle: Now a clean rectangular image with soft rounded corners */}
//             <img 
//               src="/b209578157f8f9ca8d2c4559f5d30b29.jpg" 
//               alt="Cocoberry Product"
//               className="w-full h-full object-cover rounded-3xl shadow-2xl border-8 border-white"
//             />
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// }


'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function CocoberryHero() {
  const imageVariants: Variants = {
    hidden: { 
      y: 600,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 15,
        duration: 1.5
      }
    },
  };

  return (
    <section className="relative w-full min-h-[550px] md:h-[600px] flex items-center overflow-hidden bg-[#F3E8FF]">

      {/* Background Diagonal Split */}
      <div
        className="absolute inset-0 bg-white hidden md:block"
        style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 35% 100%)' }}
      />

      {/* Mobile Gradient Background */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#F3E8FF] via-white to-[#F3E8FF]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">

        {/* ================= MOBILE VIEW ================= */}
        <div className="flex flex-col md:hidden items-center text-center pt-24 pb-16">

          {/* IMAGE */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-[240px] h-[320px]"
          >
            <img
              src="/b209578157f8f9ca8d2c4559f5d30b29.jpg"
              alt="Cocoberry Product"
              className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-8 border-white"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 space-y-6"
          >
           <h4 className="text-4xl font-black uppercase leading-none tracking-tighter text-gray-900">
  Building a <br />
  <span className="text-[#7C3AED]">Self-Reliant India</span>
</h4>

<p className="text-sm font-medium max-w-sm mx-auto text-gray-600 opacity-80 leading-relaxed">
  Atmanirbhar Bharat is a movement toward empowering local communities,
  strengthening rural development, and creating sustainable opportunities
  through innovation, unity, and self-dependence.
</p>

            
          </motion.div>

        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h4 className="text-4xl font-black uppercase leading-none tracking-tighter text-gray-900">
  Building a <br />
  <span className="text-[#7C3AED]">Self-Reliant India</span>
</h4>

<p className="text-sm font-medium max-w-sm mx-auto text-gray-600 opacity-80 leading-relaxed text-center">
  Atmanirbhar Bharat is a movement toward empowering local communities,
  strengthening rural development, and creating sustainable opportunities
  through innovation, unity, and self-dependence.
</p>

         
          </motion.div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center h-full  mt-20">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[500px] aspect-square md:aspect-auto md:h-[450px]"
            >
              <img
                src="/b209578157f8f9ca8d2c4559f5d30b29.jpg"
                alt="Cocoberry Product"
                className="w-[240px] h-[320px] object-cover rounded-3xl shadow-2xl border-8 border-white"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}