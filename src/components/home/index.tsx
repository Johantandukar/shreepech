import WorkCarousel from "./work";
import CtaSection from "./cta";
import Hero from "./hero";
import Philosophy from "./philosophy";
import Process from "./process";
import TrustSection from "./trust";
import WhyUs from "./why-us";
import { payload } from "@/lib/utils";
import { RefreshRouteOnSave } from "@/lib/RefreshOnSave";

export default async function Home() {
  const data = await payload.findGlobal({
    slug: "home",
  });

  const works = await payload.find({
    collection: "works",
    limit: 10,
    sort: "-createdAt",
  });

  return (
    <>
      <RefreshRouteOnSave />
      <Hero data={data.hero} />
      <TrustSection data={data.trustSection} />
      <WhyUs data={data.whyUs} />
      <Process data={data.processSection} />
      <WorkCarousel data={data.workSection} works={works.docs} />
      <Philosophy data={data.philosophySection} />
      <CtaSection data={data.ctaSection} />
    </>
  );
}
