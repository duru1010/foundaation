'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

// Setting up the exact font weight for the header
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['900'] 
});

export default function ExactHeroSection() {
  return (
    <section className="relative h-[700px] w-full bg-[#f6f4f2] flex items-center overflow-hidden px-8 lg:px-28">
      {/* Background Subtle Map Texture (Matches the faint map in the image background) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
        <Image 
          src="/map-mask.svg" 
          alt="" 
          fill 
          className="object-contain scale-150 translate-x-1/4"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center z-10">
        
        {/* Left Side: Editorial Text Content */}
      <motion.div 
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col items-start"
>
  <h3 className={`${playfair.className} text-[43px] md:text-[90px] leading-[0.92] text-purple-950 mb-12 tracking-tight`}>
    Justice <br />
    begins where <br />
    inequality <br />
    ends
  </h3>
  
  <p className="text-purple-700/70 text-sm md:text-[15px] font-medium leading-relaxed mb-12 max-w-[285px]">
    We&apos;re building a world where everyone has the power to shape their lives.
  </p>
  
  {/* Functional Link wrapper for the button */}
  <Link href="/donate">
    <button className="group bg-purple-600 text-white pr-9 pl-4 py-3.5 rounded-full flex items-center gap-5 hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 active:scale-95">
      {/* Target Icon Recreation in Purple/White */}
      <div className="relative w-7 h-7 flex items-center justify-center">
        <div className="absolute inset-0 border border-purple-300 rounded-full opacity-60" />
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.3em]">
        Donate Now
      </span>
    </button>
  </Link>
</motion.div>

        {/* Right Side: Image Masked by Continents */}
        <div className="relative w-full h-[500px] lg:h-[750px] flex items-center justify-center">
          
          {/* Decorative Colored Dots positioned exactly as in image_0023a4.png */}
          <div className="absolute top-[12%] left-[20%] w-3.5 h-3.5 bg-[#f39c12] rounded-full z-20" />
          <div className="absolute top-[48%] -left-6 w-2.5 h-2.5 bg-[#3498db] rounded-full z-20" />
          <div className="absolute bottom-[22%] left-[45%] w-3 h-3 bg-[#2ecc71] rounded-full z-20" />
          <div className="absolute top-[25%] right-[10%] w-3 h-3 bg-[#e67e22] rounded-full z-20" />

          {/* The CSS Masked Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full relative z-10"
            style={{
              maskImage: 'url("/3bf5b309ee9cee215eda668b27fed545.jpg")',
              WebkitMaskImage: 'url("/3bf5b309ee9cee215eda668b27fed545.jpg")',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center right',
            }}
          >
            <Image
              src="/5750a2705303770de9eb378ab102c02d.jpg" 
              alt="Community focus"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}