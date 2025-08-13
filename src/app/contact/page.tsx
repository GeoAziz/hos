import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from 'next/image';

const branchContacts = [
    { name: 'Downtown Clinic', phone: '555-123-4567', address: '123 Health St, Medical City' },
    { name: 'Uptown Medical Center', phone: '555-987-6543', address: '456 Wellness Ave, Medical City' },
    { name: 'Seaside Health', phone: '555-234-5678', address: '789 Ocean View, Bayside' },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg text-muted-foreground mt-2">
            We're here to help. Reach out with questions or for support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <Input placeholder="Your Name" />
                            <Input type="email" placeholder="Your Email" />
                            <Textarea placeholder="Your Message" rows={5} />
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-8">
                <div>
                     <h3 className="text-2xl font-bold mb-4">Our Headquarters</h3>
                     <div className="space-y-2 text-muted-foreground">
                        <p className="flex items-center"><MapPin className="h-5 w-5 mr-3 text-primary" /> 100 Main Street, Medical City</p>
                        <p className="flex items-center"><Phone className="h-5 w-5 mr-3 text-primary" /> (123) 456-7890</p>
                        <p className="flex items-center"><Mail className="h-5 w-5 mr-3 text-primary" /> contact@medibook.com</p>
                    </div>
                </div>
                 <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image src="https://placehold.co/600x400.png" alt="Map to headquarters" layout="fill" objectFit="cover" data-ai-hint="city map" />
                 </div>
            </div>
        </div>

        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Branch Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {branchContacts.map(branch => (
                    <Card key={branch.name}>
                        <CardHeader>
                            <CardTitle>{branch.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="flex items-center text-muted-foreground"><MapPin className="h-4 w-4 mr-2 text-primary" />{branch.address}</p>
                            <p className="flex items-center text-muted-foreground"><Phone className="h-4 w-4 mr-2 text-primary" />{branch.phone}</p>
                            <Button variant="outline" className="mt-2 w-full">Call Now</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
