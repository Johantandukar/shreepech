"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "@/components/ui/AnimatedText";
import type { Home } from "@/types/payload-types";
import getImage from "@/lib/get-image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ data }: { data: Home["hero"] }) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!stageRef.current || !imageWrapRef.current) return;

    const stageEl = stageRef.current;
    const imageEl = imageWrapRef.current;

    gsap.set(imageEl, { scale: 0.9 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stageEl,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: false,
      },
    });

    tl.to(imageEl, {
      scale: 1,
      ease: "power2.out",
      duration: 0.3,
    });

    tl.to(imageEl, {
      scale: 1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative flex flex-col min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[1rem~10rem]">
        <div className="relative w-full z-20 flex flex-col gap-8 justify-center items-center max-w-4xl mx-auto text-center">
          <AnimatedText
            as="h1"
            className="relative z-20 text-[4xl~7xl] font-cabinet leading-none"
          >
            {data?.title}
          </AnimatedText>

          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <AnimatedText
              as="p"
              className="text-sm md:text-xl font-satoshi font-medium"
            >
              {data?.description}
            </AnimatedText>
          </div>
        </div>

        <div ref={stageRef} className="relative h-[360px~2560px] z-0">
          <div className="sticky top-[25vh] flex justify-center items-center h-[60vh]">
            <div ref={imageWrapRef} className="will-change-transform">
              <video
                autoPlay
                loop
                muted
                src={getImage(data?.video)}
                className="object-cover h-[400px~800px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
