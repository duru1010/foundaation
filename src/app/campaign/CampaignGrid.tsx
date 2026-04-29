"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const CAMPAIGNS = [
  {
    category: "ANNAPURNA",
    title: "Aanna Seva",
    desc: "Providing daily nutritious meals to the homeless, laborers, and low-income families across Pune to fight hunger.",
    image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (9).jpeg",
    raised: "₹5 Lakhs",
    goal: "₹20 Lakhs",
    progress: "25%",
    color: "#9b4d96",
    btnColor: "bg-[#fbc02d] hover:bg-[#f9a825]",
  },
  {
    category: "PRANITVA",
    title: "Goshala Seva",
    desc: "A heartfelt campaign focused on the welfare, care, and dignity of animals and birds, especially our beloved Gau Mata.",
    image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (4).jpeg",
    raised: "₹0",
    goal: "₹5 Lakhs",
    progress: "0%",
    color: "#7C3AED",
    btnColor: "bg-[#7C3AED] hover:bg-[#6D28D9]",
  },
  {
    category: "ADHYAYAN",
    title: "Shiksha Jyoti",
    desc: "Running learning centers and offering scholarships to promote education among children from disadvantaged backgrounds.",
    image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM.jpeg",
    raised: "₹0",
    goal: "₹10 Lakhs",
    progress: "0%",
    color: "#7C3AED",
    btnColor: "bg-[#7C3AED] hover:bg-[#6D28D9]",
  },
  {
    category: "AROGYA",
    title: "Swasthya Seva",
    desc: "Providing medical aid, healthcare camps, and emergency support to those who cannot afford essential treatments.",
    image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (4).jpeg", // Replace with specific Arogya image if available
    raised: "₹0",
    goal: "₹15 Lakhs",
    progress: "0%",
    color: "#7C3AED",
    btnColor: "bg-[#7C3AED] hover:bg-[#6D28D9]",
  },
];

export default function CampaignGrid() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Our Active <span className="text-purple-600">Campaigns</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Empowering lives through food, education, healthcare, and animal welfare. Join our mission today.
          </p>
        </div>

        {/* Responsive Grid - 1 col on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-6 justify-items-center">
          {CAMPAIGNS.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              
              {/* Category Heading above each card */}
              <h3 
                className="text-xl font-bold mb-2 uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-600"
              >
                {item.category}: Campaign
              </h3>

              <CardContainer className="inter-var">
                <CardBody className="bg-white dark:bg-gray-900 relative group/card border-black/[0.1] dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border shadow-sm transition-all">
                  
                  {/* Title */}
                  <CardItem translateZ="50" className="text-2xl font-bold text-[#1a2b4b] dark:text-white">
                    {item.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem as="p" translateZ="60" className="text-sm mt-2 dark:text-neutral-300 font-medium leading-relaxed" style={{ color: item.color }}>
                    {item.desc}
                  </CardItem>

                  {/* Image */}
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={item.image}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-500"
                      alt={item.title}
                    />
                  </CardItem>

                  {/* Stats */}
                  <div className="flex justify-between items-center mt-10">
                    <CardItem translateZ={40} className="flex flex-col">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Raise</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.raised}</span>
                    </CardItem>
                    <CardItem translateZ={40} className="flex flex-col items-end">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Goal</span>
                      <span className="text-sm font-bold" style={{ color: item.color }}>{item.goal}</span>
                    </CardItem>
                  </div>

                  {/* Progress Bar */}
                  <CardItem translateZ={30} className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full mt-2 overflow-hidden border border-gray-200/50">
                    <div 
                      className="h-full transition-all duration-1000" 
                      style={{ width: item.progress, backgroundColor: item.color }} 
                    />
                  </CardItem>

                  {/* Donate Button */}
                  <div className="flex justify-center items-center mt-8">
                    <CardItem
                      translateZ={50}
                      as="button"
                      className={`px-10 py-3 rounded-full text-white text-xs font-bold transition-all shadow-lg active:scale-95 ${item.btnColor}`}
                    >
                      Donate Now
                    </CardItem>
                  </div>

                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}