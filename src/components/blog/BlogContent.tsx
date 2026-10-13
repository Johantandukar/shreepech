import Image from "next/image";
import { Blog } from "@/types/payload-types";
import getImage from "@/lib/get-image";
import { RenderRichText } from "@/lib/RichText";

interface BlogContentProps {
  post: Blog;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-12">
        <aside className="md:sticky top-24 self-start">
          <div className="flex flex-col items-start gap-4">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image
                src={getImage(post.authorImage)}
                alt={post.author}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-urbanist font-semibold">
              {post.author}
            </h3>
            <div className="flex flex-col gap-2 text-sm font-satoshi text-neutral-600">
              <p>
                Date:{" "}
                <span className="font-medium text-black">{formattedDate}</span>
              </p>
              <p>
                Read:{" "}
                <span className="font-medium text-black">{post.readTime}</span>
              </p>
            </div>
          </div>
        </aside>
        <article className="prose lg:prose-lg font-satoshi text-justify max-w-none">
          <div className="mb-6">
            <p className="font-cabinet text-4xl">{post.intro}</p>
          </div>
          <RenderRichText data={post.content} />
        </article>
      </div>
    </div>
  );
};

export default BlogContent;
