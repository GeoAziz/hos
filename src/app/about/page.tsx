
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Building, Heart, Users, Target, Eye, Handshake, Calendar, HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const timelineEvents = [
    { year: "2017", title: "MediBook Founded", description: "Our journey began with a single outpatient clinic in the capital city, driven by a mission to provide accessible healthcare." },
    { year: "2019", title: "First Two Branches", description: "Expanded our network by opening fully-equipped branches in Bungoma and Migori." },
    { year: "2021", title: "Launch of Specialist Clinics", description: "Introduced advanced services including dialysis and critical care units in our new Kikuyu and Meru locations." },
    { year: "2023", title: "5th and 6th Branches", description: "Opened state-of-the-art facilities in Mlolongo and Eldoret, expanding our reach further." },
    { year: "2024", title: "MediBook Foundation", description: "Formalized our commitment to community health by launching the MediBook Foundation." }
];

const coreValues = [
    { title: "Compassion", icon: <Heart className="h-8 w-8 text-primary" />, description: "We provide care with empathy, respect, and dignity for all." },
    { title: "Excellence", icon: <Award className="h-8 w-8 text-primary" />, description: "We are committed to the highest standards of medical practice and patient safety." },
    { title: "Teamwork", icon: <Users className="h-8 w-8 text-primary" />, description: "We collaborate effectively to deliver the best possible outcomes for our patients." },
    { title: "Integrity", icon: <Handshake className="h-8 w-8 text-primary" />, description: "We adhere to the highest ethical principles and transparency." },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/hospital-exterior.jpg"
          alt="MediBook Hospital Building"
          fill
          className="object-cover opacity-20"
          data-ai-hint="hospital building"
        />
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-5xl font-bold">About MediBook</h1>
          <p className="text-xl mt-4 text-muted-foreground">
            A legacy of care, a future of innovation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our History & Mission</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2017, MediBook was established with a simple yet profound mission: to provide compassionate, accessible, high-quality, and cost-effective healthcare to the communities we serve. We believe in promoting health, educating healthcare professionals, and participating in clinical research to advance medical care.
              </p>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading healthcare provider in the region, recognized for our commitment to patient-centered care, clinical excellence, and innovative health solutions. We aspire to create a healthier future for all our communities.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/doctors-team.jpg"
                alt="Diverse team of doctors"
                fill
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint="doctors team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Our Core Values</h2>
                <p className="text-muted-foreground mt-2">The principles that guide every decision we make.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map(value => (
                    <Card key={value.title} className="text-center p-6">
                        <div className="flex justify-center mb-4">{value.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Our Journey</h2>
                <p className="text-muted-foreground mt-2">A timeline of our expansion and milestones.</p>
            </div>
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>

                {timelineEvents.map((event, index) => (
                    <div key={event.year} className="relative mb-12 md:mb-0">
                        <div className="md:flex items-center">
                            {/* Content Block */}
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}>
                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle>{event.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{event.description}</p>
                                    </CardContent>
                                </Card>
                            </div>

                             {/* Year and Dot */}
                            <div className={`md:w-1/2 flex justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                                        {event.year}
                                    </div>
                                    <div className="absolute h-4 w-4 bg-primary rounded-full z-0 hidden md:block"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                  <HeartHandshake className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h2 className="text-3xl font-bold mb-4">The MediBook Foundation</h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                      We believe quality healthcare is a right, not a privilege. The MediBook Foundation is our commitment to the community, running free medical camps, health awareness campaigns, and providing subsidized care for those in need.
                  </p>
                  <Button size="lg" asChild>
                      <Link href="/foundation">Learn More & Get Involved</Link>
                  </Button>
              </div>
          </div>
      </section>

    </div>
  );
}
