import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

const videos = [
    {
        title: "A Virtual Tour of MediBook Hospital",
        duration: "5:42",
        thumbnailUrl: "https://source.unsplash.com/600x400/?hospital,hallway,modern",
        hint: "hospital hallway"
    },
    {
        title: "Patient Testimonial: Sarah's Recovery Journey",
        duration: "3:15",
        thumbnailUrl: "https://source.unsplash.com/600x400/?patient,smiling,happy",
        hint: "patient smiling"
    },
    {
        title: "Meet Our Cardiology Team",
        duration: "8:30",
        thumbnailUrl: "https://source.unsplash.com/600x400/?doctors,team,discussion",
        hint: "doctors team"
    },
    {
        title: "Understanding Minimally Invasive Surgery",
        duration: "10:05",
        thumbnailUrl: "https://source.unsplash.com/600x400/?surgery,operating,room",
        hint: "surgery in progress"
    },
    {
        title: "A Day in the Life of a MediBook Nurse",
        duration: "6:50",
        thumbnailUrl: "https://source.unsplash.com/600x400/?nurse,working,hospital",
        hint: "nurse at work"
    },
     {
        title: "The Importance of Physical Therapy",
        duration: "4:20",
        thumbnailUrl: "https://source.unsplash.com/600x400/?physical,therapy,rehab",
        hint: "physical therapy session"
    },
];

export default function VideoGalleryPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Video Gallery</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Watch and learn more about our services and stories.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map(video => (
                    <Card key={video.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                        <CardHeader className="p-0 relative">
                            <div className="relative h-64 w-full">
                                <Image src={video.thumbnailUrl} alt={video.title} layout="fill" objectFit="cover" data-ai-hint={video.hint} />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <PlayCircle className="h-16 w-16 text-white" />
                                </div>
                                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {video.duration}
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="text-xl">{video.title}</CardTitle>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
