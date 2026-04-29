"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
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