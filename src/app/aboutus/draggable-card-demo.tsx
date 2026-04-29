"use client";

import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white px-10 lg:px-20 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE CARDS */}
        <DraggableCardContainer className="relative min-h-[700px] w-full overflow-clip">
          <div className="relative w-[600px] h-full mt-[150px] ml-[50px]">
            {items.map((item) => (
              <DraggableCardBody key={item.title} className={item.className}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-xl shadow-xl"
                />
                <h3 className="mt-3 text-center text-xl font-semibold text-neutral-700">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </div>
        </DraggableCardContainer>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-6 top-6">
          <p className="text-purple-600 font-semibold uppercase tracking-wider">
            Join Our Community
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
            Discover Amazing <br />
            Places With Us
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Explore breathtaking destinations, connect with like-minded travelers,
            and be part of a growing community that loves adventure, nature, and
            unforgettable experiences.
          </p>

          <button className="px-8 py-4 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition duration-300 font-semibold">
            Join Us
          </button>
        </div>

      </div>
    </section>
  );
}