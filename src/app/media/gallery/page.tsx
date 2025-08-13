import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const galleryImages = {
    facilities: [
        { src: "https://source.unsplash.com/600x400/?hospital,lobby", alt: "Modern hospital lobby", hint: "hospital lobby" },
        { src: "https://source.unsplash.com/600x400/?operating,room,surgery", alt: "State-of-the-art operating room", hint: "operating room" },
        { src: "https://source.unsplash.com/600x400/?hospital,room,patient", alt: "Patient recovery room", hint: "hospital room" },
        { src: "https://source.unsplash.com/600x400/?mri,machine,medical", alt: "Advanced imaging center with MRI machine", hint: "mri machine" },
        { src: "https://source.unsplash.com/600x400/?hospital,exterior,modern", alt: "Exterior view of the hospital building", hint: "hospital exterior" },
        { src: "https://source.unsplash.com/600x400/?hospital,reception", alt: "Reception desk", hint: "hospital reception" },
    ],
    staff: [
        { src: "https://source.unsplash.com/600x400/?doctors,team,group", alt: "Team of diverse doctors", hint: "doctors team" },
        { src: "https://source.unsplash.com/600x400/?nurse,patient,care", alt: "Nurses providing patient care", hint: "nurse with patient" },
        { src: "https://source.unsplash.com/600x400/?surgeons,operating,room", alt: "Surgeons in an operating room", hint: "surgeons working" },
        { src: "https://source.unsplash.com/600x400/?hospital,staff,group,photo", alt: "Friendly administrative staff", hint: "hospital staff group" },
    ],
    events: [
        { src: "https://source.unsplash.com/600x400/?community,health,fair", alt: "Community health fair", hint: "health fair" },
        { src: "https://source.unsplash.com/600x400/?charity,run,marathon", alt: "Hospital charity run", hint: "charity run" },
        { src: "https://source.unsplash.com/600x400/?medical,conference,audience", alt: "Medical conference hosted at the hospital", hint: "medical conference" },
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
