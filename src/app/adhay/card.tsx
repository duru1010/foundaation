"use client";

import React from 'react';
import Image from 'next/image';

const AdhyayanCard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3F0FF] p-6 lg:p-12">
      
      {/* TOP HEADING SECTION */}
      <div className="mb-12 text-center max-w-3xl">
        <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Swachetna Foundation
        </h3>
        <p className="text-xl text-purple-600 font-medium">
          ADHYAYAN: Nurturing Minds, Empowering Futures
        </p>
      </div>

      {/* MAIN CARD CONTAINER */}
      <div className="flex w-full max-w-7xl min-h-[850px] overflow-hidden rounded-[50px] bg-white p-6 shadow-2xl md:flex-row flex-col">
        
        {/* LEFT SIDE: IMAGE REVEAL AREA */}
        <div className="group relative flex flex-col justify-end overflow-hidden rounded-[40px] bg-purple-900 md:w-1/2 min-h-[500px] cursor-pointer">
          
          {/* THE IMAGE */}
          <Image 
            src="/WhatsApp Image 2026-04-28 at 3.39.06 PM (2).jpeg" // Ensure you use the child education related image here
            alt="Adhyayan Child Education"
            fill
            className="z-0 object-cover opacity-80 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:scale-110"
            priority
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-purple-900 via-purple-900/40 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

          {/* TEXT OVERLAY */}
          <div className="relative z-20 p-12 lg:p-16 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Building the foundation <br/> for a better tomorrow.
            </h3>
            
            <p className="text-purple-100 opacity-90 text-base max-w-sm">
              Bridging learning gaps and empowering underprivileged children with the skills and confidence to succeed.
            </p>
            
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-purple-300 group-hover:opacity-0 transition-opacity">
              Hover to see them smile
            </p>
          </div>
          
          {/* DECORATIVE BACKGROUND */}
          <div className="absolute inset-0 flex items-center justify-center z-0 group-hover:opacity-0 transition-opacity duration-500">
             <div className="h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
             <p className="absolute text-purple-200 font-serif italic text-6xl lg:text-7xl opacity-10 select-none text-center">
               ADHYAYAN
             </p>
          </div>
        </div>

        {/* RIGHT SIDE: DESCRIPTION AREA */}
        <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 lg:px-20">
          {/* Program Badge */}
          <div className="mb-6 inline-flex w-fit items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700 uppercase tracking-widest">
            Child Education Initiative
          </div>

          <h4 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            ADHYAYAN: <br/>
            <span className="text-purple-600">Education for All</span>
          </h4>
          
          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Focused on ensuring access to quality education for underprivileged children, <strong>ADHYAYAN</strong> works to reduce inequality and lay the groundwork for an informed, self-reliant generation.
          </p>

          {/* Core Focus Points */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Inclusive Learning", desc: "Equitable opportunities for children from marginalized communities." },
              { title: "Foundational Skills", desc: "Literacy and numeracy through activity-based learning." },
              { title: "Retention Support", desc: "School re-enrollment to reduce dropout rates among at-risk kids." },
              { title: "Digital & Life Skills", desc: "Digital tools and remedial classes for well-rounded development." },
              { title: "Community Engagement", desc: "Fostering a supportive home learning environment with parents." },
              { title: "Educator Training", desc: "Empowering volunteers to deliver child-centric instruction." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center text-gray-900 font-bold mb-1 text-base">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] text-white">✓</span>
                  {item.title}
                </div>
                <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="mt-12 w-fit rounded-2xl bg-[#7C3AED] px-10 py-5 text-lg font-bold text-white shadow-xl shadow-purple-200 transition-all hover:bg-[#6D28D9] hover:-translate-y-1 active:scale-95">
            Educate a Child
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdhyayanCard;