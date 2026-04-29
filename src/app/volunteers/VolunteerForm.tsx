"use client";
import React from "react";
import { motion } from "framer-motion";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";

export default function VolunteerForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Volunteer Form submitted");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="shadow-2xl mx-auto w-full max-w-xl rounded-3xl bg-white p-6 md:p-10 border border-purple-50"
    >
      <h2 className="text-3xl font-black text-[#2D2140] tracking-tight">
        Become A <span className="text-[#6d62e5]">Volunteer</span>
      </h2>
      <p className="mt-2 text-sm text-gray-500 font-medium">
        We are looking for new Volunteers. Please fill up the form below to get started.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <LabelInputContainer>
              <Label htmlFor="name" className="text-gray-400 uppercase text-[10px] font-bold ml-1">Your Name*</Label>
              <Input id="name" placeholder="Full Name" type="text" className="bg-gray-50/50 border-gray-100 focus:ring-2 focus:ring-purple-100 transition-all" />
            </LabelInputContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <LabelInputContainer>
              <Label htmlFor="phone" className="text-gray-400 uppercase text-[10px] font-bold ml-1">Phone Number*</Label>
              <Input id="phone" placeholder="+91 00000 00000" type="text" className="bg-gray-50/50 border-gray-100 focus:ring-2 focus:ring-purple-100 transition-all" />
            </LabelInputContainer>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-4">
          <LabelInputContainer>
            <Label htmlFor="email" className="text-gray-400 uppercase text-[10px] font-bold ml-1">Email Address*</Label>
            <Input id="email" placeholder="hello@example.com" type="email" className="bg-gray-50/50 border-gray-100 focus:ring-2 focus:ring-purple-100 transition-all" />
          </LabelInputContainer>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <LabelInputContainer>
              <Label htmlFor="state" className="text-gray-400 uppercase text-[10px] font-bold ml-1">State</Label>
              <Input id="state" placeholder="State" type="text" className="bg-gray-50/50 border-gray-100 focus:ring-2 focus:ring-purple-100 transition-all" />
            </LabelInputContainer>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <LabelInputContainer>
              <Label htmlFor="city" className="text-gray-400 uppercase text-[10px] font-bold ml-1">City</Label>
              <Input id="city" placeholder="City" type="text" className="bg-gray-50/50 border-gray-100 focus:ring-2 focus:ring-purple-100 transition-all" />
            </LabelInputContainer>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-8">
          <LabelInputContainer>
            <Label htmlFor="address" className="text-gray-400 uppercase text-[10px] font-bold ml-1">Address*</Label>
            <textarea 
              id="address" 
              placeholder="Enter your full address" 
              className="flex min-h-[80px] w-full rounded-md border border-gray-100 bg-gray-50/50 px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all resize-none"
            />
          </LabelInputContainer>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group/btn relative block h-12 w-full rounded-xl bg-[#6d62e5] font-bold text-white shadow-lg shadow-purple-100 hover:bg-[#5a50d1] transition-all"
          type="submit"
        >
          Submit Application &rarr;
          <BottomGradient />
        </motion.button>
      </form>
    </motion.div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};