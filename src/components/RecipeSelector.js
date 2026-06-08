"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function RecipeSelector() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative mb-8 text-center flex flex-col items-center">
          <motion.div variants={itemVariants} className="uppercase tracking-widest font-bold text-xs text-[#7C756B] mb-4">
            Custom Formulation
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-heading font-medium text-[#2C2A26] mb-12 text-center">
            Find the right food <br/>
            <span className="relative inline-block font-black italic pr-2">
              for your dog.
              <svg className="absolute w-[110%] h-4 -bottom-1 -left-1 z-0 text-[#2C2A26]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h2>
        </div>

        <motion.div variants={itemVariants} className="bg-[#FDFBF7] rounded-full shadow-lg border border-[#EBE5DA] p-2 md:p-3 flex flex-col lg:flex-row items-center gap-2 relative z-20">
          
          <div className="flex-1 w-full lg:w-auto relative group cursor-pointer px-6 py-4 md:py-6 border-b lg:border-b-0 lg:border-r border-[#D8D1C3]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2C2A26]" />
            <div className="flex items-center justify-between">
              <span className="text-[#A39E93] font-bold uppercase tracking-widest text-xs">01.</span>
              <span className="text-[#2C2A26] font-medium text-sm md:text-base">How old is he?</span>
              <ChevronDown className="w-4 h-4 text-[#2C2A26] group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto relative group cursor-pointer px-6 py-4 md:py-6 border-b lg:border-b-0 lg:border-r border-[#D8D1C3]">
            <div className="flex items-center justify-between">
              <span className="text-[#A39E93] font-bold uppercase tracking-widest text-xs">02.</span>
              <span className="text-[#2C2A26] font-medium text-sm md:text-base">How many kilograms is it?</span>
              <ChevronDown className="w-4 h-4 text-[#2C2A26] group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto relative group cursor-pointer px-6 py-4 md:py-6 border-b lg:border-b-0 lg:border-r border-[#D8D1C3]">
            <div className="flex items-center justify-between">
              <span className="text-[#A39E93] font-bold uppercase tracking-widest text-xs">03.</span>
              <span className="text-[#2C2A26] font-medium text-sm md:text-base">Activity;</span>
              <ChevronDown className="w-4 h-4 text-[#2C2A26] group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto relative group cursor-pointer px-6 py-4 md:py-6">
            <div className="flex items-center justify-between">
              <span className="text-[#A39E93] font-bold uppercase tracking-widest text-xs">04.</span>
              <span className="text-[#2C2A26] font-medium text-sm md:text-base">Is it sterilized?</span>
              <ChevronDown className="w-4 h-4 text-[#2C2A26] group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full lg:w-auto p-2 lg:p-0 lg:ml-4">
            <div className="shrink-0">
              <button className="bg-[#2C2A26] text-white rounded-full py-4 px-8 flex items-center gap-4 font-bold uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors hover:scale-105 shadow-md">
                <span>See the suggestions</span>
                <div className="w-8 h-8 rounded-full bg-[#FDFBF7] text-[#2C2A26] flex items-center justify-center border border-[#D8D1C3]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
