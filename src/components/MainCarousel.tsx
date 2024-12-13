"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  return (
    <section>
      <Carousel
        plugins={[Fade(), Autoplay({ delay: 5000, stopOnInteraction: false })]}
        opts={{
          containScroll: false,
          align: "center",
          loop: true,
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <h2 className="text-2xl my-3 drop-shadow font-berkshire font-bold text-center">
                  Paket Franchise {index}
                </h2>
                <Image
                  src={`/images/franchise/franchise${index}.jpg`}
                  alt={`carouselImage ${index}`}
                  width={1920}
                  height={1080}
                  className="aspect-video"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
