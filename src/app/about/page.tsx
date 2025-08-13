
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Building, Heart, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image 
          src="https://placehold.co/1600x600.png"
          alt="MediBook Hospital Building"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
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
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                To provide compassionate, accessible, high-quality, and cost-effective healthcare to the community; to promote health; to educate healthcare professionals; and to participate in appropriate clinical research.
              </p>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading healthcare provider in the region, recognized for our commitment to patient-centered care, clinical excellence, and innovative health solutions. We aspire to create a healthier future for all.
              </p>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png"
                alt="Diverse team of doctors"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="doctors team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MediBook at a Glance</h2>
            <p className="text-muted-foreground mt-2">Our commitment by the numbers</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold">500,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Patients Served Annually</p>
              </CardContent>
            </Card>
             <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold">30+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Years of Experience</p>
              </CardContent>
            </Card>
             <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold">1,200+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Dedicated Staff</p>
              </CardContent>
            </Card>
             <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Building className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold">10+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Branches Nationwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
