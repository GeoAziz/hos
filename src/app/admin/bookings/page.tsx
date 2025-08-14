
import { getBookings } from '@/lib/firestore-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { BookingActions } from '@/components/booking-actions';
import { cn } from '@/lib/utils';

interface Booking {
  id: string;
  name: string;
  phone: string;
  date: string;
  department: string;
  branch: string;
  notes?: string;
  createdAt: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'pending';
}

function formatDate(dateString: string) {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        return dateString;
    }
}

const getStatusVariant = (status: Booking['status']) => {
    switch (status?.toLowerCase()) {
        case 'confirmed':
            return 'default';
        case 'cancelled':
            return 'destructive';
        case 'pending':
        default:
            return 'secondary';
    }
};

export default async function BookingsPage() {
    const bookings = await getBookings();

    return (
        <Card>
            <CardHeader>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>View and manage all patient appointment bookings.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead className="hidden md:table-cell">Contact</TableHead>
                            <TableHead>Appointment</TableHead>
                            <TableHead className="hidden lg:table-cell">Department</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {(bookings as Booking[]).map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell className="font-medium">
                                    <div className="font-semibold">{booking.name}</div>
                                    <div className="text-sm text-muted-foreground md:hidden">{booking.phone}</div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{booking.phone}</TableCell>
                                <TableCell>
                                     <div>{booking.date}</div>
                                     <div className="text-sm text-muted-foreground">{booking.branch}</div>
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">{booking.department}</TableCell>
                                <TableCell>
                                     <Badge variant={getStatusVariant(booking.status)}>
                                        {booking.status || 'Pending'}
                                     </Badge>
                                </TableCell>
                                <TableCell>
                                   <BookingActions bookingId={booking.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
