import AnimatedText from "../ui/AnimatedText";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  items: ServiceItem[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <section className="py-24" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="sticky top-14">
            <h2
              className="text-4xl md:text-8xl font-cabinet"
              data-scroll
              data-scroll-speed="-0.02"
            >
              {title}
            </h2>
          </div>
          <div>
            <AnimatedText className="text-2xl mb-8 font-urbanist font-medium text-neutral-600">
              {description}
            </AnimatedText>
            <div className="space-y-8 font-satoshi">
              {items.map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-urbanist font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
