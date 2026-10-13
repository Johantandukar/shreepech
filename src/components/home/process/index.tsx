"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Home } from "@/types/payload-types";
import getImage from "@/lib/get-image";

gsap.registerPlugin(ScrollTrigger);

export default function Process({ data }: { data: Home["processSection"] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!timelineRef.current || !progressRef.current) return;

      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      className="py-[60px~128px] px-6 container mx-auto relative"
      ref={containerRef}
    >
      <div className="text-center mb-[24px~96px]">
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500">
          {data?.tag}
        </span>

        <h2 className="mt-6 text-[2xl~6xl] leading-[1.1] max-w-4xl mx-auto font-cabinet">
          {data?.title}
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative flex gap-[20px~48px]">
          {/* Progress bar */}
          <div className="hidden md:flex relative w-0.5 bg-gray-200 rounded-sm">
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full bg-blue-500 rounded-full h-0"
            ></div>
          </div>

          <div className="grid gap-12" ref={timelineRef}>
            {data?.timeline?.map((step, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 w-full justify-between gap-[12px~48px] items-center"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {/* Text */}
                <div className="h-full flex flex-col gap-[8px~12px] justify-start">
                  <h3 className="text-[3xl~5xl] font-cabinet">
                    <span className="text-blue-500">Day </span>
                    {step.days}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[lg~xl] md:font-medium">{step.title}</h4>
                    <p className="text-neutral-600 max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="bg-neutral-200 rounded-2xl p-3">
                  <Image
                    src={getImage(step.image)}
                    alt={step.title as string}
                    width={500}
                    height={500}
                    className="aspect-square"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
