import type { GlobalConfig } from "payload";
import { revalidatePath } from "next/cache";

export const NavbarGlobal: GlobalConfig = {
  slug: "navbar",
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
      name: "links",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "contact",
      type: "group",
      fields: [
        {
          name: "email",
          type: "text",
        },
        {
          name: "phone",
          type: "text",
        },
      ],
    },
    {
      name: "socials",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
