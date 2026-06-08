"use client";

import { useRef } from "react";
import { ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dogMenu = [
  { id: 1, title: "Complete Chicken Meal Plus", priceRange: "₹99 – ₹279", sizes: ["250g", "500g", "1kg"], type: "chicken", image: "/Complete Chicken Meal Plus.png" },
  { id: 2, title: "Complete Beef Meal Plus", priceRange: "₹129 – ₹349", sizes: ["250g", "500g", "1kg"], type: "beef", image: "/Complete Beef Meal Plus.png" },
  { id: 3, title: "Complete Lamb Meal Plus", priceRange: "₹149 – ₹379", sizes: ["250g", "500g", "1kg"], type: "lamb", image: "/Complete Lamb Meal Plus.png" },
  { id: 4, title: "Complete Turkey Meal Plus", priceRange: "₹119 – ₹319", sizes: ["250g", "500g", "1kg"], type: "turkey", image: "/Complete Turkey Meal Plus.png" }
];

const catMenu = [
  { id: 1, title: "Feline Quail & Organs", priceRange: "₹139 – ₹369", sizes: ["250g", "500g"], type: "quail", image: "/Feline Quail & Organs.png" },
  { id: 2, title: "Feline Rabbit Feast", priceRange: "₹159 – ₹429", sizes: ["250g", "500g"], type: "rabbit", image: "/Feline Rabbit Feast.png" },
  { id: 3, title: "Feline Sardine Mix", priceRange: "₹109 – ₹289", sizes: ["250g", "500g"], type: "sardine", image: "/Feline Sardine Mix.png" },
  { id: 4, title: "Feline Chicken & Heart", priceRange: "₹109 – ₹309", sizes: ["250g", "500g"], type: "chicken", image: "/Feline Chicken & Heart.png" }
];

export default function ProductMenu({ petType = "dog" }) {
  const currentMenu = petType === "cat" ? catMenu : dogMenu;
  const scrollRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 md:py-48 bg-[#fafafa]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111] mb-4">
              The B.A.R.F. Menu
            </motion.h2>
            <motion.p variants={itemVariants} className="text-stone-500 text-lg max-w-xl">
              Premium raw meals formulated to meet the exact nutritional requirements of your carnivore.
            </motion.p>
          </div>
          
          {/* Navigation Arrows & Action */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <button className="hidden md:block uppercase tracking-widest font-bold text-sm border-b-2 border-[#111] pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors">
              View All Meals
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Full-width scroll container with left padding to match max-w-7xl layout */}
      <div className="w-full relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={petType}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex overflow-x-auto gap-8 px-6 md:px-12 lg:px-24 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] pb-12 pt-4"
            ref={scrollRef}
            style={{ 
              scrollPaddingLeft: 'clamp(1.5rem, 5vw, 6rem)',
            }}
          >
            {currentMenu.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer snap-start shrink-0 w-[80vw] sm:w-[45vw] md:w-[35vw] lg:w-[280px]"
              >
                {/* Image Box */}
                <div className="relative aspect-[4/5] bg-stone-100 rounded-[2rem] mb-6 overflow-hidden border border-stone-200">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  
                  {/* Quick action button */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#111] hover:text-white">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-[#111] mb-2 group-hover:text-stone-600 transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.sizes.map((size) => (
                      <span key={size} className="text-xs font-bold uppercase tracking-widest text-stone-500 bg-stone-100 px-2 py-1 rounded-md">
                        {size}
                      </span>
                    ))}
                  </div>
                  <p className="font-medium text-[#111]">
                    {product.priceRange}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
