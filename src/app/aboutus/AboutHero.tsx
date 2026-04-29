"use client";

import Image from "next/image";
import { Eye, Target, Rocket } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-visible bg-white pt-28 pb-42">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f3e8ff_0%,#ffffff_70%)]"></div>

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-200 rounded-full blur-3xl opacity-40"></div>

      {/* BOTTOM BORDER */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            About Our <span className="text-purple-600">Company</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            We connect talented people with the right opportunities. Our platform helps companies grow and individuals build meaningful careers.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              Get Started
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT (optional image later) */}
        <div></div>
      </div>

      {/* 🔥 OVERLAPPING CARD (CENTERED) */}
   <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[50%] z-50 w-full px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

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

          {/* 🔥 SOFT GLOW BACKGROUND */}
          <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

          {/* ✨ GLOW BORDER */}
          <div className="absolute inset-0 rounded-2xl border border-purple-300 opacity-70 group-hover:opacity-100 transition"></div>

          {/* CARD */}
          <div className="relative bg-white rounded-2xl p-6 shadow-xl">

            {/* ICON + TITLE */}
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-xl">
                <Icon size={22} />
              </div>

              <h4 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h4>
            </div>

            {/* TEXT */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {item.desc}
            </p>

          </div>
        </div>
      );
    })}

  </div>
</div>


    </section>
  );
}