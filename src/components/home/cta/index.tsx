import Button from "@/components/ui/Button";
import { Home } from "@/types/payload-types";

export default async function CtaSection({
  data,
}: {
  data: Home["ctaSection"];
}) {
  if (!data) return null;
  return (
    <section className="w-full py-[40px~128px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <h2 className="text-[2xl~6xl] leading-[1.1] font-cabinet max-w-4xl">
          {data.title}
        </h2>
        <p className="text-[sm~lg] font-satoshi">
          {data.contactText}{" "}
          <a href={`mailto:${data.contactEmail}`} className="underlin">
            {data.contactEmail}
          </a>
        </p>
        <div className="mt-6">
          <Button variant="primary">{data.buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
