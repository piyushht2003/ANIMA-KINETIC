"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Instagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <footer className="bg-[#F5F2EC] text-[#2C2A26] pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#D8D1C3] pb-16"
      >
        
        {/* Brand */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <div className="font-heading font-extrabold text-3xl tracking-widest uppercase mb-6 whitespace-nowrap">
            ANIMA KINETIC<span className="text-[#A39E93]">.</span>
          </div>
          <p className="text-[#7C756B] font-medium max-w-xs mb-8">
            Pioneering the biological appropriate raw food movement for the modern carnivore.
          </p>
          <div className="flex gap-4 text-[#2C2A26]">
            <a href="#" className="w-10 h-10 rounded-full border border-[#D8D1C3] flex items-center justify-center hover:bg-[#2C2A26] hover:text-white hover:border-[#2C2A26] transition-all">
              <Instagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#D8D1C3] flex items-center justify-center hover:bg-[#2C2A26] hover:text-white hover:border-[#2C2A26] transition-all">
              <Facebook />
            </a>
          </div>
        </motion.div>

        {/* Contact & Location */}
        <motion.div variants={itemVariants}>
          <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-[#2C2A26]">
            Butcher Shop
          </h4>
          <ul className="space-y-4 text-[#7C756B]">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-[#2C2A26] mt-0.5" />
              <span>11 Kifissou Avenue<br/>Rentis, 182 33</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 shrink-0 text-[#2C2A26]" />
              <span>210 9404797</span>
            </li>
          </ul>
        </motion.div>

        {/* Opening Hours */}
        <motion.div variants={itemVariants}>
          <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-[#2C2A26]">
            Opening Hours
          </h4>
          <ul className="space-y-4 text-[#7C756B]">
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 shrink-0 text-[#2C2A26] mt-0.5" />
              <div>
                <div className="flex justify-between w-40 mb-1">
                  <span className="font-medium text-[#2C2A26]">Mon, Wed, Sat</span>
                  <span>09:00 - 15:00</span>
                </div>
                <div className="flex justify-between w-40">
                  <span className="font-medium text-[#2C2A26]">Tue, Thu, Fri</span>
                  <span>09:00 - 20:00</span>
                </div>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Links */}
        <motion.div variants={itemVariants}>
          <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-[#2C2A26]">
            Information
          </h4>
          <ul className="space-y-3 font-medium">
            <li><a href="#" className="text-[#7C756B] hover:text-[#2C2A26] transition-colors">Our Philosophy</a></li>
            <li><a href="#" className="text-[#7C756B] hover:text-[#2C2A26] transition-colors">Formulation Calculator</a></li>
            <li><a href="#" className="text-[#7C756B] hover:text-[#2C2A26] transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="text-[#7C756B] hover:text-[#2C2A26] transition-colors">Privacy Policy</a></li>
          </ul>
        </motion.div>

      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-[#A39E93] text-sm font-medium"
      >
        <p>© 2026 ANIMA KINETIC. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for the wild.</p>
      </motion.div>
    </footer>
  );
}
