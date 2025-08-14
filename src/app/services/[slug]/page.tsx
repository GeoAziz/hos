
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Stethoscope, Brain, Bone, Baby, Syringe, CheckCircle, ShieldCheck, Clock, Users, Link as LinkIcon, Microscope, ShieldHalf, User, Activity, Apple, Droplets, Scissors, Glasses, Ear } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const servicesData = {
    cardiology: {
        name: "Cardiology",
        icon: <Heart className="h-12 w-12 text-primary" />,
        image: "/images/service-cardiology.jpg",
        description: "Our Cardiology department provides comprehensive care for heart-related conditions. We use state-of-the-art technology for diagnosis and treatment, ensuring the best possible outcomes for our patients. From preventive care to complex surgeries, your heart is in expert hands.",
        doctors: [
            { id: "dr-evelyn-reed-cardiology", name: "Dr. Evelyn Reed", specialty: "Cardiology", imageUrl: "/images/doctor-evelyn-reed.jpg" },
        ],
        faqs: [
            { q: "What are common signs of a heart problem?", a: "Common signs include chest pain, shortness of breath, pain in the neck, jaw, or back, and swelling in the legs. If you experience these, seek medical attention immediately." },
            { q: "How can I prevent heart disease?", a: "A healthy lifestyle is key. This includes a balanced diet, regular exercise, maintaining a healthy weight, not smoking, and managing stress." },
            { q: "What is a stress test?", a: "A stress test shows how your heart works during physical activity. It can help diagnose coronary artery disease and check the effectiveness of treatments." },
        ],
        preparation: [
            "For consultations, bring a list of your current medications and any previous medical records.",
            "For diagnostic tests like an ECG or stress test, wear comfortable clothing and shoes.",
            "Follow any specific fasting instructions provided by our staff before certain tests.",
        ]
    },
    neurology: {
        name: "Neurology",
        icon: <Brain className="h-12 w-12 text-primary" />,
        image: "/images/service-neurology.jpg",
        description: "The Neurology department at MediBook specializes in the diagnosis and treatment of disorders affecting the nervous system, including the brain, spinal cord, and nerves. Our team is equipped to handle conditions like stroke, epilepsy, multiple sclerosis, and Parkinson's disease.",
        doctors: [
            { id: "dr-marcus-chen-neurology", name: "Dr. Marcus Chen", specialty: "Neurology", imageUrl: "/images/doctor-marcus-chen.jpg" },
        ],
        faqs: [
            { q: "What is an EEG?", a: "An electroencephalogram (EEG) is a test that detects electrical activity in your brain using small, metal discs (electrodes) attached to your scalp." },
            { q: "When should I see a neurologist?", a: "You should see a neurologist if you experience chronic headaches, dizziness, numbness or tingling, memory problems, or seizures." },
        ],
        preparation: [
            "Ensure you get a good night's sleep before your appointment.",
            "Avoid caffeine on the day of your test if you're scheduled for an EEG.",
            "Have a family member or friend accompany you if you're expecting a diagnosis that might be overwhelming.",
        ]
    },
     pediatrics: {
        name: "Pediatrics",
        icon: <Baby className="h-12 w-12 text-primary" />,
        image: "/images/service-pediatrics.jpg",
        description: "Our Pediatrics department is dedicated to the health and well-being of infants, children, and adolescents. We provide a friendly and comforting environment, offering everything from routine check-ups and vaccinations to specialized care for childhood illnesses.",
        doctors: [
            { id: "dr-sofia-garcia-pediatrics", name: "Dr. Sofia Garcia", specialty: "Pediatrics", imageUrl: "/images/doctor-sofia-garcia.jpg" },
        ],
        faqs: [
            { q: "What is the recommended vaccination schedule?", a: "We follow the national guidelines for vaccination. We will provide you with a personalized schedule for your child during your first visit." },
            { q: "How often should my child have a check-up?", a: "Regular check-ups are crucial for monitoring growth and development. We recommend annual check-ups for most children after the age of 3." },
        ],
        preparation: [
            "Bring your child's vaccination records to every visit.",
            "Prepare a list of any questions or concerns you have about your child's health or behavior.",
            "For younger children, bring a favorite toy or book to help them feel more comfortable.",
        ]
    },
    'primary-care': {
        name: "Primary Care",
        icon: <User className="h-12 w-12 text-primary" />,
        image: "/images/service-primary-care.jpg",
        description: "Primary care is your first point of contact for health needs. Our general practitioners offer comprehensive services including routine check-ups, preventive care, and management of chronic illnesses.",
        doctors: [
            { id: "dr-sofia-garcia-pediatrics", name: "Dr. Sofia Garcia", specialty: "General Practice", imageUrl: "/images/doctor-sofia-garcia.jpg" },
            { id: "dr-evelyn-reed-cardiology", name: "Dr. Evelyn Reed", specialty: "General Practice", imageUrl: "/images/doctor-evelyn-reed.jpg" },
        ],
        faqs: [
            { q: "What services fall under primary care?", a: "Primary care includes wellness checks, treatment for common illnesses like colds and flu, management of chronic conditions like diabetes and hypertension, vaccinations, and health education." },
            { q: "How often should I see a primary care doctor?", a: "It's recommended to have an annual check-up, even if you feel healthy, for preventive screening and to maintain a relationship with your doctor." },
        ],
        preparation: [
            "Make a list of your health concerns or questions before your visit.",
            "Bring a list of all medications you are currently taking, including over-the-counter drugs and supplements.",
        ]
    },
    'laboratory': {
        name: "Laboratory Services",
        icon: <Microscope className="h-12 w-12 text-primary" />,
        image: "/images/service-laboratory.jpg",
        description: "Our accredited laboratory provides a wide range of diagnostic tests. With advanced technology and experienced technicians, we deliver accurate and timely results to support your doctor's treatment plan.",
        doctors: [],
        faqs: [
            { q: "Do I need an appointment for lab tests?", a: "While some tests can be done on a walk-in basis, we recommend scheduling an appointment to minimize wait times. Some specialized tests require appointments." },
            { q: "How do I get my lab results?", a: "Your results will be sent directly to your referring physician, who will discuss them with you. You can also access results through our secure patient portal." },
        ],
        preparation: [
            "Follow any fasting instructions carefully. This usually means no food or drink (except water) for 8-12 hours before the test.",
            "Inform the lab technician of any medications you are taking.",
        ]
    },
    'radiology': {
        name: "Radiology & Imaging",
        icon: <ShieldHalf className="h-12 w-12 text-primary" />,
        image: "/images/service-radiology.jpg",
        description: "Our Radiology department uses advanced imaging technologies like MRI, CT scans, X-rays, and ultrasounds to get a clear picture of what's happening inside your body, aiding in accurate diagnosis.",
        doctors: [],
        faqs: [
            { q: "Are radiology procedures safe?", a: "Yes. We use the lowest dose of radiation possible to get high-quality images (ALARA principle). For non-radiation procedures like MRI and Ultrasound, there are no known long-term risks." },
            { q: "How should I prepare for an MRI?", a: "You will be asked to remove all metal objects, including jewelry, piercings, and hearing aids. Inform our staff if you have any metal implants, a pacemaker, or are pregnant." },
        ],
        preparation: [
            "Wear comfortable clothing without metal zippers or buttons.",
            "Follow any specific instructions about eating or drinking before your scan.",
            "Arrive a few minutes early to complete any necessary paperwork.",
        ]
    },
    'critical-care': {
        name: "Critical Care",
        icon: <ShieldCheck className="h-12 w-12 text-primary" />,
        image: "/images/service-critical-care.jpg",
        description: "Our Critical Care Unit (CCU) is a specialized facility dedicated to patients who require intensive monitoring and life-support. Our expert team of intensivists and nurses provides 24/7 care for the most critically ill patients.",
        doctors: [
            { id: "dr-marcus-chen-neurology", name: "Dr. Marcus Chen", specialty: "Critical Care", imageUrl: "/images/doctor-marcus-chen.jpg" },
            { id: "dr-ben-carter-orthopedics", name: "Dr. Ben Carter", specialty: "Trauma Surgery", imageUrl: "/images/doctor-ben-carter.jpg" },
        ],
        faqs: [
            { q: "What is the difference between ICU and HDU?", a: "The Intensive Care Unit (ICU) provides the highest level of care and life support. The High Dependency Unit (HDU) is a step-down unit for patients who are stable but still require close observation." },
            { q: "What are the visiting hours for the CCU?", a: "Visiting hours are restricted to ensure patients get adequate rest. Please check with the nursing station for the current policy, which is typically limited to immediate family." },
        ],
        preparation: [
            "In an emergency, call our hotline immediately.",
            "If possible, provide the patient's medical history, allergies, and current medications to the emergency team.",
        ]
    },
     'specialty-clinics': {
        name: "Specialist Clinics",
        icon: <Stethoscope className="h-12 w-12 text-primary" />,
        image: "/images/specialist-clinics-hero.jpg",
        description: "MediBook offers a wide array of specialist clinics, providing focused expertise and advanced treatments for specific medical fields. From eye care to digestive health, our specialists are here for you.",
        doctors: [
            { id: "dr-olivia-white-dermatology", name: "Dr. Olivia White", specialty: "Dermatology", imageUrl: "/images/doctor-olivia-white.jpg" },
            { id: "dr-ahmed-hassan-gastroenterology", name: "Dr. Ahmed Hassan", specialty: "Gastroenterology", imageUrl: "/images/doctor-ahmed-hassan.jpg" },
            { id: "dr-chloe-kim-ophthalmology", name: "Dr. Chloe Kim", specialty: "Ophthalmology", imageUrl: "/images/doctor-chloe-kim.jpg" },
        ],
        faqs: [
            { q: "Do I need a referral to see a specialist?", a: "While some insurance plans require a referral from a primary care physician, many of our clinics accept self-referrals. It's best to check with your insurance provider first." },
            { q: "What should I bring to my specialist appointment?", a: "Please bring your ID, insurance card, any referral letters, and relevant medical records or test results from other doctors." },
        ],
        preparation: [
            "Write down your symptoms and questions beforehand.",
            "Request that your primary care doctor send your records to the specialist's office before your visit.",
        ]
    },
};

