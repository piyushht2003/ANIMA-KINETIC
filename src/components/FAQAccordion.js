"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the B.A.R.F. diet?",
    answer: "B.A.R.F. stands for Biologically Appropriate Raw Food. It is a diet composed of raw muscle meat, raw meaty bones, and organs, designed to mimic what dogs and cats would eat in the wild."
  },
  {
    question: "Is there a risk of bacteria or salmonella?",
    answer: "Healthy pets have highly acidic stomachs and short digestive tracts designed to safely handle raw meat. We also use human-grade ingredients and strict freezing protocols to eliminate pathogens."
  },
  {
    question: "How much should my dog eat per day?",
    answer: "An adult dog typically eats 2% to 3% of their ideal body weight daily. This can vary based on age, activity level, and metabolism. Use our Formulation Calculator for a precise recommendation."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] border-y border-[#D8D1C3]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#2C2A26] mb-4">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#7C756B] text-lg">
            Everything you need to know about transitioning to raw.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className="border border-[#D8D1C3] rounded-[2rem] overflow-hidden bg-[#EBE5DA]"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
              >
                <h3 className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-[#2C2A26] group-hover:text-[#7C756B] transition-colors">
                  {faq.question}
                </h3>
                <div className="w-10 h-10 rounded-full border border-[#D8D1C3] flex items-center justify-center bg-[#FDFBF7] shrink-0 group-hover:border-[#2C2A26] transition-colors text-[#2C2A26]">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-[#7C756B] text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
