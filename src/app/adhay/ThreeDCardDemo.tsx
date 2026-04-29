"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function AdhyayanCard() {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      {/* Top Heading with White to Purple Gradient */}
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-[#7C3AED] mb-4">
        ADHYAYAN: Campaign
      </h2>

      <CardContainer className="inter-var">
        <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-purple-100 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-sm">
          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Shiksha Jyoti
          </CardItem>

          {/* Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-purple-600 text-sm max-w-sm mt-2 dark:text-neutral-300 font-medium"
          >
            Running learning centers, distributing school kits, and offering scholarships to promote education among children from disadvantaged backgrounds.
          </CardItem>

          {/* Image */}
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="/WhatsApp Image 2026-04-28 at 3.39.06 PM.jpeg" 
              height="1000"
              width="1000"
              className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-purple-50"
              alt="Shiksha Jyoti Campaign"
            />
          </CardItem>

          {/* Fundraising Stats */}
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

          {/* Progress Bar (0% status) */}
          <CardItem translateZ={30} className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
            <div className="bg-[#7C3AED] h-full w-[0%]" />
          </CardItem>

          {/* Action Button */}
          <div className="flex justify-center items-center mt-8">
            <CardItem
              translateZ={50}
              as="button"
              className="px-8 py-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-md shadow-purple-200"
            >
              Donate Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}