// "use client";

// import React from "react";
// import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

// export function ThreeDCardDemo() {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <img
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
//         <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             as="a"
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem>
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// }

"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function AnnapurnaCard() {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      {/* Top Heading with White to Purple Gradient */}
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-[#9b4d96] mb-4">
        ANNAPURNA: Campaign
      </h2>

      <CardContainer className="inter-var">
        <CardBody className="bg-[#FFFDF5] relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-[#1a2b4b] dark:text-white"
          >
            Aanna Seva
          </CardItem>

          {/* Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-[#9b4d96] text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Providing daily nutritious meals to the homeless, laborers, and low-income families across Pune to fight hunger and malnutrition.
          </CardItem>

          {/* Image */}
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (9).jpeg"
              height="1000"
              width="1000"
              className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Aanna Seva Campaign"
            />
          </CardItem>

          {/* Fundraising Stats */}
          <div className="flex justify-between items-center mt-10">
            <CardItem translateZ={40} className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Raise</span>
              <span className="text-sm font-bold text-[#9b4d96]">₹5 Lakhs</span>
            </CardItem>
            <CardItem translateZ={40} className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Goal</span>
              <span className="text-sm font-bold text-[#9b4d96]">₹20 Lakhs</span>
            </CardItem>
          </div>

          {/* Progress Bar */}
          <CardItem translateZ={30} className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
            <div className="bg-[#bc66b6] h-full w-[25%]" />
          </CardItem>

          {/* Action Button */}
          <div className="flex justify-center items-center mt-8">
            <CardItem
              translateZ={50}
              as="button"
              className="px-8 py-2 rounded-full bg-[#fbc02d] hover:bg-[#f9a825] text-white text-xs font-bold transition-colors"
            >
              Donate Us
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}