"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import LocomotiveScroll from "locomotive-scroll";
import type { ILocomotiveScrollOptions } from "locomotive-scroll";
import "locomotive-scroll/locomotive-scroll.css";

type LocomotiveOptionsWithEl = ILocomotiveScrollOptions & {
  el: HTMLElement;
};

export default function LocomotiveScrollWrapper(): null {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = document.getElementById(
      "shreepech-smooth",
    ) as HTMLElement | null;

    if (!container) return;

    containerRef.current = container;

    const init = (): void => {
      // Destroy old instance if it exists
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }

      const options: LocomotiveOptionsWithEl = {
        el: container,
        lenisOptions: { lerp: 0.1, duration: 1.8 },
      };

      scrollRef.current = new LocomotiveScroll(options);
    };

    // Delay init by 1 frame to let layout + fonts settle
    const rafId = requestAnimationFrame(() => {
      init();
    });

    return () => {
      cancelAnimationFrame(rafId);

      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, [pathname]);

  return null;
}
