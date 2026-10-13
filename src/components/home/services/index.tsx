// import Image from "next/image";
// import ScrollToColor from "../../ui/scrollToColor";
// import AnimatedText from "@/components/ui/AnimatedText";
// import getImage from "@/lib/get-image";

export default function Services() {
  return (
    <section className="mx-auto w-full py-24 px-8">
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <p className="font-satoshi text-lg text-neutral-500 mb-2">
          Services
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="text-6xl md:text-7xl font-cabinet leading-none">
            {data.title}
          </h2>
          <AnimatedText
            as="p"
            className="text-xl font-satoshi"
          >
            {data.description}
          </AnimatedText>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        {data.services?.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row relative"
            >

              <div className="w-full md:w-1/2 relative min-h-75 md:min-h-0 flex items-center justify-center">
                <Image
                  src={getImage(service.imageBase)}
                  alt={service.imageAlt as string}
                  width={700}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>


              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <h3
                  data-aos="fade-right"
                  data-aos-duration="800"
                  className="text-5xl md:text-6xl font-cabinet mb-6 leading-tight"
                >
                  {service.title}
                </h3>

                <AnimatedText
                  as="p"
                  className="text-lg md:text-xl mb-12 text-gray-800 max-w-md"
                >
                  {service.description}
                </AnimatedText>

                <div className="mt-auto pt-8">
                  <p className="text-neutral-500 mb-4 text-sm tracking-wider">
                    ({service.category})
                  </p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {service.subServices?.map((sub, i) => (
                      <p
                        key={i}
                        className="text-base md:text-lg font-satoshi text-neutral-700"
                      >
                        {sub.subService}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ScrollToColor text={data.concludingText as string} />
      </div> */}
    </section>
  );
}
