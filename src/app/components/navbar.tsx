// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Search, Grid2x2 } from "lucide-react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 flex justify-center">

//       <div
//         className={`
//           mt-4 w-[92%] max-w-7xl flex items-center justify-between
//           bg-white/60 backdrop-blur-xl
//           border border-white/30 shadow-lg rounded-full
//           transition-all duration-500 ease-in-out
//           ${scrolled ? "py-2 px-5 scale-[0.96]" : "py-4 px-8 scale-100"}
//         `}
//       >

//         {/* Logo */}
//         <div
//           className={`
//             font-semibold tracking-tight text-black transition-all duration-500
//             ${scrolled ? "text-xl" : "text-2xl"}
//           `}
//         >
//           Artiq
//         </div>

//         {/* Menu */}
//         <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">
//          <li
//                      className="relative cursor-pointer"
//                      onMouseEnter={() => setOpenDropdown("corporate")}
//                    >
//                      <span className="hover:text-blue-400">Who We Are </span>
//                      {openDropdown === "Who We Are" && (
//                        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-44 rounded-xl p-4 bg-[#020b1c]/95 shadow-2xl">
//                          <Link href="/about" className="block py-1 hover:text-blue-400">About Us</Link>
//                          <Link href="/team" className="block py-1 hover:text-blue-400">Leadership</Link>
//                          <Link href="/chairman" className="block py-1 hover:text-blue-400">Chairman Message</Link>
//                        </div>
//                      )}
//                    </li>
         
//           <Link href="/aboutus" className="hover:text-black transition">About Us</Link>
//           <Link href="/" className="hover:text-black transition">Blog</Link>
//           <Link href="/" className="hover:text-black transition">Shop</Link>
//           <Link href="/" className="hover:text-black transition">Contacts</Link>
//         </nav>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-3">

//           <button
//             className={`
//               rounded-full bg-white/80 border border-gray-200 flex items-center justify-center
//               transition-all duration-300 hover:scale-105
//               ${scrolled ? "w-9 h-9" : "w-11 h-11"}
//             `}
//           >
//             <Search size={18} />
//           </button>

//           <button
//             className={`
//               rounded-full bg-white/80 border border-gray-200 text-sm font-medium
//               transition-all duration-300 hover:scale-105
//               ${scrolled ? "px-4 h-9 text-xs" : "px-5 h-11"}
//             `}
//           >
//             Search
//           </button>

//           <button
//             className={`
//               rounded-full bg-white/80 border border-gray-200 flex items-center justify-center
//               transition-all duration-300 hover:scale-105
//               ${scrolled ? "w-9 h-9" : "w-11 h-11"}
//             `}
//           >
//             <Grid2x2 size={18} />
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Search, Grid2x2 } from "lucide-react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
//       <div
//         className={`
//           mt-4 w-[92%] max-w-7xl flex items-center justify-between
//           bg-white/60 backdrop-blur-xl
//           border border-white/30 shadow-lg rounded-full
//           transition-all duration-500 ease-in-out
//           ${scrolled ? "py-2 px-5 scale-[0.96]" : "py-4 px-8 scale-100"}
//         `}
//       >
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/WhatsApp Image 2026-04-28 at 11.30.42 AM (1).jpeg"
           
//             width={120}
//             height={40}
//             className={`
//               cursor-pointer transition-all duration-500
//               ${scrolled ? "scale-90" : "scale-100"}
//             `}
//           />
//         </Link>

//         {/* Menu */}
//         <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">
          
//           {/* Dropdown Wrapper */}
//           <div
//             className="relative"
//             onMouseEnter={() => setOpenDropdown("who")}
//             onMouseLeave={() => setOpenDropdown(null)}
//           >
//             <span className="cursor-pointer hover:text-blue-500 transition">
//               Who We Are
//             </span>

//             {/* Dropdown */}
//             <div
//               className={`
//                 absolute left-1/2 -translate-x-1/2 mt-2 pt-2
//                 transition-all duration-300
//                 ${openDropdown === "who"
//                   ? "opacity-100 translate-y-0 visible"
//                   : "opacity-0 -translate-y-2 invisible"}
//               `}
//             >
//               <div className="w-48 rounded-xl p-4 bg-white text-gray-800 shadow-2xl border">
//                 <Link href="/aboutus" className="block py-1 hover:text-blue-500">
//                   About Us
//                 </Link>
//                 <Link href="/team" className="block py-1 hover:text-blue-500">
//                   Leadership
//                 </Link>
//                 <Link href="/partners" className="block py-1 hover:text-blue-500">
//                 Partners
//                 </Link>
//                  <Link href="/legal" className="block py-1 hover:text-blue-500">
//             Legal & Financial
//                 </Link>
//               </div>
//             </div>
//           </div>

          
//            <div
//             className="relative"
//             onMouseEnter={() => setOpenDropdown("who")}
//             onMouseLeave={() => setOpenDropdown(null)}
//           >
//             <span className="cursor-pointer hover:text-blue-500 transition">
//               We Work For
//             </span>

