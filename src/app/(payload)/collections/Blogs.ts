import { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "The URL slug for this blog post (e.g. 'hope-dies-last')",
      },
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "System Design & Architecture", value: "system_design" },
        { label: "Engineering & DevOps", value: "engineering_devops" },
        { label: "UX & Product Strategy", value: "ux_product" },
        { label: "Case Studies & Success Stories", value: "case_studies" },
        { label: "Emerging Tech & AI", value: "emerging_tech" },
        {
          label: "Performance & Scalability",
          value: "performance_scalability",
        },
      ],
    },
    {
      name: "intro",
      type: "textarea",
      required: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "authorImage",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d, MMMM yyyy",
        },
      },
    },
    {
      name: "readTime",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "meta",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
