
// "use client";

// import { useState } from "react";

// export default function HeroSection() {
//   const [activeImage, setActiveImage] = useState(null);
//   const [activeTitle, setActiveTitle] = useState("");
//   const [activeDesc, setActiveDesc] = useState("");

//   // Reusable Hover Function
//   const openPreview = (image, title, desc) => {
//     setActiveImage(image);
//     setActiveTitle(title);
//     setActiveDesc(desc);
//   };

//   const closePreview = () => {
//     setActiveImage(null);
//   };

//   return (
//     <section className="relative h-[760px] overflow-hidden bg-white pt-28">

//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6ddff_0%,#ffffff_102%,#ffffff_100%)]"></div>

//       {/* Purple Glow */}
//       <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1050px] h-[1050px] rounded-full bg-purple-300/30 blur-2xl"></div>

//       {/* ================= FULL HERO IMAGE ON HOVER ================= */}
//       {activeImage && (
//         <div
//           onMouseLeave={closePreview}
//           className="absolute inset-0 z-50"
//         >
//           <img
//             src={activeImage}
//             alt=""
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           <div className="absolute inset-0 bg-black/45"></div>

//           {/* Navbar */}
         

//           {/* Text */}
//           <div className="relative z-10 max-w-6xl mx-auto mt-32 flex justify-end px-8">

//             <div className="max-w-3xl text-left">
//               <h1 className="text-[72px] leading-[78px] font-semibold tracking-tight bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent animate-fadeUp">
//                 {activeTitle}
//               </h1>

//               <p className="mt-6 text-lg leading-8 text-white animate-fadeUp delay-150">
//                 {activeDesc}
//               </p>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* ================= LEFT SIDE IMAGES ================= */}

//       <div
//         onMouseEnter={() =>
//           openPreview(
//             "/d14c9713dbb7223a6720bc0d90234e34.jpg",
//             "Creative Portrait Art",
//             "Generate elegant portrait artwork with premium AI creativity."
//           )
//         }
//         className="absolute top-[110px] left-[35px] z-20 cursor-pointer"
//       >
//         <CircleBig img="/0567c49a5d53b1957fcec7035a09ce04.jpg" />
//       </div>

//       <div
//         onMouseEnter={() =>
//           openPreview(
//             "/4c351506445e3f6016c2ba5124dacb45.jpg",
//             "Beauty Fashion Photos",
//             "Premium model and beauty visuals generated in seconds."
//           )
//         }
//         className="absolute top-[330px] left-[125px] z-20 cursor-pointer"
//       >
//         <CircleSmall img="/fcf5203e033887fc80be9f97cbdbe71a.jpg" />
//       </div>

//       <div
//         onMouseEnter={() =>
//           openPreview(
//             "/284575513de8cb87610a36d9b81a46b3.jpg",
//             "Elegant Lifestyle Scenes",
//             "Create classy lifestyle and travel inspired visuals."
//           )
//         }
//         className="absolute top-[520px] left-[55px] z-20 cursor-pointer"
//       >
//         <CircleSmall img="/1a120b9d7b2a7efb27978202efb0e2de.jpg" />
//       </div>

//       {/* ================= RIGHT SIDE IMAGES ================= */}

//       <div
//         onMouseEnter={() =>
//           openPreview(
//             "/d14c9713dbb7223a6720bc0d90234e34.jpg",
//             "Modern Male Portraits",
//             "Cinematic branding portraits for creators and influencers."
//           )
//         }
//         className="absolute top-[110px] right-[35px] z-20 cursor-pointer"
//       >
//         <CircleBig img="/0567c49a5d53b1957fcec7035a09ce04.jpg" />
//       </div>

//       <div
//         onMouseEnter={() =>
//           openPreview(
//             "/4c351506445e3f6016c2ba5124dacb45.jpg",
//             "Professional Business Look",
//             "Generate clean business profile visuals with AI."
//           )
//         }
//         className="absolute top-[330px] right-[125px] z-20 cursor-pointer"
//       >
//         <CircleSmall img="/fcf5203e033887fc80be9f97cbdbe71a.jpg" />
//       </div>

