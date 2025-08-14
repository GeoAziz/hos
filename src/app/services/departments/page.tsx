
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Brain, Bone, Baby, Syringe, Microscope, Droplets, ShieldCheck, HeartPulse, ShieldHalf, User, Scissors, Apple, Glasses, Ear, Activity } from "lucide-react";
import Link from 'next/link';

const serviceCategories = [
    {
        name: 'Primary Care',
        slug: 'primary-care',
        description: 'Your first point of contact for essential healthcare services.',
        icon: <User className="w-10 h-10 text-primary" />,
        services: [
            { name: "Physiotherapy", icon: <Activity className="w-6 h-6 mr-2" /> },
            { name: "Nutrition", icon: <Apple className="w-6 h-6 mr-2" /> },
            { 
                name: "Dental Care", 
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                        <path d="M9.34 4.25a2.06 2.06 0 0 1 2.05 1.48 1.99 1.99 0 0 1-1.13 2.4c-1 .59-2.27.39-3.12-.5-1.12-1.21-.83-3.21.9-4.1a2.06 2.06 0 0 1 1.3-.28Z"/><path d="m14 13.5 4 4"/><path d="m18 13.5-4 4"/><path d="M12.55 6.06a1.22 1.22 0 0 0-1.88-.33 1.48 1.48 0 0 0-1.1 1.76c.1.66.73 1.07 1.38.91a1.22 1.22 0 0 0 1.12-1.22 1.48 1.48 0 0 0-.52-1.12Z"/><path d="M16.53 10.3c-1.12-1.21-2.22-2.66-3.43-3.54a2.06 2.06 0 0 0-2.83.63c-1.25 1.6-1.14 3.9.27 5.1s3.38 1.21 4.73.11c.54-.44.83-1.1.83-1.77.01-.56-.23-1.13-.57-1.53Z"/><path d="M16.53 10.3c1.12 1.21 2.22 2.66 3.43 3.54a2.06 2.06 0 0 1 .63 2.83c-1.6 1.25-3.9 1.14-5.1-.27s-1.21-3.38-.11-4.73c.44-.54 1.1-.83 1.77-.83.56-.01 1.13.23 1.53.57Z"/>
                    </svg>
                )
            },
            { name: "General Consultation", icon: <Stethoscope className="w-6 h-6 mr-2" /> }
        ]
    },
    {
        name: 'Specialty Clinics',
        slug: 'specialist-clinics',
        description: 'Focused care from our team of experienced medical specialists.',
        icon: <Stethoscope className="w-10 h-10 text-primary" />,
        services: [
            { name: "Pediatrics", icon: <Baby className="w-6 h-6 mr-2" /> },
            { name: "Ophthalmology", icon: <Glasses className="w-6 h-6 mr-2" /> },
            { name: "OB/Gyn", icon: <HeartPulse className="w-6 h-6 mr-2" /> },
            { name: "ENT", icon: <Ear className="w-6 h-6 mr-2" /> },
            { name: "Orthopedics", icon: <Bone className="w-6 h-6 mr-2" /> },
            { name: "General Surgery", icon: <Scissors className="w-6 h-6 mr-2" /> },
        ]
    },
    {
        name: 'Laboratory Services',
        slug: 'laboratory',
        description: 'Accurate diagnostic testing to inform your treatment plan.',
        icon: <Microscope className="w-10 h-10 text-primary" />,
        services: [
            { name: "Biochemistry", icon: <Droplets className="w-6 h-6 mr-2" /> },
            { name: "Immunology", icon: <Syringe className="w-6 h-6 mr-2" /> },
            { name: "Hematology", icon: <Droplets className="w-6 h-6 mr-2" /> },
            { name: "Histopathology", icon: <Microscope className="w-6 h-6 mr-2" /> },
        ]
    },
    {
        name: 'Radiology & Imaging',
        slug: 'radiology',
        description: 'Advanced imaging technology for precise diagnoses.',
        icon: <ShieldHalf className="w-10 h-10 text-primary" />,
        services: [
            { name: "MRI", icon: <Brain className="w-6 h-6 mr-2" /> },
            { name: "Ultrasound", icon: <Baby className="w-6 h-6 mr-2" /> },
            { name: "Digital X-Ray", icon: <Bone className="w-6 h-6 mr-2" /> },
            { name: "CT Scan", icon: <Brain className="w-6 h-6 mr-2" /> },
        ]
    },
    {
        name: 'Critical Care',
        slug: 'critical-care',
        description: '24/7 life-saving care for patients in critical condition.',
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        services: [
            { name: "ICU", icon: <Heart className="w-6 h-6 mr-2" /> },
            { name: "HDU", icon: <Heart className="w-6 h-6 mr-2" /> },
            { name: "Neonatal ICU", icon: <Baby className="w-6 h-6 mr-2" /> },
            { name: "Emergency Care", icon: <Stethoscope className="w-6 h-6 mr-2" /> },
        ]
    },
];

export default function DepartmentsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Our Medical Services</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    A comprehensive range of specialties to meet your health needs.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map(category => (
                    <Card key={category.name} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="items-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                {category.icon}
                            </div>
                            <CardTitle>{category.name}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-2 text-left">
                                {category.services.map(service => (
                                    <li key={service.name} className="flex items-center text-muted-foreground">
                                        {service.icon}
                                        <span>{service.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0">
                           <Button className="w-full" asChild>
                               <Link href={`/services/${category.slug}`}>Learn More</Link>
                           </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
