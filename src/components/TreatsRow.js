"use client";

import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dogTreats = [
  { id: 1, title: "Chicken Delicacy", image: "/Chicken Delicacy.png" },
  { id: 2, title: "Beef Delicacy", image: "/Beef Delicacy.png" },
  { id: 3, title: "Sardine Delicacy", image: "/Sardine Delicacy.png" },
  { id: 4, title: "BIO Treats with coconut oil", image: "/BIO Treats with coconut oil.png" }
];

const catTreats = [
  { id: 1, title: "Dried Minnows", image: "/Dried Minnows.png" },
  { id: 2, title: "Freeze-Dried Chicken Hearts", image: "/Freeze-Dried Chicken Hearts.png" },
  { id: 3, title: "Salmon Bites", image: "/Salmon Bites.png" },
  { id: 4, title: "Rabbit Liver Cubes", image: "/Rabbit Liver Cubes.png" }
];

export default function TreatsRow({ petType = "dog" }) {
  const currentTreats = petType === "cat" ? catTreats : dogTreats;
  const scrollRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 md:py-48 bg-[#f3f4f6] text-[#111] border-y border-stone-200">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-stone-200 pb-8">
          <div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight mb-4">
              Treats & Delicacies
            </motion.h2>
            <motion.p variants={itemVariants} className="text-stone-500 text-lg max-w-xl">
              100% natural, single-ingredient rewards for training or just because.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-stone-300 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-stone-300 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <button className="hidden md:flex items-center gap-2 uppercase tracking-widest font-bold text-sm hover:text-stone-500 transition-colors group">
              Explore All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={petType}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
            className="flex overflow-x-auto gap-8 px-6 md:px-12 lg:px-24 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] pb-8 pt-4"
            ref={scrollRef}
            style={{ 
              scrollPaddingLeft: 'clamp(1.5rem, 5vw, 6rem)',
            }}
          >
            {currentTreats.map((treat) => (
              <div 
                key={treat.id} 
                className="group cursor-pointer snap-start shrink-0 w-[70vw] sm:w-[40vw] md:w-[30vw] lg:w-[280px]"
              >
                <div className="relative aspect-[4/3] bg-white rounded-[2rem] mb-6 overflow-hidden border border-stone-200 shadow-sm">
                  <img src={treat.image} alt={treat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
                  <div className="absolute inset-0 bg-[#111] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight mb-2 group-hover:text-stone-500 transition-colors">
                  {treat.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