//       <div
//         onMouseEnter={() =>
//           openPreview(
//             "/284575513de8cb87610a36d9b81a46b3.jpg",
//             "Street Fashion Trends",
//             "Urban streetwear scenes created with smart AI tools."
//           )
//         }
//         className="absolute top-[500px] right-[55px] z-20 cursor-pointer"
//       >
//         <CircleSmall img="/1a120b9d7b2a7efb27978202efb0e2de.jpg" />
//       </div>

//       {/* ================= DEFAULT HERO CONTENT ================= */}
//       {!activeImage && (
//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//           <h1 className="mt-20 text-[72px] leading-[78px] font-semibold tracking-tight text-black">
//                    Light for Every Life, Hope for Every Heart
//             </h1>

//           <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 leading-8">
//             Empowering the backbone of India with sustainable resources.
//           </p>
//         </div>
//       )}

//       {/* CSS */}
//       <style jsx>{`
//         .animate-fadeUp {
//           animation: fadeUp 0.8s ease forwards;
//         }

//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(35px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// /* Reusable Circle Components */

// function CircleBig({ img }) {
//   return (
//     <div className="w-[200px] h-[200px] rounded-full p-[4px] bg-gradient-to-br from-pink-500 to-purple-500 shadow-xl hover:scale-110 transition duration-500">
//       <img
//         src={img}
//         className="w-full h-full rounded-full object-cover border-2 border-white"
//       />
//     </div>
//   );
// }

