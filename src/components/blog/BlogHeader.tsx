import Image from "next/image";
import { Blog } from "@/types/payload-types";
import getImage from "@/lib/get-image";

interface BlogHeaderProps {
  post: Blog;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex text-center">
          <h1 className="text-5xl md:text-7xl font-cabinet">{post.title}</h1>
        </div>
        <div className="mt-12 w-full h-[60vh] relative">
          <Image
            src={getImage(post.heroImage)}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
          <span className="absolute top-4 right-4 border border-neutral-300 px-2 py-1 rounded-full text-xs uppercase bg-white/80 backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex items-center gap-8 text-sm font-satoshi">
            <span>
              Author:
              <span className="ml-2 font-medium">{post.author}</span>
            </span>
            <span>
              Date:
              <span className="ml-2 font-medium">{formattedDate}</span>
            </span>
            <span>
              Read:
              <span className="ml-2 font-medium">{post.readTime}</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
