"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    /* 1. Changed bg-white to match the image background (#f2f2f2) */
    <section className="relative overflow-hidden bg-[#f2f2f2] py-16">
      
      {/* BACKGROUND ELEMENTS - Adjusted gradient to blend from image-color to light purple */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f3e8ff_0%,#f2f2f2_70%)]"></div>
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      {/* BOTTOM BORDER */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[1.5px] z-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT PANEL */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight animate-slide-left">
             Our <span className="text-purple-600">Campaign</span>
          </h3>

          <p className="mt-4 text-base text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed animate-slide-left [animation-delay:200ms] fill-mode-forwards">
            We connect talented people with the right opportunities. Our platform helps companies grow and individuals build meaningful careers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 animate-slide-left [animation-delay:400ms] fill-mode-forwards">
            <button className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-700 transition flex items-center gap-2 group">
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>

            <button className="border border-gray-400 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-200 transition bg-white/50">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in [animation-delay:600ms] fill-mode-forwards">
          <div className="relative w-[280px] h-[380px] lg:w-[320px] lg:h-[420px] flex items-center justify-center">
            
            {/* Ambient Shadow - darkened slightly for better contrast on grey */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-purple-900/20 blur-[25px] rounded-full z-0"/>
            
            <Image
              src="/d39190c9f7198715831cb9605d9465d3.jpg" 
              alt="Strategic crystal"
              width={320}
              height={420}
              priority
              className="relative z-10 object-contain float-anim mix-blend-multiply" 
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-slide-left, .animate-fade-in {
          opacity: 0;
        }

        .fill-mode-forwards {
          animation-fill-mode: forwards !important;
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-slide-left {
          animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .float-anim {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
}