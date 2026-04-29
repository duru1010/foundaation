"use client";
import React from 'react';
import Image from 'next/image';

const SwavalambanCard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3F0FF] p-6 lg:p-12">
      
      {/* TOP HEADING SECTION */}
      <div className="mb-12 text-center max-w-3xl">
        <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Swachetna Foundation
        </h3>
        <p className="text-xl text-purple-600 font-medium">
          Empowering women to become independent decision-makers and community leaders.
        </p>
      </div>

      {/* MAIN CARD CONTAINER */}
      <div className="flex w-full max-w-7xl min-h-[850px] overflow-hidden rounded-[50px] bg-white p-6 shadow-2xl md:flex-row flex-col-reverse">
        
        {/* LEFT SIDE: DESCRIPTION AREA */}
        <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 lg:px-20">
          {/* Program Badge */}
          <div className="mb-6 inline-flex w-fit items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700 uppercase tracking-widest">
            Economic Independence
          </div>

          <h4 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            SWAVALAMBAN: <br/>
            <span className="text-purple-600">Self-Reliance for Women</span>
          </h4>
          
          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Meaning <strong>self-reliance</strong>, SWAVALAMBAN is a flagship initiative aimed at empowering women socially, economically, and emotionally through a holistic approach to sustainable development.
          </p>

          {/* Core Focus Points */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Skill Development", desc: "Training in tailoring, food processing, digital literacy, and handicrafts." },
              { title: "SHG Strengthening", desc: "Forming Self-Help Groups to promote savings and financial literacy." },
              { title: "Microfinance Access", desc: "Providing market linkages and support for women-led businesses." },
              { title: "Legal Awareness", desc: "Helping women understand and assert their legal rights and entitlements." },
              { title: "Leadership Building", desc: "Workshops to cultivate agency, confidence, and community engagement." },
              { title: "Holistic Wellness", desc: "Health, nutrition, and wellness programs for total well-being." }
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
            Support Self-Reliance
          </button>
        </div>

        {/* RIGHT SIDE: IMAGE REVEAL AREA */}
        <div className="group relative flex flex-col justify-end overflow-hidden rounded-[40px] bg-[#6D28D9] md:w-1/2 min-h-[500px] cursor-pointer">
          
          {/* THE IMAGE: Revealed on Hover */}
          <Image 
            src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (8).jpeg" 
            alt="Swavalamban Initiative"
            fill
            className="z-0 object-cover opacity-90 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:scale-110"
            priority
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          {/* TEXT OVERLAY */}
          <div className="relative z-20 p-12 lg:p-16 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Nurturing a generation of resilient women.
            </h3>
            
            <p className="text-purple-100 opacity-90 text-base max-w-sm">
              We envision a future where every woman is an independent decision-maker and an active contributor to the economy.
            </p>
            
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-purple-300 group-hover:opacity-0 transition-opacity">
              Hover to view impact
            </p>
          </div>
          
          {/* DECORATIVE BACKGROUND */}
          <div className="absolute inset-0 flex items-center justify-center z-0 group-hover:opacity-0 transition-opacity duration-500">
             <div className="h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
             <p className="absolute text-purple-200 font-serif italic text-7xl lg:text-8xl opacity-10 select-none uppercase">Swavalamban</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SwavalambanCard;