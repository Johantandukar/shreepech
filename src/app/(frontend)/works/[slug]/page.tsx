import { notFound } from "next/navigation";
import WorkDetailHero from "@/components/works/WorkDetailHero";
import WorkDetailContent from "@/components/works/WorkDetailContent";
import WorksCtaSection from "@/components/works/WorksCtaSection";
import { payload } from "@/lib/utils";
import { Metadata } from "next";
import { Media } from "@/types/payload-types";

// This function tells Next.js which paths to pre-render
export async function generateStaticParams() {
  const works = await payload.find({
    collection: "works",
    limit: 100,
    select: {
      slug: true,
    },
  });

  return works.docs.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const works = await payload.find({
    collection: "works",
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const work = works.docs[0];

  if (!work) {
    return {
      title: "Work Not Found",
    };
  }

  const ogImage =
    work.meta?.image && typeof work.meta.image !== "number"
      ? work.meta.image.url
      : work.mainImage && typeof work.mainImage !== "number"
        ? work.mainImage.url
        : "";

  return {
    title: work.meta?.title || `${work.title} | Our Works`,
    description: work.meta?.description || work.description.slice(0, 160),
    openGraph: {
      title: work.meta?.title || work.title,
      description: work.meta?.description || work.description.slice(0, 160),
      images: ogImage ? [{ url: ogImage }] : [],
    },
  };
}

export default async function WorkPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  const works = await payload.find({
    collection: "works",
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const work = works.docs[0];

  if (!work) {
    notFound();
  }

  // Fetch all works for navigation (next project)
  const allWorks = await payload.find({
    collection: "works",
    sort: "createdAt",
    limit: 100,
  });

  return (
    <div className="bg-white">
      <WorkDetailHero work={work} />
      
      <WorkDetailContent work={work} allWorks={allWorks.docs} />

      <div className="py-24 bg-white">
         <WorksCtaSection />
      </div>
    </div>
  );
}