type ServicePageProps = {
    params: {
        slug: string;
    }
}

export default function ServicePage({ params }: ServicePageProps) {
    const { slug } = params;
    const service = (servicesData as any)[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center text-white">
                <Image
                    src={service.image}
                    alt={`${service.name} cover image`}
                    fill
                    className="z-0 opacity-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30 z-10" />
                <div className="container mx-auto px-4 z-20 text-center">
                    <div className="mb-4 flex justify-center">{service.icon}</div>
                    <h1 className="text-5xl font-bold text-foreground">{service.name}</h1>
                    <p className="text-xl mt-4 text-muted-foreground max-w-3xl mx-auto">
                        Specialized care for your well-being.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <main className="lg:col-span-2">
                        <section id="description">
                            <h2 className="text-3xl font-bold mb-4">About Our {service.name} Services</h2>
                            <p className="text-muted-foreground text-lg">{service.description}</p>
                        </section>

                        <section id="preparation" className="mt-12">
                            <h2 className="text-3xl font-bold mb-6">Patient Preparation</h2>
                             <Card className="bg-secondary">
                                <CardContent className="pt-6">
                                    <ul className="space-y-4">
                                        {service.preparation.map((step: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-muted-foreground">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="faqs" className="mt-12">
                            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {service.faqs.map((faq: {q: string, a: string}, index: number) => (
                                    <AccordionItem value={`item-${index}`} key={index}>
                                        <AccordionTrigger className="text-lg text-left">{faq.q}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>
                    </main>

                    <aside className="space-y-8 lg:mt-0">
                       {service.doctors && service.doctors.length > 0 && (
                         <section id="doctors">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Our Specialists</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {service.doctors.map((doctor: {id: string, name: string, specialty: string, imageUrl: string}) => (
                                            <li key={doctor.id} className="flex items-center gap-4">
                                                <Avatar className="h-16 w-16">
                                                    <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
                                                    <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h4 className="font-semibold">{doctor.name}</h4>
                                                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                                                     <Link href={`/doctors/${doctor.id}`} className="text-sm text-primary hover:underline flex items-center gap-1 mt-1">
                                                        View Profile <LinkIcon className="h-3 w-3" />
                                                    </Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>
                       )}
                         <section id="cta">
                            <Card className="bg-primary text-primary-foreground text-center p-6">
                                <CardHeader className="p-0">
                                    <div className="flex justify-center mb-4">
                                        <ShieldCheck className="h-12 w-12" />
                                    </div>
                                    <CardTitle className="text-2xl">Book Your Consultation</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 pt-4">
                                    <p className="mb-6">Take the next step towards better health. Schedule your appointment with one of our specialists today.</p>
                                    <Button variant="secondary" size="lg" className="w-full" asChild>
                                        <Link href="/#appointment">Book an Appointment</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    );
}

// Generate static pages for each service to improve SEO
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

    