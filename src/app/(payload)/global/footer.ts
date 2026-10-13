import type { GlobalConfig } from "payload";
import { revalidatePath } from "next/cache";

export const FooterGlobal: GlobalConfig = {
  slug: "footer",
  admin: {
    group: "Globals",
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/", "layout");
      },
    ],
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "columns",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "links",
          type: "array",
          fields: [
            {
              name: "label",
              type: "text",
              required: true,
            },
            {
              name: "url",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "copyright",
      type: "text",
      defaultValue: "© 2026 Shreepech Internationals. All Rights Reserved.",
    },
    {
      name: "socials",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "Twitter", value: "twitter" },
            { label: "Instagram", value: "instagram" },
          ],
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
