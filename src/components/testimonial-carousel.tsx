
'use client';

import * as React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { patientStories, Story } from '@/lib/stories-data';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {patientStories.map((story: Story) => (
          <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-full flex flex-col">
                <div className="relative h-56 w-full">
                    <Image 
                        src={story.imageUrl}
                        alt={`Photo of ${story.name}`}
                        fill
                        className="object-cover rounded-t-lg"
                    />
                </div>
                <CardContent className="flex flex-col flex-grow items-center justify-center p-6 text-center">
                  <p className="text-muted-foreground italic flex-grow">"{story.quote}"</p>
                  <p className="font-bold text-primary mt-4">{story.name}</p>
                   <Button variant="link" asChild className="mt-2">
                       <Link href={`/patient-stories/${story.slug}`}>Read Full Story</Link>
                   </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
