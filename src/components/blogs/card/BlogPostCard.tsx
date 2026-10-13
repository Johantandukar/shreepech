import Image from "next/image";

interface BlogPostCardProps {
  blogPost: {
    date: string;
    category:
      | "system_design"
      | "engineering_devops"
      | "ux_product"
      | "case_studies"
      | "emerging_tech"
      | "performance_scalability"
      | null
      | undefined;
    image: string;
    title: string;
    description: string;
    author: string;
    duration: string;
    slug: string;
  };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ blogPost }) => {
  return (
    <div className="flex flex-col gap-4 p-4 border border-neutral-200 h-full transition-shadow hover:shadow-lg">
      <div className="flex justify-between items-center text-sm font-satoshi text-neutral-500">
        <span>{blogPost.date}</span>
        <span className="border border-neutral-300 px-2 py-0.5 rounded-full text-xs uppercase text-neutral-600">
          {blogPost.category}
        </span>
      </div>
      <div className="w-full aspect-video relative overflow-hidden">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-xl font-urbanist font-semibold text-neutral-800">
        {blogPost.title}
      </h3>
      <p className="text-sm font-satoshi text-neutral-600 grow">
        {blogPost.description}
      </p>
      <div className="flex justify-between items-center text-xs font-satoshi text-neutral-500 pt-2 border-t border-neutral-100">
        <span>By {blogPost.author}</span>
        <span>{blogPost.duration} Read</span>
      </div>
    </div>
  );
};

export default BlogPostCard;
