// "use client";

// import React from "react";
// import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

// export function AatmanirbharCard() {
//   return (
//     <div className="py-10 flex flex-col items-center justify-center">
//       {/* Top Heading with White to Purple Gradient */}
//       <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-[#7C3AED] mb-4">
//         Aatmanirbhar Abhiyan
//       </h2>

//       <CardContainer className="inter-var">
//         <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-purple-100 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-sm">
//           {/* Title */}
//           <CardItem
//             translateZ="50"
//             className="text-2xl font-bold text-gray-900 dark:text-white"
//           >
//             Self-Reliance Initiative
//           </CardItem>

//           {/* Description */}
//           <CardItem
//             as="p"
//             translateZ="60"
//             className="text-purple-600 text-sm max-w-sm mt-2 dark:text-neutral-300 font-medium"
//           >
//             Integrated livelihood and entrepreneurship support programs aimed at building local economies and empowering individuals to lead self-sufficient lives.
//           </CardItem>

//           {/* Image */}
//           <CardItem translateZ="100" className="w-full mt-4">
//             <img
//               src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (5).jpeg" 
//               height="1000"
//               width="1000"
//               className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-purple-50"
//               alt="Aatmanirbhar Abhiyan"
//             />
//           </CardItem>

//           {/* Fundraising Stats */}
//           <div className="flex justify-between items-center mt-10">
//             <CardItem translateZ={40} className="flex flex-col">
//               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Raise</span>
//               <span className="text-sm font-bold text-gray-900">₹0</span>
//             </CardItem>
//             <CardItem translateZ={40} className="flex flex-col items-end">
//               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Goal</span>
//               <span className="text-sm font-bold text-[#7C3AED]">₹10 Lakhs</span>
//             </CardItem>
//           </div>

//           {/* Progress Bar (0% state) */}
//           <CardItem translateZ={30} className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
//             <div className="bg-[#7C3AED] h-full w-[0%]" />
//           </CardItem>

//           {/* Action Button */}
//           <div className="flex justify-center items-center mt-8">
//             <CardItem
//               translateZ={50}
//               as="button"
//               className="px-8 py-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-md shadow-purple-200"
//             >
//               Support the Mission
//             </CardItem>
//           </div>
//         </CardBody>
//       </CardContainer>
//     </div>
//   );
// }

"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function AatmanirbharCardGroup() {
  return (
    <div className="py-10 flex flex-col items-center justify-center bg-[#F3F0FF]">
      {/* Main Section Heading */}
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-[#7C3AED] mb-12">
        Our Campaigns
      </h2>

      {/* Grid Container for the 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        
        {/* CARD 1 */}
        <CardContainer className="inter-var">
          <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-purple-100 w-auto sm:w-[25rem] h-auto rounded-xl p-6 border shadow-sm">
            <CardItem translateZ="50" className="text-2xl font-bold text-gray-900 dark:text-white">
              Self-Reliance Initiative
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-purple-600 text-sm max-w-sm mt-2 font-medium">
              Integrated livelihood and entrepreneurship support programs aimed at building local economies.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (5).jpeg"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-purple-50"
                alt="Aatmanirbhar Abhiyan"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem translateZ={40} className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Raise</span>
                <span className="text-sm font-bold text-gray-900">₹0</span>
              </CardItem>
              <CardItem translateZ={40} className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Goal</span>
                <span className="text-sm font-bold text-[#7C3AED]">₹10 Lakhs</span>
              </CardItem>
            </div>
            <CardItem translateZ={30} className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#7C3AED] h-full w-[0%]" />
            </CardItem>
            <div className="flex justify-center items-center mt-8">
              <CardItem translateZ={50} as="button" className="px-8 py-2 rounded-full bg-[#7C3AED] text-white text-xs font-bold">
                Support
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

      
        {/* CARD 3 (Duplicated) */}
        <CardContainer className="inter-var">
          <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-purple-100 w-auto sm:w-[25rem] h-auto rounded-xl p-6 border shadow-sm">
            <CardItem translateZ="50" className="text-2xl font-bold text-gray-900 dark:text-white">
              Self-Reliance Initiative
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-purple-600 text-sm max-w-sm mt-2 font-medium">
              Integrated livelihood and entrepreneurship support programs aimed at building local economies.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (5).jpeg"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-purple-50"
                alt="Aatmanirbhar Abhiyan"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem translateZ={40} className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Raise</span>
                <span className="text-sm font-bold text-gray-900">₹0</span>
              </CardItem>
              <CardItem translateZ={40} className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Goal</span>
                <span className="text-sm font-bold text-[#7C3AED]">₹10 Lakhs</span>
              </CardItem>
            </div>
            <CardItem translateZ={30} className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#7C3AED] h-full w-[0%]" />
            </CardItem>
            <div className="flex justify-center items-center mt-8">
              <CardItem translateZ={50} as="button" className="px-8 py-2 rounded-full bg-[#7C3AED] text-white text-xs font-bold">
                Support
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

      </div>
    </div>
  );
}