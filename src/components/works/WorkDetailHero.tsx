"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { Work, Media } from "@/types/payload-types";

export default function WorkDetailHero({ work }: { work: Work }) {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".work-image", {
      scale: 1.2,
      duration: 2,
      ease: "power2.out",
    });

    tl.from(".reveal-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
    }, "-=1.5");

    tl.from(".reveal-line", {
      scaleX: 0,
      duration: 1.5,
      transformOrigin: "left",
    }, "-=1");

  }, { scope: container });

  const heroImage = (work.mainImage && typeof work.mainImage !== "number") ? (work.mainImage as Media).url : "";

  return (
    <section ref={container} className="relative w-full h-screen overflow-hidden flex items-center justify-center px-6 md:px-12 bg-black">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage}
            alt={work.title}
            fill
            className="object-cover work-image opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden mb-6">
             <span className="cta-reveal inline-block uppercase tracking-[0.3em] text-sm md:text-base font-medium text-white/80 reveal-text">
               {work.category} — {work.year}
             </span>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="text-7xl md:text-[10vw] font-cabinet leading-[0.9] text-white reveal-text uppercase italic">
              {work.title}
            </h1>
          </div>

          <div className="w-24 h-[1px] bg-white/30 my-8 reveal-line" />

          <div className="max-w-2xl overflow-hidden">
            <p className="text-xl md:text-2xl text-white/70 font-satoshi reveal-text leading-relaxed">
              {work.subTitle || (work.description ? work.description.slice(0, 100) + "..." : "")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-end text-white/50 text-xs md:text-sm uppercase tracking-widest z-10">
        <div className="reveal-text">Client: {work.client}</div>
        <div className="reveal-text">Scroll to explore</div>
        <div className="reveal-text">Role: {work.role || "Designer"}</div>
      </div>
    </section>
  );
}
