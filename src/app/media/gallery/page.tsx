
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const galleryImages = {
    facilities: [
        { src: "/images/gallery-lobby.jpg", alt: "Modern hospital lobby", dataAiHint: "hospital lobby" },
        { src: "/images/gallery-operating-room.jpg", alt: "State-of-the-art operating room", dataAiHint: "operating room" },
        { src: "/images/gallery-patient-room.jpg", alt: "Patient recovery room", dataAiHint: "patient room" },
        { src: "/images/mri-machine.jpg", alt: "Advanced imaging center with MRI machine", dataAiHint: "mri machine" },
        { src: "/images/hospital-exterior.jpg", alt: "Exterior view of the hospital building", dataAiHint: "hospital exterior" },
        { src: "/images/reception-desk.jpg", alt: "Reception desk", dataAiHint: "reception desk" },
    ],
    staff: [
        { src: "/images/doctors-team.jpg", alt: "Team of diverse doctors", dataAiHint: "doctors team" },
        { src: "/images/nurses-care.jpg", alt: "Nurses providing patient care", dataAiHint: "nurses care" },
        { src: "/images/surgeons-operating.jpg", alt: "Surgeons in an operating room", dataAiHint: "surgeons operating" },
        { src: "/images/hospital-staff.jpg", alt: "Friendly administrative staff", dataAiHint: "hospital staff" },
    ],
    events: [
        { src: "/images/health-fair.jpg", alt: "Community health fair", dataAiHint: "health fair" },
        { src: "/images/charity-run.jpg", alt: "Hospital charity run", dataAiHint: "charity run" },
        { src: "/images/medical-conference.jpg", alt: "Medical conference hosted at the hospital", dataAiHint: "medical conference" },
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
                                    <Image src={image.src} alt={image.alt} fill className="object-cover" data-ai-hint={image.dataAiHint}/>
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
                                    <Image src={image.src} alt={image.alt} fill className="object-cover" data-ai-hint={image.dataAiHint}/>
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
                                    <Image src={image.src} alt={image.alt} fill className="object-cover" data-ai-hint={image.dataAiHint}/>
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
