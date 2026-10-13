import ScrollToColor from "@/components/ui/scrollToColor";
import { Home } from "@/types/payload-types";

export default function Philosophy({
  data,
}: {
  data: Home["philosophySection"];
}) {
  if (!data) return null;
  return (
    <section className="w-full py-[40px~128px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-cabinet text-[5xl~7xl] leading-[1.1] mb-12 text-center">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <blockquote className="text-4xl md:text-6xl font-cabinet leading-tight text-neutral-800">
              <ScrollToColor text={`"${data.quote}"`} />
            </blockquote>
          </div>

          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <p className="font-satoshi text-lg md:text-xl font-medium leading-relaxed">
              {data.description1}
            </p>
            <p className="font-satoshi text-lg md:text-xl font-medium leading-relaxed">
              {data.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
