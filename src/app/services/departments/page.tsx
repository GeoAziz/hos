
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Brain, Bone, Baby, Syringe, Microscope, Droplets, ShieldCheck, HeartPulse, ShieldHalf, User, Scissors, Apple, Tooth, Glasses, Foot, Ear, Activity } from "lucide-react";
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
            { name: "Dental Care", icon: <Tooth className="w-6 h-6 mr-2" /> },
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
