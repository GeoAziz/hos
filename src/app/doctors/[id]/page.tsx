
import { getDoctorById, getDoctors, Doctor } from '@/lib/firestore-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, GraduationCap, Stethoscope, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

type DoctorProfilePageProps = {
    params: {
        id: string;
    }
}

// Generate static pages for each doctor for better performance and SEO
export async function generateStaticParams() {
  const doctors = await getDoctors();
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

export default async function DoctorProfilePage({ params }: DoctorProfilePageProps) {
    const doctor = await getDoctorById(params.id);

    if (!doctor) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1 space-y-8">
                    <Card className="overflow-hidden shadow-lg">
                        <div className="relative h-80 w-full">
                            <Image
                                src={doctor.imageUrl}
                                alt={`Photo of ${doctor.name}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <CardContent className="p-6 text-center">
                            <CardTitle className="text-3xl">{doctor.name}</CardTitle>
                            <p className="text-primary text-xl font-semibold mt-1">{doctor.specialty}</p>
                            <div className="flex justify-center items-center gap-2 mt-4 text-amber-500">
                                <Star className="h-5 w-5 fill-current" />
                                <span className="text-lg font-bold">{doctor.rating.toFixed(1)}</span>
                                <span className="text-muted-foreground">({doctor.testimonials.length} reviews)</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <GraduationCap className="h-6 w-6 text-primary" />
                                Education & Experience
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                             <p className="font-bold text-lg">{doctor.experience} of experience</p>
                             <ul className="space-y-2 list-disc pl-5">
                                {doctor.education.map((edu, index) => (
                                    <li key={index}>{edu}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                     <Button size="lg" className="w-full" asChild>
                       <Link href="/#appointment">
                         <Calendar className="mr-2" />
                         Book an Appointment
                       </Link>
                    </Button>
                </div>

                <div className="md:col-span-2 space-y-10">
                    <section id="bio">
                        <h2 className="text-3xl font-bold mb-4">About {doctor.name}</h2>
                        <p className="text-lg text-muted-foreground whitespace-pre-wrap">{doctor.bio}</p>
                    </section>

                    <section id="services">
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                           <Stethoscope className="h-8 w-8 text-primary" />
                           Services & Specializations
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {doctor.services.map((service, index) => (
                                <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                                    {service}
                                </Badge>
                            ))}
                        </div>
                    </section>

                    <section id="testimonials">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                           <MessageCircle className="h-8 w-8 text-primary" />
                           Patient Testimonials
                        </h2>
                        <div className="space-y-6">
                            {doctor.testimonials.map((testimonial, index) => (
                                <Card key={index} className="bg-secondary border-l-4 border-primary">
                                    <CardContent className="p-6">
                                        <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                                        <p className="font-bold text-right text-primary">- {testimonial.name}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
