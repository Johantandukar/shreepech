import type { GlobalConfig } from "payload";
import { revalidatePath } from "next/cache";

export const HomePage: GlobalConfig = {
  slug: "home",
  admin: {},
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/");
      },
    ],
  },
  fields: [
    {
      type: "group",
      name: "hero",
      fields: [
        {
          type: "textarea",
          name: "title",
        },
        {
          type: "textarea",
          name: "description",
        },
        {
          type: "upload",
          name: "video",
          relationTo: "media",
        },
      ],
    },
    {
      type: "group",
      name: "trustSection",
      fields: [
        {
          type: "textarea",
          name: "title",
        },
        {
          type: "array",
          name: "clients",
          fields: [
            {
              type: "upload",
              name: "logo",
              relationTo: "media",
            },
          ],
        },
      ],
    },
    {
      type: "group",
      name: "whyUs",
      fields: [
        {
          type: "textarea",
          name: "title",
        },
        {
          type: "textarea",
          name: "description",
        },
        {
          type: "array",
          name: "features",
          fields: [
            {
              type: "text",
              name: "title",
            },
            {
              type: "textarea",
              name: "description",
            },
            {
              type: "upload",
              name: "image",
              relationTo: "media",
            },
            {
              type: "textarea",
              name: "testimonial",
            },
            {
              type: "text",
              name: "testimonialAuthor",
            },
          ],
        },
      ],
    },
    {
      type: "group",
      name: "processSection",
      fields: [
          {
              type: "text",
              name: "tag",
          },
          {
              type: "textarea",
              name: "title",
          },
          {
              type: "array",
              name: "timeline",
              fields: [
                  {
                      type: "text",
                      name: "days",
                  },
                  {
                      type: "text",
                      name: "title",
                  },
                  {
                      type: "textarea",
                      name: "description",
                  },
                  {
                      type: "upload",
                      name: "image",
                      relationTo: "media",
                  },
              ]
          }
      ]
    },
    {
        type: "group",
        name: "workSection",
        fields: [
            {
                type: "textarea",
                name: "title",
            },
            {
                type: "textarea",
                name: "description",
            },
            {
                type: "array",
                name: "projects",
                fields: [
                    {
                        type: "text",
                        name: "title",
                    },
                    {
                        type: "text",
                        name: "category",
                    },
                    {
                        type: "upload",
                        name: "image",
                        relationTo: "media",
                    },
                ]
            }
        ]
    },
    {
        type: "group",
        name: "philosophySection",
        fields: [
            {
                type: "textarea",
                name: "title",
            },
            {
                type: "textarea",
                name: "quote",
            },
            {
                type: "textarea",
                name: "description1",
            },
            {
                type: "textarea",
                name: "description2",
            },
        ]
    },
    {
        type: "group",
        name: "ctaSection",
        fields: [
            {
                type: "textarea",
                name: "title",
            },
            {
                type: "textarea",
                name: "contactText",
            },
            {
                type: "text",
                name: "contactEmail",
            },
            {
                type: "text",
                name: "buttonText",
            },
        ]
    },
  ],
};