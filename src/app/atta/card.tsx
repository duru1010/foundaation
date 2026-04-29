// "use client";

// import React from 'react';
// // 1. IMAGE IMPORT SECTION
// // Option A: Local import (Place your image in /src/assets/ or similar)
// // import featureImage from '@/assets/branding-image.jpg'; 

// // Option B: Public folder (Direct string path)
// import Image from 'next/image';

// const DeepHeightFeatureCard = () => {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3F0FF] p-6 lg:p-12">
      
//       {/* TOP HEADING SECTION */}
//       <div className="mb-12 text-center">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
//           Elevate Your Workflow
//         </h1>
//         <p className="text-xl text-purple-600 font-medium">
//           The all-in-one platform for modern creative studios.
//         </p>
//       </div>

//       {/* MAIN CARD CONTAINER */}
//       {/* max-w-7xl and min-h-[800px] ensures a large, premium presence */}
//       <div className="flex w-full max-w-7xl min-h-[800px] overflow-hidden rounded-[50px] bg-white p-6 shadow-2xl md:flex-row flex-col-reverse">
        
//         {/* LEFT SIDE: DESCRIPTION AREA */}
//         <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 lg:px-24">
//           {/* Brand Icon */}
//           <div className="mb-12 inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-purple-100 shadow-sm">
//             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M2 17L12 22L22 17" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M2 12L12 17L22 12" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>

//           <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
//             Design with <br/>
//             <span className="text-purple-600">Intelligence</span>
//           </h2>
          
//           <p className="mt-8 text-xl text-gray-500 leading-relaxed max-w-lg">
//             HextaStudio provides a seamless interface to manage your projects from initial concept to final delivery. Our purple-themed dashboard ensures focus and creative flow.
//           </p>

//           {/* Feature List */}
//           <ul className="mt-12 space-y-6">
//             {['Real-time collaboration', 'Advanced analytics', 'Cloud-based storage'].map((item) => (
//               <li key={item} className="flex items-center text-xl text-gray-700 font-semibold">
//                 <span className="mr-5 flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 text-[14px] text-white">
//                   ✓
//                 </span>
//                 {item}
//               </li>
//             ))}
//           </ul>

//           {/* Primary Action */}
//           <button className="mt-16 w-fit rounded-2xl bg-[#7C3AED] px-12 py-6 text-xl font-bold text-white shadow-xl shadow-purple-200 transition-all hover:bg-[#6D28D9] hover:-translate-y-1 active:scale-95">
//             Explore Features
//           </button>
//         </div>

//         {/* RIGHT SIDE: IMAGE/VISUAL AREA */}
//         <div className="relative flex flex-col justify-end overflow-hidden rounded-[40px] bg-[#6D28D9] p-12 lg:p-20 text-white md:w-1/2 min-h-[600px]">
          
//           {/* 2. IMAGE COMPONENT PLACEHOLDER */}
//           {/* Replace src with your imported variable or a path in /public */}
//           <Image 
//             src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (5).jpeg" // Change this to your file path
//             alt="Feature Branding"
//             fill
//         className="z-0 object-cover transition-transform duration-700 hover:scale-105"
//             priority
//           />

//           {/* Text Content Overlay */}
//           <div className="relative z-10">
           
//             <p className="text-purple-100 opacity-90 text-lg max-w-md leading-relaxed">
//               Experience the next generation of business management tools designed for high-growth teams. This vertical space allows your brand to stand out.
//             </p>
//           </div>
          
//           {/* Decorative Glows */}
//           <div 
//             className="absolute top-0 right-0 h-full w-full opacity-50 z-0"
//             style={{
//               background: 'radial-gradient(circle at top right, #C084FC, transparent)',
//               filter: 'blur(80px)'
//             }}
//           />
          
//           {/* Grid Overlay for texture */}
//           <div className="absolute inset-0 opacity-20 pointer-events-none" 
//                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '30px 30px' }} 
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DeepHeightFeatureCard;

