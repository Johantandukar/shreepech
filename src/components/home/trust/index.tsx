import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Home } from "@/types/payload-types";
import getImage, { getAltText } from "@/lib/get-image";
import LogoMarquee from "@/components/ui/marquee";

const TrustSection = ({ data }: { data: Home["trustSection"] }) => {
  return (
    <>
      <section className="py-24 sm:py-32 bg-transparent overflow-hidden">
        <div className="mx-auto container px-2 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-row items-center justify-center gap-4">
            <hr className="w-full hidden md:flex" />
            <AnimatedText
              as="h2"
              className="text-center text-[2xl~4xl] font-cabinet w-full"
            >
              {data?.title}
            </AnimatedText>
            <hr className="w-full hidden md:flex" />
          </div>
          <div>
            {data?.clients && (
              <LogoMarquee
                items={data.clients.map((company) => (
                  <Image
                    key={company.id}
                    src={getImage(company.logo)}
                    alt={getAltText(company.logo)}
                    width={160}
                    height={80}
                    className="h-[70px~120px] md:w-auto object-contain bg-neutral-100 p-2 md:rounded-2xl"
                  />
                ))}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;
