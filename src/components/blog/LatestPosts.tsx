import Link from "next/link";
import BlogPostCard from "../blogs/card/BlogPostCard";
import { payload } from "@/lib/utils";
import getImage from "@/lib/get-image";

interface LatestPostsProps {
  excludeId?: number;
}

const LatestPosts = async ({ excludeId }: LatestPostsProps) => {
  const blogs = await payload.find({
    collection: "blogs",
    sort: "-date",
    limit: 3,
    where: {
      id: {
        not_equals: excludeId,
      },
    },
  });

  return (
    <div className="py-16 px-8 container mx-auto">
      <div>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cabinet uppercase">
            Latest Posts
          </h2>
          <Link
            href="/blogs"
            className="text-sm font-satoshi uppercase tracking-wider flex items-center gap-2 group"
          >
            See All
            <span className="transform transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {blogs.docs.map((post) => {
             const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
             });

             const cardData = {
                date: formattedDate,
                category: post.category,
                image: getImage(post.heroImage),
                title: post.title,
                description: post.intro,
                author: post.author,
                duration: post.readTime,
                slug: post.slug,
             };

             return (
               <Link href={`/blog/${post.slug}`} key={post.slug}>
                 <BlogPostCard blogPost={cardData} />
               </Link>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