// "use client";

// import React from 'react';
// import Image from 'next/image';

// const AnnapurnaCard = () => {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3F0FF] p-6 lg:p-12">
      
//       {/* TOP HEADING SECTION */}
//       <div className="mb-12 text-center max-w-3xl">
//         <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
//           Swachetna Foundation
//         </h3>
//         <p className="text-xl text-purple-600 font-medium">
//           Eliminating hunger through sustainable, community-driven solutions.
//         </p>
//       </div>

//       {/* MAIN CARD CONTAINER */}
//       <div className="flex w-full max-w-7xl min-h-[850px] overflow-hidden rounded-[50px] bg-white p-6 shadow-2xl md:flex-row flex-col-reverse">
        
//         {/* LEFT SIDE: DESCRIPTION AREA */}
//         <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 lg:px-20">
//           {/* Program Badge */}
//           <div className="mb-6 inline-flex w-fit items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700 uppercase tracking-widest">
//             Flagship Initiative
//           </div>

//           <h4 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
//             ANNAPURNA: <br/>
//             <span className="text-purple-600">Food for Everyone</span>
//           </h4>
          
//           <p className="mt-8 text-lg text-gray-600 leading-relaxed">
//             Rooted in the belief that access to nutritious food is a basic human right, 
//             <strong> ANNAPURNA</strong> works to eliminate hunger through sustainable solutions, 
//             ensuring dignity for the underserved and vulnerable sections of society.
//           </p>

//           {/* Core Focus Points */}
//           <div className="mt-10 grid gap-6 sm:grid-cols-2">
//             {[
//               { title: "Nutritious Meals", desc: "Distribution to marginalized communities during emergencies." },
//               { title: "Reducing Waste", desc: "Redirecting surplus food from producers to those in need." },
//               { title: "Empowerment", desc: "Encouraging local involvement in food preparation." },
//               { title: "Sustainability", desc: "Linking support with livelihood and skill development." }
//             ].map((item, index) => (
//               <div key={index} className="group">
//                 <div className="flex items-center text-gray-900 font-bold mb-1">
//                   <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] text-white">✓</span>
//                   {item.title}
//                 </div>
//                 <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           <button className="mt-12 w-fit rounded-2xl bg-[#7C3AED] px-10 py-5 text-lg font-bold text-white shadow-xl shadow-purple-200 transition-all hover:bg-[#6D28D9] hover:-translate-y-1 active:scale-95">
//             Support the Mission
//           </button>
//         </div>

//         {/* RIGHT SIDE: IMAGE REVEAL AREA */}
//         <div className="group relative flex flex-col justify-end overflow-hidden rounded-[40px] bg-[#6D28D9] md:w-1/2 min-h-[500px] cursor-pointer">
          
//           {/* THE IMAGE: Revealed on Hover */}
//           <Image 
//             src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (5).jpeg" 
//             alt="Annapurna Initiative"
//             fill
//             className="z-0 object-cover opacity-90 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:scale-110"
//             priority
//           />

//           {/* GRADIENT OVERLAY (Fades in with image) */}
//           <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

//           {/* TEXT OVERLAY */}
//           <div className="relative z-20 p-12 lg:p-16 text-white">
//             <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
//               A hunger-free  society for all.
//             </h3>
            
//             <p className="text-purple-100 opacity-90 text-base max-w-sm">
//               No one should sleep hungry. Join us in creating a world where safe and nutritious food is accessible to every individual.
//             </p>
            
//             {/* Subtle Hint */}
//             <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-purple-300 group-hover:opacity-0 transition-opacity">
//               Hover to view impact
//             </p>
//           </div>
          
