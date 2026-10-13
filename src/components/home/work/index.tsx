"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Home, Work, Media } from "@/types/payload-types";
import Link from "next/link";

export default function WorkCarousel({
  data,
  works,
}: {
  data: Home["workSection"];
  works: Work[];
}) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const displayWorks = works && works.length > 0 ? works : [];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[4xl~7xl] leading-[1.1] font-cabinet">
            {data?.title}
          </h2>
          <p className="mt-4 text-[sm~lg]">{data?.description}</p>
        </div>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden pl-4 sm:pl-6 lg:pl-8 relative"
          ref={emblaRef}
        >
          <div className="flex">
            {displayWorks.map((project, index) => {
              const imageUrl =
                project.mainImage && typeof project.mainImage !== "number"
                  ? (project.mainImage as Media).url
                  : "";
              return (
                <Link
                  key={index}
                  href={`/works/${project.slug}`}
                  className="relative flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_35%] md:pl-4 group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-square md:aspect-4/3 overflow-hidden h-[200px~530px]">
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-2 px-2">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[4px~12px]">
                        <h3 className="text-[2xl~3xl] leading-none font-cabinet">
                          {project.title}
                        </h3>
                        <p className="hidden md:flex text-base">
                          {project.category}
                        </p>
                      </div>
                      <p className="text-[xs~base] text-neutral-500">
                        {project.solution.split("", 80)}...
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
