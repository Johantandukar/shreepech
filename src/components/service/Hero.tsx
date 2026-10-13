import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-2 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-9xl font-cabinet">Service</h1>
            <p className="text-lg md:text-2xl font-satoshi">
              Explore our tailored services designed to elevate your brand,
              product and create a unique mark of your identity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div
              className="w-full h-64 md:h-140 relative overflow-hidden"
              data-scroll
              data-scroll-speed="0.08"
            >
              <Image
                src="/images/services/brand-strategy.png"
                alt="Brand Strategy"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className="-mt-12 w-full h-64 md:h-140 relative overflow-hidden"
              data-scroll
              data-scroll-speed="-0.1"
            >
              <Image
                src="/images/services/webdesign.png"
                alt="Jardin Ethique"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
