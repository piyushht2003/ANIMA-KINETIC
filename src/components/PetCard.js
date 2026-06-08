"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PetCard({ title, onClick, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay }}
      onClick={onClick}
      className="relative w-full h-[50vh] md:h-full rounded-[2rem] overflow-hidden cursor-pointer group bg-[#FDFBF7] border border-[#D8D1C3] shadow-sm hover:shadow-lg transition-shadow duration-500"
    >
      {/* Background Graphic - Minimal */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 mix-blend-multiply filter blur-xl bg-black"
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10">
        <div className="flex justify-end">
          <div className="w-16 h-16 rounded-full border border-[#D8D1C3] flex items-center justify-center group-hover:bg-[#2C2A26] group-hover:text-white group-hover:scale-110 group-hover:border-transparent transition-all duration-500">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
        
        <div>
          <div className="overflow-hidden">
            <h3 
              className="text-6xl md:text-8xl font-heading font-extrabold uppercase tracking-tighter text-[#2C2A26]"
            >
              {title}
            </h3>
          </div>
          <div className="overflow-hidden mt-2">
            <p className="text-sm tracking-widest uppercase text-[#A39E93] group-hover:text-stone-600 transition-colors duration-500">
              Explore formulation
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

