import Button from "@/components/ui/Button";
import AnimatedText from "../ui/AnimatedText";

const WorksCtaSection = () => {
  return (
    <section className="w-full overflow-hidden relative">
      <div className="container mx-auto px-6 py-20 text-center flex flex-col items-center gap-12 relative z-10">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-9xl font-cabinet">
            Let&apos;s build something legendary.
          </h2>
        </div>

        <AnimatedText className="text-lg md:text-2xl font-satoshi">
          We&apos;re currently accepting new projects and would love to hear
          about your vision.
        </AnimatedText>

        <div>
          <Button variant="primary">Start a Conversation</Button>
        </div>
      </div>
    </section>
  );
};

export default WorksCtaSection;
