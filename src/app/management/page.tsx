
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const managementTeam = [
    {
        name: "Dr. James Wilson",
        role: "Chief Executive Officer",
        bio: "Dr. Wilson brings over 25 years of healthcare leadership experience, guiding MediBook's strategic vision and commitment to patient-first care.",
        imageUrl: "/images/management-james-wilson.jpg",
        dataAiHint: "ceo portrait"
    },
    {
        name: "Maria Rodriguez",
        role: "Chief Operating Officer",
        bio: "Maria is responsible for the daily operations of the hospital, ensuring all departments run smoothly and efficiently to provide the best patient experience.",
        imageUrl: "/images/management-maria-rodriguez.jpg",
        dataAiHint: "coo portrait"
    },
    {
        name: "David Lee",
        role: "Chief Financial Officer",
        bio: "David manages the financial health of MediBook, overseeing budgeting, financial planning, and ensuring sustainable growth for the institution.",
        imageUrl: "/images/management-david-lee.jpg",
        dataAiHint: "cfo portrait"
    },
     {
        name: "Dr. Sarah Chen",
        role: "Chief Medical Officer",
        bio: "As the lead physician, Dr. Chen upholds the highest standards of medical excellence, overseeing all clinical staff and patient care protocols.",
        imageUrl: "/images/management-sarah-chen.jpg",
        dataAiHint: "doctor portrait"
    },
];

export default function ManagementPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Our Leadership</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    The experienced team guiding MediBook forward.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {managementTeam.map(member => (
                    <Card key={member.name} className="text-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="p-0">
                            <div className="relative h-64 w-full">
                                <Image src={member.imageUrl} alt={member.name} fill className="object-cover" data-ai-hint={member.dataAiHint} />
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="text-xl">{member.name}</CardTitle>
                            <p className="text-primary font-semibold mt-1 mb-3">{member.role}</p>
                            <p className="text-sm text-muted-foreground">{member.bio}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