//           {/* DECORATIVE BACKGROUND (Visible when image is hidden) */}
//           <div className="absolute inset-0 flex items-center justify-center z-0 group-hover:opacity-0 transition-opacity duration-500">
//              <div className="h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
//              <p className="absolute text-purple-200 font-serif italic text-8xl opacity-10 select-none">ANNAPURNA</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AnnapurnaCard;


"use client";

import React from 'react';
import Image from 'next/image';

const AatmanirbharCard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3F0FF] p-6 lg:p-12">
      
      {/* TOP HEADING SECTION */}
      <div className="mb-12 text-center max-w-3xl">
        <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Swachetna Foundation
        </h3>
        <p className="text-xl text-purple-600 font-medium">
          Aatmanirbhar: Campaign to make self-reliant India
        </p>
      </div>

      {/* MAIN CARD CONTAINER */}
      <div className="flex w-full max-w-7xl min-h-[850px] overflow-hidden rounded-[50px] bg-white p-6 shadow-2xl md:flex-row flex-col">
        
        {/* LEFT SIDE: IMAGE REVEAL AREA */}
        <div className="group relative flex flex-col justify-end overflow-hidden rounded-[40px] bg-purple-900 md:w-1/2 min-h-[500px] cursor-pointer">
          
          {/* THE IMAGE */}
          <Image 
            src="/WhatsApp Image 2026-04-28 at 3.39.06 PM.jpeg" 
            alt="Aatmanirbhar Farmer Initiative"
            fill
            className="z-0 object-cover opacity-80 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:scale-110"
            priority
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-purple-900 via-purple-900/40 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

          {/* TEXT OVERLAY */}
          <div className="relative z-20 p-12 lg:p-16 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Empowering farmers, <br/> strengthening India.
            </h3>
            
            <p className="text-purple-100 opacity-90 text-base max-w-sm">
              Transforming rural lives by improving market access and increasing agricultural value through innovation and resilience.
            </p>
            
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-purple-300 group-hover:opacity-0 transition-opacity">
              Hover to view impact
            </p>
          </div>
          
          {/* DECORATIVE BACKGROUND */}
          <div className="absolute inset-0 flex items-center justify-center z-0 group-hover:opacity-0 transition-opacity duration-500">
             <div className="h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
             <p className="absolute text-purple-200 font-serif italic text-6xl lg:text-7xl opacity-10 select-none text-center">
               AATMANIRBHAR
             </p>
          </div>
        </div>

        {/* RIGHT SIDE: DESCRIPTION AREA */}
        <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 lg:px-20">
          {/* Program Badge */}
          <div className="mb-6 inline-flex w-fit items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700 uppercase tracking-widest">
            Self-Reliance Mission
          </div>

          <h4 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            Empowering Farmers <br/>
            <span className="text-purple-600">for Market Success</span>
          </h4>
          
          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Rooted in rural economic growth, <strong>AATMANIRBHAR</strong> equips farmers with tools to thrive in domestic and international markets, ensuring better price realization and reduced dependency on intermediaries.
          </p>

          {/* Core Focus Points */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Market Linkages", desc: "Direct buyer connections for domestic and global trade." },
              { title: "Capacity Building", desc: "Training on modern packaging and branding strategies." },
              { title: "Certification", desc: "Support for regulatory standards and premium market entry." },
              { title: "Promotional Platforms", desc: "Visibility through fairs, exhibitions, and digital tools." },
              { title: "Market Intelligence", desc: "Insights on price trends to enable informed decisions." },
              { title: "Value Addition", desc: "Innovation in processing to increase rural profitability." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center text-gray-900 font-bold mb-1">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] text-white">✓</span>
                  {item.title}
                </div>
                <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="mt-12 w-fit rounded-2xl bg-[#7C3AED] px-10 py-5 text-lg font-bold text-white shadow-xl shadow-purple-200 transition-all hover:bg-[#6D28D9] hover:-translate-y-1 active:scale-95">
            Support the Mission
          </button>
        </div>

      </div>
    </div>
  );
};

export default AatmanirbharCard;