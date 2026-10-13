"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const useTextReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const split = new SplitType(element, {
      types: "words",
    });

    const words = split.words;
    if (!words || words.length === 0) return;

    words.forEach((word) => {
      const wrapper = document.createElement("span");
      Object.assign(wrapper.style, {
        display: "inline-block",
        verticalAlign: "bottom",
        overflow: "hidden",
      });

      word.parentNode?.insertBefore(wrapper, word);
      wrapper.appendChild(word);
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y: "100%" },
        {
          y: 0,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.02,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return ref;
};