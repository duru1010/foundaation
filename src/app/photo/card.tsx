"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "All",
  "PCOD Awareness Camp",
  "Hands of Hope for Kids",
  "Free Health Checkup",
  "Food Donation For Deaf Students",
  "Women Empowerment",
  "Diwali Hamper Distribution",
  "Diwali Hamper Sale",
  "Diwali Hamper Making",
  "Ration Distribution",
  "Rakhi Stall",
  "Anna Seva",
];

const Card = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<any>(null);

  // ✅ FIXED: Deterministic data (NO Math.random)
  const allImages = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/${i + 125}/600/${
      i % 2 === 0 ? "800" : "500"
    }`,
    category: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1], // ✅ stable
    alt: `Photo ${i + 1}`,
    heightClass:
      i % 3 === 0
        ? "h-[450px]"
        : i % 2 === 0
        ? "h-[320px]"
        : "h-[400px]",
  }));

  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  const columns: any[][] = [[], [], [], []];
  filteredImages.forEach((img, index) => {
    columns[index % 4].push(img);
  });

  return (
    <div className="min-h-screen bg-[#faf8ff] py-16 px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-black text-purple-950 mb-4 tracking-tight">
          Photo <span className="text-purple-600">Gallery</span>
        </h1>
        <p className="text-purple-400 font-medium max-w-lg mx-auto">
          Capturing moments of impact and hope. Explore our journey through the
          lens.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-6xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
              filter === cat
                ? "bg-purple-600 border-purple-600 text-white shadow-[0_10px_20px_-5px_rgba(147,51,234,0.4)] scale-105"
                : "bg-white border-purple-100 text-purple-700 hover:border-purple-300 hover:shadow-md"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="max-w-[1500px] mx-auto flex flex-row gap-8 items-start justify-center">
        {columns.map((col, colIdx) => (
          <div
            key={colIdx}
            className={`flex flex-col w-1/4 gap-8 ${
              colIdx === 0
                ? "pt-40"
                : colIdx === 1
                ? "pt-20"
                : colIdx === 3
                ? "pt-28"
                : ""
            }`}
          >
            <AnimatePresence mode="popLayout">
              {col.map((img) => (
                <motion.div
                  layout
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImg(img)}
                  className="cursor-pointer"
                >
                  <ImageCard img={img} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-purple-950/95 backdrop-blur-md p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              />

              <div className="mt-6 text-center text-white">
                <span className="bg-purple-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {selectedImg.category}
                </span>
                <h3 className="text-2xl font-bold mt-3">
                  {selectedImg.alt}
                </h3>
                <p className="text-purple-200 mt-1">
                  Click anywhere to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageCard = ({ img }: { img: any }) => (
  <div
    className={`relative w-full ${img.heightClass} overflow-hidden rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-purple-200 hover:shadow-2xl group`}
  >
    <div className="absolute inset-0 border-[8px] border-transparent group-hover:border-purple-500/10 rounded-[2.5rem] z-10 transition-all duration-500" />

    <img
      src={img.src}
      alt={img.alt}
      loading="lazy"
      className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-110"
    />

    {/* Category */}
    <div className="absolute top-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <div className="bg-white/90 backdrop-blur-md text-purple-700 px-4 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-wider shadow-xl">
        {img.category}
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

export default Card;

// "use client";

// import React, { useState } from 'react';

// const Card = () => {
//   // 1. YOUR ACTUAL DATA
//   // Manually list your images here. 
//   // Make sure these files exist in your /public folder!
//   const myPhotos = [
//     { src: "/gallery/photo1.jpg", alt: "Description 1" },
//     { src: "/gallery/photo2.jpg", alt: "Description 2" },
//     { src: "/gallery/photo3.jpg", alt: "Description 3" },
//     // ... repeat until you have 100
//     { src: "/gallery/photo100.jpg", alt: "Description 100" },
//   ];

//   // This maps your 100 photos and assigns the staggered height classes automatically
//   const allImages = myPhotos.map((img, i) => ({
//     id: i,
//     src: img.src,
//     alt: img.alt,
//     // This keeps the masonry "brick" effect from the reference image
//     heightClass: i % 3 === 0 ? "h-[450px]" : i % 2 === 0 ? "h-[300px]" : "h-[400px]"
//   }));

//   const [displayCount, setDisplayCount] = useState(20);
//   const visibleImages = allImages.slice(0, displayCount);

//   const columns: any[][] = [[], [], [], []];
//   visibleImages.forEach((img, index) => {
//     columns[index % 4].push(img);
//   });

//   return (
//     <div className="min-h-screen bg-white py-20 px-6">
//       <div className="max-w-[1400px] mx-auto flex flex-row gap-6 items-start justify-center">
        
//         {/* Column 1 - Start Lower */}
//         <div className="flex flex-col w-1/4 pt-32 gap-6">
//           {columns[0].map((img) => <ImageCard key={img.id} img={img} />)}
//         </div>

//         {/* Column 2 - Start Mid */}
//         <div className="flex flex-col w-1/4 pt-16 gap-6">
//           {columns[1].map((img) => <ImageCard key={img.id} img={img} />)}
//         </div>

//         {/* Column 3 - Start High */}
//         <div className="flex flex-col w-1/4 gap-6">
//           {columns[2].map((img) => <ImageCard key={img.id} img={img} />)}
//         </div>

//         {/* Column 4 - Start Mid-Lower */}
//         <div className="flex flex-col w-1/4 pt-24 gap-6">
//           {columns[3].map((img) => <ImageCard key={img.id} img={img} />)}
//         </div>
//       </div>

//       {displayCount < allImages.length && (
//         <div className="flex justify-center mt-24">
//           <button 
//             onClick={() => setDisplayCount(prev => prev + 20)}
//             className="group relative px-10 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full overflow-hidden transition-all hover:text-white"
//           >
//             <span className="absolute inset-0 w-0 bg-purple-600 transition-all duration-300 ease-out group-hover:w-full"></span>
//             <span className="relative">Explore More Photos</span>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const ImageCard = ({ img }: { img: any }) => (
//   <div className={`relative w-full ${img.heightClass} overflow-hidden rounded-3xl bg-purple-50 shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 group`}>
//     <div className="absolute inset-0 border-[6px] border-transparent group-hover:border-purple-500/20 rounded-3xl z-10 transition-colors duration-500" />
//     <img
//       src={img.src}
//       alt={img.alt}
//       loading="lazy"
//       className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors duration-500" />
//   </div>
// );

// export default Card;