//             {/* Dropdown */}
//             <div
//               className={`
//                 absolute left-1/2 -translate-x-1/2 mt-2 pt-2
//                 transition-all duration-300
//                 ${openDropdown === "who"
//                   ? "opacity-100 translate-y-0 visible"
//                   : "opacity-0 -translate-y-2 invisible"}
//               `}
//             >
//               <div className="w-48 rounded-xl p-4 bg-white text-gray-800 shadow-2xl border">
//                 <Link href="/anna" className="block py-1 hover:text-blue-500">
//                  Annapurna
//                 </Link>
//                 <Link href="/atta" className="block py-1 hover:text-blue-500">
//                   Attmanirbhar
//                 </Link>
//                 <Link href="/adhay" className="block py-1 hover:text-blue-500">
//                 Adhyayan
//                 </Link>
//                  <Link href="/annadata" className="block py-1 hover:text-blue-500">
//                  Annadata
//                 </Link>
//                 <Link href="/swabhi" className="block py-1 hover:text-blue-500">
//                  Swabhiman
//                 </Link>
//                 <Link href="/swavala" className="block py-1 hover:text-blue-500">
//                  Swavalamban
//                 </Link>
//                 <Link href="/vasu" className="block py-1 hover:text-blue-500">
//                  Vasudhram
//                 </Link>
//                 <Link href="/Pranit" className="block py-1 hover:text-blue-500">
//                  Pranitva
//                 </Link>
//                 <Link href="/agogy" className="block py-1 hover:text-blue-500">
//                  Agogya
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <Link href="/" className="hover:text-black transition">
//             Shop
//           </Link>
//           <Link href="/" className="hover:text-black transition">
//             Contacts
//           </Link>
//         </nav>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-3">
//           <button
//             className={`
//               rounded-full bg-white/80 border border-gray-200 flex items-center justify-center
//               transition-all duration-300 hover:scale-105
//               ${scrolled ? "w-9 h-9" : "w-11 h-11"}
//             `}
//           >
//             <Search size={18} />
//           </button>

//           <button
//             className={`
//               rounded-full bg-white/80 border border-gray-200 text-sm font-medium
//               transition-all duration-300 hover:scale-105
//               ${scrolled ? "px-4 h-9 text-xs" : "px-5 h-11"}
//             `}
//           >
//             Search
//           </button>

//           <button
//             className={`
//               rounded-full bg-white/80 border border-gray-200 flex items-center justify-center
//               transition-all duration-300 hover:scale-105
//               ${scrolled ? "w-9 h-9" : "w-11 h-11"}
//             `}
//           >
//             <Grid2x2 size={18} />
//           </button>
//         </div>
//       </div>
//     </header>
//   );

// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuId, setMenuId] = useState(0); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div
        className={`mt-4 w-[92%] max-w-7xl flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-full transition-all duration-500 ${
          scrolled ? "py-2 px-5" : "py-4 px-8"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/WhatsApp Image 2026-04-28 at 11.30.42 AM (1).jpeg"
            alt="Logo"
            width={120}
            height={40}
            priority
            className="w-auto h-8 md:h-10"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 text-[16px] font-normal text-gray-700">
          
          {/* Menu 1: Who We Are */}
          <div
            className="relative py-4"
            onMouseEnter={() => setMenuId(1)}
            onMouseLeave={() => setMenuId(0)}
          >
            <span className={`cursor-pointer transition-colors ${menuId === 1 ? "text-purple-600" : "hover:text-purple-600"}`}>
              Who We Are
            </span>
            {menuId === 1 && (
              <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-52">
                <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Link href="/aboutus" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">About Us</Link>
                  <Link href="/team" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Leadership</Link>
                  <Link href="/partners" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Partners</Link>
                  <Link href="/legal" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Legal & Financial</Link>
                </div>
              </div>
            )}
          </div>

          {/* Menu 2: Our Initiatives (We Work For) */}
          <div
            className="relative py-4"
            onMouseEnter={() => setMenuId(2)}
            onMouseLeave={() => setMenuId(0)}
          >
            <span className={`cursor-pointer transition-colors ${menuId === 2 ? "text-purple-600" : "hover:text-purple-600"}`}>
              Our Initiatives
            </span>
            {menuId === 2 && (
              <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-64">
                <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Link href="/anna" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Annapurna</Link>
                  <Link href="/atta" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Atmanirbhar</Link>
                  <Link href="/adhay" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Adhyayan</Link>
                  <Link href="/annadata" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Annadata</Link>
                  <Link href="/swabhi" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Swabhiman</Link>
                  <Link href="/swavala" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Swavalamban</Link>
                  <Link href="/vasu" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Vasudhram</Link>
                  <Link href="/Pranit" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Pranitva</Link>
                  <Link href="/arogya" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Arogya</Link>
                </div>
              </div>
            )}
          </div>

          {/* Menu 3: Get Involved */}
          <div
            className="relative py-4"
            onMouseEnter={() => setMenuId(3)}
            onMouseLeave={() => setMenuId(0)}
          >
            <span className={`cursor-pointer transition-colors ${menuId === 3 ? "text-purple-600" : "hover:text-purple-600"}`}>
              Get Involved
            </span>
            {menuId === 3 && (
              <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-52">
                <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Link href="/individual" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Individual Suppots</Link>
                  <Link href="/organizational" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Organizational Supports</Link>
                  <Link href="/volunteers" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Volunteers & Internship</Link>
                    <Link href="/work%20With%20Us" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Work With Us</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/campaign" className="hover:text-purple-600 transition-colors">Campaign</Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-purple-200 transition-all active:scale-95">
            Donate Now
          </button>
        </div>
      </div>
    </header>
  );
}