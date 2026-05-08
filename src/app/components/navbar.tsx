
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuId, setMenuId] = useState(0); 
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
//       <div
//         className={`mt-4 w-[92%] max-w-7xl flex items-center justify-between bg-white backdrop-blur-xl border border-white/30 shadow-lg rounded-full transition-all duration-500 ${
//           scrolled ? "py-2 px-5" : "py-4 px-8"
//         }`}
//       >
//         {/* Logo */}
//         <Link href="/" className="flex-shrink-0">
//           <Image
//             src="/WhatsApp Image 2026-04-28 at 11.30.42 AM (1).jpeg"
//             alt="Logo"
//             width={120}
//             height={40}
//             priority
//             className="w-auto h-8 md:h-10"
//           />
//         </Link>

//         {/* Navigation */}
//         <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 text-[16px] font-normal text-gray-700">
          
//           {/* Menu 1: Who We Are */}
//           <div
//             className="relative py-4"
//             onMouseEnter={() => setMenuId(1)}
//             onMouseLeave={() => setMenuId(0)}
//           >
//             <span className={`cursor-pointer transition-colors ${menuId === 1 ? "text-purple-600" : "hover:text-purple-600"}`}>
//               Who We Are
//             </span>
//             {menuId === 1 && (
//               <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-52">
//                 <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
//                   <Link href="/aboutus" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">About Us</Link>
//                   <Link href="/team" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Leadership</Link>
//                   <Link href="/partners" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Partners</Link>
//                   <Link href="/legal" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Legal & Financial</Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Menu 2: Our Initiatives (We Work For) */}
//           <div
//             className="relative py-4"
//             onMouseEnter={() => setMenuId(2)}
//             onMouseLeave={() => setMenuId(0)}
//           >
//             <span className={`cursor-pointer transition-colors ${menuId === 2 ? "text-purple-600" : "hover:text-purple-600"}`}>
//               Our Initiatives
//             </span>
//             {menuId === 2 && (
//               <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-64">
//                 <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-300">
//                   <Link href="/anna" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Annapurna</Link>
//                   <Link href="/atta" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Atmanirbhar</Link>
//                   <Link href="/adhay" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Adhyayan</Link>
//                   <Link href="/annadata" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Annadata</Link>
//                   <Link href="/swabhi" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Swabhiman</Link>
//                   <Link href="/swavala" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Swavalamban</Link>
//                   <Link href="/vasu" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Vasudhram</Link>
//                   <Link href="/Pranit" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Pranitva</Link>
//                   <Link href="/arogya" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Arogya</Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Menu 3: Get Involved */}
//           <div
//             className="relative py-4"
//             onMouseEnter={() => setMenuId(3)}
//             onMouseLeave={() => setMenuId(0)}
//           >
//             <span className={`cursor-pointer transition-colors ${menuId === 3 ? "text-purple-600" : "hover:text-purple-600"}`}>
//               Get Involved
//             </span>
//             {menuId === 3 && (
//               <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-52">
//                 <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
//                   <Link href="/individual" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Individual Suppots</Link>
//                   <Link href="/organizational" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Organizational Supports</Link>
//                   <Link href="/volunteers" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Volunteers & Internship</Link>
//                     <Link href="/work%20With%20Us" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Work With Us</Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link href="/campaign" className="hover:text-purple-600 transition-colors">Campaign</Link>
//             <div
//             className="relative py-4"
//             onMouseEnter={() => setMenuId(4)}
//             onMouseLeave={() => setMenuId(0)}
//           >
//             <span className={`cursor-pointer transition-colors ${menuId === 4 ? "text-purple-600" : "hover:text-purple-600"}`}>
//            Publications
//             </span>
//             {menuId === 4 && (
//               <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-52">
//                 <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
//                   <Link href="/photo" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Photo Gallary</Link>
//                  <a 
//   href="https://www.youtube.com/@SwachetnaFoundation/videos" 
//   target="_blank" 
//   rel="noopener noreferrer" 
//   className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
// >
//   Videos
// </a>
//                   <Link href="/news" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">News Letter</Link>
//                     <Link href="/annual" className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">Annual Reports</Link>
//                 </div>
//               </div>
//             )}
//           </div>
//              <Link href="/contacts" className="hover:text-purple-600 transition-colors">Contacts</Link>
//         </nav>

