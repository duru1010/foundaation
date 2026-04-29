"use client";
import React from 'react';
import Image from 'next/image';

const PranitvaCard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3F0FF] p-6 lg:p-12">
      
      {/* TOP HEADING SECTION */}
      <div className="mb-12 text-center max-w-3xl">
        <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Swachetna Foundation
        </h3>
        <p className="text-xl text-purple-600 font-medium">
          Cultivating a culture of compassionate leadership for all living creatures.
        </p>
      </div>

      {/* MAIN CARD CONTAINER */}
      <div className="flex w-full max-w-7xl min-h-[850px] overflow-hidden rounded-[50px] bg-white p-6 shadow-2xl md:flex-row flex-col-reverse">
        
        {/* LEFT SIDE: DESCRIPTION AREA */}
        <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 lg:px-20">
          {/* Program Badge */}
          <div className="mb-6 inline-flex w-fit items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700 uppercase tracking-widest">
            Animal & Bird Welfare
          </div>

          <h4 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            PRANITVA: <br/>
            <span className="text-purple-600">Compassion in Action</span>
          </h4>
          
          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            A social initiative dedicated to protecting and promoting the welfare of animals and birds. 
            <strong> PRANITVA</strong> drives community-led actions for the humane treatment and 
            conservation of our co-inhabitants in the ecosystem.
          </p>

          {/* Core Focus Points */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Rescue & Rehab", desc: "Immediate care for injured or abandoned animals and birds." },
              { title: "Awareness Drives", desc: "Educating communities on animal rights and biodiversity." },
              { title: "Conflict Mitigation", desc: "Strategies for peaceful human-animal coexistence." },
              { title: "Veterinary Support", desc: "Providing medical aid and shelter for stray populations." },
              { title: "Responsible Adoption", desc: "Encouraging ethical pet ownership to reduce strays." },
              { title: "Youth Engagement", desc: "Involving volunteers in wildlife conservation activities." }
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
            Join the Mission
          </button>
        </div>

        {/* RIGHT SIDE: IMAGE REVEAL AREA */}
        <div className="group relative flex flex-col justify-end overflow-hidden rounded-[40px] bg-[#6D28D9] md:w-1/2 min-h-[500px] cursor-pointer">
          
          {/* THE IMAGE: Revealed on Hover */}
          <Image 
            src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (4).jpeg" 
            alt="Pranitva Initiative"
            fill
            className="z-0 object-cover opacity-90 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:scale-110"
            priority
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          {/* TEXT OVERLAY */}
          <div className="relative z-20 p-12 lg:p-16 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Protecting the voice of the voiceless.
            </h3>
            
            <p className="text-purple-100 opacity-90 text-base max-w-sm">
              Every living creature is an integral part of a balanced ecosystem. Join us in safeguarding their lives and habitats.
            </p>
            
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-purple-300 group-hover:opacity-0 transition-opacity">
              Hover to view impact
            </p>
          </div>
          
          {/* DECORATIVE BACKGROUND */}
          <div className="absolute inset-0 flex items-center justify-center z-0 group-hover:opacity-0 transition-opacity duration-500">
             <div className="h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
             <p className="absolute text-purple-200 font-serif italic text-8xl opacity-10 select-none uppercase">Pranitva</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PranitvaCard;