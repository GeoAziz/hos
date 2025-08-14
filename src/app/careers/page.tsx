
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock } from "lucide-react";

const jobListings = [
    {
        title: "Registered Nurse (RN) - Cardiology",
        location: "Downtown Clinic",
        type: "Full-time",
        description: "Join our dedicated cardiology team. Responsible for patient care, monitoring, and administering medications. Requires a valid RN license and 2+ years of experience.",
    },
    {
        title: "Medical Receptionist",
        location: "Uptown Medical Center",
        type: "Part-time",
        description: "Be the first point of contact for our patients. Duties include scheduling appointments, managing records, and handling inquiries. Excellent communication skills required.",
    },
    {
        title: "Lab Technician",
        location: "Seaside Health",
        type: "Full-time",
        description: "Perform a variety of laboratory tests to assist in the diagnosis and treatment of diseases. Must have a degree in Medical Technology or a related field.",
    },
     {
        title: "Hospital Administrator",
        location: "Headquarters",
        type: "Full-time",
        description: "Oversee daily operations, manage budgets, and ensure compliance with healthcare regulations. Master's in Healthcare Administration and 5+ years of leadership experience.",
    }
];

export default function CareersPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Join Our Team</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Help us build a healthier future. Explore our open positions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobListings.map(job => (
                    <Card key={job.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription className="pt-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-primary" /> {job.location}
                                </div>
                                 <div className="flex items-center gap-2 text-sm mt-1">
                                    <Briefcase className="h-4 w-4 text-primary" /> {job.type}
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{job.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <div className="text-center mt-16">
                 <h2 className="text-2xl font-bold">Don't see a fit?</h2>
                 <p className="text-muted-foreground mt-2 mb-4">We are always looking for talented individuals. Contact us at careers@medibook.com.</p>
            </div>
        </div>
    );
}
