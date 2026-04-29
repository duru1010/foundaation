// // components/Stats.tsx
// "use client";

// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// export default function Stats() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//   });

//   const stats = [
//     { value: 260, label: "Expert Consultants" },
//     { value: 975, label: "Active Clients" },
//     { value: 724, label: "Projects Delivered" },
//     { value: 89, label: "Orders in Queue" },
//   ];

//   return (
//     <section className="bg-gradient-to-br from-white to-purple-100 py-20 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//         {/* Left Content */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our services have a proven track record of boosting businesses
//           </h2>
//           <p className="text-gray-600 mb-6">
//             We help you to unleash the power within your business
//           </p>
//           <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-md transition">
//             Lets get started
//           </button>
//         </div>

//         {/* Right Stats */}
//         <div
//           ref={ref}
//           className="grid grid-cols-2 gap-6"
//         >
//           {stats.map((stat, i) => (
//             <div
//               key={i}
//               className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md text-center"
//             >
//               <h3 className="text-3xl font-bold text-gray-900">
//                 {inView ? (
//                   <CountUp end={stat.value} duration={2} />
//                 ) : (
//                   0
//                 )}
//                 <span className="text-purple-600">+</span>
//               </h3>
//               <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";


export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { value: 50, label: "Volunteers" },
    { value: 5000, label: "Donation Received" },
    { value: 5, label: "Project Done" },
  
  ];

  return (
    <section className="bg-gradient-to-br from-white to-purple-100 py-24 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="animate-fadeUp">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black -mt-10 leading-snug">
  Light for{" "}
  <span className="bg-gradient-to-r from-slate-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
    Every Life.
  </span>
</h2>

          <p className="text-gray-600 mb-6">
          Swachetna Foundation, founded in 2023 in Pune, Maharashtra, is a multi-dimensional non-profit organization working to build a stronger, healthier, and self-reliant India. Our initiatives are focused on the holistic development of communities by addressing their most fundamental needs—from food security and education to women’s health, farmer welfare, and financial independence.
          </p>

         <Link href="/aboutus">
  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105">
    Lets get started
  </button>
</Link>
        </div>

        {/* RIGHT */}
        <div
          ref={ref}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md text-center hover:scale-105 transition-transform duration-500">

                <h3 className="text-3xl font-bold text-gray-900">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.2} />
                  ) : (
                    0
                  )}
                  <span className="text-purple-600">+</span>
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  {stat.label}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        /* section fade */
        .animate-fadeUp {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.8s ease forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* card stagger */
        .stat-card {
          opacity: 0;
          transform: translateY(60px);
          animation: cardIn 0.8s ease forwards;
        }

        .stat-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .stat-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .stat-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        .stat-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        @keyframes cardIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}