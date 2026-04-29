"use client";

import React from "react";
import { Tabs } from "../components/ui/tabs";
import { Download } from "lucide-react"; // npm install lucide-react (or use a simple SVG)

export function TabsDemo() {
  const tabs = [
    {
      title: "CSR REGISTRATION",
      value: "csr",
      content: (
        <ContentCard 
          title="CSR Registration Certificate" 
          pdfSrc="/CSR-Crti- Swa Foundation.pdf" 
        />
      ),
    },
    {
      title: "MOA",
      value: "moa",
      content: (
        <ContentCard 
          title="Memorandum of Association" 
          pdfSrc="/MOA-CERTIFICATE.pdf" 
        />
      ),
    },
    {
      title: "NGO DARPAN",
      value: "darpan",
      content: (
        <ContentCard 
          title="Niti Aayog NGO Darpan" 
          pdfSrc="/NGO-Darpan.pdf" 
        />
      ),
    },
    {
      title: "80G CERTIFICATE",
      value: "80g",
      content: (
        <ContentCard 
          title="80G Registration" 
          pdfSrc="/80G-CERTIFICATE.pdf" 
        />
      ),
    },
    {
      title: "12A CERTIFICATE",
      value: "12a",
      content: (
        <ContentCard 
          title="12A Registration" 
          pdfSrc="/12A-CERTIFICATE.pdf" 
        />
      ),
    },
  ];

  return (
    <div className="h-[45rem] md:h-[60rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-center justify-start my-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2140] tracking-tight">
          Legal & Financial: 
          <span className="text-purple-700">Swachetna Foundation</span>
        </h2>
      </div>

      <Tabs tabs={tabs} />
    </div>
  );
}

const ContentCard = ({ title, pdfSrc }: { title: string; pdfSrc: string }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900 border border-purple-400/20 shadow-2xl">
      <div className="flex justify-between items-center relative z-30 mb-4">
        <p className="text-xl md:text-3xl font-bold drop-shadow-md">{title}</p>
        
        {/* Download Button */}
        <a 
          href={pdfSrc} 
          download 
          className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-purple-50 transition-colors shadow-lg"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>
      
      <div className="absolute inset-0 bg-black/5 z-10" /> 
      
      {/* PDF Preview Container */}
      <div className="relative z-20 w-full h-[75%] md:h-[82%] mt-4 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
        <iframe
          src={`${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-full rounded-lg text-center"
          title={title}
        />
      </div>
    </div>
  );
};