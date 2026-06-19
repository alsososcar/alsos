import { env } from "@/lib/env";

export function getMediaImageUrl(id: number): string {
  return `${env.APP_URL_MEDIA}/image/${id}`;
}

export interface ResolvedProjectImage {
  src: string;
  alt: string;
}

export function resolveProjectImages(
  images: { id: number; alt: string }[],
): ResolvedProjectImage[] {
  return images.map((image) => ({
    src: getMediaImageUrl(image.id),
    alt: image.alt,
  }));
}
