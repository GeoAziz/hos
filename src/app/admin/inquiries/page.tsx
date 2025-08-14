
import { getInquiries } from '@/lib/firestore-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { InquiryActions } from '@/components/inquiry-actions';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CircleHelp } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  isUrgent: boolean;
  department: string;
  summary: string;
  createdAt: string;
  status: 'new' | 'read' | 'archived';
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

const getStatusVariant = (status: Inquiry['status']) => {
    switch (status?.toLowerCase()) {
        case 'new':
            return 'default';
        case 'read':
            return 'secondary';
        case 'archived':
        default:
            return 'outline';
    }
};

export default async function InquiriesPage() {
    const inquiries = await getInquiries() as Inquiry[];

    return (
        <Card>
            <CardHeader>
                <CardTitle>All Inquiries</CardTitle>
                <CardDescription>Browse and manage all submitted user inquiries.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>From</TableHead>
                            <TableHead className="hidden md:table-cell">Received</TableHead>
                            <TableHead>Summary</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden lg:table-cell">Routing</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {inquiries.map(inquiry => (
                            <TableRow key={inquiry.id} className={inquiry.status === 'new' ? 'bg-secondary' : ''}>
                                <TableCell className="font-medium">
                                    <div>{inquiry.name}</div>
                                    <div className="text-sm text-muted-foreground">{inquiry.email}</div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{formatDate(inquiry.createdAt)}</TableCell>
                                <TableCell>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex items-center gap-2">
                                                    <p className="truncate max-w-xs">{inquiry.summary}</p>
                                                    <CircleHelp className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom" className="max-w-md">
                                                <h4 className="font-bold mb-2">Full Message:</h4>
                                                <p className="whitespace-pre-wrap">{inquiry.message}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </TableCell>
                                <TableCell>
                                     <Badge variant={getStatusVariant(inquiry.status)} className="capitalize">
                                        {inquiry.status || 'New'}
                                     </Badge>
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline">{inquiry.department}</Badge>
                                        {inquiry.isUrgent && <Badge variant="destructive">Urgent</Badge>}
                                    </div>
                                </TableCell>
                                <TableCell>
                                   <InquiryActions inquiryId={inquiry.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                 {inquiries.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-muted-foreground">No inquiries found.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
