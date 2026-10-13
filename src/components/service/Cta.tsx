import Button from "@/components/ui/Button";
import Link from "next/link";
import AnimatedText from "../ui/AnimatedText";

export default function Cta() {
  return (
    <section className="w-full py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <h2 className="text-5xl md:text-7xl font-cabinet max-w-4xl leading-tight">
          Ready to Start Your Project?
        </h2>
        <AnimatedText className="text-lg font-satoshi max-w-2xl">
          Let&apos;s collaborate to create a stunning and effective online
          presence for your brand. We&apos;re excited to learn about your ideas
          and help you turn them into a reality.
        </AnimatedText>
        <div className="mt-6">
          <Link href="/contact">
            <Button variant="primary">Lets Talk</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
