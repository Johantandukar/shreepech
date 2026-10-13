"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function LogoMarquee({ items }: { items: React.ReactNode[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: -1.2,
      }),
    ],
  );

  const slides = [...items, ...items];

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex items-center gap-2 md:gap-12 md:pr-12">
        {slides.map((item, i) => (
          <div key={i} className="flex-[0_0_auto] min-w-40">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
