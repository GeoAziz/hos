import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Award, BookOpen } from "lucide-react";
import Image from "next/image";

export default function DoctorsPage() {

    const doctors = [
        {
            name: "Dr. Evelyn Reed",
            specialty: "Cardiology",
            bio: "Dr. Reed is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is a fellow of the American College of Cardiology.",
            imageUrl: "https://placehold.co/400x400.png",
            publications: ["The New England Journal of Medicine", "Journal of the American College of Cardiology"],
            awards: ["Top Doctor Award 2021", "Patient's Choice Award 2020"]
        },
        {
            name: "Dr. Marcus Chen",
            specialty: "Neurology",
            bio: "Dr. Chen specializes in neurological disorders, including epilepsy and stroke. He is known for his patient-centered approach and innovative treatment methods.",
            imageUrl: "https://placehold.co/400x400.png",
            publications: ["Neurology Today", "The Lancet Neurology"],
            awards: ["Excellence in Teaching Award", "Best Neurologist 2019"]
        },
        {
            name: "Dr. Sofia Garcia",
            specialty: "Pediatrics",
            bio: "With a passion for children's health, Dr. Garcia has dedicated her career to pediatrics. She is a trusted name for parents in the community.",
            imageUrl: "https://placehold.co/400x400.png",
            publications: ["Pediatrics Official Journal", "Journal of Child Health Care"],
            awards: ["Community Service Award", "Favorite Pediatrician 2022"]
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
                <Card key={doctor.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                       <div className="relative h-64 w-full">
                         <Image src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} layout="fill" objectFit="cover" data-ai-hint="doctor portrait" />
                       </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <CardTitle className="text-2xl mb-2">{doctor.name}</CardTitle>
                        <p className="text-primary font-semibold mb-4">{doctor.specialty}</p>
                        <p className="text-muted-foreground mb-6">{doctor.bio}</p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold flex items-center mb-2"><Award className="h-5 w-5 mr-2 text-yellow-500" /> Awards</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {doctor.awards.map(award => <li key={award}>{award}</li>)}
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-semibold flex items-center mb-2"><BookOpen className="h-5 w-5 mr-2 text-blue-500" /> Publications</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {doctor.publications.map(pub => <li key={pub}>{pub}</li>)}
                                </ul>
                            </div>
                        </div>

                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
