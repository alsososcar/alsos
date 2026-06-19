"use client";

import type { ResolvedProjectImage } from "@/lib/media";
import { AspectRatio } from "@alsos/ui/components/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@alsos/ui/components/carousel";

interface ProjectGalleryProps {
  images: ResolvedProjectImage[];
}

function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.src}>
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden border border-border"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </AspectRatio>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              {image.alt}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 ? (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      ) : null}
    </Carousel>
  );
}

export { ProjectGallery };
