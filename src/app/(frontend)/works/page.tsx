import WorksHero from "@/components/works/WorksHero";
import WorksProcess from "@/components/works/WorksProcess";
import WorksTestimonials from "@/components/works/WorksTestimonials";
import WorksCtaSection from "@/components/works/WorksCtaSection";
import { payload } from "@/lib/utils";

const WorksPage = async () => {
  const [works, testimonials] = await Promise.all([
    payload.find({
      collection: "works",
      sort: "-year",
      limit: 100,
    }),
    payload.find({
      collection: "testimonials",
      limit: 100,
    }),
  ]);

  return (
    <div className="w-full min-h-screen">
      <WorksHero works={works.docs} />
      <WorksProcess />
      <WorksTestimonials testimonials={testimonials.docs} />
      <WorksCtaSection />
    </div>
  );
};

export default WorksPage;
