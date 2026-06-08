"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 + index * 0.1 }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] bg-[#F5F2EC] rounded-2xl mb-6 overflow-hidden border border-[#D8D1C3]">
        {/* Placeholder Texture */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
        
        {/* Hover Background */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-black`} />

        <div className="absolute top-4 right-4 bg-[#FDFBF7] rounded-full px-3 py-1 text-sm font-medium border border-[#D8D1C3] text-[#2C2A26]">
          ₹{product.price}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-heading font-bold uppercase tracking-tight mb-2 text-[#2C2A26]">
          {product.title}
        </h3>
        <p className="text-[#7C756B] text-sm mb-6 flex-1">
          {product.description}
        </p>

        <button className={`w-full flex items-center justify-between py-4 border-b border-[#D8D1C3] group-hover:border-[#2C2A26] transition-colors duration-300 text-[#2C2A26]`}>
          <span className="font-bold uppercase tracking-widest text-sm">Add to Order</span>
          <div className={`w-8 h-8 rounded-full border border-[#D8D1C3] flex items-center justify-center transition-all duration-300 group-hover:bg-[#2C2A26] group-hover:text-white group-hover:border-transparent`}>
            <Plus className="w-4 h-4" />
          </div>
        </button>
      </div>
    </motion.div>
  );
}

