
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
} from 'lucide-react';
import { AppointmentForm } from '@/components/appointment-form';
import { InquiryForm } from '@/components/inquiry-form';
import Link from 'next/link';
import { ChatBot } from '@/components/chat-bot';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SocialSidebar } from '@/components/social-sidebar';

export default function Home() {
  const services = [
    {
      name: 'Cardiology',
      description: 'Expert heart care and diagnostics.',
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
    },
    {
      name: 'General Check-up',
      description: 'Comprehensive health assessments.',
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Pediatrics',
      description: 'Specialized care for infants and children.',
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Emergency Care',
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
        imageUrl: "https://placehold.co/400x400.png",
    },
    {
        name: "Dr. Marcus Chen",
        specialty: "Neurology",
        imageUrl: "https://placehold.co/400x400.png",
    },
    {
        name: "Dr. Sofia Garcia",
        specialty: "Pediatrics",
        imageUrl: "https://placehold.co/400x400.png",
    },
  ];

  const testimonials = [
    {
      name: 'Sarah L.',
      quote:
        'The care I received was exceptional. The doctors were knowledgeable and the staff was incredibly supportive. I felt safe and well-cared for throughout my treatment.',
    },
    {
      name: 'John D.',
      quote:
        'Booking an appointment was so easy with their online system. I found a slot that worked for me without having to make a single phone call. Highly recommended!',
    },
    {
      name: 'Emily R.',
      quote:
        'The facilities are top-notch and very clean. From the moment I walked in, I was impressed by the professionalism and the modern equipment they use.',
    },
  ];

  return (
    <div>
      <SocialSidebar />
      <Header />
      <div className="min-h-screen">
        <section
          id="hero"
          className="relative w-full h-[85vh] flex items-center justify-center text-white"
        >
          <Image 
              src="https://placehold.co/1600x900.png"
              alt="Hero background image of a modern hospital interior"
              layout="fill"
              objectFit="cover"
              className="z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="container mx-auto px-4 z-20 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                Providing compassionate, comprehensive, and high-quality healthcare you can trust. Welcome to a better healthcare experience.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/#appointment">Book an Appointment</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
          </div>
        </section>

        <section id="why-choose-us" className="py-20 bg-background">
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

        <section id="services" className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Our Core Services</h2>
            <p className="text-muted-foreground mb-12">Comprehensive care for all your needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Card
                  key={service.name}
                  className="bg-card text-card-foreground shadow-md text-center"
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
              ))}
            </div>
            <Button size="lg" variant="outline" className="mt-12" asChild>
                <Link href="/services/departments">View All Services</Link>
              </Button>
          </div>
        </section>

        <section id="specialists" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Meet Our Specialists</h2>
            <p className="text-muted-foreground mb-12">A team of dedicated professionals at your service.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredDoctors.map((doctor) => (
                  <Card key={doctor.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center">
                      <CardHeader className="p-0">
                        <div className="relative h-64 w-full">
                          <Image src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} layout="fill" objectFit="cover" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                          <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                          <p className="text-primary font-semibold mt-1">{doctor.specialty}</p>
                      </CardContent>
                  </Card>
              ))}
            </div>
              <Button size="lg" className="mt-12" asChild>
                <Link href="/doctors">View All Doctors</Link>
              </Button>
          </div>
        </section>

        <section id="appointment" className="py-20 bg-secondary">
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

        <section id="testimonials" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">
              What Our Patients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="bg-card text-card-foreground shadow-lg"
                >
                  <CardContent className="pt-6">
                    <p className="italic text-muted-foreground mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
      <Footer />
    </div>
  );
}
