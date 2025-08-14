
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay";

const slides = [
    {
        title: "Your Health, Our Priority",
        description: "Providing compassionate, comprehensive, and high-quality healthcare you can trust. Welcome to a better healthcare experience.",
        imageUrl: "/images/hero-background.jpg",
        dataAiHint: "modern hospital interior",
        link: "/about",
        linkText: "Learn More"
    },
    {
        title: "A Network of Care Across the Nation",
        description: "With 6 branches across the country, advanced medical care is always within your reach. Find your nearest MediBook facility today.",
        imageUrl: "/images/branch-network-hero.jpg",
        dataAiHint: "map location",
        link: "/branches",
        linkText: "Find a Branch"
    },
    {
        title: "Real Stories, Real Recoveries",
        description: "\"The care I received was exceptional. The doctors were knowledgeable and the staff was incredibly supportive.\" - Sarah L.",
        imageUrl: "/images/patient-story-hero.jpg",
        dataAiHint: "patient recovery",
        link: "/patient-stories",
        linkText: "Read More Stories"
    }
];

export function HeroSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <Carousel 
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="relative w-full h-[85vh] flex items-center justify-center text-white">
                            <Image
                                src={slide.imageUrl}
                                alt={slide.title}
                                fill
                                priority={index === 0}
                                className="object-cover z-0"
                                data-ai-hint={slide.dataAiHint}
                            />
                            <div className="absolute inset-0 bg-black/50 z-10" />
                            <div className="container mx-auto px-4 z-20 text-center">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
                                    {slide.title}
                                <h1>
                                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
                                    {slide.description}
                                </p>
                                <div className="flex gap-4 justify-center animate-fade-in-up">
                                    <Button size="lg" asChild>
                                        <Link href="/#appointment">Book an Appointment</Link>
                                    </Button>
                                    <Button size="lg" variant="secondary" asChild>
                                        <Link href={slide.link}>{slide.linkText}</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex" />
        </Carousel>
    );
}
