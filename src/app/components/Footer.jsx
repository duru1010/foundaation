"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#7c75d8] px-4 py-10 flex justify-center">
      <div className="bg-[#f4f4f6] w-full max-w-8xl rounded-2xl p-8 md:p-12 text-gray-800">
        
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* LEFT */}
          <div className="max-w-md">
            
            {/* ✅ LOGO ADDED */}
            <Image
              src="/WhatsApp Image 2026-04-28 at 11.30.42 AM (1).jpeg" // put your logo inside /public/logo.png
              alt="Swachetna Foundation"
              width={180}
              height={60}
              className="mb-4"
            />

            <p className="text-sm text-gray-500 mb-4">
              Swachetna Foundation is a Pune-based NGO focused on empowering communities through health, education, and sustainability.
            </p>

            <div className="flex gap-3 text-lg">
              <span className="cursor-pointer">📘</span>
              <span className="cursor-pointer">📸</span>
              <span className="cursor-pointer">▶️</span>
              <span className="cursor-pointer">💼</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="max-w-md w-full">
            <h4 className="font-semibold mb-2">
              Subscribe to our newsletter
            </h4>

            <p className="text-sm text-gray-500 mb-3">
              Get updates on our initiatives, events, and impact stories.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#6c63ff] text-white px-4 rounded-r-md hover:opacity-90">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              By subscribing, you agree to receive updates from Swachetna Foundation.
            </p>
          </div>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10 text-sm">
          
          <div>
            <h5 className="text-gray-400 text-xs mb-3">EXPLORE</h5>
            <ul className="space-y-2">
              <li>Our Impact</li>
              <li>We Work For</li>
              <li>Get Involved</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-400 text-xs mb-3">MEDIA</h5>
            <ul className="space-y-2">
              <li>Press Release</li>
              <li>Print Media</li>
              <li>Social Media</li>
              <li>Events</li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-400 text-xs mb-3">CONTACT</h5>
            <ul className="space-y-2">
              <li>📍 Vimanagar, Pune</li>
              <li>📞 +91 7709556629</li>
              <li>📧 info@swachetna.org</li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-400 text-xs mb-3">LEGAL</h5>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-400 text-xs mb-3">ABOUT</h5>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Mission & Vision</li>
              <li>Our Team</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:gap-6 gap-2">
            <span>📧 info@swachetna.org</span>
            <span>📞 +91 7709556629</span>
            <span>📍 Vimanagar, Pune</span>
          </div>

          <p>© 2025 Swachetna Foundation</p>
        </div>

      </div>
    </footer>
  );
}