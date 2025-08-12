import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Siren, Phone, HeartPulse, ShieldCheck, Ambulance } from "lucide-react";

export default function EmergencyPage() {
  return (
    <div className="bg-background text-foreground">
        <section className="bg-destructive text-destructive-foreground text-center py-20">
            <div className="container mx-auto px-4">
                <Siren className="h-16 w-16 mx-auto mb-4" />
                <h1 className="text-5xl font-bold">Emergency & Critical Care</h1>
                <p className="text-2xl mt-4">Immediate, life-saving care when you need it most.</p>
                <Button variant="secondary" size="lg" className="mt-8">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Emergency: 123-456-7890
                </Button>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold">Our Emergency Services</h2>
                     <p className="text-muted-foreground mt-2">Available 24 hours a day, 7 days a week.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-center mb-2">
                                <Ambulance className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-center">24/7 Ambulance Service</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-center text-muted-foreground">Our fleet of fully-equipped ambulances are ready to respond to any emergency, providing critical care on the move.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                             <div className="flex justify-center mb-2">
                                <HeartPulse className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-center">Level I Trauma Center</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-muted-foreground">Equipped to handle the most critical injuries and medical emergencies with a team of specialized trauma surgeons and staff.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="flex justify-center mb-2">
                                <ShieldCheck className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="text-center">Critical Care Unit (CCU)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-center text-muted-foreground">Our CCU provides intensive monitoring and treatment for patients with life-threatening conditions.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="py-20 bg-secondary">
             <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl font-bold">What to Do in an Emergency</h2>
                 <div className="max-w-3xl mx-auto mt-6 text-left space-y-4">
                    <p><strong>1. Stay Calm:</strong> Try to remain as calm as possible to think clearly.</p>
                    <p><strong>2. Call for Help Immediately:</strong> Dial our emergency number or your local emergency line. Provide your location and the nature of the emergency.</p>
                    <p><strong>3. Do Not Move the Person (if injured):</strong> Unless they are in immediate danger, avoid moving someone who may have a neck or spine injury.</p>
                    <p><strong>4. Provide Basic First Aid if Able:</strong> If you are trained, provide basic first aid like controlling bleeding with direct pressure.</p>
                    <p><strong>5. Gather Information:</strong> If possible, collect information about the patient's medical history, allergies, and current medications.</p>
                 </div>
             </div>
        </section>
    </div>
  );
}
