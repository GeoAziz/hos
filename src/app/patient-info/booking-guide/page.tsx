import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
    {
        title: "1. Select 'Book Appointment'",
        description: "Click the 'Book Appointment' button from anywhere on our site to open the booking form.",
        image: "https://placehold.co/600x400.png",
        hint: "website screenshot button",
    },
    {
        title: "2. Choose Branch & Department",
        description: "Select your preferred hospital branch and the medical department you wish to visit from the dropdown menus.",
        image: "https://placehold.co/600x400.png",
         hint: "form dropdown menu",
    },
    {
        title: "3. Pick a Date",
        description: "Use the calendar to select a date that works for you. Available slots will be shown.",
        image: "https://placehold.co/600x400.png",
        hint: "calendar interface",
    },
    {
        title: "4. Enter Your Details",
        description: "Fill in your name, contact information, and any additional notes for the doctor.",
        image: "https://placehold.co/600x400.png",
        hint: "patient information form",
    },
    {
        title: "5. Confirm Your Booking",
        description: "Review your appointment details and click 'Confirm Booking'. You'll receive a confirmation via SMS and email shortly.",
        image: "https://placehold.co/600x400.png",
        hint: "confirmation message success",
    },
];

export default function BookingGuidePage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">How to Book an Appointment</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    A simple, step-by-step guide to securing your visit.
                </p>
            </div>

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <Card key={step.title} className="overflow-hidden shadow-lg">
                       <div className="grid md:grid-cols-2 items-center">
                            <div className="p-8 order-2 md:order-1">
                                <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                                <p className="text-muted-foreground mb-6">{step.description}</p>
                                <div className="flex items-center text-green-600">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    <span>Easy and secure process</span>
                                </div>
                            </div>
                            <div className="relative h-64 md:h-full w-full order-1 md:order-2">
                                <Image 
                                    src={step.image} 
                                    alt={step.title} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    data-ai-hint={step.hint}
                                />
                            </div>
                       </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-16">
                <h2 className="text-2xl font-bold">Ready to book?</h2>
                <p className="text-muted-foreground my-2">It only takes a minute.</p>
                <Button size="lg" asChild>
                    <Link href="/#appointment">Book an Appointment Now</Link>
                </Button>
            </div>
        </div>
    );
}