//         {/* Action Button */}
//        <div className="flex items-center gap-3">
//   <Link href="/donate">
//     <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-purple-200 transition-all active:scale-95">
//       Donate Now
//     </button>
//   </Link>
// </div>
//       </div>
//     </header>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuId, setMenuId] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div
        className={`mt-4 w-[95%] max-w-7xl bg-white backdrop-blur-xl border border-white/30 shadow-lg rounded-xl transition-all duration-500 ${
          scrolled ? "py-2 px-4" : "py-4 px-5 md:px-8"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
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

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 text-[16px] font-normal text-gray-700">

            {/* WHO WE ARE */}
            <div
              className="relative py-4"
              onMouseEnter={() => setMenuId(1)}
              onMouseLeave={() => setMenuId(0)}
            >
              <span
                className={`cursor-pointer transition-colors ${
                  menuId === 1
                    ? "text-purple-600"
                    : "hover:text-purple-600"
                }`}
              >
                Who We Are
              </span>

              {menuId === 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-52">
                  <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    
                    <Link
                      href="/aboutus"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      About Us
                    </Link>

                    <Link
                      href="/team"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Leadership
                    </Link>

                    <Link
                      href="/partners"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Partners
                    </Link>

                    <Link
                      href="/legal"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Legal & Financial
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* OUR INITIATIVES */}
            <div
              className="relative py-4"
              onMouseEnter={() => setMenuId(2)}
              onMouseLeave={() => setMenuId(0)}
            >
              <span
                className={`cursor-pointer transition-colors ${
                  menuId === 2
                    ? "text-purple-600"
                    : "hover:text-purple-600"
                }`}
              >
                Our Initiatives
              </span>

              {menuId === 2 && (
                <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-64">
                  <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-300">
                    
                    <Link href="/anna" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Annapurna
                    </Link>

                    <Link href="/atta" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Atmanirbhar
                    </Link>

                    <Link href="/adhay" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Adhyayan
                    </Link>

                    <Link href="/annadata" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Annadata
                    </Link>

                    <Link href="/swabhi" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Swabhiman
                    </Link>

                    <Link href="/swavala" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Swavalamban
                    </Link>

                    <Link href="/vasu" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Vasudhram
                    </Link>

                    <Link href="/Pranit" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Pranitva
                    </Link>

                    <Link href="/arogya" className="px-3 py-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all">
                      Arogya
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* GET INVOLVED */}
            <div
              className="relative py-4"
              onMouseEnter={() => setMenuId(3)}
              onMouseLeave={() => setMenuId(0)}
            >
              <span
                className={`cursor-pointer transition-colors ${
                  menuId === 3
                    ? "text-purple-600"
                    : "hover:text-purple-600"
                }`}
              >
                Get Involved
              </span>

              {menuId === 3 && (
                <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-56">
                  <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">

                    <Link
                      href="/individual"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Individual Supports
                    </Link>

                    <Link
                      href="/organizational"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Organizational Supports
                    </Link>

                    <Link
                      href="/volunteers"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Volunteers & Internship
                    </Link>

                    <Link
                      href="/work With Us"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Work With Us
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CAMPAIGN */}
            <Link
              href="/campaign"
              className="hover:text-purple-600 transition-colors"
            >
              Campaign
            </Link>

            {/* PUBLICATIONS */}
            <div
              className="relative py-4"
              onMouseEnter={() => setMenuId(4)}
              onMouseLeave={() => setMenuId(0)}
            >
              <span
                className={`cursor-pointer transition-colors ${
                  menuId === 4
                    ? "text-purple-600"
                    : "hover:text-purple-600"
                }`}
              >
                Publications
              </span>

              {menuId === 4 && (
                <div className="absolute left-1/2 -translate-x-1/2 pt-4 w-56">
                  <div className="bg-white p-4 shadow-2xl border border-gray-100 rounded-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">

                    <Link
                      href="/photo"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Photo Gallery
                    </Link>

                    <a
                      href="https://www.youtube.com/@SwachetnaFoundation/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Videos
                    </a>

                    <Link
                      href="/news"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      News Letter
                    </Link>

                    <Link
                      href="/annual"
                      className="px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      Annual Reports
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <Link
              href="/contacts"
              className="hover:text-purple-600 transition-colors"
            >
              Contacts
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DONATE BUTTON */}
            <Link href="/donate" className="hidden md:block">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-purple-200 transition-all active:scale-95">
                Donate Now
              </button>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-700"
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="lg:hidden mt-5 border-t border-gray-200 pt-5 flex flex-col gap-2">

            {/* WHO WE ARE */}
            <button
              onClick={() =>
                setMobileDropdown(mobileDropdown === 1 ? null : 1)
              }
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-purple-50"
            >
              Who We Are
              <ChevronDown
                className={`transition-transform ${
                  mobileDropdown === 1 ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {mobileDropdown === 1 && (
              <div className="ml-4 flex flex-col gap-1">
                <Link href="/aboutus" className="px-4 py-2">
                  About Us
                </Link>
                <Link href="/team" className="px-4 py-2">
                  Leadership
                </Link>
                <Link href="/partners" className="px-4 py-2">
                  Partners
                </Link>
                <Link href="/legal" className="px-4 py-2">
                  Legal & Financial
                </Link>
              </div>
            )}

            {/* OUR INITIATIVES */}
            <button
              onClick={() =>
                setMobileDropdown(mobileDropdown === 2 ? null : 2)
              }
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-purple-50"
            >
              Our Initiatives
              <ChevronDown
                className={`transition-transform ${
                  mobileDropdown === 2 ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {mobileDropdown === 2 && (
              <div className="ml-4 flex flex-col gap-1">
                <Link href="/anna" className="px-4 py-2">Annapurna</Link>
                <Link href="/atta" className="px-4 py-2">Atmanirbhar</Link>
                <Link href="/adhay" className="px-4 py-2">Adhyayan</Link>
                <Link href="/annadata" className="px-4 py-2">Annadata</Link>
                <Link href="/swabhi" className="px-4 py-2">Swabhiman</Link>
                <Link href="/swavala" className="px-4 py-2">Swavalamban</Link>
                <Link href="/vasu" className="px-4 py-2">Vasudhram</Link>
                <Link href="/Pranit" className="px-4 py-2">Pranitva</Link>
                <Link href="/arogya" className="px-4 py-2">Arogya</Link>
              </div>
            )}

            {/* GET INVOLVED */}
            <button
              onClick={() =>
                setMobileDropdown(mobileDropdown === 3 ? null : 3)
              }
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-purple-50"
            >
              Get Involved
              <ChevronDown
                className={`transition-transform ${
                  mobileDropdown === 3 ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {mobileDropdown === 3 && (
              <div className="ml-4 flex flex-col gap-1">
                <Link href="/individual" className="px-4 py-2">
                  Individual Supports
                </Link>

                <Link href="/organizational" className="px-4 py-2">
                  Organizational Supports
                </Link>

                <Link href="/volunteers" className="px-4 py-2">
                  Volunteers & Internship
                </Link>

                <Link href="/work With Us" className="px-4 py-2">
                  Work With Us
                </Link>
              </div>
            )}

            {/* PUBLICATIONS */}
            <button
              onClick={() =>
                setMobileDropdown(mobileDropdown === 4 ? null : 4)
              }
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-purple-50"
            >
              Publications
              <ChevronDown
                className={`transition-transform ${
                  mobileDropdown === 4 ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {mobileDropdown === 4 && (
              <div className="ml-4 flex flex-col gap-1">
                <Link href="/photo" className="px-4 py-2">
                  Photo Gallery
                </Link>

                <a
                  href="https://www.youtube.com/@SwachetnaFoundation/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2"
                >
                  Videos
                </a>

                <Link href="/news" className="px-4 py-2">
                  News Letter
                </Link>

                <Link href="/annual" className="px-4 py-2">
                  Annual Reports
                </Link>
              </div>
            )}

            {/* NORMAL LINKS */}
            <Link
              href="/campaign"
              className="px-4 py-3 rounded-xl hover:bg-purple-50"
            >
              Campaign
            </Link>

            <Link
              href="/contacts"
              className="px-4 py-3 rounded-xl hover:bg-purple-50"
            >
              Contacts
            </Link>

            {/* MOBILE DONATE BUTTON */}
            <Link href="/donate">
              <button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-2xl font-bold">
                Donate Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}