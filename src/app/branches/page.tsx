import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const branches = [
    {
        name: 'Downtown Clinic',
        address: '123 Health St, Medical City',
        phone: '555-123-4567',
        imageUrl: 'https://placehold.co/600x400.png',
        services: ['Cardiology', 'Neurology', 'Pediatrics']
    },
    {
        name: 'Uptown Medical Center',
        address: '456 Wellness Ave, Medical City',
        phone: '555-987-6543',
        imageUrl: 'https://placehold.co/600x400.png',
        services: ['General Check-up', 'Lab Tests', 'Vaccinations']
    },
    {
        name: 'Seaside Health',
        address: '789 Ocean View, Bayside',
        phone: '555-234-5678',
        imageUrl: 'https://placehold.co/600x400.png',
        services: ['Dermatology', 'Orthopedics']
    },
    {
        name: 'Mountainview Hospital',
        address: '101 Peak Rd, Summit City',
        phone: '555-345-6789',
        imageUrl: 'https://placehold.co/600x400.png',
        services: ['Emergency Care', 'Surgery', 'Radiology']
    }
];

export default function BranchesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Our Branches</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        Find the MediBook location nearest to you.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="w-full max-w-lg flex gap-2">
                        <Input placeholder="Search by city or service..." className="flex-grow" />
                        <Button>Search</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {branches.map(branch => (
                        <Card key={branch.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                             <CardHeader className="p-0">
                                <div className="relative h-64 w-full">
                                    <Image src={branch.imageUrl} alt={branch.name} layout="fill" objectFit="cover" data-ai-hint="hospital building" />
                                </div>
                             </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="text-2xl mb-2">{branch.name}</CardTitle>
                                <p className="flex items-center text-muted-foreground mb-2">
                                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                                    {branch.address}
                                </p>
                                <p className="flex items-center text-muted-foreground mb-4">
                                    <Phone className="h-4 w-4 mr-2 text-primary" />
                                    {branch.phone}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {branch.services.map(service => (
                                        <span key={service} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{service}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button asChild>
                                      <Link href="#appointment">Book Now</Link>
                                    </Button>
                                    <Button variant="outline">View Details</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
