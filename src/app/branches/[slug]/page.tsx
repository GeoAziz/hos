
import { getBranchBySlug, getBranches, Branch } from '@/lib/branches-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Phone, Mail, MapPin, Building, Stethoscope, User, Users } from 'lucide-react';
import Link from 'next/link';
import { GoogleMap } from '@/components/google-map';

type BranchDetailPageProps = {
    params: {
        slug: string;
    }
}

// Generate static pages for each branch for better performance and SEO
export async function generateStaticParams() {
  const branches = getBranches();
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}

export default function BranchDetailPage({ params }: BranchDetailPageProps) {
    const branch = getBranchBySlug(params.slug);

    if (!branch) {
        notFound();
    }
    
    const apiKey = process.env.GOOGLE_MAPS_API_KEY || '';

    return (
        <div className="bg-background">
            <section className="relative h-[50vh]">
                <Image
                    src={branch.imageUrl.startsWith('http') ? branch.imageUrl : `/images/${branch.imageUrl}`}
                    alt={`${branch.name} building`}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                <div className="container mx-auto px-4 relative h-full flex flex-col justify-center items-center text-center">
                    <Building className="h-16 w-16 text-primary mb-4" />
                    <h1 className="text-5xl font-bold">{branch.name}</h1>
                    <p className="text-xl mt-4 text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-5 w-5" /> {branch.address}
                    </p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <main className="lg:col-span-2 space-y-12">
                        <section id="map">
                            <Card className="overflow-hidden shadow-lg">
                                <div className="h-[400px] w-full">
                                    <GoogleMap center={branch.position} apiKey={apiKey} />
                                </div>
                            </Card>
                        </section>

                        <section id="services">
                             <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Stethoscope className="h-8 w-8 text-primary" />
                                Services Available Here
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {branch.services.map(service => (
                                    <Badge key={service} variant="secondary" className="text-base px-4 py-2">
                                        {service}
                                    </Badge>
                                ))}
                            </div>
                        </section>
                        
                        <section id="doctors">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Users className="h-8 w-8 text-primary" />
                                Our Team at this Location
                            </h2>
                            {branch.doctors.length > 0 ? (
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {branch.doctors.map(doctorName => (
                                        <Card key={doctorName}>
                                            <CardContent className="pt-6 text-center">
                                                <p className="font-semibold">{doctorName}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted-foreground">Doctor information coming soon for this branch.</p>
                            )}
                        </section>

                    </main>

                    <aside className="space-y-8">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle>Branch Information</CardTitle>
                                <CardDescription>Contact details and hours of operation.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <a href={`tel:${branch.phone}`} className="text-muted-foreground hover:text-primary">{branch.phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <a href={`mailto:${branch.email}`} className="text-muted-foreground hover:text-primary">{branch.email}</a>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Hours of Operation</h4>
                                        <ul className="text-muted-foreground text-sm">
                                           {branch.hours.map(h => <li key={h.day}><strong>{h.day}:</strong> {h.time}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                         <Button size="lg" className="w-full" asChild>
                           <Link href="/#appointment">
                             Book an Appointment
                           </Link>
                        </Button>
                    </aside>
                </div>
            </div>
        </div>
    );
}
