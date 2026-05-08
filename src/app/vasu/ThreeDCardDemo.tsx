"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";

export function SwavalambanCampaignCard() {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      {/* Top Heading with Black to Purple Gradient */}
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-[#7C3AED] mb-4">
        SWAVALAMBAN: Campaign
      </h2>

      <CardContainer className="inter-var">
        <CardBody className="bg-[#FFFDFB] relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border transition-all">
          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-[#1a2b4b] dark:text-white"
          >
            Shakti
          </CardItem>

          {/* Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-[#7C3AED] text-sm max-w-sm mt-2 dark:text-neutral-300 font-medium"
          >
            Skill development, vocational training, and microenterprise support for women to become economically self-sufficient.
          </CardItem>

          {/* Image */}
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="/WhatsApp Image 2026-04-28 at 3.39.05 PM.jpeg" 
              height="1000"
              width="1000"
              className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-500"
              alt="Shakti Empowerment Campaign"
            />
          </CardItem>

          {/* Fundraising Stats */}
          <div className="flex justify-between items-center mt-10">
            <CardItem translateZ={40} className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Raise</span>
              <span className="text-sm font-bold text-gray-900 font-mono">₹0</span>
            </CardItem>
            <CardItem translateZ={40} className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Goal</span>
              <span className="text-sm font-bold text-[#7C3AED] font-mono">₹10 Lakhs</span>
            </CardItem>
          </div>

          {/* Progress Bar (0%) */}
         <CardItem
  translateZ={30}
  className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden border border-gray-200/50"
>
  <div className="bg-[#7C3AED] h-full w-[0%] transition-all duration-1000" />
</CardItem>

{/* Action Button */}
<div className="mt-6 w-full">
  <Link href="/donate">
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-purple-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-purple-200 hover:bg-purple-700 transition-all flex items-center justify-center gap-3 group"
    >
      Donate Now

      <svg
        className="w-5 h-5 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </motion.button>
  </Link>
</div>
        </CardBody>
      </CardContainer>
    </div>
  );
}