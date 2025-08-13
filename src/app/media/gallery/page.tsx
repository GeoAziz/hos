import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const galleryImages = {
    facilities: [
        { src: "https://placehold.co/600x400.png", alt: "Modern hospital lobby", hint: "hospital lobby" },
        { src: "https://placehold.co/600x400.png", alt: "State-of-the-art operating room", hint: "operating room" },
        { src: "https://placehold.co/600x400.png", alt: "Patient recovery room", hint: "hospital room" },
        { src: "https://placehold.co/600x400.png", alt: "Advanced imaging center with MRI machine", hint: "mri machine" },
        { src: "https://placehold.co/600x400.png", alt: "Exterior view of the hospital building", hint: "hospital exterior" },
        { src: "https://placehold.co/600x400.png", alt: "Reception desk", hint: "hospital reception" },
    ],
    staff: [
        { src: "https://placehold.co/600x400.png", alt: "Team of diverse doctors", hint: "doctors team" },
        { src: "https://placehold.co/600x400.png", alt: "Nurses providing patient care", hint: "nurse with patient" },
        { src: "https://placehold.co/600x400.png", alt: "Surgeons in an operating room", hint: "surgeons working" },
        { src: "https://placehold.co/600x400.png", alt: "Friendly administrative staff", hint: "hospital staff group" },
    ],
    events: [
        { src: "https://placehold.co/600x400.png", alt: "Community health fair", hint: "health fair" },
        { src: "https://placehold.co/600x400.png", alt: "Hospital charity run", hint: "charity run" },
        { src: "https://placehold.co/600x400.png", alt: "Medical conference hosted at the hospital", hint: "medical conference" },
    ],
};

export default function GalleryPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Photo Gallery</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    A glimpse into our world of care.
                </p>
            </div>

            <Tabs defaultValue="facilities" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="facilities">Our Facilities</TabsTrigger>
                    <TabsTrigger value="staff">Our Staff</TabsTrigger>
                    <TabsTrigger value="events">Community Events</TabsTrigger>
                </TabsList>
                <TabsContent value="facilities">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.facilities.map((image, index) => (
                            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative aspect-video w-full">
                                    <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" data-ai-hint={image.hint} />
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="staff">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.staff.map((image, index) => (
                             <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative aspect-video w-full">
                                    <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" data-ai-hint={image.hint} />
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="events">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.events.map((image, index) => (
                             <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative aspect-video w-full">
                                    <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" data-ai-hint={image.hint} />
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
