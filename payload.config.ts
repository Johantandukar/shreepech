import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { s3Storage } from "@payloadcms/storage-s3";
import { Users } from "./src/app/(payload)/collections/Users";
import { Media } from "./src/app/(payload)/collections/Media";
import { Works } from "./src/app/(payload)/collections/Works";
import { Testimonials } from "./src/app/(payload)/collections/Testimonials";
import { Blogs } from "./src/app/(payload)/collections/Blogs";
import { HomePage } from "@/app/(payload)/global/home";
import { NavbarGlobal } from "@/app/(payload)/global/navbar";
import { FooterGlobal } from "@/app/(payload)/global/footer";
import { Blog, Work } from "@/types/payload-types";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ collectionConfig, data }) => {
        const base = process.env.NEXT_PUBLIC_URL ?? "";
        const slug = collectionConfig?.slug;

        if (!slug) return base;

        switch (slug) {
          case "works": {
            const doc = data as Work;
            return `${base}/works/${doc.slug}`;
          }

          case "testimonials": {
            return `${base}/works`;
          }

          case "blogs": {
            const doc = data as Blog;
            return `${base}/blog/${doc.slug}`;
          }

          default:
            return base;
        }
      },
      globals: ["home", "navbar", "footer"],
      collections: ["works", "testimonials", "blogs"],
    },
  },
  collections: [Users, Media, Works, Testimonials, Blogs],
  globals: [HomePage, NavbarGlobal, FooterGlobal],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "src/types/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: "media",
        },
      },
      bucket: process.env.BUCKET_NAME!,
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.BUCKET_ACCESS_KEY_ID!,
          secretAccessKey: process.env.HIDDEN_KEY!,
        },
        region: process.env.BUCKET_REGION,
        endpoint: process.env.BUCKET_ENDPOINT,
      },
    }),
  ],
});
