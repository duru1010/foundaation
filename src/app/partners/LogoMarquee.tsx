"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Google", url: "/logo2.png" },
  { name: "Microsoft", url: "/logo2.png" },
  { name: "Amazon", url: "/logo2.png" },
  { name: "Apple", url: "/logo2.png" },
  { name: "Meta", url: "/logo2.png" },
  { name: "Netflix", url: "/logo2.png" },
];

const LogoMarquee = () => {
  return (
    <div className="w-full py-12 bg-white overflow-hidden relative">
      {/* Optional: Gradient Overlays for smooth fading on edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-16 items-center"
        animate={{
          x: ["0%", "-50%"], // Move half the width of the doubled container
        }}
        transition={{
          duration: 20, // Adjust speed here (higher = slower)
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render the logos twice for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;