"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Use springs for smooth following
  const cursorX = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28 });
  
  const outerCursorX = useSpring(-100, { stiffness: 150, damping: 20 });
  const outerCursorY = useSpring(-100, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update springs
      cursorX.set(e.clientX - 4); // Center the 8px dot
      cursorY.set(e.clientY - 4);
      
      outerCursorX.set(e.clientX - 16); // Center the 32px ring
      outerCursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a clickable element
      if (
        e.target.tagName === "BUTTON" || 
        e.target.tagName === "A" || 
        e.target.closest("button") || 
        e.target.closest("a") ||
        e.target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide default cursor globally
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY, outerCursorX, outerCursorY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#2C2A26] pointer-events-none z-[100]"
        style={{
          x: outerCursorX,
          y: outerCursorY,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(17, 17, 17, 0.1)" : "transparent",
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#2C2A26] rounded-full pointer-events-none z-[100]"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 0 : 1,
        }}
      />
    </>
  );
}
