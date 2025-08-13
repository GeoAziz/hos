import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Brain, Bone, Baby, Syringe } from "lucide-react";
import Link from 'next/link';

const departments = [
    { name: 'Cardiology', slug: 'cardiology', description: 'Comprehensive heart care, from diagnostics to advanced surgical procedures.', icon: <Heart className="w-10 h-10 text-primary" /> },
    { name: 'Neurology', slug: 'neurology', description: 'Expert treatment for disorders of the nervous system, including the brain and spinal cord.', icon: <Brain className="w-10 h-10 text-primary" /> },
    { name: 'Orthopedics', slug: 'orthopedics', description: 'Specialized care for bones, joints, ligaments, tendons, and muscles.', icon: <Bone className="w-10 h-10 text-primary" /> },
    { name: 'Pediatrics', slug: 'pediatrics', description: 'Dedicated healthcare for infants, children, and adolescents.', icon: <Baby className="w-10 h-10 text-primary" /> },
    { name: 'General Surgery', slug: 'general-surgery', description: 'A wide range of surgical procedures performed by our expert team.', icon: <Stethoscope className="w-10 h-10 text-primary" /> },
    { name: 'Immunology', slug: 'immunology', description: 'Diagnosis and treatment of allergies and immune system disorders.', icon: <Syringe className="w-10 h-10 text-primary" /> },
];


export default function DepartmentsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Our Medical Departments</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    A wide range of specialties to meet your health needs.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments.map(dept => (
                    <Card key={dept.name} className="flex flex-col text-center">
                        <CardHeader>
                            <div className="flex justify-center mb-4">{dept.icon}</div>
                            <CardTitle>{dept.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{dept.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                           <Button className="w-full" asChild>
                               <Link href={`/services/${dept.slug}`}>Learn More</Link>
                           </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
