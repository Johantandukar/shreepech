import ServiceSection from "./ServiceSection";
import { services } from "@/app/(frontend)/services/data";

const UX = () => {
  const uxService = services.find((service) => service.title === "UI/UX design");

  if (!uxService) {
    return null;
  }

  return <ServiceSection {...uxService} />;
};

export default UX;