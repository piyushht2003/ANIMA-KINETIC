"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const Instagram = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const links = [
  { title: "Home", href: "#" },
  { title: "Products", href: "#" },
  { title: "Our Philosophy", href: "#" },
  { title: "Butcher Shop", href: "#" },
  { title: "Contact", href: "#" }
];

export default function AnimatedMenu({ isOpen, onClose }) {
  // Menu background variants
  const menuVariants = {
    initial: { y: "-100%" },
    animate: { 
      y: 0, 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 } 
    }
  };

  // Staggered container for links
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  // Individual link variants
  const linkVariants = {
    initial: { y: "100%", rotate: 5, opacity: 0 },
    animate: { 
      y: 0, 
      rotate: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      y: "100%", 
      opacity: 0,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  // Footer / Social variants
  const footerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.8 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[100] bg-[#2C2A26] text-white flex flex-col justify-between px-6 py-8 md:px-12 md:py-12 lg:px-24"
        >
          {/* Header */}
          <div className="flex justify-between items-center w-full">
            <div className="font-heading font-black text-2xl tracking-widest uppercase">
              ANIMA KINETIC<span className="text-[#7C756B]">.</span>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDFBF7] hover:text-[#2C2A26] transition-all group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>

          {/* Links Grid */}
          <div className="flex-1 flex flex-col justify-center mt-12 md:mt-0">
            <motion.div 
              variants={containerVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit"
              className="flex flex-col gap-2 md:gap-4"
            >
              {links.map((link, i) => (
                <div key={i} className="overflow-hidden p-2">
                  <motion.a 
                    variants={linkVariants}
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center gap-6 text-[12vw] sm:text-[8vw] md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold uppercase tracking-tighter leading-none hover:text-[#A39E93] transition-colors w-fit"
                  >
                    <span className="text-sm md:text-lg font-sans font-bold text-[#7C756B] -mt-6 md:-mt-12 opacity-0 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </span>
                    {link.title}
                    <ArrowRight className="w-12 h-12 md:w-16 md:h-16 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Footer Info */}
          <motion.div 
            variants={footerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-white/20"
          >
            <div className="w-full md:w-auto">
              <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-[#7C756B] mb-4">Location</h4>
              <p className="font-medium">11 Kifissou Avenue<br/>Rentis, 182 33</p>
            </div>
            
            <div className="w-full md:w-auto">
              <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-[#7C756B] mb-4">Contact</h4>
              <p className="font-medium">210 9404797<br/>info@animakinetic.com</p>
            </div>

            <div className="w-full md:w-auto flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDFBF7] hover:text-[#2C2A26] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDFBF7] hover:text-[#2C2A26] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
