
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Eye, Target, Rocket } from "lucide-react";

export default function AboutHero() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-visible bg-white pt-24 lg:pt-28 pb-64 md:pb-42">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f3e8ff_0%,#ffffff_70%)]"></div>

        <div className="absolute top-[-150px] md:top-[-200px] left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-purple-200 rounded-full blur-3xl opacity-40"></div>

        {/* BOTTOM BORDER */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About Our <span className="text-purple-600">Foundation</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-lg">
              We connect talented people with the right opportunities. Our
              platform helps companies grow and individuals build meaningful
              careers.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 w-full">
              <button
                onClick={scrollToContent}
                className="w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition shadow-lg shadow-purple-200"
              >
                Get Started
              </button>

              <button className="w-full sm:w-auto border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT (Optional Image Container) */}
          <div className="hidden lg:block relative h-[400px]">
             {/* You can add an image here later */}
          </div>
        </div>

        {/* 🔥 OVERLAPPING CARDS (CENTERED) */}
        {/* On mobile, we reduce the translate-y to ensure they don't overlap too much into the next section's text */}
        {/* 🔥 OVERLAPPING CARDS */}
{/* PARENT SECTION NOTE: Ensure the parent <section> has pb-40 md:pb-48 */}

<div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[35%] md:translate-y-[10%] z-50 w-full px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
    {[
      {
        icon: Eye,
        title: "Our Vision",
        desc: "To empower individuals and businesses through innovation and digital growth.",
      },
      {
        icon: Target,
        title: "Our Mission",
        desc: "Deliver impactful solutions that connect people with meaningful opportunities.",
      },
      {
        icon: Rocket,
        title: "Impact Since 2023",
        desc: "Helping thousands of users grow, collaborate, and succeed globally.",
      },
    ].map((item, i) => {
      const Icon = item.icon;

      return (
        <div key={i} className="relative group">
          {/* SOFT GLOW BACKGROUND */}
          <div className="absolute inset-0 rounded-2xl bg-purple-500/15 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* CARD */}
          <div className="relative bg-white rounded-2xl p-5 md:p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-purple-200">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 bg-purple-600 text-white flex items-center justify-center rounded-xl shadow-lg shadow-purple-200">
                <Icon size={20} />
              </div>

              <h4 className="text-base md:text-lg font-bold text-gray-900 text-left">
                {item.title}
              </h4>
            </div>

            <p className="text-xs md:text-sm text-gray-500 leading-relaxed text-left">
              {item.desc}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>
      </section>

      {/* 5. Anchor point where the scroll stops */}
      {/* pt-80 or more on mobile is required because the 3 stacked cards are very tall */}
      <div ref={nextSectionRef} className="pt-96 md:pt-42" />
    </>
  );
}