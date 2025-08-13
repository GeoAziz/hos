import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Droplets, Footprints, Ear } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const clinics = [
    {
        name: "Advanced Imaging Center",
        description: "State-of-the-art MRI, CT, and X-ray facilities for precise diagnostics.",
        icon: <Eye className="w-12 h-12 text-primary" />,
        imageUrl: "https://placehold.co/600x400.png",
        hint: "mri machine",
    },
    {
        name: "Dialysis Center",
        description: "Comfortable and modern facilities for patients requiring regular dialysis treatment.",
        icon: <Droplets className="w-12 h-12 text-primary" />,
        imageUrl: "https://placehold.co/600x400.png",
        hint: "dialysis machine",
    },
    {
        name: "Physiotherapy & Rehab",
        description: "Personalized rehabilitation programs to help you recover from injury and surgery.",
        icon: <Footprints className="w-12 h-12 text-primary" />,
        imageUrl: "https://placehold.co/600x400.png",
        hint: "physical therapy",
    },
    {
        name: "Audiology Clinic",
        description: "Comprehensive hearing tests and solutions for all ages, from newborns to adults.",
        icon: <Ear className="w-12 h-12 text-primary" />,
        imageUrl: "https://placehold.co/600x400.png",
        hint: "audiology test",
    },
];

export default function SpecialistClinicsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Specialist Clinics</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Focused care with advanced technology and expert teams.
                </p>
            </div>

            <div className="space-y-12">
                {clinics.map((clinic, index) => (
                    <Card key={clinic.name} className="overflow-hidden shadow-lg">
                       <div className={`grid md:grid-cols-2 items-center`}>
                            <div className={`relative h-80 w-full ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                <Image 
                                    src={clinic.imageUrl} 
                                    alt={clinic.name} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    data-ai-hint={clinic.hint}
                                />
                            </div>
                            <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className="mb-4">{clinic.icon}</div>
                                <h2 className="text-3xl font-bold mb-4">{clinic.name}</h2>
                                <p className="text-muted-foreground mb-6">{clinic.description}</p>
                                <Button asChild>
                                    <Link href="/#appointment">Book a Consultation</Link>
                                </Button>
                            </div>
                       </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
