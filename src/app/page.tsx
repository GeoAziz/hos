
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  HeartPulse,
  Stethoscope,
  Users,
  ShieldCheck,
  Phone,
  MapPin,
  Medal,
  HeartHandshake,
  BedDouble,
} from 'lucide-react';
import { AppointmentForm } from '@/components/appointment-form';
import { InquiryForm } from '@/components/inquiry-form';
import Link from 'next/link';
import { ChatBot } from '@/components/chat-bot';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { HeroSlider } from '@/components/hero-slider';
import { AnimatedCounter } from '@/components/animated-counter';


export default function Home() {
  const services = [
    {
      name: 'Cardiology',
      slug: 'cardiology',
      description: 'Expert heart care and diagnostics.',
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Neurology',
      slug: 'neurology',
      description: 'Specialized care for the nervous system.',
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Pediatrics',
      slug: 'pediatrics',
      description: 'Specialized care for infants and children.',
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Emergency Care',
      slug: 'emergency',
      description: '24/7 immediate medical attention.',
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
  ];

  const whyChooseUs = [
      {
          title: "Certified Specialists",
          description: "Our team consists of board-certified doctors with extensive experience.",
          icon: <Medal className="h-10 w-10 text-primary" />
      },
      {
          title: "Modern Facilities",
          description: "We use state-of-the-art technology for accurate diagnosis and treatment.",
          icon: <HeartPulse className="h-10 w-10 text-primary" />
      },
      {
          title: "Patient-First Approach",
          description: "Your comfort and well-being are our top priorities at every step.",
          icon: <Users className="h-10 w-10 text-primary" />
      }
  ];

  const featuredDoctors = [
  {
    name: "Dr. Evelyn Reed",
    specialty: "Cardiology",
    imageUrl: "/images/doctor-evelyn-reed.jpg",
    id: "dr-evelyn-reed-cardiology",
    dataAiHint: 'doctor portrait'
  },
  {
    name: "Dr. Marcus Chen",
    specialty: "Neurology",
    imageUrl: "/images/doctor-marcus-chen.jpg",
    id: "dr-marcus-chen-neurology",
    dataAiHint: 'doctor portrait'
  },
  {
    name: "Dr. Sofia Garcia",
    specialty: "Pediatrics",
    imageUrl: "/images/doctor-sofia-garcia.jpg",
    id: "dr-sofia-garcia-pediatrics",
    dataAiHint: 'doctor portrait'
  },
  ];

  const stats = [
    { value: 12000, label: "Patients Served", icon: <Users className="h-12 w-12 text-primary" /> },
    { value: 75, label: "Qualified Doctors", icon: <Stethoscope className="h-12 w-12 text-primary" /> },
    { value: 250, label: "Hospital Beds", icon: <BedDouble className="h-12 w-12 text-primary" /> },
    { value: 3000, label: "Surgeries Performed", icon: <HeartPulse className="h-12 w-12 text-primary" /> },
  ];

  return (
    <div>
      <div className="min-h-screen">
        <HeroSlider />
        
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map(stat => (
                        <div key={stat.label}>
                            <div className="flex justify-center mb-2">{stat.icon}</div>
                            <AnimatedCounter to={stat.value} />
                            <p className="text-muted-foreground font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="why-choose-us" className="py-20 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-2">Why Choose MediBook?</h2>
                <p className="text-muted-foreground mb-12">Your health is in the best hands.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyChooseUs.map(feature => (
                        <Card key={feature.title} className="bg-card text-card-foreground shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <CardHeader>
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Our Core Services</h2>
            <p className="text-muted-foreground mb-12">Comprehensive care for all your needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Link href={`/services/${service.slug}`} key={service.name} className="block">
                  <Card
                    className="bg-card text-card-foreground shadow-md text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {service.icon}
                      </div>
                      <CardTitle>{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <Button size="lg" variant="outline" className="mt-12" asChild>
                <Link href="/services/departments">View All Services</Link>
              </Button>
          </div>
        </section>

        <section id="specialists" className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Meet Our Specialists</h2>
            <p className="text-muted-foreground mb-12">A team of dedicated professionals at your service.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredDoctors.map((doctor) => (
                  <Card key={doctor.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center">
                      <Link href={`/doctors/${doctor.id}`} className='flex flex-col flex-grow'>
                        <CardHeader className="p-0">
                          <div className="relative h-64 w-full">
                            <Image src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} fill className="object-cover" />
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                            <p className="text-primary font-semibold mt-1">{doctor.specialty}</p>
                        </CardContent>
                      </Link>
                  </Card>
              ))}
            </div>
              <Button size="lg" className="mt-12" asChild>
                <Link href="/doctors">View All Doctors</Link>
              </Button>
          </div>
        </section>

        <section id="appointment" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto shadow-xl border-t-4 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">
                  Book an Appointment
                </CardTitle>
                <CardDescription>
                  Fill out the form below to schedule your visit. It's quick and easy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AppointmentForm />
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <HeartHandshake className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h2 className="text-3xl font-bold mb-4">The MediBook Foundation</h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                        We believe quality healthcare is a right, not a privilege. The MediBook Foundation is our commitment to the community, running free medical camps, health awareness campaigns, and providing subsidized care for those in need.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/about">Learn More & Get Involved</Link>
                    </Button>
                </div>
            </div>
        </section>

        <section id="testimonials" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">What Our Patients Say</h2>
                    <p className="text-muted-foreground mt-2">Real stories from the people we've cared for.</p>
                </div>
                <TestimonialCarousel />
            </div>
        </section>

        <section id="contact" className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our AI assistant will analyze and route your inquiry.
            </p>
            <InquiryForm />
          </div>
        </section>
        <ChatBot />
      </div>
    </div>
  );
}
