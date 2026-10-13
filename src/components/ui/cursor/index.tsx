"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const JellyBlobCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 4, stiffness: 50, mass: 0.02 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const dx = useTransform(springX, (latest) => cursorX.get() - latest);
  const dy = useTransform(springY, (latest) => cursorY.get() - latest);

  const scaleX = useTransform([dx, dy], (latest) => {
    const [latestDx, latestDy] = latest as [number, number];
    const distance = Math.sqrt(latestDx ** 2 + latestDy ** 2);
    const scale = Math.min(distance / 650, 0.25);
    return 1 + scale + (isHovering ? 0.5 : 0);
  });

  const scaleY = useTransform([dx, dy], (latest) => {
    const [latestDx, latestDy] = latest as [number, number];
    const distance = Math.sqrt(latestDx ** 2 + latestDy ** 2);
    const scale = Math.min(distance / 650, 0.25);
    return 1 - scale + (isHovering ? 0.5 : 0);
  });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX + 12);
      cursorY.set(e.clientY + 15);
    },
    [cursorX, cursorY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hveEl = target.closest(".hve") as HTMLElement;
      if (hveEl) {
        const text = hveEl.getAttribute("data-cursor") || "";
        setHoverText(text);
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hveEl = target.closest(".hve") as HTMLElement;
      if (hveEl) {
        setHoverText("");
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseMove]);

  return (
    <div className="w-full h-full relative hidden lg:flex">
      <motion.div
        className="fixed rounded-full z-999999 pointer-events-none bg-linear-to-r from-blue-600 to-blue-400 shadow-[0_0_20px_rgba(0,0,0,0.1)] flex items-center justify-center"
        style={{
          transformOrigin: "center center",
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
          scaleX,
          scaleY,
        }}
        animate={{
          width: isHovering ? 120 : 15,
          height: isHovering ? 120 : 15,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering && hoverText ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {hoverText}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JellyBlobCursor;
