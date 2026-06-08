"use client";

import { Zap, ShieldCheck, Sparkles, Droplets } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Increased energy & vitality",
      description: "The dog is more active and happier."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Less & 'cleaner' impurities",
      description: "Indication of excellent food assimilation."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Healthy & shiny coat",
      description: "External sign of proper nutrition."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Strengthening immune system",
      description: "Protection from skin conditions and allergies."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] border-t border-[#D8D1C3]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#2C2A26] mb-4">
            Why B.A.R.F.?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#7C756B] text-lg max-w-xl mx-auto">
            The biological transformation begins from the inside out. Experience the undeniable benefits of a raw diet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, idx) => (
            <motion.div variants={itemVariants} key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full border border-[#D8D1C3] flex items-center justify-center text-[#2C2A26] mb-6 group-hover:bg-[#2C2A26] group-hover:text-white transition-colors duration-500">
                {benefit.icon}
              </div>
              <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-[#2C2A26] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#7C756B] text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
