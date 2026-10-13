import { type Media } from "@/types/payload-types";

export default function getImage(
  img: number | Media | null | undefined,
): string {
  if (img && typeof img !== "number" && img.url) {
    return img.url;
  }
  return "/images/hero_image.png";
}

export function getAltText(img: number | Media | null | undefined): string {
  if (img && typeof img !== "number" && img.url) {
    return img.alt;
  }
  return "/images/hero_image.png";
}
