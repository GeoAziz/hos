import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const partners = [
    { name: "MediCare Plus", logoUrl: "https://source.unsplash.com/150x50/?logo,abstract,blue", hint: "insurance logo" },
    { name: "HealthGuard", logoUrl: "https://source.unsplash.com/150x50/?logo,abstract,green", hint: "insurance logo" },
    { name: "United Wellness", logoUrl: "https://source.unsplash.com/150x50/?logo,abstract,red", hint: "insurance logo" },
    { name: "Vitality Shield", logoUrl: "https://source.unsplash.com/150x50/?logo,abstract,shield", hint: "insurance logo" },
    { name: "Prime Health", logoUrl: "https://source.unsplash.com/150x50/?logo,abstract,orange", hint: "insurance logo" },
    { name: "Cigna", logoUrl: "https://source.unsplash.com/150x50/?logo,abstract,purple", hint: "insurance logo" },
    { name: "Aetna", logoUrl: "https://source.unsplash.com/150x50/?logo,abstract,teal", hint: "insurance logo" },
    { name: "BlueCross", logoUrl: "https://source.unsplash.com/150x50/?logo,abstract,cross", hint: "insurance logo" },
];

export default function InsurancePage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Insurance Partners</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    We partner with leading insurance providers for your convenience.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {partners.map(partner => (
                    <Card key={partner.name} className="flex items-center justify-center p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative w-40 h-16">
                           <Image 
                             src={partner.logoUrl}
                             alt={`${partner.name} logo`}
                             layout="fill"
                             objectFit="contain"
                             data-ai-hint={partner.hint}
                           />
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="mt-16 bg-secondary">
                <CardHeader>
                    <CardTitle className="text-2xl">How to Use Your Insurance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1"/>
                        <p className="text-muted-foreground">
                            <strong>Check Coverage:</strong> Before your visit, please contact your insurance provider to confirm that MediBook and the specific services you need are covered under your plan.
                        </p>
                    </div>
                     <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1"/>
                        <p className="text-muted-foreground">
                            <strong>Bring Your Card:</strong> Always bring your insurance card and a valid photo ID to your appointment.
                        </p>
                    </div>
                     <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1"/>
                        <p className="text-muted-foreground">
                            <strong>Co-payments:</strong> All co-payments are due at the time of service. We accept cash, credit cards, and debit cards.
                        </p>
                    </div>
                     <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1"/>
                        <p className="text-muted-foreground">
                            <strong>Questions:</strong> Our billing department is happy to assist with any questions about your coverage or bill. Please call us at (123) 555-BILL.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
