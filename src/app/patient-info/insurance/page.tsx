
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Phone, Mail } from "lucide-react";
import Image from "next/image";

const partners = [
    { name: "Jubilee Insurance", logoUrl: "https://placehold.co/150x60.png?text=Jubilee&font=roboto", dataAiHint: "company logo" },
    { name: "Britam", logoUrl: "https://placehold.co/150x60.png?text=Britam&font=roboto", dataAiHint: "company logo" },
    { name: "UAP Old Mutual", logoUrl: "https://placehold.co/150x60.png?text=UAP&font=roboto", dataAiHint: "company logo" },
    { name: "AAR Insurance", logoUrl: "https://placehold.co/150x60.png?text=AAR&font=roboto", dataAiHint: "company logo" },
    { name: "Madison Insurance", logoUrl: "https://placehold.co/150x60.png?text=Madison&font=roboto", dataAiHint: "company logo" },
    { name: "APA Insurance", logoUrl: "https://placehold.co/150x60.png?text=APA&font=roboto", dataAiHint: "company logo" },
    { name: "CIC Insurance", logoUrl: "https://placehold.co/150x60.png?text=CIC&font=roboto", dataAiHint: "company logo" },
    { name: "GA Insurance", logoUrl: "https://placehold.co/150x60.png?text=GA&font=roboto", dataAiHint: "company logo" },
    { name: "Heritage Insurance", logoUrl: "https://placehold.co/150x60.png?text=Heritage&font=roboto", dataAiHint: "company logo" },
    { name: "Sanlam", logoUrl: "https://placehold.co/150x60.png?text=Sanlam&font=roboto", dataAiHint: "company logo" },
    { name: "Resolution Insurance", logoUrl: "https://placehold.co/150x60.png?text=Resolution&font=roboto", dataAiHint: "company logo" },
    { name: "First Assurance", logoUrl: "https://placehold.co/150x60.png?text=First+Assurance&font=roboto", dataAiHint: "company logo" },
];

export default function InsurancePage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Insurance & Direct Billing</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        We partner with leading insurance providers for your convenience.
                    </p>
                </div>

                <Card className="mb-12">
                    <CardHeader>
                        <CardTitle className="text-2xl">Our Valued Insurance Partners</CardTitle>
                        <CardDescription>We accept coverage from a wide range of providers. If you don't see your provider listed, please contact our billing department.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {partners.map(partner => (
                                <div key={partner.name} className="flex items-center justify-center p-4 bg-muted rounded-lg h-24">
                                    <div className="relative w-full h-full">
                                    <Image 
                                        src={partner.logoUrl}
                                        alt={`${partner.name} logo`}
                                        fill
                                        className="object-contain"
                                        data-ai-hint={partner.dataAiHint}
                                    />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <Card className="lg:col-span-2 bg-secondary">
                        <CardHeader>
                            <CardTitle className="text-2xl">How to Use Your Insurance Cover</CardTitle>
                            <CardDescription>Follow these simple steps to ensure a smooth process for your visit.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start">
                                <CheckCircle className="h-8 w-8 mr-4 text-primary flex-shrink-0 mt-1"/>
                                <div>
                                    <h4 className="font-bold">1. Verify Your Coverage</h4>
                                    <p className="text-muted-foreground">
                                        Before your visit, please contact your insurance provider to confirm that MediBook and the specific services you require are covered under your plan.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="h-8 w-8 mr-4 text-primary flex-shrink-0 mt-1"/>
                                <div>
                                    <h4 className="font-bold">2. Bring Your Identification</h4>
                                    <p className="text-muted-foreground">
                                        Always bring your valid insurance card, a photo ID (National ID or Passport), and any referral letters from your doctor to your appointment.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="h-8 w-8 mr-4 text-primary flex-shrink-0 mt-1"/>
                                <div>
                                    <h4 className="font-bold">3. Co-payments & Pre-authorization</h4>
                                    <p className="text-muted-foreground">
                                        Be prepared to pay any co-payment amounts at the time of service. Some procedures may require pre-authorization from your insurer; our team can assist with this process.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg sticky top-24">
                         <CardHeader className="bg-primary text-primary-foreground">
                            <CardTitle>Insurance & Billing Inquiries</CardTitle>
                            <CardDescription className="text-primary-foreground/80">Our credit department is here to help.</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                           <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1"/>
                                <div>
                                    <h4 className="font-semibold">Direct Line</h4>
                                    <a href="tel:+254700111222" className="text-muted-foreground hover:text-primary transition-colors">+254 700 111 222</a>
                                </div>
                           </div>
                           <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1"/>
                                <div>
                                    <h4 className="font-semibold">Email Address</h4>
                                    <a href="mailto:billing@medibook.com" className="text-muted-foreground hover:text-primary transition-colors">billing@medibook.com</a>
                                </div>
                           </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}
