import Hero from "@/components/service/Hero";
import ServiceSection from "@/components/service/ServiceSection";
import Cta from "@/components/service/Cta";
import { services } from "./data";

export const revalidate = 3600;

const Services = () => {
  return (
    <>
      <Hero />
      {services.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}
      <Cta />
    </>
  );
};

export default Services;
