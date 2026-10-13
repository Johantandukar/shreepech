import { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";

export const Works: CollectionConfig = {
  slug: "works",
  admin: {
    useAsTitle: "title",
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath("/works");
        revalidatePath(`/works/${doc.slug}`);
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subTitle",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "The URL slug for this work (e.g. 'sleek-branding')",
      },
    },
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "year",
      type: "text",
      required: true,
    },
    {
      name: "client",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
    },
    {
      name: "mainImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "challenge",
      type: "textarea",
      required: true,
    },
    {
      name: "solution",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      admin: {
        description: "Flexible content area for the case study using the Lexical editor.",
      },
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
    },
    {
      name: "stats",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
        },
        {
          name: "value",
          type: "text",
        },
      ],
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
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
