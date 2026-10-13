import ServiceSection from "./ServiceSection";
import { services } from "@/app/(frontend)/services/data";

const Design = () => {
  const designService = services.find(
    (service) => service.title === "Website design"
  );

  if (!designService) {
    return null;
  }

  return <ServiceSection {...designService} />;
};

export default Design;