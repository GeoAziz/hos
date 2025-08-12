
import { getInquiries } from '@/lib/firestore-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  isUrgent: boolean;
  department: string;
  summary: string;
  createdAt: string;
}

function formatDate(dateString: string) {
    if (!dateString) return 'N/A';
    try {
        return new Date(dateString).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch(e) {
        return dateString;
    }
}

export default async function InquiriesPage() {
    const inquiries = await getInquiries();

    return (
        <Card>
            <CardHeader>
                <CardTitle>All Inquiries</CardTitle>
                <CardDescription>Browse and manage all submitted user inquiries.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {(inquiries as Inquiry[]).map(inquiry => (
                        <AccordionItem value={inquiry.id} key={inquiry.id}>
                            <AccordionTrigger>
                                <div className="flex justify-between items-center w-full pr-4">
                                    <div className="text-left">
                                        <p className="font-semibold">{inquiry.name} <span className="font-normal text-muted-foreground">&lt;{inquiry.email}&gt;</span></p>
                                        <p className="text-sm text-muted-foreground">{formatDate(inquiry.createdAt)}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Badge variant="outline">{inquiry.department}</Badge>
                                        {inquiry.isUrgent && <Badge variant="destructive">Urgent</Badge>}
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="p-4 bg-secondary rounded-md space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-sm">AI Summary</h4>
                                        <p className="text-muted-foreground text-sm italic">"{inquiry.summary}"</p>
                                    </div>
                                    <div>
                                       <h4 className="font-semibold text-sm">Full Message</h4>
                                       <p className="text-muted-foreground text-sm whitespace-pre-wrap">{inquiry.message}</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}