// function CircleSmall({ img }) {
//   return (
//     <div className="w-[150px] h-[150px] rounded-full p-[3px] bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg hover:scale-110 transition duration-500">
//       <img
//         src={img}
//         className="w-full h-full rounded-full object-cover border border-white"
//       />
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDesc, setActiveDesc] = useState("");

  // Hover Function
  const openPreview = (image, title, desc) => {
    setActiveImage(image);
    setActiveTitle(title);
    setActiveDesc(desc);
  };

  const closePreview = () => {
    setActiveImage(null);
  };

  return (
    <section className="relative min-h-[690px] overflow-hidden bg-white pt-24 md:pt-38">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6ddff_0%,#ffffff_102%,#ffffff_100%)]"></div>

      {/* Purple Glow */}
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1050px] h-[1050px] rounded-full bg-purple-300/30 blur-2xl"></div>

      {/* ================= DESKTOP HOVER PREVIEW ================= */}

      {activeImage && (
        <div
          onMouseLeave={closePreview}
          className="absolute inset-0 z-50 hidden md:block"
        >
          {/* Background Image */}
          <img
            src={activeImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* Text */}
          <div className="relative z-10 max-w-6xl mx-auto mt-32 flex justify-end px-8">

            <div className="max-w-3xl text-left">

              <h1 className="text-[72px] leading-[78px] font-semibold tracking-tight bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent animate-fadeUp">
                {activeTitle}
              </h1>

              <p className="mt-6 text-lg leading-8 text-white animate-fadeUp delay-150">
                {activeDesc}
              </p>

            </div>

          </div>
        </div>
      )}

      {/* ================= LEFT SIDE IMAGES ================= */}

      <div
        onMouseEnter={() =>
          openPreview(
            "/d14c9713dbb7223a6720bc0d90234e34.jpg",
            "Creative Portrait Art",
            "Generate elegant portrait artwork with premium AI creativity."
          )
        }
        className="absolute top-[110px] left-[35px] z-20 cursor-pointer hidden md:block"
      >
        <CircleBig img="/0567c49a5d53b1957fcec7035a09ce04.jpg" />
      </div>

      <div
        onMouseEnter={() =>
          openPreview(
            "/4c351506445e3f6016c2ba5124dacb45.jpg",
            "Beauty Fashion Photos",
            "Premium model and beauty visuals generated in seconds."
          )
        }
        className="absolute top-[330px] left-[125px] z-20 cursor-pointer hidden md:block"
      >
        <CircleSmall img="/fcf5203e033887fc80be9f97cbdbe71a.jpg" />
      </div>

      <div
        onMouseEnter={() =>
          openPreview(
            "/284575513de8cb87610a36d9b81a46b3.jpg",
            "Elegant Lifestyle Scenes",
            "Create classy lifestyle and travel inspired visuals."
          )
        }
        className="absolute top-[520px] left-[55px] z-20 cursor-pointer hidden md:block"
      >
        <CircleSmall img="/1a120b9d7b2a7efb27978202efb0e2de.jpg" />
      </div>

      {/* ================= RIGHT SIDE IMAGES ================= */}

      <div
        onMouseEnter={() =>
          openPreview(
            "/d14c9713dbb7223a6720bc0d90234e34.jpg",
            "Modern Male Portraits",
            "Cinematic branding portraits for creators and influencers."
          )
        }
        className="absolute top-[110px] right-[35px] z-20 cursor-pointer hidden md:block"
      >
        <CircleBig img="/0567c49a5d53b1957fcec7035a09ce04.jpg" />
      </div>

      <div
        onMouseEnter={() =>
          openPreview(
            "/4c351506445e3f6016c2ba5124dacb45.jpg",
            "Professional Business Look",
            "Generate clean business profile visuals with AI."
          )
        }
        className="absolute top-[330px] right-[125px] z-20 cursor-pointer hidden md:block"
      >
        <CircleSmall img="/fcf5203e033887fc80be9f97cbdbe71a.jpg" />
      </div>

      <div
        onMouseEnter={() =>
          openPreview(
            "/284575513de8cb87610a36d9b81a46b3.jpg",
            "Street Fashion Trends",
            "Urban streetwear scenes created with smart AI tools."
          )
        }
        className="absolute top-[500px] right-[55px] z-20 cursor-pointer hidden md:block"
      >
        <CircleSmall img="/1a120b9d7b2a7efb27978202efb0e2de.jpg" />
      </div>

      {/* ================= MOBILE HERO IMAGE ================= */}

      <div className="md:hidden relative z-20 mt-2 px-5">

        <div className="relative w-full h-[540px] rounded-[15px] overflow-hidden shadow-2xl">

          {/* Image */}
          <img
            src="/d14c9713dbb7223a6720bc0d90234e34.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Mobile Text */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">

            <h2 className="text-3xl leading-9 font-semibold text-white">
              Light for Every Life
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/90">
              Empowering the backbone of India with sustainable resources.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">

              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-semibold shadow-lg transition-all">
                Explore More
              </button>

              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white py-3 rounded-full font-semibold">
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ================= DEFAULT DESKTOP HERO CONTENT ================= */}

      {!activeImage && (
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center hidden md:block">

          <h1 className="mt-20 text-[72px] leading-[78px] font-semibold tracking-tight text-black">
            Light for Every Life,
            <br />
            Hope for Every Heart
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 leading-8">
            Empowering the backbone of India with sustainable resources.
          </p>

        </div>
      )}

      {/* ================= ANIMATION ================= */}

      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}

/* ================= BIG CIRCLE ================= */

function CircleBig({ img }) {
  return (
    <div className="w-[200px] h-[200px] rounded-full p-[4px] bg-gradient-to-br from-pink-500 to-purple-500 shadow-xl hover:scale-110 transition duration-500">

      <img
        src={img}
        alt=""
        className="w-full h-full rounded-full object-cover border-2 border-white"
      />

    </div>
  );
}

/* ================= SMALL CIRCLE ================= */

function CircleSmall({ img }) {
  return (
    <div className="w-[150px] h-[150px] rounded-full p-[3px] bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg hover:scale-110 transition duration-500">

      <img
        src={img}
        alt=""
        className="w-full h-full rounded-full object-cover border border-white"
      />

    </div>
  );
}