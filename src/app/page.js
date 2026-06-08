"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import RecipeSelector from "@/components/RecipeSelector";
import ProductMenu from "@/components/ProductMenu";
import BenefitsGrid from "@/components/BenefitsGrid";
import TreatsRow from "@/components/TreatsRow";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedMenu from "@/components/AnimatedMenu";
import { ArrowLeft, Search, User, ShoppingCart, Menu, ArrowRight, Dog, Cat } from "lucide-react";

export default function App() {
  const [view, setView] = useState("home"); // "home", "dog", "cat"
  const [petSelected, setPetSelected] = useState("cat"); // "dog" or "cat"
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Animations for Navbar
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [100, 300], [0, 1]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    })
  };

  return (
    <div className="relative min-h-screen bg-[#f3f4f6] text-[#111] selection:bg-[#111] selection:text-white">
      
      <CustomCursor />
      
      <AnimatedMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Fixed Navbar (Appears on Scroll) */}
      <motion.nav 
        style={{ opacity: navOpacity }}
        className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl px-8 py-6 md:py-8 flex justify-between items-center text-[#111] border-b border-white/20 shadow-sm"
      >
        <div className="hidden lg:flex items-center gap-8 font-bold uppercase tracking-widest text-xs">
          <a href="#" className="hover:text-stone-400 transition-colors">Products</a>
          <a href="#" className="hover:text-stone-400 transition-colors">Butcher Shop</a>
          <a href="#" className="hover:text-stone-400 transition-colors">Communication</a>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 font-heading font-black text-2xl sm:text-3xl md:text-4xl tracking-tighter whitespace-nowrap">
          ANIMA KINETIC
        </div>
        <div className="flex items-center gap-6 ml-auto lg:ml-0">
          <div className="hidden md:flex items-center gap-4">
            <button className="hover:text-stone-400 transition-colors"><Search className="w-5 h-5" /></button>
            <button className="hover:text-stone-400 transition-colors"><User className="w-5 h-5" /></button>
            <button className="hover:text-stone-400 transition-colors"><ShoppingCart className="w-5 h-5" /></button>
          </div>
          <button className="hidden md:block bg-[#111] text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full hover:bg-stone-800 transition-colors">
            Shop Online
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="bg-[#111] text-white p-3 rounded-full hover:bg-stone-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      <main className="relative z-10 w-full overflow-hidden">
        <AnimatePresence mode="wait" custom={1}>
          {view === "home" && (
            <motion.div
              key="home"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col"
            >
              {/* Full Width Hero Section */}
              <motion.div 
                animate={{ 
                  backgroundColor: petSelected === "cat" ? "#70798C" : "#5A6454",
                  color: "#F9F9F9"
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-screen flex flex-col transition-colors duration-700"
              >
                <Navigation onMenuClick={() => setIsMenuOpen(true)} theme="dark" />

                {/* Hero Content */}
                <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                  <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-[25vw] sm:text-[20vw] md:text-[15vw] font-heading font-black opacity-5 leading-none tracking-tighter select-none z-0 whitespace-nowrap">
                    ANIMA KINETIC
                  </h1>
                  
                  {/* Pet Image */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
                    <AnimatePresence mode="wait">
                      {petSelected === "cat" ? (
                        <motion.div 
                          key="cat"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="w-[75vw] sm:w-[60vw] md:w-[40vw] max-w-[400px] aspect-square rounded-full border-4 border-white shadow-2xl overflow-hidden"
                        >
                          <img 
                            src="/cat-removebg-preview.png" 
                            alt="Raw cat food" 
                            className="w-full h-full object-cover" 
                          />
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="dog"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="w-[75vw] sm:w-[60vw] md:w-[40vw] max-w-[400px] aspect-square rounded-full border-4 border-white shadow-2xl overflow-hidden"
                        >
                          <img 
                            src="/dog.png" 
                            alt="Raw dog food" 
                            className="w-full h-full object-cover" 
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Left Button (Stacked on mobile, Left on desktop) */}
                  <div className="absolute bottom-28 left-1/2 -translate-x-1/2 md:bottom-12 md:left-12 md:translate-x-0 z-20 w-[85%] max-w-[300px] md:w-auto md:max-w-none">
                    <button 
                      className="w-full rounded-full pl-6 md:pl-8 pr-2 py-2 flex items-center justify-between gap-4 shadow-lg hover:scale-105 transition-transform bg-white text-[#111]"
                    >
                      <span className="font-bold text-sm md:text-base whitespace-nowrap">Discover BARF food</span>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 bg-[#111] text-white">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </button>
                  </div>

                  {/* Bottom Right Pet Toggle (Centered on mobile, Right on desktop) */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12 md:left-auto md:right-12 md:translate-x-0 z-20">
                    <div className="bg-white rounded-full p-2 flex items-center shadow-lg transition-colors duration-700">
                      <button 
                        onClick={() => setPetSelected("dog")}
                        className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors ${
                          petSelected === "dog" ? "bg-[#111] text-white" : "bg-transparent text-stone-400 hover:text-[#111]"
                        }`}
                      >
                        <Dog className="w-5 h-5 md:w-7 md:h-7" />
                      </button>
                      <button 
                        onClick={() => setPetSelected("cat")}
                        className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors ${
                          petSelected === "cat" ? "bg-[#111] text-white" : "bg-transparent text-stone-400 hover:text-[#111]"
                        }`}
                      >
                        <Cat className="w-5 h-5 md:w-7 md:h-7" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Expansion Sections */}
              <div className="relative z-10 bg-[#f3f4f6] flex flex-col pt-12 pb-12 gap-12">
                <RecipeSelector />
                <ProductMenu petType={petSelected} />
                <BenefitsGrid />
                <TreatsRow petType={petSelected} />
                <FAQAccordion />
              </div>
            </motion.div>
          )}

          {view === "dog" && (
            <div key="dog" className="pt-24 px-6 md:px-12 lg:px-24 min-h-screen">
              <CategoryView 
                title="CANINE DIET" 
                products={dogProducts} 
                onBack={() => setView("home")}
                variants={variants}
              />
            </div>
          )}

          {view === "cat" && (
            <div key="cat" className="pt-24 px-6 md:px-12 lg:px-24 min-h-screen">
              <CategoryView 
                title="FELINE DIET" 
                products={catProducts} 
                onBack={() => setView("home")}
                variants={variants}
              />
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function Navigation({ onMenuClick, theme = "light" }) {
  const isDarkTheme = theme === "dark";
  
  return (
    <nav className="relative w-full z-50 px-8 py-8 md:py-10 flex justify-between items-center text-current">
      <div className="hidden lg:flex items-center gap-8 font-bold uppercase tracking-widest text-xs">
        <a href="#" className="hover:opacity-50 transition-opacity">Products</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Butcher Shop</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Communication</a>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-6">
        <div className="w-12 h-16 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M12 22L9 16H15L12 22ZM6 3L8 9L12 12L16 9L18 3L15 6L12 4L9 6L6 3Z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-6 ml-auto lg:ml-0">
        <div className="hidden md:flex items-center gap-4">
          <button className="hover:opacity-50 transition-opacity"><Search className="w-5 h-5" /></button>
          <button className="hover:opacity-50 transition-opacity"><User className="w-5 h-5" /></button>
          <button className="hover:opacity-50 transition-opacity"><ShoppingCart className="w-5 h-5" /></button>
        </div>
        <button className={`hidden md:block font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors ${
          isDarkTheme ? "bg-white text-[#111] hover:bg-stone-200" : "bg-[#111] text-white hover:bg-stone-800"
        }`}>
          Shop Online
        </button>
        <button 
          onClick={onMenuClick}
          className={`p-3 rounded-full transition-colors ${
            isDarkTheme ? "bg-white text-[#111] hover:bg-stone-200" : "bg-[#111] text-white hover:bg-stone-800"
          }`}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}

function CategoryView({ title, products, onBack, variants }) {
  return (
    <motion.div
      custom={1}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="pb-24 pt-12"
    >
      <button 
        onClick={onBack}
        className="group flex items-center gap-4 mb-12 uppercase tracking-widest font-bold text-sm hover:text-stone-500 transition-colors"
      >
        <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:-translate-x-2 transition-transform bg-white">
          <ArrowLeft className="w-5 h-5" />
        </div>
        Back to Origins
      </button>

      <div className="mb-24">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className={`text-[8vw] sm:text-[6vw] leading-none font-heading font-extrabold uppercase tracking-tighter text-[#111]`}
          >
            {title}
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
