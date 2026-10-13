"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollToColorProps {
  text: string;
  className?: string;
}

const ScrollToColor: React.FC<ScrollToColorProps> = ({
  text,
  className = "text-3xl md:text-5xl lg:text-6xl font-cabinet text-center max-w-5xl mx-auto leading-tight",
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const words = textRef.current.innerText.split(" ");
      textRef.current.innerHTML = words
        .map((word) => `<span class="text-neutral-400">${word}</span>`)
        .join(" ");

      const spans = gsap.utils.toArray<HTMLElement>(textRef.current.children);

      gsap.fromTo(
        spans,
        { color: "#A3A3A3" },
        {
          color: "#000000",
          stagger: 0.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: true,
          },
        },
      );
    },
    { scope: textRef },
  );

  return (
    <p className={className} ref={textRef}>
      {text}
    </p>
  );
};

export default ScrollToColor;
