"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import WorkCard from "@/components/works/WorkCard";
import { Work } from "@/types/payload-types";

gsap.registerPlugin(ScrollTrigger);

const WorksHero = ({ works }: { works: Work[] }) => {
  const container = useRef<HTMLDivElement>(null);
  const horizontalTrack = useRef<HTMLDivElement>(null);
  const mainWrapper = useRef<HTMLDivElement>(null);

  // Re-integrate Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(
    () => {
      const track = horizontalTrack.current;
      const wrapper = mainWrapper.current;
      const pinContainer = container.current;

      if (!track || !wrapper || !pinContainer) return;

      const scrollWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;
      const xOffset = -(scrollWidth - windowWidth);
      const HOLD_DISTANCE_FACTOR = 0.5;
      const holdDistance = windowWidth * HOLD_DISTANCE_FACTOR; 
      const totalScrollLength = scrollWidth + holdDistance;

      gsap.set(wrapper, { height: totalScrollLength });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: pinContainer,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScrollLength - window.innerHeight}`,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, {
        x: xOffset,
        ease: "none",
        duration: totalScrollLength,
      });

      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.85 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl, 
              start: "left center-=10%",
              end: "right center+=10%",
              scrub: 0.4,
            },
          }
        );
      });
    },
    { scope: mainWrapper }
  );

  return (
    <div className="bg-white text-black">
      <div className="flex flex-col items-center justify-center pt-16 pb-12">
        <h1 className="text-5xl md:text-9xl font-cabinet text-center">
          Our Works
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-center">
          Explore our portfolio of projects that speak for themselves.
        </p>
      </div>

      <div ref={mainWrapper}>
        <div
          ref={container}
          className="relative w-full h-screen overflow-hidden"
        >
          <div
            ref={horizontalTrack}
            className="flex items-center gap-2 px-8 md:px-16 h-full"
          >
            {works.map((work, index) => (
              <WorkCard
                key={index}
                work={work}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksHero;