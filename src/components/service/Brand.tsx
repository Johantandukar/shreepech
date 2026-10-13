import ServiceSection from "./ServiceSection";
import { services } from "@/app/(frontend)/services/data";

const Brand = () => {
  const brandService = services.find(
    (service) => service.title === "Brand strategy"
  );

  if (!brandService) {
    return null;
  }

  return <ServiceSection {...brandService} />;
};

export default Brand;