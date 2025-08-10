import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {
  HeartPulse,
  Stethoscope,
  Syringe,
  Microscope,
  Phone,
  MapPin,
  Mail,
  User,
  Calendar,
} from 'lucide-react';
import {AppointmentForm} from '@/components/appointment-form';

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
      name: 'Vaccinations',
      description: 'Preventive immunization services.',
      icon: <Syringe className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Lab Tests',
      description: 'Accurate and fast diagnostic testing.',
      icon: <Microscope className="h-10 w-10 text-primary" />,
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

  const branches = [
    {
      name: 'Downtown Clinic',
      address: '123 Health St, Medical City',
      phone: '555-123-4567',
    },
    {
      name: 'Uptown Medical Center',
      address: '456 Wellness Ave, Medical City',
      phone: '555-987-6543',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          id="hero"
          className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
        >
          <Image
            src="https://placehold.co/1600x900.png"
            alt="Hospital building"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="hospital building"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Providing compassionate and quality healthcare you can trust.
            </p>
            <Button size="lg" asChild>
              <a href="#appointment">Book an Appointment</a>
            </Button>
          </div>
        </section>

        <section id="services" className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Card
                  key={service.name}
                  className="bg-card text-card-foreground shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="appointment" className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">
                  Book an Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AppointmentForm />
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-secondary">
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
                    <p className="font-bold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="branches" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Our Branches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {branches.map((branch) => (
                <Card
                  key={branch.name}
                  className="bg-card text-card-foreground shadow-lg"
                >
                  <CardHeader>
                    <CardTitle>{branch.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="flex items-center justify-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      {branch.address}
                    </p>
                    <p className="flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2 text-primary" />
                      {branch.phone}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              Have questions? We're here to help.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-2 text-primary" />
                <a
                  href="mailto:contact@cityhospital.com"
                  className="hover:underline"
                >
                  contact@cityhospital.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-2 text-primary" />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
