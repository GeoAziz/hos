import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Dummy data for branches
const branches = [
    { name: 'Downtown Clinic', address: '123 Health St, Medical City', position: { lat: 34.0522, lng: -118.2437 } },
    { name: 'Uptown Medical Center', address: '456 Wellness Ave, Medical City', position: { lat: 34.0622, lng: -118.2537 } },
    { name: 'Seaside Health', address: '789 Ocean View, Bayside', position: { lat: 33.9522, lng: -118.3437 } },
    { name: 'Mountainview Hospital', address: '101 Peak Rd, Summit City', position: { lat: 34.1522, lng: -118.1437 } },
];


export default function BranchMapPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Find a Branch Near You</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Use the interactive map to locate our branches.
                </p>
            </div>
            
            <Card className="shadow-lg">
                <CardContent className="p-0">
                    {/* 
                      This is a placeholder for a real map component (e.g., Google Maps, Leaflet).
                      For this prototype, we are using a static image.
                    */}
                    <div className="relative w-full h-[60vh] bg-secondary">
                        <Image 
                            src="https://source.unsplash.com/1200x800/?city,map"
                            layout="fill"
                            objectFit="cover"
                            alt="Map of hospital branches"
                            data-ai-hint="city map"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <p className="text-lg bg-black/50 text-white p-4 rounded-md">Interactive Map Placeholder</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-8 text-center">All Branch Locations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {branches.map(branch => (
                        <Card key={branch.name}>
                            <CardHeader>
                                <CardTitle>{branch.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{branch.address}</p>
                                <div className="mt-4 flex gap-2">
                                    <Button>Book Now</Button>
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
