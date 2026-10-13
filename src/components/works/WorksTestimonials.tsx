"use client";

import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "@/types/payload-types";

interface WorksTestimonialsProps {
  testimonials: Testimonial[];
}

const WorksTestimonials: React.FC<WorksTestimonialsProps> = ({ testimonials }) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full mb-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-9xl font-cabinet">Testimonials</h2>
            <p className="mt-6 text-xl">
              Honest words from partners who trusted us to build, refine, and
              elevate their digital presence.
            </p>
          </div>
        </div>

        <div className="overflow-hidden py-10" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] pr-8"
              >
                <div className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksTestimonials;
