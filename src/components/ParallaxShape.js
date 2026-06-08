"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxShape({ children, className, scrollYProgress, yRange = ["-20%", "20%"], rotateRange = [0, 45] }) {
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  return (
    <motion.div 
      className={`absolute pointer-events-none z-0 ${className}`}
      style={{ y, rotate }}
    >
      {children}
    </motion.div>
  );
}
