import BlogPostCard from "../../../components/blogs/card/BlogPostCard";
import Link from "next/link";
import { payload } from "@/lib/utils";
import getImage from "@/lib/get-image";
import type { Where } from "payload";

export const revalidate = 3600;

interface BlogsPageProps {
  searchParams: Promise<{ category?: string }>;
}

const Blogs = async (props: BlogsPageProps) => {
  const searchParams = await props.searchParams;
  const selectedCategory = searchParams.category;

  const whereClause: Where | undefined =
    selectedCategory && selectedCategory !== "all"
      ? {
          category: {
            equals: selectedCategory,
          },
        }
      : undefined;

  const blogs = await payload.find({
    collection: "blogs",
    sort: "-date",
    limit: 100,
    where: whereClause,
  });

  const allPosts = await payload.find({
    collection: "blogs",
    limit: 1000,
    select: {
      category: true,
    },
  });

  const uniqueCategories = [
    "All",
    ...Array.from(new Set(allPosts.docs.map((post) => post.category))),
  ];

  return (
    <main className="py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-9xl font-cabinet">Blogs</h1>
          <p className="text-lg md:text-2xl mt-4 font-satoshi">
            Explore our tailored services designed to elevate your brand.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-y border-neutral-200 mb-12">
          <p className="text-xl font-urbanist font-medium uppercase">
            Categories
          </p>
          <div className="flex items-center justify-center space-x-2 font-satoshi text-sm flex-wrap gap-y-2">
            {uniqueCategories.map((category) => (
              <Link
                key={category}
                href={
                  category === "ALL" ? "/blogs" : `/blogs?category=${category}`
                }
                className={`border px-3 py-1.5 rounded-full transition-colors ${
                  selectedCategory === category ||
                  (!selectedCategory && category === "ALL")
                    ? "bg-black text-white border-black"
                    : "border-neutral-300 hover:bg-neutral-100 text-neutral-700"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {blogs.docs.map((post) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-GB",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              },
            );

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

        {blogs.docs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-satoshi text-neutral-500">
              No blog posts found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blogs;
