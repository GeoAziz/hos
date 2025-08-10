import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

export default function DoctorsPage() {

    const doctors = [
        {
            name: "Dr. Evelyn Reed",
            specialty: "Cardiology",
            experience: "15+ Years",
            bio: "Dr. Reed is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is a fellow of the American College of Cardiology.",
            imageUrl: "https://placehold.co/400x400.png",
        },
        {
            name: "Dr. Marcus Chen",
            specialty: "Neurology",
            experience: "12+ Years",
            bio: "Dr. Chen specializes in neurological disorders, including epilepsy and stroke. He is known for his patient-centered approach and innovative treatment methods.",
            imageUrl: "https://placehold.co/400x400.png",
        },
        {
            name: "Dr. Sofia Garcia",
            specialty: "Pediatrics",
            experience: "10+ Years",
            bio: "With a passion for children's health, Dr. Garcia has dedicated her career to pediatrics. She is a trusted name for parents in the community.",
            imageUrl: "https://placehold.co/400x400.png",
        },
    ];


  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Meet Our Doctors</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Our team of dedicated and experienced professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map(doctor => (
                <Card key={doctor.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <CardHeader className="p-0">
                       <div className="relative h-64 w-full">
                         <Image src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} layout="fill" objectFit="cover" data-ai-hint="doctor portrait" />
                       </div>
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <CardTitle className="text-2xl mb-2">{doctor.name}</CardTitle>
                        <p className="text-primary font-semibold mb-2">{doctor.specialty}</p>
                        <p className="text-sm text-muted-foreground mb-4">{doctor.experience} of experience</p>
                        <p className="text-muted-foreground mb-6 flex-grow">{doctor.bio}</p>
                        <Button className="w-full mt-auto" asChild>
                            <Link href="#appointment">Book with Dr. {doctor.name.split(' ').pop()}</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
