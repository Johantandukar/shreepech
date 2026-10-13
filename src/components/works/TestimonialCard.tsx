import React from "react";
import Image from "next/image";
import { Testimonial } from "@/types/payload-types";
import getImage from "@/lib/get-image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col h-full">
      <blockquote className="text-xl md:text-2xl font-cabinet leading-relaxed mb-6 grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-16 h-16 relative rounded-full overflow-hidden shrink-0">
          <Image
            src={getImage(testimonial.avatar)}
            alt={testimonial.author}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <p className="font-urbanist text-lg font-semibold text-black">
            {testimonial.author}
          </p>
          <p className="font-satoshi text-neutral-600 text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
