"use client";

import { Work, Media } from "@/types/payload-types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { RenderRichText } from "@/lib/RichText";

gsap.registerPlugin(ScrollTrigger);

export default function WorkDetailContent({ work, allWorks }: { work: Work, allWorks: Work[] }) {
  const container = useRef(null);

  useGSAP(() => {
    const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
    reveals.forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    // Parallax effect for images
    const images = gsap.utils.toArray<HTMLElement>(".parallax-img");
    images.forEach((img) => {
      gsap.to(img, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, { scope: container });

  const nextWork = getNextWork(work.slug, allWorks);
  const galleryImages = work.gallery?.map(item => (item.image && typeof item.image !== "number") ? (item.image as Media).url : null).filter(Boolean) || [];

  return (
    <div ref={container} className="bg-white text-black font-satoshi">
      {/* Overview & Stats */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-12">
              <div className="reveal">
                <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">Metadata</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-neutral-400 text-xs uppercase mb-1">Client</p>
                    <p className="font-medium">{work.client}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs uppercase mb-1">Year</p>
                    <p className="font-medium">{work.year}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-neutral-400 text-xs uppercase mb-1">Role</p>
                    <p className="font-medium">{work.role || "Lead Designer"}</p>
                  </div>
                </div>
              </div>

              {work.stats && work.stats.length > 0 && (
                <div className="reveal">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">Key Results</h4>
                  <div className="space-y-6">
                    {work.stats.map((stat, i) => (
                      <div key={i} className="flex items-baseline gap-4">
                        <span className="text-4xl font-cabinet italic">{stat.value}</span>
                        <span className="text-neutral-500 text-sm uppercase tracking-wider">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-8">
              <div className="reveal">
                <h2 className="text-4xl md:text-5xl font-cabinet mb-8 leading-tight uppercase italic">The Brief</h2>
                <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-10">
                  {work.tags?.map((item) => (
                    <span key={item.id} className="px-4 py-2 border border-neutral-200 rounded-full text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
                      {item.tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-neutral-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h4 className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold mb-8">The Challenge</h4>
            <h3 className="text-3xl md:text-6xl font-cabinet mb-12 leading-[1.1] italic uppercase">
              Addressing the core problems and constraints of the project.
            </h3>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
              {work.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Mid Gallery / Large Image */}
      {galleryImages[0] && (
        <section className="h-[70vh] md:h-screen relative overflow-hidden">
          <div className="absolute inset-0 parallax-img">
            <Image
              src={galleryImages[0] || ""}
              alt="Process visual"
              fill
              className="object-cover"
            />
          </div>
        </section>
      )}

      {/* The Solution Section */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
               <div className="reveal">
                <h4 className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold mb-8">The Solution</h4>
                <h3 className="text-4xl md:text-7xl font-cabinet mb-10 leading-[0.9] italic uppercase">
                  Crafting a <br /> unique approach.
                </h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
                  {work.solution}
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              {galleryImages[1] && (
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden reveal">
                  <Image
                    src={galleryImages[1] || ""}
                    alt="Solution visual"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Lexical Content */}
      {work.content && (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto prose prose-xl prose-neutral reveal">
              <RenderRichText data={work.content} />
            </div>
          </div>
        </section>
      )}

      {/* Full Gallery */}
      {galleryImages.length > 2 && (
        <section className="py-24 px-6 md:px-12 bg-black">
           <div className="container mx-auto">
             <div className="mb-20 text-center text-white reveal">
                <h2 className="text-5xl md:text-8xl font-cabinet uppercase italic">Final Output</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {galleryImages.slice(2).map((img, i) => (
                 <div 
                   key={i} 
                   className={`relative aspect-16/10 w-full overflow-hidden rounded-2xl reveal`}
                 >
                   {img && (
                    <Image 
                      src={img} 
                      alt={`${work.title} gallery ${i}`} 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                   )}
                 </div>
               ))}
             </div>
           </div>
        </section>
      )}

      {/* Navigation */}
      {nextWork && (
        <section className="py-32 px-6 md:px-12 border-t border-neutral-100">
          <div className="container mx-auto flex flex-col items-center justify-center text-center">
            <p className="text-neutral-400 uppercase tracking-widest text-sm mb-6">Next Project</p>
            <Link 
              href={`/works/${nextWork.slug}`}
              className="group"
            >
              <h2 className="text-6xl md:text-[12vw] font-cabinet uppercase italic leading-none group-hover:text-neutral-500 transition-colors duration-500">
                {nextWork.title}
              </h2>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

function getNextWork(currentSlug: string, allWorks: Work[]) {
  if (!allWorks || allWorks.length === 0) return null;
  const index = allWorks.findIndex((w) => w.slug === currentSlug);
  if (index === -1) return allWorks[0];
  const nextIndex = (index + 1) % allWorks.length;
  return allWorks[nextIndex];
}
