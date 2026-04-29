// "use client";

// export default function HowItWorks() {
//   const cards = [
//     {
//       id: "01",
//       title: "Provide Brief Information",
//       desc: "Very quickly and efficiently provide information and references about your idea.",
//       image: "/images/work1.jpg",
//     },
//     {
//       id: "02",
//       title: "Choose Your Concept",
//       desc: "Choose your favorite style and create your image in seconds.",
//       image: "/images/work2.jpg",
//     },
//     {
//       id: "03",
//       title: "Quick Image Creation",
//       desc: "Generate stunning AI art in moments with one click creation.",
//       image: "/images/work3.jpg",
//     },
//     {
//       id: "04",
//       title: "Pick Art Style",
//       desc: "Select realistic, anime, 3D, sketch, watercolor or custom art style.",
//       image: "/images/work4.jpg",
//     },
//     {
//       id: "05",
//       title: "Add Custom Prompt",
//       desc: "Describe your imagination and let AI turn your words into visuals.",
//       image: "/images/work5.jpg",
//     },
//     {
//       id: "06",
//       title: "Generate Variations",
//       desc: "Create multiple unique versions instantly and pick your favorite.",
//       image: "/images/work6.jpg",
//     },
//     {
//       id: "07",
//       title: "Enhance Quality",
//       desc: "Upscale and improve image quality with one simple click.",
//       image: "/images/work7.jpg",
//     },
//     {
//       id: "08",
//       title: "Download Artwork",
//       desc: "Save your final image in high quality for personal or business use.",
//       image: "/images/work8.jpg",
//     },
//     {
//       id: "09",
//       title: "Share Instantly",
//       desc: "Publish your generated art directly to social platforms quickly.",
//       image: "/images/work9.jpg",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#f8f8f8] py-20 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-semibold text-black mb-3">
//           How it works?
//         </h2>

//         <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-16">
//           Following this, you will understand how to create your artwork in just
//           a few simple clicks.
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cards.map((item, index) => (
//             <div
//               key={index}
//               className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-white via-purple-300 to-purple-600 animate-glow group"
//             >
//               {/* Inner Card */}
//               <div className="bg-white rounded-[30px] p-6 h-full shadow-xl hover:-translate-y-2 transition duration-500">

//                 {/* Image */}
//                 <div className="relative overflow-hidden rounded-[24px] h-[220px] mb-6">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

//                   {/* Number */}
//                   <div className="absolute top-4 left-4 bg-white text-[#8a2eff] text-sm font-semibold px-3 py-1 rounded-full shadow-md">
//                     {item.id}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-semibold text-black mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-gray-500 leading-7">
//                   {item.desc}
//                 </p>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animation */}
//       <style jsx>{`
//         .animate-glow {
//           background-size: 300% 300%;
//           animation: glowMove 4s linear infinite;
//           box-shadow: 0 0 18px rgba(168, 85, 247, 0.35);
//         }

//         @keyframes glowMove {
//           0% {
//             background-position: 0% 50%;
//           }
//           100% {
//             background-position: 100% 50%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link"; // Import Link for redirection

export default function HowItWorks() {
  const cardsRef = useRef([]);

  const cards = [
    {
      id: "01",
      title: "ANNAPURNA",
      desc: "Very quickly and efficiently provide information and references about your idea.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (5).jpeg",
      link: "/anna", // Add the destination URL here
    },
    {
      id: "02",
      title: "ATTAMNIRBHAR",
      desc: "Choose your favorite style and create your image in seconds.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM.jpeg",
      link: "/initiatives/attamnirbhar",
    },
    {
      id: "03",
      title: "ADHYAYAN",
      desc: "Generate stunning AI art in moments with one click creation.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.07 PM.jpeg",
      link: "/initiatives/adhyayan",
    },
    {
      id: "04",
      title: "ANNADATA",
      desc: "Select realistic, anime, 3D, sketch, watercolor or custom art style.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (10).jpeg",
      link: "/initiatives/annadata",
    },
    {
      id: "05",
      title: "SWABHIMAN",
      desc: "Describe your imagination and let AI turn your words into visuals.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.05 PM.jpeg",
      link: "/initiatives/swabhiman",
    },
    {
      id: "06",
      title: "SWAVALAMBAN",
      desc: "Create multiple unique versions instantly and pick your favorite.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (8).jpeg",
      link: "/initiatives/swavalamban",
    },
    {
      id: "07",
      title: "VASUDHRAM",
      desc: "Upscale and improve image quality with one simple click.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (3).jpeg",
      link: "/initiatives/vasudhram",
    },
    {
      id: "08",
      title: "PRANITVA",
      desc: "Save your final image in high quality for personal or business use.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (1).jpeg",
      link: "/initiatives/pranitva",
    },
    {
      id: "09",
      title: "AGOGYA",
      desc: "Publish your generated art directly to social platforms quickly.",
      image: "/WhatsApp Image 2026-04-28 at 3.39.06 PM (7).jpeg",
      link: "/initiatives/agogya",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f8f8f8] py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-black -mt-10">
          Work to{" "}
          <span className="bg-gradient-to-r from-slate-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Create a Difference
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* WRAP THE ENTIRE CARD IN A LINK */}
              <Link href={item.link} className="block cursor-pointer">
                <div className="card-inner">
                  <div className="p-[2px] rounded-[32px] bg-gradient-to-br from-white via-purple-300 to-purple-600">
                    <div className="bg-white rounded-[30px] p-6 shadow-xl text-left">
                      {/* Image Container */}
                      <div className="relative h-[220px] mb-6 overflow-hidden rounded-[24px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      {/* Text */}
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card {
          opacity: 0;
          transform: translateY(80px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .card-inner {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          will-change: transform;
        }

        .card:hover .card-inner {
          transform: translateY(-14px) scale(1.03);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </section>
  );
}