import Image from "next/image";
import { Work, Media } from "@/types/payload-types";
import Link from "next/link";

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const imageUrl =
    (work.mainImage && typeof work.mainImage !== "number") ? (work.mainImage as Media).url : "";

  return (
    <Link
      href={`/works/${work.slug}`}
      className="flex flex-col gap-4 work-card will-change-transform transform-gpu group"
    >
      <div className={`w-[45vw] h-150 relative overflow-hidden`}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={work.title}
            fill
            className="group-hover:scale-110 transition-transform duration-700 object-cover"
          />
        )}
      </div>
      <div>
        <h3 className="text-4xl font-cabinet">{work.title}</h3>
        <p className="text-xl text-neutral-500">{work.category}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
