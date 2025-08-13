
import { getBookings, getInquiries } from '@/lib/firestore-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { BookAppointmentInput } from '@/ai/flows/book-appointment-flow';
import { InquiryInput, InquiryOutput } from '@/ai/flows/inquiry-flow';
import { Calendar, MessageSquare, Users, AlertTriangle } from 'lucide-react';
import { DepartmentChart } from '@/components/department-chart';

interface Booking extends BookAppointmentInput {
  id: string;
  createdAt: string;
  status: string;
}

interface Inquiry extends InquiryInput, InquiryOutput {
    id: string;
    createdAt: string;
}

export default async function DashboardPage() {
    const bookings = await getBookings();
    const inquiries = await getInquiries();

    const totalBookings = bookings.length; 
    const urgentInquiriesCount = inquiries.filter(i => i.isUrgent).length;
    const totalInquiries = inquiries.length;

    const departmentCounts = bookings.reduce((acc, booking) => {
        const dept = booking.department || 'Unknown';
        acc[dept] = (acc[dept] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const chartData = Object.keys(departmentCounts).map(name => ({
        name,
        total: departmentCounts[name],
    }));

    const recentBookings = bookings.slice(0, 5);
    const recentInquiries = inquiries.slice(0, 5);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalBookings}</div>
                        <p className="text-xs text-muted-foreground">All-time bookings</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalInquiries}</div>
                        <p className="text-xs text-muted-foreground">All-time inquiries</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Urgent Inquiries</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{urgentInquiriesCount}</div>
                        <p className="text-xs text-muted-foreground">Require immediate attention</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Bookings by Department</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {chartData.length > 0 ? <DepartmentChart data={chartData} /> : <p className="text-muted-foreground text-center">No booking data available for chart.</p>}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Patient</TableHead>
                                    <TableHead>Department</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentBookings.map((booking: Booking) => (
                                    <TableRow key={booking.id}>
                                        <TableCell>
                                            <div className="font-medium">{booking.name}</div>
                                            <div className="text-sm text-muted-foreground">{booking.phone}</div>
                                        </TableCell>
                                        <TableCell>{booking.department}</TableCell>
                                        <TableCell>{booking.date}</TableCell>
                                        <TableCell>
                                            <Badge variant={booking.status === 'pending' ? 'secondary' : 'default'}>{booking.status}</Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
