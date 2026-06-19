"use client"

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@alsos/ui/components/carousel"
import { AspectRatio } from "@alsos/ui/components/aspect-ratio"
import type { ProjectImage } from "@/content/projects/types"

interface ProjectGalleryProps {
  images: ProjectImage[]
}

function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) {
    return null
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.src}>
            <AspectRatio ratio={16 / 9} className="overflow-hidden border border-border">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={index === 0}
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
  )
}

export { ProjectGallery }
