
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const newsItems = [
    {
        title: "MediBook Opens New Advanced Imaging Center",
        date: "July 25, 2024",
        excerpt: "We are thrilled to announce the opening of our new Advanced Imaging Center, featuring the latest in MRI and CT scan technology to provide faster, more accurate diagnoses.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "mri machine"
    },
    {
        title: "Annual Charity Marathon Raises Record Funds for Children's Wing",
        date: "July 20, 2024",
        excerpt: "This year's MediBook Charity Marathon was a massive success, raising over $100,000 to support our pediatric care services and facilities. A huge thank you to all participants and sponsors!",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "charity marathon"
    },
    {
        title: "Dr. Evelyn Reed Named 'Cardiologist of the Year'",
        date: "July 15, 2024",
        excerpt: "Our very own Dr. Evelyn Reed has been awarded the prestigious 'Cardiologist of the Year' award for her groundbreaking research and dedication to patient care.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "doctor award"
    },
     {
        title: "Free Community Health Fair - August 10th",
        date: "July 10, 2024",
        excerpt: "Join us on August 10th for our annual Community Health Fair. We'll be offering free health screenings, wellness workshops, and fun activities for the whole family.",
        imageUrl: "https://placehold.co/600x400.png",
        dataAiHint: "health fair"
    },
];

export default function NewsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">News & Events</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Stay up-to-date with the latest from MediBook.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems.map(item => (
                    <Card key={item.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="p-0">
                             <div className="relative h-64 w-full">
                                <Image src={item.imageUrl} alt={item.title} fill className="object-cover" data-ai-hint={item.dataAiHint}/>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                            <CardDescription>{item.date}</CardDescription>
                            <CardTitle className="text-2xl mt-2 mb-4">{item.title}</CardTitle>
                            <p className="text-muted-foreground">{item.excerpt}</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button variant="outline">
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button size="lg">Load More</Button>
            </div>
        </div>
    );
}
