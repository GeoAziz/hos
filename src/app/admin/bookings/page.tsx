
import { getBookings } from '@/lib/firestore-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface Booking {
  id: string;
  name: string;
  phone: string;
  date: string;
  department: string;
  branch: string;
  notes?: string;
  createdAt: string;
  status: string;
}

function formatDate(dateString: string) {
    if (!dateString) return 'N/A';
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
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

export default async function BookingsPage() {
    const bookings = await getBookings(); // Fetch all

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
                            <TableHead>Contact</TableHead>
                            <TableHead>Appointment Date</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Branch</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Submitted</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {(bookings as Booking[]).map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell className="font-medium">{booking.name}</TableCell>
                                <TableCell>{booking.phone}</TableCell>
                                <TableCell>{booking.date}</TableCell>
                                <TableCell>{booking.department}</TableCell>
                                <TableCell>{booking.branch}</TableCell>
                                <TableCell>
                                    <Badge variant={booking.status === 'pending' ? 'secondary' : 'default'}>{booking.status}</Badge>
                                </TableCell>
                                <TableCell>{formatDate(booking.createdAt)}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Confirm</DropdownMenuItem>
                                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                                            <DropdownMenuItem>Cancel</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
