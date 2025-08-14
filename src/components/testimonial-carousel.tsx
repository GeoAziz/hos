
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
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {patientStories.map((story: Story) => (
          <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col flex-grow items-center justify-center p-8 text-center">
                   <div className="relative h-24 w-24 mb-4">
                        <Image
                            src={story.imageUrl}
                            alt={`Photo of ${story.name}`}
                            fill
                            className="object-cover rounded-full"
                        />
                   </div>
                  <blockquote className="text-muted-foreground italic flex-grow mb-4">"{story.quote}"</blockquote>
                  <p className="font-bold text-primary mt-2">{story.name}</p>
                   <p className="text-sm text-muted-foreground">{story.category} Patient</p>
                   <Button variant="link" asChild className="mt-4">
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
