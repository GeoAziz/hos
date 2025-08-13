
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PatientRightsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Patient Rights & Responsibilities</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Our commitment to respectful, compassionate, and responsible care.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Your Rights as a Patient</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Right to Respectful Care</AccordionTrigger>
                            <AccordionContent>
                                You have the right to considerate, respectful care at all times and under all circumstances, with recognition of your personal dignity.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Right to Information</AccordionTrigger>
                            <AccordionContent>
                                You have the right to obtain complete and current information concerning your diagnosis, treatment, and any known prognosis.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Right to Privacy and Confidentiality</AccordionTrigger>
                            <AccordionContent>
                                You have the right to privacy and confidentiality for your medical records and personal information, in accordance with federal and state laws.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Right to Refuse Treatment</AccordionTrigger>
                            <AccordionContent>
                                You have the right to refuse treatment to the extent permitted by law and to be informed of the medical consequences of your action.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold mb-6">Your Responsibilities as a Patient</h2>
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="resp-1">
                            <AccordionTrigger>Providing Information</AccordionTrigger>
                            <AccordionContent>
                                You are responsible for providing, to the best of your knowledge, accurate and complete information about your health, including past illnesses, hospitalizations, and medications.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="resp-2">
                            <AccordionTrigger>Asking Questions</AccordionTrigger>
                            <AccordionContent>
                                You are responsible for asking questions when you do not understand your care, treatment, or service or what you are expected to do.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="resp-3">
                            <AccordionTrigger>Following Instructions</AccordionTrigger>
                            <AccordionContent>
                                You are responsible for following the treatment plan recommended by your healthcare provider. This includes following the instructions of nurses and allied health personnel.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="resp-4">
                            <AccordionTrigger>Respect and Consideration</AccordionTrigger>
                            <AccordionContent>
                                You are responsible for being considerate of the rights of other patients and hospital personnel and for assisting in the control of noise and the number of visitors.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
