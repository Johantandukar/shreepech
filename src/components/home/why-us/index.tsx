import AnimatedText from "@/components/ui/AnimatedText";
import getImage from "@/lib/get-image";
import { Home } from "@/types/payload-types";
import Image from "next/image";

export default function WhyUs({ data }: { data: Home["whyUs"] }) {
  if (!data) return null;
  return (
    <section className="py-20 border-y">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedText
            as="h2"
            className="text-[4xl~5xl] font-cabinet font-medium lg:font-normal leading-[1.1]"
          >
            {data.title}
          </AnimatedText>
          <AnimatedText as="h2" className="mt-4 text-[base~lg]">
            {data.description}
          </AnimatedText>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-[40px~160px] border-t md:border-t-0 pt-10 md:pt-0">
          {data.features?.map((item, i) => {
            const isEven = i % 2 === 1;
            const imageUrl = getImage(item.image);
            return (
              <div key={item.id} data-aos="fade-up" data-aos-duration="600">
                <div className="md:px-8">
                  <div
                    className={`justify-center items-center flex flex-col gap-4 md:gap-12 ${
                      isEven
                        ? "lg:flex lg:flex-row-reverse"
                        : "lg:flex lg:flex-row"
                    }`}
                  >
                    <div className="text-center lg:text-left lg:w-[30%]">
                      <h3 className="text-4xl sm:text-5xl font-cabinet">
                        {item.title}
                      </h3>

                      <p className="mt-[4px~24px] text-lg">{item.description}</p>

                      <blockquote className="mt-[20px~48px] text-base text-neutral-800">
                        &quot;{item.testimonial}&quot;
                        <span className="mt-3 block font-medium text-gray-700">
                          — {item.testimonialAuthor}
                        </span>
                      </blockquote>
                    </div>

                    <div className="lg:w-[70%]">
                      <div className="relative w-full rounded-xl border border-neutral-300 p-1.5 bg-neutral-100">
                        <Image
                          src={imageUrl}
                          alt="Product preview"
                          width={1920}
                          height={1080}
                          className="w-full lg:min-h-120 object-cover aspect-square lg:aspect-video rounded-sm border border-neutral-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
