"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

export default function Spotlight() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Smooth movement using Framer Motion
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Mouse move handler
  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  }, []);

  useEffect(() => {
    // Listen for mouse movement
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-blue-400 opacity-40 blur-3xl"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
