import { notFound } from "next/navigation";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogContent from "@/components/blog/BlogContent";
import LatestPosts from "@/components/blog/LatestPosts";
import { payload } from "@/lib/utils";
import { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const blogs = await payload.find({
    collection: "blogs",
    limit: 100,
    select: {
      slug: true,
    },
  });

  return blogs.docs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const blogs = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const blog = blogs.docs[0];

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const ogImage =
    blog.meta?.image && typeof blog.meta.image !== "number"
      ? blog.meta.image.url
      : typeof blog.heroImage !== "number"
        ? blog.heroImage.url
        : "";

  return {
    title: blog.meta?.title || `${blog.title} | Our Blog`,
    description: blog.meta?.description || blog.intro.slice(0, 160),
    openGraph: {
      title: blog.meta?.title || blog.title,
      description: blog.meta?.description || blog.intro.slice(0, 160),
      images: ogImage ? [{ url: ogImage }] : [],
    },
  };
}

export async function SingleBlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const blogs = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const blog = blogs.docs[0];

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-2 mx-auto container max-w-7xl">
      <BlogHeader post={blog} />
      <BlogContent post={blog} />
      <LatestPosts excludeId={blog.id} />
    </div>
  );
}

export default SingleBlogPage;
